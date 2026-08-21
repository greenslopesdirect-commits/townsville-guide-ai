import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import FoundingPartnerCTA from "@/components/FoundingPartnerCTA";
import LocalInsightCard from "@/components/LocalInsightCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertTriangle,
  Baby,
  Building2,
  Car,
  Coffee,
  Coins,
  MapPin,
  Ship,
  Sun,
  Umbrella,
  UtensilsCrossed,
  Waves,
} from "lucide-react";

import jamImage from "@/assets/jam-corner-townsville.webp";
import saltImage from "@/assets/a-touch-of-salt-restaurant-townsville.webp";
import longboardImage from "@/assets/longboard-bar-and-grill-restaurant-townsville.webp";
import juliettesImage from "@/assets/Juliette's-Gelateria-townsville.webp";
import cbarImage from "@/assets/cbar-townsville.webp";

const SITE = "https://www.townsvilleguide.com.au";
const PATH = "/food";

const TITLE = "Best Places to Eat in Townsville | Local Food & Restaurant Guide";
const DESCRIPTION =
  "Discover where to eat in Townsville, from Strand cafés and Palmer Street restaurants to CBD breakfasts, family dining, local favourites and dinner spots.";

const EXAMPLES = [
  {
    name: "C Bar",
    area: "The Strand — Gregory Street headland",
    category: "Waterfront café and bistro",
    text: "An open-air deck almost on the sand, and one of the easiest places to combine a Strand walk with a relaxed coffee, breakfast or lunch by the water.",
    image: cbarImage,
    map: "https://www.google.com/maps/search/?api=1&query=Cbar+Townsville",
  },
  {
    name: "Longboard Bar & Grill",
    area: "The Strand",
    category: "Casual waterfront",
    text: "Laid-back beachfront dining that suits groups, families and a casual evening meal near the water.",
    image: longboardImage,
    map: "https://www.google.com/maps/search/?api=1&query=Longboard+Bar+Grill+Townsville",
  },
  {
    name: "Juliette's Gelateria",
    area: "The Strand",
    category: "Coffee, gelato and light bites",
    text: "A long-standing Strand stop for gelato, coffee and something light, with shaded outdoor seating facing the water.",
    image: juliettesImage,
    map: "https://www.google.com/maps/search/?api=1&query=Juliette's+The+Strand+Townsville",
  },
  {
    name: "Hoi Polloi",
    area: "CBD",
    category: "Breakfast and specialty coffee",
    text: "A café-style option in the city centre that works well for breakfast or brunch before a CBD or museum morning.",
    map: "https://www.google.com/maps/search/?api=1&query=Hoi+Polloi+Cafe+Townsville",
  },
  {
    name: "Rambutan Rooftop",
    area: "CBD",
    category: "Rooftop bar and casual dinner",
    text: "A rooftop setting in the city centre, useful when you want a drink and a casual meal with a view rather than a formal dinner.",
    map: "https://www.google.com/maps/search/?api=1&query=Rambutan+Townsville",
  },
  {
    name: "JAM Restaurant",
    area: "Palmer Street",
    category: "Destination dining",
    text: "One of Townsville's better-known destination restaurants, and a common choice when visitors want a more considered meal on Palmer Street.",
    image: jamImage,
    map: "https://www.google.com/maps/search/?api=1&query=JAM+Restaurant+Townsville",
  },
  {
    name: "A Touch of Salt",
    area: "Palmer Street / riverfront",
    category: "Nicer dinner",
    text: "A long-established option for a nicer dinner near the river, popular for special occasions and couples.",
    image: saltImage,
    map: "https://www.google.com/maps/search/?api=1&query=A+Touch+of+Salt+Townsville",
  },
];

const PATHWAYS = [
  { label: "Waterfront", to: "/the-strand", name: "Strand / North Ward" },
  { label: "Breakfast", to: "/things-to-do", name: "CBD / North Ward" },
  { label: "Nice dinner", to: "/directory?category=eat-drink", name: "Palmer Street / CBD" },
  { label: "With kids", to: "/townsville-with-kids", name: "The Strand" },
  { label: "Without a car", to: "/townsville-without-a-car", name: "Strand / CBD / Palmer Street" },
  { label: "Before the ferry", to: "/guides/magnetic-island-ferry", name: "Palmer Street / CBD" },
  { label: "Budget", to: "/guides/free-things", name: "Cafés, takeaway and markets" },
  { label: "Coffee", to: "/local-tips", name: "CBD / North Ward" },
  { label: "Hot weather", to: "/guides/beat-the-heat", name: "Shaded or indoor dining" },
  { label: "Rain", to: "/guides/rainy-day-activities", name: "Cafés and indoor precincts" },
];

