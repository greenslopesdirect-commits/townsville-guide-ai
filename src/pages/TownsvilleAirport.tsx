import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import FoundingPartnerCTA from "@/components/FoundingPartnerCTA";
import AirportTransferCard from "@/components/AirportTransferCard";
import LocalInsightCard from "@/components/LocalInsightCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Accessibility,
  AlertTriangle,
  Building2,
  Car,
  CloudSun,
  Coffee,
  MapPin,
  ParkingCircle,
  Plane,
  Ship,
  Sun,
  Trophy,
  TreePine,
  Users,
} from "lucide-react";

const SITE = "https://www.townsvilleguide.com.au";
const PATH = "/townsville-airport";

const TITLE = "Townsville Airport & Flights Guide | Getting to Townsville";
const DESCRIPTION =
  "Plan flights to Townsville and your arrival at Townsville Airport, including airlines, airport transport, car hire, parking, accommodation and onward travel.";

const AIRPORT_URL = "https://www.townsvilleairport.com.au/";

const AIRLINES = [
  {
    name: "Qantas / QantasLink",
    text: "Operates services linking Townsville with major Australian cities and regional Queensland.",
    url: "https://www.qantas.com/",
  },
  {
    name: "Virgin Australia",
    text: "Operates domestic services to Townsville from east-coast capital cities.",
    url: "https://www.virginaustralia.com/",
  },
  {
    name: "Jetstar",
    text: "Low-cost domestic services; routes and days of operation vary by season.",
    url: "https://www.jetstar.com/",
  },
  {
    name: "Rex Airlines",
    text: "Regional Queensland services connecting smaller centres with Townsville.",
    url: "https://www.rex.com.au/",
  },
];

const AREAS = [
  {
    name: "The Strand / North Ward",
    bestFor: "First visits, families, waterfront and leisure",
    to: "/the-strand",
  },
  {
    name: "Townsville CBD",
    bestFor: "Central access, museums, business and food",
    to: "/suburbs",
  },
  {
    name: "Palmer Street / South Townsville",
    bestFor: "Dining, the stadium and ferry convenience",
    to: "/accommodation",
  },
];

const MISTAKES = [
  "Relying on old airline route information instead of checking current schedules.",
  "Assuming every major Australian city has a direct flight to Townsville.",
  "Not planning onward transport from the airport before you arrive.",
  "Assuming there is always a direct public bus service from the airport.",
  "Booking airport-area accommodation for a leisure trip without considering location.",
  "Hiring a car unnecessarily for a short, central Strand or CBD stay.",
  "Not hiring a car when the trip involves several regional day trips.",
  "Relying on old parking prices instead of the current airport information.",
  "Not checking flight status before leaving for the airport.",
  "Underestimating demand around event weekends for flights and accommodation.",
  "Assuming flight arrivals and Magnetic Island ferry departures automatically line up.",
];

const PATHWAYS = [
  { label: "Flying to Townsville", name: "Current airline schedules", to: "/useful-contacts" },
  { label: "Airport transport", name: "Townsville Without a Car", to: "/townsville-without-a-car" },
  { label: "Where to stay", name: "Accommodation", to: "/accommodation" },
  { label: "First visit", name: "First Time in Townsville", to: "/first-time-in-townsville" },
  { label: "City orientation", name: "Suburbs & areas", to: "/suburbs" },
  { label: "Car hire", name: "Regional day trips", to: "/nature" },
  { label: "Magnetic Island", name: "Magnetic Island Ferry", to: "/guides/magnetic-island-ferry" },
  { label: "Event trip", name: "Cowboys Stadium Guide", to: "/cowboys-stadium-guide" },
  { label: "What's on", name: "Events", to: "/events" },
  { label: "Beaches", name: "Beaches guide", to: "/beaches" },
  { label: "Paluma", name: "Paluma Day Trip", to: "/guides/paluma-day-trip" },
  { label: "Hot weather", name: "Beat the Heat", to: "/guides/beat-the-heat" },
];

