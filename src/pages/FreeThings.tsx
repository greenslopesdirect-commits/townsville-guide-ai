import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import { Card, CardContent } from "@/components/ui/card";
import {
  Gift,
  PiggyBank,
  Waves,
  Sun,
  Sunset,
  Footprints,
  MapPin,
  ArrowRight,
  CloudRain,
  AlertTriangle,
  Clock,
  TreePine,
  ShoppingBasket,
  Info,
} from "lucide-react";

const SITE = "https://www.townsvilleguide.com.au";
const PATH = "/guides/free-things";

const TITLE = "Best Free Things to Do in Townsville | Local Budget Guide";
const DESCRIPTION =
  "Discover the best genuinely free things to do in Townsville, including beaches, swimming, walks, lookouts, family activities and free itineraries.";

const COMPLETELY_FREE = [
  "Walking The Strand",
  "The Castle Hill lookout",
  "Riverway Lagoons",
  "Jezzine Barracks and Kissing Point",
  "The Strand Water Park",
  "The botanic gardens",
  "Public art around the CBD",
  "Beaches and foreshore walks",
  "Public parks and playgrounds",
];

const FREE_WITH_EXTRAS = [
  "Markets, where browsing is free but food and products are not",
  "Paluma, Pallarenda or northern-beach outings, where fuel or transport is required",
  "Free events that include paid food, rides or optional activities",
  "Locations where parking restrictions or charges may apply",
  "Activities that require you to bring food, equipment or transport",
];

const NOT_FREE = [
  "Magnetic Island, because the ferry costs money even though the island's beaches and walks are free once you arrive",
  "Billabong Sanctuary and other ticketed wildlife attractions",
  "Paid museums and attractions",
  "Paid tours, cruises and hire activities",
  "Food and drink stops",
  "Anything requiring admission or a booking",
];

type Activity = {
  name: string;
  why: string;
  time: string;
  kids: string;
  car: string;
  heat: string;
  facilities: string;
  note?: string;
  to?: string;
  linkLabel?: string;
};

