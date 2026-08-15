import { Bed, Compass, Utensils, Dog, Sparkles, Bus, type LucideIcon } from "lucide-react";

/**
 * Curated, visitor-focused Townsville directory data.
 *
 * Rules for this file:
 * - Only categories that actually have listings. Do not add empty categories.
 * - No invented ratings, review counts, prices, opening hours, accessibility,
 *   dog friendliness or family suitability. Facts only.
 * - Descriptions: 1-3 short sentences (what it is / who it suits / where).
 * - `area` must come from the AREAS list so filters stay reliable.
 */

export type CategorySlug =
  | "eat-drink"
  | "accommodation"
  | "tours"
  | "transport"
  | "dog-friendly"
  | "beauty";

export interface CategoryDef {
  slug: CategorySlug;
  label: string;
  icon: LucideIcon;
  /** One-line description shown on the category card. */
  blurb: string;
  /** Short intro used when the category is the active filter. */
  intro: string;
  /** SEO title used when this category is the active filter. */
  title: string;
  /** SEO description used when this category is the active filter. */
  description: string;
  /** Owning editorial guide route. */
  guidePath: string;
  guideLabel: string;
  /** Priority categories are shown first on the landing page. */
  priority: boolean;
}

/**
 * Category order = visual priority on the landing page.
 * Clean category URLs (e.g. /directory/eat-drink) are not implemented yet;
 * filtering is query-string based and canonicalised back to /directory.
 */
export const CATEGORIES: CategoryDef[] = [
  {
    slug: "eat-drink",
    label: "Eat & Drink",
    icon: Utensils,
    blurb: "Cafés, bakeries, pubs, bars and restaurants around Townsville.",
    intro: "Cafés, bakeries, pubs, bars and restaurants across Townsville and Magnetic Island.",
    title: "Townsville Eat & Drink Directory | Cafés, Bars & Restaurants",
    description:
      "Browse Townsville cafés, restaurants, bars and bakeries by area — Palmer Street, The Strand, the CBD and beyond.",
    guidePath: "/food",
    guideLabel: "Food in Townsville guide",
    priority: true,
  },
  {
    slug: "accommodation",
    label: "Accommodation",
    icon: Bed,
    blurb: "Hotels, apartments, motels and holiday parks by area.",
    intro: "Places to stay around Townsville, from The Strand to the CBD and the northern beaches.",
    title: "Townsville Accommodation Directory | Hotels & Apartments",
    description:
      "Browse Townsville accommodation providers by area — hotels, apartments, motels and holiday parks near The Strand, the CBD and the ferry.",
    guidePath: "/accommodation",
    guideLabel: "Where to stay guide",
    priority: true,
  },
  {
    slug: "tours",
    label: "Tours & Experiences",
    icon: Compass,
    blurb: "Reef and wreck dives, island trips, fishing charters and scenic flights.",
    intro: "Reef and wreck dives, island boat trips, fishing charters and scenic flights.",
    title: "Townsville Tours Directory | Reef, Island & Fishing Operators",
    description:
      "Browse Townsville tour operators — Great Barrier Reef and SS Yongala dives, Magnetic Island trips, fishing charters and scenic flights.",
    guidePath: "/things-to-do",
    guideLabel: "Things to do guide",
    priority: true,
  },
  {
    slug: "transport",
    label: "Transport",
    icon: Bus,
    blurb: "Getting to and around Townsville and Magnetic Island.",
    intro: "Services that help you get to and around Townsville and Magnetic Island.",
    title: "Townsville Transport Directory | Ferries & Getting Around",
    description:
      "Browse Townsville transport services for visitors, including the Magnetic Island ferry from the Breakwater terminal.",
    guidePath: "/townsville-without-a-car",
    guideLabel: "Townsville without a car guide",
    priority: true,
  },
  {
    slug: "dog-friendly",
    label: "Dog Friendly",
    icon: Dog,
    blurb: "Cafés, stays and pet services that welcome dogs.",
    intro: "Cafés, stays, groomers, vets and boarding for visitors travelling with a dog.",
    title: "Dog-Friendly Townsville Directory | Cafés, Stays & Pet Services",
    description:
      "Browse dog-friendly Townsville businesses — cafés with outdoor seating, pet-friendly stays, vets, grooming and boarding.",
    guidePath: "/dog-friendly",
    guideLabel: "Dog-friendly Townsville guide",
    priority: false,
  },
  {
    slug: "beauty",
    label: "Beauty & Personal Care",
    icon: Sparkles,
    blurb: "Salons, day spas, massage, barbers and studios.",
    intro: "Salons, day spas, massage therapists, barbers and studios around town.",
    title: "Townsville Beauty & Personal Care Directory | Salons & Spas",
    description:
      "Browse Townsville beauty and personal care businesses — salons, day spas, massage, float therapy, barbers and studios.",
    guidePath: "/local-tips",
    guideLabel: "Local tips",
    priority: false,
  },
];

