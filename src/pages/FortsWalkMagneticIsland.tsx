import { Helmet } from "react-helmet";
import heroImage from "@/assets/magnetic-island-townsville.webp";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Info,
  Footprints,
  MapPin,
  Bus,
  Car,
  Mountain,
  Sun,
  Backpack,
  Landmark,
  Leaf,
  Camera,
  Baby,
  Accessibility,
  Dog,
  Bath,
  CloudRain,
  AlertTriangle,
  CalendarClock,
  Compass,
  Siren,
  HelpCircle,
  ListChecks,
  ArrowRight,
} from "lucide-react";

const SITE = "https://www.townsvilleguide.com.au";
const PAGE_PATH = "/guides/forts-walk-magnetic-island";
const PAGE_URL = `${SITE}${PAGE_PATH}`;
const PAGE_TITLE = "Forts Walk Magnetic Island: Distance, Difficulty and Koalas";
const PAGE_DESCRIPTION =
  "Plan the Forts Walk on Magnetic Island, including the 4 km route, Grade 3 difficulty, heat, koala spotting, bus access and current park alerts.";
const LAST_UPDATED = "5 August 2026";

const QPWS_FORTS_WALK =
  "https://parks.desi.qld.gov.au/parks/magnetic-island/about/walks/forts-walk";
const QPWS_ALERTS = "https://parks.desi.qld.gov.au/parks/magnetic-island/alerts";
const QPWS_PARK = "https://parks.desi.qld.gov.au/parks/magnetic-island";
const QPWS_SAFETY = "https://parks.desi.qld.gov.au/parks/magnetic-island/about/safety";
const QPWS_NATURE = "https://parks.desi.qld.gov.au/parks/magnetic-island/about/culture";
const TRANSLINK = "https://translink.com.au/";
const BOM = "http://www.bom.gov.au/qld/forecasts/townsville.shtml";

const FAQS = [
  {
    q: "How long is the Forts Walk?",
    a: "Queensland Parks lists the Forts Walk as approximately 4 kilometres return.",
  },
  {
    q: "How long does the Forts Walk take?",
    a: "Queensland Parks suggests allowing around two hours. Allow additional time for rests, photographs, the wartime structures and wildlife spotting, and more again in hot weather.",
  },
  {
    q: "Is the Forts Walk difficult?",
    a: "It is classified as a Grade 3 walking track, with slopes, steps, uneven surfaces and exposed sections. For regular walkers in cooler conditions it may feel moderate. For visitors unused to tropical heat, uneven tracks or climbing, it may feel considerably harder.",
  },
  {
    q: "Can you see koalas on the Forts Walk?",
    a: "Koalas may be seen resting in eucalypt branches along the route, but sightings are never guaranteed. Look quietly, keep a respectful distance, and never touch, feed, disturb or give water to a wild koala.",
  },
  {
    q: "Can children do the Forts Walk?",
    a: "It depends on age, walking experience, fitness and the weather. The track includes uneven and exposed sections, so families should carry extra water, allow more time and supervise children closely. Prams are not suitable for the walking track.",
  },
  {
    q: "Can you reach the Forts Walk by bus?",
    a: "Yes. Translink Route 250 serves Magnetic Island and there is a stop near the Forts area. Check the current journey planner for stop details and confirm your return service before you start walking.",
  },
  {
    q: "Are dogs allowed on the Forts Walk?",
    a: "No. The walk is within Magnetic Island National Park, where domestic animals are not permitted, including leashed dogs.",
  },
  {
    q: "Is the Forts Walk currently open?",
    a: "Track access can change because of weather, maintenance, fire management or other park operations. A current alert affects Route 2 between Forts Junction and Radical Bay until 1 November 2026, which is a separate connecting route. Always check the latest Queensland Parks alerts for Magnetic Island before travelling.",
  },
  {
    q: "Is there drinking water at the start?",
    a: "Do not rely on drinking water being available at the walk. Bring enough before arriving.",
  },
];

const CHECKLIST = [
  "Check the current Queensland Parks alerts for Magnetic Island",
  "Check the weather forecast",
  "Confirm bus, car and return-ferry plans",
  "Carry enough water for the whole walk",
  "Wear suitable, supportive footwear",
  "Take sun protection",
  "Allow at least the recommended walking time",
  "Tell someone your plan",
  "Do not enter closed tracks",
];

