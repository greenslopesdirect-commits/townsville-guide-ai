export type VisitStatus = "personally-visited" | "partially-firsthand" | "research-based";

export interface OfficialSource {
  name: string;
  url: string;
}

export interface GuideTrustMeta {
  author: string;
  authorLocationText: string;
  visitStatus: VisitStatus;
  lastChecked: string;
  officialSourcesChecked: boolean;
  officialSources?: OfficialSource[];
}

/** Safe defaults — never claim firsthand experience unless explicitly confirmed. */
export const DEFAULT_GUIDE_TRUST: GuideTrustMeta = {
  author: "Duncan Ross",
  authorLocationText: "Townsville local since 2023",
  visitStatus: "research-based",
  lastChecked: "August 2026",
  officialSourcesChecked: false,
};

/**
 * Per-route overrides. Keys are route pathnames (no trailing slash).
 * Anything not listed here falls back to DEFAULT_GUIDE_TRUST.
 */
export const GUIDE_TRUST_BY_PATH: Record<string, Partial<GuideTrustMeta>> = {
  "/townsville-without-a-car": {
    visitStatus: "partially-firsthand",
    lastChecked: "5 August 2026",
    officialSourcesChecked: true,
    officialSources: [
      { name: "Translink journey planner", url: "https://translink.com.au/" },
      { name: "Townsville Airport", url: "https://www.townsvilleairport.com.au/" },
      {
        name: "SeaLink Magnetic Island ferry information",
        url: "https://www.sealinkqld.com.au/",
      },
      { name: "Townsville City Council", url: "https://www.townsville.qld.gov.au/" },
    ],
  },
  "/townsville-in-one-day": {
    visitStatus: "partially-firsthand",
    lastChecked: "5 August 2026",
    officialSourcesChecked: true,
    officialSources: [
      {
        name: "Townsville City Council",
        url: "https://www.townsville.qld.gov.au/",
      },
      {
        name: "Museum of Tropical Queensland",
        url: "https://www.mtq.qm.qld.gov.au/",
      },
      {
        name: "Bureau of Meteorology — Townsville forecast",
        url: "http://www.bom.gov.au/qld/forecasts/townsville.shtml",
      },
    ],
  },
  "/first-time-in-townsville": {
    visitStatus: "partially-firsthand",
    lastChecked: "August 2026",
    officialSourcesChecked: true,
    officialSources: [
      {
        name: "Townsville City Council",
        url: "https://www.townsville.qld.gov.au/",
      },
      {
        name: "Bureau of Meteorology — Townsville forecast",
        url: "http://www.bom.gov.au/qld/forecasts/townsville.shtml",
      },
      {
        name: "Townsville Airport",
        url: "https://www.townsvilleairport.com.au/",
      },
    ],
  },
  "/castle-hill": {
    lastChecked: "5 August 2026",
    officialSourcesChecked: true,
    officialSources: [
      {
        name: "Townsville City Council — Castle Hill",
        url: "https://www.townsville.qld.gov.au/facilities-and-recreation/parks-and-playgrounds/castle-hill",
      },
    ],
  },
  "/little-crystal-creek-townsville": {
    lastChecked: "5 August 2026",
    officialSourcesChecked: true,
    officialSources: [
      {
        name: "Queensland Parks — Paluma Range National Park park alerts",
        url: "https://parks.desi.qld.gov.au/parks/paluma-range/alerts",
      },
    ],
  },
  "/guides/magnetic-island-day-trip": {
    lastChecked: "5 August 2026",
    officialSourcesChecked: true,
    officialSources: [
      {
        name: "SeaLink Queensland — Magnetic Island ferry fares and terminal parking",
        url: "https://www.sealinkqld.com.au/magnetic-island-ferry/fares",
      },
    ],
  },
  "/the-strand": {
    lastChecked: "5 August 2026",
    officialSourcesChecked: true,
    officialSources: [
      {
        name: "Townsville City Council — Dog off-leash areas",
        url: "https://www.townsville.qld.gov.au/community-support/pets-and-animals/dogs/dog-off-leash-areas",
      },
    ],
  },
  "/guides/jezzine-barracks": {
    visitStatus: "personally-visited",
    lastChecked: "August 2026",
    officialSourcesChecked: true,
    officialSources: [
      {
        name: "Townsville City Council — Jezzine Barracks",
        url: "https://www.townsville.qld.gov.au/facilities-and-recreation/parks-and-playgrounds/jezzine-barracks",
      },
      {
        name: "Army Museum North Queensland",
        url: "https://www.armymuseumnq.com.au/",
      },
    ],
  },
};

/** Routes that are guide articles and should show the trust panel. */
export const GUIDE_PATHS: string[] = [
  "/first-time-in-townsville",
  "/townsville-in-one-day",
  "/townsville-without-a-car",
  "/guides/beat-the-heat",
  "/guides/magnetic-island-day-trip",
  "/guides/free-things",
  "/guides/rainy-day-activities",
  "/guides/stinger-safety",
  "/guides/sunset-walks",
  "/guides/jezzine-barracks",
  "/cowboys-stadium-guide",
  "/north-shore-townsville",
  "/beaches/saunders-beach",
  "/pallarenda-beach",
  "/rowes-bay",
  "/townsville-with-kids",
  "/the-strand",
  "/billabong-sanctuary",
  "/castle-hill",
  "/little-crystal-creek-townsville",
  "/great-barrier-reef-townsville",
  "/townsville-airport",
  "/dog-friendly",
  "/shopping",
  "/nature",
  "/moving-to-townsville",
  "/suburbs",
  "/accessible-townsville",
  "/beaches",
  "/things-to-do",
  "/food",
  "/local-tips",
  "/accommodation",
  "/history",
  "/flights",
];

const normalise = (path: string) => (path !== "/" ? path.replace(/\/+$/, "") : path);

export const isGuidePath = (path: string) => GUIDE_PATHS.includes(normalise(path));

export const getGuideTrust = (path: string): GuideTrustMeta => ({
  ...DEFAULT_GUIDE_TRUST,
  ...(GUIDE_TRUST_BY_PATH[normalise(path)] ?? {}),
});
