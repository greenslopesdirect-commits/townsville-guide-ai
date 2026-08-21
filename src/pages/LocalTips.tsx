import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import CurrentTownsvilleWeather from "@/components/CurrentTownsvilleWeather";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Car,
  CloudRain,
  Compass,
  Info,
  Lightbulb,
  Sun,
  Waves,
} from "lucide-react";

const SITE = "https://www.townsvilleguide.com.au";
const PATH = "/local-tips";

const TITLE = "Townsville Local Tips | Practical Advice From a Local";
const DESCRIPTION =
  "Make your Townsville visit easier with practical local tips on heat, transport, beaches, Castle Hill, Magnetic Island, day trips and common visitor mistakes.";

const RELATED = [
  { name: "First Time in Townsville", to: "/first-time-in-townsville", text: "Orientation and trip planning for a first visit." },
  { name: "Townsville in One Day", to: "/townsville-in-one-day", text: "A workable single-day plan for a short stay." },
  { name: "Townsville Without a Car", to: "/townsville-without-a-car", text: "What works on foot, by bus, ferry and rideshare." },
  { name: "Townsville with Kids", to: "/townsville-with-kids", text: "Family-friendly planning and easy days out." },
  { name: "Free Things to Do", to: "/guides/free-things", text: "No-cost options across the city." },
  { name: "Beat the Heat", to: "/guides/beat-the-heat", text: "How to plan a comfortable day in hot weather." },
  { name: "Rainy Day Activities", to: "/guides/rainy-day-activities", text: "Indoor and wet-weather options." },
  { name: "Townsville Beaches", to: "/beaches", text: "Which beaches suit swimming, walking or a picnic." },
  { name: "The Strand", to: "/the-strand", text: "Water Park, Rockpool, beaches and the foreshore." },
  { name: "Castle Hill", to: "/castle-hill", text: "Drive or walk to Townsville's best-known lookout." },
  { name: "Magnetic Island Day Trip", to: "/guides/magnetic-island-day-trip", text: "Planning a realistic day on the island." },
  { name: "Paluma Day Trip", to: "/guides/paluma-day-trip", text: "Rainforest, lookouts and the mountain drive." },
];

const faqs = [
  {
    q: "What should first-time visitors know about Townsville?",
    a: "Townsville is more spread out than it looks, and the heat shapes the day more than the calendar does. Stay somewhere central, plan outdoor time for early morning and late afternoon, and keep a full day for Magnetic Island. Our first time in Townsville guide covers the full orientation.",
  },
  {
    q: "Do you need a car in Townsville?",
    a: "Not for a short stay based around The Strand, North Ward and the CBD, which are easy on foot with taxis or rideshare filling the gaps. A car becomes much more useful for Riverway, Pallarenda, Billabong Sanctuary, northern beaches and regional day trips. See our Townsville without a car guide for the detail.",
  },
  {
    q: "What is the biggest mistake visitors make in Townsville?",
    a: "Underestimating the heat and the distances at the same time — packing a day full of attractions spread across the city, then attempting the most exposed one in the middle of the day. Doing less, grouped closer together and timed better, works much more comfortably.",
  },
  {
    q: "What is the best time of day for outdoor activities?",
    a: "Early morning and late afternoon into early evening. Locals use the middle of the day for swimming, lunch, shade or indoor time, then head back outdoors once the worst of the heat has passed. Our beat the heat guide explains how to structure a hot day.",
  },
  {
    q: "Is The Strand worth visiting more than once?",
    a: "Yes. It feels different in the morning, the late afternoon and the evening, and it works for walking, swimming, food, children and relaxed downtime. Most visitors get more out of it by dropping in several times than by ticking it off once.",
  },
  {
    q: "Do you have to walk Castle Hill?",
    a: "No. You can drive to the lookout, and that is a perfectly valid way to visit. Walking up is an optional fitness activity rather than the standard way to see it, and timing matters because the tracks are exposed. See our Castle Hill and walking Castle Hill guides.",
  },
  {
    q: "Can you do Magnetic Island in one day?",
    a: "Yes, it works very well as a day trip and the ferry crossing is short. The mistake is trying to see the whole island in a single day, which makes it rushed. Choosing one or two bays plus a walk is a better use of the time.",
  },
  {
    q: "Is Paluma a quick trip from Townsville?",
    a: "No. Paluma is a proper day trip rather than a quick suburban attraction, with a mountain drive where road conditions, weather and current access all matter. Allow enough time and check current alerts before you go.",
  },
  {
    q: "Are Townsville beaches good for swimming?",
    a: "Some are set up for swimming and others are better for walking, picnics or a quiet look at the water. Do not assume every beach is a designated swimming beach, check current signs, and understand marine stinger season before getting in. Our beaches and stinger safety guides cover this properly.",
  },
  {
    q: "What should I check before heading out for the day?",
    a: "Current weather, road conditions if you are driving out of the city, ferry information before heading to the terminal, beach and stinger signage, park closures and attraction opening information. Our useful contacts page lists the official sources.",
  },
];

