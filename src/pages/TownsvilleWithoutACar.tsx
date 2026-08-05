import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import { Card, CardContent } from "@/components/ui/card";
import {
  Footprints,
  CarTaxiFront,
  Bus,
  Ship,
  Plane,
  MapPin,
  AlertTriangle,
  ArrowRight,
  Sun,
} from "lucide-react";
import heroImage from "@/assets/the-strand-townsville.webp";

const SITE = "https://www.townsvilleguide.com.au";

const BEST_SUITED = [
  "Short stays",
  "First-time visitors",
  "Travellers staying centrally",
  "Visitors mainly interested in The Strand, Jezzine Barracks, the CBD or Magnetic Island",
  "People comfortable using taxis or rideshare when needed",
];

const AREAS = [
  {
    name: "North Ward and The Strand",
    points: [
      "One of the easiest areas for visitors without a car",
      "Waterfront walking along The Strand",
      "Cafés and casual dining close by",
      "Walking access to Jezzine Barracks",
      "Suitable for relaxed sightseeing",
      "Still requires transport for some attractions",
    ],
  },
  {
    name: "Townsville CBD",
    points: [
      "Useful for dining, events and central attractions",
      "Practical for the ferry terminal depending on the exact accommodation location",
      "Less beach-focused than North Ward",
      "Walking distances vary between streets and precincts",
    ],
  },
  {
    name: "Palmer Street and South Townsville",
    points: [
      "Useful for dining",
      "Reasonably close to parts of the CBD and ferry precinct",
      "Walking conditions depend on heat, luggage and the exact accommodation location",
    ],
  },
  {
    name: "Near the ferry terminal",
    points: [
      "Useful for visitors travelling to Magnetic Island",
      "Convenient for early ferry departures",
      "Not necessarily the best base for every Townsville attraction",
    ],
  },
];

const HARDER = [
  {
    name: "Castle Hill",
    text: "Taxi or rideshare may be possible, but return transport should be planned before heading up — do not assume a vehicle will be waiting at the summit.",
  },
  {
    name: "Riverway",
    text: "Sits away from the central visitor areas along the Ross River, so it involves a longer trip and a planned return.",
  },
  {
    name: "Billabong Sanctuary",
    text: "Located south of the city with limited direct transport; most visitors drive or join an organised tour.",
  },
  {
    name: "Paluma",
    text: "A range drive well outside the city with no practical public transport option for visitors.",
  },
  {
    name: "Little Crystal Creek",
    text: "Currently affected by a closure — see the guide before planning any visit, and do not travel while access remains restricted.",
    to: "/little-crystal-creek-townsville",
  },
  {
    name: "Regional beaches",
    text: "Northern and southern beaches are spread out, and services are not designed around sightseeing trips.",
  },
  {
    name: "Charters Towers",
    text: "A long inland day trip that realistically needs a car or an organised tour.",
  },
  {
    name: "Other regional day trips",
    text: "Distance, timing, weather and the need to return before services finish all make these difficult without private transport.",
  },
];

const PLAN = [
  { label: "Morning", text: "Walk The Strand and stop for breakfast." },
  { label: "Late morning", text: "Continue on foot to Jezzine Barracks." },
  { label: "Lunch", text: "Eat around North Ward, Gregory Street, The Strand or the CBD." },
  {
    label: "Afternoon",
    text: "Choose one central indoor attraction, relaxed waterfront time or a CBD activity.",
  },
  {
    label: "Evening",
    text: "Eat near your accommodation, or use a taxi or rideshare to reach another dining area.",
  },
];

const MISTAKES = [
  "Booking accommodation far from the places you actually want to visit",
  "Assuming every attraction has frequent public transport",
  "Underestimating heat and walking time",
  "Relying on rideshare without checking return availability",
  "Trying to include several regional attractions in a short stay",
  "Carrying luggage long distances between areas",
  "Not checking Sunday or public-holiday transport",
  "Failing to plan Magnetic Island transport in advance",
];

