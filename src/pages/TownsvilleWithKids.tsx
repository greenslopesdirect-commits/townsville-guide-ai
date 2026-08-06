import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import { Card, CardContent } from "@/components/ui/card";
import {
  Baby,
  Sun,
  Waves,
  TreePine,
  Backpack,
  MapPin,
  ArrowRight,
  CloudRain,
  ShieldCheck,
  Clock,
  AlertTriangle,
  Users,
} from "lucide-react";
import heroImage from "@/assets/the-strand-townsville.webp";

const SITE = "https://www.townsvilleguide.com.au";
const PATH = "/townsville-with-kids";

const TITLE = "Best Things to Do in Townsville With Kids | Family Guide";
const DESCRIPTION =
  "Plan a family trip to Townsville with the best things to do with kids, including free activities, wildlife, swimming, day trips, heat tips and easy itineraries.";

const FAMILY_STRENGTHS = [
  "Beaches and water play",
  "Wildlife",
  "Playgrounds and parks",
  "Short scenic outings",
  "Magnetic Island",
  "Relaxed outdoor days",
];

type AgeGroup = { title: string; intro: string; items: string[] };

const AGE_GROUPS: AgeGroup[] = [
  {
    title: "Toddlers and preschoolers",
    intro:
      "Keep days short, shaded and close to water. Little ones are usually happiest with one main activity and an early finish.",
    items: [
      "Strand Water Park for shallow, supervised water play",
      "Strand playgrounds, with shade and grass nearby",
      "Riverway Lagoons for calm, gently sloping swimming areas",
      "Short sections of The Strand rather than the full length",
      "Jezzine Barracks for open space and sea breezes",
      "Playground and picnic stops between other activities",
      "A simple Magnetic Island ferry trip, without an overpacked itinerary",
    ],
  },
  {
    title: "Primary-school children",
    intro:
      "This age group handles a fuller day and enjoys wildlife, water and a little bit of adventure.",
    items: [
      "Billabong Sanctuary for close-up native wildlife",
      "Museum of Tropical Queensland, subject to current opening status",
      "Magnetic Island bays, beaches and short tracks",
      "Castle Hill lookout, most easily reached by car",
      "Swimming and water play at The Strand or Riverway",
      "Easy nature walks with plenty of breaks",
      "Scooters or bikes along the flat Strand pathways",
    ],
  },
  {
    title: "Teenagers",
    intro:
      "Older kids usually want more distance, more activity and something to look at when they get there.",
    items: [
      "Castle Hill, including the walking tracks in cooler conditions",
      "Forts Walk on Magnetic Island for views and WWII history",
      "Magnetic Island beaches and bays",
      "Longer coastal and hill walks",
      "Snorkelling where conditions, supervision and safety advice allow",
      "Active recreation areas along The Strand",
      "Evening waterfront walks and food stops",
    ],
  },
];

type Activity = {
  name: string;
  to?: string;
  why: string;
  ages: string;
  time: string;
  cost: string;
  car: string;
  heat: string;
  facilities: string;
};

