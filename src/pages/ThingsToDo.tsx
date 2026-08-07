import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import FoundingPartnerCTA from "@/components/FoundingPartnerCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Baby,
  Building2,
  Car,
  Clock,
  Compass,
  Coins,
  Info,
  MapPin,
  Mountain,
  Ship,
  Sun,
  TreePine,
  Umbrella,
  Waves,
} from "lucide-react";

const SITE = "https://www.townsvilleguide.com.au";
const PATH = "/things-to-do";

const TITLE = "Best Things to Do in Townsville | Local Visitor Guide";
const DESCRIPTION =
  "Discover the best things to do in Townsville, from The Strand and Castle Hill to Magnetic Island, family activities, beaches, free attractions and day trips.";

const PATHWAYS = [
  { label: "First visit", to: "/first-time-in-townsville", name: "First Time in Townsville" },
  { label: "One day", to: "/townsville-in-one-day", name: "Townsville in One Day" },
  { label: "No car", to: "/townsville-without-a-car", name: "Townsville Without a Car" },
  { label: "Kids", to: "/townsville-with-kids", name: "Townsville with Kids" },
  { label: "Budget", to: "/guides/free-things", name: "Free Things to Do" },
  { label: "Hot weather", to: "/guides/beat-the-heat", name: "Beat the Heat" },
  { label: "Rain", to: "/guides/rainy-day-activities", name: "Rainy Day Activities" },
  { label: "Beaches", to: "/beaches", name: "Townsville Beaches" },
  { label: "Swimming safety", to: "/guides/stinger-safety", name: "Stinger Safety" },
  { label: "Magnetic Island", to: "/guides/magnetic-island-day-trip", name: "Magnetic Island Day Trip" },
  { label: "Paluma", to: "/guides/paluma-day-trip", name: "Paluma Day Trip" },
  { label: "Local insight", to: "/local-tips", name: "Local Tips" },
];

const RELATED = [
  { name: "First Time in Townsville", to: "/first-time-in-townsville", text: "Orientation and planning for a first visit." },
  { name: "Townsville in One Day", to: "/townsville-in-one-day", text: "A realistic single-day itinerary." },
  { name: "The Strand", to: "/the-strand", text: "Waterfront, Rockpool, Water Park and beaches." },
  { name: "Castle Hill", to: "/castle-hill", text: "Townsville's main lookout, by car or on foot." },
  { name: "Magnetic Island Day Trip", to: "/guides/magnetic-island-day-trip", text: "Planning a full island day." },
  { name: "Townsville with Kids", to: "/townsville-with-kids", text: "Family days out, water play and wildlife." },
  { name: "Free Things to Do", to: "/guides/free-things", text: "No-cost options across the city." },
  { name: "Townsville Without a Car", to: "/townsville-without-a-car", text: "What works on foot, bus and ferry." },
  { name: "Riverway", to: "/riverway", text: "Free lagoons, parkland and a gallery." },
  { name: "Jezzine Barracks", to: "/jezzine-barracks", text: "Free heritage and coastal walking at Kissing Point." },
  { name: "Townsville Beaches", to: "/beaches", text: "Which beaches suit swimming, walking or a picnic." },
  { name: "Beat the Heat", to: "/guides/beat-the-heat", text: "How to structure a comfortable hot day." },
  { name: "Rainy Day Activities", to: "/guides/rainy-day-activities", text: "Indoor and wet-weather options." },
  { name: "Paluma Day Trip", to: "/guides/paluma-day-trip", text: "Rainforest, lookouts and the mountain drive." },
];

