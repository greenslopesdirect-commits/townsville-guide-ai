import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import LocalInsightCard from "@/components/LocalInsightCard";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Accessibility,
  Waves,
  TreePine,
  Building2,
  Car,
  Bus,
  Plane,
  Ship,
  Sun,
  Umbrella,
  Bath,
  ParkingCircle,
  CalendarDays,
  Baby,
  Users,
  ClipboardCheck,
  AlertTriangle,
  Info,
  ExternalLink,
  ArrowRight,
  Scale,
  MapPin,
} from "lucide-react";

const SITE = "https://www.townsvilleguide.com.au";
const PATH = "/accessible-townsville";

const TITLE = "Accessible Townsville | Wheelchair & Mobility Visitor Guide";
const DESCRIPTION =
  "Plan an accessible visit to Townsville with practical guidance on easier attractions, mobility, transport, accommodation, The Strand, Riverway and current accessibility information.";

const COMPARISON = [
  {
    place: "The Strand",
    character: "Flatter waterfront environment with sealed promenade sections",
    bestFor: "Easy sightseeing, short walks, families, central visitors",
    consideration: "Distance, heat and individual facility access",
  },
  {
    place: "Jezzine Barracks",
    character: "Paths and coastal heritage areas",
    bestFor: "A shorter scenic visit",
    consideration: "Gradients vary between sections",
  },
  {
    place: "Riverway",
    character: "Parkland precinct with sealed path sections",
    bestFor: "A flexible local outing",
    consideration: "Facility and lagoon access varies — check current information",
  },
  {
    place: "Castle Hill lookout",
    character: "Vehicle-accessible visit possible",
    bestFor: "Views without walking the hill",
    consideration: "Walking tracks are separate and far more demanding",
  },
  {
    place: "Magnetic Island",
    character: "Varies significantly by ferry, transport, beach and attraction",
    bestFor: "Visitors who plan each component carefully",
    consideration: "Check each part of the trip separately",
  },
  {
    place: "Paluma",
    character: "Regional area with variable terrain",
    bestFor: "Visitors comfortable with a longer vehicle-based outing",
    consideration: "Roads, terrain, facilities and current access conditions",
  },
];

const CHECKLIST = [
  "Parking — where accessible bays are and how far they sit from the entrance",
  "Step-free access — entries, ramps and any unavoidable steps",
  "Toilets — whether an accessible toilet is available and currently open",
  "Lifts and ramps — availability, dimensions and whether they are in service",
  "Path surface — sealed, gravel, boardwalk, sand or grass",
  "Gradients — how steep the approach and internal routes are",
  "Transport — boarding arrangements for buses, taxis, rideshare and ferries",
  "Weather — heat, UV and rain on the day you plan to visit",
  "Temporary closures — maintenance, construction or event setup",
  "Assistance requirements — anything an operator needs to arrange in advance",
];

const MISTAKES = [
  "Assuming an attraction described as accessible is accessible in every part.",
  "Checking the attraction but not the transport that gets you there.",
  "Assuming a paved surface is also a flat surface — gradients vary.",
  "Booking accommodation without checking the exact room type.",
  "Underestimating heat and the distance between attractions.",
  "Assuming accessible parking is available on arrival rather than limited and often taken.",
  "Assuming every beach with a good path also has easy water access.",
  "Treating Magnetic Island as one single accessibility experience.",
  "Assuming every public toilet has the same accessibility features.",
  "Relying on old accessibility information found online.",
  "Trying to cover too many attractions in one day.",
  "Not contacting the venue directly when a specific feature is essential.",
];

const PATHWAYS = [
  { label: "Flat waterfront", to: "/the-strand", name: "The Strand" },
  { label: "Coastal heritage", to: "/jezzine-barracks", name: "Jezzine Barracks" },
  { label: "Parkland", to: "/riverway", name: "Riverway" },
  { label: "Drive-up views", to: "/castle-hill", name: "Castle Hill" },
  { label: "Central stay", to: "/accommodation", name: "Accommodation" },
  { label: "No car", to: "/townsville-without-a-car", name: "Townsville Without a Car" },
  { label: "Airport", to: "/townsville-airport", name: "Townsville Airport" },
  { label: "Island", to: "/guides/magnetic-island-ferry", name: "Magnetic Island Ferry" },
  { label: "With kids", to: "/townsville-with-kids", name: "Townsville with Kids" },
  { label: "Hot weather", to: "/guides/beat-the-heat", name: "Beat the Heat" },
  { label: "Rain", to: "/guides/rainy-day-activities", name: "Rainy Day Activities" },
  { label: "Current information", to: "/useful-contacts", name: "Useful Contacts" },
];

