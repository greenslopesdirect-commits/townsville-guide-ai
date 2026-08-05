export interface QuickFacts {
  bestFor?: string[];
  timeNeeded?: string;
  cost?: string;
  distanceFromCBD?: string;
  drivingTimeFromCBD?: string;
  journeyTime?: string;
  carNeeded?: string;
  parking?: string;
  toilets?: string;
  accessibility?: string;
  dogFriendly?: string;
  bestTimeToVisit?: string;
  localVerdict?: string;
}

/**
 * Per-route quick facts. Keys are route pathnames (no trailing slash).
 * Only include fields that are confirmed by the guide content or a reliable
 * source. Use cautious wording ("Check before visiting") where uncertain, and
 * simply omit a field when there is no reliable information at all.
 */
export const QUICK_FACTS_BY_PATH: Record<string, QuickFacts> = {
  "/castle-hill": {
    bestFor: ["Panoramic views", "Sunrise and sunset", "Photography", "Walking"],
    timeNeeded: "20–60 minutes",
    cost: "Free",
    carNeeded:
      "Not essential — it is close to the city centre, but driving to the summit is the easiest option",
    parking: "Parking at the summit; it fills quickly around sunset",
    toilets: "Public toilets are available at the summit",
    accessibility:
      "The sealed road allows vehicle access to the summit lookout areas; the walking tracks are steep, exposed and are not suitable for all visitors",
    dogFriendly:
      "Dogs should remain on a leash. Follow current signs and carry waste bags",
    bestTimeToVisit:
      "Early morning or late afternoon — exposed tracks are uncomfortable in midday heat",
    localVerdict:
      "One of the best places for a first overview of Townsville, particularly near sunrise or sunset, but daytime heat can make exposed walking uncomfortable.",
  },
  "/little-crystal-creek-townsville": {
    bestFor: ["Future scenic day trips", "Rainforest surroundings", "Picnics and swimming when open"],
    timeNeeded: "Allow several hours or combine it with a Paluma day trip when the area reopens",
    cost: "Free when open",
    distanceFromCBD: "Approximately 65–70 km from Townsville",
    drivingTimeFromCBD: "Approximately 1 hour 15 minutes, depending on conditions",
    carNeeded: "Yes",
    parking: "Parking is normally available at the day-use area when open",
    toilets: "Toilets are normally available when the day-use area is open",
    accessibility:
      "Some day-use facilities are normally wheelchair-accessible, but current access is unavailable during the closure",
    dogFriendly: "No — dogs are not permitted in the national park",
    bestTimeToVisit:
      "After the area reopens and current road, weather and park conditions have been checked",
    localVerdict:
      "A worthwhile scenic day trip when open, but do not travel without checking the current Queensland Parks alert.",
  },
  "/guides/magnetic-island-day-trip": {
    bestFor: ["Beaches", "Walks and wildlife", "Families", "First-time visitors"],
    timeNeeded: "A full day is best for a first visit",
    cost: "Costs vary depending on ferry, island transport and activities",
    journeyTime: "The passenger ferry crossing is approximately 20 minutes",
    parking:
      "Paid parking is available at Breakwater Terminal. Check SeaLink for the current daily rate",
    carNeeded:
      "Not required — the island bus service is timed with ferry arrivals; a car or hire vehicle is optional",
    accessibility:
      "Some bays and foreshore areas are flat, but tracks such as the Forts Walk have uneven terrain",
    bestTimeToVisit:
      "Dry season (May–October) for walking; plan walks for early morning in warmer months",
    localVerdict:
      "One of the strongest day trips from Townsville. A full day allows enough time for beaches, walks and island transport without rushing.",
  },
  "/the-strand": {
    bestFor: ["Walking", "Families", "Waterfront views", "Parks and casual stops"],
    timeNeeded: "1–3 hours",
    cost: "Free",
    distanceFromCBD: "Adjoins the city centre — around 2.2 km of foreshore",
    carNeeded: "No — it is walkable from the city centre",
    parking: "Free street parking along the foreshore, subject to current signs",
    accessibility: "The foreshore promenade is flat and sealed for its full length",
    dogFriendly: "Keep dogs leashed unless current signs identify a designated off-leash area",
    bestTimeToVisit: "Morning or late afternoon for cooler conditions",
    localVerdict:
      "The easiest place for first-time visitors to experience Townsville's waterfront, particularly in the morning or late afternoon. Swimming conditions change through the year — see our stinger safety guide before swimming.",
  },
  "/guides/stinger-safety": {
    bestFor: ["Beach visitors", "Families", "Swimmers", "First-time visitors"],
    timeNeeded: "A few minutes before visiting the beach",
    cost: "Free information",
    bestTimeToVisit: "Check before every planned swim",
    localVerdict:
      "Current signs and official warnings should take priority over general online advice.",
  },
  "/dog-friendly": {
    bestFor: ["Dog owners", "Beach and park walks", "Locals and visiting pets"],
    timeNeeded: "From a short walk to a half day",
    cost: "Free at public beaches and parks",
    carNeeded: "Helpful for beaches and parks outside the central area",
    dogFriendly:
      "Rules vary by location — check signs at each beach, park or walking area because leash and access rules differ",
    bestTimeToVisit: "Early morning or evening, when sand and paths are cooler",
    localVerdict:
      "Townsville has several useful dog-friendly walks and open spaces, but owners should check local signs, heat conditions and seasonal hazards at each location.",
  },
  "/townsville-with-kids": {
    bestFor: ["Toddlers", "Primary-school children", "Teenagers", "Family visitors"],
    timeNeeded: "From a few hours to a full day, depending on the activities chosen",
    cost: "Includes both free and paid activities",
    carNeeded: "Helpful for attractions outside the central area",
    accessibility:
      "Many waterfront areas are flat and pram-friendly; some walks and tracks are not — check each activity",
    bestTimeToVisit:
      "Outdoor activities are generally more comfortable in the morning or late afternoon during hotter weather",
    localVerdict:
      "Townsville offers a good mixture of free outdoor spaces, waterfront activities and day trips, but the best choices depend on the children's ages and the weather.",
  },
  "/guides/jezzine-barracks": {
    bestFor: ["Waterfront walks", "Families", "Local history", "Views"],
    timeNeeded: "1–2 hours",
    cost: "Free entry",
    carNeeded:
      "No — it is a flat 10-minute walk from The Strand via the coastal boardwalk",
    parking:
      "Free parking off Mitchell Street, subject to current signs and availability",
    toilets: "Check before visiting",
    accessibility:
      "Main paths and boardwalks are largely flat; confirm detailed accessibility before visiting",
    dogFriendly: "Check current signage and council rules before visiting",
    bestTimeToVisit: "Morning or late afternoon for cooler conditions",
    localVerdict:
      "A worthwhile free stop that combines waterfront views, open space and Townsville history.",
  },
};

const normalise = (path: string) => (path !== "/" ? path.replace(/\/+$/, "") : path);

export const getQuickFacts = (path: string): QuickFacts | undefined =>
  QUICK_FACTS_BY_PATH[normalise(path)];
