import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import LocalInsightCard from "@/components/LocalInsightCard";
import {
  AlertTriangle,
  ArrowRight,
  Car,
  CheckCircle2,
  CloudRain,
  Dog,
  Accessibility,
  Baby,
  Fuel,
  Mountain,
  Waves,
  ExternalLink,
  Backpack,
  MapPin,
} from "lucide-react";

const SITE = "https://www.townsvilleguide.com.au";
const PAGE_URL = `${SITE}/guides/paluma-day-trip`;

const OFFICIAL_LINKS = {
  qldTraffic: "https://qldtraffic.qld.gov.au/",
  tmrMountSpec:
    "https://www.tmr.qld.gov.au/projects/mount-spec-road-reconstruction-works",
  palumaAlerts: "https://parks.qld.gov.au/parks/paluma-range/about",
  palumaPark: "https://parks.desi.qld.gov.au/parks/paluma-range",
  bigCrystalCreek:
    "https://parks.qld.gov.au/parks/paluma-range/things-to-do",
  bomPaluma: "http://www.bom.gov.au/places/qld/paluma/",
  parkSafety:
    "https://parks.qld.gov.au/before-you-visit/visit-with-care/water-safety",
};

const faqItems = [
  {
    question: "Is Paluma worth visiting from Townsville?",
    answer:
      "For visitors who enjoy upland rainforest, cooler mountain air, birdlife, lookouts and short forest walks, Paluma is a rewarding regional day trip. It is not a quick roadside stop, and it is less rewarding if you cannot allow most of a day or if road and park closures limit the stops available.",
  },
  {
    question: "How long does it take to drive to Paluma?",
    answer:
      "Paluma village is roughly 80 kilometres from Townsville depending on your starting point and route. Allow around 1 hour 30 minutes or more, because the mountain section of Mount Spec Road is slow, winding and may be affected by road works, weather or slower vehicles.",
  },
  {
    question: "Is Mount Spec Road open?",
    answer:
      "Permit restrictions for public travel were lifted on 7 April 2026 and the road is open to normal public access, but reconstruction following the 2025 weather event remains underway and conditions can change. Check Queensland Traffic and Transport and Main Roads updates before you travel.",
  },
  {
    question: "Is Little Crystal Creek open?",
    answer:
      "No. The Little Crystal Creek day-use area is temporarily closed following severe weather damage. Queensland Parks currently lists the closure as applying until 6 December 2026, but that date may change, so check the current park alert rather than assuming it has reopened.",
  },
  {
    question: "Can you swim at Big Crystal Creek?",
    answer:
      "Paradise Waterhole at Big Crystal Creek is used for freshwater swimming when conditions permit, but access and safety must be checked against current Queensland Parks alerts before travelling. Never jump or dive, and avoid swimming during or after heavy rain.",
  },
  {
    question: "Do you need a car to visit Paluma?",
    answer:
      "Effectively yes. There is no practical public transport option for a Paluma day trip, so a private vehicle or an organised tour is required.",
  },
  {
    question: "Are dogs allowed in Paluma Range National Park?",
    answer:
      "Domestic animals are generally not permitted in national park areas, including day-use areas and walking tracks. Rules may differ in Paluma village or on other land tenures, so check the rule that applies to each stop.",
  },
  {
    question: "Is Paluma suitable for children?",
    answer:
      "It can be, provided you keep the plan simple. The long winding drive does not suit every child, so choose one or two stops, carry food, water and spare clothing, and supervise children closely near creeks, roads, steep terrain and slippery rocks.",
  },
  {
    question: "Can you visit Paluma and Big Crystal Creek in one day?",
    answer:
      "It is possible, but they are reached by different roads and combining them makes for a long and complex day. Most visitors have a better experience choosing either the Paluma village and range area or Big Crystal Creek, rather than both.",
  },
  {
    question: "Is there fuel or food in Paluma?",
    answer:
      "Do not rely on it. Paluma is a small mountain village with limited facilities and variable opening days and hours, and you should not assume fuel, food, supplies or drinking water will be available. Fill your vehicle and buy supplies before beginning the mountain drive.",
  },
];

