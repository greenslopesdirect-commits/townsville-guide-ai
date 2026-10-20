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
  Bus,
  Car,
  Coffee,
  MapPin,
  ParkingCircle,
  Plane,
  Users,
} from "lucide-react";

const SITE = "https://www.townsvilleguide.com.au";
const PATH = "/townsville-airport";

const TITLE = "Townsville Airport (TSV): Transport, Parking & Airlines";
const DESCRIPTION =
  "Townsville Airport (TSV): getting to the city, the airport bus, taxi and shuttle options, parking, opening hours, airlines and facilities.";

const AIRPORT_URL = "https://www.townsvilleairport.com.au/";
const TRANSPORT_URL = "https://www.townsvilleairport.com.au/transport/transport-overview/transport-options";
const PARKING_URL = "https://www.townsvilleairport.com.au/transport/transport-overview/Book-Car-Park";
const FLIGHT_INFO_URL = "https://www.townsvilleairport.com.au/fly/flight-information";
const AIRLINE_INFO_URL = "https://www.townsvilleairport.com.au/fly/discover/airline-info";

// Airlines as listed on the airport's own airline-info page. Routes are deliberately not listed:
// the airport page names the airlines but not the routes, and routes change.
const AIRLINES = [
  { name: "Qantas / QantasLink", url: "https://www.qantas.com/" },
  { name: "Virgin Australia", url: "https://www.virginaustralia.com/" },
  { name: "Jetstar", url: "https://www.jetstar.com/" },
  { name: "Rex (Regional Express)", url: "https://www.rex.com.au/" },
  { name: "Airnorth", url: "https://www.airnorth.com.au/" },
  { name: "Alliance Airlines", url: "https://www.allianceairlines.com.au/" },
  { name: "Aerlink", url: "https://aerlink.au/" },
  { name: "Skytrans", url: "https://skytrans.au/" },
  { name: "Hinterland Aviation", url: "https://www.hinterlandaviation.com.au/" },
];

const RELATED = [
  { to: "/accommodation", name: "Accommodation in Townsville", text: "Where to stay, area by area, after you land." },
  { to: "/first-time-in-townsville", name: "First Time in Townsville", text: "What to prioritise on a first visit, plus the local tips." },
  { to: "/townsville-without-a-car", name: "Townsville Without a Car", text: "Getting around without hiring a vehicle." },
  { to: "/suburbs", name: "Townsville Suburbs & Areas", text: "Where the main areas sit and what each suits." },
  { to: "/guides/magnetic-island-ferry", name: "Magnetic Island Ferry", text: "How the ferry works and where it leaves from." },
  { to: "/cowboys-stadium-guide", name: "Cowboys Stadium Guide", text: "Event-day planning at Queensland Country Bank Stadium." },
  { to: "/guides/beat-the-heat", name: "Beat the Heat", text: "Planning around Townsville's tropical heat." },
  { to: "/useful-contacts", name: "Useful Contacts", text: "Live information, transport and emergency contacts." },
];

