import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import FoundingPartnerCTA from "@/components/FoundingPartnerCTA";
import { Button } from "@/components/ui/button";
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
  CalendarDays,
  Car,
  Coffee,
  ExternalLink,
  MapPin,
  Music,
  Palette,
  ShoppingBasket,
  Sun,
  Ticket,
  Trophy,
  Umbrella,
} from "lucide-react";

const SITE = "https://www.townsvilleguide.com.au";
const PATH = "/events";
/** Official council events calendar — the authoritative source for current listings. */
const WHATS_ON_URL = "https://whatson.townsville.qld.gov.au/";

const TITLE = "Townsville Events | Festivals, Sport, Markets & What's On";
const DESCRIPTION =
  "Discover major Townsville events, festivals, sport, markets and family activities, plus where to check what's on during your visit.";

const EVENT_TYPES = [
  {
    icon: Trophy,
    name: "Sport",
    text: "Supercars, Cowboys and other rugby league fixtures, running and trail events, basketball and visiting national competitions. Fixtures and dates are set season by season, so always check the official source.",
  },
  {
    icon: Music,
    name: "Music & festivals",
    text: "Concerts, community festivals and cultural celebrations run through the year, with the outdoor programme concentrated in the cooler months.",
  },
  {
    icon: ShoppingBasket,
    name: "Markets",
    text: "Townsville has regular markets across the city and waterfront. Schedules, locations and seasonal breaks change, so check current listings before planning a morning around one.",
  },
  {
    icon: Palette,
    name: "Arts & culture",
    text: "Theatre, galleries, exhibitions, performances, talks and workshops, mostly around the CBD and the city's main venues.",
  },
  {
    icon: Baby,
    name: "Family events",
    text: "Library programmes, school-holiday activities, community days and family festivals appear regularly on the council calendar.",
  },
  {
    icon: Ticket,
    name: "Free events",
    text: "Council and community calendars regularly include free events, though some have paid or ticketed components alongside the free parts.",
  },
];

const VENUES = [
  {
    icon: Building2,
    name: "Queensland Country Bank Stadium",
    text: "The city's major sport and entertainment venue, on the edge of the CBD. Rugby league, other national fixtures and large concerts are held here. Fixtures change every season — check the venue or team for current dates.",
  },
  {
    icon: Sun,
    name: "The Strand",
    text: "The main outdoor and waterfront setting for festivals, markets and community gatherings, especially through the cooler months.",
    to: "/the-strand",
    linkText: "The Strand guide",
  },
  {
    icon: MapPin,
    name: "Riverway",
    text: "The western-suburbs community, family, cultural and outdoor event precinct, with lagoons, parkland, a library and a gallery in one place.",
    to: "/riverway",
    linkText: "Riverway guide",
  },
  {
    icon: Palette,
    name: "The CBD",
    text: "Arts venues, galleries, theatre and city events, and the easiest area to combine an event with dinner or a night out.",
    to: "/things-to-do",
    linkText: "Things to do",
  },
  {
    icon: MapPin,
    name: "Jezzine Barracks & North Ward",
    text: "Occasional community, commemorative and outdoor events on the headland, within walking distance of the northern Strand.",
    to: "/jezzine-barracks",
    linkText: "Jezzine Barracks guide",
  },
];

const COMBOS = [
  {
    name: "Friday night event + Strand Saturday morning",
    text: "An evening event, then an early walk, swim or breakfast on the waterfront before the heat builds.",
  },
  {
    name: "Stadium event + Castle Hill + dinner",
    text: "Sunrise or late-afternoon Castle Hill, an early dinner nearby, then walk to the stadium.",
  },
  {
    name: "Strand festival + Jezzine Barracks",
    text: "Pair a waterfront event with the headland walk at the northern end of The Strand.",
  },
  {
    name: "Riverway event + western-suburbs stop",
    text: "Combine a Riverway event with lunch or shopping at Willows on the way through.",
  },
  {
    name: "Event weekend + Magnetic Island day trip",
    text: "Keep one full day clear for the island rather than squeezing it around an event.",
  },
  {
    name: "Event weekend + a Paluma extra day",
    text: "Add a rainforest day if you have a spare day either side of the event.",
  },
];

