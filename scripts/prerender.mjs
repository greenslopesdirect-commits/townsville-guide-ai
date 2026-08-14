#!/usr/bin/env node
/**
 * Static prerender for crawler visibility.
 *
 * react-helmet's DOM-commit mechanism does not work reliably in this project
 * (confirmed by direct testing: zero head mutation across multiple Helmet
 * versions, in both dev and production builds). Rather than depend on it,
 * this script:
 *
 *   1. Reads public/sitemap.xml as the single source of indexable routes.
 *   2. Serves the built dist/ from an in-memory SPA-fallback static server.
 *   3. For each route, drives a real headless-Chromium render of the actual
 *      built app (via Puppeteer) and waits for the page's own H1 as the
 *      render-completion signal.
 *   4. Reads back the EXACT values each page already passes to <SEOHead>/
 *      <Helmet> — not by relying on Helmet's broken DOM commit, but by:
 *        - a plain synchronous window global SEOHead already publishes
 *          during render (src/lib/seoRegistry.ts) for title/description/
 *          canonical/OG type/image/noindex, and
 *        - walking the React fiber tree to read react-helmet's own already-
 *          PARSED `script` prop (react-helmet turns <script> JSX children
 *          into a structured `props.script` array before any DOM commit is
 *          attempted, so this is available regardless of the commit bug) for
 *          each page's Article/BreadcrumbList/FAQPage JSON-LD.
 *   5. Builds a new static <head> from the original dist/index.html template
 *      (keeping GA, GSC verification, favicon, sitewide Organization/
 *      SoftwareApplication schema) with the route-specific tags swapped in,
 *      and writes the captured body HTML into the root div.
 *   6. Writes dist/<route>/index.html for every sitemap route (dist/index.html
 *      for the homepage), plus the four noindex legal pages (present for
 *      usability, never added to the sitemap), plus dist/404.html from the
 *      existing NotFound page.
 *
 * React still owns hydration for real browsers: main.tsx's createRoot(...).
 * render() replaces the prerendered markup with a fresh client render on
 * load, so nothing here changes runtime behaviour for users.
 */

import puppeteer from "puppeteer";
import http from "node:http";
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from "node:fs";
import { resolve, dirname, join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = resolve(ROOT, "dist");
const SITE = "https://www.townsvilleguide.com.au";
const PORT = 4174;
const BASE = `http://localhost:${PORT}`;
const NOT_FOUND_PROBE = "/__prerender-404-probe__";

const NOINDEX_ROUTES = [
  "/privacy-policy",
  "/terms-of-use",
  "/affiliate-disclosure",
  "/cookie-policy",
];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webmanifest": "application/manifest+json",
  ".pdf": "application/pdf",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

function escapeHtml(s) {
  return String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function escapeJsonForScript(obj) {
  // Prevent premature </script> termination inside JSON-LD content.
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

if (!existsSync(DIST)) {
  console.error("[prerender] dist/ not found — run `npm run build` first.");
  process.exit(1);
}

// ---- 1. Route list from sitemap.xml -------------------------------------
const sitemapXml = readFileSync(resolve(ROOT, "public/sitemap.xml"), "utf-8");
const sitemapRoutes = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((m) => m[1].replace(SITE, "") || "/")
  .sort();

console.log(`[prerender] ${sitemapRoutes.length} sitemap routes found.`);

// ---- 2. In-memory SPA-fallback static server -----------------------------
// The original index.html is held in memory so later writes to dist/*/index.html
// (including overwriting dist/index.html for the homepage, done LAST) never
// corrupt the fallback shell used to render every other in-progress route.
const originalIndexHtml = readFileSync(resolve(DIST, "index.html"), "utf-8");

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split("?")[0]);
  const filePath = join(DIST, urlPath);
  if (urlPath !== "/" && existsSync(filePath) && statSync(filePath).isFile()) {
    const ext = extname(filePath);
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    res.end(readFileSync(filePath));
    return;
  }
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(originalIndexHtml);
});

await new Promise((res) => server.listen(PORT, res));
console.log(`[prerender] serving dist/ at ${BASE}`);

// ---- 3-4. Puppeteer extraction --------------------------------------------
const browser = await puppeteer.launch({ headless: "new" });