const RELATED = [
  { to: "/accommodation", name: "Accommodation in Townsville", text: "Where to stay, area by area, after you land." },
  { to: "/first-time-in-townsville", name: "First Time in Townsville", text: "What to prioritise on a first visit." },
  { to: "/townsville-without-a-car", name: "Townsville Without a Car", text: "Getting around without hiring a vehicle." },
  { to: "/suburbs", name: "Townsville Suburbs & Areas", text: "Where the main areas sit and what each suits." },
  { to: "/the-strand", name: "The Strand", text: "The waterfront precinct most visitors head to first." },
  { to: "/guides/magnetic-island-ferry", name: "Magnetic Island Ferry", text: "How the ferry works and where it leaves from." },
  { to: "/guides/magnetic-island-day-trip", name: "Magnetic Island Day Trip", text: "Planning a full island day from Townsville." },
  { to: "/things-to-do", name: "Things to Do in Townsville", text: "The main activity hub for planning your days." },
  { to: "/cowboys-stadium-guide", name: "Cowboys Stadium Guide", text: "Event-day planning at Queensland Country Bank Stadium." },
  { to: "/guides/paluma-day-trip", name: "Paluma Day Trip", text: "The rainforest day trip that really needs a car." },
  { to: "/guides/beat-the-heat", name: "Beat the Heat", text: "Planning around Townsville's tropical heat." },
  { to: "/useful-contacts", name: "Useful Contacts", text: "Live information, transport and emergency contacts." },
];

const faqs = [
  {
    q: "Does Townsville have an airport?",
    a: "Yes. Townsville Airport is the city's commercial airport and the main air gateway to Townsville and the surrounding North Queensland region.",
  },
  {
    q: "What is Townsville Airport's code?",
    a: "The airport code is TSV. You will see it used on booking sites, boarding passes and baggage tags.",
  },
  {
    q: "Which airlines fly to Townsville?",
    a: "Qantas and QantasLink, Virgin Australia, Jetstar and Rex Airlines operate services to Townsville. Routes and days of operation change, so check the airline or Townsville Airport for current schedules.",
  },
  {
    q: "Are there direct flights to Townsville?",
    a: "Direct services operate from several Australian cities, but not from everywhere. Some journeys require a connection, usually through a capital city. Check current routes before booking.",
  },
  {
    q: "How do you get from Townsville Airport to the city?",
    a: "Most visitors use a taxi, rideshare, a pre-booked transfer or a hire car. The airport sits close to the city, so central trips are short compared with capital-city airports.",
  },
  {
    q: "Is there public transport from Townsville Airport?",
    a: "Public transport to the airport is limited compared with larger cities, and there is no dedicated tourist airport train. Check Translink for current routes and stops rather than assuming a direct airport bus.",
  },
  {
    q: "Can you hire a car at Townsville Airport?",
    a: "Yes. Car hire operators are available at the airport. Book ahead in busy periods, and check current pick-up arrangements with your hire company.",
  },
  {
    q: "Is it worth staying near Townsville Airport?",
    a: "Airport and Garbutt accommodation mainly suits transit stays, very early flights or business trips. Most leisure visitors are better based around The Strand, the CBD or Palmer Street.",
  },
  {
    q: "How do you get from Townsville Airport to the Magnetic Island ferry?",
    a: "Travel from the airport to the ferry terminal by taxi, rideshare, transfer or hire car, then take the passenger ferry. Check ferry timetables separately, as they are not coordinated with flights.",
  },
  {
    q: "Is Townsville Airport close to The Strand?",
    a: "Yes. The Strand is a short drive from the airport, which is one reason many visitors head straight to the waterfront after landing.",
  },
  {
    q: "Where can I check current flight information?",
    a: "Check your airline's website or app for flight status, and Townsville Airport's official website for terminal, parking and airport service information.",
  },
  {
    q: "Do I need a car after flying to Townsville?",
    a: "Not for a short central stay around The Strand, the CBD or Palmer Street. A car becomes valuable if you plan Paluma, Pallarenda, the northern beaches, Riverway or regional day trips.",
  },
];