const STATUS_CHECKS = [
  {
    name: "Townsville City Council — facilities and recreation",
    url: "https://www.townsville.qld.gov.au/facilities-and-recreation",
    text: "Council parks, foreshore facilities, toilets and current closure notices.",
  },
  {
    name: "Translink — accessibility information",
    url: "https://translink.com.au/travel-with-us/accessibility",
    text: "Bus accessibility, boarding and journey planning across Queensland.",
  },
  {
    name: "Townsville Airport",
    url: "https://www.townsvilleairport.com.au/",
    text: "Terminal facilities and passenger assistance information.",
  },
  {
    name: "SeaLink Queensland — Magnetic Island ferry",
    url: "https://www.sealinkqld.com.au/",
    text: "Ferry boarding, terminal access and assistance arrangements.",
  },
  {
    name: "Townsville Enterprise — official visitor information",
    url: "https://www.townsvillenorthqueensland.com.au/",
    text: "Official visitor information and operator contact details.",
  },
];

const RELATED = [
  { name: "First Time in Townsville", to: "/first-time-in-townsville", text: "Orientation for a first visit." },
  { name: "Accommodation", to: "/accommodation", text: "Where to stay and how areas differ." },
  { name: "Townsville Without a Car", to: "/townsville-without-a-car", text: "What works without driving." },
  { name: "The Strand", to: "/the-strand", text: "The main flat waterfront precinct." },
  { name: "Jezzine Barracks", to: "/jezzine-barracks", text: "Coastal heritage headland at Kissing Point." },
  { name: "Riverway", to: "/riverway", text: "Riverside parkland precinct in Thuringowa." },
  { name: "Castle Hill", to: "/castle-hill", text: "Lookout you can reach by vehicle." },
  { name: "Townsville Airport", to: "/townsville-airport", text: "Flying in and getting into the city." },
  { name: "Magnetic Island Ferry", to: "/guides/magnetic-island-ferry", text: "Ferry planning and terminals." },
  { name: "Beat the Heat", to: "/guides/beat-the-heat", text: "Planning around tropical heat." },
  { name: "Rainy Day Activities", to: "/guides/rainy-day-activities", text: "Indoor and wet-weather options." },
  { name: "Useful Contacts", to: "/useful-contacts", text: "Council, emergency and visitor contacts." },
];