const ACTIVITIES: Activity[] = [
  {
    name: "The Strand",
    why: "Townsville's showpiece foreshore, combining a long flat promenade, beaches, playgrounds, picnic lawns and free swimming areas in one place.",
    time: "Anything from an hour to a full day",
    kids: "Excellent for all ages",
    car: "Not needed if you are staying centrally",
    heat: "Some shaded sections, but long stretches are exposed at midday",
    facilities: "Public toilets, showers, picnic areas and food nearby",
    to: "/the-strand",
    linkLabel: "Read the full Strand guide",
  },
  {
    name: "Castle Hill lookout",
    why: "The classic Townsville panorama over the city, the harbour, the foreshore and Magnetic Island.",
    time: "30 minutes for a drive-up visit, longer on foot",
    kids: "Fine for all ages if you drive up; the tracks suit older children",
    car: "Helpful — driving up is far easier than walking in the heat",
    heat: "Very exposed; the walking tracks are best early or late",
    facilities: "Parking at the summit; carry your own water",
    note: "Check current signage for road, track and parking conditions.",
    to: "/castle-hill",
    linkLabel: "Read the full Castle Hill guide",
  },
  {
    name: "Riverway Lagoons and parklands",
    why: "Free public swimming lagoons beside the Ross River, with shaded lawns, playgrounds and riverside pathways.",
    time: "Half a day is easy",
    kids: "One of the best family options in the city",
    car: "Yes — it sits well away from the city centre",
    heat: "Good shade near the water, which makes it a strong hot-day choice",
    facilities: "Parking, toilets and food outlets nearby",
    note: "Operating times and lifeguard supervision can change — check current council information.",
  },
  {
    name: "Jezzine Barracks and Kissing Point",
    why: "Coastal parkland at the northern end of The Strand with headland views, heritage and Indigenous interpretive art, and sea breezes.",
    time: "1–2 hours",
    kids: "Yes, with sealed paths suitable for prams",
    car: "Not needed if you are walking from The Strand",
    heat: "Breezy but largely open; better early or late",
    facilities: "Parking, toilets and picnic areas",
  },
  {
    name: "The Strand Water Park",
    why: "A free public water-play area on the foreshore — the single best free activity for young children in Townsville.",
    time: "1–2 hours",
    kids: "Ideal for toddlers and primary-school children",
    car: "Not needed if you are staying nearby",
    heat: "Water play helps, but shade is limited around the edges",
    facilities: "Toilets, showers and grassed areas close by",
    note: "Operating times vary and maintenance closures happen — check current signage.",
    to: "/townsville-with-kids",
    linkLabel: "See the Townsville with kids guide",
  },
  {
    name: "Townsville's botanic gardens",
    why: "Queens Gardens, Anderson Gardens and The Palmetum are all free, shaded and quiet — the easiest way to spend time outdoors without the coastal glare.",
    time: "1–2 hours each",
    kids: "Yes, especially for a picnic and open space",
    car: "Helpful, as the three gardens are in different parts of the city",
    heat: "The best shade of any free option; visit early in the day",
    facilities: "Parking, toilets and picnic areas at the main gardens",
  },
  {
    name: "Rowes Bay foreshore",
    why: "A quieter local foreshore with wide views across to Magnetic Island and one of the most reliable sunset spots in town.",
    time: "45 minutes to 1.5 hours",
    kids: "Yes, for walking, scootering and open grass",
    car: "Helpful, though it links to The Strand on foot",
    heat: "Open and exposed; best late in the day",
    facilities: "Parking, picnic areas and toilets nearby",
    to: "/rowes-bay",
    linkLabel: "Read the Rowes Bay guide",
  },
  {
    name: "Pallarenda Beach and Cape Pallarenda public areas",
    why: "A long, quiet beach and conservation-park headland north of the city, with walking tracks and big coastal views.",
    time: "1–3 hours",
    kids: "Yes for the beach and foreshore; the tracks suit older children",
    car: "Yes — public transport options are limited",
    heat: "Exposed walking tracks; go early and carry water",
    facilities: "Parking and toilets at the main foreshore areas",
    note: "Swimming conditions vary — follow signage and marine-stinger advice.",
    to: "/pallarenda-beach",
    linkLabel: "Read the Pallarenda Beach guide",
  },
  {
    name: "Ross River pathways and parklands",
    why: "Kilometres of flat, mostly sealed shared pathways linking parks, playgrounds and picnic areas along the river.",
    time: "As long as you like",
    kids: "Yes, with plenty of playground stops",
    car: "Helpful for reaching a starting point",
    heat: "Shade varies by section; mornings are best",
    facilities: "Parking, toilets and picnic facilities at the main parks",
  },
  {
    name: "Townsville street art and public art",
    why: "The CBD, Flinders Street and the waterfront hold a growing collection of murals and public artworks — a good self-guided walk between other stops.",
    time: "45 minutes to 1.5 hours",
    kids: "Yes, in short bursts",
    car: "Not needed",
    heat: "Limited shade between buildings; better early or late",
    facilities: "CBD toilets, cafés and parking nearby",
    to: "/townsville-without-a-car",
    linkLabel: "See what is walkable without a car",
  },
  {
    name: "Cotters Market browsing",
    why: "The city's main street market fills part of the CBD with stalls, buskers and food. Wandering through costs nothing.",
    time: "1–2 hours",
    kids: "Yes, though it gets busy and hot later in the morning",
    car: "Not needed if you are staying centrally",
    heat: "Partly shaded; go early",
    facilities: "CBD toilets and parking nearby",
    note: "Entry and browsing are free, although food, drinks and products cost extra. Check the current market schedule before travelling.",
  },
  {
    name: "Libraries, galleries and free exhibitions",
    why: "Council libraries and the city's galleries provide air-conditioned, no-cost space — useful in the heat or during rain.",
    time: "30 minutes to 2 hours",
    kids: "Yes, and some libraries run free children's sessions",
    car: "Not needed for the central branches",
    heat: "The most reliable free way to escape the middle of the day",
    facilities: "Toilets and seating on site",
    note: "Opening hours, exhibitions and free sessions change — check current information before relying on them.",
  },
];

const WITH_CHILDREN = [
  "Strand Water Park",
  "Strand playgrounds",
  "Riverway Lagoons",
  "The Strand promenade and beaches",
  "Jezzine Barracks",
  "Public parks and picnic areas across the city",
  "Library children's sessions, where currently operating",
];

const WITHOUT_A_CAR = [
  "The Strand, from end to end",
  "Jezzine Barracks and Kissing Point",
  "CBD public art and Flinders Street",
  "Cotters Market",
  "Marina and waterfront walks",
  "Castle Hill, but only for capable walkers who understand the heat, distance and climb",
];

