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
  AlertTriangle,
  Baby,
  Building2,
  Car,
  Coffee,
  Compass,
  MapPin,
  Plane,
  Ship,
  ShoppingBag,
  TreePine,
  Users,
  Waves,
} from "lucide-react";

const SITE = "https://www.townsvilleguide.com.au";
const PATH = "/suburbs";

const TITLE = "Townsville Suburbs & Areas | Visitor Guide to Where Everything Is";
const DESCRIPTION =
  "Understand Townsville's main suburbs and visitor areas, from The Strand and CBD to South Townsville, Aitkenvale, Kirwan, Pallarenda and the Northern Beaches.";

const COMPARISON = [
  {
    area: "North Ward / The Strand",
    bestFor: "First visit, families, waterfront, walking",
    car: "Not essential centrally",
    feel: "Leisure / coastal",
    highlights: "The Strand, Jezzine Barracks",
  },
  {
    area: "Townsville CBD",
    bestFor: "Museums, food, business, central access",
    car: "Not essential centrally",
    feel: "Urban / practical",
    highlights: "Museums, galleries, dining",
  },
  {
    area: "South Townsville",
    bestFor: "Food, stadium, ferry access",
    car: "Often not essential centrally",
    feel: "Dining / event-focused",
    highlights: "Palmer Street, stadium, ferry",
  },
  {
    area: "Aitkenvale / Douglas",
    bestFor: "Shopping, hospital and JCU, practical stays",
    car: "Helpful",
    feel: "Practical suburban",
    highlights: "Stockland, JCU, hospital",
  },
  {
    area: "Kirwan / Thuringowa Central",
    bestFor: "Riverway, families, western shopping",
    car: "Helpful",
    feel: "Western suburban",
    highlights: "Riverway, Willows",
  },
  {
    area: "Pallarenda / Rowes Bay",
    bestFor: "Coastal nature, walking",
    car: "Helpful",
    feel: "Quiet coastal",
    highlights: "Pallarenda, Rowes Bay",
  },
  {
    area: "Northern Beaches",
    bestFor: "Quieter coastal stays, local beach outings",
    car: "Yes",
    feel: "Residential / relaxed",
    highlights: "Northern coastline",
  },
];

const GLOSSARY = [
  { name: "North Ward", text: "The coastal suburb that contains The Strand and Jezzine Barracks, and the main leisure area for visitors." },
  { name: "South Townsville", text: "Across the creek from the CBD, home to Palmer Street dining and close to the stadium and ferry terminal." },
  { name: "West End", text: "An inner residential area around the base of Castle Hill with a local feel rather than sightseeing." },
  { name: "Aitkenvale", text: "The main mid-city retail and services belt, best known for Stockland Townsville." },
  { name: "Douglas", text: "The university and hospital precinct, home to James Cook University and Townsville University Hospital." },
  { name: "Kirwan", text: "A large western suburb near Willows shopping centre and the wider Thuringowa Central area." },
  { name: "Garbutt", text: "The suburb around Townsville Airport, practical for transit and car hire rather than leisure sightseeing." },
  { name: "Pallarenda", text: "A quiet coastal suburb at the end of the northern peninsula, next to Cape Pallarenda parkland." },
  { name: "Rowes Bay", text: "A quiet coastal area between Jezzine Barracks and Pallarenda, good for walking and late-afternoon light." },
  { name: "Bushland Beach", text: "A residential coastal community on the northern edge of the city, one of the Northern Beaches." },
];

const MISTAKES = [
  "Assuming Townsville is compact — the main areas are further apart than they look on a map.",
  "Booking accommodation far from your planned activities without checking where those activities are.",
  "Confusing North Ward with the CBD — they adjoin, but they feel and function differently.",
  "Treating Riverway as central Townsville when it sits out at Thuringowa Central.",
  "Assuming Pallarenda is an easy walk from The Strand for everyone — the foreshore route is long and exposed.",
  "Underestimating the distance out to the Northern Beaches.",
  "Staying near the airport for a leisure trip without considering the trade-off in walkability.",
  "Choosing accommodation before deciding what the trip is mainly about.",
  "Crossing the city repeatedly instead of grouping nearby activities into the same outing.",
  "Treating Magnetic Island as just another suburb rather than a separate destination to plan for.",
  "Assuming every outer suburb is useful as a sightseeing base.",
];

