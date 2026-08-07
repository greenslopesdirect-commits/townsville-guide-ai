export interface QuickFacts {
  bestFor?: string[];
  /** Strongest all-round option, used mainly on planning hub guides. */
  bestOverall?: string;
  /** Best free viewpoint or lookout. */
  bestView?: string;
  /** Best free swimming option. */
  bestSwimming?: string;
  /** Best swimming setup, used on beach planning guides. */
  bestForSwimming?: string;
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
  /** Best time of day to be outdoors, used on hot-weather planning guides. */
  bestOutdoorTime?: string;
  /** Best free way to cool down. */
  bestCoolDown?: string;
  /** Best shaded option. */
  bestShadedOption?: string;
  /** Best indoor or air-conditioned break. */
  bestIndoorBreak?: string;
  /** Hardest activity in hot conditions. */
  hardestInHeat?: string;
  /** Best approach for families on a hot day. */
  bestFamilyApproach?: string;
  /** Main safety risk to plan around. */
  mainRisk?: string;
  /** What to check before heading out. */
  checkBeforeHeadingOut?: string;
  /** Emergency guidance line. */
  emergency?: string;
  /** Strongest indoor attraction, used on wet-weather planning guides. */
  bestIndoorAttraction?: string;
  /** Best food-based option, used on wet-weather planning guides. */
  bestFoodOption?: string;
  /** Best option during light or passing rain. */
  bestLightRainOption?: string;
  /** What to avoid during heavy rain. */
  avoidInHeavyRain?: string;
  /** Main practical consideration to plan around. */
  mainConsideration?: string;
  /** Headline "don't miss" experiences, used on orientation hub guides. */
  dontMiss?: string;
  /** Ideal length of a first visit. */
  idealFirstVisit?: string;
  /** Minimum worthwhile stay. */
  minimumStay?: string;
  /** Best area to base a first visit. */
  bestArea?: string;
  /** Main planning issue to work around. */
  mainPlanningIssue?: string;
  /** Headline attraction within a precinct or place. */
  mainAttraction?: string;
  /** Public transport access summary. */
  publicTransport?: string;
  /** Non-emergency police contact. */
  nonEmergencyPolice?: string;
  /** State Emergency Service contact. */
  ses?: string;
  /** Non-emergency health advice contact. */
  healthAdvice?: string;
  /** Local council contact. */
  council?: string;
  /** Road conditions contact. */
  roadConditions?: string;
  /** Disaster and severe weather information source. */
  disasterInformation?: string;
  /** Interpreting service contact. */
  interpreter?: string;
  /** Main hospital. */
  hospital?: string;
  /** Headline practical advice line. */
  mainAdvice?: string;
  /** Location summary for an attraction. */
  location?: string;
  /** Current open/closed status of an attraction. */
  currentStatus?: string;
  /** Current official name of an attraction. */
  currentName?: string;
  /** Former name an attraction is still searched for under. */
  formerName?: string;
  /** Target reopening wording for a closed attraction. */
  reopeningTarget?: string;
  /** Operating organisation. */
  operator?: string;
  /** Funding status for a redevelopment. */
  funding?: string;
  /** Whether visitors can currently attend. */
  canVisitNow?: string;
  /** Strongest indoor alternative to a closed attraction. */
  bestIndoorAlternative?: string;
  /** Date the status information was last checked. */
  lastChecked?: string;
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
  /** Strongest designated off-leash dog beach. */
  bestDogBeach?: string;
  /** Most central designated off-leash dog beach. */
  bestCentralOffLeashBeach?: string;
  /** Best fenced off-leash option. */
  bestFencedOption?: string;
  /** Best option where dogs can access water. */
  bestDogSwimming?: string;
  /** Single most important rule to understand. */
  mainRule?: string;
  bestTimeToVisit?: string;
  /** Current access status, e.g. a temporary closure. */
  currentAccess?: string;
  /** Typical marine stinger season window. */
  stingerSeason?: string;
  /** Period of highest marine stinger risk. */
  highestRiskPeriod?: string;
  /** Best swimming choice from a safety point of view. */
  bestSwimmingChoice?: string;
  /** What stinger nets do and do not do. */
  stingerNets?: string;
  /** Protective clothing guidance. */
  protectiveClothing?: string;
  /** Main species of concern. */
  speciesOfConcern?: string;
  /** What to check before swimming. */
  beforeSwimming?: string;
  /** Everyday local habit worth copying. */
  bestLocalHabit?: string;
  /** Most practical area to base a visit. */
  mostUsefulBase?: string;
  /** Place most worth returning to more than once. */
  bestRepeatVisit?: string;
  /** Most common visitor mistake. */
  mostCommonMistake?: string;
  /** Best free outing that feels like local life. */
  bestFreeOuting?: string;
  /** Easiest way to get a good view. */
  bestEasyView?: string;
  /** Headline local tip. */
  mainLocalTip?: string;
  localVerdict?: string;
}