const HOT_WEATHER = [
  "Riverway Lagoons",
  "Strand Water Park",
  "The Rockpool, when open and conditions are suitable",
  "Shaded garden visits early in the day",
  "Libraries or galleries, where current access is free",
  "Shorter outdoor activities around sunrise or late afternoon",
];

const SUNRISE_SUNSET = [
  "Castle Hill for the widest view",
  "Rowes Bay for an uninterrupted western outlook",
  "The Strand for an easy, well-used walk",
  "Kissing Point at the Jezzine headland",
  "Ross River pathways for a calmer inland option",
  "Pallarenda for a quieter beach sunset",
];

const WALKING = [
  "The Goat Track up Castle Hill",
  "The Strand promenade",
  "Ross River pathways",
  "The Jezzine boardwalk",
  "Rowes Bay through to The Strand",
  "Botanic-garden walking loops",
];

const STRAND_POINTS = [
  { label: "Promenade", text: "A long, flat, sealed waterfront path suitable for walking, prams and easy cycling." },
  { label: "Playgrounds", text: "Several free playgrounds spread along the foreshore." },
  { label: "Strand Water Park", text: "Free water play for younger children; check current operating signage." },
  { label: "Rockpool", text: "A free public saltwater pool when open and conditions allow." },
  { label: "Beach access", text: "Several beach entry points, with swimming suitability varying by season and signage." },
  { label: "Picnic areas", text: "Grassed areas, tables and public barbecues along the foreshore." },
  { label: "Toilets and showers", text: "Public facilities at intervals along the strip." },
  { label: "Walking, cycling and scooters", text: "The shared path suits all three; watch for pedestrians in busy sections." },
  { label: "Food nearby", text: "Cafés and restaurants sit close to the foreshore, but any purchase is optional." },
  { label: "Shade", text: "Shade is patchy — some sections are fully exposed through the middle of the day." },
  { label: "Swimming and stingers", text: "Follow current signage and marine-stinger advice before entering the water." },
];

const SWIM_SAFETY = [
  "Supervise children closely, including in shallow water",
  "Follow local signs, flags and lifeguard advice",
  "Check current marine-stinger guidance before swimming at a beach",
  "Do not assume every beach is suitable for swimming",
  "Avoid creek and freshwater swimming holes after heavy rain",
];

const GARDENS = [
  { name: "Queens Gardens", text: "The city's oldest botanic garden, close to the CBD and beneath Castle Hill." },
  { name: "Anderson Gardens", text: "Large, shaded lawns and a strong tropical plant collection." },
  { name: "The Palmetum", text: "A palm-focused botanic garden beside the Ross River." },
  { name: "Jezzine Barracks", text: "Coastal parkland with heritage interpretation and headland views." },
  { name: "Ross River parklands", text: "Riverside parks, playgrounds and pathways across several suburbs." },
  { name: "Rowes Bay foreshore", text: "Open grassed foreshore with picnic areas and sunset views." },
  { name: "Public playgrounds and picnic areas", text: "Free facilities in most suburbs, many with shade sails and barbecues." },
];

const KEEP_IT_CHEAP = [
  "Bring refillable water bottles for everyone in the group",
  "Use public water-refill points where they are available",
  "Pack a picnic rather than buying every meal",
  "Check parking restrictions and signed time limits before you leave the car",
  "Choose walkable clusters of activities instead of scattered stops",
  "Bring swimmers and towels so a swim stop is always an option",
  "Use public toilets and picnic facilities rather than buying access to them",
  "Avoid unnecessary driving between distant attractions",
  "Check whether an apparently free activity actually requires ferry fares or fuel",
];

const ITINERARIES = [
  {
    title: "Free half-day without a car",
    steps: [
      "Walk a section of The Strand rather than the whole length",
      "Cool off at the Strand Water Park or the Rockpool",
      "Continue north to Jezzine Barracks and Kissing Point",
      "Return along the waterfront, allowing for heat and distance",
    ],
  },
  {
    title: "Free family morning",
    steps: [
      "Start at a Strand playground while it is still cool",
      "Move to the Strand Water Park",
      "Have a picnic or packed snacks on the grass",
      "Take a short waterfront walk and finish before peak heat",
    ],
  },
  {
    title: "Free active morning",
    steps: [
      "Walk Castle Hill early, or drive up for the lookout only",
      "Head down to The Strand to cool off",
      "Finish with a packed breakfast or picnic on the foreshore",
    ],
  },
  {
    title: "Free sunset afternoon",
    steps: [
      "Start with a Rowes Bay foreshore walk",
      "Continue through Jezzine Barracks",
      "Watch sunset from Kissing Point or The Strand",
    ],
  },
  {
    title: "Almost-free day with a car",
    steps: [
      "Begin at a botanic garden while it is shaded and quiet",
      "Swim and picnic at Riverway",
      "Finish at the Castle Hill lookout for late-afternoon views",
      "Pack food instead of buying meals — fuel and parking still cost money, so this day is almost free rather than free",
    ],
  },
];