const MISTAKES = [
  "Relying on last year's date for an annual event instead of the current confirmed date.",
  "Assuming a recurring event lands on the same weekend every year — many move.",
  "Not checking official event information again close to the date.",
  "Leaving accommodation until late for a major event weekend.",
  "Assuming parking and road arrangements are the same as a previous year.",
  "Treating an old event article or blog post as a live calendar.",
  "Planning an outdoor event day without checking the weather forecast.",
  "Packing too many attractions around a major event and enjoying none of them.",
  "Assuming every community event is completely free.",
  "Ignoring ticket, registration or entry requirements until arrival.",
  "Relying on old market times rather than the current schedule.",
];

const PATHWAYS = [
  { label: "Current listings", name: "What's On Townsville", href: WHATS_ON_URL },
  { label: "Sport", name: "Official fixtures", href: "https://www.cowboys.com.au/draw/" },
  { label: "Festivals", name: "What's On Townsville", href: WHATS_ON_URL },
  { label: "Markets", name: "What's On Townsville", href: WHATS_ON_URL },
  { label: "With kids", name: "Townsville with Kids", to: "/townsville-with-kids" },
  { label: "Free events", name: "Free Things to Do", to: "/guides/free-things" },
  { label: "Stadium event", name: "Where to stay", to: "/accommodation" },
  { label: "Strand event", name: "The Strand", to: "/the-strand" },
  { label: "Riverway event", name: "Riverway", to: "/riverway" },
  { label: "Event weekend", name: "Things to Do", to: "/things-to-do" },
  { label: "An extra day", name: "Magnetic Island day trip", to: "/guides/magnetic-island-day-trip" },
  { label: "Weather concerns", name: "Useful contacts", to: "/useful-contacts" },
];

const RELATED = [
  { to: "/things-to-do", name: "Things to Do in Townsville", text: "The main activity hub for filling the rest of an event weekend." },
  { to: "/accommodation", name: "Where to Stay in Townsville", text: "Which area suits your trip, and why it matters on event weekends." },
  { to: "/food", name: "Food in Townsville", text: "Dining areas that work well before or after an event." },
  { to: "/first-time-in-townsville", name: "First Time in Townsville", text: "Orientation if the event is your first visit to the city." },
  { to: "/townsville-in-one-day", name: "Townsville in One Day", text: "A tight plan for the day either side of an event." },
  { to: "/townsville-without-a-car", name: "Townsville Without a Car", text: "Ferries, buses and walkable areas around the main venues." },
  { to: "/townsville-with-kids", name: "Townsville with Kids", text: "Family planning for community events and school holidays." },
  { to: "/guides/free-things", name: "Free Things to Do", text: "Free options alongside free community events." },
  { to: "/the-strand", name: "The Strand", text: "The city's main waterfront event and festival setting." },
  { to: "/riverway", name: "Riverway", text: "The western-suburbs family and community event precinct." },
  { to: "/guides/beat-the-heat", name: "Beat the Heat", text: "How to handle outdoor events in hot conditions." },
  { to: "/guides/rainy-day-activities", name: "Rainy Day Activities", text: "Backup plans when an outdoor event is affected by weather." },
];

const faqs = [
  {
    q: "What events are held in Townsville?",
    a: "Townsville hosts major sporting weekends, festivals, markets, live music, arts and theatre programmes, community celebrations and family activities through the year. The mix is strongest across the dry season, when most outdoor events are scheduled.",
  },
  {
    q: "Where can I see what's on in Townsville now?",
    a: "The official What's On Townsville calendar is the authoritative source for current dates, times, venues and newly announced events. This page explains the event scene and how to plan around it; the calendar tells you exactly what is on while you are here.",
  },
  {
    q: "What are the biggest annual events in Townsville?",
    a: "Townsville regularly hosts a major Supercars weekend, rugby league fixtures including Cowboys home games at Queensland Country Bank Stadium, a large arts festival, sailing and community festivals, and regular markets. Dates are set year by year, so check the current official calendar or organiser for the next confirmed edition.",
  },
  {
    q: "When is the busiest event season in Townsville?",
    a: "The dry season is generally the busiest period, with the most outdoor events, festivals, sport and markets. Shoulder months either side also carry a solid programme.",
  },
  {
    q: "Are there free events in Townsville?",
    a: "Yes — council and community calendars regularly include free events, including markets, community days and outdoor activities. Some events are free to attend but have paid or ticketed components, so check the current event details before assuming.",
  },
  {
    q: "Are there family events in Townsville?",
    a: "Family festivals, library and school-holiday programmes, community events and family-friendly sporting fixtures appear regularly. Confirm age suitability, ticket requirements, start and finish times and wet-weather arrangements with the organiser.",
  },
  {
    q: "Are there markets in Townsville?",
    a: "Yes, Townsville has regular markets across the city and waterfront. Schedules, locations and seasonal breaks change, so check the current listings rather than an older article before planning your morning around one.",
  },
  {
    q: "Where are major events held in Townsville?",
    a: "Queensland Country Bank Stadium hosts major sport and large concerts, The Strand hosts waterfront festivals and markets, Riverway hosts community and family events, and the CBD covers arts, galleries and theatre. Some events are held at Magnetic Island or other venues around the region.",
  },
  {
    q: "Should I book accommodation early for a major event?",
    a: "Yes. Major event weekends can increase demand, and central accommodation near the venue tends to fill first. Book early and check cancellation terms in case your plans change.",
  },
  {
    q: "What should I do if an outdoor event is affected by rain?",
    a: "The event organiser is the authoritative source for changes and cancellations, so check their current communications and the weather forecast. Have an indoor backup ready — our rainy day guide covers the main options.",
  },
  {
    q: "Can I combine a Townsville event with Magnetic Island?",
    a: "Easily. The ferry runs from the Breakwater terminal near the CBD, so an event weekend can include a full island day. Keep the island to its own day rather than squeezing it around an event.",
  },
  {
    q: "Where should I check event dates before travelling?",
    a: "Check the official What's On Townsville calendar for general listings, and the specific organiser, team or venue for sporting fixtures and ticketed events. Do not rely on last year's dates or older articles.",
  },
];

