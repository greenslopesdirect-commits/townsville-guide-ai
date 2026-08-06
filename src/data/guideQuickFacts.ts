export interface QuickFacts {
  bestFor?: string[];
  /** Strongest all-round option, used mainly on planning hub guides. */
  bestOverall?: string;
  /** Best free viewpoint or lookout. */
  bestView?: string;
  /** Best free swimming option. */
  bestSwimming?: string;
  /** Best option with children. */
  bestWithKids?: string;
  /** Best walk. */
  bestWalk?: string;
  /** Best option for visitors without a car. */
  bestWithoutCar?: string;
  /** Best sunrise or sunset spot. */
  bestSunset?: string;
  /** Age range a location or guide suits best, e.g. "Toddlers to teenagers". */
  bestAges?: string;
  /** Standout free option, used mainly on planning hub guides. */
  bestFreeActivity?: string;
  /** Standout paid option, used mainly on planning hub guides. */
  bestPaidActivity?: string;
  /** Best option on a hot day. */
  bestHotDayOption?: string;
  /** Best day trip from the city. */
  bestDayTrip?: string;
  /** Typical length of stay, e.g. "2–4 days". */
  typicalStay?: string;
  /** Main practical challenge visitors should plan around. */
  mainChallenge?: string;
  timeNeeded?: string;

  cost?: string;
  distanceFromCBD?: string;
  /** Length of a walking/foreshore route, where "distance from CBD" does not apply. */
  routeLength?: string;
  drivingTimeFromCBD?: string;
  journeyTime?: string;
  carNeeded?: string;
  parking?: string;
  toilets?: string;
  accessibility?: string;
  dogFriendly?: string;
  bestTimeToVisit?: string;
  /** Current access status, e.g. a temporary closure. */
  currentAccess?: string;
  localVerdict?: string;
}

/**
 * Per-route quick facts. Keys are route pathnames (no trailing slash).
 * Only include fields that are confirmed by the guide content or a reliable
 * source. Use cautious wording ("Check before visiting") where uncertain, and
 * simply omit a field when there is no reliable information at all.
 */