const RELATED = [
  { name: "The Strand", to: "/the-strand", text: "The waterfront precinct most visitor meals sit near." },
  { name: "First Time in Townsville", to: "/first-time-in-townsville", text: "Where to base yourself and how to plan a first visit." },
  { name: "Townsville Without a Car", to: "/townsville-without-a-car", text: "Walkable areas, including most central dining." },
  { name: "Townsville with Kids", to: "/townsville-with-kids", text: "Family-friendly areas and how to time meals." },
  { name: "Things to Do", to: "/things-to-do", text: "The main activity hub to build meals around." },
  { name: "Local Tips", to: "/local-tips", text: "Practical local habits, including everyday timing." },
  { name: "Magnetic Island Day Trip", to: "/guides/magnetic-island-day-trip", text: "Plan the island day, then eat on your return." },
  { name: "Magnetic Island Ferry", to: "/guides/magnetic-island-ferry", text: "Crossings and timings for pre- or post-ferry meals." },
  { name: "Castle Hill", to: "/castle-hill", text: "Plan food before or after the lookout." },
  { name: "Jezzine Barracks", to: "/jezzine-barracks", text: "Coastal heritage with North Ward dining nearby." },
  { name: "Riverway", to: "/riverway", text: "Riverside parkland with food options nearby." },
  { name: "Beat the Heat", to: "/guides/beat-the-heat", text: "How to time outdoor eating on hot days." },
  { name: "Rainy Day Activities", to: "/guides/rainy-day-activities", text: "Indoor options when the weather changes plans." },
];

const MISTAKES = [
  "Assuming every restaurant opens every day — many close one or two days a week.",
  "Relying on old Google listings or blog posts for opening hours.",
  "Expecting cafés to serve dinner; many Townsville cafés are daytime businesses.",
  "Not checking kitchen closing times, which can be earlier than the venue's own closing time.",
  "Driving across the city for every meal instead of eating near where you already are.",
  "Treating Palmer Street as the only dining area in Townsville.",
  "Overlooking the CBD for breakfast and coffee.",
  "Heading to Paluma without checking current food options or taking water and supplies.",
  "Not booking popular weekend dinners when you have a fixed plan or a group.",
  "Assuming dietary requirements can always be handled on the spot without contacting the venue.",
];

const faqs = [
  {
    q: "What is the best area for restaurants in Townsville?",
    a: "It depends on the meal. Palmer Street is the strongest single restaurant strip for dinner, the CBD is best for breakfast, coffee and independent restaurants, and The Strand and North Ward are best for waterfront and casual meals.",
  },
  {
    q: "Where should first-time visitors eat in Townsville?",
    a: "Keep most meals close to The Strand and North Ward, the CBD and Palmer Street. Those three areas cover breakfast through dinner and avoid unnecessary driving. See our first time in Townsville guide for how to plan the rest of the trip.",
  },
  {
    q: "Where is the best waterfront dining in Townsville?",
    a: "The Strand and North Ward. Venues along the foreshore and around the Gregory Street headland give you sea views, breeze and easy access from a Strand walk. It suits breakfast, casual lunch and evening meals.",
  },
  {
    q: "Where is good for breakfast in Townsville?",
    a: "The CBD and North Ward have the widest choice, with waterfront cafés along The Strand as the more scenic option. Many cafés operate mainly during daytime hours, so check current opening times before travelling.",
  },
  {
    q: "Is Palmer Street good for restaurants?",
    a: "Yes — it is the most concentrated restaurant precinct in Townsville and a common choice for dinner, couples and visitors staying in South Townsville. It is also convenient before or after a Magnetic Island ferry crossing.",
  },
  {
    q: "Where can families eat in Townsville?",
    a: "The Strand and North Ward suit families best, because meals can be combined with playgrounds, waterfront walking and swimming. Casual venues, cafés and pubs are generally the easiest with children.",
  },
  {
    q: "Where can you eat in Townsville without a car?",
    a: "The Strand, North Ward, the CBD and Palmer Street all work on foot from central accommodation, and Palmer Street is a short trip across the river from the CBD. Our without-a-car guide covers getting between them.",
  },
  {
    q: "Do you need to book restaurants in Townsville?",
    a: "Not always, but it is worth booking popular dinners on Friday and Saturday nights, during events, and for larger groups. Booking also confirms the venue is trading that day.",
  },
  {
    q: "Are there vegetarian and vegan options in Townsville?",
    a: "Yes. Many cafés and restaurants list vegetarian options and some offer vegan and gluten-free choices, but menus and kitchen practices change. For allergies or cross-contamination concerns, contact the venue directly before visiting.",
  },
  {
    q: "What time do restaurants close in Townsville?",
    a: "There is no single closing time. Cafés often finish earlier in the day than visitors expect, and kitchens can close before the venue itself. Check the venue's current hours on the day you plan to eat.",
  },
  {
    q: "Where should you eat before or after Magnetic Island?",
    a: "Palmer Street, South Townsville and the CBD are the most practical areas around the Breakwater ferry terminal. Check the ferry guide for crossing times so you are not rushing a meal.",
  },
  {
    q: "Are there good cafés in Townsville?",
    a: "Yes — the city has a solid independent café scene spread across the CBD, North Ward and inner suburbs such as West End, rather than one single coffee precinct.",
  },
];