const faqs = [
  {
    q: "Is Townsville wheelchair friendly?",
    a: "It varies. Townsville has several visitor areas that are generally easier for people using wheelchairs or with limited mobility, particularly The Strand waterfront, parts of Jezzine Barracks and the Riverway parkland precinct, where sealed path sections and nearby facilities are available. Other places involve uneven ground, gradients, sand or long distances. Accessibility differs between individual facilities rather than being uniform across the city, so check the specific attractions and facilities you plan to use before travelling.",
  },
  {
    q: "What are the easiest attractions for visitors with limited mobility?",
    a: "The Strand is usually the easiest place to start because it is a relatively flat waterfront environment with sealed promenade sections, frequent rest opportunities and food and facilities nearby. Jezzine Barracks offers a shorter coastal and heritage visit, Riverway offers a parkland outing with facilities close by, and the Castle Hill lookout can be reached by vehicle. Access details still vary by facility, so confirm anything essential in advance.",
  },
  {
    q: "Is The Strand accessible for wheelchair users?",
    a: "The Strand foreshore is one of the flatter visitor environments in Townsville and has sealed promenade sections, which many wheelchair users find easier than other parts of the city. That does not mean every facility along it — toilets, playgrounds, pools, beach entries and individual venues — has the same access characteristics. Distance and heat are also real factors along a long foreshore. Check current Council information for the specific facilities you intend to use.",
  },
  {
    q: "Can you visit Castle Hill without walking?",
    a: "Yes. Castle Hill has a sealed road to the summit area, so driving to the lookout can make the view achievable for visitors who cannot walk the hill. The walking tracks are a completely different proposition — they are steep and demanding and should not be assumed to suit visitors with mobility limitations. Lookout surfaces, parking arrangements and exact access details are worth checking if a specific feature matters to you.",
  },
  {
    q: "Is Jezzine Barracks accessible?",
    a: "Jezzine Barracks at Kissing Point has path and boardwalk-style areas that make a shorter coastal visit possible for many visitors, and it is easy to combine with a North Ward stay. Gradients vary across the headland and not every section has identical access characteristics, so plan a shorter, flexible visit rather than assuming you can complete a full circuit.",
  },
  {
    q: "Is Riverway suitable for visitors with limited mobility?",
    a: "Riverway is a parkland precinct with sealed path sections and facilities grouped reasonably close together, which makes it a more flexible option than many regional nature sites. Distances within the precinct can still add up, and lagoon and facility access, supervision and opening hours change, so check the current Townsville City Council information before making the trip out.",
  },
  {
    q: "Is Magnetic Island accessible?",
    a: "It is not a single answer. Accessibility varies across the ferry boarding process, the terminals at each end, island buses, taxis, beaches, walking tracks and individual attractions. Some components may work well for you while others do not. Plan the trip as separate parts and confirm the ferry operator's accessibility arrangements, island transport and each attraction individually. The Forts Walk is a walking track and may not suit visitors with significant mobility limitations.",
  },
  {
    q: "Where should you stay in Townsville for easier access?",
    a: "Staying centrally usually reduces travel and repeated transfers. North Ward and The Strand suit visitors who want the flat waterfront close by, the CBD suits those who want services and transport nearby, and Palmer Street or South Townsville can work depending on your needs. Accessibility varies considerably between properties and even between room types, so contact the accommodation directly before booking if a specific feature matters.",
  },
  {
    q: "Is Townsville easy to visit without a car if you have limited mobility?",
    a: "It can work if you stay centrally and keep to a small cluster of attractions, using taxis or rideshare for longer hops. Public transport is available but does not work equally well for every mobility need, and boarding arrangements should be checked with the operator. A central base with short transfers is generally more predictable than relying on cross-city travel.",
  },
  {
    q: "Are Townsville beaches accessible?",
    a: "Beachfront access and actual water access are different things. Some beachfront areas have sealed paths, parking and facilities nearby, but sand remains a major mobility barrier and an accessible path does not mean accessible swimming. Facilities differ by location, and seasonal marine stinger risk affects where and how anyone should swim. Check the specific location before planning a swim.",
  },
  {
    q: "How does heat affect an accessible Townsville visit?",
    a: "Heat has a bigger impact on visitors who move more slowly, need more rest stops, rely on mobility aids or cannot easily change plans once committed. Plan outdoor visits early or late in the day, keep routes shorter, stay near shade or air-conditioning and minimise unnecessary transfers. This is general visitor planning advice, not medical advice — speak to a health professional about your own needs.",
  },
  {
    q: "Where can I check current accessibility information?",
    a: "Check Townsville City Council for parks, foreshore and public facilities, Translink for public transport accessibility, the airport and ferry operators for travel assistance, and the venue or attraction directly for anything specific. Accessibility details change with maintenance, construction, event setup and temporary closures, so use current official sources rather than older third-party descriptions.",
  },
];