const PalumaDayTrip = () => {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Paluma Day Trip from Townsville: Complete Local Guide",
      description:
        "Plan a Paluma day trip from Townsville, including Mount Spec Road, village stops, lookouts, Big Crystal Creek, current closures and safety advice.",
      author: { "@type": "Person", name: "Duncan Ross" },
      publisher: {
        "@type": "Organization",
        name: "Townsville Guide",
        url: SITE,
      },
      mainEntityOfPage: PAGE_URL,
      url: PAGE_URL,
      image: `${SITE}/paluma-range-national-park-townsville.webp`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        {
          "@type": "ListItem",
          position: 2,
          name: "Guides",
          item: `${SITE}/things-to-do`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Paluma Day Trip from Townsville",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  const relatedGuides = [
    { label: "Little Crystal Creek", to: "/little-crystal-creek-townsville" },
    { label: "First Time in Townsville", to: "/first-time-in-townsville" },
    { label: "Townsville in One Day", to: "/townsville-in-one-day" },
    { label: "Townsville Without a Car", to: "/townsville-without-a-car" },
    { label: "Townsville with Kids", to: "/townsville-with-kids" },
    { label: "Accessible Townsville", to: "/accessible-townsville" },
    { label: "Dog-Friendly Townsville", to: "/dog-friendly" },
    { label: "Beat the Heat", to: "/guides/beat-the-heat" },
    { label: "Rainy Day Activities", to: "/guides/rainy-day-activities" },
    { label: "Free Things to Do", to: "/guides/free-things" },
    { label: "Nature in Townsville", to: "/nature" },
    { label: "Local Tips", to: "/local-tips" },
  ];

  const checklist = [
    "Check Queensland Traffic for current road conditions",
    "Check Transport and Main Roads Mount Spec Road reconstruction updates",
    "Check Queensland Parks alerts for Paluma Range National Park",
    "Check the Paluma weather forecast, not just the Townsville forecast",
    "Confirm which attractions are actually open",
    "Fill the vehicle with fuel before leaving",
    "Carry water and food",
    "Download route and contact information for offline use",
    "Allow enough daylight for the return journey",
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
      <SEOHead
        title="Paluma Day Trip from Townsville: Complete Guide"
        description="Plan a Paluma day trip from Townsville, including Mount Spec Road, village stops, lookouts, Big Crystal Creek, current closures and safety advice."
        canonical="/guides/paluma-day-trip"
        ogType="article"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* 1. Hero */}
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Paluma Day Trip from Townsville
      </h1>

      <div className="mb-2">
        <img
          src="/paluma-range-national-park-townsville.webp"
          alt="Rainforest and mountain scenery in Paluma Range National Park north of Townsville"
          className="w-full h-[320px] md:h-[460px] object-cover rounded-xl shadow-lg"
          width={1600}
          height={900}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
      </div>
      <p className="text-xs text-muted-foreground mb-6">
        Paluma Range National Park, north of Townsville
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Paluma offers rainforest scenery, mountain views, walking tracks and freshwater
        swimming areas within day-trip distance of Townsville. The drive and current access
        conditions require more planning than a normal city attraction, particularly while some
        Paluma Range facilities remain closed following severe weather damage.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        A successful Paluma day trip begins with checking Mount Spec Road conditions, Queensland
        Parks alerts and the weather before leaving Townsville.
      </p>

      {/* 2. Current access notice */}
      <div className="mb-10 rounded-xl border-2 border-amber-300 dark:border-amber-800/60 bg-amber-50 dark:bg-amber-900/20 p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle
            className="w-5 h-5 text-amber-700 dark:text-amber-400 flex-shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <div className="min-w-0">
            <h2 className="text-lg font-bold text-amber-900 dark:text-amber-200 mb-1">
              Check Current Road and Park Access
            </h2>
            <p className="text-sm md:text-base text-amber-900/90 dark:text-amber-100/90 leading-relaxed">
              Mount Spec Road reopened to normal public access after permit restrictions were
              lifted on 7 April 2026, but major reconstruction remains underway following
              extensive weather damage. Little Crystal Creek day-use area is currently closed,
              and other tracks or facilities may also be affected. Check Queensland Traffic,
              Transport and Main Roads and Queensland Parks alerts before travelling.
            </p>
            <ul className="mt-3 space-y-1.5">
              {[
                { name: "Queensland Traffic — current road conditions", url: OFFICIAL_LINKS.qldTraffic },
                { name: "Transport and Main Roads — Mount Spec Road reconstruction", url: OFFICIAL_LINKS.tmrMountSpec },
                { name: "Queensland Parks — Paluma Range National Park alerts", url: OFFICIAL_LINKS.palumaAlerts },
                { name: "Queensland Parks — Little Crystal Creek closure alert", url: OFFICIAL_LINKS.palumaAlerts },
              ].map((l) => (
                <li key={l.name}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-1.5 text-sm font-medium text-amber-900 dark:text-amber-200 underline underline-offset-4 break-words"
                  >
                    {l.name}
                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Quick Facts */}
      <GuideQuickFacts className="mb-4" />

      <a
        href="https://www.google.com/maps/search/?api=1&query=Paluma+Village+QLD"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mb-10"
      >
        <MapPin className="w-4 h-4" aria-hidden="true" />
        Get Directions
      </a>

      <Separator className="mb-10" />

      {/* 4. Worth visiting */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Is Paluma Worth Visiting?</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Paluma suits visitors who want something different from the coast. It may be a good
          choice if you are interested in:
        </p>
        <ul className="space-y-2 text-muted-foreground mb-4">
          {[
            "Upland rainforest and the change in vegetation as you climb",
            "Cooler mountain conditions compared with the coastal plain",
            "Birdlife, including species that are hard to see closer to Townsville",
            "Lookouts over the range and coastal lowlands",
            "Short forest walks rather than long hikes",
            "Freshwater swimming when access and conditions permit",
            "A scenic drive away from the coast",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Mountain className="w-4 h-4 mt-1 text-primary flex-shrink-0" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          Paluma is not a quick roadside stop. Allow enough time for the drive, the slow mountain
          sections, possible weather changes, two or three main stops and the return to Townsville
          before conditions deteriorate. Visitors who try to fit Paluma into a couple of spare
          hours usually end up rushing the most rewarding parts.
        </p>
      </section>

      {/* 5. How long */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          How Long Does a Paluma Day Trip Take?
        </h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Most visitors should allow the majority of a day.</li>
          <li>• The mountain drive takes longer than a map estimate suggests.</li>
          <li>• Stops, road works, weather and slower vehicles all affect timing.</li>
          <li>• Do not try to combine every Paluma and Crystal Creek attraction in one trip.</li>
          <li>• Leaving Townsville earlier gives you far more flexibility later in the day.</li>
          <li>• The return drive after dark or in heavy rain is less comfortable and slower.</li>
        </ul>
      </section>

      {/* 6. Mount Spec Road */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Driving Mount Spec Road</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Mount Spec Road climbs from the coastal plain into the Paluma Range. Sections are
          winding and genuinely mountainous, and visitors may encounter narrow stretches, tight
          bends, active road works and changed traffic conditions. The road suffered major
          structural damage during the 2025 weather event, and reconstruction remains underway.
          Public permit restrictions were lifted on 7 April 2026, but road status can still change
          quickly. Drive to the conditions and obey all traffic controls.
        </p>
        <Card className="bg-muted/30 mb-4">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <Car className="w-5 h-5 text-primary" aria-hidden="true" />
              <h3 className="font-semibold text-foreground">Practical driving advice</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Check Queensland Traffic immediately before leaving, not the night before.</li>
              <li>• Do not rely on an old screenshot or a social-media post for road status.</li>
              <li>• Allow extra time for delays and traffic control.</li>
              <li>• Use headlights when visibility is poor.</li>
              <li>• Expect mist, rain or fallen debris in mountain conditions.</li>
              <li>• Never enter a closed road.</li>
              <li>• Do not stop in unsafe locations for photographs.</li>
            </ul>
          </CardContent>
        </Card>
        <p className="text-sm text-muted-foreground">
          Vehicle-size or towing restrictions can apply on reconstruction projects. Check the
          current{" "}
          <a
            href={OFFICIAL_LINKS.tmrMountSpec}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2"
          >
            Transport and Main Roads Mount Spec Road information
          </a>{" "}
          for any conditions that apply to your vehicle.
        </p>
      </section>

      {/* 7. Weather */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Paluma Weather Can Be Very Different From Townsville
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Paluma is elevated, so temperatures are often cooler than the coast. Mist, cloud and
          rain can occur even when Townsville is dry, visibility at lookouts can change within
          minutes, and wet roads and rainforest tracks become slippery. Check the Paluma-specific
          forecast rather than assuming Townsville conditions apply.
        </p>
        <Card className="bg-muted/30 mb-4">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <CloudRain className="w-5 h-5 text-primary" aria-hidden="true" />
              <h3 className="font-semibold text-foreground">Bring for mountain conditions</h3>
            </div>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>• A light rain layer</li>
              <li>• Water</li>
              <li>• Sun protection</li>
              <li>• Suitable footwear with grip</li>
              <li>• Warmer clothing during cooler periods</li>
            </ul>
          </CardContent>
        </Card>
        <a
          href={OFFICIAL_LINKS.bomPaluma}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-primary underline underline-offset-2 font-medium"
        >
          Bureau of Meteorology — Paluma forecast
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
      </section>

      {/* 8. Village */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Paluma Village</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Paluma is a small mountain village surrounded by rainforest, and it works well as the
          central point of a day trip. Facilities and businesses are limited, and opening days and
          hours may vary. Do not assume food, fuel, drinking water or supplies will always be
          available.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          A café or community facility may be available depending on the day, but check before
          relying on it. Where possible, buy supplies before beginning the mountain drive.
        </p>
        <LocalInsightCard variant="tip" title="Plan for limited services">
          <p>
            There is no fuel available in the village, so fill your tank on the coastal plain
            before you start climbing.
          </p>
        </LocalInsightCard>
      </section>

      {/* 9. McClellands Lookout */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">McClellands Lookout</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          McClellands Lookout is one of the main lookout and short-walk areas near Paluma. Access
          can be affected by wet weather or current park alerts, so check the lookout walk and
          facilities before travelling. Visibility depends heavily on cloud and mist, and on some
          days the view will be limited.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Some official information describes a wheelchair-accessible lookout route, but current
          access must still be confirmed against the active alert before you rely on it.
        </p>
        <a
          href={OFFICIAL_LINKS.palumaAlerts}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-primary underline underline-offset-2 font-medium"
        >
          Check current Queensland Parks conditions for Paluma Range
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
      </section>

      {/* 10. Birthday Creek Falls */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Birthday Creek Falls</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The Birthday Creek Falls walking track is reached beyond Paluma village via Lake Paluma
          Road. It is not wheelchair-accessible, and both road and track conditions should be
          checked before setting out. Walking conditions may be slippery or affected by recent
          weather, so you need suitable footwear and enough time.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          This is not a stop to add casually to an already full itinerary. Check the current
          walking distance and estimated time on the official park page before you plan around it.
        </p>
        <a
          href={OFFICIAL_LINKS.palumaPark}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-primary underline underline-offset-2 font-medium"
        >
          Queensland Parks — Paluma Range National Park
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
      </section>

      {/* 11. Paluma Dam */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Paluma Dam</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Paluma Dam sits farther beyond the village, and reaching it adds substantial driving
          time. Road conditions and current access should be checked, and you should not assume a
          normal passenger vehicle is suitable under every condition.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Treat the dam as the main focus of a trip rather than an extra quick stop, and confirm
          facilities and permitted activities with Queensland Parks before travelling.
        </p>
      </section>

      {/* 12. Little Crystal Creek closure */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Little Crystal Creek Is Currently Closed
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The Little Crystal Creek day-use area remains temporarily closed because of severe
          weather damage. The current alert lists the closure as applying until 6 December 2026,
          but that date may change and should not be treated as a guaranteed reopening date.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Do not drive there expecting parking, swimming, toilets or picnic facilities to be
          available. Permanent visitor information remains available on our dedicated guide for
          use after the area reopens.
        </p>
        <Button asChild>
          <Link to="/little-crystal-creek-townsville">
            Check the Little Crystal Creek closure guide
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </Button>
      </section>

      {/* 13. Big Crystal Creek */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Big Crystal Creek and Paradise Waterhole
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Big Crystal Creek is reached by a different road from the Paluma village route. It
          includes a day-use and camping area, and Paradise Waterhole is used for freshwater
          swimming when conditions permit. Official information lists toilets, shelter and picnic
          facilities at the day-use area, and describes some facilities as wheelchair-accessible
          with assistance.
        </p>
        <LocalInsightCard variant="warning" title="Freshwater safety">
          <p>
            Swimming conditions must be checked before you travel. Never jump or dive — rocks can
            be slippery and submerged hazards may appear after flooding. Current park alerts apply
            here too.
          </p>
        </LocalInsightCard>
        <p className="text-muted-foreground leading-relaxed mt-4 mb-4">
          Big Crystal Creek is not a guaranteed substitute for Little Crystal Creek unless current
          access is confirmed. Combining it with Paluma village also makes for a longer and more
          complex day, because the two are reached by separate roads.
        </p>
        <a
          href={OFFICIAL_LINKS.bigCrystalCreek}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-primary underline underline-offset-2 font-medium"
        >
          Queensland Parks — Paluma Range facilities and Big Crystal Creek
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
      </section>

      {/* 14. Alternatives */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Alternatives While Little Crystal Creek Is Closed
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {[
            {
              title: "Paluma village and rainforest",
              text: "Best for cooler scenery, birdlife and a mountain atmosphere.",
            },
            {
              title: "McClellands Lookout",
              text: "Best for a short lookout visit when open and visibility is suitable.",
            },
            {
              title: "Big Crystal Creek and Paradise Waterhole",
              text: "A potential freshwater alternative when open and conditions are safe.",
            },
            {
              title: "Jourama Falls",
              text: "A separate Paluma Range destination farther north that requires its own road and access checks.",
            },
          ].map((alt) => (
            <Card key={alt.title} className="bg-muted/30">
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-1">{alt.title}</h3>
                <p className="text-sm text-muted-foreground">{alt.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-muted-foreground leading-relaxed">
          These locations are not interchangeable, and they should not all be attempted in one
          day. Each has its own access road and its own park alerts, and none should be assumed
          open without checking.
        </p>
      </section>

      {/* 15. Itinerary */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-6">A Realistic Paluma Day Trip</h2>
        <div className="space-y-4">
          {[
            {
              stage: "Before leaving Townsville",
              items: [
                "Check Mount Spec Road",
                "Check Queensland Parks alerts",
                "Check the Paluma weather forecast",
                "Fill the vehicle with fuel",
                "Carry water, food and essential supplies",
              ],
            },
            {
              stage: "Mountain drive",
              items: ["Allow enough time and avoid rushing the winding sections"],
            },
            {
              stage: "Main morning stop — choose one",
              items: [
                "Paluma village and the nearby rainforest",
                "McClellands Lookout if it is open",
                "One confirmed short walk",
              ],
            },
            {
              stage: "Lunch",
              items: [
                "Use a picnic, or a village food option you have confirmed is open",
                "Do not rely on a café without checking first",
              ],
            },
            {
              stage: "Afternoon stop — choose one",
              items: [
                "Another Paluma-area attraction",
                "Big Crystal Creek if it fits your route and is open",
                "A relaxed village or lookout stop",
              ],
            },
            {
              stage: "Return to Townsville",
              items: ["Leave with enough daylight and weather margin for the descent"],
            },
          ].map((block) => (
            <Card key={block.stage}>
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-2">{block.stage}</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {block.items.map((i) => (
                    <li key={i}>• {i}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Little Crystal Creek is not included while it is closed, and Paluma village, Big Crystal
          Creek, Jourama Falls and Paluma Dam should never be attempted on the same day.
        </p>
      </section>

      {/* 16. Kids */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          <span className="inline-flex items-center gap-2">
            <Baby className="w-6 h-6 text-primary" aria-hidden="true" />
            Paluma With Children
          </span>
        </h2>
        <ul className="space-y-2 text-muted-foreground mb-4">
          <li>• The long winding drive does not suit every child.</li>
          <li>• Choose one or two simple stops rather than a packed itinerary.</li>
          <li>• Carry food, water and spare clothing.</li>
          <li>• Supervise children around creeks, roads, steep terrain and slippery rocks.</li>
          <li>• Swimming conditions can change quickly after rain.</li>
          <li>• Toilets are not available at every location.</li>
          <li>
            • Cooler weather can be a relief from Townsville heat, but rain and mist can arrive
            quickly.
          </li>
        </ul>
        <Link
          to="/townsville-with-kids"
          className="text-primary hover:underline font-medium inline-flex items-center gap-1"
        >
          See our Townsville with Kids guide <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </section>

      {/* 17. Accessibility */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          <span className="inline-flex items-center gap-2">
            <Accessibility className="w-6 h-6 text-primary" aria-hidden="true" />
            Accessibility
          </span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Accessibility varies considerably across the Paluma Range. Some official day-use
          facilities and lookout paths are described as wheelchair-accessible or accessible with
          assistance, but rainforest walks, waterfalls and creek edges may not be suitable.
          Closures can also remove access to facilities that are normally accessible, so check
          each stop individually rather than treating the area as a whole.
        </p>
        <Link
          to="/accessible-townsville"
          className="text-primary hover:underline font-medium inline-flex items-center gap-1"
        >
          See our Accessible Townsville guide <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </section>

      {/* 18. Dogs */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          <span className="inline-flex items-center gap-2">
            <Dog className="w-6 h-6 text-primary" aria-hidden="true" />
            Dogs and National Park Rules
          </span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Domestic animals are generally prohibited in national park areas. Rules may differ in
          Paluma village, Council areas or other land tenures, so check the rule that applies to
          every stop. Do not assume a dog can visit Little Crystal Creek, Big Crystal Creek,
          walking tracks or other national park attractions.
        </p>
        <Link
          to="/dog-friendly"
          className="text-primary hover:underline font-medium inline-flex items-center gap-1"
        >
          See our Dog-Friendly Townsville guide <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </section>

      {/* 19. Food, fuel and supplies */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          <span className="inline-flex items-center gap-2">
            <Fuel className="w-6 h-6 text-primary" aria-hidden="true" />
            Food, Fuel and Supplies
          </span>
        </h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Fill the vehicle before travelling up the range.</li>
          <li>• Bring water and snacks for everyone in the vehicle.</li>
          <li>• Do not assume drinking water is available at your stops.</li>
          <li>• Village businesses may have limited or changing hours.</li>
          <li>• Phone ahead if you are relying on a particular business being open.</li>
          <li>• Mobile reception may be limited or unavailable in parts of the range.</li>
          <li>• Carry essential route and contact information offline.</li>
        </ul>
      </section>

      {/* 20. Swimming safety */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          <span className="inline-flex items-center gap-2">
            <Waves className="w-6 h-6 text-primary" aria-hidden="true" />
            Freshwater Swimming Safety
          </span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Freshwater swimming carries different risks from Townsville's beaches. Marine stingers
          are not the concern here, but currents, slippery rocks, submerged timber, changing depth
          and flood debris can all be dangerous.
        </p>
        <ul className="space-y-2 text-muted-foreground mb-4">
          <li>• Never jump or dive.</li>
          <li>• Check current conditions before entering the water.</li>
          <li>• Supervise children at all times.</li>
          <li>• Avoid swimming during or after severe weather.</li>
          <li>• Never enter a closed area.</li>
        </ul>
        <a
          href={OFFICIAL_LINKS.parkSafety}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-primary underline underline-offset-2 font-medium"
        >
          Queensland Parks — water safety guidance
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
      </section>

      {/* 21. What to bring */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          <span className="inline-flex items-center gap-2">
            <Backpack className="w-6 h-6 text-primary" aria-hidden="true" />
            What to Bring
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-muted-foreground">
          {[
            "Drinking water",
            "Food and snacks",
            "A full fuel tank",
            "Suitable shoes",
            "A rain layer",
            "Warmer clothing when appropriate",
            "Sun protection",
            "Insect repellent",
            "A charged phone",
            "Offline route and contact information",
            "Essential medication",
            "Rubbish bags",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 mt-1 text-primary flex-shrink-0" aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          This is not remote wilderness travel, but facilities are limited and you should be
          self-sufficient for the day.
        </p>
      </section>

      {/* 22. Common mistakes */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Common Paluma Day-Trip Mistakes
        </h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Travelling without checking Mount Spec Road.</li>
          <li>• Assuming Little Crystal Creek has reopened.</li>
          <li>• Trying to visit every attraction in one day.</li>
          <li>• Relying on village food or fuel without checking.</li>
          <li>• Underestimating mountain weather.</li>
          <li>• Leaving the return journey too late.</li>
          <li>• Swimming after heavy rain.</li>
          <li>• Entering closed tracks or facilities.</li>
          <li>• Treating Paluma Dam as a quick extra stop.</li>
          <li>• Relying on perfect mobile reception.</li>
        </ul>
      </section>

      {/* 23. FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((faq, i) => (
            <AccordionItem key={faq.question} value={`faq-${i}`} className="border-border/40">
              <AccordionTrigger className="text-left text-base font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* 24. Checklist */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Quick Planning Checklist</h2>
        <Card className="bg-muted/30">
          <CardContent className="p-5">
            <p className="font-semibold text-foreground mb-3">Before leaving Townsville</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator className="mb-10" />

      {/* 25. Related guides */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Related Townsville Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {relatedGuides.map((link) => (
            <Card key={link.to} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <Link
                  to={link.to}
                  className="flex items-center justify-between gap-2 text-foreground font-medium hover:text-primary transition-colors"
                >
                  {link.label}
                  <ArrowRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PalumaDayTrip;