/** Areas used for filtering. Only areas actually represented in listings. */
export const AREAS = [
  "Townsville CBD",
  "The Strand & North Ward",
  "South Townsville",
  "Magnetic Island",
  "Northern Beaches",
  "Suburban Townsville",
] as const;

export type Area = (typeof AREAS)[number];

export interface Listing {
  name: string;
  category: CategorySlug;
  /** Broad filterable area. */
  area: Area;
  /** More specific location shown on the card (street, suburb or precinct). */
  locality?: string;
  description: string;
  /** Confirmed URL. Omit and set websitePending when the link isn't verified. */
  website?: string;
  /** True when we don't yet have a confirmed website URL. */
  websitePending?: boolean;
}

export const LISTINGS: Listing[] = [
  // --- Eat & Drink ---
  {
    name: "Seasoned",
    category: "eat-drink",
    area: "South Townsville",
    locality: "Palmer Street",
    description:
      "A Palmer Street restaurant with a menu that changes through the year. Suits a special-occasion dinner; booking ahead is sensible.",
    websitePending: true,
  },
  {
    name: "A Touch of Salt",
    category: "eat-drink",
    area: "Townsville CBD",
    locality: "Ross Creek waterfront",
    description:
      "Modern Australian dining on the Ross Creek waterfront, near the CBD. A sit-down dinner option rather than a casual stop.",
    website: "https://www.atouchofsalt.com.au/",
  },
  {
    name: "Watermark Townsville",
    category: "eat-drink",
    area: "The Strand & North Ward",
    locality: "The Strand",
    description:
      "Beachfront restaurant on The Strand with a seafood-led menu and ocean views. Handy if you're already walking the foreshore.",
    website: "https://watermarktownsville.com.au/",
  },
  {
    name: "JAM",
    category: "eat-drink",
    area: "South Townsville",
    locality: "Palmer Street",
    description:
      "A long-running Palmer Street restaurant. Convenient for anyone staying in the Palmer Street dining strip or near the ferry terminal.",
    website: "https://www.jamcorner.com.au/",
  },
  {
    name: "Bridgewater Q",
    category: "eat-drink",
    area: "South Townsville",
    locality: "Palmer Street riverside",
    description:
      "Riverside dining in South Townsville with views back across to Castle Hill. Suits an evening meal after a Strand or CBD day.",
    website: "https://www.bridgewaterq.com.au/",
  },
  {
    name: "Longboard Bar & Grill",
    category: "eat-drink",
    area: "The Strand & North Ward",
    locality: "Gregory Street, The Strand",
    description:
      "Casual burgers and beachfront drinks near the northern end of The Strand. An easy family or after-swim option.",
    website: "https://longboardbar.au/",
  },
  {
    name: "Odyssey on the Strand",
    category: "eat-drink",
    area: "The Strand & North Ward",
    locality: "The Strand",
    description:
      "Greek and Mediterranean food on The Strand, serving breakfast through to dinner. Useful for an early start before a walk or ferry.",
    website: "https://www.odysseyonthestrandqld.com.au/",
  },
  {
    name: "Masala Indian Cuisine",
    category: "eat-drink",
    area: "South Townsville",
    locality: "Palmer Street",
    description: "Indian restaurant in the Palmer Street dining strip. A straightforward group or family dinner option.",
    website: "https://www.masalaindian.com.au/",
  },
  {
    name: "Sakana Sushi",
    category: "eat-drink",
    area: "Townsville CBD",
    description: "Japanese food and sushi in central Townsville. Suits a quick, lighter meal between plans.",
    websitePending: true,
  },
  {
    name: "Townsville Yacht Club",
    category: "eat-drink",
    area: "Townsville CBD",
    locality: "Sir Leslie Thiess Drive",
    description:
      "Casual waterfront dining and drinks near the marina, a short walk from the CBD and the Breakwater ferry terminal.",
    website: "https://www.townsvilleyachtclub.com.au/",
  },

  // --- Accommodation ---
  {
    name: "The Ville Resort – Casino",
    category: "accommodation",
    area: "The Strand & North Ward",
    locality: "Sir Leslie Thiess Drive",
    description:
      "A resort-style stay near the waterfront with a pool, on-site dining, casino and entertainment. Suits visitors who want everything in one place.",
    website: "https://www.the-ville.com.au/",
  },
  {
    name: "Mariners North Holiday Apartments",
    category: "accommodation",
    area: "The Strand & North Ward",
    locality: "The Strand",
    description:
      "Self-contained apartments on The Strand with sea views. A good fit for families or longer stays where a kitchen matters.",
    website: "https://www.marinersnorth.com.au/",
  },
  {
    name: "Rydges Southbank Townsville",
    category: "accommodation",
    area: "Townsville CBD",
    locality: "Palmer Street end of the CBD",
    description:
      "A central hotel close to Palmer Street dining and the stadium. Suits business trips or visitors who want to walk to most things.",
    website: "https://www.rydges.com/accommodation/townsville-qld/townsville/",
  },
  {
    name: "Strand Motel",
    category: "accommodation",
    area: "The Strand & North Ward",
    locality: "The Strand",
    description:
      "A simpler motel-style stay on The Strand, with shops and cafés within walking distance. Suits shorter, lower-cost stays.",
    website: "https://www.strandmotel.com.au/",
  },
  {
    name: "Aquarius on the Beach",
    category: "accommodation",
    area: "The Strand & North Ward",
    locality: "The Strand",
    description:
      "A high-rise stay directly opposite the beachfront on The Strand. Suits visitors who want the foreshore on their doorstep.",
    website: "https://www.aquariusonthebeach.com.au/",
  },
  {
    name: "City Oasis Inn Townsville",
    category: "accommodation",
    area: "Townsville CBD",
    description:
      "A CBD hotel within walking distance of Queensland Country Bank Stadium. Handy for event and game weekends.",
    website: "https://cityoasis.com.au/",
  },
  {
    name: "Hotel Grand Chancellor Townsville",
    category: "accommodation",
    area: "Townsville CBD",
    locality: "Flinders Street",
    description:
      "A high-rise CBD hotel with a rooftop pool, close to the stadium and roughly a 15-minute walk to the Magnetic Island ferry. Suits car-free stays.",
    website: "https://www.grandchancellorhotels.com/hotel-grand-chancellor-townsville",
  },
  {
    name: "Oaks Townsville Hotel",
    category: "accommodation",
    area: "Townsville CBD",
    description:
      "An aparthotel with kitchenette apartments plus a gym and pool. Useful for stays of several nights.",
    website: "https://www.oakshotels.com/en/oaks-townsville-hotel",
  },
  {
    name: "BIG4 Tasman Holiday Parks – Rowes Bay",
    category: "accommodation",
    area: "The Strand & North Ward",
    locality: "Rowes Bay",
    description:
      "A caravan and holiday park at Rowes Bay, just past the northern end of The Strand. Suits caravans, camping and cabin stays.",
    website: "https://tasmanholidayparks.com/queensland/townsville/",
  },

  // --- Tours & Experiences ---
  {
    name: "Adrenalin Snorkel and Dive",
    category: "tours",
    area: "Townsville CBD",
    description:
      "A long-established Townsville dive operator running Great Barrier Reef trips, SS Yongala wreck dives and Museum of Underwater Art visits.",
    website: "https://www.adrenalindive.com.au/",
  },
  {
    name: "Yongala Dive",
    category: "tours",
    area: "Suburban Townsville",
    locality: "Alva Beach departures",
    description: "A dive operator specialising in the SS Yongala wreck. Suits certified divers rather than first-timers.",
    website: "https://www.yongaladive.com.au/",
  },
  {
    name: "Pro Dive Magnetic Island",
    category: "tours",
    area: "Magnetic Island",
    description: "A Magnetic Island-based dive operator, including trips out to the SS Yongala wreck.",
    website: "https://prodivemagnetic.com/",
  },
  {
    name: "Poseidon Adventures",
    category: "tours",
    area: "Magnetic Island",
    description: "Boat tours and snorkelling trips around Magnetic Island's bays. Suits a half-day on the water.",
    website: "https://www.poseidonadventure.com.au/townsville/",
  },
  {
    name: "Poseidon Jet Ski Tours",
    category: "tours",
    area: "Magnetic Island",
    description:
      "Guided jet ski tours around Magnetic Island's coastline, passing the SS Adelaide wreck. An active alternative to a boat tour.",
    website: "https://www.poseidonadventure.com.au/townsville/",
  },
  {
    name: "Nautilus Aviation",
    category: "tours",
    area: "Townsville CBD",
    description: "Helicopter flights over Townsville, Magnetic Island and out to the islands. A short scenic add-on to a trip.",
    website: "https://www.nautilusaviation.com.au/locations/townsville/",
  },
  {
    name: "Aussie Barra Charters",
    category: "tours",
    area: "Townsville CBD",
    description:
      "Barramundi fishing charters operating around Magnetic Island and Cleveland Bay. Suits visitors wanting a guided fishing day.",
    website: "https://aussiebarracharters.com.au/",
  },
  {
    name: "Fish City Fishing Charters",
    category: "tours",
    area: "Townsville CBD",
    description:
      "Fishing charters covering Magnetic Island, Cleveland Bay, Halifax Bay and Cape Cleveland, with half-day and full-day options.",
    website: "https://www.fishcity.com.au/",
  },

  // --- Transport ---
  {
    name: "SeaLink Queensland",
    category: "transport",
    area: "Townsville CBD",
    locality: "Breakwater ferry terminal",
    description:
      "The passenger ferry between Townsville's Breakwater terminal and Nelly Bay on Magnetic Island. The main option for day trips without a car.",
    website: "https://www.sealink.com.au/magnetic-island/",
  },

  // --- Dog Friendly ---
  {
    name: "Juliette's",
    category: "dog-friendly",
    area: "The Strand & North Ward",
    locality: "The Strand",
    description: "A long-running café on The Strand with shaded outdoor seating and sea views.",
    website: "https://juliettes.com.au/",
  },
  {
    name: "Tobruk Kiosk",
    category: "dog-friendly",
    area: "The Strand & North Ward",
    locality: "Southern Strand, by Tobruk Pool",
    description: "Coffee and light meals at the southern end of The Strand, with outdoor seating on the foreshore.",
    websitePending: true,
  },
  {
    name: "Absolute Cravings",
    category: "dog-friendly",
    area: "Suburban Townsville",
    locality: "Next to the Palmetum, Douglas",
    description: "A café beside the Palmetum botanic gardens with outdoor seating. Handy after a garden or riverside walk.",
    website: "https://www.absolutecravings.com.au/",
  },
  {
    name: "Sirens Bayside",
    category: "dog-friendly",
    area: "The Strand & North Ward",
    locality: "Belgian Gardens",
    description: "A Belgian Gardens café with a large outdoor area, close to Rowes Bay and the northern Strand.",
    website: "https://www.sirensbayside.com.au/",
  },
  {
    name: "Shoredrive Motel",
    category: "dog-friendly",
    area: "The Strand & North Ward",
    locality: "The Strand",
    description: "A motel on The Strand offering pet-friendly rooms. Confirm pet terms directly when booking.",
    website: "https://www.shoredrive.com.au/",
  },
  {
    name: "My Pet Hub Townsville",
    category: "dog-friendly",
    area: "Suburban Townsville",
    description:
      "Vet care, daycare, grooming, retail and boarding in one location. Useful for visitors who need pet services mid-trip.",
    website: "https://mypethub.com.au/townsville-vet/",
  },
  {
    name: "Allsorts Doggie Daycare",
    category: "dog-friendly",
    area: "Suburban Townsville",
    description: "Daycare for dogs, with group and one-on-one options. An option for day trips where dogs can't come along.",
    website: "https://www.allsortspets.com.au/",
  },
  {
    name: "Pet Resorts Australia Townsville",
    category: "dog-friendly",
    area: "Northern Beaches",
    locality: "Yabulu",
    description:
      "Boarding kennels north of the city with climate-controlled accommodation and on-site training. Suits longer trips away from your dog.",
    website: "https://petresortsaustralia.com.au/locations/townsville",
  },

  // --- Beauty & Personal Care ---
  {
    name: "Tropical North Day Spa Townsville",
    category: "beauty",
    area: "Townsville CBD",
    description: "A day spa offering massage, aromatherapy and facials. Suits a rest day between activities.",
    website: "https://www.tnds.com.au/",
  },
  {
    name: "endota spa Townsville",
    category: "beauty",
    area: "Suburban Townsville",
    locality: "Stockland Townsville",
    description: "A national day spa brand located inside Stockland shopping centre at Aitkenvale.",
    websitePending: true,
  },
  {
    name: "JoJo's Thai Massage and Spa",
    category: "beauty",
    area: "Townsville CBD",
    description: "Thai massage and spa treatments, including magnesium float sessions.",
    website: "https://www.jojomassageandspa.com.au/",
  },
  {
    name: "City Cave Idalia",
    category: "beauty",
    area: "Suburban Townsville",
    locality: "Idalia",
    description: "Float therapy, sauna and massage in Idalia, close to the stadium side of town.",
    website: "https://www.citycave.com.au/idalia",
  },
  {
    name: "Massage Relax Restore",
    category: "beauty",
    area: "Suburban Townsville",
    description: "Remedial massage and cupping. An option after a long walking or hiking day.",
    website: "https://relaxrestore.com.au/",
  },
  {
    name: "Senorita Nails Spa & Beauty",
    category: "beauty",
    area: "Suburban Townsville",
    locality: "Thuringowa Central",
    description: "Nail and beauty services at Thuringowa Central, near the Willows shopping precinct.",
    websitePending: true,
  },
  {
    name: "YogaHealth Townsville",
    category: "beauty",
    area: "Suburban Townsville",
    locality: "Currajong",
    description: "A yoga studio in Currajong with a regular class timetable. Drop-in suitability varies, so check first.",
    website: "https://yogahealth.net.au/",
  },
  {
    name: "Diamond Barber",
    category: "beauty",
    area: "Townsville CBD",
    description: "A local barbershop in central Townsville.",
    website: "https://www.diamondbarbers.com.au/",
  },
];

export const countByCategory = (slug: CategorySlug) =>
  LISTINGS.filter((l) => l.category === slug).length;
