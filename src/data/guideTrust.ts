export type VisitStatus = "personally-visited" | "partially-firsthand" | "research-based";

export interface OfficialSource {
  name: string;
  url: string;
}

export interface GuideTrustMeta {
  author: string;
  authorLocationText: string;
  visitStatus: VisitStatus;
  /** Optional wording that replaces the default visit-status sentence. */
  visitNote?: string;
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
  "/guides/rainy-day-activities": {
    visitStatus: "partially-firsthand",
    visitNote:
      "This guide combines firsthand experience of Townsville's wet-season weather with current information from the Bureau of Meteorology, Townsville City Council, Queensland Government road and park services, and local attraction operators.",
    lastChecked: "7 August 2026",
    officialSourcesChecked: true,
    officialSources: [
      {
        name: "Bureau of Meteorology — Townsville forecast",
        url: "http://www.bom.gov.au/qld/forecasts/townsville.shtml",
      },
      {
        name: "Bureau of Meteorology — Queensland warnings",
        url: "http://www.bom.gov.au/qld/warnings/",
      },
      {
        name: "Townsville Disaster Dashboard",
        url: "https://disaster.townsville.qld.gov.au/",
      },
      {
        name: "Queensland Traffic — road conditions",
        url: "https://qldtraffic.qld.gov.au/",
      },
      {
        name: "Queensland Parks and Wildlife Service — park alerts",
        url: "https://parks.desi.qld.gov.au/park-alerts",
      },
      {
        name: "Queensland Museum Tropics",
        url: "https://www.museum.qld.gov.au/museum-of-tropical-queensland",
      },
      {
        name: "Townsville CityLibraries",
        url: "https://www.townsville.qld.gov.au/facilities-and-recreation/libraries",
      },
      {
        name: "Perc Tucker Regional Gallery — Townsville City Council",
        url: "https://www.townsville.qld.gov.au/facilities-and-recreation/galleries",
      },
      {
        name: "Great Barrier Reef Marine Park Authority — Reef HQ redevelopment",
        url: "https://www2.gbrmpa.gov.au/reef-hq-redevelopment",
      },
    ],
  },
  "/guides/beat-the-heat": {
    visitStatus: "partially-firsthand",
    visitNote:
      "This guide combines firsthand experience of Townsville's tropical heat with current advice from Queensland Health, the Bureau of Meteorology, Townsville City Council and official emergency-information services.",
    lastChecked: "6 August 2026",
    officialSourcesChecked: true,
    officialSources: [
      {
        name: "Queensland Health — heat and health",
        url: "https://www.health.qld.gov.au/newsroom/features/how-to-beat-the-heat",
      },
      {
        name: "Queensland Government — heatwave preparation",
        url: "https://www.qld.gov.au/emergency/dealing-disasters/heatwave",
      },
      {
        name: "Bureau of Meteorology — Townsville forecast",
        url: "http://www.bom.gov.au/qld/forecasts/townsville.shtml",
      },
      {
        name: "Bureau of Meteorology — heatwave service",
        url: "http://www.bom.gov.au/australia/heatwave/",
      },
      {
        name: "Townsville Disaster Dashboard",
        url: "https://disaster.townsville.qld.gov.au/",
      },
      {
        name: "Townsville City Council — pools and lagoons",
        url: "https://www.townsville.qld.gov.au/facilities-and-recreation/pools",
      },
      {
        name: "Queensland Parks and Wildlife Service — park alerts",
        url: "https://parks.desi.qld.gov.au/park-alerts",
      },
      {
        name: "Queensland Traffic — road conditions",
        url: "https://qldtraffic.qld.gov.au/",
      },
      { name: "13 HEALTH (13 43 25 84)", url: "https://www.health.qld.gov.au/13health" },
    ],
  },