/**
 * Per-route quick facts. Keys are route pathnames (no trailing slash).
 * Only include fields that are confirmed by the guide content or a reliable
 * source. Use cautious wording ("Check before visiting") where uncertain, and
 * simply omit a field when there is no reliable information at all.
 */
export const QUICK_FACTS_BY_PATH: Record<string, QuickFacts> = {
  "/first-time-in-townsville": {
    dontMiss: "The Strand, Castle Hill and Magnetic Island",
    idealFirstVisit: "3–4 days",
    minimumStay: "2 days",
    carNeeded: "Helpful, but not essential for a short central stay",
    bestArea: "The Strand / North Ward",
    bestDayTrip: "Magnetic Island",
    bestFreeActivity: "The Strand",
    bestView: "Castle Hill",
    mainPlanningIssue: "Tropical heat",
    localVerdict:
      "Townsville is an easy city to enjoy once you plan around distance and weather — stay centrally, get outdoors early and late, and keep at least one full day for Magnetic Island.",
  },
  "/guides/rainy-day-activities": {
    bestIndoorAttraction: "Queensland Museum Tropics",
    bestWithKids: "Museum, library or an indoor activity venue",
    bestFreeActivity: "A library or gallery while open",
    bestFoodOption: "A long lunch or café stop between showers",
    bestLightRainOption: "The Strand or the CBD between showers",
    bestWithoutCar: "The CBD and North Ward",
    avoidInHeavyRain: "Creeks, waterfalls and exposed walks",
    checkBeforeHeadingOut:
      "Bureau of Meteorology warnings and the Townsville Disaster Dashboard",
    mainConsideration: "Flooded roads and temporary closures",
    localVerdict:
      "Light rain is usually manageable in Townsville and rarely ruins a day, but steady rain calls for indoor plans and severe weather needs a different plan built around official advice.",
  },

  "/guides/beat-the-heat": {
    bestOutdoorTime: "Early morning and late afternoon",
    bestCoolDown: "Riverway Lagoons or the Strand Water Park",
    bestShadedOption: "The botanic gardens early in the day",
    bestIndoorBreak: "Museum, library, cinema or shopping centre",
    hardestInHeat: "Castle Hill walking tracks",
    bestFamilyApproach: "Water play followed by a midday rest",
    mainRisk: "Heat illness during exposed activity",
    checkBeforeHeadingOut: "Current weather and heatwave warnings",
    emergency: "Call Triple Zero (000) for suspected heatstroke",
    localVerdict:
      "Townsville is very manageable in hot weather when the day is planned around the heat rather than against it — outdoors early and late, water or air conditioning through the middle.",
  },

  "/guides/free-things": {
    bestOverall: "The Strand",
    bestView: "Castle Hill",
    bestSwimming: "Riverway Lagoons",
    bestWithKids: "Strand Water Park",
    bestWalk: "Jezzine Barracks and Kissing Point",
    bestWithoutCar: "The Strand and the CBD",
    bestHotDayOption: "Riverway Lagoons or the Strand Water Park",
    bestSunset: "Castle Hill or Rowes Bay",
    cost: "Free, excluding transport, parking and food",
    mainChallenge: "Heat and limited midday shade",
    localVerdict:
      "Townsville is genuinely good value: the beaches, lookouts, parks and public swimming areas cost nothing, and the main planning task is working around the heat rather than the budget.",
  },
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
  "/useful-contacts": {
    emergency: "000",
    nonEmergencyPolice: "Policelink 13 14 44",
    ses: "13 25 00",
    healthAdvice: "13 HEALTH — 13 43 25 84",
    council: "Townsville Council 13 48 10",
    roadConditions: "Queensland Traffic — 13 19 40",
    disasterInformation: "Townsville Disaster Dashboard",
    interpreter: "TIS National — 13 14 50",
    hospital: "Townsville University Hospital",
    mainAdvice: "Use official live sources during emergencies or severe weather",
  },
  "/reef-hq-townsville": {
    currentStatus: "Closed for redevelopment",
    currentName: "Great Barrier Reef Aquarium",
    formerName: "Reef HQ",
    reopeningTarget: "Currently targeted for 2029",
    location: "Existing Townsville CBD site",
    operator: "Great Barrier Reef Marine Park Authority",
    funding: "Australian Government redevelopment funding secured",
    canVisitNow: "No",
    bestIndoorAlternative: "Queensland Museum Tropics",
    lastChecked: "7 August 2026",
    localVerdict:
      "Treat the aquarium as unavailable when planning a current trip, and check the official Great Barrier Reef Aquarium website for project updates.",
  },
  "/guides/stinger-safety": {
    stingerSeason: "November to May",
    highestRiskPeriod: "The warmer months",
    bestSwimmingChoice: "Patrolled or designated swimming areas",
    stingerNets: "Reduce risk, but are not complete protection",
    protectiveClothing: "A full-body stinger suit is recommended in season",
    speciesOfConcern: "Box jellyfish and Irukandji",
    beforeSwimming: "Check current signs and Townsville City Council beach status",
    emergency: "Call Triple Zero (000) for a suspected serious marine sting",
    bestFor: ["Beach visitors", "Families", "Swimmers", "First-time visitors"],
    timeNeeded: "A few minutes before visiting the beach",
    cost: "Free information",
    bestTimeToVisit: "Check before every planned swim",
    localVerdict:
      "Townsville swimming is manageable when visitors follow current beach-safety advice, and current signs and official warnings should always take priority over general online advice.",
  },
  "/dog-friendly": {
    bestFor: ["Dog owners", "Off-leash beach runs", "Fenced dog parks", "Locals and visiting pets"],
    bestDogBeach: "Pallarenda Dog Beach",
    bestCentralOffLeashBeach: "Benwell Road, South Townsville",
    bestFencedOption: "A Council-designated fenced dog park",
    bestDogSwimming: "Designated off-leash areas with water access",
    mainRule: "Off leash only in designated Council off-leash areas",
    mainRisk: "Heat, crocodile habitat and changing tides",
    timeNeeded: "From a short walk to a half day",
    cost: "Free",
    carNeeded: "Yes — helpful for reaching most off-leash areas",
    dogFriendly:
      "Rules vary by location — follow signs at each beach or park, and check current Townsville City Council off-leash information",
    bestTimeToVisit: "Early morning or late afternoon, when sand and paths are cooler",
    localVerdict:
      "Townsville has good dog exercise options, but beach rules vary and dogs cannot simply run off leash everywhere.",
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

  "/beaches": {
    bestOverall: "The Strand — the strongest all-round visitor beach area",
    bestForSwimming:
      "Designated swimming areas, subject to current patrol and net arrangements",
    bestWithKids: "The Strand",
    bestWalk: "Rowes Bay to Pallarenda",
    bestSunset: "Pallarenda and Rowes Bay",
    carNeeded: "Helpful for beaches outside The Strand",
    mainConsideration: "Marine stingers and changing swimming conditions",
    bestTimeToVisit: "Early morning or late afternoon; typical stinger season is November to May",
    checkBeforeHeadingOut:
      "Current Townsville City Council beach, patrol and stinger-enclosure information",
    localVerdict:
      "Townsville beaches are best enjoyed as part of the coastal lifestyle, not simply as surf beaches — and swimming suitability varies a lot between them.",
  },
  "/jezzine-barracks": {
    bestFor: ["History", "Coastal views", "Easy walking", "Families"],
    cost: "Free",
    timeNeeded: "1–2 hours",
    bestWithKids: "Fenced, shaded playground and open grassed space",
    bestView: "Kissing Point",
    mainAttraction: "Kissing Point headland, fort remains and coastal walk",
    carNeeded: "No, if you are staying around The Strand or North Ward",
    parking: "Public parking available around the precinct; busy at peak times",
    toilets: "Public toilets, including accessible toilets",
    accessibility:
      "Much of the precinct has accessible paths and facilities; parts of the heritage area are more limited",
    dogFriendly:
      "Dogs allowed on leash in appropriate areas only — follow current signage",
    mainConsideration: "Exposed sections can be very hot in the middle of the day",
    bestTimeToVisit: "Early morning or late afternoon; best combined with The Strand",
    localVerdict:
      "One of the easiest worthwhile additions to a Strand visit — free coastal views, heritage and public art in about an hour.",
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
  "/riverway": {
    bestFor: ["Families", "Free swimming", "Hot days", "Longer stays"],
    mainAttraction: "Free supervised swimming lagoons",
    cost: "Free — lagoons, parklands, library and gallery",
    timeNeeded: "2–4 hours; a half-day for families",
    drivingTimeFromCBD: "Approximately 20 minutes from the Townsville CBD",
    parking: "Free on-site public parking; nearest car parks fill first",
    publicTransport: "Translink buses serve the area; check current routes",
    accessibility:
      "Extensive accessible infrastructure including ramps, wide paths and lagoon access ramps",
    dogFriendly:
      "Leashed dogs in appropriate parkland areas only; not in the lagoons or swimming areas",
    bestTimeToVisit: "Morning, or late afternoon in hot weather",
    checkBeforeHeadingOut:
      "Current lagoon supervised opening hours with Townsville City Council",
    localVerdict:
      "Townsville's best free family half-day once the headline sights are done — swimming, shade, a library and a gallery in one place.",
  },
};

const normalise = (path: string) => (path !== "/" ? path.replace(/\/+$/, "") : path);

export const getQuickFacts = (path: string): QuickFacts | undefined =>
  QUICK_FACTS_BY_PATH[normalise(path)];