const HEAT_POINTS = [
  "Start early — the best free activities are far more pleasant before mid-morning",
  "Avoid exposed walks and lookout climbs in peak heat",
  "Carry more water than you think you need",
  "Use hats, sunscreen and lightweight clothing",
  "Plan swimming, shade or indoor stops around the middle of the day",
  "Check weather warnings during the wet season",
  "Postpone exposed walks, mountain drives or swimming-hole visits in unsafe conditions",
  "Never leave children or pets in a parked vehicle",
];

const WET_WEATHER = [
  "Council libraries",
  "Galleries or free exhibitions, where currently operating",
  "Covered public spaces in the CBD and shopping precincts",
  "Short outdoor activities between showers when conditions are safe",
  "Current free community events, if the weather allows",
  "Rescheduling exposed walks, Castle Hill, Paluma or beach outings during severe weather",
];

const PRACTICAL = [
  { label: "Parking", text: "Most parks and foreshore areas have free parking, but signed restrictions apply in parts of the CBD and along The Strand." },
  { label: "Public transport", text: "Buses serve the city and main suburbs; check current routes and timetables before relying on them." },
  { label: "Toilets", text: "Public facilities exist at the main foreshore areas, gardens and parklands." },
  { label: "Shade", text: "Shade is limited in coastal areas and on lookout tracks; gardens and riverside parks are better." },
  { label: "Prams", text: "The Strand, Jezzine Barracks and most parklands have sealed, flat paths." },
  { label: "Accessibility", text: "Central foreshore areas are the most accessible; walking tracks and beaches are not." },
  { label: "Food", text: "Bringing your own food is the single biggest saving on an otherwise free day." },
  { label: "Drinking water", text: "Carry water everywhere; the tropical climate is unforgiving on exposed walks." },
  { label: "Sunscreen", text: "Needed year-round, including on cloudy days." },
  { label: "Swimwear", text: "Worth packing whenever the plan touches the foreshore or Riverway." },
  { label: "Footwear", text: "Closed shoes for hill and headland tracks; thongs are fine on the promenade." },
  { label: "Distances", text: "The city is spread out — free attractions can be far apart even when they look close on a map." },
  { label: "Is a car helpful?", text: "Yes for Riverway, the gardens and Pallarenda; not necessary for The Strand, Jezzine and the CBD." },
];

const MISTAKES = [
  "Assuming Magnetic Island is a free day trip when the ferry costs money",
  "Forgetting to budget for fuel, parking or public-transport fares",
  "Planning too many distant attractions in one day",
  "Visiting exposed lookouts and beaches in the middle of the day",
  "Assuming every beach is suitable for swimming",
  "Relying on a market or event without checking the current schedule",
  "Buying every meal and drink during an otherwise free day",
  "Treating water-refill stations as an attraction rather than a convenience",
  "Driving to Paluma or a swimming hole without checking weather and access first",
];