const AccessibleTownsville = () => {
  return (
    <>
      <SEOHead title={TITLE} description={DESCRIPTION} canonical={`${SITE}${PATH}`} ogType="article" />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Accessible Townsville: Wheelchair & Mobility Visitor Guide",
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
              { "@type": "ListItem", position: 2, name: "Things to Do", item: `${SITE}/things-to-do` },
              { "@type": "ListItem", position: 3, name: "Accessible Townsville", item: `${SITE}${PATH}` },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="bg-muted/40 border-b border-border">
        <div className="container mx-auto max-w-4xl px-4 py-14 md:py-20 text-center">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
            Accessibility planning
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
            Accessible Townsville: Wheelchair &amp; Mobility Visitor Guide
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Townsville has several visitor areas that may suit people looking for flatter paths,
            shorter walking distances and easier access, but accessibility varies between individual
            attractions and facilities. This guide helps you plan the easier options and shows where
            to check current official information before travelling.
          </p>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
            Access here depends on the attraction, the route, the terrain, the transport you use, the
            facilities on site, the weather and any temporary conditions such as maintenance or event
            setup. Two people can have very different experiences of the same place, which is why this
            guide focuses on planning rather than promises.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-12 space-y-14">
        <GuideQuickFacts />

        <LocalInsightCard variant="warning" title="How to read this guide">
          <p>
            Nothing here should be treated as a guarantee that a place is fully accessible. Where a
            feature is essential to your visit — a step-free entry, an accessible toilet, a specific
            parking arrangement or assistance with boarding — confirm it directly with the venue,
            operator or Council before you travel.
          </p>
        </LocalInsightCard>

        {/* Start here */}
        <section aria-labelledby="start-here">
          <h2 id="start-here" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Accessibility className="w-6 h-6 text-primary" aria-hidden="true" /> Start Here: Easier
            Places to Consider
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            These four places come up most often for visitors who want shorter distances, flatter
            ground or the option to shorten a visit at any point. Each still has considerations worth
            checking.
          </p>

          <div className="space-y-5">
            <Card className="bg-muted/40">
              <CardContent className="p-5 space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Waves className="w-5 h-5 text-primary" aria-hidden="true" /> The Strand
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Strand is usually the first place to consider. It is a relatively flat waterfront
                  environment, sealed promenade sections are available, there are frequent rest
                  opportunities along the way, food and facilities sit nearby, and you can shorten the
                  visit at almost any point rather than committing to a full loop.
                </p>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Main considerations: total distance, heat, sun exposure and specific facility access</li>
                  <li>Not every facility along the foreshore has identical access characteristics</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  See the{" "}
                  <Link to="/the-strand" className="text-primary underline underline-offset-2 font-medium">
                    Strand guide
                  </Link>
                  ,{" "}
                  <Link to="/guides/beat-the-heat" className="text-primary underline underline-offset-2">
                    Beat the Heat
                  </Link>{" "}
                  and{" "}
                  <Link to="/useful-contacts" className="text-primary underline underline-offset-2">
                    Useful Contacts
                  </Link>{" "}
                  for current Council information.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/40">
              <CardContent className="p-5 space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" aria-hidden="true" /> Jezzine Barracks /
                  Kissing Point
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A coastal and heritage experience at the northern end of The Strand, with paths and
                  boardwalk-style areas and enough interest for a short, flexible visit. It combines
                  easily with a North Ward stay.
                </p>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Gradients vary across the headland</li>
                  <li>Not every section has identical access characteristics</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  Full detail in the{" "}
                  <Link to="/jezzine-barracks" className="text-primary underline underline-offset-2 font-medium">
                    Jezzine Barracks guide
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/40">
              <CardContent className="p-5 space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <TreePine className="w-5 h-5 text-primary" aria-hidden="true" /> Riverway
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A parkland precinct on the Ross River with facilities grouped in one place, which
                  makes it a flexible outing and a useful option when travelling with family members
                  or companions. For many visitors it is an easier local option than driving to a
                  regional nature site.
                </p>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Check current facility and lagoon access, supervision and opening hours</li>
                  <li>Distances within the precinct can still add up</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  See the{" "}
                  <Link to="/riverway" className="text-primary underline underline-offset-2 font-medium">
                    Riverway guide
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/40">
              <CardContent className="p-5 space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Car className="w-5 h-5 text-primary" aria-hidden="true" /> Castle Hill Lookout
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Driving to the lookout may make Castle Hill possible for visitors who cannot walk the
                  hill, which is why it appears on this page at all. The walking tracks are a
                  completely different accessibility proposition — steep, exposed and demanding — and
                  should not be assumed to suit visitors with mobility limitations.
                </p>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Lookout surfaces, parking and exact access details should be checked where necessary</li>
                  <li>Parking at the summit is limited and busiest at sunrise and sunset</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  See{" "}
                  <Link to="/castle-hill" className="text-primary underline underline-offset-2 font-medium">
                    Castle Hill
                  </Link>{" "}
                  and{" "}
                  <Link to="/guides/walking-castle-hill" className="text-primary underline underline-offset-2">
                    Walking Castle Hill
                  </Link>{" "}
                  for the difference between the two.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Comparison */}
        <section aria-labelledby="comparison">
          <h2 id="comparison" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Scale className="w-6 h-6 text-primary" aria-hidden="true" /> Accessibility Comparison
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A general character comparison only — it describes what to expect broadly, not the access
            features of any individual facility.
          </p>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm min-w-[640px]">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left font-semibold px-4 py-3">Place</th>
                  <th className="text-left font-semibold px-4 py-3">General access character</th>
                  <th className="text-left font-semibold px-4 py-3">Best for</th>
                  <th className="text-left font-semibold px-4 py-3">Main consideration</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.place} className="border-t align-top">
                    <td className="px-4 py-3 font-medium text-foreground">{row.place}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.character}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.bestFor}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.consideration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Central Townsville */}
        <section aria-labelledby="central">
          <h2 id="central" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Building2 className="w-6 h-6 text-primary" aria-hidden="true" /> Central Townsville for
            Lower-Mobility Visits
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Where you stay changes the shape of the whole trip. Staying centrally usually reduces
              unnecessary travel, which matters more than any single attraction feature.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">North Ward / The Strand</strong> — closest to the
                flat waterfront and the easiest sightseeing.
              </li>
              <li>
                <strong className="text-foreground">CBD</strong> — services, food and transport within
                a compact area.
              </li>
              <li>
                <strong className="text-foreground">Palmer Street / South Townsville</strong> — good
                for dining and ferry proximity, depending on your needs.
              </li>
            </ul>
            <p>The practical benefits are simple: shorter transfers, food nearby, easier grouping of attractions and less repeated driving across the city.</p>
            <p>
              Compare areas in{" "}
              <Link to="/accommodation" className="text-primary underline underline-offset-2 font-medium">
                Accommodation
              </Link>{" "}
              and{" "}
              <Link to="/suburbs" className="text-primary underline underline-offset-2">
                Townsville Suburbs
              </Link>
              , and see{" "}
              <Link to="/townsville-without-a-car" className="text-primary underline underline-offset-2">
                Townsville Without a Car
              </Link>{" "}
              if you will not be driving.
            </p>
          </div>
        </section>

        {/* Accommodation */}
        <section aria-labelledby="accommodation">
          <h2 id="accommodation" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Building2 className="w-6 h-6 text-primary" aria-hidden="true" /> Accommodation
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Accessibility varies considerably between properties and even between room types, so
              contact the accommodation directly before booking if a specific feature matters. Do not
              assume a property is accessible based only on brand or star rating.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Step-free entry from the street and from the car park</li>
              <li>Lift access, and what happens if the lift is out of service</li>
              <li>Accessible room availability and how it differs from a standard room</li>
              <li>Bathroom setup — shower type, grab rails, turning space, door width</li>
              <li>Parking location and distance from the entrance</li>
              <li>Distance from the room to reception, breakfast and lifts</li>
              <li>Pool access, if that matters to your stay</li>
            </ul>
            <p>
              Area-by-area guidance is in{" "}
              <Link to="/accommodation" className="text-primary underline underline-offset-2 font-medium">
                Townsville Accommodation
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Getting around */}
        <section aria-labelledby="getting-around">
          <h2 id="getting-around" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Bus className="w-6 h-6 text-primary" aria-hidden="true" /> Getting Around Without Much
            Walking
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The most reliable way to reduce walking in Townsville is to reduce travel: stay centrally,
              group attractions that sit close together, and avoid repeated cross-city trips in the
              same day.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">Taxis and rideshare</strong> — usually the most
                flexible option for door-to-door trips. Check suitability in advance if you travel with
                a larger mobility device.
              </li>
              <li>
                <strong className="text-foreground">Public transport</strong> — Translink buses serve the
                city, but public transport does not work equally well for all mobility needs. Check
                boarding arrangements and route information with the operator.
              </li>
              <li>
                <strong className="text-foreground">Short attraction clusters</strong> — The Strand,
                North Ward and the CBD sit close enough together to plan as one area.
              </li>
            </ul>
            <p>
              Full detail in{" "}
              <Link to="/townsville-without-a-car" className="text-primary underline underline-offset-2 font-medium">
                Townsville Without a Car
              </Link>
              , and see{" "}
              <Link to="/things-to-do" className="text-primary underline underline-offset-2">
                Things to Do
              </Link>{" "}
              for grouping ideas.
            </p>
          </div>
        </section>

        {/* Airport */}
        <section aria-labelledby="airport">
          <h2 id="airport" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Plane className="w-6 h-6 text-primary" aria-hidden="true" /> Townsville Airport
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Airline assistance — wheelchair assistance, boarding help or carriage of a mobility
              device — commonly needs to be pre-arranged, and requirements differ between airlines.
              Airport accessibility facilities should be checked directly with the airport rather than
              assumed.
            </p>
            <p>
              Your transfer choice also matters once you land: a taxi or rideshare directly to central
              accommodation is generally the most predictable option. See the{" "}
              <Link to="/townsville-airport" className="text-primary underline underline-offset-2 font-medium">
                Townsville Airport &amp; Flights guide
              </Link>{" "}
              for transport options and orientation.
            </p>
          </div>
        </section>

        {/* Magnetic Island */}
        <section aria-labelledby="magnetic-island">
          <h2 id="magnetic-island" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Ship className="w-6 h-6 text-primary" aria-hidden="true" /> Magnetic Island
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Magnetic Island is not a single accessibility experience. Access varies across ferry
              boarding, the terminals at each end, island buses, taxis, beaches, walking tracks and
              individual attractions, so plan it as a sequence of separate components.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Check the ferry operator's accessibility and boarding information directly</li>
              <li>Confirm island transport arrangements before you arrive</li>
              <li>Check each attraction, beach or venue separately</li>
              <li>
                The Forts Walk is a walking track and may not suit visitors with significant mobility
                limitations
              </li>
            </ul>
            <p>
              See{" "}
              <Link to="/guides/magnetic-island-ferry" className="text-primary underline underline-offset-2 font-medium">
                Magnetic Island Ferry
              </Link>
              ,{" "}
              <Link to="/guides/magnetic-island-day-trip" className="text-primary underline underline-offset-2">
                Magnetic Island Day Trip
              </Link>{" "}
              and{" "}
              <Link to="/guides/forts-walk-magnetic-island" className="text-primary underline underline-offset-2">
                the Forts Walk
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Beaches */}
        <section aria-labelledby="beaches">
          <h2 id="beaches" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Waves className="w-6 h-6 text-primary" aria-hidden="true" /> Beaches
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Beachfront access and actual water access are two different things. A sealed path,
              parking and nearby facilities can make a beachfront easy to reach while the beach itself
              remains difficult, because sand is a major mobility barrier and an accessible path does
              not mean accessible swimming. Facilities also differ by location.
            </p>
            <p>
              Seasonal marine stinger risk affects where and how anyone swims here, which matters even
              more if getting in and out of the water takes longer. Read{" "}
              <Link to="/beaches" className="text-primary underline underline-offset-2 font-medium">
                Townsville Beaches
              </Link>
              ,{" "}
              <Link to="/the-strand" className="text-primary underline underline-offset-2">
                The Strand
              </Link>{" "}
              and{" "}
              <Link to="/guides/stinger-safety" className="text-primary underline underline-offset-2">
                Stinger Safety
              </Link>{" "}
              before planning a swim.
            </p>
          </div>
        </section>

        {/* Nature */}
        <section aria-labelledby="nature">
          <h2 id="nature" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <TreePine className="w-6 h-6 text-primary" aria-hidden="true" /> Nature and Regional Trips
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Places such as Pallarenda, Paluma and Little Crystal Creek are not off the table, but
              they need more individual planning. They can involve uneven ground, longer distances,
              steps, remote or limited facilities, and access that changes with weather or maintenance.
            </p>
            <p>
              Check current conditions before committing to a long drive, and be prepared to shorten or
              change the plan on arrival. Start with{" "}
              <Link to="/nature" className="text-primary underline underline-offset-2 font-medium">
                Nature
              </Link>
              ,{" "}
              <Link to="/pallarenda-beach" className="text-primary underline underline-offset-2">
                Pallarenda
              </Link>
              ,{" "}
              <Link to="/guides/paluma-day-trip" className="text-primary underline underline-offset-2">
                Paluma Day Trip
              </Link>{" "}
              and the{" "}
              <Link to="/little-crystal-creek-townsville" className="text-primary underline underline-offset-2">
                Little Crystal Creek status
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Heat */}
        <section aria-labelledby="heat">
          <h2 id="heat" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Sun className="w-6 h-6 text-primary" aria-hidden="true" /> Heat and Accessibility
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Heat is one of the most underestimated planning factors in Townsville, and it has a
              bigger impact on visitors who move more slowly, need more rest stops, rely on mobility
              aids, or cannot easily change plans once they are committed to a route.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Plan outdoor visits early in the morning or late in the afternoon</li>
              <li>Keep routes shorter and build in rest points before you need them</li>
              <li>Stay near shade or air-conditioning through the middle of the day</li>
              <li>Minimise unnecessary transfers between attractions</li>
              <li>Carry water and plan where the next facilities are</li>
            </ul>
            <p>
              This is general visitor planning advice rather than medical advice. The full hot-weather
              playbook is in{" "}
              <Link to="/guides/beat-the-heat" className="text-primary underline underline-offset-2 font-medium">
                Beat the Heat
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Rain */}
        <section aria-labelledby="rain">
          <h2 id="rain" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Umbrella className="w-6 h-6 text-primary" aria-hidden="true" /> Rain and Wet Weather
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Wet surfaces change mobility conditions. Outdoor ramps, boardwalks and paved paths can
              become less comfortable or less predictable, and heavy rain can affect regional access,
              road conditions and facility opening.
            </p>
            <p>
              On wet days, indoor alternatives are often the easier choice — see{" "}
              <Link to="/guides/rainy-day-activities" className="text-primary underline underline-offset-2 font-medium">
                Rainy Day Activities
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Toilets and facilities */}
        <section aria-labelledby="facilities">
          <h2 id="facilities" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Bath className="w-6 h-6 text-primary" aria-hidden="true" /> Accessible Toilets and
            Facilities
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Facility availability varies by attraction, and not every public toilet has identical
              accessibility features. Temporary closures for cleaning, maintenance or events also
              happen, particularly around the foreshore and event precincts.
            </p>
            <p>We deliberately do not publish a citywide accessible-toilet inventory, because that kind of list goes out of date quickly. Instead, check:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Venue or Townsville City Council facility information for the specific location</li>
              <li>Current on-site signage when you arrive</li>
              <li>Official visitor information for the precinct you are visiting</li>
            </ul>
          </div>
        </section>

        {/* Parking */}
        <section aria-labelledby="parking">
          <h2 id="parking" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <ParkingCircle className="w-6 h-6 text-primary" aria-hidden="true" /> Parking
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Accessible parking arrangements vary by location, spaces can be limited, and event-day
              arrangements often differ from a normal day. Some attractions rely on general parking plus
              a short access route rather than dedicated bays close to the entrance.
            </p>
            <p>
              If parking is critical to your visit, check current venue or Council information before
              travelling, and have a fallback option in mind for busy periods such as sunset at Castle
              Hill or a weekend on The Strand.
            </p>
          </div>
        </section>

        {/* Events */}
        <section aria-labelledby="events">
          <h2 id="events" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <CalendarDays className="w-6 h-6 text-primary" aria-hidden="true" /> Events and Stadium
            Visits
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Accessibility arrangements for major events may cover seating, parking, entry points and
              transport, but these are set by the venue or event organiser and change between events.
              Confirm them directly rather than relying on general descriptions.
            </p>
            <p>
              See{" "}
              <Link to="/events" className="text-primary underline underline-offset-2 font-medium">
                What&apos;s On in Townsville
              </Link>{" "}
              and the{" "}
              <Link to="/cowboys-stadium-guide" className="text-primary underline underline-offset-2">
                Cowboys Stadium Guide
              </Link>{" "}
              for general event-day planning.
            </p>
          </div>
        </section>

        {/* Mobility aid */}
        <section aria-labelledby="mobility-aid">
          <h2 id="mobility-aid" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Accessibility className="w-6 h-6 text-primary" aria-hidden="true" /> Travelling With a
            Mobility Aid
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
            <li>Confirm airline and ferry rules before travel — not all operators can carry every mobility device.</li>
            <li>Check accommodation storage space and charging arrangements if your device needs power.</li>
            <li>Plan taxi or rideshare suitability in advance, especially for larger devices.</li>
            <li>Consider path surfaces: sealed promenade, boardwalk, gravel, grass and sand all behave differently.</li>
            <li>Allow extra time for transfers, boarding and getting between attractions.</li>
            <li>Carry any repair essentials — options for on-the-spot repairs are limited while travelling.</li>
          </ul>
        </section>

        {/* Wheelchair users */}
        <section aria-labelledby="wheelchair">
          <h2 id="wheelchair" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Accessibility className="w-6 h-6 text-primary" aria-hidden="true" /> Wheelchair Users
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Rather than relying on a general accessibility label, ask each venue the same set of
            questions:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
            <li>Is there step-free access from the street and the car park?</li>
            <li>What are the doorway and entry widths?</li>
            <li>How is the accessible bathroom laid out, and is it currently available?</li>
            <li>Are ramps and lifts available, and are they in service?</li>
            <li>What are the boarding arrangements for the transport you will use?</li>
            <li>What are the path surfaces on site?</li>
            <li>How steep are the gradients on the approach and inside?</li>
            <li>Where is accessible parking, and how far is it from the entrance?</li>
          </ul>
        </section>

        {/* Older visitors */}
        <section aria-labelledby="older-visitors">
          <h2 id="older-visitors" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Users className="w-6 h-6 text-primary" aria-hidden="true" /> Older Visitors and Reduced
            Stamina
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
            <li>Plan shorter attraction visits rather than one long day out</li>
            <li>Build in shaded rest stops, particularly along the foreshore</li>
            <li>Stay centrally to cut down transfers</li>
            <li>Use vehicle-based sightseeing where it makes a place achievable, such as the Castle Hill lookout</li>
            <li>Avoid the middle of the day in the hotter months</li>
            <li>Group attractions that sit close together instead of crossing the city twice</li>
          </ul>
        </section>

        {/* Kids and carers */}
        <section aria-labelledby="kids-carers">
          <h2 id="kids-carers" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Baby className="w-6 h-6 text-primary" aria-hidden="true" /> Accessibility With Kids and
            Carers
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Visitors travelling with children, carers or companions usually get on better at places
            that offer toilets, shade, food nearby, shorter route options and a flexible visit length —
            which is why The Strand, Jezzine Barracks and Riverway come up repeatedly on this page. For
            family-specific planning, see{" "}
            <Link to="/townsville-with-kids" className="text-primary underline underline-offset-2 font-medium">
              Townsville with Kids
            </Link>
            .
          </p>
        </section>

        {/* Checklist */}
        <section aria-labelledby="checklist">
          <h2 id="checklist" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <ClipboardCheck className="w-6 h-6 text-primary" aria-hidden="true" /> What to Check Before
            You Go
          </h2>
          <Card className="bg-muted/40">
            <CardContent className="p-5">
              <ul className="space-y-3 text-sm text-muted-foreground">
                {CHECKLIST.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ClipboardCheck className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Current information */}
        <section aria-labelledby="current-info">
          <h2 id="current-info" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Info className="w-6 h-6 text-primary" aria-hidden="true" /> Current Information Matters
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Accessibility details change with maintenance, construction, event setup, temporary closures
            and transport changes. Where a specific feature is essential, contact the venue or operator
            directly — it is the only reliable way to be sure on the day.
          </p>
          <ul className="space-y-3">
            {STATUS_CHECKS.map((s) => (
              <li key={s.url} className="text-sm">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-1.5 text-primary underline underline-offset-2 font-medium"
                >
                  {s.name}
                  <ExternalLink className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                </a>
                <span className="block text-muted-foreground">{s.text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Council, emergency and visitor numbers are listed in{" "}
            <Link to="/useful-contacts" className="text-primary underline underline-offset-2">
              Useful Contacts
            </Link>
            .
          </p>
        </section>

        {/* Mistakes */}
        <section aria-labelledby="mistakes">
          <h2 id="mistakes" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-primary" aria-hidden="true" /> Common
            Accessibility-Planning Mistakes
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
            {MISTAKES.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </section>

        {/* Pathways */}
        <section aria-labelledby="pathways">
          <h2 id="pathways" className="text-2xl md:text-3xl font-bold mb-5">
            Plan by Accessibility Need
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PATHWAYS.map((p) => (
              <Link
                key={p.to + p.label}
                to={p.to}
                className="block bg-card rounded-xl p-4 border hover:border-primary hover:shadow-md transition"
              >
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">{p.label}</p>
                <p className="font-semibold text-foreground flex items-center gap-1.5">
                  {p.name}
                  <ArrowRight className="w-4 h-4 text-primary" aria-hidden="true" />
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq">
          <h2 id="faq" className="text-2xl md:text-3xl font-bold mb-5">
            Accessible Townsville FAQ
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Related */}
        <section aria-labelledby="related">
          <h2 id="related" className="text-2xl md:text-3xl font-bold mb-5">
            Related Guides
          </h2>
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
};

export default AccessibleTownsville;
