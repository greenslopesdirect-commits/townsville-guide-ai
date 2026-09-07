#!/usr/bin/env node
/**
 * Verifies the static prerendered output in dist/ for every sitemap route
 * plus dist/404.html. Read-only — reports pass/fail, does not modify files.
 */
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = resolve(ROOT, "dist");
const SITE = "https://www.townsvilleguide.com.au";

const HOMEPAGE_GENERIC_TITLE = "Townsville Guide — Townsville's Trusted Local Travel Guide";
const HOMEPAGE_GENERIC_DESC =
  "Townsville's trusted local travel guide — beaches, food, events, dog-friendly spots and real North Queensland insight.";

let failCount = 0;
let passCount = 0;
const failures = [];

function check(routePath, label, ok, detail) {
  if (ok) {
    passCount++;
  } else {
    failCount++;
    failures.push(`${routePath}  [${label}]  ${detail || ""}`);
  }
}

function count(re, html) {
  return (html.match(re) || []).length;
}

// ---- sitemap parity --------------------------------------------------------
const sitemapXml = readFileSync(resolve(ROOT, "public/sitemap.xml"), "utf-8");
const sitemapRoutes = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((m) => m[1].replace(SITE, "") || "/")
  .sort();

console.log(`Sitemap URL count: ${sitemapRoutes.length} (expected 47)`);
check("sitemap", "url-count", sitemapRoutes.length === 47, `got ${sitemapRoutes.length}`);

const NOINDEX_ROUTES = ["/privacy-policy", "/terms-of-use", "/affiliate-disclosure", "/cookie-policy"];
for (const r of NOINDEX_ROUTES) {
  check("sitemap", `noindex-excluded:${r}`, !sitemapRoutes.includes(r), "noindex page found in sitemap");
}

// ---- per-route checks -------------------------------------------------------
const allRoutes = [...sitemapRoutes, ...NOINDEX_ROUTES];