const MISTAKES = [
  "Starting during the peak heat of the day",
  "Carrying too little water",
  "Wearing unsuitable footwear",
  "Assuming koala sightings are guaranteed",
  "Underestimating the return walk",
  "Forgetting bus or ferry timing",
  "Adding too many other island stops to the same day",
  "Relying on old closure information",
  "Entering connecting tracks without checking current alerts",
  "Treating a Grade 3 track like a flat waterfront walk",
];

const BRING = [
  "Adequate drinking water",
  "Supportive walking shoes",
  "A hat",
  "Sunscreen",
  "Light, weather-appropriate clothing",
  "A charged phone",
  "Insect repellent where appropriate",
  "A small snack",
  "Ferry, bus or return-transport information",
  "Any essential medication",
];

const RELATED = [
  { name: "Magnetic Island Day Trip", to: "/guides/magnetic-island-day-trip" },
  { name: "Magnetic Island Ferry Guide", to: "/guides/magnetic-island-ferry" },
  { name: "Beat the Heat", to: "/guides/beat-the-heat" },
  { name: "Townsville Without a Car", to: "/townsville-without-a-car" },
  { name: "Townsville with Kids", to: "/townsville-with-kids" },
  { name: "Accessible Townsville", to: "/accessible-townsville" },
  { name: "Dog-Friendly Townsville", to: "/dog-friendly" },
  { name: "Rainy Day Activities", to: "/guides/rainy-day-activities" },
  { name: "Walking Castle Hill", to: "/guides/walking-castle-hill" },
];

const Ext = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
    {children}
  </a>
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
    {items.map((i) => (
      <li key={i}>{i}</li>
    ))}
  </ul>
);

const H2 = ({
  id,
  icon: Icon,
  children,
}: {
  id: string;
  icon: typeof Info;
  children: React.ReactNode;
}) => (
  <h2
    id={id}
    className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
  >
    <Icon className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
    {children}
  </h2>
);

