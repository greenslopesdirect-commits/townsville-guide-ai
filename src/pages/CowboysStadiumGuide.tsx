import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Accessibility,
  AlertTriangle,
  Baby,
  Building2,
  Bus,
  Car,
  Coffee,
  ExternalLink,
  Footprints,
  MapPin,
  ShoppingBag,
  Sun,
  Trophy,
  Umbrella,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";

const SITE = "https://www.townsvilleguide.com.au";
const PATH = "/cowboys-stadium-guide";

const TITLE = "Queensland Country Bank Stadium Guide | Cowboys Games & Event Days";
const DESCRIPTION =
  "Plan a visit to Queensland Country Bank Stadium in Townsville, with tips on getting there, where to stay, food, Cowboys games and event-day planning.";

/** Official sources — the authoritative places for event-specific arrangements. */
const STADIUM_URL = "https://www.queenslandcountrybankstadium.com.au/";
const STADIUM_WHATS_ON_URL = "https://www.queenslandcountrybankstadium.com.au/events";
const STADIUMS_QLD_URL =
  "https://www.stadiums.qld.gov.au/our-venues/queensland-country-bank-stadium/";
const COWBOYS_DRAW_URL = "https://www.cowboys.com.au/draw/";

const MISTAKES = [
  "Relying on an old fixture date instead of the current official draw.",
  "Assuming every event uses the same gate and entry times.",
  "Relying on old parking advice from a previous season or a different event.",
  "Assuming event shuttles always operate, for every event.",
  "Leaving food plans until after a major event, when venues are busiest.",
  "Booking accommodation a long way out without thinking about how you will get back.",
  "Underestimating the heat at daytime and early-evening events.",
  "Not checking current bag, entry and prohibited-item rules before leaving.",
  "Assuming all events use the same seating, entry and access arrangements.",
  "Not checking official weather and event updates on the day.",
  "Treating a concert exactly like a Cowboys game.",
  "Trying to fit too much sightseeing around the event itself.",
];

const PATHWAYS = [
  { label: "Current stadium event", name: "Official stadium What's On", href: STADIUM_WHATS_ON_URL },
  { label: "Cowboys fixture", name: "Official Cowboys fixtures", href: COWBOYS_DRAW_URL },
  { label: "Where to stay", name: "Accommodation", to: "/accommodation" },
  { label: "Food", name: "Food in Townsville", to: "/food" },
  { label: "No car", name: "Townsville Without a Car", to: "/townsville-without-a-car" },
  { label: "With kids", name: "Townsville with Kids", to: "/townsville-with-kids" },
  { label: "Hot weather", name: "Beat the Heat", to: "/guides/beat-the-heat" },
  { label: "Rain", name: "Rainy Day Activities", to: "/guides/rainy-day-activities" },
  { label: "Event weekend", name: "Things to Do", to: "/things-to-do" },
  { label: "Extra day", name: "Magnetic Island day trip", to: "/guides/magnetic-island-day-trip" },
  { label: "Waterfront time", name: "The Strand", to: "/the-strand" },
  { label: "Emergency / live information", name: "Useful Contacts", to: "/useful-contacts" },
];

const COMBOS = [
  {
    name: "Stadium event + Castle Hill",
    text: "Good before an evening event where timing allows — head up late afternoon, then come back down for dinner.",
    to: "/castle-hill",
    linkText: "Castle Hill guide",
  },
  {
    name: "Stadium event + The Strand",
    text: "Best used for the morning before, or the next day, when the waterfront is at its most pleasant.",
    to: "/the-strand",
    linkText: "The Strand guide",
  },
  {
    name: "Stadium event + Palmer Street dinner",
    text: "The simplest event-night combination if you are staying centrally.",
    to: "/food",
    linkText: "Food guide",
  },
  {
    name: "Stadium event + Magnetic Island",
    text: "Keep the island as its own day before or after the event rather than squeezing it in around one.",
    to: "/guides/magnetic-island-day-trip",
    linkText: "Magnetic Island day trip",
  },
  {
    name: "Stadium event + Jezzine Barracks",
    text: "Easy central sightseeing on the headland at the northern end of The Strand.",
    to: "/jezzine-barracks",
    linkText: "Jezzine Barracks guide",
  },
];