const FoodDrink = () => (
  <>
    <SEOHead title={TITLE} description={DESCRIPTION} canonical={PATH} ogType="article" />
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: "Best Places to Eat in Townsville",
              description: DESCRIPTION,
              mainEntityOfPage: `${SITE}${PATH}`,
              author: { "@type": "Person", name: "Duncan Ross" },
              publisher: { "@type": "Organization", name: "Townsville Guide" },
              dateModified: "2026-08-07",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
                { "@type": "ListItem", position: 2, name: "Things to Do", item: `${SITE}/things-to-do` },
                { "@type": "ListItem", position: 3, name: "Food in Townsville", item: `${SITE}${PATH}` },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        })}
      </script>
    </Helmet>

    <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
        <UtensilsCrossed className="w-4 h-4" aria-hidden="true" />
        Food and dining hub
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">Best Places to Eat in Townsville</h1>

      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Townsville does not have one single restaurant strip. Eating well here is mostly about
        choosing the right area for the meal: the waterfront around{" "}
        <Link to="/the-strand" className="text-primary hover:underline">
          The Strand
        </Link>{" "}
        and North Ward, the CBD and Flinders Street, Palmer Street in South Townsville, and a
        scattering of worthwhile suburban cafés, pubs and restaurants beyond them.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-8">
        This page is a planning hub rather than a directory. It covers where each area works best,
        what to expect by meal type, how to eat well as a family, a couple, a budget traveller or
        someone without a car, and what to check before you travel. Venues change often in a city
        this size, so treat individual examples as starting points and confirm current hours
        directly.
      </p>

      <GuideQuickFacts className="mb-10" />

      {/* Where should you eat */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Where should you eat in Townsville?</h2>
        <p className="text-muted-foreground mb-6">
          Four broad areas cover almost every visitor meal. Pick by what you are already doing that
          day.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Waves className="w-5 h-5 text-primary" aria-hidden="true" /> The Strand / North Ward
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The strongest area for waterfront atmosphere, breakfast, coffee, casual lunch, family
              meals and relaxed evening dining. Venues sit along or just back from the foreshore, so
              a meal slots naturally either side of a{" "}
              <Link to="/the-strand" className="text-primary hover:underline">
                Strand
              </Link>{" "}
              walk, a swim or playground time with{" "}
              <Link to="/townsville-with-kids" className="text-primary hover:underline">
                kids
              </Link>
              . Gregory Street and the northern end of the precinct hold much of the choice.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" aria-hidden="true" /> CBD / Flinders Street
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Best understood as pockets rather than one continuous restaurant strip: café clusters,
              laneway spots, independent restaurants, bars and pubs spread across the city centre.
              It is the easiest area for breakfast and specialty coffee, works well for lunch, and
              suits visitors combining food with museums, galleries and CBD walking from our{" "}
              <Link to="/things-to-do" className="text-primary hover:underline">
                things to do
              </Link>{" "}
              hub. Dinner options exist, but fewer venues trade late than in a larger city.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <UtensilsCrossed className="w-5 h-5 text-primary" aria-hidden="true" /> Palmer Street /
              South Townsville
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The most concentrated restaurant precinct in the city, and the usual answer for
              dinner, couples and a nicer meal. It suits anyone staying nearby, and it is practical
              before or after a{" "}
              <Link to="/guides/magnetic-island-ferry" className="text-primary hover:underline">
                Magnetic Island ferry
              </Link>{" "}
              crossing or a full{" "}
              <Link to="/guides/magnetic-island-day-trip" className="text-primary hover:underline">
                island day trip
              </Link>
              . Weekend evenings are the busiest, so book if your plans are fixed.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Car className="w-5 h-5 text-primary" aria-hidden="true" /> Suburban and local spots
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Townsville also has good cafés, pubs and restaurants well outside the visitor areas —
              West End, the inner north, and the growing suburbs further out. These are more
              relevant if you have a car or a longer stay. On a short first visit, they are usually
              not worth the drive; see our{" "}
              <Link to="/local-tips" className="text-primary hover:underline">
                local tips
              </Link>{" "}
              for how locals actually move around.
            </p>
          </div>
        </div>
      </section>

      {/* By meal */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Coffee className="w-6 h-6 text-primary" aria-hidden="true" /> Best places to eat by meal
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-1">Breakfast and coffee</h3>
            <p className="text-muted-foreground leading-relaxed">
              Start with North Ward and The Strand for a waterfront breakfast, or the CBD for the
              widest café choice. Selected local cafés in the inner suburbs are worth it if you have
              a car. Many Townsville cafés run primarily as daytime businesses, so plan breakfast and
              brunch early rather than late.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">Casual lunch</h3>
            <p className="text-muted-foreground leading-relaxed">
              Cafés, pubs, waterfront venues and CBD lunch spots all work. Takeaway is a genuinely
              good option here — a picnic on the foreshore, at{" "}
              <Link to="/jezzine-barracks" className="text-primary hover:underline">
                Jezzine Barracks
              </Link>{" "}
              or at{" "}
              <Link to="/riverway" className="text-primary hover:underline">
                Riverway
              </Link>{" "}
              often beats sitting indoors.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">Dinner</h3>
            <p className="text-muted-foreground leading-relaxed">
              Think in four categories rather than a ranking. Casual dinner suits pubs and family
              venues across all areas. Waterfront dining sits on The Strand. A nicer dinner points to
              Palmer Street or the CBD. A special occasion usually means Palmer Street or a
              riverfront venue, booked ahead.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">Coffee</h3>
            <p className="text-muted-foreground leading-relaxed">
              Good coffee is spread across the CBD, North Ward and inner suburbs such as West End
              rather than concentrated in one place. Roasters and cafés change, so ask locally rather
              than chasing a single "best" cup.
            </p>
          </div>
        </div>
      </section>

      {/* Traveller type */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Dining by traveller type</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold mb-1 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" aria-hidden="true" /> First-time visitors
            </h3>
            <p className="text-sm text-muted-foreground">
              Keep most meals around The Strand and North Ward, the CBD and Palmer Street. It removes
              most driving from the trip. See{" "}
              <Link to="/first-time-in-townsville" className="text-primary hover:underline">
                first time in Townsville
              </Link>
              .
            </p>
          </div>

          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold mb-1 flex items-center gap-2">
              <Baby className="w-4 h-4 text-primary" aria-hidden="true" /> With kids
            </h3>
            <p className="text-sm text-muted-foreground">
              The Strand and North Ward first: casual venues, outdoor space and meals you can pair
              with playgrounds, walking and swimming. See{" "}
              <Link to="/townsville-with-kids" className="text-primary hover:underline">
                Townsville with kids
              </Link>
              .
            </p>
          </div>

          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold mb-1 flex items-center gap-2">
              <Car className="w-4 h-4 text-primary" aria-hidden="true" /> Without a car
            </h3>
            <p className="text-sm text-muted-foreground">
              The Strand, North Ward, the CBD and Palmer Street cover you on foot or with a short
              trip. See{" "}
              <Link to="/townsville-without-a-car" className="text-primary hover:underline">
                Townsville without a car
              </Link>
              .
            </p>
          </div>

          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold mb-1 flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-primary" aria-hidden="true" /> Couples and a
              nicer dinner
            </h3>
            <p className="text-sm text-muted-foreground">
              Palmer Street is the usual starting point, with CBD restaurants and selected waterfront
              venues as alternatives depending on the mood and the night.
            </p>
          </div>

          <div className="rounded-xl border bg-card p-5 sm:col-span-2">
            <h3 className="font-semibold mb-1 flex items-center gap-2">
              <Coins className="w-4 h-4 text-primary" aria-hidden="true" /> Budget-conscious visitors
            </h3>
            <p className="text-sm text-muted-foreground">
              Cafés, pub meals, takeaway, markets and a supermarket picnic on the foreshore all work
              well here, and the weather usually cooperates. Pair them with{" "}
              <Link to="/guides/free-things" className="text-primary hover:underline">
                free things to do
              </Link>{" "}
              for a low-cost day.
            </p>
          </div>
        </div>
      </section>

      {/* Around attractions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Eating around major attractions</h2>
        <div className="space-y-5">
          <div>
            <h3 className="font-semibold mb-1">The Strand</h3>
            <p className="text-sm text-muted-foreground">
              The widest convenient choice sits around North Ward, Gregory Street and the Strand
              precinct itself. See the{" "}
              <Link to="/the-strand" className="text-primary hover:underline">
                Strand guide
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Castle Hill</h3>
            <p className="text-sm text-muted-foreground">
              There is no dining precinct at the summit, so plan food before or after the visit —
              North Ward or the CBD are both close. See{" "}
              <Link to="/castle-hill" className="text-primary hover:underline">
                Castle Hill
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Jezzine Barracks</h3>
            <p className="text-sm text-muted-foreground">
              North Ward and Strand dining is a short walk away, which makes a coastal visit easy to
              combine with breakfast or lunch. See{" "}
              <Link to="/jezzine-barracks" className="text-primary hover:underline">
                Jezzine Barracks
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Magnetic Island ferry</h3>
            <p className="text-sm text-muted-foreground">
              Palmer Street, South Townsville and the CBD are all practical before or after a
              crossing. Check timings in the{" "}
              <Link to="/guides/magnetic-island-ferry" className="text-primary hover:underline">
                ferry guide
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Riverway</h3>
            <p className="text-sm text-muted-foreground">
              There are food and shopping options nearby, and a picnic beside the lagoons works well.
              Operators in the precinct change, so check what is currently trading. See{" "}
              <Link to="/riverway" className="text-primary hover:underline">
                Riverway
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Paluma</h3>
            <p className="text-sm text-muted-foreground">
              Do not assume food will be available on the day you visit. Check current options before
              leaving and carry water and supplies. See the{" "}
              <Link to="/guides/paluma-day-trip" className="text-primary hover:underline">
                Paluma day trip guide
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Local food experiences */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-3">Local food experiences</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Some of the better food experiences here are not restaurant meals. Weekend markets,
          bakeries, independent cafés, takeaway eaten on the foreshore and picnic-style meals all fit
          the climate and the way the city is laid out. Tropical and North Queensland produce turns
          up seasonally at markets and on local menus.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Cotters Market runs in the city centre and is the best known of the local markets, but
          market schedules change with events, weather and the season — check the{" "}
          <a
            href="https://www.townsville.qld.gov.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Townsville City Council
          </a>{" "}
          listings for current dates and times before planning a morning around one.
        </p>
      </section>

      {/* Where Duncan actually goes */}
      <section className="mb-12">
        <LocalInsightCard title="Where Duncan Actually Goes">
          <p>
            Not a ranked "best of" list — just two places Duncan and his family genuinely use.
            Twin Cities Hotel is one he considers very good value, and his kids enjoy it. Tony's
            Pizza is another he genuinely orders from and recommends. There are plenty of other
            good options across the city — see the examples below for a wider spread — but these
            are the two he would mention if you asked him directly.
          </p>
        </LocalInsightCard>
      </section>

      {/* Venue examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">A few current examples</h2>
        <p className="text-muted-foreground mb-6">
          A small cross-section rather than a ranking — one or two per category, so you have a
          starting point in each area. Hours, menus and operators change, so check the venue directly
          before travelling.
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          {EXAMPLES.map((v) => (
            <div key={v.name} className="rounded-xl border bg-card overflow-hidden">
              {v.image && (
                <img
                  src={v.image}
                  alt={`${v.name} in Townsville`}
                  loading="lazy"
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="p-5">
                <h3 className="font-semibold text-foreground">{v.name}</h3>
                <p className="text-xs uppercase tracking-wide text-primary mt-1">{v.category}</p>
                <p className="text-sm text-muted-foreground mt-2">{v.text}</p>
                <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
                  <MapPin className="w-3 h-3" aria-hidden="true" /> {v.area}
                </p>
                <a
                  href={v.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline mt-2 inline-block"
                >
                  View on map
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dietary */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-3">Dietary requirements</h2>
        <p className="text-muted-foreground leading-relaxed">
          Vegetarian options are common across cafés and restaurants, and vegan and gluten-free
          choices appear on plenty of menus, particularly in the CBD and North Ward. Many Townsville
          venues cater for common dietary requirements, but menus and kitchen practices change. For
          allergies or cross-contamination concerns, contact the venue directly before visiting — do
          not rely on a menu photo or a review.
        </p>
      </section>

      {/* Booking and hours */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-3">Booking and opening-hour reality</h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-5">
          <li>Opening days vary by venue, and many close at least one day a week.</li>
          <li>Cafés often finish earlier in the day than visitors expect.</li>
          <li>Kitchens can stop serving well before the venue itself closes.</li>
          <li>Friday and Saturday evenings are the busiest, especially on Palmer Street.</li>
          <li>Public holidays, events and stadium nights change trading and demand.</li>
          <li>Check current hours on the day, and book when your plans are fixed or you have a group.</li>
        </ul>
      </section>

      {/* Heat and rain */}
      <section className="mb-12">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-card p-5">
            <h2 className="text-lg font-semibold mb-1 flex items-center gap-2">
              <Sun className="w-5 h-5 text-primary" aria-hidden="true" /> Eating in hot weather
            </h2>
            <p className="text-sm text-muted-foreground">
              Breakfast and early lunch are comfortable outdoors; shaded or air-conditioned venues
              are the sensible choice through the middle of the day, and evening waterfront dining is
              usually pleasant. Keep drinking water regardless. See{" "}
              <Link to="/guides/beat-the-heat" className="text-primary hover:underline">
                Beat the Heat
              </Link>
              .
            </p>
          </div>
          <div className="rounded-xl border bg-card p-5">
            <h2 className="text-lg font-semibold mb-1 flex items-center gap-2">
              <Umbrella className="w-5 h-5 text-primary" aria-hidden="true" /> Eating when it rains
            </h2>
            <p className="text-sm text-muted-foreground">
              A long café stop, a proper lunch or an indoor precinct becomes one of the most flexible
              wet-weather activities in the city. See{" "}
              <Link to="/guides/rainy-day-activities" className="text-primary hover:underline">
                Rainy Day Activities
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Combinations */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Food and activity combinations</h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-5">
          <li>
            Early{" "}
            <Link to="/the-strand" className="text-primary hover:underline">
              Strand
            </Link>{" "}
            walk, then breakfast on the waterfront.
          </li>
          <li>
            <Link to="/jezzine-barracks" className="text-primary hover:underline">
              Jezzine Barracks
            </Link>{" "}
            in the morning, then lunch in North Ward.
          </li>
          <li>
            <Link to="/castle-hill" className="text-primary hover:underline">
              Castle Hill
            </Link>{" "}
            at sunset, then dinner in the CBD or on Palmer Street.
          </li>
          <li>Museum and CBD wandering, broken up with lunch or coffee in the city centre.</li>
          <li>
            <Link to="/guides/magnetic-island-day-trip" className="text-primary hover:underline">
              Magnetic Island
            </Link>{" "}
            return ferry, then dinner on Palmer Street.
          </li>
          <li>
            <Link to="/riverway" className="text-primary hover:underline">
              Riverway
            </Link>{" "}
            swimming, then a casual meal nearby.
          </li>
          <li>
            <Link to="/pallarenda-beach" className="text-primary hover:underline">
              Pallarenda
            </Link>{" "}
            with takeaway or a picnic packed beforehand.
          </li>
        </ul>
      </section>

      {/* Mistakes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-primary" aria-hidden="true" /> Common food-planning
          mistakes
        </h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-5">
          {MISTAKES.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </section>

      {/* Pathways */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Plan by dining need</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {PATHWAYS.map((p) => (
            <Link
              key={p.label}
              to={p.to}
              className="group flex items-center justify-between gap-3 rounded-lg border bg-card px-4 py-3 hover:border-primary/40 transition-colors"
            >
              <span className="text-sm font-medium text-foreground">{p.label}</span>
              <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                {p.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Townsville food questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <div className="mb-12">
        <FoundingPartnerCTA />
      </div>

      {/* Related */}
      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-6">Related guides</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {RELATED.map((r) => (
            <Link
              key={r.to}
              to={r.to}
              className="group block rounded-xl border bg-card p-5 hover:border-primary/40 transition-colors"
            >
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {r.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{r.text}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  </>
);

export default FoodDrink;