const PATHWAYS = [
  { label: "First visit", name: "North Ward / Strand", to: "/first-time-in-townsville" },
  { label: "Central sightseeing", name: "CBD", to: "/things-to-do" },
  { label: "Dining", name: "Palmer Street / CBD", to: "/food" },
  { label: "Stadium", name: "South Townsville", to: "/cowboys-stadium-guide" },
  { label: "Ferry", name: "Central / South Townsville", to: "/guides/magnetic-island-ferry" },
  { label: "Family waterfront", name: "North Ward", to: "/the-strand" },
  { label: "Riverway", name: "Kirwan / Thuringowa", to: "/riverway" },
  { label: "Shopping", name: "Aitkenvale / Kirwan", to: "/shopping" },
  { label: "JCU / hospital", name: "Douglas", to: "/useful-contacts" },
  { label: "Airport", name: "Garbutt", to: "/townsville-airport" },
  { label: "Coastal nature", name: "Pallarenda / Rowes Bay", to: "/pallarenda-beach" },
  { label: "Northern Beaches", name: "Car-based coastal outing", to: "/beaches" },
];

const RELATED = [
  { to: "/accommodation", name: "Accommodation in Townsville", text: "Area-by-area advice on where to actually stay." },
  { to: "/first-time-in-townsville", name: "First Time in Townsville", text: "What to prioritise on a first visit." },
  { to: "/townsville-without-a-car", name: "Townsville Without a Car", text: "Which areas work on foot and by bus." },
  { to: "/the-strand", name: "The Strand", text: "The waterfront precinct at the heart of North Ward." },
  { to: "/food", name: "Food in Townsville", text: "Where to eat by area, meal and traveller type." },
  { to: "/shopping", name: "Shopping in Townsville", text: "Centres, markets and where each one sits." },
  { to: "/things-to-do", name: "Things to Do in Townsville", text: "The main activity hub for planning your days." },
  { to: "/nature", name: "Nature in Townsville", text: "Coastal, parkland and rainforest options across the region." },
  { to: "/riverway", name: "Riverway", text: "Free lagoons and parkland at Thuringowa Central." },
  { to: "/pallarenda-beach", name: "Pallarenda", text: "Quiet coastal walking at the end of the peninsula." },
  { to: "/guides/magnetic-island-day-trip", name: "Magnetic Island Day Trip", text: "Planning the island as a separate destination." },
  { to: "/local-tips", name: "Local Tips", text: "Practical local observations that save time." },
];

const faqs = [
  {
    q: "What is the best area of Townsville for visitors?",
    a: "North Ward and The Strand suit most visitors. It is the main waterfront leisure area, walkable, family-friendly and close to the CBD, so you can see a lot without driving constantly.",
  },
  {
    q: "Is North Ward the same as The Strand?",
    a: "Not quite. North Ward is the suburb; The Strand is the beachfront promenade that runs along it. When people say they are staying on The Strand, they usually mean North Ward.",
  },
  {
    q: "Is the Townsville CBD a good area to stay?",
    a: "Yes, if you want a central, practical base close to museums, galleries, cafés and transport. It is convenient rather than coastal, so it does not deliver the same waterfront feel as North Ward.",
  },
  {
    q: "What is South Townsville known for?",
    a: "Palmer Street dining, easy access to Queensland Country Bank Stadium and proximity to the marina and Magnetic Island ferry. It suits couples, event nights and short central stays.",
  },
  {
    q: "Where is Riverway in Townsville?",
    a: "Riverway is at Thuringowa Central in the western suburbs, on the Ross River. It is a popular free lagoon and parkland precinct, but it is not central Townsville and is much easier with a car.",
  },
  {
    q: "Which Townsville suburbs are best without a car?",
    a: "North Ward, the CBD and South Townsville. They sit close together, are reasonably walkable and are served by buses. Outer and western suburbs become far less convenient without a car.",
  },
  {
    q: "Where are Townsville's main shopping areas?",
    a: "Stockland at Aitkenvale and Willows at Kirwan are the two big suburban centres, with Castletown near the city and independent shops in the CBD. See the shopping guide for detail.",
  },
  {
    q: "Where is the best area for beaches and nature?",
    a: "Pallarenda and Rowes Bay for quiet coastal walking, Castle Hill for views, Riverway for parkland, and Magnetic Island for the fuller nature experience. Swimming has stinger and crocodile considerations year-round.",
  },
  {
    q: "Where are James Cook University and Townsville University Hospital?",
    a: "Both are at Douglas, in the city's south-west. It is a practical area rather than a sightseeing base, and a car makes it much easier.",
  },
  {
    q: "Is Garbutt a good area for tourists?",
    a: "Garbutt is convenient for Townsville Airport, car hire and short transit stays, but it is a commercial and industrial area rather than a walkable leisure base. For a holiday, central areas suit better.",
  },
  {
    q: "Are the Northern Beaches close to central Townsville?",
    a: "No. Bushland Beach, Saunders Beach, Toolakea, Toomulla and Balgal Beach are spread along the coast north of the city and are car-dependent. They suit quieter outings or longer local stays.",
  },
  {
    q: "Is Magnetic Island a Townsville suburb?",
    a: "Magnetic Island is part of the Townsville local area, but for planning purposes treat it as a separate island destination reached by ferry, with its own accommodation, transport and timing.",
  },
];

