import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CloudRain,
  CloudDrizzle,
  CloudLightning,
  Landmark,
  BookOpen,
  Image as ImageIcon,
  Film,
  ShoppingBag,
  Ship,
  Car,
  Baby,
  Coffee,
  AlertTriangle,
  Backpack,
  ListChecks,
  Compass,
  Sun,
  ExternalLink,
} from "lucide-react";

const SITE = "https://www.townsvilleguide.com.au";
const PAGE_URL = `${SITE}/guides/rainy-day-activities`;

const faqs: { q: string; a: string }[] = [
  {
    q: "What can you do in Townsville when it rains?",
    a: "Plenty. Queensland Museum Tropics is the strongest indoor option, and the CityLibraries, council galleries, the cinema, shopping centres and the CBD café strip all work well in steady rain. In passing showers you can often still walk parts of The Strand, visit Jezzine Barracks or drive to the Castle Hill lookout between bursts of rain.",
  },
  {
    q: "What is the best indoor attraction in Townsville?",
    a: "Queensland Museum Tropics in the CBD is the best genuinely weatherproof attraction. It covers tropical Queensland, reef and rainforest themes and regional maritime history, and it easily fills several hours. Check current exhibitions, entry costs and opening information before you visit.",
  },
  {
    q: "Is Queensland Museum Tropics good for children?",
    a: "Yes. It suits both adults and children, with interactive displays that hold younger visitors' attention and enough content for older children and teenagers. It is centrally located, air-conditioned and easy to reach without a car.",
  },
  {
    q: "Is Reef HQ open on rainy days?",
    a: "No. The Great Barrier Reef Aquarium, formerly known as Reef HQ, is closed for redevelopment and is not currently available as a rainy-day attraction. Check the official aquarium and marine park authority information for redevelopment and reopening updates.",
  },
  {
    q: "Can you visit The Strand when it rains?",
    a: "In light or passing rain, yes. Shorter walks, café stops and moving between sheltered areas all work, and showers often clear within the hour. Avoid swimming during thunderstorms or when conditions look unsafe, and leave the foreshore during severe weather.",
  },
  {
    q: "Should you walk Castle Hill in wet weather?",
    a: "Take more care than usual. Driving to the lookout can still be reasonable in light rain if roads are open and visibility is adequate, but the walking tracks become slippery, visibility drops and humidity stays high. Postpone exposed walks if conditions deteriorate or severe-weather advice is active.",
  },
  {
    q: "Is Magnetic Island worth visiting in the rain?",
    a: "A little rain does not automatically mean cancelling. Reconsider when storms are forecast, ferry operators issue notices, visibility is poor, tracks or roads are affected, or the day would be spent almost entirely outdoors. On those days a Townsville-based indoor day is often a better use of your time.",
  },
  {
    q: "Is Paluma safe during heavy rain?",
    a: "Paluma, Little Crystal Creek, Big Crystal Creek and other creek and waterfall spots should be avoided during or immediately after significant rainfall unless you have checked current conditions. Water levels change quickly, rocks become slippery, debris moves downstream, and the mountain road and park areas can be closed.",
  },
  {
    q: "What can families do indoors in Townsville?",
    a: "Queensland Museum Tropics, the CityLibraries, the cinema, currently operating indoor play or activity venues, and a shopping-centre meal or browse all work well. Outdoor water play such as the Strand Water Park or Riverway is not a reliable wet-weather option, because those facilities can close in storms and severe weather.",
  },
  {
    q: "Are there free rainy-day activities in Townsville?",
    a: "Yes, though fewer than on a sunny day. Libraries, council galleries when entry is free, free exhibitions, covered CBD browsing, shopping centres and short walks between showers are the realistic free options.",
  },
  {
    q: "Is Townsville safe to drive around in heavy rain?",
    a: "Drive only if you need to. Slow down, increase your following distance, use headlights when visibility drops, and watch for standing water. Never drive through floodwater, and do not assume a familiar road is safe. Check Queensland Traffic and the Townsville Disaster Dashboard before travelling.",
  },
  {
    q: "What should I do if severe weather is forecast?",
    a: "Treat it as a safety day rather than a sightseeing day. Check Bureau of Meteorology warnings and the Townsville Disaster Dashboard, stay somewhere safe, minimise travel, keep devices charged, follow your accommodation's advice, and postpone sightseeing until conditions improve.",
  },
];