const faqs = [
  {
    q: "What are the best things to do in Townsville?",
    a: "The Strand, Castle Hill and a day trip to Magnetic Island are the three experiences most visitors remember. After those, Jezzine Barracks, Riverway, Billabong Sanctuary and a Paluma day trip round out a strong few days. Most of the best options are free.",
  },
  {
    q: "What are the top three things to do in Townsville?",
    a: "The Strand for the waterfront, swimming and food; Castle Hill for the city's best view; and Magnetic Island for the strongest day trip. If you only have limited time, do those three and leave the rest.",
  },
  {
    q: "How many days do you need in Townsville?",
    a: "Three to four days suits a first visit. Two days covers the waterfront, Castle Hill and Magnetic Island. A third and fourth day let you add Riverway, Billabong Sanctuary, a museum or a Paluma day trip without rushing.",
  },
  {
    q: "What can you do in Townsville for free?",
    a: "The Strand, Castle Hill, Riverway lagoons, Jezzine Barracks, the beaches and the walking paths between them all cost nothing. Our free things to do guide has the full list.",
  },
  {
    q: "What can families do in Townsville?",
    a: "The Strand Water Park and Rockpool, the Riverway lagoons, Billabong Sanctuary and a Magnetic Island day are the reliable family options, along with playgrounds along the waterfront. See our Townsville with kids guide for planning around nap times and heat.",
  },
  {
    q: "Do you need a car to see Townsville?",
    a: "Not for a short stay. The Strand, North Ward, Jezzine Barracks and the CBD work well on foot, and the Magnetic Island ferry leaves from the city. A car becomes useful for Riverway, Billabong Sanctuary, Pallarenda and regional day trips. Our Townsville without a car guide covers what is realistic.",
  },
  {
    q: "What is the best day trip from Townsville?",
    a: "Magnetic Island, by a clear margin — a short ferry crossing, beaches, walks and wildlife in one day. Paluma is the best alternative if you would rather have rainforest, cooler air and lookouts than the coast.",
  },
  {
    q: "What can you do in Townsville when it rains?",
    a: "Queensland Museum Tropics, galleries, libraries, shopping centres, the cinema and long café stops all work. Light rain rarely stops a Strand walk. Our rainy day activities guide has the detail.",
  },
  {
    q: "What are the best things to do in hot weather?",
    a: "Start outdoors early, swim through the middle of the day at the Riverway lagoons, the Rockpool or the Strand Water Park, take an indoor break in the afternoon, then head back outside in the early evening. Our beat the heat guide explains the pattern.",
  },
  {
    q: "Is Magnetic Island worth visiting?",
    a: "Yes. It is the strongest single experience in the region and works well as a full day rather than a quick stop. Plan a couple of bays and one walk, such as the Forts Walk, instead of trying to see the whole island.",
  },
  {
    q: "What are the best beaches in Townsville?",
    a: "The Strand is the easiest and best set up for visitors, with Pallarenda and Rowes Bay quieter alternatives. Beaches vary in how suitable they are for swimming, so check our beaches guide and the marine stinger safety guide first.",
  },
  {
    q: "Is Reef HQ open?",
    a: "No. The Great Barrier Reef Aquarium, formerly known as Reef HQ, is closed for redevelopment and is not currently available to visitors. See our Reef HQ status page for the current position.",
  },
];