const RELATED = [
  { to: "/events", name: "Townsville Events", text: "The wider events picture and where to check what's on." },
  { to: "/accommodation", name: "Where to Stay in Townsville", text: "Which area suits an event trip, and why." },
  { to: "/food", name: "Food in Townsville", text: "Dining areas that work before or after an event." },
  { to: "/townsville-without-a-car", name: "Townsville Without a Car", text: "Walking, ferries and buses around central Townsville." },
  { to: "/things-to-do", name: "Things to Do in Townsville", text: "Filling the rest of an event weekend." },
  { to: "/first-time-in-townsville", name: "First Time in Townsville", text: "Orientation if the event is your first visit." },
  { to: "/townsville-in-one-day", name: "Townsville in One Day", text: "A tight plan for the day either side of the event." },
  { to: "/the-strand", name: "The Strand", text: "The city's waterfront, best in the morning or evening." },
  { to: "/castle-hill", name: "Castle Hill", text: "The city lookout, easy to fit around an evening event." },
  { to: "/guides/magnetic-island-day-trip", name: "Magnetic Island Day Trip", text: "A full extra day from the Breakwater ferry terminal." },
  { to: "/guides/beat-the-heat", name: "Beat the Heat", text: "Managing hot conditions at outdoor events." },
  { to: "/useful-contacts", name: "Useful Contacts", text: "Official weather, emergency and live information sources." },
];

const faqs = [
  {
    q: "Where is Queensland Country Bank Stadium?",
    a: "The stadium is in central Townsville, on the southern edge of the CBD near South Townsville and Palmer Street. Its central position is why staying in the CBD or on Palmer Street makes event days much simpler.",
  },
  {
    q: "Is Queensland Country Bank Stadium the Cowboys' home ground?",
    a: "Yes. Queensland Country Bank Stadium is the home ground of the North Queensland Cowboys, and it also hosts other sporting events, representative matches, concerts and major entertainment.",
  },
  {
    q: "What is the best area to stay for a Cowboys game?",
    a: "Palmer Street and the CBD are the most practical areas because they are central and close to dining. The Strand and North Ward suit visitors who want a broader holiday feel and are happy to travel a little further on event night. See our accommodation guide for the full comparison.",
  },
  {
    q: "Can you walk to the stadium from the CBD?",
    a: "Many visitors staying in the CBD or on Palmer Street find walking practical, though it depends on your exact accommodation, mobility and the conditions on the day. Check the route from your property before deciding.",
  },
  {
    q: "Where should you eat before a Cowboys game?",
    a: "Palmer Street is the strongest pre- and post-event dining strip, and the CBD offers cafés, pubs and flexible central dining. Both are busier on event nights, so booking is sensible. Hours vary by venue, so confirm directly.",
  },
  {
    q: "Is there parking at Queensland Country Bank Stadium?",
    a: "Parking arrangements vary by event, nearby roads are busier, and special restrictions can apply. Check the official event page for the specific event you are attending rather than relying on older advice.",
  },
  {
    q: "Does public transport run to stadium events?",
    a: "Public transport serves central Townsville and special-event arrangements are sometimes introduced for larger events. Services and arrangements vary, so check current official transport information close to the event date.",
  },
  {
    q: "What should you check before going to the stadium?",
    a: "Check the official event page for your specific match, concert or event. Gate times, transport, parking, entry conditions and prohibited items can all vary between events.",
  },
  {
    q: "Is the stadium suitable for families?",
    a: "Families attend regularly. Arrive with time, confirm ticketing and entry conditions, check current bag and food rules, plan for heat, agree a meeting point where appropriate, and think about how you will get back before the event finishes.",
  },
  {
    q: "What happens if it rains on event day?",
    a: "Event organisers decide any event-specific changes, so check their official communications and the current forecast. Wet weather can also affect transport and general comfort, so allow extra time.",
  },
  {
    q: "Does the stadium host events other than Cowboys games?",
    a: "Yes. It hosts other sporting fixtures, representative matches, concerts and major entertainment events. Arrangements differ between event types, so do not assume a concert follows Cowboys-game arrangements.",
  },
  {
    q: "Where can I find current Cowboys fixtures?",
    a: "Use the official Cowboys fixture list for the next confirmed home game, and the official stadium event listing for everything else scheduled at the venue.",
  },
];

