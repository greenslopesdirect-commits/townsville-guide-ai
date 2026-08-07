#!/usr/bin/env node
/**
 * Generates public/sitemap.xml from an explicit URL -> source-file map.
 *
 * Each <lastmod> is derived from the source file's LAST GIT COMMIT DATE
 * (`git log -1 --format=%cs -- <file>`). If git is unavailable or the file
 * is untracked, it falls back to the filesystem mtime.
 *
 * Why git log instead of mtime: build sandboxes (including Lovable's) re-check-out
 * files on every build, so mtime = build day for every file. Git commit date is the
 * only reliable signal of when a page was actually edited.
 *
 * Runs automatically via the "prebuild" npm script, so it re-runs before every
 * `vite build` (and therefore before every Lovable publish).
 *
 * To add a new page: add one entry to PAGES below.
 */

import { statSync, writeFileSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";


const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const SITE = "https://www.townsvilleguide.com.au";
const OUTPUT = resolve(ROOT, "public/sitemap.xml");

/**
 * path:       URL path on the site (leading slash; use "/" for homepage)
 * source:     project-relative source file whose mtime drives <lastmod>
 * changefreq: sitemap changefreq hint
 * priority:   sitemap priority (0.0 - 1.0)
 */
const PAGES = [
  { path: "/",                                    source: "src/pages/Index.tsx",                       changefreq: "weekly",  priority: "1.0" },
  { path: "/townsville-without-a-car",            source: "src/pages/TownsvilleWithoutACar.tsx",      changefreq: "monthly", priority: "0.9" },
  { path: "/townsville-in-one-day",                source: "src/pages/TownsvilleInOneDay.tsx",         changefreq: "monthly", priority: "0.9" },
  { path: "/first-time-in-townsville",            source: "src/pages/FirstTimeInTownsville.tsx",       changefreq: "monthly", priority: "0.9" },
  { path: "/history",                             source: "src/pages/HistoryOfTownsville.tsx",         changefreq: "monthly", priority: "0.8" },
  { path: "/things-to-do",                        source: "src/pages/ThingsToDo.tsx",                  changefreq: "weekly",  priority: "0.9" },
  { path: "/beaches",                             source: "src/pages/Beaches.tsx",                     changefreq: "weekly",  priority: "0.9" },
  { path: "/food",                                source: "src/pages/FoodDrink.tsx",                   changefreq: "weekly",  priority: "0.9" },
  { path: "/events",                              source: "src/pages/Events.tsx",                      changefreq: "daily",   priority: "0.8" },
  { path: "/dog-friendly",                        source: "src/pages/DogFriendly.tsx",                 changefreq: "weekly",  priority: "0.7" },
  { path: "/shopping",                            source: "src/pages/Shopping.tsx",                    changefreq: "weekly",  priority: "0.7" },
  { path: "/nature",                              source: "src/pages/Nature.tsx",                      changefreq: "weekly",  priority: "0.7" },
  { path: "/accommodation",                       source: "src/pages/Accommodation.tsx",               changefreq: "weekly",  priority: "0.8" },
  { path: "/local-tips",                          source: "src/pages/LocalTips.tsx",                   changefreq: "weekly",  priority: "0.8" },
  { path: "/flights",                             source: "src/pages/FlightsToTownsville.tsx",         changefreq: "weekly",  priority: "0.6" },
  { path: "/advertise",                           source: "src/pages/Advertise.tsx",                   changefreq: "monthly", priority: "0.8" },
  { path: "/contact",                             source: "src/pages/Contact.tsx",                     changefreq: "monthly", priority: "0.5" },
  { path: "/the-strand",                          source: "src/pages/TheStrand.tsx",                   changefreq: "weekly",  priority: "0.8" },
  { path: "/riverway",                            source: "src/pages/Riverway.tsx",                    changefreq: "monthly", priority: "0.8" },
  { path: "/castle-hill",                         source: "src/pages/CastleHill.tsx",                  changefreq: "monthly", priority: "0.8" },
  { path: "/guides/paluma-day-trip",             source: "src/pages/PalumaDayTrip.tsx",               changefreq: "monthly", priority: "0.8" },
  { path: "/guides/walking-castle-hill",          source: "src/pages/WalkingCastleHill.tsx",           changefreq: "monthly", priority: "0.7" },
  { path: "/billabong-sanctuary",                 source: "src/pages/BillabongSanctuary.tsx",          changefreq: "monthly", priority: "0.7" },
  { path: "/great-barrier-reef-townsville",       source: "src/pages/GreatBarrierReef.tsx",            changefreq: "monthly", priority: "0.8" },
  { path: "/little-crystal-creek-townsville",     source: "src/pages/LittleCrystalCreek.tsx",          changefreq: "monthly", priority: "0.7" },
  { path: "/pallarenda-beach",                    source: "src/pages/PallarendaBeach.tsx",             changefreq: "monthly", priority: "0.6" },
  { path: "/rowes-bay",                           source: "src/pages/RowesBay.tsx",                    changefreq: "monthly", priority: "0.6" },
  { path: "/townsville-with-kids",                source: "src/pages/TownsvilleWithKids.tsx",          changefreq: "monthly", priority: "0.7" },
  { path: "/cowboys-stadium-guide",               source: "src/pages/CowboysStadiumGuide.tsx",         changefreq: "monthly", priority: "0.7" },
  { path: "/north-shore-townsville",              source: "src/pages/NorthShoreTownsville.tsx",        changefreq: "monthly", priority: "0.6" },
  { path: "/townsville-airport",                  source: "src/pages/TownsvilleAirport.tsx",           changefreq: "monthly", priority: "0.6" },
  { path: "/guides/magnetic-island-day-trip",     source: "src/pages/MagneticIslandDayTrip.tsx",       changefreq: "monthly", priority: "0.8" },
  { path: "/guides/magnetic-island-ferry",        source: "src/pages/MagneticIslandFerry.tsx",         changefreq: "monthly", priority: "0.7" },
  { path: "/guides/forts-walk-magnetic-island",   source: "src/pages/FortsWalkMagneticIsland.tsx",     changefreq: "monthly", priority: "0.7" },
  { path: "/guides/stinger-safety",               source: "src/pages/StingerSafety.tsx",               changefreq: "daily",   priority: "0.7" },
  { path: "/guides/jezzine-barracks",             source: "src/pages/JezzineBarracks.tsx",             changefreq: "monthly", priority: "0.7" },
  { path: "/guides/free-things",                  source: "src/pages/FreeThings.tsx",                  changefreq: "monthly", priority: "0.7" },
  { path: "/guides/beat-the-heat",                source: "src/pages/BeatTheHeat.tsx",                 changefreq: "monthly", priority: "0.6" },
  { path: "/guides/rainy-day-activities",         source: "src/pages/RainyDayActivities.tsx",          changefreq: "monthly", priority: "0.7" },
  { path: "/guides/sunset-walks",                 source: "src/pages/SunsetWalks.tsx",                 changefreq: "monthly", priority: "0.6" },
  { path: "/moving-to-townsville",                source: "src/pages/MovingToTownsville.tsx",          changefreq: "monthly", priority: "0.8" },
  { path: "/suburbs",                             source: "src/pages/Suburbs.tsx",                     changefreq: "monthly", priority: "0.8" },
  { path: "/beaches/saunders-beach",              source: "src/pages/beaches/SaundersBeach.tsx",       changefreq: "monthly", priority: "0.7" },
  { path: "/accessible-townsville",               source: "src/pages/AccessibleTownsville.tsx",        changefreq: "monthly", priority: "0.7" },
  { path: "/useful-contacts",                     source: "src/pages/UsefulContacts.tsx",              changefreq: "monthly", priority: "0.7" },
  { path: "/privacy-policy",                      source: "src/pages/PrivacyPolicy.tsx",               changefreq: "yearly",  priority: "0.2" },
  { path: "/terms-of-use",                        source: "src/pages/TermsOfUse.tsx",                  changefreq: "yearly",  priority: "0.2" },
  { path: "/affiliate-disclosure",                source: "src/pages/AffiliateDisclosure.tsx",         changefreq: "yearly",  priority: "0.2" },
  { path: "/cookie-policy",                       source: "src/pages/CookiePolicy.tsx",               changefreq: "yearly",  priority: "0.2" },
];

function isoDate(mtime) {
  return mtime.toISOString().slice(0, 10); // YYYY-MM-DD
}

function gitLastModified(absPath) {
  try {
    const out = execSync(`git log -1 --format=%cs -- "${absPath}"`, {
      cwd: ROOT,
      stdio: ["ignore", "pipe", "ignore"],
    }).toString().trim();
    return out || null; // empty = untracked/new file
  } catch {
    return null; // git unavailable
  }
}

function lastmodFor(absPath) {
  return gitLastModified(absPath) || isoDate(statSync(absPath).mtime);
}


function buildXml() {
  const missing = [];
  const entries = PAGES.map((p) => {
    const abs = resolve(ROOT, p.source);
    if (!existsSync(abs)) {
      missing.push(`${p.path} -> ${p.source}`);
      return null;
    }
    const lastmod = lastmodFor(abs);
    return `  <url>
    <loc>${SITE}${p.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`;
  }).filter(Boolean);

  if (missing.length) {
    console.error("[sitemap] Missing source files:\n" + missing.map((m) => "  - " + m).join("\n"));
    process.exit(1);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>
`;
}

const xml = buildXml();
writeFileSync(OUTPUT, xml, "utf8");
console.log(`[sitemap] Wrote ${PAGES.length} URLs -> ${OUTPUT}`);
