import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Ship,
  Car,
  Bus,
  MapPin,
  Mountain,
  Route,
  Baby,
  Accessibility,
  Dog,
  Waves,
  Sun,
  Backpack,
  Wallet,
  AlertTriangle,
  Clock,
  Info,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

const SITE = "https://www.townsvilleguide.com.au";
const PAGE_PATH = "/guides/magnetic-island-day-trip";
const PAGE_URL = `${SITE}${PAGE_PATH}`;
const PAGE_TITLE = "Magnetic Island Day Trip from Townsville: Complete Guide";
const PAGE_DESCRIPTION =
  "Plan a Magnetic Island day trip from Townsville, including ferries, island buses, taking a car, beaches, Forts Walk and a realistic one-day itinerary.";
const LAST_UPDATED = "5 August 2026";

const SEALINK = "https://www.sealinkqld.com.au/magnetic-island-ferry";
const TRANSLINK = "https://translink.com.au/";
const QLD_PARKS = "https://parks.desi.qld.gov.au/parks/magnetic-island";
const BEACHSAFE = "https://beachsafe.org.au/";
const BOM = "http://www.bom.gov.au/qld/";

const FAQS = [
  {
    q: "Is one day enough for Magnetic Island?",
    a: "One full day is enough for a useful first visit covering two or three main areas. It is not enough to see every bay, walking track and wildlife spot. An overnight stay suits visitors who want several beaches, longer walks or a slower pace.",
  },
  {
    q: "Do you need a car on Magnetic Island?",
    a: "No. Foot passengers can use island buses, taxis or tours, and many visitors complete a day trip without a vehicle. Taking a car adds flexibility and suits families carrying equipment, but it involves vehicle ferry costs and may need to be booked in advance.",
  },
  {
    q: "How long is the passenger ferry crossing?",
    a: "The passenger ferry crossing between Townsville and Nelly Bay is generally around 20 minutes. Check the current operator information before travelling, as services and timings can change.",
  },
  {
    q: "Can you visit Magnetic Island as a foot passenger?",
    a: "Yes. Passenger ferries depart from Breakwater Terminal in Townsville, paid parking is available nearby, and island buses, taxis and tours connect the main bays and villages. Check current routes, timetables and return options before you leave Townsville.",
  },
  {
    q: "Is Forts Walk suitable for everyone?",
    a: "No. The route is exposed, includes uphill sections and can become very hot. It is not suitable for all mobility levels and may not suit younger children. Check current Queensland Parks track information, carry water and allow enough time.",
  },
  {
    q: "Can you swim at Magnetic Island?",
    a: "There are swimming beaches, but conditions vary by bay, weather and season, and marine stingers may affect swimming. Check current signs, warnings and patrol information before entering the water, and read our stinger safety guide during stinger season.",
  },
  {
    q: "What happens if you miss the return ferry?",
    a: "You may need to wait for a later service if one is running, or arrange island accommodation. Identify your intended return ferry before travelling, allow extra time to reach the terminal, and avoid planning around the final possible departure.",
  },
];

const RELATED = [
  { name: "First Time in Townsville", to: "/first-time-in-townsville" },
  { name: "Townsville in One Day", to: "/townsville-in-one-day" },
  { name: "Townsville Without a Car", to: "/townsville-without-a-car" },
  { name: "Townsville with Kids", to: "/townsville-with-kids" },
  { name: "Stinger Safety", to: "/guides/stinger-safety" },
  { name: "Beat the Heat", to: "/guides/beat-the-heat" },
  { name: "Rainy Day Activities", to: "/guides/rainy-day-activities" },
  { name: "Accessible Townsville", to: "/accessible-townsville" },
  { name: "Dog-Friendly Townsville", to: "/dog-friendly" },
  { name: "The Strand", to: "/the-strand" },
  { name: "Townsville Beaches", to: "/beaches" },
  { name: "Free Things to Do", to: "/guides/free-things" },
];