const ACTIVITIES: Activity[] = [
  {
    name: "The Strand",
    to: "/the-strand",
    why: "One long waterfront strip with beaches, playgrounds, grass, swimming areas and food, so families can move between activities easily.",
    ages: "All ages",
    time: "1–4 hours, or a whole day in stages",
    cost: "Free to visit",
    car: "Not essential if you are staying nearby",
    heat: "Shade is patchy in places — plan for morning or late afternoon",
    facilities: "Toilets, showers, picnic areas and food options along the foreshore",
  },
  {
    name: "Strand Water Park",
    to: "/the-strand",
    why: "Free water play designed for children, with fountains and shallow areas rather than open water.",
    ages: "Toddlers to primary-school children",
    time: "1–2 hours",
    cost: "Free",
    car: "Not essential",
    heat: "One of the better hot-weather options, but still bring hats and sunscreen",
    facilities: "Toilets and grassed areas nearby; check current signage for operating times",
  },
  {
    name: "Riverway Lagoons",
    to: "/guides/free-things",
    why: "Free public lagoons away from the coast, with calmer water and lawns for a relaxed family afternoon.",
    ages: "All ages, with close supervision",
    time: "2–3 hours",
    cost: "Free",
    car: "Helpful — it sits along the Ross River away from the CBD",
    heat: "Good midday alternative to exposed walking, with shaded lawn areas",
    facilities: "Toilets, grassed picnic areas and nearby food outlets",
  },
  {
    name: "Billabong Sanctuary",
    to: "/billabong-sanctuary",
    why: "Native wildlife park with keeper presentations and close encounters that most children remember from the trip.",
    ages: "Primary-school children especially, but suits most ages",
    time: "Half a day or more",
    cost: "Paid entry — check current pricing with the operator",
    car: "Yes — it is south of the city with limited public transport",
    heat: "Largely outdoors, so start early and plan shaded breaks",
    facilities: "Toilets, food and shaded seating on site",
  },
  {
    name: "Magnetic Island",
    to: "/guides/magnetic-island-day-trip",
    why: "A short ferry ride to bays, beaches, koalas and walking tracks — usually the highlight of a family trip.",
    ages: "All ages, with a simpler plan for younger children",
    time: "A full day, or half a day with toddlers",
    cost: "Paid ferry fares; most island activities are free",
    car: "Not needed for the ferry; island transport needs planning",
    heat: "Island walks are exposed — swim and walk early",
    facilities: "Toilets, cafés and shops in the main bays",
  },
  {
    name: "Castle Hill lookout",
    to: "/castle-hill",
    why: "A short drive to a big view over the city, the coast and Magnetic Island, with almost no walking required.",
    ages: "All ages at the lookout; walking tracks suit older children",
    time: "30–60 minutes for the lookout",
    cost: "Free",
    car: "Helpful — driving is by far the easiest way up",
    heat: "Very exposed at the summit; late afternoon is more comfortable",
    facilities: "Summit toilets are available; bring your own water",
  },
  {
    name: "Jezzine Barracks",
    to: "/guides/jezzine-barracks",
    why: "Open headland space with coastal boardwalks, artwork and history at the northern end of The Strand.",
    ages: "All ages",
    time: "1–2 hours",
    cost: "Free",
    car: "Not essential — it is walkable from The Strand",
    heat: "Sea breezes help, but shade is limited in the open areas",
    facilities: "Picnic areas and parking; check signage for current facilities",
  },
  {
    name: "Museum of Tropical Queensland",
    why: "An indoor, air-conditioned option covering shipwrecks, reef life and North Queensland history.",
    ages: "Primary-school children and teenagers",
    time: "1–2 hours",
    cost: "Paid entry — check current pricing and opening status",
    car: "Not essential if you are staying in or near the CBD",
    heat: "One of the few genuine indoor options in the city",
    facilities: "Toilets and a central CBD location; confirm current opening before travelling",
  },
  {
    name: "Paluma or Big Crystal Creek",
    to: "/guides/paluma-day-trip",
    why: "A rainforest and mountain day trip north of the city, better suited to older children who can manage the drive.",
    ages: "Older children and teenagers",
    time: "Most of a day",
    cost: "Free at natural areas; food and fuel cost extra",
    car: "Yes — a private vehicle is essential",
    heat: "Cooler on the range, but check weather and access before leaving",
    facilities: "Facilities vary by site and can be closed — check current alerts",
  },
  {
    name: "Local playgrounds and parks",
    to: "/guides/free-things",
    why: "Free, low-effort stops that break up a day and let children burn off energy near your accommodation.",
    ages: "All ages",
    time: "30–90 minutes",
    cost: "Free",
    car: "Depends on the park",
    heat: "Equipment gets hot — avoid the middle of the day",
    facilities: "Varies by park; not all have toilets or shade",
  },
];