const FortsWalkMagneticIsland = () => {
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
            headline: "Forts Walk Magnetic Island: Complete Walking Guide",
            description: PAGE_DESCRIPTION,
            author: { "@type": "Person", name: "Duncan Ross" },
            publisher: { "@type": "Organization", name: "Townsville Guide" },
            mainEntityOfPage: PAGE_URL,
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
                name: "Magnetic Island Day Trip",
                item: `${SITE}/guides/magnetic-island-day-trip`,
              },
              { "@type": "ListItem", position: 3, name: "Forts Walk Magnetic Island", item: PAGE_URL },
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

      <article className="container mx-auto max-w-4xl px-4 py-10 md:py-14">
        <div className="space-y-12">
          {/* 1. Hero */}
          <header className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">
              Forts Walk Magnetic Island
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Forts Walk is one of Magnetic Island's best-known walking experiences, combining
              World War II fortifications, elevated island views and the chance to see wild koalas.
              The official route is approximately 4 kilometres return and Queensland Parks
              recommends allowing around two hours.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The walk is exposed, can become very hot and may be affected by temporary park
              closures, so check current conditions and carry enough water before setting out.
            </p>
            <p className="text-sm text-muted-foreground">Updated {LAST_UPDATED}</p>
            <img
              src={heroImage}
              alt="Yachts moored at Nelly Bay marina on Magnetic Island, with the island's wooded hills rising behind"
              className="rounded-xl shadow-lg w-full h-[280px] md:h-[440px] object-cover"
              width={1600}
              height={900}
              loading="eager"
              decoding="async"
            />
          </header>

          {/* 2. Park alert notice */}
          <Alert>
            <Info className="h-4 w-4" aria-hidden="true" />
            <AlertTitle>Check Current Park Alerts</AlertTitle>
            <AlertDescription>
              <p className="mb-2">
                Walking-track access can change because of severe weather, maintenance,
                fire-management work or other park operations. A current alert affects Route 2
                between Forts Junction and Radical Bay until 1 November 2026. This is separate from
                the main Forts Walk, but visitors should check the latest Queensland Parks alerts
                before travelling.
              </p>
              <p className="text-sm">
                Alert details are temporary and dates can change. This note reflects information
                reviewed on {LAST_UPDATED}.
              </p>
              <div className="flex flex-wrap gap-3 mt-3">
                <Button asChild variant="outline" size="sm">
                  <a href={QPWS_FORTS_WALK} target="_blank" rel="noopener noreferrer">
                    Official Forts Walk page
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href={QPWS_ALERTS} target="_blank" rel="noopener noreferrer">
                    Magnetic Island park alerts
                  </a>
                </Button>
              </div>
            </AlertDescription>
          </Alert>

          {/* 3. Quick facts */}
          <GuideQuickFacts />

          {/* 4. Overview */}
          <section className="space-y-4" aria-labelledby="overview">
            <H2 id="overview" icon={Footprints}>
              Forts Walk at a Glance
            </H2>
            <Bullets
              items={[
                "It is a return walk from the Forts Junction area, following the same route back to the start",
                "The official distance is approximately 4 kilometres return",
                "Queensland Parks suggests allowing about two hours",
                "It is classified as a Grade 3 walking track",
                "Conditions include slopes, steps, uneven surfaces and exposed sections",
                "Allow additional time for rests, viewpoints, the wartime structures and wildlife spotting",
              ]}
            />
            <p className="text-muted-foreground leading-relaxed">
              Two hours is a suggested allowance rather than a guaranteed completion time. Heat,
              group pace, photography stops and time spent looking for koalas all extend the walk,
              and this is not a flat waterfront stroll.
            </p>
          </section>

          {/* 5. Start point */}
          <section className="space-y-4" aria-labelledby="start">
            <H2 id="start" icon={MapPin}>
              Where Does the Forts Walk Start?
            </H2>
            <Bullets
              items={[
                "The walk begins at or near Forts Junction",
                "Forts Junction is a National Park access hub where several routes meet",
                "Follow road signage, park maps and current on-site signs",
                "Visitors arriving by bus should confirm the correct Route 250 stop before travelling",
                "Visitors driving should follow the current parking signs at the site",
                "Do not confuse the start point with Horseshoe Bay or the Nelly Bay ferry terminal",
              ]}
            />
            <p className="text-muted-foreground leading-relaxed">
              Check the{" "}
              <Ext href={QPWS_PARK}>official Queensland Parks Magnetic Island information</Ext> for
              Forts Junction access, and plan your journey with{" "}
              <Ext href={TRANSLINK}>Translink Route 250 journey planning</Ext>.
            </p>
          </section>

          {/* 6. Bus */}
          <section className="space-y-4" aria-labelledby="bus">
            <H2 id="bus" icon={Bus}>
              Reaching the Forts Walk by Bus
            </H2>
            <Bullets
              items={[
                "Translink Route 250 serves Magnetic Island",
                "A stop is available near the Forts area",
                "Check the current journey planner and stop information before travelling",
                "Service frequency varies through the day and week",
                "Plan your return bus before starting the walk",
                "Allow enough time to reach the ferry terminal later in the day",
              ]}
            />
            <p className="text-muted-foreground leading-relaxed">
              Buses and ferries are operated separately, so do not assume every bus meets every
              ferry. See the{" "}
              <Link to="/guides/magnetic-island-day-trip" className="text-primary hover:underline">
                Magnetic Island Day Trip guide
              </Link>
              , the{" "}
              <Link to="/guides/magnetic-island-ferry" className="text-primary hover:underline">
                Magnetic Island Ferry Guide
              </Link>{" "}
              and{" "}
              <Link to="/townsville-without-a-car" className="text-primary hover:underline">
                Townsville Without a Car
              </Link>{" "}
              for the wider transport picture.
            </p>
          </section>

          {/* 7. Car */}
          <section className="space-y-4" aria-labelledby="car">
            <H2 id="car" icon={Car}>
              Driving to Forts Junction
            </H2>
            <Bullets
              items={[
                "The start can be reached by conventional vehicle",
                "Parking availability can vary and is not guaranteed",
                "Follow current signs and avoid blocking access, gates or passing places",
                "Busy periods, holidays and weekends can make parking more difficult",
                "Do not leave valuables visible in your vehicle",
                "Check current road, parking and access conditions before travelling",
              ]}
            />
          </section>

          {/* 8. Difficulty */}
          <section className="space-y-4" aria-labelledby="difficulty">
            <H2 id="difficulty" icon={Mountain}>
              How Difficult Is the Forts Walk?
            </H2>
            <p className="text-muted-foreground leading-relaxed">
              The route is a Grade 3 walking track. In practical terms, that usually means:
            </p>
            <Bullets
              items={[
                "Some bushwalking experience is helpful",
                "Surfaces may be uneven in places",
                "Slopes and steps are present along the route",
                "The track is not fully paved",
                "Heat can make the walk feel considerably harder",
                "Suitable, supportive footwear is recommended",
                "Walk at a pace that suits your fitness, and rest in shade where you can",
              ]}
            />
            <p className="text-muted-foreground leading-relaxed">
              For regular walkers in cooler conditions, the route may feel moderate. For visitors
              unused to tropical heat, uneven tracks or climbing, it may feel considerably harder.
            </p>
          </section>

          {/* 9. Heat */}
          <section className="space-y-4" aria-labelledby="heat">
            <H2 id="heat" icon={Sun}>
              Heat Is the Main Practical Risk
            </H2>
            <Bullets
              items={[
                "The route has exposed sections with little cover",
                "Shade is not continuous along the walk",
                "Townsville and Magnetic Island heat can make the climb significantly harder",
                "Carry sufficient water for the whole return walk",
                "Wear sun protection, including a hat and sunscreen",
                "Avoid the hottest part of the day",
                "Turn back if conditions become unsuitable — the walk will still be there another day",
                "Do not rely on water being available along the track",
              ]}
            />
            <p className="text-muted-foreground leading-relaxed">
              For more on managing tropical conditions, read{" "}
              <Link to="/guides/beat-the-heat" className="text-primary hover:underline">
                Beat the Heat
              </Link>
              .
            </p>
          </section>

          {/* 10. What to bring */}
          <section className="space-y-4" aria-labelledby="bring">
            <H2 id="bring" icon={Backpack}>
              What to Take
            </H2>
            <Bullets items={BRING} />
            <p className="text-muted-foreground leading-relaxed">
              No specialist expedition equipment is needed, but please carry out all rubbish,
              including food scraps.
            </p>
          </section>

          {/* 11. History */}
          <section className="space-y-4" aria-labelledby="history">
            <H2 id="history" icon={Landmark}>
              The Fortifications and Wartime History
            </H2>
            <Bullets
              items={[
                "The fortifications date from the Second World War",
                "The island formed part of Townsville's coastal defence network",
                "Surviving structures include concrete military remains and observation positions",
                "The fortifications are listed on the Queensland Heritage Register",
                "Stay on recognised paths and do not climb on unsafe structures",
                "Heritage features must not be damaged, marked or removed",
              ]}
            />
            <p className="text-muted-foreground leading-relaxed">
              Background on the island's{" "}
              <Ext href={QPWS_NATURE}>nature, culture and history</Ext> is published by Queensland
              Parks.
            </p>
          </section>

          {/* 12. Koalas */}
          <section className="space-y-4" aria-labelledby="koalas">
            <H2 id="koalas" icon={Leaf}>
              Looking for Koalas
            </H2>
            <Bullets
              items={[
                "Koalas may be seen in trees along the Forts Walk",
                "Sightings are possible but never guaranteed",
                "Look carefully into eucalypt branches, especially in forks and shaded limbs",
                "Remain quiet and let other walkers pass",
                "Keep a respectful distance and do not crowd an animal",
                "Never touch, feed or disturb a koala",
                "Never give a wild koala water",
                "A koala on the ground is not automatically in distress",
                "If an animal appears injured or in immediate danger, contact an appropriate wildlife service rather than intervening",
              ]}
            />
          </section>

          {/* 13. Views */}
          <section className="space-y-4" aria-labelledby="views">
            <H2 id="views" icon={Camera}>
              Views and Photography
            </H2>
            <Bullets
              items={[
                "Elevated viewpoints can provide views across Magnetic Island and the surrounding water",
                "Weather, haze and cloud affect visibility on any given day",
                "Stopping for photographs increases the time the walk takes",
                "Stay well clear of unsafe edges and unstable structures",
                "Sunrise and late-afternoon light may be attractive, but low-light walking requires additional care",
                "Do not plan a tight return journey around a perfect sunset",
              ]}
            />
          </section>

          {/* 14. Children */}
          <section className="space-y-4" aria-labelledby="children">
            <H2 id="children" icon={Baby}>
              Is the Forts Walk Suitable for Children?
            </H2>
            <Bullets
              items={[
                "Suitability depends on age, walking experience, fitness and the weather",
                "The route includes uneven and exposed sections",
                "Younger children may find the full walk tiring",
                "Close supervision is required near roads, slopes and fortifications",
                "Families should carry extra water and allow additional time",
                "A shorter island activity may be more suitable during extreme heat",
                "Prams are not suitable for the full walking track",
              ]}
            />
            <p className="text-muted-foreground leading-relaxed">
              For alternatives and family planning, see{" "}
              <Link to="/townsville-with-kids" className="text-primary hover:underline">
                Townsville with Kids
              </Link>
              .
            </p>
          </section>

          {/* 15. Accessibility */}
          <section className="space-y-4" aria-labelledby="accessibility">
            <H2 id="accessibility" icon={Accessibility}>
              Accessibility
            </H2>
            <Bullets
              items={[
                "The Grade 3 track is not suitable for all mobility levels",
                "It contains uneven surfaces, slopes and steps",
                "Wheelchair and pram access should not be assumed",
                "Visitors with mobility limitations may still be able to use parts of the Forts Junction area, subject to current conditions",
                "Check individual transport, parking and facility arrangements in advance",
              ]}
            />
            <p className="text-muted-foreground leading-relaxed">
              See{" "}
              <Link to="/accessible-townsville" className="text-primary hover:underline">
                Accessible Townsville
              </Link>{" "}
              for wider access information.
            </p>
          </section>

          {/* 16. Dogs */}
          <section className="space-y-4" aria-labelledby="dogs">
            <H2 id="dogs" icon={Dog}>
              Dogs Are Not Permitted
            </H2>
            <Bullets
              items={[
                "The walk is within Magnetic Island National Park",
                "Domestic animals are not permitted in the national park",
                "This applies even when dogs are leashed",
                "Visitors travelling with a dog need an alternative activity, and should confirm ferry and island rules separately",
              ]}
            />
            <p className="text-muted-foreground leading-relaxed">
              See{" "}
              <Link to="/dog-friendly" className="text-primary hover:underline">
                Dog-Friendly Townsville
              </Link>{" "}
              for places that do welcome dogs.
            </p>
          </section>

          {/* 17. Facilities */}
          <section className="space-y-4" aria-labelledby="facilities">
            <H2 id="facilities" icon={Bath}>
              Facilities Before the Walk
            </H2>
            <Bullets
              items={[
                "Toilets: check the current park map and facilities information before travelling",
                "Drinking water: do not rely on drinking water being available at the walk. Bring enough before arriving",
                "Parking: available around Forts Junction, subject to current signs and availability",
                "Information signs: follow current on-site signage and track markers",
                "Food: the nearest options are in the island villages, such as Horseshoe Bay, Arcadia and Nelly Bay — not at the walk itself",
              ]}
            />
          </section>

          {/* 18. Weather */}
          <section className="space-y-4" aria-labelledby="weather">
            <H2 id="weather" icon={CloudRain}>
              Weather and Track Conditions
            </H2>
            <Bullets
              items={[
                "Heavy rain can affect track surfaces and make footing slippery",
                "Severe weather may trigger track or park closures",
                "Strong sun and humidity remain relevant even after rain",
                "Exposed viewpoints are unsuitable during thunderstorms",
                "Check Bureau of Meteorology forecasts and current park alerts before setting out",
                "Do not enter closed areas",
              ]}
            />
            <p className="text-muted-foreground leading-relaxed">
              Check the <Ext href={BOM}>Townsville forecast</Ext> and, if the weather rules the walk
              out, see{" "}
              <Link to="/guides/rainy-day-activities" className="text-primary hover:underline">
                Rainy Day Activities
              </Link>
              .
            </p>
          </section>

          {/* 19. Closures */}
          <section className="space-y-4" aria-labelledby="closures">
            <H2 id="closures" icon={AlertTriangle}>
              Forts Walk and Nearby Track Closures
            </H2>
            <Bullets
              items={[
                "The main Forts Walk is a specific route of approximately 4 kilometres return",
                "Other trails connect through Forts Junction",
                "A closure affecting a connecting route does not automatically mean the Forts Walk is closed",
                "As of the current review, Route 2 between Forts Junction and Radical Bay has a temporary closure listed until 1 November 2026",
                "Check the current alert before travelling, because dates and details can change",
              ]}
            />
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline" size="sm">
                <a href={QPWS_ALERTS} target="_blank" rel="noopener noreferrer">
                  Current Magnetic Island park alerts
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href={QPWS_FORTS_WALK} target="_blank" rel="noopener noreferrer">
                  Official Forts Walk information
                </a>
              </Button>
            </div>
          </section>

          {/* 20. Day trip */}
          <section className="space-y-4" aria-labelledby="daytrip">
            <H2 id="daytrip" icon={CalendarClock}>
              How to Fit the Forts Walk Into a Day Trip
            </H2>
            <ol className="space-y-2 text-muted-foreground leading-relaxed list-decimal pl-5">
              <li>Travel to Magnetic Island early enough for a full day.</li>
              <li>Reach Forts Junction during the cooler part of the day.</li>
              <li>Allow approximately two hours or more for the walk.</li>
              <li>Choose one nearby bay or village for lunch and the afternoon.</li>
              <li>Allow enough time to return to Nelly Bay for your chosen ferry.</li>
            </ol>
            <p className="text-muted-foreground leading-relaxed">
              Do not attempt the Forts Walk, several distant bays, long snorkelling stops and a
              tight final-ferry connection all in the same day. See the{" "}
              <Link to="/guides/magnetic-island-day-trip" className="text-primary hover:underline">
                Magnetic Island Day Trip guide
              </Link>{" "}
              for a realistic full-day structure.
            </p>
          </section>

          {/* 21. Nearby */}
          <section className="space-y-4" aria-labelledby="nearby">
            <H2 id="nearby" icon={Compass}>
              What to Visit Afterwards
            </H2>
            <Bullets
              items={[
                "Horseshoe Bay",
                "Alma Bay",
                "Arcadia",
                "Geoffrey Bay",
                "Nelly Bay",
              ]}
            />
            <p className="text-muted-foreground leading-relaxed">
              Pick one rather than trying to see them all. The best choice depends on whether you
              have bus or car transport, the weather, how much time is left, swimming conditions on
              the day and your return-ferry plans.
            </p>
          </section>

          {/* 22. Emergency */}
          <section className="space-y-4" aria-labelledby="emergency">
            <H2 id="emergency" icon={Siren}>
              If Something Goes Wrong
            </H2>
            <Bullets
              items={[
                "Call 000 in an emergency",
                "Remain on marked routes",
                "Note nearby signs or track markers so you can describe your location",
                "Conserve phone battery",
                "Tell someone your planned route and expected return time",
                "Carry enough water",
                "Do not continue into a closed area",
                "Do not rely on mobile reception being perfect everywhere on the track",
              ]}
            />
          </section>

          {/* 23. Mistakes */}
          <section className="space-y-4" aria-labelledby="mistakes">
            <H2 id="mistakes" icon={AlertTriangle}>
              Common Forts Walk Mistakes
            </H2>
            <Bullets items={MISTAKES} />
          </section>

          {/* 24. FAQ */}
          <section className="space-y-4" aria-labelledby="faq">
            <H2 id="faq" icon={HelpCircle}>
              Forts Walk FAQ
            </H2>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <Card key={f.q}>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* 25. Checklist */}
          <section className="space-y-4" aria-labelledby="checklist">
            <H2 id="checklist" icon={ListChecks}>
              Quick Planning Checklist
            </H2>
            <Card>
              <CardContent className="p-5">
                <p className="text-muted-foreground mb-3">Before starting the walk:</p>
                <Bullets items={CHECKLIST} />
              </CardContent>
            </Card>
          </section>

          {/* Related */}
          <section className="space-y-4" aria-labelledby="related">
            <h2 id="related" className="text-2xl md:text-3xl font-bold text-foreground">
              Related Townsville Guides
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
      </article>
    </>
  );
};

export default FortsWalkMagneticIsland;