const RELATED = [
  { name: "The Strand", to: "/the-strand" },
  { name: "Castle Hill", to: "/castle-hill" },
  { name: "Walking Castle Hill", to: "/guides/walking-castle-hill" },
  { name: "Townsville With Kids", to: "/townsville-with-kids" },
  { name: "Townsville Without a Car", to: "/townsville-without-a-car" },
  { name: "Townsville in One Day", to: "/townsville-in-one-day" },
  { name: "First Time in Townsville", to: "/first-time-in-townsville" },
  { name: "Beat the Heat", to: "/guides/beat-the-heat" },
  { name: "Rainy Day Activities", to: "/guides/rainy-day-activities" },
  { name: "Townsville Beaches", to: "/beaches" },
  { name: "Stinger Safety", to: "/guides/stinger-safety" },
  { name: "Paluma Day Trip", to: "/guides/paluma-day-trip" },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is the best free thing to do in Townsville?",
    a: "The Strand. It combines a long waterfront walk, beaches, playgrounds, the Strand Water Park, the Rockpool and picnic areas in one place, and none of it costs anything.",
  },
  {
    q: "Can you visit Castle Hill for free?",
    a: "Yes. There is no charge to drive up or walk up to the Castle Hill lookout, and parking at the summit is free. The only cost is fuel if you drive.",
  },
  {
    q: "Is Strand Water Park free?",
    a: "Yes, it is a free public water-play area on The Strand. Operating times and maintenance closures can change, so check current signage before planning a morning around it.",
  },
  {
    q: "Are Riverway Lagoons free?",
    a: "Yes, the Riverway Lagoons are free public swimming lagoons with free parking. Opening times and lifeguard supervision can change, so check current council information.",
  },
  {
    q: "What can families do for free in Townsville?",
    a: "The Strand Water Park, Strand playgrounds, Riverway Lagoons, Jezzine Barracks, the botanic gardens and the many suburban parks and picnic areas are all free and suit children well.",
  },
  {
    q: "What can you do for free without a car?",
    a: "If you are staying centrally you can walk The Strand, Jezzine Barracks, Kissing Point, the CBD public art, Cotters Market and the marina waterfront. Castle Hill is possible on foot, but only for capable walkers in cooler conditions.",
  },
  {
    q: "Are Townsville's beaches free to visit?",
    a: "Yes, beach access is free across the region. Swimming suitability is a separate question — follow local signage, patrol flags and marine-stinger advice, and do not assume every beach is safe to swim at.",
  },
  {
    q: "Is Magnetic Island a free day trip?",
    a: "No. The island's beaches and walking tracks are free once you arrive, but the ferry crossing costs money, so a Magnetic Island day should be budgeted as a paid trip.",
  },
  {
    q: "What free activities are suitable in hot weather?",
    a: "Riverway Lagoons, the Strand Water Park and the Rockpool when open are the best options. Shaded gardens early in the day and air-conditioned libraries work well through the middle of the day.",
  },
  {
    q: "Are Townsville markets free?",
    a: "Entry and browsing are free, although food, drinks and products cost extra. Check the current market schedule before travelling, as market days and times change.",
  },
  {
    q: "What are the best free sunset locations?",
    a: "Castle Hill for the widest view, Rowes Bay for an open western outlook, and The Strand or Kissing Point for an easy walk with a sunset at the end.",
  },
  {
    q: "Can you spend a full day in Townsville without paying for attractions?",
    a: "Yes. A day built around The Strand, Jezzine Barracks, a swim and a picnic costs nothing beyond food you bring yourself. Fuel, parking and transport are the costs most likely to creep in.",
  },
];

const Fact = ({ label, value }: { label: string; value: string }) => (
  <p className="text-sm text-muted-foreground">
    <span className="font-medium text-foreground">{label}:</span> {value}
  </p>
);