const LocalTips = () => (
  <>
    <SEOHead title={TITLE} description={DESCRIPTION} canonical={`${SITE}${PATH}`} ogType="article" />
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: "Local Tips for Visiting Townsville",
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
                { "@type": "ListItem", position: 2, name: "Local Tips", item: `${SITE}${PATH}` },
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
        <Lightbulb className="w-4 h-4" aria-hidden="true" />
        Local insight
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">Local Tips for Visiting Townsville</h1>

      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        These are the small things that are easier to understand once you live in Townsville — how
        locals plan around the heat, which places are worth returning to, when a car really helps,
        and the mistakes first-time visitors can easily avoid.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Think of this as the practical little things a local would tell you before you start
        planning your days. It is deliberately light on detail: where something needs a full
        explanation, we point you at the guide that covers it properly.
      </p>

      <CurrentTownsvilleWeather className="mb-10" />

      <GuideQuickFacts className="mb-10" />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Things locals know</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Townsville is more spread out than it looks</h3>
            <p className="text-muted-foreground leading-relaxed">
              The Strand, North Ward and CBD cluster is compact and easy to explore on foot. Almost
              everything else is not. Riverway, Pallarenda, Billabong Sanctuary, the northern
              beaches and Paluma are all much further apart than a map suggests, and short-looking
              distances turn into real driving time. If you are not hiring a car, plan around that
              early — our{" "}
              <Link to="/townsville-without-a-car" className="text-primary hover:underline">
                Townsville without a car
              </Link>{" "}
              guide sets out what is realistic.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">The Strand is worth visiting more than once</h3>
            <p className="text-muted-foreground leading-relaxed">
              Mornings, late afternoons and evenings all feel like different places. It works for
              walking, swimming, food, children and doing very little, which makes it the easiest
              filler in any itinerary. There is no need to tick it off once and move on — see the{" "}
              <Link to="/the-strand" className="text-primary hover:underline">
                Strand guide
              </Link>{" "}
              for what is where.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">You do not have to walk Castle Hill</h3>
            <p className="text-muted-foreground leading-relaxed">
              Driving to the lookout is a perfectly valid way to visit, and plenty of locals do
              exactly that. Walking up is an optional fitness activity rather than the main event,
              and the tracks are exposed, so timing matters far more than fitness. See{" "}
              <Link to="/castle-hill" className="text-primary hover:underline">
                Castle Hill
              </Link>{" "}
              for visiting, or{" "}
              <Link to="/guides/walking-castle-hill" className="text-primary hover:underline">
                walking Castle Hill
              </Link>{" "}
              if you do want to go up on foot.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Locals plan around the heat</h3>
            <p className="text-muted-foreground leading-relaxed">
              The usual local shape of a warm day is simple: exposed activity early in the morning,
              swimming, lunch, shade or indoor time through the middle, then back outdoors in the
              late afternoon and early evening. It is less about avoiding activity and more about
              moving it to the right hours — the{" "}
              <Link to="/guides/beat-the-heat" className="text-primary hover:underline">
                beat the heat
              </Link>{" "}
              guide has the full version.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">If Duncan only had one day, he'd skip the CBD</h3>
            <p className="text-muted-foreground leading-relaxed">
              With only one day in Townsville, Duncan would personally prioritise The Strand,
              Castle Hill and Magnetic Island over the CBD. That is a call about where to spend
              limited time, not a claim that the CBD has nothing worth seeing — the museum, cafés
              and city-centre wandering are still worth it if you have a spare afternoon. See{" "}
              <Link to="/townsville-in-one-day" className="text-primary hover:underline">
                Townsville in one day
              </Link>{" "}
              for a full itinerary.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">What Duncan thinks is underrated</h3>
            <p className="text-muted-foreground leading-relaxed">
              Duncan is originally from the UK, and coming from there, what he notices most about
              Townsville is how beautiful it is and how good the everyday services are — the kind
              of things that are easy to take for granted if you have always lived here. It is his
              personal perspective rather than an objective comparison, but it is part of why he
              thinks the city deserves more attention than it gets.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Generic guides rarely explain where you can actually take a dog</h3>
            <p className="text-muted-foreground leading-relaxed">
              Because Duncan walks his own dog regularly around Townsville, he notices when a
              guide skips the practical detail — which beaches and parks actually allow off-leash
              dogs, and what is realistic when you are getting around the city with one. See our{" "}
              <Link to="/dog-friendly" className="text-primary hover:underline">
                dog-friendly Townsville guide
              </Link>{" "}
              for the specifics.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Things that surprise first-time visitors</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Townsville is not a surf-beach destination</h3>
            <p className="text-muted-foreground leading-relaxed">
              The coast is a big part of local life, but this is calm, sheltered water rather than a
              surf coast, and beaches vary a lot in how suitable they are for swimming. Check what
              each beach is actually set up for in our{" "}
              <Link to="/beaches" className="text-primary hover:underline">
                beaches guide
              </Link>
              , and read the{" "}
              <Link to="/guides/stinger-safety" className="text-primary hover:underline">
                marine stinger safety
              </Link>{" "}
              guide before you swim.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Magnetic Island is closer and easier than expected</h3>
            <p className="text-muted-foreground leading-relaxed">
              The crossing is short and the island works very well as a day trip. What does not work
              is trying to see all of it in one day — that turns a relaxed island day into a rushed
              one. Pick a couple of bays and a walk. See the{" "}
              <Link to="/guides/magnetic-island-day-trip" className="text-primary hover:underline">
                day trip guide
              </Link>{" "}
              and the{" "}
              <Link to="/guides/magnetic-island-ferry" className="text-primary hover:underline">
                ferry guide
              </Link>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Paluma is a proper day trip</h3>
            <p className="text-muted-foreground leading-relaxed">
              Paluma is not a quick suburban attraction. It is a mountain drive where road
              conditions, weather and current access genuinely matter, so allow real time for it and
              choose only a few stops. See the{" "}
              <Link to="/guides/paluma-day-trip" className="text-primary hover:underline">
                Paluma day trip
              </Link>{" "}
              guide, and check the{" "}
              <Link to="/little-crystal-creek-townsville" className="text-primary hover:underline">
                Little Crystal Creek access information
              </Link>{" "}
              before assuming you can swim there.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Many of the best things are free</h3>
            <p className="text-muted-foreground leading-relaxed">
              The Strand, Castle Hill, Riverway, Jezzine Barracks, the beaches and the walks between
              them cost nothing. A good Townsville day often has no ticket in it at all — see{" "}
              <Link to="/guides/free-things" className="text-primary hover:underline">
                free things to do
              </Link>
              ,{" "}
              <Link to="/riverway" className="text-primary hover:underline">
                Riverway
              </Link>{" "}
              and{" "}
              <Link to="/jezzine-barracks" className="text-primary hover:underline">
                Jezzine Barracks
              </Link>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Townsville can feel very different after sunset</h3>
            <p className="text-muted-foreground leading-relaxed">
              Early evening is often the most comfortable part of the day. The Strand, waterfront
              walking, dining and the Castle Hill lookout all work well once the heat drops. It is
              not a big late-night city, but that early-evening window is one of the nicest things
              about being here.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Small tips that make a visit easier</h2>
        <ul className="grid gap-2 sm:grid-cols-2 text-muted-foreground">
          {[
            "Carry a refillable water bottle.",
            "Keep swimmers and a towel handy.",
            "Use sunscreen even on cloudy days.",
            "Check the weather before regional day trips.",
            "Keep a light rain jacket in the wet season.",
            "Check ferry information before heading to the terminal.",
            "Do not rely on old opening hours from blogs.",
            "Keep some flexibility in the itinerary.",
            "Combine nearby attractions instead of repeatedly crossing the city.",
            "Bring insect repellent for outdoor or evening activities.",
            "Keep your phone charged on regional drives.",
          ].map((tip) => (
            <li key={tip} className="flex items-start gap-2">
              <span className="text-primary font-bold leading-6" aria-hidden="true">
                •
              </span>
              <span className="leading-relaxed">{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What locals would not overthink</h2>
        <ul className="space-y-2 text-muted-foreground">
          {[
            "You do not need to walk Castle Hill to enjoy it.",
            "You do not need to stay overnight on Magnetic Island to have a good visit.",
            "You do not need a hire car for a short Strand and North Ward stay.",
            "You do not need to fill every hour with attractions.",
            "You do not need perfect weather to enjoy Townsville.",
            "You do not need to pay for attractions every day.",
            "You do not need to drive everywhere if you group central activities together.",
          ].map((line) => (
            <li key={line} className="flex items-start gap-2">
              <span className="text-primary font-bold leading-6" aria-hidden="true">
                •
              </span>
              <span className="leading-relaxed">{line}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">How to plan around Townsville weather</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Sun className="w-5 h-5 text-primary" aria-hidden="true" /> Hot weather
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Split the day into early, middle and late. Keep exposed activities short, use swimming
              and indoor breaks through the middle, and save the walking for the ends of the day.{" "}
              <Link to="/guides/beat-the-heat" className="text-primary hover:underline">
                Beat the heat
              </Link>
              .
            </p>
          </div>
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <CloudRain className="w-5 h-5 text-primary" aria-hidden="true" /> Rain
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A passing shower does not ruin a day here and often clears quickly. Significant
              tropical weather is a different situation and needs current official warnings.{" "}
              <Link to="/guides/rainy-day-activities" className="text-primary hover:underline">
                Rainy day activities
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Waves className="w-6 h-6 text-primary" aria-hidden="true" /> Local beach advice
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Do not assume every beach is a designated swimming beach. Check the current signs when you
          arrive, use designated swimming areas where they exist, and understand marine stinger
          season before getting in the water. Quieter beaches are often better for a walk or a
          picnic than for swimming.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          See the{" "}
          <Link to="/beaches" className="text-primary hover:underline">
            beaches guide
          </Link>{" "}
          and{" "}
          <Link to="/guides/stinger-safety" className="text-primary hover:underline">
            stinger safety
          </Link>
          . If you are travelling with a dog, the rules are different again —{" "}
          <Link to="/dog-friendly" className="text-primary hover:underline">
            dog-friendly Townsville
          </Link>{" "}
          covers off-leash areas and dog beaches.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Car className="w-6 h-6 text-primary" aria-hidden="true" /> Local transport reality
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Central Townsville is genuinely manageable without a car. A car becomes much more useful
          once you want Riverway, Pallarenda, Paluma, Billabong Sanctuary or the northern beaches.
          Taxis and rideshare fill some of the gaps, and public transport is useful without being
          ideal for a tightly packed tourist itinerary. The{" "}
          <Link to="/townsville-without-a-car" className="text-primary hover:underline">
            Townsville without a car
          </Link>{" "}
          guide works through the practical options.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Compass className="w-6 h-6 text-primary" aria-hidden="true" /> Local pace and itinerary advice
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Townsville rewards a slower plan. Combine attractions that are near each other, allow
          midday downtime in hot weather, do not rush Magnetic Island, and use The Strand as
          flexible filler when a plan falls through. Leave room for weather changes, and let
          regional day trips be actual day trips rather than a stop on the way to something else.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          For a structured version, see{" "}
          <Link to="/townsville-in-one-day" className="text-primary hover:underline">
            Townsville in one day
          </Link>{" "}
          or{" "}
          <Link to="/first-time-in-townsville" className="text-primary hover:underline">
            first time in Townsville
          </Link>
          .
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">A few local combinations that work well</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "The Strand + Jezzine Barracks",
              text: "An easy central half-day on foot, with the coastal walk linking the two.",
              links: [
                { name: "The Strand", to: "/the-strand" },
                { name: "Jezzine Barracks", to: "/jezzine-barracks" },
              ],
            },
            {
              title: "Castle Hill + The Strand",
              text: "A good late-afternoon combination: the lookout, then dinner or a walk below.",
              links: [{ name: "Castle Hill", to: "/castle-hill" }],
            },
            {
              title: "Riverway + the western suburbs",
              text: "A useful family or hot-weather outing built around the free lagoons.",
              links: [{ name: "Riverway", to: "/riverway" }],
            },
            {
              title: "Pallarenda + Rowes Bay",
              text: "A quiet coastal afternoon on the northern side of the city.",
              links: [
                { name: "Pallarenda Beach", to: "/pallarenda-beach" },
                { name: "Rowes Bay", to: "/rowes-bay" },
              ],
            },
            {
              title: "Magnetic Island",
              text: "Best treated as its own day rather than squeezed around other plans.",
              links: [{ name: "Magnetic Island day trip", to: "/guides/magnetic-island-day-trip" }],
            },
            {
              title: "Paluma",
              text: "Also its own day — the mountain drive alone takes a decent slice of it.",
              links: [{ name: "Paluma day trip", to: "/guides/paluma-day-trip" }],
            },
          ].map((combo) => (
            <div key={combo.title} className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold mb-1">{combo.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">{combo.text}</p>
              <p className="text-sm">
                {combo.links.map((l, i) => (
                  <span key={l.to}>
                    {i > 0 && <span className="text-muted-foreground"> · </span>}
                    <Link to={l.to} className="text-primary hover:underline">
                      {l.name}
                    </Link>
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Common visitor mistakes</h2>
        <ul className="space-y-2 text-muted-foreground">
          {[
            "Underestimating the heat.",
            "Underestimating the distances between attractions.",
            "Trying Castle Hill too late in the morning, or too early in the afternoon.",
            "Assuming every beach is suitable for swimming.",
            "Trying to see all of Magnetic Island in one day.",
            "Treating Paluma as a quick stop.",
            "Relying on old opening hours found online.",
            "Skipping wet-season road and access checks before a regional drive.",
            "Spending the day driving between attractions instead of grouping nearby places.",
            "Overpacking each day.",
          ].map((line) => (
            <li key={line} className="flex items-start gap-2">
              <span className="text-primary font-bold leading-6" aria-hidden="true">
                •
              </span>
              <span className="leading-relaxed">{line}</span>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-4">
          One more worth knowing: The Great Barrier Reef Aquarium, formerly known as Reef HQ, is
          closed for redevelopment. Do not build an itinerary around it — see the{" "}
          <Link to="/reef-hq-townsville" className="text-primary hover:underline">
            Reef HQ status page
          </Link>
          .
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Plan by traveller type</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "First visit", to: "/first-time-in-townsville" },
            { label: "With kids", to: "/townsville-with-kids" },
            { label: "No car", to: "/townsville-without-a-car" },
            { label: "Budget", to: "/guides/free-things" },
            { label: "Hot weather", to: "/guides/beat-the-heat" },
            { label: "Rain", to: "/guides/rainy-day-activities" },
            { label: "Beach day", to: "/beaches" },
            { label: "With a dog", to: "/dog-friendly" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-lg border bg-card px-4 py-3 text-sm font-medium hover:border-primary hover:text-primary transition flex items-center justify-between gap-2"
            >
              {item.label}
              <ArrowRight className="w-4 h-4 text-primary" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-primary" aria-hidden="true" /> Current information matters
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Conditions here change quickly, so check current official information for weather, road
          conditions, ferry disruptions, beach and stinger status, park closures and attraction
          opening details before you set out. Our{" "}
          <Link to="/useful-contacts" className="text-primary hover:underline">
            useful contacts page
          </Link>{" "}
          lists the official sources worth checking.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`} className="border-border/40">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-4">Related guides</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RELATED.map((r) => (
            <Link
              key={r.to}
              to={r.to}
              className="block bg-card rounded-xl p-5 border hover:border-primary hover:shadow-md transition"
            >
              <h3 className="font-semibold text-foreground mb-1 flex items-center gap-1.5">
                {r.name}
                <ArrowRight className="w-4 h-4 text-primary" aria-hidden="true" />
              </h3>
              <p className="text-sm text-muted-foreground">{r.text}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  </>
);

export default LocalTips;