const relatedGuides: { to: string; title: string; blurb: string }[] = [
  { to: "/townsville-with-kids", title: "Townsville With Kids", blurb: "Family planning hub, including indoor and wet-weather options." },
  { to: "/guides/free-things", title: "Free Things to Do", blurb: "Free and low-cost ideas, including a few that work under cover." },
  { to: "/guides/beat-the-heat", title: "Beat the Heat", blurb: "Hot-weather planning — useful when the rain clears and humidity spikes." },
  { to: "/the-strand", title: "The Strand", blurb: "The full foreshore guide: facilities, swimming and walking routes." },
  { to: "/castle-hill", title: "Castle Hill", blurb: "Lookouts, driving access and what to expect at the summit." },
  { to: "/guides/walking-castle-hill", title: "Walking Castle Hill", blurb: "Track-by-track detail, difficulty and conditions advice." },
  { to: "/townsville-without-a-car", title: "Townsville Without a Car", blurb: "Getting around the CBD and North Ward on foot and by bus." },
  { to: "/townsville-in-one-day", title: "Townsville in One Day", blurb: "A realistic single-day itinerary you can adapt around weather." },
  { to: "/guides/magnetic-island-day-trip", title: "Magnetic Island Day Trip", blurb: "Planning the island day, including when to reconsider." },
  { to: "/guides/paluma-day-trip", title: "Paluma Day Trip", blurb: "The mountain day trip, road conditions and current access." },
  { to: "/first-time-in-townsville", title: "First Time in Townsville", blurb: "Orientation for first-time visitors planning their days." },
  { to: "/reef-hq-townsville", title: "Reef HQ Status", blurb: "Closure, redevelopment and what to visit instead." },
];