const FreeThings = () => {
  return (
    <>
      <SEOHead title={TITLE} description={DESCRIPTION} canonical={`${SITE}${PATH}`} ogType="article" />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Best Free Things to Do in Townsville",
            description: DESCRIPTION,
            author: { "@type": "Person", name: "Duncan Ross" },
            publisher: { "@type": "Organization", name: "Townsville Guide" },
            mainEntityOfPage: `${SITE}${PATH}`,
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
              { "@type": "ListItem", position: 2, name: "Free Things to Do in Townsville", item: `${SITE}${PATH}` },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="bg-muted/30 border-b border-border">
        <div className="container mx-auto max-w-4xl px-4 py-12 md:py-16 text-center">
          <div className="inline-block rounded-full border border-border bg-background px-3 py-1 text-xs md:text-sm text-muted-foreground mb-4">
            Free and budget planning guide
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
            Best Free Things to Do in Townsville
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Townsville has an unusually high number of genuinely free experiences: beaches,
            public swimming areas, parks and gardens, coastal walks, lookouts and open public
            spaces that cost nothing to use.
          </p>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
            Not everything described as free elsewhere really is. Some activities cost nothing at
            all, some are free to enter but still involve fuel, parking, transport or food, and
            some — Magnetic Island in particular — are not free day trips at all because the ferry
            costs money. This guide keeps those distinctions clear so you can plan a realistic
            free half-day or full day.
          </p>
        </div>
      </section>

      <img
        src="/5-free-things-to-do.webp"
        alt="View from the Castle Hill lookout over Townsville, The Strand and Cleveland Bay — one of the city's best free experiences"
        className="w-full h-[280px] md:h-[420px] object-cover"
        width={1600}
        height={900}
        loading="eager"
        decoding="async"
      />

      <div className="container mx-auto max-w-4xl px-4 py-12 space-y-14">
        {/* Quick facts */}
        <GuideQuickFacts />

        {/* Cost transparency */}
        <section aria-labelledby="really-free">
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="really-free" className="text-2xl md:text-3xl font-bold">
              Are These Activities Really Free?
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Most Townsville budget lists blur three very different things. Sorting them out first
            makes the rest of your planning much easier.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="h-full bg-muted/40">
              <CardContent className="p-5">
                <h3 className="font-semibold mb-2">Completely free</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                  {COMPLETELY_FREE.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full bg-muted/40">
              <CardContent className="p-5">
                <h3 className="font-semibold mb-2">Free entry, possible extra costs</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                  {FREE_WITH_EXTRAS.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full bg-muted/40">
              <CardContent className="p-5">
                <h3 className="font-semibold mb-2">Not genuinely free</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                  {NOT_FREE.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            If a Magnetic Island day is still on your list, plan it properly with the{" "}
            <Link to="/guides/magnetic-island-ferry" className="text-primary underline underline-offset-2">
              ferry guide
            </Link>{" "}
            and the{" "}
            <Link to="/guides/magnetic-island-day-trip" className="text-primary underline underline-offset-2">
              day trip guide
            </Link>
            , and treat it as a paid outing with free activities once you arrive.
          </p>
        </section>

        {/* Main list */}
        <section aria-labelledby="best-free">
          <div className="flex items-center gap-3 mb-4">
            <Gift className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="best-free" className="text-2xl md:text-3xl font-bold">
              Best Completely Free Experiences
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A quick practical summary of each, with a link to the full guide where one exists.
            Those guides remain the place to check parking, access, facilities and detailed
            itineraries.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {ACTIVITIES.map((a) => (
              <Card key={a.name} className="h-full">
                <CardContent className="p-5 space-y-2">
                  <h3 className="text-lg font-semibold">{a.name}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{a.why}</p>
                  <div className="space-y-1 pt-1">
                    <Fact label="Time needed" value={a.time} />
                    <Fact label="With children" value={a.kids} />
                    <Fact label="Car" value={a.car} />
                    <Fact label="Heat and shade" value={a.heat} />
                    <Fact label="Facilities" value={a.facilities} />
                    {a.note && <Fact label="Note" value={a.note} />}
                  </div>
                  {a.to && (
                    <Link
                      to={a.to}
                      className="inline-flex items-center gap-1.5 text-sm text-primary underline underline-offset-2 pt-1"
                    >
                      {a.linkLabel ?? "Read the full guide"}
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* By type */}
        <section aria-labelledby="by-type">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="by-type" className="text-2xl md:text-3xl font-bold">
              Best Free Activities by Type
            </h2>
          </div>

          <div className="space-y-4">
            <Card className="bg-muted/40">
              <CardContent className="p-5 md:p-6">
                <h3 className="text-xl font-semibold mb-3">With children</h3>
                <ul className="space-y-1.5 text-muted-foreground leading-relaxed list-disc pl-5">
                  {WITH_CHILDREN.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <Link
                  to="/townsville-with-kids"
                  className="inline-flex items-center gap-1.5 mt-4 text-primary underline underline-offset-2"
                >
                  Read the Townsville with kids guide
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-muted/40">
              <CardContent className="p-5 md:p-6">
                <h3 className="text-xl font-semibold mb-3">Without a car</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Central Townsville is walkable, but the wider region is not. Free attractions
                  such as Riverway, the gardens and Pallarenda are much harder to reach without a
                  vehicle.
                </p>
                <ul className="space-y-1.5 text-muted-foreground leading-relaxed list-disc pl-5">
                  {WITHOUT_A_CAR.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <Link
                  to="/townsville-without-a-car"
                  className="inline-flex items-center gap-1.5 mt-4 text-primary underline underline-offset-2"
                >
                  Read the Townsville without a car guide
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-muted/40">
              <CardContent className="p-5 md:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">In hot weather</h3>
                </div>
                <ul className="space-y-1.5 text-muted-foreground leading-relaxed list-disc pl-5">
                  {HOT_WEATHER.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <Link
                  to="/guides/beat-the-heat"
                  className="inline-flex items-center gap-1.5 mt-4 text-primary underline underline-offset-2"
                >
                  Read the beat the heat guide
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-muted/40">
              <CardContent className="p-5 md:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sunset className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">At sunrise or sunset</h3>
                </div>
                <ul className="space-y-1.5 text-muted-foreground leading-relaxed list-disc pl-5">
                  {SUNRISE_SUNSET.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  Allow for how quickly it gets dark in the tropics, wear suitable footwear on
                  tracks, take care with traffic on Castle Hill Road, and stay in well-used areas
                  after dark. The{" "}
                  <Link to="/guides/sunset-walks" className="text-primary underline underline-offset-2">
                    sunset walks guide
                  </Link>{" "}
                  has more detail.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/40">
              <CardContent className="p-5 md:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Footprints className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">For walking and exercise</h3>
                </div>
                <ul className="space-y-1.5 text-muted-foreground leading-relaxed list-disc pl-5">
                  {WALKING.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <Link
                  to="/guides/walking-castle-hill"
                  className="inline-flex items-center gap-1.5 mt-4 text-primary underline underline-offset-2"
                >
                  Full Castle Hill track information
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* The Strand */}
        <section aria-labelledby="strand">
          <div className="flex items-center gap-3 mb-4">
            <Waves className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="strand" className="text-2xl md:text-3xl font-bold">
              The Strand: the Best Free All-Round Option
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If you only have time for one free thing in Townsville, make it The Strand. Swimming,
            play, walking, picnics and public facilities all sit along the same stretch of
            foreshore, so a whole day can happen without spending anything.
          </p>
          <Card className="bg-muted/40">
            <CardContent className="p-5 md:p-6">
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                {STRAND_POINTS.map((p) => (
                  <li key={p.label}>
                    <span className="font-medium text-foreground">{p.label}:</span> {p.text}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 mt-4">
                <Link to="/the-strand" className="text-primary underline underline-offset-2">
                  Read the complete Strand guide
                </Link>
                <Link to="/riverway" className="text-primary underline underline-offset-2">
                  Free lagoons at Riverway
                </Link>
                <Link to="/guides/stinger-safety" className="text-primary underline underline-offset-2">
                  Marine stinger safety
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Free swimming */}
        <section aria-labelledby="swimming">
          <h2 id="swimming" className="text-2xl md:text-3xl font-bold mb-3">
            Free Swimming in Townsville
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Free swimming is one of the city's real strengths, provided you choose the right spot
            for the conditions.
          </p>
          <ul className="space-y-1.5 text-muted-foreground leading-relaxed list-disc pl-5 mb-4">
            <li>Riverway Lagoons</li>
            <li>The Strand Water Park</li>
            <li>The Rockpool, when open</li>
            <li>Designated beach swimming areas where conditions and signage permit</li>
          </ul>
          <ul className="space-y-1.5 text-muted-foreground leading-relaxed list-disc pl-5">
            {SWIM_SAFETY.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link to="/guides/stinger-safety" className="text-primary underline underline-offset-2">
              Stinger safety guide
            </Link>
            <Link to="/beaches" className="text-primary underline underline-offset-2">
              Compare Townsville beaches
            </Link>
            <Link to="/little-crystal-creek-townsville" className="text-primary underline underline-offset-2">
              Little Crystal Creek closure information
            </Link>
          </div>
        </section>

        {/* Gardens and parks */}
        <section aria-labelledby="gardens">
          <div className="flex items-center gap-3 mb-4">
            <TreePine className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="gardens" className="text-2xl md:text-3xl font-bold">
              Free Gardens, Parks and Public Spaces
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {GARDENS.map((g) => (
              <p key={g.name} className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">{g.name}:</span> {g.text}
              </p>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Facilities vary between sites and change over time, so check current council
            information for anything you are relying on.
          </p>
        </section>

        {/* Markets and events */}
        <section aria-labelledby="markets">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingBasket className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="markets" className="text-2xl md:text-3xl font-bold">
              Cotters Market and Free Events
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Entry and browsing are free, although food, drinks and products cost extra. Check the
            current market schedule before travelling.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Townsville also runs a steady stream of free community events through the year. Event
            schedules change constantly, so check current listings rather than planning around a
            date you saw months earlier — and remember that a free-entry event can still include
            paid food, rides or optional activities.
          </p>
          <Link
            to="/events"
            className="inline-flex items-center gap-1.5 text-primary underline underline-offset-2"
          >
            See what is on in Townsville
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </section>

        {/* Keep it cheap */}
        <section aria-labelledby="cheap">
          <div className="flex items-center gap-3 mb-4">
            <PiggyBank className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="cheap" className="text-2xl md:text-3xl font-bold">
              How to Keep a Free Day Cheap
            </h2>
          </div>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            {KEEP_IT_CHEAP.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
        </section>

        {/* Itineraries */}
        <section aria-labelledby="itineraries">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="itineraries" className="text-2xl md:text-3xl font-bold">
              Free Itineraries
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Treat these as flexible shapes for a day rather than fixed schedules, and adjust for
            heat, distance and current opening information.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {ITINERARIES.map((i) => (
              <Card key={i.title} className="h-full bg-muted/40">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{i.title}</h3>
                  <ol className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-decimal pl-5">
                    {i.steps.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Walking Castle Hill first thing? The{" "}
            <Link to="/guides/walking-castle-hill" className="text-primary underline underline-offset-2">
              Castle Hill walking guide
            </Link>{" "}
            covers the tracks in detail, and{" "}
            <Link to="/townsville-in-one-day" className="text-primary underline underline-offset-2">
              Townsville in one day
            </Link>{" "}
            shows how the free stops fit around paid ones.
          </p>
        </section>

        {/* Heat */}
        <section aria-labelledby="heat">
          <div className="flex items-center gap-3 mb-4">
            <Sun className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="heat" className="text-2xl md:text-3xl font-bold">
              Heat and Weather Planning
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Almost every free attraction in Townsville is outdoors, so the weather shapes the day
            more than the budget does.
          </p>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            {HEAT_POINTS.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link to="/guides/beat-the-heat" className="text-primary underline underline-offset-2">
              Beat the heat guide
            </Link>
            <Link to="/guides/paluma-day-trip" className="text-primary underline underline-offset-2">
              Paluma day trip conditions
            </Link>
          </div>
        </section>

        {/* Wet weather */}
        <section aria-labelledby="wet">
          <div className="flex items-center gap-3 mb-4">
            <CloudRain className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="wet" className="text-2xl md:text-3xl font-bold">
              Free Activities in Wet Weather
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Honestly, Townsville has fewer fully free wet-weather attractions than a major city, so
            a wet day usually means adjusting the plan rather than swapping in a big indoor
            alternative.
          </p>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            {WET_WEATHER.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
          <Card className="mt-4 bg-muted/40">
            <CardContent className="p-5 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Great Barrier Reef Aquarium, formerly known as Reef HQ, is closed for
                redevelopment and is not currently available as a wet-weather attraction. Check the
                official aquarium website for redevelopment and reopening updates, and see our{" "}
                <Link to="/reef-hq-townsville" className="text-primary underline underline-offset-2">
                  Reef HQ status page
                </Link>{" "}
                for current context.
              </p>
            </CardContent>
          </Card>
          <Link
            to="/guides/rainy-day-activities"
            className="inline-flex items-center gap-1.5 mt-4 text-primary underline underline-offset-2"
          >
            See the rainy day activities guide
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </section>

        {/* Practical */}
        <section aria-labelledby="practical">
          <h2 id="practical" className="text-2xl md:text-3xl font-bold mb-4">
            Practical Considerations
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {PRACTICAL.map((p) => (
              <p key={p.label} className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">{p.label}:</span> {p.text}
              </p>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            New to the city? The{" "}
            <Link to="/first-time-in-townsville" className="text-primary underline underline-offset-2">
              first-time visitor guide
            </Link>{" "}
            covers the wider basics, and the{" "}
            <Link to="/jezzine-barracks" className="text-primary underline underline-offset-2">
              Jezzine Barracks guide
            </Link>{" "}
            has the detail for the headland parkland.
          </p>
        </section>

        {/* Mistakes */}
        <section aria-labelledby="mistakes">
          <h2 id="mistakes" className="text-2xl md:text-3xl font-bold mb-3">
            Common Budget-Planning Mistakes
          </h2>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            {MISTAKES.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq">
          <h2 id="faq" className="text-2xl md:text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <Card key={f.q} className="bg-muted/40">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Related */}
        <section aria-labelledby="related">
          <h2 id="related" className="text-2xl md:text-3xl font-bold mb-6">
            Keep Planning Your Townsville Trip
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RELATED.map((g) => (
              <Link key={g.to} to={g.to} className="group">
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardContent className="p-4 flex items-center justify-between gap-3">
                    <span className="font-medium text-foreground">{g.name}</span>
                    <ArrowRight
                      className="w-4 h-4 text-primary flex-shrink-0 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default FreeThings;