const STRAND_POINTS = [
  { label: "Strand Water Park", text: "Free water play close to parking, toilets and grass." },
  { label: "Playgrounds", text: "Several along the foreshore, so you can pick one near shade or food." },
  { label: "Rockpool", text: "A free public pool beside the beach, popular when the ocean is not suitable." },
  {
    label: "Beach and stinger nets",
    text: "Swimming enclosures operate seasonally — follow the current signs and lifeguard advice.",
  },
  { label: "Picnic areas", text: "Tables, barbecues and lawn areas spread along the length of the foreshore." },
  { label: "Toilets and showers", text: "Available at intervals along the foreshore, including near swimming areas." },
  { label: "Food and ice cream", text: "Cafés, kiosks and takeaway options at the northern and southern ends." },
  { label: "Scooters and bikes", text: "The main pathway is flat and wide, which suits scooters, bikes and prams." },
  { label: "Shade", text: "Trees and shelters help, but long stretches are exposed in the middle of the day." },
  { label: "Accessibility", text: "Mostly flat, sealed pathways with accessible parking at several points." },
  {
    label: "An easy family route",
    text: "Start at the Rockpool, walk north to the Water Park and finish at Jezzine Barracks — turn back whenever the kids have had enough.",
  },
];

const FREE_THINGS = [
  "The Strand foreshore",
  "Strand Water Park",
  "Riverway Lagoons",
  "Castle Hill lookout",
  "Jezzine Barracks",
  "Local playgrounds",
  "Picnic areas and barbecues",
  "Waterfront and sunset walks",
  "Local markets when operating",
];

const HEAT_TIPS = [
  "Start exposed outdoor activities early in the day",
  "Avoid long playground visits or walks through the peak afternoon heat",
  "Carry plenty of drinking water for everyone, including yourself",
  "Use hats, sunscreen and lightweight, breathable clothing",
  "Plan lunch, swimming, shade or an indoor break around the middle of the day",
  "Never leave children or pets in a parked vehicle",
  "Check weather warnings during the wet season before heading out",
  "Postpone creek, waterfall or mountain outings when weather or access conditions are unsafe",
];

const WET_WEATHER = [
  "Museum of Tropical Queensland, subject to current opening information",
  "Cinema, food or family time at a shopping centre",
  "Indoor swimming where a pool is currently open",
  "Short outdoor activities between showers, when conditions are safe",
  "Pool time at your accommodation with close supervision",
  "Rescheduling Magnetic Island, Paluma or wildlife outings during severe weather",
];

const SWIM_POINTS = [
  "Use designated or patrolled swimming areas where they are available",
  "Follow all signs, lifeguard instructions and local advice",
  "Understand marine-stinger risks and the seasons they apply to",
  "Do not assume every beach in the region is suitable for swimming",
  "Supervise children closely, including in shallow water",
  "Take care around lagoons, beaches, creeks and freshwater swimming holes",
  "Avoid creeks and waterfalls after heavy rain",
  "Avoid slippery rocks and any jumping areas",
];

type Itinerary = { title: string; steps: string[] };

const ITINERARIES: Itinerary[] = [
  {
    title: "Half a day with younger children",
    steps: [
      "Early visit to a Strand playground or the Water Park",
      "Snack or breakfast at a nearby café",
      "Rockpool swim or a short waterfront walk",
      "Finish or take a break before the hottest part of the day",
    ],
  },
  {
    title: "One full family day",
    steps: [
      "Early Strand visit for swimming and play",
      "Lunch and a midday rest out of the heat",
      "Castle Hill lookout in the late afternoon",
      "Dinner or a sunset walk along The Strand",
    ],
  },
  {
    title: "Wildlife day",
    steps: [
      "Billabong Sanctuary from early in the day",
      "Return to your accommodation for a break",
      "Riverway or The Strand later if the children still have energy",
    ],
  },
  {
    title: "Magnetic Island family day",
    steps: [
      "Take an early ferry across",
      "Choose one or two main areas rather than trying to cover the whole island",
      "Lunch and a rest in the shade",
      "Head back before the children become overtired",
    ],
  },
  {
    title: "Two-day family plan",
    steps: [
      "Day one: The Strand, Jezzine Barracks and Castle Hill late in the afternoon",
      "Day two: Billabong Sanctuary or a Magnetic Island day trip",
      "Keep both days flexible and adjust for weather and energy levels",
    ],
  },
];