const TownsvilleAirport = () => (
  <>
    <SEOHead title={TITLE} description={DESCRIPTION} canonical={PATH} ogType="article" />
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: "Townsville Airport & Flights Guide",
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
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Townsville Airport & Flights Guide",
                  item: `${SITE}${PATH}`,
                },
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
        <Plane className="w-4 h-4" aria-hidden="true" />
        Air travel
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">Townsville Airport &amp; Flights Guide</h1>

      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Townsville Airport (TSV) is the main air gateway to Townsville and the surrounding North
        Queensland region. This guide covers both halves of the trip: planning flights to Townsville,
        and the practical airport experience once you land — or before you fly home.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Airline routes, schedules, parking and airport services change, so treat the{" "}
        <a href={AIRPORT_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          official Townsville Airport website
        </a>{" "}
        and your airline as the current source of truth.
      </p>

      <GuideQuickFacts className="mb-4" />

      <a
        href="https://www.google.com/maps/search/?api=1&query=Townsville+Airport+Garbutt+QLD"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mb-12"
      >
        <MapPin className="w-4 h-4" aria-hidden="true" />
        Get Directions
      </a>

      {/* Flying to Townsville */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Plane className="w-6 h-6 text-primary" aria-hidden="true" />
          <h2 className="text-2xl font-bold">Flying to Townsville</h2>
        </div>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>Townsville has its own commercial airport, so you do not need to fly into Cairns or Brisbane and drive.</li>
          <li>Direct routes vary by airline and by season — what was available last year may not be running now.</li>
          <li>Some journeys, particularly from smaller cities and Western Australia, require a connection.</li>
          <li>Always confirm current routes and schedules with the airline before booking other arrangements.</li>
        </ul>
      </section>

      {/* Airlines */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-6 h-6 text-primary" aria-hidden="true" />
          <h2 className="text-2xl font-bold">Airlines serving Townsville</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {AIRLINES.map((a) => (
            <div key={a.name} className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold text-foreground">{a.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{a.text}</p>
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline mt-2 inline-block"
              >
                Check current routes
              </a>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Frequencies, flight numbers and fares are not listed here on purpose — they change too often
          to be reliable. Check the airline directly.
        </p>
      </section>

      {/* Direct vs connecting */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Direct flights vs connecting flights</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground">Direct flights</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Simplest option where available: one boarding, one arrival, and easier planning for
              onward transport and accommodation check-in.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground">Connecting flights</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Often required depending on your departure city. Allow realistic connection time and
              remember that a late arrival changes what you can do on day one.
            </p>
          </div>
        </div>
      </section>

      {/* Airport overview */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Building2 className="w-6 h-6 text-primary" aria-hidden="true" />
          <h2 className="text-2xl font-bold">Townsville Airport overview</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Townsville Airport handles domestic passenger services for the city and region, and it sits
          close to the city rather than far out of town. It is a regional-scale airport: straightforward
          to navigate, with arrivals and departures handled in the same compact terminal area.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Because it is smaller than a capital-city airport, walking distances are short and orientation
          is easy — but you should not assume capital-city levels of retail, dining or late-night
          services. Check the{" "}
          <a href={AIRPORT_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            official airport website
          </a>{" "}
          for current terminal information.
        </p>
      </section>

      {/* Arriving */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
          <h2 className="text-2xl font-bold">Arriving at Townsville Airport</h2>
        </div>
        <ol className="list-decimal pl-5 space-y-2 text-muted-foreground mb-4">
          <li>Collect your baggage.</li>
          <li>Choose your onward transport — taxi, rideshare, pre-booked transfer or hire car.</li>
          <li>Travel to your accommodation and drop your bags.</li>
          <li>Start the visit, ideally with something close by.</li>
        </ol>
        <p className="text-muted-foreground leading-relaxed">
          If you have not decided where to stay yet, the{" "}
          <Link to="/accommodation" className="text-primary hover:underline">accommodation guide</Link> and{" "}
          <Link to="/suburbs" className="text-primary hover:underline">suburbs and areas guide</Link> explain
          how location shapes a trip. First-time visitors should read{" "}
          <Link to="/first-time-in-townsville" className="text-primary hover:underline">First Time in Townsville</Link>, and
          anyone not hiring a car should read{" "}
          <Link to="/townsville-without-a-car" className="text-primary hover:underline">Townsville Without a Car</Link>. A
          walk along{" "}
          <Link to="/the-strand" className="text-primary hover:underline">The Strand</Link> is the usual first
          outing; the{" "}
          <Link to="/things-to-do" className="text-primary hover:underline">things to do</Link> hub covers the rest.
        </p>
        <AirportTransferCard className="mt-6" />
      </section>

      {/* Getting from the airport */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Car className="w-6 h-6 text-primary" aria-hidden="true" />
          <h2 className="text-2xl font-bold">Getting from Townsville Airport</h2>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground">Taxi</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Taxis are one of the standard onward options from the terminal. Fares vary by distance,
              time of day and demand, so check with the driver or operator rather than relying on a
              quoted figure online.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground">Rideshare</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Rideshare services operate in Townsville. Follow the in-app pick-up instructions and the
              current airport signage, as designated pick-up arrangements can change.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground">Car hire</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Hire cars are available at the airport and make sense if you plan{" "}
              <Link to="/guides/paluma-day-trip" className="text-primary hover:underline">Paluma</Link>,{" "}
              <Link to="/pallarenda-beach" className="text-primary hover:underline">Pallarenda</Link>, the{" "}
              <Link to="/beaches" className="text-primary hover:underline">northern beaches</Link>,{" "}
              <Link to="/riverway" className="text-primary hover:underline">Riverway</Link>,{" "}
              <Link to="/billabong-sanctuary" className="text-primary hover:underline">Billabong Sanctuary</Link> or
              wider regional touring.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground">Public transport</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Public transport to and from the airport is limited compared with larger cities, and it is
              not a dedicated tourist service. Check{" "}
              <a href="https://translink.com.au/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Translink
              </a>{" "}
              for current routes and times, and see{" "}
              <Link to="/townsville-without-a-car" className="text-primary hover:underline">Townsville Without a Car</Link>{" "}
              for how the wider network works.
            </p>
          </div>
        </div>
      </section>

      {/* Getting to the airport */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Getting to Townsville Airport</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          For the return journey the same options apply in reverse: taxi, rideshare, a hire car being
          returned, a private drop-off, or driving and parking. Allow time for traffic, fuel stops and
          rental returns, especially on event weekends.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Check current airport access, drop-off and terminal information on the{" "}
          <a href={AIRPORT_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            official airport website
          </a>{" "}
          before you leave.
        </p>
      </section>

      {/* Departing */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Departing Townsville</h2>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>Check your flight status with the airline before leaving your accommodation.</li>
          <li>Allow time for check-in, baggage drop and screening — follow your airline's guidance.</li>
          <li>Confirm baggage rules and allowances with the airline, not third-party summaries.</li>
          <li>Allow for traffic, parking or returning a hire car.</li>
          <li>Check current terminal information if anything about your trip is time-critical.</li>
        </ul>
      </section>

      {/* Parking */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <ParkingCircle className="w-6 h-6 text-primary" aria-hidden="true" />
          <h2 className="text-2xl font-bold">Airport parking</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Parking is available at Townsville Airport, including options suited to short drop-offs and
          longer stays. Fees, zones and booking arrangements change, so we do not publish rates here —
          check the{" "}
          <a href={AIRPORT_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            official airport parking information
          </a>{" "}
          before you travel.
        </p>
      </section>

      {/* Car hire */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <TreePine className="w-6 h-6 text-primary" aria-hidden="true" />
          <h2 className="text-2xl font-bold">Car hire: do you actually need one?</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground">A car is especially useful for</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
              <li><Link to="/guides/paluma-day-trip" className="text-primary hover:underline">Paluma</Link> and the range</li>
              <li><Link to="/pallarenda-beach" className="text-primary hover:underline">Pallarenda</Link></li>
              <li>The <Link to="/beaches" className="text-primary hover:underline">northern beaches</Link></li>
              <li><Link to="/riverway" className="text-primary hover:underline">Riverway</Link> and the western suburbs</li>
              <li>Longer stays and regional day trips</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground">A car may not be necessary for</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
              <li>A short <Link to="/the-strand" className="text-primary hover:underline">Strand</Link> or North Ward stay</li>
              <li>A CBD stay</li>
              <li>A Palmer Street stay</li>
              <li>A standard ferry-based <Link to="/guides/magnetic-island-day-trip" className="text-primary hover:underline">Magnetic Island day trip</Link></li>
            </ul>
          </div>
        </div>
        <p className="text-muted-foreground mt-4">
          If you would rather skip the hire car entirely, read{" "}
          <Link to="/townsville-without-a-car" className="text-primary hover:underline">Townsville Without a Car</Link>.
        </p>
      </section>

      {/* Facilities */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Coffee className="w-6 h-6 text-primary" aria-hidden="true" />
          <h2 className="text-2xl font-bold">Airport facilities</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Townsville Airport covers the practical basics rather than a large retail precinct. Expect
          food and drink outlets, toilets, baggage services, car hire desks, Wi-Fi and accessibility
          services.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Individual operators, trading hours and lounge arrangements change, so check the{" "}
          <a href={AIRPORT_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            official airport website
          </a>{" "}
          if you are relying on something specific — particularly for very early or late flights.
        </p>
      </section>

      {/* Accessibility */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Accessibility className="w-6 h-6 text-primary" aria-hidden="true" />
          <h2 className="text-2xl font-bold">Accessibility</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          If you have mobility or assistance needs, check the airport's accessibility information, your
          airline's assistance requirements and booking deadlines, and current parking or drop-off
          arrangements before travelling. Airline assistance usually needs to be arranged in advance.
          Start with the{" "}
          <a href={AIRPORT_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            official airport website
          </a>{" "}
          and our{" "}
          <Link to="/accessible-townsville" className="text-primary hover:underline">accessible Townsville guide</Link>.
        </p>
      </section>

      {/* Staying near the airport */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Staying near the airport</h2>
        <p className="text-muted-foreground leading-relaxed">
          Airport and Garbutt accommodation is mainly practical for transit stays, very early departures
          or business travel. Most leisure visitors do better based around The Strand and North Ward, the
          CBD, or Palmer Street and South Townsville. See{" "}
          <Link to="/accommodation" className="text-primary hover:underline">accommodation</Link> and{" "}
          <Link to="/suburbs" className="text-primary hover:underline">suburbs and areas</Link> to choose.
        </p>
      </section>

      {/* Best areas after landing */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Best areas after you land</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {AREAS.map((a) => (
            <Link
              key={a.name}
              to={a.to}
              className="group block rounded-xl border bg-card p-5 hover:border-primary/40 transition-colors"
            >
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {a.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">Best for: {a.bestFor}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Magnetic Island */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Ship className="w-6 h-6 text-primary" aria-hidden="true" />
          <h2 className="text-2xl font-bold">Flying in for Magnetic Island</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          There is no airport on Magnetic Island: visitors fly into Townsville Airport, travel from the
          airport to the ferry terminal, then cross by passenger ferry. Ferry timetables are separate
          from flight schedules, so check them yourself in the{" "}
          <Link to="/guides/magnetic-island-ferry" className="text-primary hover:underline">Magnetic Island ferry guide</Link>. Depending
          on when you land and when the ferry runs, a night in Townsville first may be sensible — see{" "}
          <Link to="/guides/magnetic-island-day-trip" className="text-primary hover:underline">the day trip guide</Link> and{" "}
          <Link to="/accommodation" className="text-primary hover:underline">accommodation</Link>.
        </p>
      </section>

      {/* Events */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Trophy className="w-6 h-6 text-primary" aria-hidden="true" />
          <h2 className="text-2xl font-bold">Flying in for a Cowboys game or major event</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Arrivals, transport and accommodation all get busier around major event weekends, and
          accommodation can tighten well in advance. Check event and transport information before
          booking flights — see the{" "}
          <Link to="/cowboys-stadium-guide" className="text-primary hover:underline">Cowboys stadium guide</Link>,{" "}
          <Link to="/events" className="text-primary hover:underline">events</Link> and{" "}
          <Link to="/accommodation" className="text-primary hover:underline">accommodation</Link>.
        </p>
      </section>

      {/* Regional day trips */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Regional day trips after flying in</h2>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>
            <Link to="/guides/paluma-day-trip" className="text-primary hover:underline">Paluma</Link> — much easier with a car.
          </li>
          <li>
            <Link to="/guides/magnetic-island-day-trip" className="text-primary hover:underline">Magnetic Island</Link> — no car needed; the ferry does the work.
          </li>
          <li>
            The <Link to="/beaches" className="text-primary hover:underline">northern beaches</Link> — car-dependent.
          </li>
          <li>
            <Link to="/pallarenda-beach" className="text-primary hover:underline">Pallarenda</Link> — far easier with a car.
          </li>
          <li>
            <Link to="/billabong-sanctuary" className="text-primary hover:underline">Billabong Sanctuary</Link> — south of the city and simplest by car or tour.
          </li>
        </ul>
      </section>

      {/* Weather */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Sun className="w-6 h-6 text-primary" aria-hidden="true" />
          <h2 className="text-2xl font-bold">Hot weather on arrival</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Airport-to-accommodation transfers often happen in strong heat. Sort your onward transport
          before you land where possible, and never leave people, luggage or pets waiting in the sun or
          in a parked vehicle. More detail is in{" "}
          <Link to="/guides/beat-the-heat" className="text-primary hover:underline">Beat the Heat</Link>.
        </p>
        <div className="flex items-center gap-3 mt-6 mb-3">
          <CloudSun className="w-6 h-6 text-primary" aria-hidden="true" />
          <h2 className="text-2xl font-bold">Rain and severe weather</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Wet-season weather can affect both flights and road travel. Check your airline's flight status
          and official local warnings before travelling. See{" "}
          <Link to="/guides/rainy-day-activities" className="text-primary hover:underline">rainy day activities</Link> and{" "}
          <Link to="/useful-contacts" className="text-primary hover:underline">useful contacts</Link> for live information.
        </p>
      </section>

      <LocalInsightCard variant="tip" title="Local tip">
        <p>
          Townsville's airport is close enough to the city that midday arrivals are easy — but the heat
          is not. Head to your accommodation first, then start with something close, like The Strand or a
          café stop, rather than driving straight out to a day trip. More of these in{" "}
          <Link to="/local-tips" className="text-primary hover:underline">Local Tips</Link>.
        </p>
      </LocalInsightCard>

      {/* Mistakes */}
      <section className="mb-12 mt-12">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-primary" aria-hidden="true" />
          <h2 className="text-2xl font-bold">Common air-travel mistakes</h2>
        </div>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          {MISTAKES.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
        <p className="text-muted-foreground mt-4">
          For the rest of your planning, the{" "}
          <Link to="/food" className="text-primary hover:underline">food</Link> and{" "}
          <Link to="/shopping" className="text-primary hover:underline">shopping</Link> guides cover what to do once
          you have settled in.
        </p>
      </section>

      {/* Pathways */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Plan by travel need</h2>
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
        <h2 className="text-2xl font-bold mb-4">Townsville flight and airport questions</h2>
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

export default TownsvilleAirport;