for (const routePath of allRoutes) {
  const filePath = routePath === "/" ? resolve(DIST, "index.html") : resolve(DIST, "." + routePath, "index.html");
  if (!existsSync(filePath)) {
    check(routePath, "file-exists", false, `missing ${filePath.replace(ROOT, "")}`);
    continue;
  }
  const html = readFileSync(filePath, "utf-8");
  const isNoindexRoute = NOINDEX_ROUTES.includes(routePath);

  const titleMatches = [...html.matchAll(/<title>([\s\S]*?)<\/title>/g)];
  check(routePath, "exactly-one-title", titleMatches.length === 1, `found ${titleMatches.length}`);
  const title = titleMatches[0]?.[1] || "";

  const descCount = count(/<meta name="description" content="[^"]*"\s*\/?>/g, html);
  check(routePath, "exactly-one-description", descCount === 1, `found ${descCount}`);

  const canonicalMatches = [...html.matchAll(/<link rel="canonical" href="([^"]*)"\s*\/?>/g)];
  check(routePath, "exactly-one-canonical", canonicalMatches.length === 1, `found ${canonicalMatches.length}`);
  const canonical = canonicalMatches[0]?.[1] || "";
  const expectedCanonical = routePath === "/" ? `${SITE}/` : `${SITE}${routePath}`;
  check(routePath, "canonical-matches-route", canonical === expectedCanonical, `${canonical} !== ${expectedCanonical}`);
  check(routePath, "canonical-uses-www", canonical.startsWith("https://www.townsvilleguide.com.au"), canonical);

  const robotsMatches = [...html.matchAll(/<meta name="robots" content="([^"]*)"\s*\/?>/g)];
  check(routePath, "exactly-one-robots", robotsMatches.length === 1, `found ${robotsMatches.length}`);
  const robots = robotsMatches[0]?.[1] || "";
  if (isNoindexRoute) {
    check(routePath, "robots-noindex", robots === "noindex, follow", robots);
  } else {
    check(routePath, "robots-index", robots === "index, follow", robots);
  }

  for (const [tag, re] of [
    ["og:title", /<meta property="og:title" content="[^"]*"\s*\/?>/g],
    ["og:description", /<meta property="og:description" content="[^"]*"\s*\/?>/g],
    ["og:image", /<meta property="og:image" content="[^"]*"\s*\/?>/g],
    ["og:url", /<meta property="og:url" content="[^"]*"\s*\/?>/g],
    ["twitter:title", /<meta name="twitter:title" content="[^"]*"\s*\/?>/g],
    ["twitter:description", /<meta name="twitter:description" content="[^"]*"\s*\/?>/g],
    ["twitter:image", /<meta name="twitter:image" content="[^"]*"\s*\/?>/g],
  ]) {
    const n = count(re, html);
    check(routePath, `${tag}-present-once`, n === 1, `found ${n}`);
  }

  const ogUrlMatch = html.match(/<meta property="og:url" content="([^"]*)"\s*\/?>/);
  if (ogUrlMatch) check(routePath, "og:url-matches-canonical", ogUrlMatch[1] === canonical, `${ogUrlMatch[1]} !== ${canonical}`);

  const jsonLdBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  let validSchemaCount = 0;
  for (const m of jsonLdBlocks) {
    try {
      JSON.parse(m[1]);
      validSchemaCount++;
    } catch (e) {
      check(routePath, "json-ld-valid", false, `invalid JSON: ${e.message}`);
    }
  }
  check(routePath, "json-ld-present", jsonLdBlocks.length >= 2, `found ${jsonLdBlocks.length} (expects at least sitewide Organization + SoftwareApplication)`);

  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  check(routePath, "visible-h1-present", !!h1Match, "no <h1> in body content");

  const rootStart = html.indexOf('<div id="root">');
  const bodyEnd = html.lastIndexOf("</body>");
  const bodyLen = rootStart !== -1 && bodyEnd !== -1 ? bodyEnd - rootStart : 0;
  check(routePath, "visible-body-content", bodyLen > 500, `root content length ${bodyLen}`);

  if (routePath !== "/") {
    check(routePath, "no-homepage-title-fallback", title !== HOMEPAGE_GENERIC_TITLE, title);
    check(
      routePath,
      "no-homepage-description-fallback",
      !html.includes(`<meta name="description" content="${HOMEPAGE_GENERIC_DESC}"`),
      "description matches generic homepage copy"
    );
  }
}

// ---- 404.html ---------------------------------------------------------------
const path404 = resolve(DIST, "404.html");
if (!existsSync(path404)) {
  check("404.html", "exists", false, "dist/404.html not found");
} else {
  const html = readFileSync(path404, "utf-8");
  check("404.html", "exists", true);

  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
  check("404.html", "title-present", !!titleMatch, "no <title>");
  check("404.html", "title-not-homepage", titleMatch?.[1] !== HOMEPAGE_GENERIC_TITLE, titleMatch?.[1]);
  check("404.html", "title-mentions-not-found", /not found/i.test(titleMatch?.[1] || ""), titleMatch?.[1]);

  const robotsMatch = html.match(/<meta name="robots" content="([^"]*)"\s*\/?>/);
  check("404.html", "robots-noindex-follow", robotsMatch?.[1] === "noindex, follow", robotsMatch?.[1]);

  check("404.html", "no-canonical", !html.includes('<link rel="canonical"'), "canonical tag present");
  check("404.html", "no-probe-url", !html.includes("prerender-404-probe"), "probe URL leaked into output");

  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  check("404.html", "h1-present", !!h1Match, "no <h1>");
  check("404.html", "h1-is-404", /404/.test(h1Match?.[1] || ""), h1Match?.[1]);

  const homepageHtml = readFileSync(resolve(DIST, "index.html"), "utf-8");
  check("404.html", "not-identical-to-homepage", html !== homepageHtml, "byte-identical to dist/index.html");
}

// ---- summary ------------------------------------------------------------------
console.log(`\n${passCount} checks passed, ${failCount} checks failed.`);
if (failures.length) {
  console.log("\nFailures:");
  for (const f of failures) console.log(" - " + f);
  process.exit(1);
} else {
  console.log("All checks passed.");
}