const PARENT_NOTES = [
  { label: "Prams", text: "The Strand, Jezzine Barracks and Riverway pathways are flat and pram-friendly; bush tracks are not." },
  { label: "Toilets", text: "Widely available along The Strand and at major parks; regional sites are less reliable." },
  { label: "Baby changing", text: "Available at some parks and shopping centres, but do not assume every attraction has facilities." },
  { label: "Shade", text: "Plan around it — shade is patchy at beaches, playgrounds and lookouts." },
  { label: "Car seats", text: "Check that hire cars and transfers include suitable restraints before you arrive." },
  { label: "Public transport", text: "Buses cover the city but suit a simpler itinerary; some attractions are impractical without a car." },
  { label: "Parking", text: "Generally straightforward at The Strand, Riverway and Castle Hill; follow current signs." },
  { label: "Snacks and food", text: "Bring snacks for day trips — options thin out away from the city and main island bays." },
  { label: "Water bottles", text: "Refillable bottles are essential; refill before leaving the city on day trips." },
  { label: "Accessibility", text: "Waterfront areas are the most accessible; walking tracks and creek sites are not." },
  { label: "Quiet breaks", text: "Shaded lawns, park shelters and cafés along The Strand work well for feeding or calming a tired child." },
  { label: "When a car helps", text: "Castle Hill, Billabong Sanctuary, Riverway and any regional day trip." },
];

const WHAT_TO_BRING = [
  "Refillable water bottles",
  "Hats",
  "Sunscreen",
  "Swimmers",
  "Towels",
  "Spare clothes",
  "Insect repellent",
  "Snacks",
  "A wet bag",
  "Comfortable shoes",
  "Lightweight rain protection in the wet season",
  "Any medication your children may need",
];

const MISTAKES = [
  "Planning exposed outdoor activities in the middle of the day",
  "Trying to fit too much into a single Magnetic Island day",
  "Assuming every beach in the region is suitable for swimming",
  "Visiting Castle Hill when the children are already tired",
  "Forgetting that a wildlife attraction can take most of a day",
  "Relying on public transport for an overpacked itinerary",
  "Driving to Paluma or a swimming hole without checking weather and access first",
  "Promising children Reef HQ without checking its current status",
];