export const QUICK_FACTS_BY_PATH: Record<string, QuickFacts> = {
  "/guides/paluma-day-trip": {
    bestFor: [
      "Rainforest scenery",
      "Mountain day trips",
      "Lookouts and short walks",
      "Freshwater swimming when open",
    ],
    timeNeeded:
      "Allow most of a day, including the mountain drive and two or three carefully chosen stops",
    cost: "Most natural attractions are free; food, fuel, camping and other activities cost extra",
    distanceFromCBD:
      "Approximately 80 kilometres to Paluma village, depending on the route and starting point",
    drivingTimeFromCBD:
      "Allow roughly 1 hour 30 minutes or more, depending on road conditions and stops",
    carNeeded: "Yes \u2014 a private vehicle is effectively essential for a practical Paluma day trip",
    parking:
      "Parking varies by village, lookout, walking track and day-use area; follow current signs",
    toilets: "Facilities vary by location and may be unavailable during closures",
    accessibility:
      "Some day-use facilities and lookout paths may be accessible, but conditions vary considerably",
    dogFriendly: "Dogs and other domestic animals are generally not permitted in national park areas",
    bestTimeToVisit:
      "Check road, park and weather conditions before leaving; cooler and drier conditions are generally easier",
    currentAccess:
      "Mount Spec Road is open to public access, but reconstruction continues and some park facilities remain closed \u2014 check current alerts",
    localVerdict:
      "Paluma is a rewarding regional day trip, but visitors should choose only a few stops and never assume every road, track or swimming area is currently open.",
  },
  "/townsville-without-a-car": {
    bestFor: [
      "Short stays",
      "Visitors staying centrally",
      "The Strand and North Ward",
      "Magnetic Island foot passengers",
    ],
    timeNeeded: "Suitable for one- to three-day visits with a simplified itinerary",
    cost: "Walking is free; taxis, rideshare, buses and tours add variable costs",
    carNeeded:
      "Not essential for a central visit, but useful for Castle Hill, suburban attractions and regional day trips",
    accessibility:
      "Depends on the chosen route, footpath conditions and transport provider",
    bestTimeToVisit: "Plan outdoor walking for the cooler parts of the day",
    localVerdict:
      "Townsville can work without a car if you stay centrally and focus on The Strand, North Ward, the CBD and Magnetic Island rather than trying to cover the wider region.",
  },
  "/guides/walking-castle-hill": {
    bestFor: [
      "Regular walkers",
      "Fitness walks",
      "Townsville views",
      "Early-morning exercise",
    ],
    timeNeeded: "Varies considerably by route, fitness, weather and rest stops",
    cost: "Free",
    carNeeded:
      "No for walking from a track entrance, but transport to and from the starting point may still be useful",
    parking:
      "Parking availability depends on the chosen starting point and current restrictions",
    toilets: "Public toilets are available at the summit",
    accessibility:
      "The walking tracks are steep and are not suitable for all mobility levels",
    dogFriendly: "Keep dogs leashed and follow current signs",
    bestTimeToVisit: "Early morning or later in the day, avoiding peak heat",
    localVerdict:
      "A rewarding Townsville walk for prepared visitors, but the steep terrain, exposed conditions and heat should not be underestimated.",
  },
  "/castle-hill": {
    bestFor: ["Panoramic views", "Sunrise and sunset", "Photography", "Walking"],
    timeNeeded:
      "Allow 20–60 minutes for a summit visit by car; walking time varies considerably by route and fitness",
    cost: "Free",
    carNeeded:
      "Not essential — it is close to the city centre, but driving to the summit is the easiest option",
    parking:
      "Parking is available at the summit but demand is high around sunrise and sunset, and temporary restrictions may apply",
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
    drivingTimeFromCBD:
      "Allow roughly 1 hour 15 minutes to 1 hour 30 minutes, depending on the starting point and road conditions",
    carNeeded: "Yes",
    parking: "Parking is normally available at the day-use area when open",
    toilets: "Toilets are normally available when the day-use area is open",
    accessibility:
      "The toilets and shelter shed are normally wheelchair-accessible when the day-use area is open. These facilities are not accessible during the closure",
    currentAccess:
      "Temporarily closed \u2014 check the current Queensland Parks alert before travelling",
    dogFriendly: "No — dogs are not permitted in the national park",
    bestTimeToVisit:
      "After the area reopens and current road, weather and park conditions have been checked",
    localVerdict:
      "A worthwhile scenic day trip when open, but do not travel without checking the current Queensland Parks alert.",
  },
  "/guides/forts-walk-magnetic-island": {
    bestFor: [
      "World War II history",
      "Island views",
      "Wildlife spotting",
      "Moderate bushwalking",
    ],
    timeNeeded: "Allow approximately 2 hours, plus transport and rest time",
    cost: "Free",
    routeLength: "Approximately 4 kilometres return",
    carNeeded: "No \u2014 the walk can be reached by island bus, taxi, bicycle or car",
    parking: "Parking is available around Forts Junction, subject to current signs and availability",
    toilets: "Confirm current toilet locations before beginning the walk",
    accessibility:
      "Grade 3 track with slopes, uneven surfaces and steps; not suitable for all mobility levels",
    dogFriendly: "No \u2014 dogs and other domestic animals are not permitted in the national park",
    bestTimeToVisit: "Early morning or later in the afternoon, avoiding peak heat",
    localVerdict:
      "A rewarding Magnetic Island walk for prepared visitors, but the exposed terrain, heat and return-ferry timing should not be underestimated.",
  },
  "/guides/magnetic-island-ferry": {
    bestFor: [
      "Magnetic Island day trips",
      "Foot passengers",
      "Visitors taking a car",
      "First-time ferry travellers",
    ],
    timeNeeded: "Allow extra time for parking, check-in, boarding and the return journey",
    cost: "Fares vary by operator, passenger type, vehicle and booking conditions",
    journeyTime:
      "Passenger ferry approximately 20 minutes; vehicle ferry approximately 40 minutes",
    carNeeded:
      "No \u2014 use the passenger ferry and island transport, or book the vehicle ferry when taking a car",
    parking:
      "Paid parking is available near Breakwater Terminal; vehicle-ferry customers should check current Ross Street arrangements",
    accessibility:
      "Boarding and vehicle arrangements vary by operator; contact the ferry company before travelling",
    dogFriendly: "Pet rules vary by operator and service; confirm current conditions before booking",
    bestTimeToVisit: "Choose outward and return services before finalising the island itinerary",
    localVerdict:
      "The trip is straightforward once visitors understand that the passenger and vehicle ferries use different Townsville terminals and have different crossing times.",
  },
  "/guides/magnetic-island-day-trip": {
    bestFor: ["Beaches and bays", "Wildlife", "Walking", "Full-day trips"],
    timeNeeded: "Allow one full day; an overnight stay provides more flexibility",
    cost: "Costs vary depending on ferry, island transport, food and activities",
    journeyTime:
      "The passenger ferry crossing is generally around 20 minutes; check current operator information",
    carNeeded:
      "No — foot passengers can use island buses, taxis or tours, but taking a car provides more flexibility",
    parking:
      "Paid parking is available near Breakwater Terminal; check the current operator information and parking rate",
    toilets:
      "Public facilities are available in several island villages and visitor areas, but locations vary",
    accessibility:
      "Ferry, bus, beach and walking access vary considerably; check each part of the planned route",
    dogFriendly:
      "Dog access varies across ferries, beaches, national park areas and other locations; check current rules",
    bestTimeToVisit:
      "Allow a full day and plan outdoor walking for the cooler parts of the day",
    localVerdict:
      "Magnetic Island is one of Townsville's strongest day trips, but it is more enjoyable when visitors choose a small number of stops and organise transport before travelling.",
  },
  "/the-strand": {
    bestFor: ["Waterfront walks", "Families", "Swimming facilities", "Sunrise and sunset"],
    timeNeeded:
      "Allow 1–3 hours, or longer when combining swimming, playgrounds, food and Jezzine Barracks",
    cost: "Free to visit; food, paid activities and Tobruk Memorial Baths cost extra",
    routeLength: "Approximately 2.2 kilometres along the waterfront",
    carNeeded: "No for visitors staying near The Strand, North Ward or central Townsville",
    parking:
      "Parking is available in several areas; follow current signs and expect busier conditions during events and popular periods",
    toilets: "Public toilets are available at selected facilities along The Strand",
    accessibility: "Many main paths are paved, but access and facilities vary by location",
    dogFriendly: "Keep dogs leashed unless current signs identify a designated off-leash area",
    bestTimeToVisit: "Morning or late afternoon for cooler conditions",
    localVerdict:
      "The Strand is one of the easiest places for first-time visitors to experience Townsville's waterfront, especially when combined with Jezzine Barracks.",
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
    bestFor: ["Outdoor family activities and wildlife"],
    bestAges: "Toddlers to teenagers",
    bestFreeActivity: "The Strand",
    bestPaidActivity: "Billabong Sanctuary",
    bestHotDayOption: "Strand Water Park or Riverway Lagoons",
    bestDayTrip: "Magnetic Island",
    typicalStay: "2–4 days",
    mainChallenge: "Heat, especially through the middle of the day",
    carNeeded: "Helpful, but not essential for The Strand and the CBD",
    accessibility:
      "Many waterfront areas are flat and pram-friendly; some walks and tracks are not — check each activity",
    bestTimeToVisit:
      "Outdoor activities are generally more comfortable in the morning or late afternoon during hotter weather",
    localVerdict:
      "Townsville suits families who enjoy outdoor days, wildlife and swimming rather than large all-weather attractions, and the best plan depends on the children's ages and the weather.",
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
  "/townsville-in-one-day": {
    bestFor: ["First-time visitors", "Couples", "Families", "Short stays"],
    timeNeeded: "Approximately 8–10 hours",
    cost: "Includes both free and optional paid activities",
    carNeeded:
      "Helpful, particularly for Castle Hill and moving between city areas",
    accessibility:
      "The itinerary can be adjusted, but accessibility varies by attraction",
    bestTimeToVisit: "Start early, particularly during hotter months",
    localVerdict:
      "A realistic introduction to Townsville that covers the waterfront, local history and Castle Hill without making the day unnecessarily rushed.",
  },
};

const normalise = (path: string) => (path !== "/" ? path.replace(/\/+$/, "") : path);

export const getQuickFacts = (path: string): QuickFacts | undefined =>
  QUICK_FACTS_BY_PATH[normalise(path)];