  "/guides/free-things": {
    visitStatus: "partially-firsthand",
    visitNote:
      "This guide combines firsthand local knowledge of Townsville's public spaces with current information from Townsville City Council, Queensland Government sources, attraction operators and official event organisers.",
    lastChecked: "6 August 2026",
    officialSourcesChecked: true,
    officialSources: [
      {
        name: "Townsville City Council — The Strand",
        url: "https://www.townsville.qld.gov.au/facilities-and-recreation/parks-and-playgrounds/the-strand",
      },
      {
        name: "Townsville City Council — Riverway",
        url: "https://www.townsville.qld.gov.au/facilities-and-recreation/riverway",
      },
      {
        name: "Townsville City Council — parks and playgrounds",
        url: "https://www.townsville.qld.gov.au/facilities-and-recreation/parks-and-playgrounds",
      },
      {
        name: "Townsville City Council — libraries",
        url: "https://www.townsville.qld.gov.au/facilities-and-recreation/libraries",
      },
      {
        name: "Townsville City Council — parking",
        url: "https://www.townsville.qld.gov.au/roads-and-transport/parking",
      },
      {
        name: "Queensland Health — marine stingers",
        url: "https://www.health.qld.gov.au/news-events/news/marine-stingers-jellyfish-irukandji-box-safety-swimming-beaches",
      },
      { name: "Surf Life Saving Queensland — beach safety", url: "https://lifesaving.com.au/" },
      { name: "Bureau of Meteorology — Queensland warnings", url: "http://www.bom.gov.au/qld/warnings/" },
      {
        name: "Queensland Parks and Wildlife Service — park alerts",
        url: "https://parks.desi.qld.gov.au/park-alerts",
      },
    ],
  },
  "/townsville-with-kids": {
    visitStatus: "partially-firsthand",
    visitNote:
      "This guide combines our family experience of living in Townsville with current information from Townsville City Council, attraction operators, Queensland Government sources and official transport and safety information.",
    lastChecked: "6 August 2026",
    officialSourcesChecked: true,
    officialSources: [
      {
        name: "Townsville City Council — The Strand",
        url: "https://www.townsville.qld.gov.au/facilities-and-recreation/parks-and-playgrounds/the-strand",
      },
      {
        name: "Townsville City Council — parks and playgrounds",
        url: "https://www.townsville.qld.gov.au/facilities-and-recreation/parks-and-playgrounds",
      },
      {
        name: "Townsville City Council — Riverway",
        url: "https://www.townsville.qld.gov.au/facilities-and-recreation/riverway",
      },
      { name: "Billabong Sanctuary", url: "https://billabongsanctuary.com.au/" },
      { name: "Museum of Tropical Queensland", url: "https://www.museum.qld.gov.au/mtq" },
      { name: "SeaLink Queensland — Magnetic Island ferry", url: "https://www.sealinkqld.com.au/" },
      { name: "Surf Life Saving Queensland — beach safety", url: "https://lifesaving.com.au/" },
      {
        name: "Queensland Health — marine stingers",
        url: "https://www.health.qld.gov.au/news-events/news/marine-stingers-jellyfish-irukandji-box-safety-swimming-beaches",
      },
      { name: "Bureau of Meteorology — Townsville warnings", url: "http://www.bom.gov.au/qld/" },
    ],
  },