const RELATED = [
  { name: "The Strand", to: "/the-strand" },
  { name: "Magnetic Island Day Trip", to: "/guides/magnetic-island-day-trip" },
  { name: "Magnetic Island Ferry Guide", to: "/guides/magnetic-island-ferry" },
  { name: "Castle Hill", to: "/castle-hill" },
  { name: "Walking Castle Hill", to: "/guides/walking-castle-hill" },
  { name: "Forts Walk, Magnetic Island", to: "/guides/forts-walk-magnetic-island" },
  { name: "Free Things to Do", to: "/guides/free-things" },
  { name: "Townsville in One Day", to: "/townsville-in-one-day" },
  { name: "Townsville Without a Car", to: "/townsville-without-a-car" },
  { name: "Paluma Day Trip", to: "/guides/paluma-day-trip" },
  { name: "First Time in Townsville", to: "/first-time-in-townsville" },
  { name: "Stinger Safety", to: "/guides/stinger-safety" },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "Is Townsville good for a family holiday?",
    a: "Yes, for families who enjoy outdoor days. Townsville is strong on beaches, swimming, wildlife, playgrounds and easy day trips, but it is not a theme-park destination and has fewer all-weather attractions than a capital city.",
  },
  {
    q: "What is the best free activity for children in Townsville?",
    a: "The Strand. It combines free playgrounds, the Strand Water Park, the Rockpool, picnic areas and a flat waterfront path in one place.",
  },
  {
    q: "What can toddlers do in Townsville?",
    a: "Strand Water Park, the Strand playgrounds, Riverway Lagoons, short sections of the waterfront, Jezzine Barracks and a simple Magnetic Island ferry trip without a packed itinerary.",
  },
  {
    q: "What can teenagers do in Townsville?",
    a: "Castle Hill and its walking tracks, the Forts Walk on Magnetic Island, island beaches, longer coastal walks, snorkelling where conditions and supervision allow, and evening walks and food stops along The Strand.",
  },
  {
    q: "Is Strand Water Park free?",
    a: "Yes, the Strand Water Park is a free public facility. Operating times can change, so check current signage or council information before planning your morning around it.",
  },
  {
    q: "Can children swim at Townsville beaches?",
    a: "In many places, yes, but not everywhere. Use designated or patrolled areas, follow signs and lifeguard advice, be aware of marine stingers, and supervise children closely. The Rockpool and Riverway Lagoons are reliable alternatives.",
  },
  {
    q: "Do families need a car in Townsville?",
    a: "A car is helpful but not essential. The Strand, Jezzine Barracks and the CBD work well on foot, while Castle Hill, Billabong Sanctuary, Riverway and regional day trips are much easier with a vehicle.",
  },
  {
    q: "Is Magnetic Island suitable for young children?",
    a: "Yes, if you keep the plan simple. Take an early ferry, choose one or two bays rather than the whole island, allow time for lunch and a rest, and return before the children are overtired.",
  },
  {
    q: "What can families do in Townsville when it rains?",
    a: "Options are limited compared with larger cities. Consider the Museum of Tropical Queensland subject to its current opening information, a cinema or shopping centre, indoor swimming where available, supervised pool time, or short outdoor activities between showers.",
  },
  {
    q: "How many days should a family spend in Townsville?",
    a: "Two to four days suits most families. That allows time for The Strand, a wildlife or Magnetic Island day, and a slower day built around swimming and rest.",
  },
  {
    q: "Is Castle Hill suitable for children?",
    a: "The lookout suits all ages because you can drive most of the way up. The walking tracks are steep and exposed, so they are better for older children in cooler conditions with plenty of water.",
  },
  {
    q: "What is the best wildlife attraction near Townsville?",
    a: "Billabong Sanctuary is the main dedicated wildlife park near the city and usually takes at least half a day. Magnetic Island is the best option for seeing wild koalas along the walking tracks.",
  },
];

const Fact = ({ label, value }: { label: string; value: string }) => (
  <p className="text-sm text-muted-foreground">
    <span className="font-medium text-foreground">{label}:</span> {value}
  </p>
);