const RainyDayActivities = () => (
  <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
    <SEOHead
      title="Things to Do in Townsville When It Rains | Rainy Day Guide"
      description="Discover what to do in Townsville on a rainy day, from museums and family activities to wet-weather itineraries, safety advice and severe-weather planning."
      canonical="/guides/rainy-day-activities"
      ogType="article"
    />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Article",
            headline: "Things to Do in Townsville on a Rainy Day",
            description:
              "Discover what to do in Townsville on a rainy day, from museums and family activities to wet-weather itineraries, safety advice and severe-weather planning.",
            mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
            author: { "@type": "Person", name: "Duncan Ross" },
            publisher: { "@type": "Organization", name: "Townsville Guide" },
            dateModified: "2026-08-07",
            inLanguage: "en-AU",
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
              { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE}/things-to-do` },
              { "@type": "ListItem", position: 3, name: "Rainy Day in Townsville", item: PAGE_URL },
            ],
          },
          {
            "@type": "FAQPage",
            mainEntity: faqs.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          },
        ],
      })}</script>
    </Helmet>

    <h1 className="text-4xl font-bold mb-4">Things to Do in Townsville on a Rainy Day</h1>

    <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
      <p>
        Rain in Townsville rarely looks the same two days running, and the right plan depends
        entirely on the kind of rain you have. A passing shower does not necessarily ruin the day:
        showers often clear within the hour, and a coffee stop or a museum visit is usually enough
        to wait one out. Steady rain is different — that is the day to lean on indoor and sheltered
        activities and accept a slower pace. Heavy rain, flooding or severe weather needs a
        different approach again, built around official advice, safety and staying off the roads
        rather than sightseeing.
      </p>
      <p>
        Townsville is honestly an outdoor destination first, and it has fewer indoor attractions
        than a major capital city. That does not make a wet day a write-off. There is a genuinely
        good museum, a strong library and gallery network, a cinema, shopping centres, an easy CBD
        café strip and a waterfront that is still worth walking between showers. This guide helps
        you work out which kind of rainy day you have, and what is worth doing in each case.
      </p>
    </div>

    <GuideQuickFacts className="mb-10" />

    {/* Planning framework */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">What Kind of Rainy Day Is It?</h2>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Work out which of these three situations you are in before you plan anything else. It
        matters far more than any individual activity choice.
      </p>

      <div className="space-y-5">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <CloudDrizzle className="w-5 h-5 text-primary" /> Passing showers
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Short, heavy bursts with breaks in between. Most of a normal day still works if you
              stay flexible and keep an eye on the radar.
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>
                Walk sections of{" "}
                <Link to="/the-strand" className="text-primary hover:underline font-medium">The Strand</Link>{" "}
                between showers
              </li>
              <li>
                Visit{" "}
                <Link to="/guides/jezzine-barracks" className="text-primary hover:underline font-medium">Jezzine Barracks</Link>
              </li>
              <li>Explore the CBD, where shops, cafés and galleries are close together</li>
              <li>Combine outdoor stops with cafés, the museum or a gallery</li>
              <li>
                Drive to the{" "}
                <Link to="/castle-hill" className="text-primary hover:underline font-medium">Castle Hill</Link>{" "}
                lookout if roads are open, visibility is adequate and conditions are suitable
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <CloudRain className="w-5 h-5 text-primary" /> Steady rain
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Persistent rain with few useful breaks. Plan an indoor day and treat any clear
              stretch as a bonus rather than the plan.
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Queensland Museum Tropics as the anchor of the day</li>
              <li>CityLibraries branches for seating, air-conditioning and family activities</li>
              <li>Council galleries, where entry is often free</li>
              <li>Cinema</li>
              <li>Shopping centres for meals, browsing and family downtime</li>
              <li>Cafés and restaurants, including a longer lunch than you would normally plan</li>
              <li>Indoor family activity venues that are currently operating</li>
              <li>Accommodation downtime — a genuine option on a long wet day</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-destructive/40">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <CloudLightning className="w-5 h-5 text-destructive" /> Heavy rain or severe weather
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              This is not a sightseeing situation. During flooding, storms or a severe-weather
              event, attractions, parks and public facilities may be closed and travel may be
              restricted.
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Check Bureau of Meteorology warnings</li>
              <li>Check the Townsville Disaster Dashboard</li>
              <li>Avoid unnecessary driving</li>
              <li><strong className="text-foreground">Never drive through floodwater</strong></li>
              <li>Avoid creeks, causeways and low-lying roads</li>
              <li>Avoid exposed walking tracks</li>
              <li>Postpone Paluma and swimming-hole trips</li>
              <li>Reconsider Magnetic Island travel</li>
              <li>Follow official closure and emergency advice</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Indoor */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Best Indoor Things to Do</h2>

      <div className="space-y-5">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Landmark className="w-5 h-5 text-primary" /> Queensland Museum Tropics
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The lead indoor recommendation in Townsville, and the one place that is genuinely
              weatherproof for several hours. It sits centrally in the CBD, so it is easy to reach
              on foot or by bus, and it suits adults and children equally. The content covers
              tropical Queensland, reef and rainforest themes, and regional maritime and social
              history, with interactive displays that hold younger visitors. Check current
              exhibitions, entry costs and opening information before you go.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" /> Townsville CityLibraries
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Underrated on a wet day and very practical: air-conditioning, comfortable seating,
              books and magazines, free Wi-Fi where available, and scheduled children's sessions at
              various branches. Sessions and opening arrangements change, so check current library
              information rather than relying on a fixed timetable.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-primary" /> Galleries
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Townsville's council galleries, including Perc Tucker Regional Gallery in the CBD,
              are a good short indoor stop and entry is often free. Exhibitions change regularly and
              opening arrangements can vary, so check current information before travelling rather
              than expecting a particular show.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Film className="w-5 h-5 text-primary" /> Cinema
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Simple, reliable and genuinely weatherproof. Townsville has cinema screens attached to
              major shopping centres, so you can park under cover and stay dry. Check session times
              online before heading out.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-primary" /> Shopping centres
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Not tourist attractions, but genuinely useful when rain settles in for hours. The main
              options are Castletown, Stockland Townsville and Willows, and they cover meals,
              shopping, family downtime, undercover parking and cinema where applicable.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              See the{" "}
              <Link to="/shopping" className="text-primary hover:underline font-medium">Townsville shopping guide</Link>{" "}
              for locations and what each centre is good for.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Ship className="w-5 h-5 text-primary" /> Maritime Museum of Townsville
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A small, volunteer-supported museum near the city covering local shipping, wrecks,
              naval history and the port's role in the region. It is a worthwhile short stop for
              anyone interested in maritime and regional history, and it pairs well with the museum
              or a CBD lunch. Opening days, hours and admission are set by the operator and can
              change, so confirm current details before visiting.
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-muted/40">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Reef HQ status</h3>
            <p className="text-muted-foreground leading-relaxed">
              The Great Barrier Reef Aquarium, formerly known as Reef HQ, is closed for
              redevelopment and is not currently available as a rainy-day attraction. Do not plan a
              wet day around it. For background and reef alternatives, see our{" "}
              <Link to="/reef-hq-townsville" className="text-primary hover:underline font-medium">
                Reef HQ status page
              </Link>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Kids */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Baby className="w-6 h-6 text-primary" /> Rainy-Day Activities With Kids
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Our{" "}
        <Link to="/townsville-with-kids" className="text-primary hover:underline font-medium">
          Townsville with Kids guide
        </Link>{" "}
        is the fuller family planning resource. On a wet day, the options that reliably work are:
      </p>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
        <li>Queensland Museum Tropics, easily a half-day with children</li>
        <li>A CityLibraries branch, especially when a children's session is running</li>
        <li>Cinema</li>
        <li>Currently operating indoor play or activity venues</li>
        <li>A shopping-centre break for lunch and a wander</li>
        <li>A café or long lunch stop to reset the day</li>
        <li>Games at your accommodation, or the pool only if conditions are safe</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        One important caveat: outdoor water play is not automatically a rainy-day option. Riverway,
        the Strand Water Park, beaches and other public facilities may close during storms or
        significant weather, and lifeguard or supervision arrangements can change. Do not build a
        wet day around them.
      </p>
    </section>

    {/* Free */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Free Rainy-Day Options</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Being honest about this: genuinely free indoor options are more limited than on a sunny day.
        The realistic list is short but useful.
      </p>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
        <li>CityLibraries branches</li>
        <li>Council galleries where entry is currently free</li>
        <li>Free exhibitions and displays</li>
        <li>Covered CBD browsing between Flinders Street and the waterfront</li>
        <li>Shopping centres, for cost-free shelter and a walk around</li>
        <li>Free community activities where currently operating</li>
        <li>Short walks between showers when conditions are safe</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        For the wider budget picture, see the{" "}
        <Link to="/guides/free-things" className="text-primary hover:underline font-medium">
          free things to do in Townsville guide
        </Link>
        .
      </p>
    </section>

    {/* Light rain */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">What You Can Still Do in Light Rain</h2>

      <div className="space-y-5">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">The Strand</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Light showers do not mean abandoning the foreshore. Shorten the walk, use the café
              stops along the way, watch the radar and move between sheltered areas, or simply come
              back later once a shower passes — many do within the hour. Avoid swimming during
              thunderstorms or when conditions look unsettled.
            </p>
            <Link to="/the-strand" className="text-primary hover:underline font-medium">
              Full guide to The Strand →
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Castle Hill</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Driving and walking are two different decisions here. Driving to the lookout can still
              be reasonable in light rain when roads are open, visibility is adequate and no
              severe-weather advice is active. The walking tracks need more caution: surfaces get
              slippery, visibility drops, and humidity stays high even in rain. Postpone exposed
              walks when conditions deteriorate.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/castle-hill" className="text-primary hover:underline font-medium">
                Castle Hill guide →
              </Link>
              <Link to="/guides/walking-castle-hill" className="text-primary hover:underline font-medium">
                Walking Castle Hill →
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">CBD and street art</h3>
            <p className="text-muted-foreground leading-relaxed">
              The CBD is the most useful part of the city between showers, because the museum,
              galleries, cafés, shops and covered walkways are all within a few blocks of each
              other. You can duck inside when a burst comes through and pick up street-art stops
              again when conditions allow.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Jezzine Barracks</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              A good option for passing showers or improving weather rather than persistent heavy
              rain. The headland is exposed, so save it for a break in the cloud rather than pushing
              through a downpour.
            </p>
            <Link to="/guides/jezzine-barracks" className="text-primary hover:underline font-medium">
              Jezzine Barracks guide →
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Magnetic Island */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Magnetic Island in Wet Weather</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        A little rain does not automatically mean cancelling the ferry. The island still works on a
        showery day if you keep the plan simple and food or shelter is part of it. Reconsider when:
      </p>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
        <li>Storms are forecast</li>
        <li>Ferry operators issue notices or change services</li>
        <li>Visibility is poor</li>
        <li>Tracks are wet or unsafe</li>
        <li>Island roads are affected</li>
        <li>Your day would mainly involve exposed outdoor activities</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed mb-4">
        There is no prize for forcing a poor-weather island trip. On a genuinely wet day, a
        Townsville-based indoor day usually delivers more, and the island keeps for a better
        forecast.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link to="/guides/magnetic-island-day-trip" className="text-primary hover:underline font-medium">
          Magnetic Island day trip →
        </Link>
        <Link to="/guides/magnetic-island-ferry" className="text-primary hover:underline font-medium">
          Ferry guide →
        </Link>
        <Link to="/guides/forts-walk-magnetic-island" className="text-primary hover:underline font-medium">
          Forts Walk →
        </Link>
      </div>
    </section>

    {/* Paluma */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Paluma and Swimming Holes in Wet Weather</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        This is the part of wet-weather planning where the advice needs to be firm. During or
        immediately after significant rainfall, and without checking current conditions, avoid:
      </p>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
        <li>Little Crystal Creek</li>
        <li>Big Crystal Creek</li>
        <li>Waterfalls</li>
        <li>Creek swimming anywhere in the region</li>
        <li>Remote rainforest walks</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed mb-4">
        The risks are practical rather than theoretical: water levels rise fast and without warning,
        rocks and steps become slippery, debris moves downstream, flash flooding can cut access, the
        mountain road can be affected, and park areas can close at short notice. Rain does not make
        a waterfall better or safer to visit — it usually makes it more dangerous.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link to="/guides/paluma-day-trip" className="text-primary hover:underline font-medium">
          Paluma day trip guide →
        </Link>
        <Link to="/little-crystal-creek-townsville" className="text-primary hover:underline font-medium">
          Little Crystal Creek closure information →
        </Link>
        <a
          href="https://parks.desi.qld.gov.au/park-alerts"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
        >
          Queensland Parks alerts <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>

    {/* Driving */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Car className="w-6 h-6 text-primary" /> Rain and Driving
      </h2>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
        <li>Slow down — tropical downpours reduce grip and visibility quickly</li>
        <li>Increase your following distance</li>
        <li>Use headlights when visibility drops</li>
        <li>Watch for standing water, especially at intersections and dips</li>
        <li><strong className="text-foreground">Never drive through floodwater</strong>, whatever you are driving</li>
        <li>Do not assume a familiar road is safe — conditions change between trips</li>
        <li>Check Queensland Traffic for closures and road conditions</li>
        <li>Check the Townsville Disaster Dashboard during significant weather</li>
        <li>Restrict travel when official advice recommends it</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        Local roads near creek lines and low-lying crossings are the ones that go under first. If
        water is across the road and you cannot see the surface, turn around.
      </p>
    </section>

    {/* Itineraries */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Compass className="w-6 h-6 text-primary" /> Rainy-Day Itineraries
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">Rainy day without a car</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm mb-3">
              <li>Morning: Queensland Museum Tropics</li>
              <li>Lunch: CBD or Palmer Street</li>
              <li>Afternoon: gallery or library, then a café</li>
              <li>Late: short CBD or Strand walk if showers ease</li>
            </ul>
            <Link to="/townsville-without-a-car" className="text-primary hover:underline font-medium text-sm">
              Townsville without a car →
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">Rainy-day family itinerary</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm mb-3">
              <li>Morning: museum</li>
              <li>Lunch: family-friendly café or shopping centre</li>
              <li>Afternoon: library, cinema or indoor activity</li>
              <li>If conditions improve: short Strand visit before dinner</li>
            </ul>
            <Link to="/townsville-with-kids" className="text-primary hover:underline font-medium text-sm">
              Townsville with kids →
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">Rainy-day couple itinerary</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
              <li>Late breakfast in the CBD or North Ward</li>
              <li>Museum or gallery</li>
              <li>Long lunch</li>
              <li>Café or shopping stop</li>
              <li>Waterfront dinner if the weather improves</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">Light-showers itinerary</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
              <li>CBD or museum in the morning</li>
              <li>The Strand between showers</li>
              <li>Jezzine Barracks if conditions improve</li>
              <li>Castle Hill lookout by car only if visibility and roads are suitable</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 border-destructive/40">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive" /> Severe-weather plan
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              This is deliberately not a sightseeing itinerary.
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
              <li>Stay informed through official warnings and updates</li>
              <li>Remain somewhere safe</li>
              <li>Minimise travel</li>
              <li>Follow official warnings and directions</li>
              <li>Keep devices charged</li>
              <li>Check your accommodation's advice</li>
              <li>Postpone sightseeing until conditions improve</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Recovery */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Sun className="w-6 h-6 text-primary" /> The Rain Has Stopped — What Now?
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Townsville looks its best in the clear light after rain. If conditions are safe, the easiest
        places to pick the day back up are:
      </p>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
        <li><Link to="/the-strand" className="text-primary hover:underline font-medium">The Strand</Link></li>
        <li><Link to="/castle-hill" className="text-primary hover:underline font-medium">Castle Hill lookout</Link></li>
        <li><Link to="/guides/jezzine-barracks" className="text-primary hover:underline font-medium">Jezzine Barracks</Link></li>
        <li><Link to="/rowes-bay" className="text-primary hover:underline font-medium">Rowes Bay</Link></li>
        <li>The CBD, for a walk, coffee or early dinner</li>
        <li>Riverway, once council facilities are confirmed open</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        What you should not do is head straight for creeks, waterfalls or swimming holes after heavy
        rain. Those places stay hazardous well after the sky clears, and access can remain closed.
        Check current conditions and park alerts first.
      </p>
    </section>

    {/* Packing */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Backpack className="w-6 h-6 text-primary" /> What to Bring During the Wet Season
      </h2>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
        <li>Lightweight rain jacket</li>
        <li>Umbrella for ordinary showers</li>
        <li>Shoes with grip</li>
        <li>Waterproof phone pouch or dry bag</li>
        <li>Spare clothes for children</li>
        <li>Insect repellent</li>
        <li>Drinking water</li>
        <li>Portable phone charger</li>
        <li>Saved links to weather and warning information</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        One caveat on the umbrella: it is fine for a passing shower, but it is not suitable
        protection during thunderstorms or high winds. In those conditions, shelter indoors instead.
      </p>
    </section>

    {/* Mistakes */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <ListChecks className="w-6 h-6 text-primary" /> Common Rainy-Day Mistakes
      </h2>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
        <li>Assuming all rain ruins the day</li>
        <li>Assuming attractions remain open during severe weather</li>
        <li>Driving through floodwater</li>
        <li>Heading to swimming holes after heavy rainfall</li>
        <li>Walking Castle Hill on slippery tracks</li>
        <li>Taking the ferry without checking conditions</li>
        <li>Expecting Reef HQ to be open</li>
        <li>Relying on outdoor water parks during storms</li>
        <li>Overpacking the itinerary so there is no room to wait a shower out</li>
        <li>Failing to check radar or warnings before leaving accommodation</li>
        <li>Assuming rain means temperatures will automatically be cool — humidity often rises</li>
      </ul>
    </section>

    {/* Current conditions */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Current-Condition Checks</h2>
      <p className="text-muted-foreground leading-relaxed mb-4">
        Check official sources rather than social media before you commit to a wet-weather plan.
      </p>
      <ul className="space-y-2">
        {[
          { name: "Bureau of Meteorology — Townsville forecast and radar", url: "http://www.bom.gov.au/qld/forecasts/townsville.shtml" },
          { name: "Bureau of Meteorology — Queensland warnings", url: "http://www.bom.gov.au/qld/warnings/" },
          { name: "Townsville Disaster Dashboard", url: "https://disaster.townsville.qld.gov.au/" },
          { name: "Queensland Traffic — road conditions and closures", url: "https://qldtraffic.qld.gov.au/" },
          { name: "Queensland Parks and Wildlife Service — park alerts", url: "https://parks.desi.qld.gov.au/park-alerts" },
          { name: "SeaLink — Magnetic Island ferry service updates", url: "https://www.sealinkqld.com.au/" },
        ].map((s) => (
          <li key={s.url}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium"
            >
              {s.name} <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
            </a>
          </li>
        ))}
      </ul>
      <p className="text-muted-foreground leading-relaxed mt-4">
        Emergency and service numbers are collected on our{" "}
        <Link to="/useful-contacts" className="text-primary hover:underline font-medium">
          useful contacts page
        </Link>
        . In a life-threatening emergency, call Triple Zero (000).
      </p>
    </section>

    {/* FAQ */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Coffee className="w-6 h-6 text-primary" /> Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.q} value={`faq-${i}`} className="border-border/40">
            <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>

    {/* Related */}
    <section className="bg-muted/40 rounded-xl p-6 mb-4">
      <h2 className="text-xl font-bold mb-4">Related Townsville Guides</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {relatedGuides.map((g) => (
          <Link
            key={g.to}
            to={g.to}
            className="block bg-background border-2 border-border/40 rounded-lg p-4 hover:border-primary hover:shadow-md transition-all"
          >
            <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-1">Local Guide</p>
            <p className="font-semibold text-foreground">{g.title} →</p>
            <p className="text-sm text-muted-foreground mt-1">{g.blurb}</p>
          </Link>
        ))}
      </div>
    </section>
  </div>
);

export default RainyDayActivities;