const MagneticIslandDayTrip = () => {
  return (
    <>
      <SEOHead
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        canonical={PAGE_URL}
        ogType="article"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Magnetic Island Day Trip from Townsville",
            description: PAGE_DESCRIPTION,
            mainEntityOfPage: PAGE_URL,
            author: { "@type": "Person", name: "Duncan Ross" },
            publisher: {
              "@type": "Organization",
              name: "Townsville Guide",
              url: SITE,
            },
            dateModified: "2026-08-05",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE },
              {
                "@type": "ListItem",
                position: 2,
                name: "Things to Do",
                item: `${SITE}/things-to-do`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Magnetic Island Day Trip from Townsville",
                item: PAGE_URL,
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

      <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
        <div className="space-y-10">
          {/* Hero */}
          <header className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Magnetic Island Day Trip from Townsville
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Magnetic Island is one of the best-known day trips from Townsville, combining
              beaches, wildlife, walking tracks and relaxed island villages. One full day is
              enough for a useful first visit, provided you choose a realistic route and
              organise your ferry and island transport in advance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You do not necessarily need to take a car, but your transport choice will
              determine how much of the island you can comfortably see.
            </p>
            <p className="text-sm text-muted-foreground">Updated {LAST_UPDATED}</p>
            <img
              src="/magnetic-island-guide.webp"
              alt="Coastal view of Magnetic Island with a sandy bay, headland and clear water"
              className="rounded-xl shadow-lg w-full h-[280px] md:h-[440px] object-cover"
              width={1600}
              height={900}
              loading="eager"
              decoding="async"
            />
          </header>

          {/* Current information notice */}
          <Alert>
            <Info className="h-4 w-4" aria-hidden="true" />
            <AlertTitle>Check Current Ferry and Island Information</AlertTitle>
            <AlertDescription>
              <p className="mb-2">
                Ferry fares, timetables, terminal parking, island buses, road access and
                walking-track conditions can change. Check the passenger ferry, vehicle ferry,
                Translink and Queensland Parks information before travelling.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <a
                    href={SEALINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    SeaLink Queensland — Magnetic Island passenger ferry
                  </a>
                </li>
                <li>
                  <a
                    href={TRANSLINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Translink — bus services and timetables
                  </a>
                </li>
                <li>
                  <a
                    href={QLD_PARKS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Queensland Parks — Magnetic Island National Park
                  </a>
                </li>
              </ul>
            </AlertDescription>
          </Alert>

          <GuideQuickFacts />

          {/* Worth visiting */}
          <section className="space-y-4" aria-labelledby="worth-visiting">
            <h2
              id="worth-visiting"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
              Is Magnetic Island Worth Visiting?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Magnetic Island suits visitors who are interested in beaches and bays, wildlife,
              walking, relaxed coastal villages, scenic views, or simply a full-day escape from
              Townsville. It is a short crossing from the city, which makes it one of the
              easiest day trips to organise while staying on the mainland.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A day trip provides a useful introduction. An overnight stay gives more
              flexibility, allows a slower pace and removes the pressure of planning everything
              around the return ferry. If Magnetic Island is the main reason for your visit, it
              is worth considering at least one night on the island.
            </p>
          </section>

          {/* One day enough */}
          <section className="space-y-4" aria-labelledby="one-day">
            <h2
              id="one-day"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
              Is One Day Enough?
            </h2>
            <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
              <li>One full day is generally enough for two or three main areas.</li>
              <li>
                Trying to see every bay and walking track in a day usually results in a rushed
                trip spent mostly in transit.
              </li>
              <li>
                A day trip works best when you travel on an early practical ferry and plan the
                return before you leave Townsville.
              </li>
              <li>
                An overnight stay suits visitors wanting several beaches, longer walks, evening
                dining or a slower pace.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              If you only have one day in Townsville overall, compare this trip with a mainland
              plan in our{" "}
              <Link to="/townsville-in-one-day" className="text-primary hover:underline">
                Townsville in One Day
              </Link>{" "}
              guide, or start with{" "}
              <Link to="/first-time-in-townsville" className="text-primary hover:underline">
                First Time in Townsville
              </Link>
              .
            </p>
          </section>

          {/* Foot passenger */}
          <section className="space-y-4" aria-labelledby="foot-passenger">
            <h2
              id="foot-passenger"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Ship className="w-6 h-6 text-primary" aria-hidden="true" />
              Travelling as a Foot Passenger
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Passenger ferries to Magnetic Island depart from Breakwater Terminal in
              Townsville and arrive at Nelly Bay. The crossing is relatively short, which makes
              a day trip practical, but the planning around it matters more than the crossing
              itself.
            </p>
            <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
              <li>Arrive with enough time to park, collect tickets and board without rushing.</li>
              <li>
                Check luggage, bicycle, pram and accessibility arrangements directly with the
                operator, as these vary by service.
              </li>
              <li>Paid parking is available near the terminal; check the current rate.</li>
              <li>
                Check the latest timetable and your return options before leaving Townsville.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Current fares, timetables, boarding requirements and parking details are on the{" "}
              <a
                href={SEALINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                SeaLink Magnetic Island ferry page
              </a>
              . If you are travelling in from the airport first, see our{" "}
              <Link to="/townsville-airport" className="text-primary hover:underline">
                Townsville Airport
              </Link>{" "}
              guide.
            </p>
          </section>

          {/* Taking a car */}
          <section className="space-y-4" aria-labelledby="taking-a-car">
            <h2
              id="taking-a-car"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Car className="w-6 h-6 text-primary" aria-hidden="true" />
              Should You Take a Car to Magnetic Island?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Vehicles travel on a separate vehicle ferry rather than the passenger service.
              Confirm the current operator, terminal and booking requirements before planning a
              trip with a car.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Advantages</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                    <li>Greater flexibility across the day</li>
                    <li>Easier movement between bays</li>
                    <li>Useful for families carrying beach or picnic equipment</li>
                    <li>Less reliance on bus timing and waiting</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Disadvantages</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                    <li>Vehicle ferry costs are significantly higher</li>
                    <li>Advance booking may be necessary</li>
                    <li>Availability can be limited during busy periods</li>
                    <li>Parking still needs to be considered on the island</li>
                    <li>A vehicle is not necessary for every day trip</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Neither option is universally better. A car suits families, larger groups and
              visitors planning to move between several bays; foot-passenger travel suits
              shorter, simpler days built around two or three stops.
            </p>
          </section>

          {/* Without a car */}
          <section className="space-y-4" aria-labelledby="without-car">
            <h2
              id="without-car"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Bus className="w-6 h-6 text-primary" aria-hidden="true" />
              Getting Around Magnetic Island Without a Car
            </h2>

            <h3 className="text-xl font-semibold text-foreground">Island buses</h3>
            <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
              <li>Buses connect the main populated bays and villages.</li>
              <li>Check current routes, timetables and ticketing before travelling.</li>
              <li>Include waiting and transfer time in any day-trip plan.</li>
              <li>Not every attraction or track start is directly beside a bus stop.</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground">Taxis and tours</h3>
            <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
              <li>Useful for selected point-to-point journeys.</li>
              <li>Availability can vary, particularly outside peak periods.</li>
              <li>Pre-booking may be worthwhile.</li>
              <li>
                Do not rely on immediate availability for your last connection back to the
                terminal.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground">Walking</h3>
            <p className="text-muted-foreground leading-relaxed">
              Walking between nearby attractions can work well, particularly around a single
              village or bay. The island as a whole is too large and too exposed for most
              visitors to explore entirely on foot in one day.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For car-free planning across the wider region, see{" "}
              <Link to="/townsville-without-a-car" className="text-primary hover:underline">
                Townsville Without a Car
              </Link>
              .
            </p>
          </section>

          {/* Main places */}
          <section className="space-y-4" aria-labelledby="main-places">
            <h2
              id="main-places"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
              Main Places to Visit
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">Nelly Bay</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The main passenger-ferry arrival area, with transport, shops and services
                  nearby. It is a useful starting and finishing point rather than necessarily
                  the main sightseeing destination.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  Arcadia and Geoffrey Bay
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Beaches, coastal views and a small village centre. Rock wallabies are often
                  seen in the area around the old jetty and rocky foreshore. Do not approach,
                  handle or chase wildlife, and do not offer unsuitable food — bread and
                  avocado in particular can harm them. Observing from a distance is the safest
                  option for both visitors and animals.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">Alma Bay</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A compact bay popular with families and beach visitors, with parkland and
                  shade nearby. Check current conditions, signage and patrol information before
                  swimming rather than assuming the bay is suitable on the day.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">Horseshoe Bay</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The island's largest bay, with dining options and beach activities. It works
                  well as a longer lunch or afternoon stop. Swimming and marine stinger
                  conditions must be checked on the day, including whether any swimming
                  enclosure is currently in place.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">Picnic Bay</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A quieter village with waterfront views and a slower atmosphere. Whether it
                  fits depends on your itinerary and transport — avoid adding it automatically
                  to an already busy plan focused on the northern bays.
                </p>
              </div>
            </div>
          </section>

          {/* Forts Walk */}
          <section className="space-y-4" aria-labelledby="forts-walk">
            <h2
              id="forts-walk"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Mountain className="w-6 h-6 text-primary" aria-hidden="true" />
              Forts Walk
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The Forts Walk is one of Magnetic Island's best-known walks, combining wartime
              military history, elevated coastal views and the possibility of wildlife
              sightings along the way. It is the single activity most day visitors ask about.
            </p>
            <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
              <li>The route is exposed in places and can become very hot.</li>
              <li>Carry water, wear suitable footwear and allow more time than you expect.</li>
              <li>
                Koala sightings are possible but never guaranteed — look high into the forks of
                trees, and move quietly.
              </li>
              <li>
                Check current track conditions, closures and park alerts before setting out.
              </li>
              <li>
                Confirm current distance, duration and grading with Queensland Parks rather than
                relying on informal estimates.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Current track and alert information is published by{" "}
              <a
                href={QLD_PARKS}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Queensland Parks — Magnetic Island National Park
              </a>
              . In warmer months, read{" "}
              <Link to="/guides/beat-the-heat" className="text-primary hover:underline">
                Beat the Heat
              </Link>{" "}
              before planning a midday walk.
            </p>
          </section>

          {/* Itinerary */}
          <section className="space-y-4" aria-labelledby="itinerary">
            <h2
              id="itinerary"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Route className="w-6 h-6 text-primary" aria-hidden="true" />
              A Realistic Magnetic Island Day Trip
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Rather than fixed clock times, plan the day in stages and fit them around the
              current ferry timetable you have checked.
            </p>

            <div className="space-y-3">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <p className="font-semibold text-foreground mb-1">
                    1. Early ferry from Townsville
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Travel early enough to allow a full day on the island, and choose a
                    departure that still works with the return service you intend to catch.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <p className="font-semibold text-foreground mb-1">2. Morning — choose one</p>
                  <p className="text-sm text-muted-foreground">
                    Either the Forts Walk while conditions are cooler, or a relaxed beach and
                    village start for families and visitors avoiding a steep, exposed walk.
                    Attempting both usually costs the rest of the day.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <p className="font-semibold text-foreground mb-1">3. Lunch</p>
                  <p className="text-sm text-muted-foreground">
                    Pick one village — Horseshoe Bay, Arcadia or Nelly Bay — based on where your
                    morning finished and how you are travelling.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <p className="font-semibold text-foreground mb-1">4. Afternoon</p>
                  <p className="text-sm text-muted-foreground">
                    Add one further bay or wildlife area that sits logically on your route.
                    Avoid travelling backward and forward across the island.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <p className="font-semibold text-foreground mb-1">5. Return to Nelly Bay</p>
                  <p className="text-sm text-muted-foreground">
                    Allow enough time for the bus, taxi, parking or unexpected delays before
                    your chosen return ferry.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" aria-hidden="true" />
              <AlertTitle>Leave a buffer</AlertTitle>
              <AlertDescription>
                Do not plan around the final possible ferry unless you are prepared for the
                consequences of missing it.
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Foot-passenger version</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                    <li>Choose stops that sit along one logical bus route</li>
                    <li>Allow waiting and transfer time between stops</li>
                    <li>Limit the day to two or three areas</li>
                    <li>Return to Nelly Bay earlier than feels necessary</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Car version</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                    <li>Plan a logical loop rather than repeated backtracking</li>
                    <li>Accept that you will not cover every bay</li>
                    <li>Check parking and current road conditions</li>
                    <li>Allow time to return to the vehicle ferry terminal</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Children */}
          <section className="space-y-4" aria-labelledby="children">
            <h2
              id="children"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Baby className="w-6 h-6 text-primary" aria-hidden="true" />
              Magnetic Island With Children
            </h2>
            <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
              <li>Beach stops and shorter walks work better than long, exposed routes.</li>
              <li>Heat is the main limiting factor for most families.</li>
              <li>
                Factor in ferry and bus waiting time, which can be a large part of a young
                child's day.
              </li>
              <li>Plan toilet and food stops around the villages rather than between them.</li>
              <li>Carry water, hats, sunscreen and spare clothing.</li>
              <li>Younger children may not suit the full Forts Walk.</li>
              <li>One or two main stops is often enough for a good day.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              More family planning is in our{" "}
              <Link to="/townsville-with-kids" className="text-primary hover:underline">
                Townsville with Kids
              </Link>{" "}
              guide.
            </p>
          </section>

          {/* Accessibility */}
          <section className="space-y-4" aria-labelledby="accessibility">
            <h2
              id="accessibility"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Accessibility className="w-6 h-6 text-primary" aria-hidden="true" />
              Accessibility
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Accessibility on Magnetic Island varies considerably, and a day trip involves
              several separate providers and locations. Check each part of your planned route
              rather than assuming the trip works end to end.
            </p>
            <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
              <li>Passenger and vehicle ferries have different boarding arrangements.</li>
              <li>Island buses, taxis and tours have different capabilities.</li>
              <li>
                Some village and foreshore areas are considerably easier than national park
                walking tracks.
              </li>
              <li>Beaches, paths, kerbs and toilet facilities vary by location.</li>
              <li>The Forts Walk is not suitable for all mobility levels.</li>
              <li>Contact transport providers in advance to confirm arrangements.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              See also{" "}
              <Link to="/accessible-townsville" className="text-primary hover:underline">
                Accessible Townsville
              </Link>
              .
            </p>
          </section>

          {/* Dogs */}
          <section className="space-y-4" aria-labelledby="dogs">
            <h2
              id="dogs"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Dog className="w-6 h-6 text-primary" aria-hidden="true" />
              Taking a Dog to Magnetic Island
            </h2>
            <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
              <li>Ferry rules for animals vary by operator and service type.</li>
              <li>Dogs are restricted in national park areas, including walking tracks.</li>
              <li>Beach and public-space rules vary between locations.</li>
              <li>
                Check current operator, Council and Queensland Parks information before
                travelling.
              </li>
              <li>Do not assume a dog can accompany every part of your itinerary.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              For mainland options, see{" "}
              <Link to="/dog-friendly" className="text-primary hover:underline">
                Dog-Friendly Townsville
              </Link>
              .
            </p>
          </section>

          {/* Swimming */}
          <section className="space-y-4" aria-labelledby="swimming">
            <h2
              id="swimming"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Waves className="w-6 h-6 text-primary" aria-hidden="true" />
              Swimming and Snorkelling
            </h2>
            <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
              <li>Conditions vary by bay, weather and season.</li>
              <li>Check signs, warnings and patrol information before entering the water.</li>
              <li>Marine stingers may affect swimming, particularly in the warmer months.</li>
              <li>Snorkelling visibility and safety vary with tide, wind and season.</li>
              <li>
                Do not assume a swimming enclosure is in place at any bay without checking on
                the day.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Read our{" "}
              <Link to="/guides/stinger-safety" className="text-primary hover:underline">
                Stinger Safety
              </Link>{" "}
              guide before swimming, and check official beach information at{" "}
              <a
                href={BEACHSAFE}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Beachsafe
              </a>
              . Mainland swimming options are covered in our{" "}
              <Link to="/beaches" className="text-primary hover:underline">
                Townsville beaches
              </Link>{" "}
              guide and at{" "}
              <Link to="/the-strand" className="text-primary hover:underline">
                The Strand
              </Link>
              .
            </p>
          </section>

          {/* Heat and weather */}
          <section className="space-y-4" aria-labelledby="weather">
            <h2
              id="weather"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Sun className="w-6 h-6 text-primary" aria-hidden="true" />
              Heat and Weather
            </h2>
            <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
              <li>Complete exposed walks earlier in the day.</li>
              <li>Carry more water than you think you need.</li>
              <li>Sun protection matters, including on the ferry deck.</li>
              <li>
                Wet weather can affect roads, walking tracks, ferry operations and visibility.
              </li>
              <li>
                Check severe-weather warnings at the{" "}
                <a
                  href={BOM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Bureau of Meteorology
                </a>{" "}
                before travelling.
              </li>
              <li>Have a lower-effort alternative ready if conditions change.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              See{" "}
              <Link to="/guides/beat-the-heat" className="text-primary hover:underline">
                Beat the Heat
              </Link>{" "}
              and{" "}
              <Link to="/guides/rainy-day-activities" className="text-primary hover:underline">
                Rainy Day Activities
              </Link>{" "}
              for alternatives.
            </p>
          </section>

          {/* Facilities and packing */}
          <section className="space-y-4" aria-labelledby="facilities">
            <h2
              id="facilities"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Backpack className="w-6 h-6 text-primary" aria-hidden="true" />
              Facilities and What to Bring
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Facilities such as toilets, food and shops are available in several island
              villages, but they are not continuous across every beach, headland or walking
              area. Plan longer walks and quieter bays on the assumption that facilities will
              not be nearby. Mobile coverage may vary in more remote or elevated areas.
            </p>
            <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
              <li>Water</li>
              <li>Hat and sunscreen</li>
              <li>Suitable footwear for any walking</li>
              <li>Swimwear and a towel where relevant</li>
              <li>A charged phone</li>
              <li>Ferry booking or ticket details</li>
              <li>Current timetable information</li>
              <li>Essential medication</li>
              <li>Snacks when planning walks or quieter bays</li>
            </ul>
          </section>

          {/* Costs */}
          <section className="space-y-4" aria-labelledby="costs">
            <h2
              id="costs"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Wallet className="w-6 h-6 text-primary" aria-hidden="true" />
              How Much Does a Day Trip Cost?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The total depends on the passenger or vehicle ferry, terminal parking, island bus,
              taxi, tour or vehicle costs, food, equipment hire and any paid activities. A foot
              passenger keeping to beaches and walks will spend far less than a family taking a
              car across.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Check current prices directly before booking, particularly for vehicle ferries and
              island transport. Low-cost mainland alternatives are listed in{" "}
              <Link to="/guides/free-things" className="text-primary hover:underline">
                Free Things to Do
              </Link>
              .
            </p>
          </section>

          {/* What to leave */}
          <section className="space-y-4" aria-labelledby="leave">
            <h2
              id="leave"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <AlertTriangle className="w-6 h-6 text-primary" aria-hidden="true" />
              What Should You Leave for Another Visit?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A single day should not normally attempt:
            </p>
            <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
              <li>Every major bay</li>
              <li>The Forts Walk plus several long beach stops</li>
              <li>Repeated travel between opposite ends of the island</li>
              <li>Multiple long walks</li>
              <li>A rushed final-ferry connection</li>
              <li>Extensive snorkelling, hiking and wildlife stops in the same day</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Two or three main experiences are enough for a good first visit.
            </p>
          </section>

          {/* Return planning */}
          <section className="space-y-4" aria-labelledby="return">
            <h2
              id="return"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Ship className="w-6 h-6 text-primary" aria-hidden="true" />
              Plan Your Return Before You Leave Townsville
            </h2>
            <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
              <li>Identify your intended return ferry before you travel.</li>
              <li>
                Check how long the island bus, taxi or vehicle journey back to the terminal may
                take from your furthest stop.
              </li>
              <li>Allow extra time for waiting, parking and queues.</li>
              <li>Know whether later services are available that day.</li>
              <li>Recheck service notices during the day, particularly in poor weather.</li>
              <li>Do not assume alternative transport will be immediately available.</li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="space-y-4" aria-labelledby="faq">
            <h2
              id="faq"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <HelpCircle className="w-6 h-6 text-primary" aria-hidden="true" />
              Magnetic Island Day Trip FAQs
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`} className="border-border/40">
                  <AccordionTrigger className="text-left text-base font-semibold hover:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Related guides */}
          <section className="space-y-4" aria-labelledby="related">
            <h2 id="related" className="text-2xl font-bold text-foreground">
              Continue Planning Your Visit
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

          <p className="text-sm text-muted-foreground leading-relaxed">
            This itinerary combines official transport information, current visitor guidance and
            practical Townsville-based planning. Local{" "}
            <Link to="/events" className="text-primary hover:underline">
              events
            </Link>{" "}
            and{" "}
            <Link to="/food" className="text-primary hover:underline">
              dining options
            </Link>{" "}
            may also affect how you plan the day.
          </p>
        </div>
      </div>
    </>
  );
};

export default MagneticIslandDayTrip;