  "/guides/paluma-day-trip": {
    visitStatus: "research-based",
    lastChecked: "5 August 2026",
    officialSourcesChecked: true,
    officialSources: [
      {
        name: "Transport and Main Roads \u2014 Mount Spec Road reconstruction",
        url: "https://www.tmr.qld.gov.au/projects/mount-spec-road-reconstruction",
      },
      { name: "Queensland Traffic \u2014 current road conditions", url: "https://qldtraffic.qld.gov.au/" },
      {
        name: "Queensland Reconstruction Authority \u2014 Mount Spec Road permit restrictions update",
        url: "https://www.qra.qld.gov.au/news",
      },
      {
        name: "Queensland Parks \u2014 Paluma Range National Park alerts",
        url: "https://parks.desi.qld.gov.au/parks/paluma-range/alerts",
      },
      {
        name: "Queensland Parks \u2014 Paluma Range National Park overview",
        url: "https://parks.desi.qld.gov.au/parks/paluma-range",
      },
      {
        name: "Queensland Parks \u2014 Paluma Range facilities (Big Crystal Creek, McClellands Lookout, Birthday Creek Falls)",
        url: "https://parks.desi.qld.gov.au/parks/paluma-range/about/facilities",
      },
      {
        name: "Queensland Parks \u2014 water and swimming safety",
        url: "https://parks.desi.qld.gov.au/safety/water",
      },
      {
        name: "Queensland Parks \u2014 domestic animals in national parks",
        url: "https://parks.desi.qld.gov.au/safety",
      },
      {
        name: "Bureau of Meteorology \u2014 Paluma forecast",
        url: "http://www.bom.gov.au/places/qld/paluma/",
      },
    ],
  },
  "/guides/walking-castle-hill": {
    visitStatus: "partially-firsthand",
    lastChecked: "5 August 2026",
    officialSourcesChecked: true,
    officialSources: [
      {
        name: "Townsville City Council — Castle Hill lookout and walking tracks",
        url: "https://www.townsville.qld.gov.au/facilities-and-recreation/parks-and-playgrounds/castle-hill",
      },
      {
        name: "Townsville City Council — walking and cycling trails",
        url: "https://www.townsville.qld.gov.au/facilities-and-recreation/sport-and-recreation/walking-and-cycling",
      },
      {
        name: "Townsville City Council — news, closures and road information",
        url: "https://www.townsville.qld.gov.au/about-council/news-and-publications",
      },
    ],
  },
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
    visitNote:
      "This guide combines firsthand local experience of living in Townsville with current information from Townsville City Council, Queensland Government sources, transport operators and local attractions.",
    lastChecked: "7 August 2026",
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
    visitStatus: "personally-visited",
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
  "/guides/forts-walk-magnetic-island": {
    visitStatus: "research-based",
    lastChecked: "5 August 2026",
    officialSourcesChecked: true,
    officialSources: [
      {
        name: "Queensland Parks \u2014 Forts Walk, Magnetic Island National Park",
        url: "https://parks.desi.qld.gov.au/parks/magnetic-island/about/walks/forts-walk",
      },
      {
        name: "Queensland Parks \u2014 Magnetic Island National Park (Forts Junction access)",
        url: "https://parks.desi.qld.gov.au/parks/magnetic-island",
      },
      {
        name: "Queensland Parks \u2014 Magnetic Island park alerts",
        url: "https://parks.desi.qld.gov.au/parks/magnetic-island/alerts",
      },
      {
        name: "Queensland Parks \u2014 visiting safely, Magnetic Island",
        url: "https://parks.desi.qld.gov.au/parks/magnetic-island/about/safety",
      },
      {
        name: "Queensland Parks \u2014 nature, culture and history",
        url: "https://parks.desi.qld.gov.au/parks/magnetic-island/about/culture",
      },
      {
        name: "Translink \u2014 Route 250 and journey planner",
        url: "https://translink.com.au/",
      },
      {
        name: "Bureau of Meteorology \u2014 Townsville forecast",
        url: "http://www.bom.gov.au/qld/forecasts/townsville.shtml",
      },
    ],
  },
  "/guides/magnetic-island-ferry": {
    visitStatus: "research-based",
    lastChecked: "5 August 2026",
    officialSourcesChecked: true,
    officialSources: [
      {
        name: "SeaLink Queensland — Magnetic Island passenger ferry",
        url: "https://www.sealinkqld.com.au/magnetic-island-ferry",
      },
      {
        name: "SeaLink Queensland — Magnetic Island ferry timetables",
        url: "https://www.sealinkqld.com.au/magnetic-island-ferry/timetables",
      },
      {
        name: "SeaLink Queensland — fares and terminal parking",
        url: "https://www.sealinkqld.com.au/magnetic-island-ferry/fares",
      },
      {
        name: "Magnetic Island Ferries — vehicle ferry",
        url: "https://www.magneticislandferries.com.au/",
      },
      {
        name: "Magnetic Island Ferries — timetable",
        url: "https://www.magneticislandferries.com.au/timetable/",
      },
      {
        name: "Magnetic Island Ferries — fares and bookings",
        url: "https://www.magneticislandferries.com.au/fares/",
      },
      {
        name: "Translink — Route 250 and journey planner",
        url: "https://translink.com.au/",
      },
      {
        name: "Bureau of Meteorology — Queensland weather warnings",
        url: "http://www.bom.gov.au/qld/",
      },
    ],
  },
  "/guides/magnetic-island-day-trip": {
    visitStatus: "research-based",
    lastChecked: "5 August 2026",
    officialSourcesChecked: true,
    officialSources: [
      {
        name: "SeaLink Queensland — Magnetic Island passenger ferry",
        url: "https://www.sealinkqld.com.au/magnetic-island-ferry",
      },
      {
        name: "Translink — bus services and timetables",
        url: "https://translink.com.au/",
      },
      {
        name: "Queensland Parks — Magnetic Island National Park",
        url: "https://parks.desi.qld.gov.au/parks/magnetic-island",
      },
      {
        name: "Beachsafe — beach and swimming safety information",
        url: "https://beachsafe.org.au/",
      },
      {
        name: "Bureau of Meteorology — Queensland weather warnings",
        url: "http://www.bom.gov.au/qld/",
      },
    ],
  },
  "/useful-contacts": {
    visitStatus: "research-based",
    visitNote:
      "This page uses current contact information from Townsville City Council, Queensland Health, Queensland Police, transport authorities and official emergency services.",
    lastChecked: "7 August 2026",
    officialSourcesChecked: true,
    officialSources: [
      { name: "Townsville City Council", url: "https://www.townsville.qld.gov.au/" },
      { name: "Townsville Disaster Dashboard", url: "https://disaster.townsville.qld.gov.au/" },
      { name: "Queensland Health", url: "https://www.health.qld.gov.au/" },
      { name: "Queensland Police Service", url: "https://www.police.qld.gov.au/" },
      { name: "Queensland Traffic", url: "https://qldtraffic.qld.gov.au/" },
      { name: "Bureau of Meteorology — Queensland warnings", url: "http://www.bom.gov.au/qld/warnings/" },
    ],
  },
  "/reef-hq-townsville": {
    visitStatus: "research-based",
    visitNote:
      "This status page is based on current information from the Great Barrier Reef Aquarium and Great Barrier Reef Marine Park Authority, with visitor alternatives drawn from current Townsville attraction information.",
    lastChecked: "7 August 2026",
    officialSourcesChecked: true,
    officialSources: [
      {
        name: "Great Barrier Reef Aquarium — official site",
        url: "https://www.gbraquarium.com.au/",
      },
      {
        name: "Great Barrier Reef Marine Park Authority — Reef HQ redevelopment",
        url: "https://www2.gbrmpa.gov.au/reef-hq-redevelopment",
      },
    ],
  },
  "/guides/stinger-safety": {
    visitStatus: "research-based",
    visitNote:
      "This safety guide is based on current advice from Queensland Government health and emergency sources, Townsville City Council, Surf Life Saving guidance and official marine-stinger information.",
    lastChecked: "7 August 2026",
    officialSourcesChecked: true,
    officialSources: [
      {
        name: "Townsville City Council — Beaches, lifeguards and marine stinger enclosures",
        url: "https://www.townsville.qld.gov.au/facilities-and-recreation/beaches-parks-and-playgrounds",
      },
      {
        name: "Queensland Government — Marine stingers",
        url: "https://www.qld.gov.au/health/staying-healthy/environmental/marine-stingers",
      },
      {
        name: "Queensland Poisons Information Centre — 13 11 26",
        url: "https://www.childrens.health.qld.gov.au/poisons-information-centre",
      },
      {
        name: "Surf Life Saving Australia — Beachsafe",
        url: "https://beachsafe.org.au/",
      },
      {
        name: "Townsville Disaster Dashboard",
        url: "https://disaster.townsville.qld.gov.au/",
      },
    ],
  },
  "/dog-friendly": {
    visitStatus: "partially-firsthand",
    visitNote:
      "This guide combines firsthand local dog-walking knowledge with current information from Townsville City Council and official Queensland animal and wildlife safety sources.",
    lastChecked: "7 August 2026",
    officialSourcesChecked: true,
    officialSources: [
      {
        name: "Townsville City Council — Dog off-leash areas",
        url: "https://www.townsville.qld.gov.au/community-support/pets-and-animals/dogs/dog-off-leash-areas",
      },
      {
        name: "Townsville City Council — Responsible pet ownership and dog rules",
        url: "https://www.townsville.qld.gov.au/community-support/pets-and-animals/dogs",
      },
      {
        name: "Queensland Government — Be Crocwise",
        url: "https://www.qld.gov.au/environment/plants-animals/animals/crocodiles/crocwise",
      },
      {
        name: "Bureau of Meteorology — Queensland tide predictions",
        url: "http://www.bom.gov.au/australia/tides/",
      },
      {
        name: "Townsville Disaster Dashboard",
        url: "https://disaster.townsville.qld.gov.au/",
      },
    ],
  },
  "/the-strand": {
    visitStatus: "personally-visited",
    lastChecked: "5 August 2026",
    officialSourcesChecked: true,
    officialSources: [
      {
        name: "Townsville City Council — Dog off-leash areas",
        url: "https://www.townsville.qld.gov.au/community-support/pets-and-animals/dogs/dog-off-leash-areas",
      },
      {
        name: "Townsville City Council — The Strand facilities, pools and closures",
        url: "https://www.townsville.qld.gov.au/",
      },
      {
        name: "Beachsafe (Surf Life Saving Australia) — patrol and beach conditions",
        url: "https://beachsafe.org.au/",
      },
    ],
  },
  "/beaches": {
    visitStatus: "partially-firsthand",
    visitNote:
      "This guide combines firsthand local knowledge of Townsville's coastline with current information from Townsville City Council, Surf Life Saving Queensland and official Queensland safety sources.",
    lastChecked: "7 August 2026",
    officialSourcesChecked: true,
    officialSources: [
      {
        name: "Townsville City Council — beaches and pools",
        url: "https://www.townsville.qld.gov.au/facilities-and-recreation/beaches-and-pools",
      },
      {
        name: "Surf Life Saving Queensland",
        url: "https://lifesaving.com.au/",
      },
      {
        name: "Beachsafe (Surf Life Saving Australia)",
        url: "https://beachsafe.org.au/",
      },
      {
        name: "Queensland Government — Be Crocwise",
        url: "https://www.qld.gov.au/environment/plants-animals/animals/crocodiles/crocwise",
      },
      {
        name: "Bureau of Meteorology — Townsville",
        url: "http://www.bom.gov.au/qld/forecasts/townsville.shtml",
      },
    ],
  },
  "/jezzine-barracks": {
    visitStatus: "partially-firsthand",
    visitNote:
      "This guide combines firsthand local knowledge of Jezzine Barracks and North Ward with current information from Townsville City Council and official heritage and visitor sources.",
    lastChecked: "7 August 2026",
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
      {
        name: "Bureau of Meteorology — Townsville",
        url: "http://www.bom.gov.au/qld/forecasts/townsville.shtml",
      },
    ],
  },
  "/local-tips": {
    visitStatus: "partially-firsthand",
    visitNote:
      "This guide combines firsthand local experience of living in Townsville with current information from official local, transport, weather and attraction sources.",
    lastChecked: "7 August 2026",
    officialSourcesChecked: true,
    officialSources: [
      {
        name: "Townsville City Council",
        url: "https://www.townsville.qld.gov.au/",
      },
      {
        name: "Bureau of Meteorology \u2014 Townsville",
        url: "http://www.bom.gov.au/qld/forecasts/townsville.shtml",
      },
      {
        name: "Queensland Traffic \u2014 road conditions",
        url: "https://qldtraffic.qld.gov.au/",
      },
      {
        name: "Translink \u2014 Townsville public transport",
        url: "https://translink.com.au/",
      },
    ],
  },
  "/riverway": {
    visitStatus: "partially-firsthand",
    visitNote:
      "This guide combines firsthand familiarity with the Riverway precinct and the Ross River parklands with current information from Townsville City Council, CityLibraries Townsville and Pinnacles Gallery. Lagoon opening hours and facility availability change, so always check Council before travelling.",
    lastChecked: "7 August 2026",
    officialSourcesChecked: true,
    officialSources: [
      {
        name: "Townsville City Council — Riverway",
        url: "https://www.townsville.qld.gov.au/facilities-and-recreation/riverway",
      },
      {
        name: "Townsville City Council — Riverway Lagoons",
        url: "https://www.townsville.qld.gov.au/facilities-and-recreation/riverway/riverway-lagoons",
      },
      {
        name: "CityLibraries Townsville",
        url: "https://www.townsville.qld.gov.au/facilities-and-recreation/libraries",
      },
      {
        name: "Pinnacles Gallery — Townsville City Council",
        url: "https://www.townsville.qld.gov.au/facilities-and-recreation/galleries",
      },
      {
        name: "Translink — journey planner",
        url: "https://translink.com.au/",
      },
    ],
  },
};

/** Routes that are guide articles and should show the trust panel. */
export const GUIDE_PATHS: string[] = [
  "/guides/paluma-day-trip",
  "/first-time-in-townsville",
  "/townsville-in-one-day",
  "/townsville-without-a-car",
  "/guides/beat-the-heat",
  "/guides/magnetic-island-day-trip",
  "/guides/magnetic-island-ferry",
  "/guides/forts-walk-magnetic-island",
  "/guides/free-things",
  "/guides/rainy-day-activities",
  "/guides/stinger-safety",
  "/guides/sunset-walks",
  "/jezzine-barracks",
  "/guides/walking-castle-hill",
  "/cowboys-stadium-guide",
  "/north-shore-townsville",
  "/beaches/saunders-beach",
  "/pallarenda-beach",
  "/rowes-bay",
  "/townsville-with-kids",
  "/the-strand",
  "/riverway",
  "/billabong-sanctuary",
  "/castle-hill",
  "/little-crystal-creek-townsville",
  "/great-barrier-reef-townsville",
  "/reef-hq-townsville",
  "/useful-contacts",
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