async function extractRoute(routePath, { isProbe = false } = {}) {
  const page = await browser.newPage();
  await page.goto(`${BASE}${routePath}`, { waitUntil: "networkidle0", timeout: 30000 });
  try {
    await page.waitForSelector("h1", { timeout: 10000 });
  } catch {
    console.warn(`[prerender] WARNING: no H1 found for ${routePath} within timeout`);
  }
  await new Promise((r) => setTimeout(r, 300)); // let SEOHead's render-time publish settle

  const data = await page.evaluate(() => {
    const seo = window.__TSG_SEO__ || null;
    const rootEl = document.getElementById("root");
    const bodyHtml = rootEl ? rootEl.innerHTML : "";
    const h1 = document.querySelector("h1")?.innerText || null;

    const schemas = [];
    if (rootEl) {
      const fiberKey = Object.keys(rootEl).find(
        (k) => k.startsWith("__reactFiber$") || k.startsWith("__reactContainer$")
      );
      if (fiberKey) {
        const seen = new Set();
        const isHelmetType = (type) => {
          if (!type) return false;
          const name = type.displayName || type.name || "";
          return name.includes("Helmet") || name.includes("SideEffect");
        };
        const walk = (fiber) => {
          if (!fiber || seen.has(fiber)) return;
          seen.add(fiber);
          if (isHelmetType(fiber.type)) {
            const src = fiber.memoizedProps || fiber.pendingProps;
            const scripts = (src && src.script) || [];
            scripts.forEach((s) => {
              const raw = s.innerHTML || s.children || "";
              try {
                schemas.push(JSON.parse(raw));
              } catch {
                /* skip unparsable */
              }
            });
          }
          if (fiber.child) walk(fiber.child);
          if (fiber.sibling) walk(fiber.sibling);
        };
        walk(rootEl[fiberKey]);
      }
    }
    return { seo, bodyHtml, schemas, h1 };
  });

  await page.close();

  if (!isProbe) {
    if (!data.seo) console.warn(`[prerender] WARNING: no SEO registry data for ${routePath}`);
    if (!data.h1) console.warn(`[prerender] WARNING: no H1 captured for ${routePath}`);
  }
  return data;
}

// ---- 5. Static HTML assembly ----------------------------------------------
function buildHead(routeData, routePath) {
  const seo = routeData.seo;
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
  const schemaScripts = routeData.schemas
    .map((s) => `<script type="application/ld+json">${escapeJsonForScript(s)}</script>`)
    .join("\n    ");

  const injected = [canonicalTag, robotsTags, schemaScripts].filter(Boolean).join("\n    ");
  html = html.replace("</head>", `    ${injected}\n  </head>`);

  return html;
}

function build404Head() {
  const seo = extract404Seo;
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

// ---- 6. Run for every route -------------------------------------------------
const results = [];
let extract404Seo = null;

// Process non-homepage routes first, homepage last (see server comment above).
const nonHome = sitemapRoutes.filter((r) => r !== "/");
const homeRoute = sitemapRoutes.includes("/") ? "/" : null;
const orderedRoutes = [...nonHome, ...NOINDEX_ROUTES, ...(homeRoute ? [homeRoute] : [])];

for (const routePath of orderedRoutes) {
  const data = await extractRoute(routePath);
  const html = buildHead(data, routePath).replace(
    '<div id="root"></div>',
    `<div id="root">${data.bodyHtml}</div>`
  );
  const outPath = writeRouteFile(routePath, html);
  results.push({ routePath, outPath, h1: data.h1, title: data.seo?.title, schemaCount: data.schemas.length });
  console.log(`[prerender] ${routePath} -> ${outPath.replace(ROOT, "")}  (h1: ${data.h1 ? "ok" : "MISSING"}, schema: ${data.schemas.length})`);
}

// ---- 7. 404 -----------------------------------------------------------------
const probeData = await extractRoute(NOT_FOUND_PROBE, { isProbe: true });
extract404Seo = probeData.seo;
const html404 = build404Head().replace('<div id="root"></div>', `<div id="root">${probeData.bodyHtml}</div>`);
writeFileSync(resolve(DIST, "404.html"), html404, "utf-8");
console.log(`[prerender] 404 -> dist/404.html (h1: ${probeData.h1 ? "ok" : "MISSING"}, title: ${probeData.seo?.title})`);

server.close();
await browser.close();

console.log(`[prerender] Done. ${results.length} routes + 404.html written.`);