const faqs = [
  {
    q: "How far is Townsville Airport from the city?",
    a: "About a 10-minute drive from the city centre, according to Townsville Airport. The Strand and Palmer Street are also short drives.",
  },
  {
    q: "What is Townsville Airport's code?",
    a: "TSV. It appears on booking sites, boarding passes and baggage tags.",
  },
  {
    q: "Is there a bus from Townsville Airport?",
    a: "Yes. Townsville Airport lists Translink route 222, which it says runs about every 60 minutes from 4am to 11pm, seven days a week (not Good Friday or Christmas Day), for 50 cents each way. Stops include the Townsville City bus hub, the Palmer Street precinct, the stadium and the Breakwater ferry terminal. Check the current timetable with Translink on 13 12 30 before you rely on it.",
  },
  {
    q: "Are there taxis and rideshare at Townsville Airport?",
    a: "Yes. Taxi and rideshare pick-up is outside the terminal at the end of arrivals. Townsville Airport says a $3.80 airport toll applies to both and is paid by the passenger.",
  },
  {
    q: "Is there a shuttle to the Magnetic Island ferry?",
    a: "The airport lists the Townsville Shuttle Service, which runs daily to city hotels and the Magnetic Island ferry terminal, timed around major flights. Bookings are essential. The Route 222 bus also stops at the Breakwater ferry terminal.",
  },
  {
    q: "Can you hire a car at Townsville Airport?",
    a: "Yes. The major rental companies have desks inside the terminal. The airport recommends pre-booking, especially in peak periods.",
  },
  {
    q: "Where do I park at Townsville Airport?",
    a: "There are two car parks, Saver and Select, open 24 hours. Pre-booking online is cheaper than turning up and uses number plate recognition for entry. There is no parking in front of the terminal. A car park expansion is under way, so allow extra time.",
  },
  {
    q: "What time does Townsville Airport open?",
    a: "The terminal opens at 4:30am and stays open until after the last flight. It is locked overnight, so you cannot wait or sleep inside between the last and first flights.",
  },
  {
    q: "Does Townsville Airport have international flights?",
    a: "No. The airport describes its services as domestic. International visitors connect through another Australian airport.",
  },
  {
    q: "Is it worth staying near Townsville Airport?",
    a: "Only for very early flights or a transit stay. Most leisure visitors are better based around The Strand, the CBD or Palmer Street.",
  },
  {
    q: "Where can I check current flight information?",
    a: "Use your airline's app or website for your own flight, and the airport's flight information page for live arrivals and departures.",
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
              headline: "Townsville Airport (TSV): Transport, Parking & Airlines",
              description: DESCRIPTION,
              mainEntityOfPage: `${SITE}${PATH}`,
              author: { "@type": "Person", name: "Duncan Ross" },
              publisher: { "@type": "Organization", name: "Townsville Guide" },
              dateModified: "2026-10-20",
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
        Townsville Airport (TSV) is a compact domestic airport about a 10-minute drive from the city
        centre. This page covers the practical bits: how to get into town, where to park, when the terminal
        is open and who flies in.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Most of the facts below come from the{" "}
        <a href={AIRPORT_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          official Townsville Airport website
        </a>
        , last checked 20 October 2026. Routes, timetables and prices change, so confirm anything
        time-critical with the airport, your airline or Translink.
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

      {/* Getting from the airport */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Car className="w-6 h-6 text-primary" aria-hidden="true" />
          <h2 className="text-2xl font-bold">Getting from the airport to the city</h2>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border bg-card p-5">
            <div className="flex items-center gap-2">
              <Bus className="w-5 h-5 text-primary" aria-hidden="true" />
              <h3 className="font-semibold text-foreground">Bus: Translink route 222</h3>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Townsville Airport lists route 222 as running about every 60 minutes, 4am to 11pm, seven days
              a week (not Good Friday or Christmas Day), at 50 cents each way. It stops at the Breakwater
              ferry terminal, the Palmer Street precinct, the stadium and the Townsville City bus hub. Plan
              your trip on{" "}
              <a href="https://translink.com.au/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Translink
              </a>{" "}
              or call 13 12 30. See{" "}
              <Link to="/townsville-without-a-car" className="text-primary hover:underline">Townsville Without a Car</Link>{" "}
              for how the rest of the network works.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground">Taxi and rideshare</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Pick-up is outside the terminal at the end of arrivals. The airport says a $3.80 airport toll
              applies to both taxis and rideshare, paid by the passenger, on top of the metered or app fare.
              Fares vary, so ask the driver or check the app.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground">Shuttle and private transfers</h3>
            <p className="text-sm text-muted-foreground mt-1">
              The Townsville Shuttle Service runs daily to city hotels and the Magnetic Island ferry
              terminal, timed around major flights. Bookings are essential (
              <a href="https://shuttletsv.com.au/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                shuttletsv.com.au
              </a>
              ). The airport also lists private transfer and coach operators on its{" "}
              <a href={TRANSPORT_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                transport options page
              </a>
              .
            </p>
          </div>
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground">Car hire</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Rental desks are inside the terminal and the airport recommends pre-booking in busy periods. A
              car earns its keep for{" "}
              <Link to="/guides/paluma-day-trip" className="text-primary hover:underline">Paluma</Link>,{" "}
              <Link to="/pallarenda-beach" className="text-primary hover:underline">Pallarenda</Link>, the{" "}
              <Link to="/beaches" className="text-primary hover:underline">northern beaches</Link> and{" "}
              <Link to="/billabong-sanctuary" className="text-primary hover:underline">Billabong Sanctuary</Link>.
              For a short stay around The Strand, the CBD or Palmer Street you can manage without one.
            </p>
          </div>
        </div>
        <AirportTransferCard className="mt-6" />
      </section>

      {/* Drop-off and parking */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <ParkingCircle className="w-6 h-6 text-primary" aria-hidden="true" />
          <h2 className="text-2xl font-bold">Drop-off and parking</h2>
        </div>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
          <li>There is no parking in front of the terminal. Drop-off and pick-up happen in the signed public zone, and the driver must stay with the vehicle.</li>
          <li>Two car parks, <strong>Saver</strong> and <strong>Select</strong>, are open 24 hours. Pre-booking online is cheaper than turning up, and entry uses number plate recognition.</li>
          <li>Pre-bookings can be changed or cancelled up to 12 hours before arrival. If the car park closes after you book, you get a full refund.</li>
          <li>Only standard light vehicles fit. Trailers and caravans are not accommodated.</li>
          <li>A car park expansion is under way, so availability and access can be affected. Allow extra time.</li>
          <li>Accessible spaces in all car parks need a valid Disability Parking Permit.</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          Prices are not published here because they change. Book and check current rates on the{" "}
          <a href={PARKING_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            airport's parking page
          </a>
          . Car park enquiries: tsvcarpark@tsvairport.com.au.
        </p>
      </section>

      {/* Terminal */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Coffee className="w-6 h-6 text-primary" aria-hidden="true" />
          <h2 className="text-2xl font-bold">Inside the terminal</h2>
        </div>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li><strong>Hours:</strong> opens at 4:30am and stays open until after the last flight. It is locked overnight, so no one can wait or sleep inside.</li>
          <li><strong>Check-in:</strong> domestic airlines generally want you checked in at least 60 minutes before departure, or as your airline advises.</li>
          <li><strong>Food and shops:</strong> cafés and shops including Maggie's Café and Castle Hill Café. Most outlets open around flight times, so don't count on much late at night.</li>
          <li><strong>Wi-Fi:</strong> free throughout the terminal.</li>
          <li><strong>Lockers:</strong> luggage lockers are at the front of the terminal on Stinson Avenue, run by Rent A Locker. Staff can't hold bags or keys for someone else to collect.</li>
          <li><strong>Lounge:</strong> a Qantas Club lounge for eligible passengers.</li>
          <li><strong>Lost property:</strong> terminal customer service on 1800 225 878 or 0408 715 500. Items left on a plane go through the airline.</li>
        </ul>
      </section>

      {/* Airlines */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-6 h-6 text-primary" aria-hidden="true" />
          <h2 className="text-2xl font-bold">Airlines and destinations</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Townsville Airport handles domestic flights only. Its website lists destinations including
          Brisbane, Sydney, Melbourne, Cairns, Darwin, Mackay, Mount Isa, Longreach and Cloncurry. The
          airlines it lists as operating from Townsville are below. Which airline flies which route, and
          how often, changes with the season, so check{" "}
          <a href={FLIGHT_INFO_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            live flight information
          </a>{" "}
          or the airline before you book.
        </p>
        <ul className="grid gap-2 sm:grid-cols-2 text-sm">
          {AIRLINES.map((a) => (
            <li key={a.name}>
              <a href={a.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {a.name}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground mt-4">
          Airline contact numbers are on the airport's{" "}
          <a href={AIRLINE_INFO_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            airline info page
          </a>
          .
        </p>
      </section>

      {/* Accessibility */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Accessibility className="w-6 h-6 text-primary" aria-hidden="true" />
          <h2 className="text-2xl font-bold">Accessibility</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Two signed accessible bays in the pick-up and drop-off area allow up to 15 minutes for drivers
          with a valid permit. Kerbside Concierge assistance, including help arranging a wheelchair-accessible
          taxi, can be booked on 1800 225 878 before you arrive. The airport publishes a Disability Access
          Facilitation Plan and a sensory terminal map on its website. Tell your airline about assistance
          needs when you book. For the wider city, see our{" "}
          <Link to="/accessible-townsville" className="text-primary hover:underline">accessible Townsville guide</Link>.
        </p>
      </section>

      {/* After you land */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">After you land</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Airport and Garbutt accommodation suits very early departures and transit stays. For a holiday,
          most people base themselves on{" "}
          <Link to="/the-strand" className="text-primary hover:underline">The Strand and North Ward</Link> (waterfront,
          families), the CBD (central, museums), or Palmer Street and South Townsville (dining, the stadium
          and the ferry). The{" "}
          <Link to="/suburbs" className="text-primary hover:underline">suburbs guide</Link> and{" "}
          <Link to="/accommodation" className="text-primary hover:underline">accommodation guide</Link> compare them.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-3">
          <strong>Magnetic Island:</strong> there is no airport on the island. You fly to Townsville, get to
          the ferry terminal (route 222, the shuttle, taxi or rideshare), then take the passenger ferry.
          Ferries and flights aren't coordinated, so check the{" "}
          <Link to="/guides/magnetic-island-ferry" className="text-primary hover:underline">ferry guide</Link>, and consider a
          night in town first if you land late.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong>Event weekends:</strong> flights, rental cars and accommodation fill up around Cowboys home
          games and big events. See the{" "}
          <Link to="/cowboys-stadium-guide" className="text-primary hover:underline">Cowboys stadium guide</Link> and{" "}
          <Link to="/events" className="text-primary hover:underline">events</Link> before booking.
        </p>
      </section>

      <LocalInsightCard variant="tip" title="Local tip">
        <p>
          The airport is close enough to town that midday arrivals are easy, but the heat isn't. Drop your
          bags first, then start with something close like The Strand rather than driving straight out to a
          day trip. In storms or the wet season, check your airline's flight status and official warnings
          before leaving for the airport (<Link to="/useful-contacts" className="text-primary hover:underline">useful contacts</Link>). More in{" "}
          <Link to="/first-time-in-townsville" className="text-primary hover:underline">First Time in Townsville</Link> and{" "}
          <Link to="/guides/beat-the-heat" className="text-primary hover:underline">Beat the Heat</Link>.
        </p>
      </LocalInsightCard>

      {/* FAQ */}
      <section className="mb-12 mt-12">
        <h2 className="text-2xl font-bold mb-4">Townsville Airport questions</h2>
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