const Events = () => (
  <>
    <SEOHead title={TITLE} description={DESCRIPTION} canonical={PATH} ogType="article" />
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: "Townsville Events, Festivals & What's On",
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
                { "@type": "ListItem", position: 3, name: "Townsville Events", item: `${SITE}${PATH}` },
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
        <CalendarDays className="w-4 h-4" aria-hidden="true" />
        Events planning hub
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Townsville Events, Festivals &amp; What's On
      </h1>

      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Townsville hosts major sporting weekends, festivals, markets, live music, arts events and
        family activities throughout the year. This guide helps you understand the event scene and
        plan a visit around it — while the official What's On Townsville calendar provides the
        latest dates and listings.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Event dates move from year to year, so nothing here is presented as a fixed schedule. Use
        this page to work out what kind of event weekend suits you and how to build a trip around
        it, then confirm the actual dates with the official calendar or the organiser.
      </p>

      <GuideQuickFacts className="mb-10" />

      {/* Primary official calendar CTA */}
      <section className="mb-12 rounded-xl border-2 border-primary/30 bg-primary/5 p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-3">What's On in Townsville Right Now?</h2>
        <p className="text-muted-foreground leading-relaxed mb-5">
          Event dates, venues and schedules change regularly. For the latest confirmed listings,
          check the official What's On Townsville calendar.
        </p>
        <Button asChild size="lg">
          <a href={WHATS_ON_URL} target="_blank" rel="noopener noreferrer">
            See What's On in Townsville Now
            <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
          </a>
        </Button>
      </section>

      {/* Events worth planning around */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Events worth planning a trip around</h2>
        <p className="text-muted-foreground mb-6">
          A handful of recurring events are big enough to shape a trip. These run regularly rather
          than on fixed dates, so treat them as a reason to check the current calendar early.
        </p>
        <div className="space-y-4">
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-primary" aria-hidden="true" /> Major motorsport
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Townsville regularly hosts a major Supercars weekend during the dry-season calendar,
              run on a street circuit near the city centre. It is the single busiest weekend of the
              year for accommodation. Check the current Supercars schedule before planning your
              trip.
            </p>
          </article>
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-primary" aria-hidden="true" /> Cowboys and major rugby
              league
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              North Queensland Cowboys home games and other major fixtures at Queensland Country
              Bank Stadium create strong event weekends, with the CBD noticeably busier. Fixtures
              are set season by season — check the{" "}
              <a
                href="https://www.cowboys.com.au/draw/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                official Cowboys draw
              </a>{" "}
              for current dates, and our{" "}
              <Link to="/cowboys-stadium-guide" className="text-primary hover:underline">
                stadium guide
              </Link>{" "}
              for getting there.
            </p>
          </article>
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Music className="w-4 h-4 text-primary" aria-hidden="true" /> Festivals and community
              events
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cultural festivals, music events, food events, arts programmes and community
              celebrations run through the year, concentrated in the cooler months. Programmes are
              announced season by season, so check the official calendar for what falls inside your
              dates.
            </p>
          </article>
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <ShoppingBasket className="w-4 h-4 text-primary" aria-hidden="true" /> Markets and
              waterfront events
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The Strand and the CBD host regular markets, community gatherings and waterfront
              events, mostly in the mornings or evenings rather than the middle of the day. Times
              and locations change, so check current listings before travelling for one.
            </p>
          </article>
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Palette className="w-4 h-4 text-primary" aria-hidden="true" /> Major arts and
              entertainment
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Theatre, touring concerts, exhibitions and performances run across the city's main
              venues and galleries. Programmes are released in blocks and sell separately, so check
              venue listings for what is scheduled during your visit.
            </p>
          </article>
        </div>
      </section>

      {/* Event categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Event types in Townsville</h2>
        <p className="text-muted-foreground mb-6">
          A quick way to work out what kind of event you are actually looking for before you open
          the calendar.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {EVENT_TYPES.map(({ icon: Icon, name, text }) => (
            <article key={name} className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
                <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                {name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Family plans work well alongside{" "}
          <Link to="/townsville-with-kids" className="text-primary hover:underline">
            Townsville with Kids
          </Link>
          , and free events pair naturally with{" "}
          <Link to="/guides/free-things" className="text-primary hover:underline">
            free things to do
          </Link>
          .
        </p>
      </section>

      {/* Season */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Event seasons in Townsville</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Sun className="w-4 h-4 text-primary" aria-hidden="true" /> Dry season
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Generally the busiest stretch of the calendar: outdoor events, festivals, sport,
              markets and waterfront activity all cluster here, helped by cooler, drier weather.
              Accommodation is in higher demand, particularly on major event weekends.
            </p>
          </article>
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Umbrella className="w-4 h-4 text-primary" aria-hidden="true" /> Wet season
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Events still run, with indoor venues, theatre, galleries and stadium events carrying
              more of the programme. Outdoor events are more weather-dependent, and significant
              weather can lead to changes or cancellations. Keep a{" "}
              <Link to="/guides/rainy-day-activities" className="text-primary hover:underline">
                rainy day plan
              </Link>{" "}
              handy and check{" "}
              <Link to="/useful-contacts" className="text-primary hover:underline">
                useful contacts
              </Link>{" "}
              for official weather and emergency information.
            </p>
          </article>
        </div>
      </section>

      {/* Venues */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Where events are held</h2>
        <p className="text-muted-foreground mb-6">
          Knowing the venue usually tells you where to stay, how to get there and what else to do
          around it.
        </p>
        <div className="space-y-4">
          {VENUES.map(({ icon: Icon, name, text, to, linkText }) => (
            <article key={name} className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
                <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                {name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {text}
                {to && (
                  <>
                    {" "}
                    <Link to={to} className="text-primary hover:underline">
                      {linkText}
                    </Link>
                    .
                  </>
                )}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Coming for a major event */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Coming for a major event?</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">Where to stay.</strong> Major event weekends
            increase demand, and central options near the venue tend to go first. Work out the area
            before the property — our{" "}
            <Link to="/accommodation" className="text-primary hover:underline">
              accommodation guide
            </Link>{" "}
            covers which part of town suits which kind of trip.
          </p>
          <p>
            <strong className="text-foreground">Where to eat.</strong> Central dining areas combine
            well with events, and booking is sensible on busy weekends. See the{" "}
            <Link to="/food" className="text-primary hover:underline">
              food guide
            </Link>
            .
          </p>
          <p>
            <strong className="text-foreground">Getting around.</strong> Most central venues are
            walkable from a central stay, and the ferry terminal is close to the CBD. See{" "}
            <Link to="/townsville-without-a-car" className="text-primary hover:underline">
              Townsville without a car
            </Link>
            .
          </p>
          <p>
            <strong className="text-foreground">What else to do.</strong> Fill the rest of the
            weekend from{" "}
            <Link to="/things-to-do" className="text-primary hover:underline">
              things to do
            </Link>
            , and add{" "}
            <Link to="/castle-hill" className="text-primary hover:underline">
              Castle Hill
            </Link>{" "}
            early or late in the day.
          </p>
          <p>
            <strong className="text-foreground">Staying longer.</strong> Start with{" "}
            <Link to="/first-time-in-townsville" className="text-primary hover:underline">
              first time in Townsville
            </Link>
            ,{" "}
            <Link to="/townsville-in-one-day" className="text-primary hover:underline">
              Townsville in one day
            </Link>{" "}
            or a{" "}
            <Link to="/guides/magnetic-island-day-trip" className="text-primary hover:underline">
              Magnetic Island day trip
            </Link>
            . With a spare day, a{" "}
            <Link to="/guides/paluma-day-trip" className="text-primary hover:underline">
              Paluma day trip
            </Link>{" "}
            works well.
          </p>
        </div>
      </section>

      {/* Combos */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Event weekend combinations</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {COMBOS.map((c) => (
            <article key={c.name} className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-1.5">{c.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Kids / free / transport / accommodation / dining */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Practical event planning</h2>
        <div className="space-y-4">
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Baby className="w-4 h-4 text-primary" aria-hidden="true" /> Events with kids
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Family festivals, community events, markets, sporting fixtures and children's
              programmes all appear regularly. Confirm age suitability, ticket requirements,
              wet-weather arrangements and start and finish times directly with the organiser. See{" "}
              <Link to="/townsville-with-kids" className="text-primary hover:underline">
                Townsville with kids
              </Link>
              .
            </p>
          </article>
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Ticket className="w-4 h-4 text-primary" aria-hidden="true" /> Free events
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Many community events and markets are free to attend, though some include paid
              activities or ticketed components. Always check the current event details rather than
              assuming. Pair them with{" "}
              <Link to="/guides/free-things" className="text-primary hover:underline">
                free things to do
              </Link>
              .
            </p>
          </article>
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Car className="w-4 h-4 text-primary" aria-hidden="true" /> Event transport and
              parking
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Major events can affect traffic, road access and parking near the venue, and public
              transport arrangements are sometimes adjusted for the occasion. Check event-specific
              transport information close to the date from the organiser or venue rather than
              relying on older articles. See{" "}
              <Link to="/townsville-without-a-car" className="text-primary hover:underline">
                Townsville without a car
              </Link>{" "}
              and{" "}
              <Link to="/useful-contacts" className="text-primary hover:underline">
                useful contacts
              </Link>
              .
            </p>
          </article>
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-primary" aria-hidden="true" /> Accommodation
              reality
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Demand rises around major events and central accommodation fills faster than
              suburban options. Book early if you are attending one, and check cancellation terms
              in case dates or plans shift. See the{" "}
              <Link to="/accommodation" className="text-primary hover:underline">
                accommodation guide
              </Link>
              .
            </p>
          </article>
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Coffee className="w-4 h-4 text-primary" aria-hidden="true" /> Eating around an event
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Restaurants are busier on major event weekends, especially in the central dining
              areas that suit a pre-event meal. Booking ahead is sensible, and hours vary by venue,
              so confirm directly. See the{" "}
              <Link to="/food" className="text-primary hover:underline">
                food guide
              </Link>
              .
            </p>
          </article>
        </div>
      </section>

      {/* Weather */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Weather and events</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
              <Sun className="w-4 h-4 text-primary" aria-hidden="true" /> Heat
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Outdoor events in warm conditions need water, sun protection, shade breaks and
              sensible timing — early or late is far easier than the middle of the day. See{" "}
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
              Outdoor schedules can change at short notice. The event organiser is the
              authoritative source for cancellations, so check their current communications
              alongside the forecast. Keep{" "}
              <Link to="/guides/rainy-day-activities" className="text-primary hover:underline">
                rainy day options
              </Link>{" "}
              and{" "}
              <Link to="/useful-contacts" className="text-primary hover:underline">
                useful contacts
              </Link>{" "}
              on hand.
            </p>
          </article>
        </div>
      </section>

      {/* Regular markets and community events */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-3">Regular markets and community events</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Beyond the headline events, Townsville has a steady background programme: markets, local
          music, community events, cultural celebrations, workshops and exhibitions. Most of these
          run on their own schedules, take seasonal breaks and change venue occasionally, which is
          exactly why we do not publish times here.
        </p>
        <div className="rounded-xl border bg-muted/40 p-5 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground max-w-xl">
            The official calendar carries current dates, times and venues for these events.
          </p>
          <Button asChild variant="default">
            <a href={WHATS_ON_URL} target="_blank" rel="noopener noreferrer">
              See What's On in Townsville Now
              <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </section>

      {/* Mistakes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-primary" aria-hidden="true" /> Common
          event-planning mistakes
        </h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-5">
          {MISTAKES.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </section>

      {/* Pathways */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Plan by event type</h2>
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
        <h2 className="text-2xl font-bold mb-4">Townsville events questions</h2>
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

export default Events;