const Suburbs = () => (
  <>
    <SEOHead title={TITLE} description={DESCRIPTION} canonical={PATH} ogType="article" />
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: "Townsville Suburbs & Areas",
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
                { "@type": "ListItem", position: 2, name: "Townsville Suburbs & Areas", item: `${SITE}${PATH}` },
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
        Area orientation
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">Townsville Suburbs &amp; Areas</h1>

      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Townsville is more spread out than many first-time visitors expect. The Strand, CBD, Palmer
        Street, western suburbs, coastal areas and Northern Beaches all serve different purposes, so
        knowing where they are can save time and unnecessary driving.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-8">
        This page is about orientation: what each main area is like and how it fits into a trip. For
        where to stay see{" "}
        <Link to="/accommodation" className="text-primary hover:underline">
          accommodation
        </Link>
        , for where to eat see{" "}
        <Link to="/food" className="text-primary hover:underline">
          food
        </Link>
        , and for specific places see the{" "}
        <Link to="/directory" className="text-primary hover:underline">
          directory
        </Link>
        .
      </p>

      <GuideQuickFacts className="mb-10" />

      {/* Main visitor areas */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Start here: the main visitor areas</h2>
        <p className="text-muted-foreground mb-6">
          Four inner areas cover almost everything most visitors do. Everything else is either
          practical, coastal or a separate day out.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Waves className="w-5 h-5 text-primary" aria-hidden="true" /> North Ward / The Strand
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The strongest leisure area for first-time visitors. It is the waterfront side of the
              city, built around{" "}
              <Link to="/the-strand" className="text-primary hover:underline">
                The Strand
              </Link>{" "}
              promenade, with swimming enclosures, playgrounds, cafés and{" "}
              <Link to="/jezzine-barracks" className="text-primary hover:underline">
                Jezzine Barracks
              </Link>{" "}
              at the northern end. It is family-friendly, easy to enjoy on foot and works well
              without a car. See{" "}
              <Link to="/accommodation" className="text-primary hover:underline">
                accommodation
              </Link>{" "}
              and{" "}
              <Link to="/food" className="text-primary hover:underline">
                food
              </Link>{" "}
              for what is around it.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" aria-hidden="true" /> Townsville CBD
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The city centre: museums, galleries, cafés, business and the best central access to the
              rest of town. It is a practical base and easy to combine with other areas, but it does
              not offer the same coastal experience as The Strand. See{" "}
              <Link to="/things-to-do" className="text-primary hover:underline">
                things to do
              </Link>
              ,{" "}
              <Link to="/food" className="text-primary hover:underline">
                food
              </Link>
              ,{" "}
              <Link to="/accommodation" className="text-primary hover:underline">
                accommodation
              </Link>{" "}
              and{" "}
              <Link to="/shopping" className="text-primary hover:underline">
                shopping
              </Link>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Coffee className="w-5 h-5 text-primary" aria-hidden="true" /> South Townsville / Palmer
              Street
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The city's best-known restaurant strip, with easy access to{" "}
              <Link to="/cowboys-stadium-guide" className="text-primary hover:underline">
                Queensland Country Bank Stadium
              </Link>{" "}
              and convenient for the marina and{" "}
              <Link to="/guides/magnetic-island-ferry" className="text-primary hover:underline">
                Magnetic Island ferry
              </Link>
              . It suits couples, event nights and short central stays. See{" "}
              <Link to="/food" className="text-primary hover:underline">
                food
              </Link>{" "}
              and{" "}
              <Link to="/accommodation" className="text-primary hover:underline">
                accommodation
              </Link>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" aria-hidden="true" /> West End
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              An inner residential area sitting around the base of{" "}
              <Link to="/castle-hill" className="text-primary hover:underline">
                Castle Hill
              </Link>
              . It has a local, lived-in feel rather than a sightseeing focus, and it is mainly useful
              if you are staying slightly outside the main visitor areas but still close to the
              centre.
            </p>
          </div>
        </div>
      </section>

      {/* Western and practical */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Western and practical areas</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Aitkenvale</h3>
            <p className="text-muted-foreground leading-relaxed">
              The main retail and services belt, home to Stockland Townsville. It is useful for
              practical{" "}
              <Link to="/shopping" className="text-primary hover:underline">
                shopping
              </Link>
              , everyday services, longer stays and access toward JCU, the hospital and the western
              suburbs. See{" "}
              <Link to="/accommodation" className="text-primary hover:underline">
                accommodation
              </Link>{" "}
              if you are considering it as a base.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Douglas</h3>
            <p className="text-muted-foreground leading-relaxed">
              The university and health precinct: James Cook University and Townsville University
              Hospital, plus Ross River parkland access nearby. It suits practical stays tied to
              study, work or medical appointments rather than sightseeing.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Kirwan / Thuringowa Central</h3>
            <p className="text-muted-foreground leading-relaxed">
              The western hub, useful for{" "}
              <Link to="/riverway" className="text-primary hover:underline">
                Riverway
              </Link>
              , Willows shopping, family activity days and practical local stays. It is a good day
              destination and a workable base for longer stays, but it is not a central sightseeing
              base — see{" "}
              <Link to="/shopping" className="text-primary hover:underline">
                shopping
              </Link>{" "}
              for what is out there.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Plane className="w-5 h-5 text-primary" aria-hidden="true" /> Airport / Garbutt
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Garbutt wraps around{" "}
              <Link to="/townsville-airport" className="text-primary hover:underline">
                Townsville Airport
              </Link>{" "}
              and covers commercial and industrial pockets, car hire and transit. It works for
              business trips and early flights, but it is less convenient for walkable leisure
              sightseeing. See{" "}
              <Link to="/accommodation" className="text-primary hover:underline">
                accommodation
              </Link>{" "}
              and{" "}
              <Link to="/townsville-without-a-car" className="text-primary hover:underline">
                Townsville Without a Car
              </Link>{" "}
              before committing to it.
            </p>
          </div>
        </div>
      </section>

      {/* Coastal areas */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Coastal areas</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Rowes Bay</h3>
            <p className="text-muted-foreground leading-relaxed">
              A quiet coastal area linking Jezzine Barracks with Pallarenda. It is good for walking
              and late-afternoon or sunset outings rather than as a major swimming destination. See{" "}
              <Link to="/rowes-bay" className="text-primary hover:underline">
                Rowes Bay
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Pallarenda</h3>
            <p className="text-muted-foreground leading-relaxed">
              Quieter coastal nature at the end of the peninsula, with walking, picnics and access to
              Cape Pallarenda parkland. See{" "}
              <Link to="/pallarenda-beach" className="text-primary hover:underline">
                Pallarenda
              </Link>
              ,{" "}
              <Link to="/nature" className="text-primary hover:underline">
                nature
              </Link>{" "}
              and{" "}
              <Link to="/beaches" className="text-primary hover:underline">
                beaches
              </Link>{" "}
              for swimming and safety guidance.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Northern Beaches</h3>
            <p className="text-muted-foreground leading-relaxed">
              Bushland Beach, Saunders Beach, Toolakea, Toomulla and Balgal Beach sit along the coast
              north of the city. They are more spread out, residential and car-dependent, and they
              suit quieter coastal outings or longer local stays rather than central sightseeing. See{" "}
              <Link to="/beaches" className="text-primary hover:underline">
                Townsville beaches
              </Link>
              ,{" "}
              <Link to="/beaches/saunders-beach" className="text-primary hover:underline">
                Saunders Beach
              </Link>{" "}
              and{" "}
              <Link to="/north-shore-townsville" className="text-primary hover:underline">
                North Shore
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Magnetic Island */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Ship className="w-6 h-6 text-primary" aria-hidden="true" /> Magnetic Island
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Magnetic Island is part of the wider Townsville visitor experience, but it is a distinct
          island destination rather than another mainland suburb. It has its own bays, transport,
          walking tracks and accommodation, and it should be planned separately with ferry times in
          mind.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          See the{" "}
          <Link to="/guides/magnetic-island-day-trip" className="text-primary hover:underline">
            day trip guide
          </Link>
          , the{" "}
          <Link to="/guides/magnetic-island-ferry" className="text-primary hover:underline">
            ferry guide
          </Link>
          , the{" "}
          <Link to="/guides/forts-walk-magnetic-island" className="text-primary hover:underline">
            Forts Walk
          </Link>{" "}
          and{" "}
          <Link to="/accommodation" className="text-primary hover:underline">
            accommodation
          </Link>{" "}
          if you plan to stay overnight.
        </p>
      </section>

      {/* Comparison */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Which Townsville area suits you?</h2>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left font-semibold px-4 py-3">Area</th>
                <th className="text-left font-semibold px-4 py-3">Best for</th>
                <th className="text-left font-semibold px-4 py-3">Car useful?</th>
                <th className="text-left font-semibold px-4 py-3">Visitor feel</th>
                <th className="text-left font-semibold px-4 py-3">Nearby highlights</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.area} className="border-t align-top">
                  <td className="px-4 py-3 font-medium text-foreground">{row.area}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.bestFor}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.car}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.feel}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.highlights}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Traveller type */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Best areas by traveller type</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" aria-hidden="true" /> First-time visitors
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Prioritise North Ward / The Strand, then the CBD and South Townsville. See{" "}
              <Link to="/first-time-in-townsville" className="text-primary hover:underline">
                First Time in Townsville
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Baby className="w-5 h-5 text-primary" aria-hidden="true" /> With kids
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              North Ward and The Strand for the waterfront, Riverway at Kirwan for activity days, and
              practical suburbs for longer stays. See{" "}
              <Link to="/townsville-with-kids" className="text-primary hover:underline">
                Townsville with Kids
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Car className="w-5 h-5 text-primary" aria-hidden="true" /> Without a car
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Stay in North Ward, the CBD or South Townsville. Outer suburbs become noticeably less
              convenient once you are relying on buses and walking. See{" "}
              <Link to="/townsville-without-a-car" className="text-primary hover:underline">
                Townsville Without a Car
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <TreePine className="w-5 h-5 text-primary" aria-hidden="true" /> Nature lovers
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Pallarenda and Rowes Bay for coastal walking, Magnetic Island for the fuller
              experience, and Paluma as a regional day trip. See{" "}
              <Link to="/nature" className="text-primary hover:underline">
                nature
              </Link>{" "}
              and the{" "}
              <Link to="/guides/paluma-day-trip" className="text-primary hover:underline">
                Paluma day trip
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Longer practical stays</h3>
            <p className="text-muted-foreground leading-relaxed">
              Aitkenvale, Douglas and Kirwan all work depending on your purpose — shopping and
              services, university or hospital, or western-suburbs family life.
            </p>
          </div>
        </div>
      </section>

      {/* Central vs outer */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Central Townsville vs outer suburbs</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-card p-5">
            <h3 className="text-lg font-semibold mb-2">Central Townsville</h3>
            <p className="text-sm text-muted-foreground">
              Broadly North Ward, the CBD, South Townsville and parts of West End. Easier
              sightseeing, more dining, more walking and much less driving.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-5">
            <h3 className="text-lg font-semibold mb-2">Outer and western areas</h3>
            <p className="text-sm text-muted-foreground">
              Aitkenvale, Douglas, Kirwan, Thuringowa Central and the Northern Beaches. Strong on
              practical services, shopping, Riverway, longer stays and a local feel — with more
              driving for central sightseeing.
            </p>
          </div>
        </div>
      </section>

      {/* Orientation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-primary" aria-hidden="true" /> Where the main attractions
          sit
        </h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-5">
          <li>
            <strong className="text-foreground">The Strand</strong> — North Ward
          </li>
          <li>
            <strong className="text-foreground">Jezzine Barracks</strong> — North Ward
          </li>
          <li>
            <strong className="text-foreground">Castle Hill</strong> — a central landmark bordering
            several inner areas
          </li>
          <li>
            <strong className="text-foreground">Queensland Country Bank Stadium</strong> — South
            Townsville / central-event area
          </li>
          <li>
            <strong className="text-foreground">Riverway</strong> — Thuringowa Central
          </li>
          <li>
            <strong className="text-foreground">Stockland</strong> — Aitkenvale
          </li>
          <li>
            <strong className="text-foreground">Willows</strong> — Kirwan / Thuringowa area
          </li>
          <li>
            <strong className="text-foreground">Magnetic Island ferry</strong> — central waterfront /
            South Townsville area
          </li>
          <li>
            <strong className="text-foreground">Townsville Airport</strong> — Garbutt
          </li>
          <li>
            <strong className="text-foreground">JCU and Townsville University Hospital</strong> —
            Douglas
          </li>
        </ul>
      </section>

      {/* Food / shopping / nature signposts */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Coffee className="w-6 h-6 text-primary" aria-hidden="true" /> Best areas for food
        </h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-5 mb-4">
          <li>
            <strong className="text-foreground">Strand / North Ward</strong> — waterfront, casual and
            breakfast
          </li>
          <li>
            <strong className="text-foreground">CBD</strong> — cafés, independent dining and central
            access
          </li>
          <li>
            <strong className="text-foreground">Palmer Street / South Townsville</strong> — dinner,
            couples and event nights
          </li>
        </ul>
        <p className="text-muted-foreground">
          Venue detail lives in the{" "}
          <Link to="/food" className="text-primary hover:underline">
            food guide
          </Link>
          .
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <ShoppingBag className="w-6 h-6 text-primary" aria-hidden="true" /> Best areas for shopping
        </h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-5 mb-4">
          <li>
            <strong className="text-foreground">Aitkenvale</strong> — Stockland
          </li>
          <li>
            <strong className="text-foreground">Kirwan</strong> — Willows
          </li>
          <li>
            <strong className="text-foreground">Near-central</strong> — Castletown
          </li>
          <li>
            <strong className="text-foreground">CBD</strong> — independent browsing
          </li>
        </ul>
        <p className="text-muted-foreground">
          See the{" "}
          <Link to="/shopping" className="text-primary hover:underline">
            shopping guide
          </Link>{" "}
          for hours, markets and what suits each need.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <TreePine className="w-6 h-6 text-primary" aria-hidden="true" /> Best areas for nature
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Pallarenda and Rowes Bay for quiet coast, Castle Hill for views and walking tracks,
          Riverway for parkland and Magnetic Island for the fuller nature day. The{" "}
          <Link to="/nature" className="text-primary hover:underline">
            nature guide
          </Link>{" "}
          covers what each one involves.
        </p>
      </section>

      {/* Accommodation callout */}
      <section className="mb-12">
        <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
          <h2 className="text-lg font-semibold mb-2">Choosing an area vs choosing a stay</h2>
          <p className="text-sm text-muted-foreground">
            This page explains what each Townsville area is like. If you are choosing where to stay,
            see the dedicated{" "}
            <Link to="/accommodation" className="text-primary hover:underline">
              accommodation guide
            </Link>{" "}
            for area-by-area stay recommendations.
          </p>
        </div>
      </section>

      {/* Glossary */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Suburb names visitors commonly see</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {GLOSSARY.map((g) => (
            <div key={g.name} className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold text-foreground">{g.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{g.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mistakes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-primary" aria-hidden="true" /> Common orientation
          mistakes
        </h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-5">
          {MISTAKES.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
        <p className="text-muted-foreground mt-4">
          More small practicalities are collected in{" "}
          <Link to="/local-tips" className="text-primary hover:underline">
            Local Tips
          </Link>
          , and{" "}
          <Link to="/useful-contacts" className="text-primary hover:underline">
            Useful Contacts
          </Link>{" "}
          covers health, transport and council services.
        </p>
      </section>

      {/* Pathways */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Plan by area need</h2>
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
        <h2 className="text-2xl font-bold mb-4">Townsville area questions</h2>
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

export default Suburbs;