const CowboysStadiumGuide = () => (
  <>
    <SEOHead title={TITLE} description={DESCRIPTION} canonical={PATH} ogType="article" />
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: "Queensland Country Bank Stadium & Cowboys Game Day Guide",
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
                { "@type": "ListItem", position: 2, name: "Townsville Events", item: `${SITE}/events` },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Queensland Country Bank Stadium Guide",
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
        <Trophy className="w-4 h-4" aria-hidden="true" />
        Stadium event planning
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Queensland Country Bank Stadium &amp; Cowboys Game Day Guide
      </h1>

      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Queensland Country Bank Stadium sits on the southern edge of central Townsville and is the
        home ground of the North Queensland Cowboys. It also hosts other major sporting events and
        entertainment, and arrangements can differ from one event to the next.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-8">
        This guide covers the durable parts of an event visit — getting there, where to stay, where
        to eat, what event day feels like, heat and weather, families and accessibility — and points
        you to official sources for anything that changes event by event.
      </p>

      <GuideQuickFacts className="mb-4" />

      <a
        href="https://www.google.com/maps/search/?api=1&query=Queensland+Country+Bank+Stadium+South+Townsville+QLD"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mb-10"
      >
        <MapPin className="w-4 h-4" aria-hidden="true" />
        Get Directions
      </a>

      {/* Check your event first */}
      <section className="mb-12 rounded-xl border-2 border-primary/30 bg-primary/5 p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-3">Check your event first</h2>
        <p className="text-muted-foreground leading-relaxed mb-5">
          Before travelling, check the official event page for your specific match, concert or
          event. Gate times, transport, parking, entry conditions and prohibited items can vary.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href={STADIUM_WHATS_ON_URL} target="_blank" rel="noopener noreferrer">
              Official stadium What's On
              <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={STADIUM_URL} target="_blank" rel="noopener noreferrer">
              Stadium visitor information
              <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={COWBOYS_DRAW_URL} target="_blank" rel="noopener noreferrer">
              Official Cowboys fixtures
              <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Stadiums Queensland also publishes{" "}
          <a
            href={STADIUMS_QLD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            venue information for the stadium
          </a>
          .
        </p>
      </section>

      {/* Getting to the stadium */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Getting to the stadium</h2>
        <p className="text-muted-foreground mb-6">
          The stadium's central location is its biggest practical advantage. How you get there
          mostly depends on where you are staying and what kind of event it is.
        </p>
        <div className="space-y-4">
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Footprints className="w-4 h-4 text-primary" aria-hidden="true" /> Walking from
              central Townsville
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Visitors staying in the CBD, or around Palmer Street and South Townsville, often find
              walking practical. Whether it suits you depends on your exact accommodation, mobility
              and the conditions on the day — check the route from your property before deciding.
              See{" "}
              <Link to="/townsville-without-a-car" className="text-primary hover:underline">
                Townsville without a car
              </Link>
              .
            </p>
          </article>
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Bus className="w-4 h-4 text-primary" aria-hidden="true" /> Public transport
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Services around events can vary, and special-event arrangements are sometimes
              introduced for larger events. Check the current official transport information close
              to the event rather than relying on an older article.
            </p>
          </article>
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Car className="w-4 h-4 text-primary" aria-hidden="true" /> Taxi and rideshare
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Both can be convenient, particularly after an evening event. Pickup and drop-off
              arrangements may be changed for major events, and demand is highest immediately after
              the final whistle or last song — check the event page and allow for a wait.
            </p>
          </article>
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" aria-hidden="true" /> Driving and parking
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Parking arrangements vary by event, nearby roads are busier before and after, and
              temporary restrictions or closures may apply. Check the specific event page for
              current parking and road information — arrangements from a previous season or a
              different event are not a reliable guide.
            </p>
          </article>
        </div>
      </section>

      {/* Where to stay */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Where to stay for a stadium event</h2>
        <p className="text-muted-foreground mb-6">
          Choose the area before the property. On an event night, how easily you get back matters
          more than almost anything else.
        </p>
        <div className="space-y-4">
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-primary" aria-hidden="true" /> Palmer Street /
              South Townsville
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The most convenient area for stadium access, and the city's main dinner strip. Suits
              couples, short event stays and anyone who wants dinner and the event within the same
              small area.
            </p>
          </article>
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-primary" aria-hidden="true" /> The CBD
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Central, well served for dining and practical for event weekends. Walking is realistic
              from many CBD properties, though it depends on exactly where you stay.
            </p>
          </article>
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Sun className="w-4 h-4 text-primary" aria-hidden="true" /> The Strand / North Ward
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Better for waterfront atmosphere, family leisure time and a broader holiday feel,
              accepting slightly less direct stadium convenience on event night. See{" "}
              <Link to="/the-strand" className="text-primary hover:underline">
                The Strand guide
              </Link>
              .
            </p>
          </article>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Our{" "}
          <Link to="/accommodation" className="text-primary hover:underline">
            accommodation guide
          </Link>{" "}
          compares these areas in more detail. Book early for major event weekends and check
          cancellation terms.
        </p>
      </section>

      {/* Food */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Food before and after</h2>
        <p className="text-muted-foreground mb-6">
          Pick the area first — venues fill quickly on event nights, and hours vary, so confirm
          directly and consider booking.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Coffee className="w-4 h-4 text-primary" aria-hidden="true" /> Palmer Street
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The strongest pre- or post-event choice, with a concentrated run of restaurants close
              to the stadium side of the river.
            </p>
          </article>
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Coffee className="w-4 h-4 text-primary" aria-hidden="true" /> The CBD
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cafés, dinner, drinks and flexible central dining, which works well if your plans are
              still loose.
            </p>
          </article>
          <article className="rounded-xl border bg-card p-5 sm:col-span-2">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Coffee className="w-4 h-4 text-primary" aria-hidden="true" /> The Strand / North Ward
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Better when the event is part of a broader leisure weekend rather than the main reason
              you are eating out. See the{" "}
              <Link to="/food" className="text-primary hover:underline">
                food guide
              </Link>
              .
            </p>
          </article>
        </div>
      </section>

      {/* Cowboys games */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
          <Trophy className="w-6 h-6 text-primary" aria-hidden="true" /> Cowboys games
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Queensland Country Bank Stadium is the home ground of the North Queensland Cowboys, and
          home games are the venue's most regular major events. The city centre is noticeably busier
          on game day, particularly around Palmer Street and the CBD.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-5">
          Fixtures are set season by season and change. For the next confirmed Cowboys home game,
          check the official Cowboys fixture list, and check the stadium event listing for gate
          times and event-specific arrangements.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <a href={COWBOYS_DRAW_URL} target="_blank" rel="noopener noreferrer">
              Official Cowboys fixtures
              <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={STADIUM_WHATS_ON_URL} target="_blank" rel="noopener noreferrer">
              Official stadium event listing
              <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </section>

      {/* Other major events */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-3">Other major events</h2>
        <p className="text-muted-foreground leading-relaxed">
          The stadium also hosts other sporting fixtures, representative matches, concerts and major
          entertainment events. These do not necessarily follow Cowboys-game arrangements — entry,
          seating, transport and timing can all differ, so treat each event on its own terms. Our{" "}
          <Link to="/events" className="text-primary hover:underline">
            Townsville events guide
          </Link>{" "}
          covers the wider event picture across the city.
        </p>
      </section>

      {/* Event day */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-3">What event day is like</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Expect larger crowds than a normal day in central Townsville, queues at entry, security
          and bag checks, and busier roads nearby before and after. Parts of the venue are open to
          the weather, which matters more here than in cooler cities.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Food and drink availability inside the venue depends on the event, and queues are longest
          immediately before the start and at breaks. Arriving earlier than you think you need to is
          the simplest way to make the whole thing easier.
        </p>
      </section>

      {/* Heat + rain */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Heat, sun and weather</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Sun className="w-4 h-4 text-primary" aria-hidden="true" /> Heat and sun
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Daytime and early-evening events can feel hot. Sun protection and hydration matter,
              and what you can bring inside is set by current venue rules, so check them before you
              leave. Check the forecast before heading out. See{" "}
              <Link to="/guides/beat-the-heat" className="text-primary hover:underline">
                beat the heat
              </Link>
              .
            </p>
          </article>
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Umbrella className="w-4 h-4 text-primary" aria-hidden="true" /> Rain and severe
              weather
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Event organisers decide any event-specific changes, so check their official
              communications rather than assuming. Wet weather can also affect transport and
              comfort. Keep{" "}
              <Link to="/guides/rainy-day-activities" className="text-primary hover:underline">
                rainy day options
              </Link>{" "}
              and{" "}
              <Link to="/useful-contacts" className="text-primary hover:underline">
                useful contacts
              </Link>{" "}
              handy.
            </p>
          </article>
        </div>
      </section>

      {/* Kids, accessibility, entry */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Families, accessibility and entry</h2>
        <div className="space-y-4">
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Baby className="w-4 h-4 text-primary" aria-hidden="true" /> Going with kids
            </h3>
            <ul className="text-sm text-muted-foreground leading-relaxed list-disc pl-5 space-y-1">
              <li>Arrive with time rather than cutting it fine at the gates.</li>
              <li>Confirm ticketing and entry conditions for children before you travel.</li>
              <li>Check current bag, food and drink rules for the event.</li>
              <li>Plan for heat at daytime and early-evening events.</li>
              <li>Agree a meeting point where appropriate.</li>
              <li>Think about how you will get back before the event ends.</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-3">
              See{" "}
              <Link to="/townsville-with-kids" className="text-primary hover:underline">
                Townsville with kids
              </Link>
              .
            </p>
          </article>
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Accessibility className="w-4 h-4 text-primary" aria-hidden="true" /> Accessibility
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Accessibility facilities are available at the venue, but specific arrangements —
              seating, parking, entry points and companion ticketing — can vary by event and are
              updated over time. Check the{" "}
              <a
                href={STADIUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                current official stadium accessibility information
              </a>
              , and contact the venue directly for event-specific needs. Our{" "}
              <Link to="/accessible-townsville" className="text-primary hover:underline">
                accessible Townsville guide
              </Link>{" "}
              covers the wider city.
            </p>
          </article>
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-primary" aria-hidden="true" /> Entry rules and
              bags
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Prohibited items, bag sizes, security checks and food and drink rules may vary between
              events and are updated from time to time. Check the official event page before
              travelling rather than relying on what applied at a previous event.
            </p>
          </article>
        </div>
      </section>

      {/* Event weekend planning */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Event weekend planning</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {COMBOS.map((c) => (
            <article key={c.name} className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-1.5">{c.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {c.text}{" "}
                <Link to={c.to} className="text-primary hover:underline">
                  {c.linkText}
                </Link>
                .
              </p>
            </article>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mt-4">
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5">One-night event stay</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Prioritise central accommodation, easy transport and nearby dining. Palmer Street or
              the CBD are the two obvious choices, depending on whether dinner or general city
              access matters more. A quick{" "}
              <Link to="/local-tips" className="text-primary hover:underline">
                local tips
              </Link>{" "}
              read helps if it is your first visit.
            </p>
          </article>
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5">Two- or three-night event trip</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Add The Strand, Castle Hill, Jezzine Barracks, a Magnetic Island day and{" "}
              <Link to="/riverway" className="text-primary hover:underline">
                Riverway
              </Link>{" "}
              where it suits. Start with{" "}
              <Link to="/first-time-in-townsville" className="text-primary hover:underline">
                first time in Townsville
              </Link>
              ,{" "}
              <Link to="/townsville-in-one-day" className="text-primary hover:underline">
                Townsville in one day
              </Link>{" "}
              or{" "}
              <Link to="/things-to-do" className="text-primary hover:underline">
                things to do
              </Link>
              .
            </p>
          </article>
        </div>
      </section>

      {/* Mistakes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-primary" aria-hidden="true" /> Common stadium-trip
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
        <h2 className="text-2xl font-bold mb-4">Plan by event need</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {PATHWAYS.map((p) =>
            p.to ? (
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
            ) : (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-lg border bg-card px-4 py-3 hover:border-primary/40 transition-colors"
              >
                <span className="text-sm font-medium text-foreground">{p.label}</span>
                <span className="inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {p.name}
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </span>
              </a>
            )
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Stadium and Cowboys game questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

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

      <p className="text-sm text-muted-foreground">
        Buying tickets? Go through the official event or team ticketing links on the{" "}
        <a
          href={STADIUM_WHATS_ON_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          stadium event page
        </a>{" "}
        for your event.
      </p>
    </div>
  </>
);

export default CowboysStadiumGuide;
