#!/usr/bin/env node
/**
 * Static prerender for crawler visibility — true server-side rendering.
 *
 * This used to drive a real headless-Chromium browser (Puppeteer) across the
 * built client app to capture rendered HTML and SEO data. That never ran as
 * part of the actual production build (only in this repo's own CI checks),
 * so every deployed route silently served the bare SPA shell with the
 * homepage's title/description baked in.
 *
 * This version instead renders each route directly in Node, via
 * `vite build --ssr src/entry-server.tsx` + `renderToPipeableStream`. No
 * browser binary, no Puppeteer/Chromium download — safe to run as an
 * ordinary step of `npm run build` on any plain Node build environment
 * (see package.json's "build" script, which builds dist-ssr/ before this
 * script runs). See src/entry-server.tsx for the render + SEO-extraction
 * details (react-helmet's DOM-commit is broken client-side in this project,
 * but its server-side static extraction is a separate, working code path).
 *
 * Output contract is unchanged from the previous script: dist/<route>/
 * index.html for every sitemap route (dist/index.html for the homepage),
 * the four noindex legal pages, and dist/404.html.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = resolve(ROOT, "dist");
const DIST_SSR = resolve(ROOT, "dist-ssr");
const SITE = "https://www.townsvilleguide.com.au";
const NOT_FOUND_PROBE = "/__prerender-404-probe__";

const NOINDEX_ROUTES = [
  "/privacy-policy",
  "/terms-of-use",
  "/affiliate-disclosure",
  "/cookie-policy",
];

function escapeHtml(s) {
  return String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

if (!existsSync(DIST)) {
  console.error("[prerender] dist/ not found — run `vite build` first.");
  process.exit(1);
}
const entryServerPath = resolve(DIST_SSR, "entry-server.js");
if (!existsSync(entryServerPath)) {
  console.error("[prerender] dist-ssr/entry-server.js not found — run `vite build --ssr src/entry-server.tsx --outDir dist-ssr` first.");
  process.exit(1);
}

// ---- 1. Route list from sitemap.xml -------------------------------------
const sitemapXml = readFileSync(resolve(ROOT, "public/sitemap.xml"), "utf-8");
const sitemapRoutes = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((m) => m[1].replace(SITE, "") || "/")
  .sort();

console.log(`[prerender] ${sitemapRoutes.length} sitemap routes found.`);

const originalIndexHtml = readFileSync(resolve(DIST, "index.html"), "utf-8");
const { render } = await import(`file://${entryServerPath.replace(/\\/g, "/")}`);

// ---- 2. Static HTML assembly ----------------------------------------------
function buildHead(seo, schemaHtml, routePath) {
  const canonical = seo?.canonical || `${SITE}${routePath}`;
  const title = seo?.title || "Townsville Guide — Townsville's Trusted Local Travel Guide";
  const description = seo?.description || "";
  const ogImage = seo?.ogImage || `${SITE}/og-image.jpg`;
  const ogType = seo?.ogType || "website";
  const noindex = !!seo?.noindex;
  const robots = noindex ? "noindex, follow" : "index, follow";

  let html = originalIndexHtml;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(description)}" />`
  );
  html = html.replace(
    /<meta property="og:type" content="[^"]*"\s*\/?>/,
    `<meta property="og:type" content="${escapeHtml(ogType)}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeHtml(title)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeHtml(description)}" />`
  );
  html = html.replace(
    /<meta property="og:image" content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${escapeHtml(ogImage)}" />`
  );
  html = html.replace(
    /<meta name="twitter:url" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:url" content="${escapeHtml(canonical)}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`
  );
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${escapeHtml(ogImage)}" />`
  );

  const canonicalTag = `<link rel="canonical" href="${escapeHtml(canonical)}" />`;
  const robotsTags = `<meta name="robots" content="${robots}" />\n    <meta name="googlebot" content="${robots}" />`;

  const injected = [canonicalTag, robotsTags, schemaHtml].filter(Boolean).join("\n    ");
  html = html.replace("</head>", `    ${injected}\n  </head>`);

  return html;
}

function build404Head(seo) {
  const title = seo?.title || "Page Not Found | Townsville Guide";
  const description = seo?.description || "Sorry, this page could not be found.";

  let html = originalIndexHtml;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(description)}" />`
  );
  // No canonical, no og:url/twitter:url carrying the probe path — strip them entirely.
  html = html.replace(/\s*<meta property="og:url" content="[^"]*"\s*\/?>\n?/, "\n");
  html = html.replace(/\s*<meta name="twitter:url" content="[^"]*"\s*\/?>\n?/, "\n");
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeHtml(title)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeHtml(description)}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`
  );

  const robotsTags = `<meta name="robots" content="noindex, follow" />\n    <meta name="googlebot" content="noindex, follow" />`;
  html = html.replace("</head>", `    ${robotsTags}\n  </head>`);
  return html;
}

function writeRouteFile(routePath, html) {
  if (routePath === "/") {
    writeFileSync(resolve(DIST, "index.html"), html, "utf-8");
    return resolve(DIST, "index.html");
  }
  const dir = resolve(DIST, "." + routePath);
  mkdirSync(dir, { recursive: true });
  const outPath = join(dir, "index.html");
  writeFileSync(outPath, html, "utf-8");
  return outPath;
}

// ---- 3. Run for every route -------------------------------------------------
const results = [];

const nonHome = sitemapRoutes.filter((r) => r !== "/");
const homeRoute = sitemapRoutes.includes("/") ? "/" : null;
const orderedRoutes = [...nonHome, ...NOINDEX_ROUTES, ...(homeRoute ? [homeRoute] : [])];

for (const routePath of orderedRoutes) {
  const { html: bodyHtml, seo, schemaHtml } = await render(routePath);
  const h1 = bodyHtml.match(/<h1[^>]*>(.*?)<\/h1>/)?.[1] ?? null;
  if (!seo) console.warn(`[prerender] WARNING: no SEO registry data for ${routePath}`);
  if (!h1) console.warn(`[prerender] WARNING: no H1 captured for ${routePath}`);

  const html = buildHead(seo, schemaHtml, routePath).replace(
    '<div id="root"></div>',
    `<div id="root">${bodyHtml}</div>`
  );
  const outPath = writeRouteFile(routePath, html);
  const schemaCount = (schemaHtml.match(/<script/g) || []).length;
  results.push({ routePath, outPath, h1, title: seo?.title, schemaCount });
  console.log(`[prerender] ${routePath} -> ${outPath.replace(ROOT, "")}  (h1: ${h1 ? "ok" : "MISSING"}, schema: ${schemaCount})`);
}

// ---- 4. 404 -----------------------------------------------------------------
const { html: probeBodyHtml, seo: probeSeo } = await render(NOT_FOUND_PROBE);
const probeH1 = probeBodyHtml.match(/<h1[^>]*>(.*?)<\/h1>/)?.[1] ?? null;
const html404 = build404Head(probeSeo).replace('<div id="root"></div>', `<div id="root">${probeBodyHtml}</div>`);
writeFileSync(resolve(DIST, "404.html"), html404, "utf-8");
console.log(`[prerender] 404 -> dist/404.html (h1: ${probeH1 ? "ok" : "MISSING"}, title: ${probeSeo?.title})`);

// ---- 5. Clean up the intermediate SSR bundle --------------------------------
// Not needed once every route has been rendered to static HTML in dist/.
rmSync(DIST_SSR, { recursive: true, force: true });

console.log(`[prerender] Done. ${results.length} routes + 404.html written.`);