const RELATED = [
  { name: "First Time in Townsville", to: "/first-time-in-townsville" },
  { name: "Townsville in One Day", to: "/townsville-in-one-day" },
  { name: "The Strand", to: "/the-strand" },
  { name: "Jezzine Barracks", to: "/guides/jezzine-barracks" },
  { name: "Magnetic Island Day Trip", to: "/guides/magnetic-island-day-trip" },
  { name: "Townsville with Kids", to: "/townsville-with-kids" },
  { name: "Free Things to Do", to: "/guides/free-things" },
  { name: "Food and Dining", to: "/food" },
  { name: "Castle Hill", to: "/castle-hill" },
  { name: "Stinger Safety", to: "/guides/stinger-safety" },
];

const TITLE = "Townsville Without a Car: Complete Visitor Guide";
const DESCRIPTION =
  "Visiting Townsville without a car? Learn where to stay, what is walkable, how to use buses, taxis and ferries, and which attractions are harder to reach.";

const TownsvilleWithoutACar = () => {
  return (
    <>
      <SEOHead
        title={TITLE}
        description={DESCRIPTION}
        canonical={`${SITE}/townsville-without-a-car`}
        ogType="article"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Townsville Without a Car: What You Can See and How to Get Around",
            description: DESCRIPTION,
            author: { "@type": "Person", name: "Duncan Ross" },
            publisher: { "@type": "Organization", name: "Townsville Guide" },
            mainEntityOfPage: `${SITE}/townsville-without-a-car`,
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
              {
                "@type": "ListItem",
                position: 2,
                name: "Townsville Without a Car",
                item: `${SITE}/townsville-without-a-car`,
              },
            ],
          })}
        </script>
      </Helmet>

      {/* 1. Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="The Strand waterfront in Townsville, an easy area to explore on foot"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" />
        </div>
        <div className="relative container mx-auto max-w-4xl px-4 py-16 md:py-24 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
            Townsville Without a Car
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            You can enjoy parts of Townsville without hiring a car, particularly around The Strand,
            North Ward, the CBD and the ferry terminal. However, the city is spread out, and some
            attractions are much easier to reach by taxi, rideshare or private transport.
          </p>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
            The key is choosing the right place to stay and planning a simpler itinerary around the
            most walkable parts of the city.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-12 space-y-14">
        {/* 2. Quick answer */}
        <section aria-labelledby="quick-answer">
          <Card className="bg-muted/40 border-primary/30">
            <CardContent className="p-5 md:p-6">
              <h2 id="quick-answer" className="text-2xl md:text-3xl font-bold mb-3">
                Can You Visit Townsville Without a Car?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Yes, but the experience is easiest if you stay near The Strand, North Ward, the CBD
                or the ferry terminal. Walking, taxis and rideshare can cover many central
                attractions, while regional day trips and some suburban attractions are much harder
                without a car.
              </p>
              <h3 className="font-semibold text-foreground mt-5 mb-2">Best suited to</h3>
              <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
                {BEST_SUITED.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Quick facts */}
        <GuideQuickFacts />

        {/* 3. Where to stay */}
        <section aria-labelledby="where-to-stay">
          <h2 id="where-to-stay" className="text-2xl md:text-3xl font-bold mb-3">
            Where Should You Stay Without a Car?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            These are general area recommendations rather than accommodation endorsements. Walking
            conditions vary street by street, so check the exact location before booking.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {AREAS.map((a) => (
              <Card key={a.name} className="bg-muted/40 h-full">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                    {a.name}
                  </h3>
                  <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                    {a.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 4. Most walkable area */}
        <section aria-labelledby="walkable">
          <h2 id="walkable" className="text-2xl md:text-3xl font-bold mb-4">
            The Strand, North Ward and Jezzine Barracks
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            This is the most practical area for a largely car-free day. The waterfront, parks,
            cafés and Jezzine Barracks connect along one continuous coastal stretch, so you can
            spend most of a day here without arranging transport.
          </p>
          <ol className="space-y-2 text-muted-foreground leading-relaxed list-decimal pl-5">
            <li>Start around The Strand.</li>
            <li>Stop for breakfast or coffee.</li>
            <li>Continue toward Jezzine Barracks.</li>
            <li>Explore the waterfront, public art and historical areas.</li>
            <li>Return through North Ward for lunch or a rest.</li>
          </ol>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Read the{" "}
            <Link to="/the-strand" className="text-primary underline underline-offset-2">
              Strand guide
            </Link>
            ,{" "}
            <Link
              to="/guides/jezzine-barracks"
              className="text-primary underline underline-offset-2"
            >
              Jezzine Barracks guide
            </Link>{" "}
            and{" "}
            <Link to="/food" className="text-primary underline underline-offset-2">
              food and dining guide
            </Link>{" "}
            before planning the day.
          </p>
          <Card className="mt-5 bg-muted/40">
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sun className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                Walking in the heat
              </h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                <li>Daytime heat can be significant, particularly in the warmer months.</li>
                <li>Some exposed sections have limited shade.</li>
                <li>Carry water and use sun protection.</li>
                <li>
                  Check current swimming advice before entering the water — see the{" "}
                  <Link
                    to="/guides/stinger-safety"
                    className="text-primary underline underline-offset-2"
                  >
                    stinger safety guide
                  </Link>
                  .
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* 5. CBD and ferry precinct */}
        <section aria-labelledby="cbd">
          <h2 id="cbd" className="text-2xl md:text-3xl font-bold mb-4">
            CBD and Ferry Precinct
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Visitors staying centrally can combine central dining, selected museums, galleries or
            events, the ferry terminal and the nearby city-centre areas without needing a car.
            Check current opening hours and attraction availability before setting out, as these
            change from time to time.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Walking distances may look short on a map but can feel longer in hot or humid
            conditions. If you are heading across to Magnetic Island, the{" "}
            <Link
              to="/guides/magnetic-island-day-trip"
              className="text-primary underline underline-offset-2"
            >
              Magnetic Island day trip guide
            </Link>{" "}
            covers the ferry precinct in more detail.
          </p>
        </section>

        {/* 6. Magnetic Island */}
        <section aria-labelledby="maggie">
          <h2 id="maggie" className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
            <Ship className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            Magnetic Island Can Work Well Without Taking a Car
          </h2>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            <li>Passenger ferries depart from Townsville.</li>
            <li>Many visitors travel as foot passengers rather than taking a vehicle.</li>
            <li>Island buses meet many ferry services.</li>
            <li>Taxis, tours or other transport may also be available on the island.</li>
            <li>Plan your island transport before travelling rather than on arrival.</li>
            <li>Allow one full day for a first visit.</li>
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Timetables, services and transport availability change, so check current information
            with the ferry operator before you travel. The{" "}
            <Link
              to="/guides/magnetic-island-day-trip"
              className="text-primary underline underline-offset-2"
            >
              Magnetic Island day trip guide
            </Link>{" "}
            covers what to do once you are there.
          </p>
        </section>

        {/* 7. Transport options */}
        <section aria-labelledby="transport">
          <h2 id="transport" className="text-2xl md:text-3xl font-bold mb-6">
            Ways to Get Around
          </h2>

          <div className="space-y-5">
            <Card className="bg-muted/40">
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Footprints className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                  Walking
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">Best for:</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                  <li>The Strand</li>
                  <li>North Ward</li>
                  <li>Jezzine Barracks</li>
                  <li>Parts of the CBD</li>
                  <li>Selected waterfront and ferry areas</li>
                </ul>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  Heat, sun exposure and luggage all make walking harder than the distance
                  suggests. Plan longer walks for the cooler parts of the day.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/40">
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <CarTaxiFront className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                  Taxi and rideshare
                </h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                  <li>Useful for point-to-point trips.</li>
                  <li>
                    Useful for Castle Hill, the airport or moving between separated city areas.
                  </li>
                  <li>Availability and wait times can vary by time of day and location.</li>
                  <li>Check prices at the time of travel rather than assuming a fixed cost.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-muted/40">
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Bus className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                  Public buses
                </h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                  <li>Buses may help with selected routes.</li>
                  <li>Frequencies and routes may not suit every itinerary.</li>
                  <li>
                    Check the current{" "}
                    <a
                      href="https://translink.com.au/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2"
                    >
                      Translink journey planner
                    </a>{" "}
                    before travelling.
                  </li>
                  <li>
                    Do not assume every tourist attraction has a convenient direct service.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-muted/40">
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                  Tours and organised transport
                </h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                  <li>Useful for visitors who do not want to hire a car.</li>
                  <li>
                    May suit Magnetic Island, wildlife attractions or selected regional
                    experiences.
                  </li>
                  <li>Availability varies and should be checked in advance.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 8. Airport */}
        <section aria-labelledby="airport">
          <h2 id="airport" className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
            <Plane className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            Getting From Townsville Airport Without a Car
          </h2>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            <li>Taxis and rideshare are the most straightforward options for many visitors.</li>
            <li>Airport transfers may also be available through some accommodation providers.</li>
            <li>Check public transport options before arrival rather than on the day.</li>
            <li>
              The airport is relatively close to central Townsville, but walking is not a practical
              arrival option for most travellers with luggage.
            </li>
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our{" "}
            <Link to="/townsville-airport" className="text-primary underline underline-offset-2">
              Townsville Airport guide
            </Link>{" "}
            has more detail on arrivals and getting into the city.
          </p>
        </section>

        {/* 9. Harder without a car */}
        <section aria-labelledby="harder">
          <h2 id="harder" className="text-2xl md:text-3xl font-bold mb-3">
            Places That Are More Difficult Without a Car
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Distance, limited direct transport, timing, weather and the need to return before
            services finish all make these harder to reach without private transport.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {HARDER.map((h) => (
              <Card key={h.name} className="h-full">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-1">
                    {h.to ? (
                      <Link to={h.to} className="text-primary underline underline-offset-2">
                        {h.name}
                      </Link>
                    ) : (
                      h.name
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{h.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 10. One-day car-free plan */}
        <section aria-labelledby="car-free-day">
          <h2 id="car-free-day" className="text-2xl md:text-3xl font-bold mb-6">
            A Simple Car-Free Day in Townsville
          </h2>
          <Card className="bg-muted/40">
            <CardContent className="p-5 md:p-6">
              <dl className="space-y-3">
                {PLAN.map((p) => (
                  <div key={p.label} className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="font-semibold text-foreground sm:w-36 flex-shrink-0">
                      {p.label}
                    </dt>
                    <dd className="text-muted-foreground leading-relaxed">{p.text}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            This plan is intentionally simple. Trying to cross multiple parts of the city without a
            car can make the day slower and less enjoyable.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Our{" "}
            <Link
              to="/townsville-in-one-day"
              className="text-primary underline underline-offset-2"
            >
              Townsville in one day itinerary
            </Link>{" "}
            covers a fuller version of this day, although its Castle Hill section requires
            transport.
          </p>
        </section>

        {/* 11. Two-day option */}
        <section aria-labelledby="two-day">
          <h2 id="two-day" className="text-2xl md:text-3xl font-bold mb-4">
            A Two-Day Visit Without a Car
          </h2>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            <li>
              <strong className="text-foreground">Day 1:</strong> The Strand, Jezzine Barracks and
              central Townsville.
            </li>
            <li>
              <strong className="text-foreground">Day 2:</strong>{" "}
              <Link
                to="/guides/magnetic-island-day-trip"
                className="text-primary underline underline-offset-2"
              >
                Magnetic Island
              </Link>{" "}
              as a foot passenger.
            </li>
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            This is one of the strongest short-stay combinations for visitors without private
            transport, because both days are built around areas that work well on foot.
          </p>
        </section>

        {/* 12. Common mistakes */}
        <section aria-labelledby="mistakes">
          <h2 id="mistakes" className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            Common Mistakes Without a Car
          </h2>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            {MISTAKES.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </section>

        {/* 15. Related guides */}
        <section aria-labelledby="related">
          <h2 id="related" className="text-2xl md:text-3xl font-bold mb-6">
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
      </div>
    </>
  );
};

export default TownsvilleWithoutACar;