const ThingsToDo = () => (
  <>
    <SEOHead title={TITLE} description={DESCRIPTION} canonical={PATH} ogType="article" />
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: "Best Things to Do in Townsville",
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
                { "@type": "ListItem", position: 2, name: "Things to Do", item: `${SITE}${PATH}` },
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
        <Compass className="w-4 h-4" aria-hidden="true" />
        Activity discovery hub
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">Best Things to Do in Townsville</h1>

      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        If you only do three things in Townsville, make them{" "}
        <Link to="/the-strand" className="text-primary hover:underline">
          The Strand
        </Link>
        ,{" "}
        <Link to="/castle-hill" className="text-primary hover:underline">
          Castle Hill
        </Link>{" "}
        and a day on{" "}
        <Link to="/guides/magnetic-island-day-trip" className="text-primary hover:underline">
          Magnetic Island
        </Link>
        . Everything else — {" "}
        <Link to="/jezzine-barracks" className="text-primary hover:underline">
          Jezzine Barracks
        </Link>
        ,{" "}
        <Link to="/riverway" className="text-primary hover:underline">
          Riverway
        </Link>
        , wildlife at{" "}
        <Link to="/billabong-sanctuary" className="text-primary hover:underline">
          Billabong Sanctuary
        </Link>
        , the{" "}
        <Link to="/beaches" className="text-primary hover:underline">
          beaches
        </Link>
        , a{" "}
        <Link to="/guides/paluma-day-trip" className="text-primary hover:underline">
          Paluma
        </Link>{" "}
        day trip, walks and viewpoints — builds on top of that core.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-8">
        This page is a discovery hub, not an encyclopaedia. Use it to work out what suits your trip
        length, travel style, weather and transport, then follow the link through to the detailed
        guide for whatever you choose.
      </p>

      <GuideQuickFacts className="mb-10" />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Start here: the essential Townsville experiences</h2>
        <p className="text-muted-foreground mb-6">
          Five experiences carry most of a Townsville visit. They are not equally important — the
          first three matter most.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Waves className="w-5 h-5 text-primary" aria-hidden="true" /> 1. The Strand
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The easiest all-round introduction to the city: a long waterfront for walking, safe
              swimming options, playgrounds and family facilities, and cafés and restaurants along
              the way. Mornings are for walking and swimming, early evenings for food and the
              sunset. Most visitors return more than once. See the full{" "}
              <Link to="/the-strand" className="text-primary hover:underline">
                Strand guide
              </Link>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Mountain className="w-5 h-5 text-primary" aria-hidden="true" /> 2. Castle Hill
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The city's best major viewpoint, and the fastest way to understand how Townsville fits
              together. You can drive to the lookout — walking up is optional, and the tracks are
              exposed, so heat matters far more than fitness for anyone going up on foot. See{" "}
              <Link to="/castle-hill" className="text-primary hover:underline">
                Castle Hill
              </Link>{" "}
              for visiting, or{" "}
              <Link to="/guides/walking-castle-hill" className="text-primary hover:underline">
                walking Castle Hill
              </Link>{" "}
              for the tracks.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Ship className="w-5 h-5 text-primary" aria-hidden="true" /> 3. Magnetic Island
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The strongest day trip in the region, and best treated as its own full day rather than
              squeezed around other plans. Start with the{" "}
              <Link to="/guides/magnetic-island-day-trip" className="text-primary hover:underline">
                day trip guide
              </Link>
              , check the{" "}
              <Link to="/guides/magnetic-island-ferry" className="text-primary hover:underline">
                ferry guide
              </Link>{" "}
              before you go, and consider the{" "}
              <Link to="/guides/forts-walk-magnetic-island" className="text-primary hover:underline">
                Forts Walk
              </Link>{" "}
              if you want wildlife and views.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" aria-hidden="true" /> 4. Jezzine Barracks
              and Kissing Point
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Free, easy to combine with The Strand, and a good mix of heritage, public art and
              coastal views. It walks well, suits families, and adds about an hour to a waterfront
              morning. See{" "}
              <Link to="/jezzine-barracks" className="text-primary hover:underline">
                Jezzine Barracks
              </Link>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <TreePine className="w-5 h-5 text-primary" aria-hidden="true" /> 5. Riverway
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Free swimming lagoons, parkland and local recreation on the Ross River — more of a
              local-life outing than a headline attraction, and genuinely useful on a hot day or
              with children. See{" "}
              <Link to="/riverway" className="text-primary hover:underline">
                Riverway
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Best things to do by traveller type</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">First-time visitors</h3>
            <p className="text-muted-foreground leading-relaxed">
              Prioritise The Strand, Castle Hill and Magnetic Island, in that order, and add
              anything else only once those are locked in. Our{" "}
              <Link to="/first-time-in-townsville" className="text-primary hover:underline">
                first time in Townsville
              </Link>{" "}
              guide covers orientation, where to base yourself and how long to stay.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Baby className="w-5 h-5 text-primary" aria-hidden="true" /> With kids
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The Strand Water Park and playgrounds, the Riverway lagoons,{" "}
              <Link to="/billabong-sanctuary" className="text-primary hover:underline">
                Billabong Sanctuary
              </Link>{" "}
              for wildlife, and a Magnetic Island day are the dependable options. Full planning in{" "}
              <Link to="/townsville-with-kids" className="text-primary hover:underline">
                Townsville with kids
              </Link>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Coins className="w-5 h-5 text-primary" aria-hidden="true" /> On a budget
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The Strand, Castle Hill, Riverway, Jezzine Barracks, the beaches and the walking paths
              between them are all free. A good Townsville day often has no ticket in it — see{" "}
              <Link to="/guides/free-things" className="text-primary hover:underline">
                free things to do
              </Link>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Car className="w-5 h-5 text-primary" aria-hidden="true" /> Without a car
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The Strand, North Ward, Jezzine Barracks and the CBD form a walkable cluster, and the
              Magnetic Island ferry leaves from the city, so the best day trip is car-free too. See{" "}
              <Link to="/townsville-without-a-car" className="text-primary hover:underline">
                Townsville without a car
              </Link>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Sun className="w-5 h-5 text-primary" aria-hidden="true" /> In hot weather
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Do exposed activities early, swim through the middle of the day at Riverway, the
              Rockpool or the Strand Water Park, then take an indoor break in the afternoon. The{" "}
              <Link to="/guides/beat-the-heat" className="text-primary hover:underline">
                beat the heat
              </Link>{" "}
              guide has the full approach.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Umbrella className="w-5 h-5 text-primary" aria-hidden="true" /> When it rains
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Queensland Museum Tropics, galleries, libraries and long café stops all work, and
              light rain rarely stops a waterfront walk. See{" "}
              <Link to="/guides/rainy-day-activities" className="text-primary hover:underline">
                rainy day activities
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Best things to do by interest</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Beaches and swimming</h3>
            <p className="text-muted-foreground leading-relaxed">
              The Strand is the easiest and best set up,{" "}
              <Link to="/pallarenda-beach" className="text-primary hover:underline">
                Pallarenda
              </Link>{" "}
              is the quieter alternative, and the{" "}
              <Link to="/riverway" className="text-primary hover:underline">
                Riverway
              </Link>{" "}
              lagoons are the reliable freshwater option. Current stinger and swimming conditions
              matter more than the beach itself — check the{" "}
              <Link to="/beaches" className="text-primary hover:underline">
                beaches guide
              </Link>{" "}
              and{" "}
              <Link to="/guides/stinger-safety" className="text-primary hover:underline">
                marine stinger safety
              </Link>{" "}
              before you swim.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Walking and views</h3>
            <p className="text-muted-foreground leading-relaxed">
              <Link to="/castle-hill" className="text-primary hover:underline">
                Castle Hill
              </Link>{" "}
              is the headline view, with the{" "}
              <Link to="/guides/walking-castle-hill" className="text-primary hover:underline">
                walking tracks
              </Link>{" "}
              for anyone going up on foot. The{" "}
              <Link to="/jezzine-barracks" className="text-primary hover:underline">
                Jezzine and Kissing Point
              </Link>{" "}
              headland, the Strand promenade, and the Ross River paths around{" "}
              <Link to="/riverway" className="text-primary hover:underline">
                Riverway
              </Link>{" "}
              cover flatter, shadier walking.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Wildlife and nature</h3>
            <p className="text-muted-foreground leading-relaxed">
              <Link to="/billabong-sanctuary" className="text-primary hover:underline">
                Billabong Sanctuary
              </Link>{" "}
              is the best guaranteed wildlife experience.{" "}
              <Link to="/guides/forts-walk-magnetic-island" className="text-primary hover:underline">
                Magnetic Island's Forts Walk
              </Link>{" "}
              is the best chance of seeing koalas in the wild, and{" "}
              <Link to="/guides/paluma-day-trip" className="text-primary hover:underline">
                Paluma
              </Link>{" "}
              is the rainforest option. Closer to town, the Cape Pallarenda area near{" "}
              <Link to="/pallarenda-beach" className="text-primary hover:underline">
                Pallarenda Beach
              </Link>{" "}
              and the wider{" "}
              <Link to="/nature" className="text-primary hover:underline">
                nature and walks
              </Link>{" "}
              areas are easy add-ons.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">History and culture</h3>
            <p className="text-muted-foreground leading-relaxed">
              <Link to="/jezzine-barracks" className="text-primary hover:underline">
                Jezzine Barracks
              </Link>{" "}
              combines military heritage, Indigenous cultural interpretation and public art in one
              free walk. Queensland Museum Tropics is the main indoor museum, with the Army Museum
              North Queensland, city galleries and CBD public art filling out a half-day. Background
              reading in our{" "}
              <Link to="/history" className="text-primary hover:underline">
                Townsville history
              </Link>{" "}
              guide.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Day trips</h3>
            <p className="text-muted-foreground leading-relaxed">
              <Link to="/guides/magnetic-island-day-trip" className="text-primary hover:underline">
                Magnetic Island
              </Link>{" "}
              first,{" "}
              <Link to="/guides/paluma-day-trip" className="text-primary hover:underline">
                Paluma
              </Link>{" "}
              second. Shorter outings north to{" "}
              <Link to="/pallarenda-beach" className="text-primary hover:underline">
                Pallarenda
              </Link>{" "}
              or{" "}
              <Link to="/rowes-bay" className="text-primary hover:underline">
                Rowes Bay
              </Link>{" "}
              work as half-days rather than full ones.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Free activities</h3>
            <p className="text-muted-foreground leading-relaxed">
              Rather than repeat the list here, see our{" "}
              <Link to="/guides/free-things" className="text-primary hover:underline">
                free things to do in Townsville
              </Link>{" "}
              guide.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Clock className="w-6 h-6 text-primary" aria-hidden="true" /> Best things to do if you
          only have…
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-card rounded-xl p-5 border">
            <h3 className="font-semibold mb-2">Half a day</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The Strand plus the Castle Hill lookout, or The Strand plus Jezzine Barracks if you
              would rather walk than drive.
            </p>
          </div>
          <div className="bg-card rounded-xl p-5 border">
            <h3 className="font-semibold mb-2">One day</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Follow our{" "}
              <Link to="/townsville-in-one-day" className="text-primary hover:underline">
                Townsville in one day
              </Link>{" "}
              itinerary rather than assembling your own.
            </p>
          </div>
          <div className="bg-card rounded-xl p-5 border">
            <h3 className="font-semibold mb-2">Two days</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Day 1: The Strand, Jezzine Barracks and Castle Hill. Day 2: Magnetic Island as a full
              day.
            </p>
          </div>
          <div className="bg-card rounded-xl p-5 border">
            <h3 className="font-semibold mb-2">Three to four days</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Add Riverway, Billabong Sanctuary, a museum, a Paluma day trip and slower Strand time.
              Pick two or three of those, not all of them.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Major attractions vs local-style experiences</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-card rounded-xl p-5 border">
            <h3 className="font-semibold mb-3">Major visitor priorities</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>The Strand</li>
              <li>Castle Hill</li>
              <li>Magnetic Island</li>
              <li>Billabong Sanctuary</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl p-5 border">
            <h3 className="font-semibold mb-3">Local-style experiences</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>Riverway</li>
              <li>Jezzine Barracks</li>
              <li>Rowes Bay</li>
              <li>Pallarenda</li>
              <li>Weekend markets</li>
              <li>Ross River paths</li>
              <li>Anderson Park botanic gardens</li>
            </ul>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed mt-4">
          The first list is what most visitors would regret missing. The second is what makes a
          longer stay feel less like sightseeing — worthwhile additions rather than must-sees.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Free vs paid</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-card rounded-xl p-5 border">
            <h3 className="font-semibold mb-3">Strong free options</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>The Strand</li>
              <li>Castle Hill</li>
              <li>Riverway lagoons</li>
              <li>Jezzine Barracks</li>
              <li>Beaches</li>
              <li>Public walking paths</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl p-5 border">
            <h3 className="font-semibold mb-3">Paid options</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>Billabong Sanctuary</li>
              <li>Museums and ticketed exhibitions</li>
              <li>The Magnetic Island ferry</li>
              <li>Tours</li>
              <li>Reef and diving experiences</li>
            </ul>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Prices and admission arrangements change, so check current details with each operator. For
          a full no-cost itinerary, see{" "}
          <Link to="/guides/free-things" className="text-primary hover:underline">
            free things to do
          </Link>
          .
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Indoor vs outdoor</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-card rounded-xl p-5 border">
            <h3 className="font-semibold mb-3">Outdoor</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>The Strand</li>
              <li>Castle Hill</li>
              <li>Magnetic Island</li>
              <li>Riverway</li>
              <li>Jezzine Barracks</li>
              <li>Beaches</li>
              <li>Paluma</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl p-5 border">
            <h3 className="font-semibold mb-3">Indoor and sheltered</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>Queensland Museum Tropics</li>
              <li>Galleries</li>
              <li>Libraries</li>
              <li>Shopping centres and cinema</li>
              <li>Cafés</li>
            </ul>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed mt-4">
          More wet-weather detail in{" "}
          <Link to="/guides/rainy-day-activities" className="text-primary hover:underline">
            rainy day activities
          </Link>
          .
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-primary" aria-hidden="true" /> What is not currently
          available?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          The Great Barrier Reef Aquarium, formerly known as Reef HQ, is closed for redevelopment
          and is not currently available to visitors. See our{" "}
          <Link to="/reef-hq-townsville" className="text-primary hover:underline">
            Reef HQ status page
          </Link>{" "}
          for the current position and indoor alternatives.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-primary" aria-hidden="true" /> Suggested activity
          combinations
        </h2>
        <ul className="space-y-3 text-muted-foreground">
          <li>
            <strong className="text-foreground">Strand + Jezzine Barracks</strong> — an easy central
            half-day on foot.
          </li>
          <li>
            <strong className="text-foreground">Castle Hill + The Strand</strong> — a good
            late-afternoon and early-evening combination.
          </li>
          <li>
            <strong className="text-foreground">Riverway + a western-suburbs stop</strong> — a
            useful family or hot-weather outing.
          </li>
          <li>
            <strong className="text-foreground">Magnetic Island</strong> — best treated as its own
            day.
          </li>
          <li>
            <strong className="text-foreground">Paluma</strong> — also best treated as its own day.
          </li>
          <li>
            <strong className="text-foreground">Pallarenda + Jezzine or Rowes Bay</strong> — a good
            coastal afternoon.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Common planning mistakes</h2>
        <ul className="space-y-2 text-muted-foreground">
          {[
            "Trying to do too much in one day.",
            "Treating Magnetic Island as a quick stop rather than a full day.",
            "Attempting the Castle Hill walking tracks in peak heat.",
            "Assuming every beach is suitable for swimming.",
            "Treating Paluma as a short suburban outing.",
            "Overlooking the free attractions, which include some of the best ones.",
            "Driving back and forth across the city instead of grouping nearby places.",
            "Expecting Reef HQ to be open.",
            "Ignoring wet-season weather and road conditions.",
            "Assuming a car is required for every activity.",
          ].map((m) => (
            <li key={m} className="flex items-start gap-2">
              <span className="text-primary font-bold leading-6" aria-hidden="true">
                •
              </span>
              <span className="leading-relaxed">{m}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Compass className="w-6 h-6 text-primary" aria-hidden="true" /> Plan your Townsville visit
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PATHWAYS.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className="block bg-card rounded-xl p-4 border hover:border-primary hover:shadow-md transition"
            >
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                {p.label}
              </span>
              <span className="mt-1 flex items-center gap-1.5 font-semibold text-foreground">
                {p.name}
                <ArrowRight className="w-4 h-4 text-primary" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
        <p className="text-muted-foreground leading-relaxed mt-4">
          For official weather, road, park and transport information before you set out, see our{" "}
          <Link to="/useful-contacts" className="text-primary hover:underline">
            useful contacts page
          </Link>
          .
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

    <FoundingPartnerCTA />
  </>
);

export default ThingsToDo;