const TownsvilleWithKids = () => {
  return (
    <>
      <SEOHead title={TITLE} description={DESCRIPTION} canonical={`${SITE}${PATH}`} ogType="article" />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Best Things to Do in Townsville With Kids",
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
              {
                "@type": "ListItem",
                position: 2,
                name: "Townsville With Kids",
                item: `${SITE}${PATH}`,
              },
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
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Families walking along The Strand waterfront in Townsville"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" />
        </div>
        <div className="relative container mx-auto max-w-4xl px-4 py-14 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Baby className="w-4 h-4" aria-hidden="true" />
            Family planning guide
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
            Best Things to Do in Townsville With Kids
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Townsville is at its best for families who enjoy beaches and water play, wildlife,
            playgrounds and parks, short scenic outings, Magnetic Island and relaxed outdoor days.
          </p>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
            Be realistic about what the city is: it is not a large theme-park destination and has
            fewer all-weather attractions than a major capital city. The family appeal comes from
            outdoor activities, wildlife, swimming, parks and easy day trips — and from planning
            around the heat, which matters most with younger children.
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {FAMILY_STRENGTHS.map((s) => (
              <li
                key={s}
                className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs md:text-sm text-muted-foreground"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-12 space-y-14">
        {/* Quick facts */}
        <GuideQuickFacts />

        {/* Is Townsville good for families? */}
        <section aria-labelledby="good-for-families">
          <h2 id="good-for-families" className="text-2xl md:text-3xl font-bold mb-3">
            Is Townsville Good for Families?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Yes — provided your family enjoys being outdoors. Townsville works particularly well for
            families who like swimming, wildlife, playgrounds, beaches, picnics and short walks. If
            you are looking for large indoor attractions or theme parks, expectations need adjusting
            before you arrive.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The best family days here follow a simple shape: start early, swim, have lunch, take a
            shaded or indoor break through the middle of the day, then head back outdoors in the
            late afternoon. Families who plan that way generally enjoy Townsville far more than
            those who try to sightsee through the hottest hours. If this is your first visit, the{" "}
            <Link to="/first-time-in-townsville" className="text-primary underline underline-offset-2">
              first-time visitor guide
            </Link>{" "}
            covers the wider basics.
          </p>
        </section>

        {/* Best activities by age */}
        <section aria-labelledby="by-age">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="by-age" className="text-2xl md:text-3xl font-bold">
              Best Activities by Age
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Not every Townsville activity suits every age group. These are the options that
            generally work best for each stage.
          </p>
          <div className="space-y-4">
            {AGE_GROUPS.map((g) => (
              <Card key={g.title} className="bg-muted/40">
                <CardContent className="p-5 md:p-6">
                  <h3 className="text-xl font-semibold mb-2">{g.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">{g.intro}</p>
                  <ul className="space-y-1.5 text-muted-foreground leading-relaxed list-disc pl-5">
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Best family activities */}
        <section aria-labelledby="activities">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="activities" className="text-2xl md:text-3xl font-bold">
              Best Family Activities in Townsville
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A quick summary of each option, with a link to the full guide where you can check
            parking, access, facilities and detailed planning.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {ACTIVITIES.map((a) => (
              <Card key={a.name} className="h-full">
                <CardContent className="p-5 space-y-2">
                  <h3 className="text-lg font-semibold">{a.name}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{a.why}</p>
                  <div className="space-y-1 pt-1">
                    <Fact label="Suits" value={a.ages} />
                    <Fact label="Time needed" value={a.time} />
                    <Fact label="Cost" value={a.cost} />
                    <Fact label="Car" value={a.car} />
                    <Fact label="Heat and shade" value={a.heat} />
                    <Fact label="Facilities" value={a.facilities} />
                  </div>
                  {a.to && (
                    <Link
                      to={a.to}
                      className="inline-flex items-center gap-1.5 text-sm text-primary underline underline-offset-2 pt-1"
                    >
                      Read the full guide
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* The Strand with kids */}
        <section aria-labelledby="strand-kids">
          <div className="flex items-center gap-3 mb-4">
            <Waves className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="strand-kids" className="text-2xl md:text-3xl font-bold">
              The Strand With Kids
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The Strand is the strongest all-round family area in Townsville, because swimming, play,
            food, toilets and parking all sit along the same stretch of foreshore.
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
              <Link
                to="/the-strand"
                className="inline-flex items-center gap-1.5 mt-4 text-primary underline underline-offset-2"
              >
                Read the complete Strand guide
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </CardContent>
          </Card>
        </section>

        {/* Free things */}
        <section aria-labelledby="free-with-kids">
          <h2 id="free-with-kids" className="text-2xl md:text-3xl font-bold mb-3">
            Free Things to Do With Kids
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A family trip here does not need to be expensive — most of the best options cost
            nothing.
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5 text-muted-foreground leading-relaxed list-disc pl-5">
            {FREE_THINGS.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <Link
            to="/guides/free-things"
            className="inline-flex items-center gap-1.5 mt-4 text-primary underline underline-offset-2"
          >
            See the full free things to do guide
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </section>

        {/* Heat */}
        <section aria-labelledby="heat">
          <div className="flex items-center gap-3 mb-4">
            <Sun className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="heat" className="text-2xl md:text-3xl font-bold">
              Managing Townsville&rsquo;s Heat With Children
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Heat is the main thing to plan around, and it is easy to manage once your day is shaped
            correctly.
          </p>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            {HEAT_TIPS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <Link
            to="/guides/beat-the-heat"
            className="inline-flex items-center gap-1.5 mt-4 text-primary underline underline-offset-2"
          >
            More on beating the heat in Townsville
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </section>

        {/* Wet weather */}
        <section aria-labelledby="wet-weather">
          <div className="flex items-center gap-3 mb-4">
            <CloudRain className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="wet-weather" className="text-2xl md:text-3xl font-bold">
              Wet-Weather Activities
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Honestly, Townsville has fewer rainy-day attractions than larger cities, so a wet day
            usually means adjusting the plan rather than swapping in a big indoor alternative.
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
                Reef HQ Great Barrier Reef Aquarium is not operating as a normal visitor attraction
                and should not be counted on as a rainy-day option. Check official information for
                its current status before mentioning it to children.
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

        {/* Swimming */}
        <section aria-labelledby="swimming">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="swimming" className="text-2xl md:text-3xl font-bold">
              Swimming With Children
            </h2>
          </div>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            {SWIM_POINTS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link to="/guides/stinger-safety" className="text-primary underline underline-offset-2">
              Read the stinger safety guide
            </Link>
            <Link to="/beaches" className="text-primary underline underline-offset-2">
              Compare Townsville beaches
            </Link>
            <Link
              to="/little-crystal-creek-townsville"
              className="text-primary underline underline-offset-2"
            >
              Little Crystal Creek closure information
            </Link>
          </div>
        </section>

        {/* Itineraries */}
        <section aria-labelledby="itineraries">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="itineraries" className="text-2xl md:text-3xl font-bold">
              Family Itineraries
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Use these as flexible shapes for a day rather than fixed schedules, and check current
            opening information for anything with a ticket.
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
            Planning a single day for the whole family? The{" "}
            <Link to="/townsville-in-one-day" className="text-primary underline underline-offset-2">
              Townsville in one day itinerary
            </Link>{" "}
            works well with older children, and{" "}
            <Link
              to="/guides/magnetic-island-ferry"
              className="text-primary underline underline-offset-2"
            >
              the ferry guide
            </Link>{" "}
            covers island crossings in detail.
          </p>
        </section>

        {/* Practical information */}
        <section aria-labelledby="parents">
          <div className="flex items-center gap-3 mb-4">
            <TreePine className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="parents" className="text-2xl md:text-3xl font-bold">
              Practical Information for Parents
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {PARENT_NOTES.map((p) => (
              <p key={p.label} className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">{p.label}:</span> {p.text}
              </p>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Travelling without a vehicle? See{" "}
            <Link
              to="/townsville-without-a-car"
              className="text-primary underline underline-offset-2"
            >
              Townsville without a car
            </Link>{" "}
            for what is realistically walkable.
          </p>
        </section>

        {/* What to bring */}
        <section aria-labelledby="bring">
          <div className="flex items-center gap-3 mb-4">
            <Backpack className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="bring" className="text-2xl md:text-3xl font-bold">
              What to Bring
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5 text-muted-foreground leading-relaxed list-disc pl-5">
            {WHAT_TO_BRING.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </section>

        {/* Mistakes */}
        <section aria-labelledby="mistakes">
          <h2 id="mistakes" className="text-2xl md:text-3xl font-bold mb-3">
            Common Family Planning Mistakes
          </h2>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            {MISTAKES.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            For the hill itself, the{" "}
            <Link
              to="/guides/walking-castle-hill"
              className="text-primary underline underline-offset-2"
            >
              Castle Hill walking guide
            </Link>{" "}
            explains which tracks suit older children, and the{" "}
            <Link
              to="/guides/forts-walk-magnetic-island"
              className="text-primary underline underline-offset-2"
            >
              Forts Walk guide
            </Link>{" "}
            covers the island&rsquo;s most popular walk.
          </p>
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
            Continue Planning Your Family Trip
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RELATED.map((g) => (
              <Link key={g.to} to={g.to} className="group">
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardContent className="p-4 flex items-center justify-between gap-3">
                    <span className="font-medium text-foreground group-hover:text-primary">
                      {g.name}
                    </span>
                    <ArrowRight
                      className="w-4 h-4 text-muted-foreground flex-shrink-0"
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

export default TownsvilleWithKids;
