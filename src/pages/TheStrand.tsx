import {
  ArrowRight,
  Waves,
  Umbrella,
  Info,
  Coffee,
  Car,
  AlertTriangle,
  Sun,
  ShieldCheck,
  Footprints,
  Bath,
  Accessibility,
  Dog,
  Bus,
  CloudRain,
  Baby,
  MapPin,
} from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";

const SITE = "https://www.townsvilleguide.com.au";
const LAST_UPDATED = "5 August 2026";

const COUNCIL = "https://www.townsville.qld.gov.au/";
const BEACHSAFE = "https://beachsafe.org.au/";

const FAQS = [
  {
    q: "How long is The Strand in Townsville?",
    a: "The waterfront promenade runs for approximately 2.2 kilometres between the northern Rockpool and Kissing Point area and the pier and marina end near the city.",
  },
  {
    q: "Can you swim at The Strand?",
    a: "There are swimming areas, but conditions change through the year. Check current signs, lifeguard information and official marine stinger advice before entering the water, and treat the Rockpool, Water Park and Tobruk Memorial Baths as separate facilities from open-beach swimming.",
  },
  {
    q: "Is The Strand suitable for children?",
    a: "Yes. The Water Park, playgrounds, Rockpool, parkland and picnic areas suit families, though supervision around water and shared paths is essential and the hottest part of the day is best avoided.",
  },
  {
    q: "Are dogs allowed at The Strand?",
    a: "Dogs should remain leashed in public unless current Council signs identify a designated off-leash area. Follow signs near playgrounds, swimming areas and events.",
  },
  {
    q: "Is The Strand free?",
    a: "Visiting, walking, the playgrounds, the Water Park and the Rockpool are free. Food, paid activities and entry to Tobruk Memorial Baths cost extra.",
  },
  {
    q: "Can you visit The Strand without a car?",
    a: "Yes. Visitors staying in North Ward or centrally can usually reach The Strand on foot, and taxis, rideshare and buses connect other areas.",
  },
  {
    q: "Are there toilets along The Strand?",
    a: "Public toilets are available at selected facilities along The Strand rather than continuously along the full route. Check the current Council Strand map before visiting if you need facilities at a specific point.",
  },
  {
    q: "Is there parking along The Strand?",
    a: "Yes — parking is available in several areas along and near The Strand, though availability varies by location, time of day and events. Popular areas can get busy on weekends, around sunset and during major events, so check signs for restrictions before you leave your vehicle.",
  },
];

const RELATED = [
  { name: "First Time in Townsville", to: "/first-time-in-townsville" },
  { name: "Townsville in One Day", to: "/townsville-in-one-day" },
  { name: "Townsville Without a Car", to: "/townsville-without-a-car" },
  { name: "Townsville with Kids", to: "/townsville-with-kids" },
  { name: "Jezzine Barracks", to: "/jezzine-barracks" },
  { name: "Castle Hill", to: "/castle-hill" },
  { name: "Magnetic Island Day Trip", to: "/guides/magnetic-island-day-trip" },
  { name: "Free Things to Do", to: "/guides/free-things" },
  { name: "Food and Dining", to: "/food" },
  { name: "Stinger Safety", to: "/guides/stinger-safety" },
  { name: "Dog-Friendly Townsville", to: "/dog-friendly" },
  { name: "Rowes Bay", to: "/rowes-bay" },
];

const TheStrand = () => {
  return (
    <>
      <SEOHead
        title="The Strand Townsville: Complete Local Visitor Guide"
        description="Plan your visit to The Strand Townsville, including walking, swimming facilities, playgrounds, parking, accessibility, food and the best time to go."
        canonical={`${SITE}/the-strand`}
        ogType="article"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The Strand Townsville: Complete Local Visitor Guide",
            description:
              "A local guide to The Strand Townsville — walking, swimming facilities, playgrounds, parking, accessibility, dogs, food and the best time to visit.",
            mainEntityOfPage: `${SITE}/the-strand`,
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
              { "@type": "ListItem", position: 2, name: "Beaches", item: `${SITE}/beaches` },
              {
                "@type": "ListItem",
                position: 3,
                name: "The Strand Townsville",
                item: `${SITE}/the-strand`,
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

      <div className="min-h-screen bg-background flex flex-col">
        {/* Breadcrumb bar */}
        <div className="bg-card border-b">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link
              to="/beaches"
              className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm font-medium transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Beaches
            </Link>
          </div>
        </div>

        <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl space-y-10">
          {/* Hero */}
          <header className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              The Strand Townsville
            </h1>
            <p className="text-sm text-muted-foreground">Updated: {LAST_UPDATED}</p>
            <p className="text-xl text-muted-foreground">
              The Strand is Townsville's 2.2-kilometre waterfront promenade, combining beaches,
              parkland, playgrounds, swimming areas, cafés and views across Cleveland Bay. It is one
              of the best places for first-time visitors to begin exploring Townsville and can be
              enjoyed as a short walk or a relaxed half-day visit.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Visitors can spend anything from an hour to most of a day here, and because it runs
              alongside North Ward and the city, it is one of the easiest Townsville attractions to
              enjoy without a car.
            </p>
          </header>

          <img
            src="/the-strand-townsville-2.webp"
            alt="The Strand Townsville foreshore walkway with palm trees and tropical waterfront"
            className="w-full h-[260px] md:h-[460px] object-cover rounded-xl"
            width={1600}
            height={900}
            loading="eager"
            decoding="async"
          />

          <GuideQuickFacts />

          <a
            href="https://www.google.com/maps/search/?api=1&query=The+Strand+Townsville+QLD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <MapPin className="w-4 h-4" aria-hidden="true" />
            Get Directions
          </a>

          {/* Swimming */}
          <section className="space-y-4" aria-labelledby="swimming">
            <h2
              id="swimming"
              className="text-2xl font-bold text-foreground flex items-center gap-2"
            >
              <Waves className="w-6 h-6 text-primary" />
              Can You Swim at The Strand?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Swimming conditions at The Strand vary through the year. Before entering the water,
              check the current signs on the beach, lifeguard and patrol information, and official
              warnings. Marine stinger conditions can affect open-water swimming, and beach
              enclosures, patrol arrangements and facilities may change between seasons and from
              year to year.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The Rockpool, the Water Park and Tobruk Memorial Baths are separate facilities from
              open-beach swimming and each has its own conditions and opening arrangements. Parents
              should supervise children at all times around water.
            </p>
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Current signs and official advice come first</AlertTitle>
              <AlertDescription>
                Never assume an enclosure, net or patrol is in place.{" "}
                <Link to="/guides/stinger-safety" className="font-medium text-primary underline">
                  Check the current Townsville swimming and stinger guide
                </Link>{" "}
                before you plan a swim, and follow signage and lifeguard direction on the day.
              </AlertDescription>
            </Alert>
          </section>

          {/* Zones */}
          <section className="space-y-6" aria-labelledby="zones">
            <h2 id="zones" className="text-2xl font-bold text-foreground">
              The Main Areas of The Strand
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Waves className="w-5 h-5 text-primary" />
                    The Rockpool and northern Strand
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    The Rockpool is a free waterfront swimming facility at the northern end, close
                    to Kissing Point and{" "}
                    <Link to="/jezzine-barracks" className="text-primary hover:underline">
                      Jezzine Barracks
                    </Link>
                    . The surrounding parkland suits picnics, families and waterfront walking.
                  </p>
                  <p>
                    Opening, cleaning and closure arrangements change, so check current Council
                    information before travelling specifically to swim here.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Umbrella className="w-5 h-5 text-primary" />
                    Strand Park and the Water Park
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    The Water Park is a major free family facility in the central section, with
                    Strand Park providing open space and event areas nearby. Playgrounds, picnic
                    spaces and nearby facilities make this a practical family stop.
                  </p>
                  <p>
                    Hours and maintenance closures vary seasonally — check the current Council
                    Strand or lifeguard information rather than relying on a published timetable.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Coffee className="w-5 h-5 text-primary" />
                    Pier, marina and southern Strand
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    The southern end offers waterfront views and access toward the marina, the ferry
                    precinct and the central city. It works well combined with a meal or a longer
                    waterfront walk.
                  </p>
                  <p>
                    Cafés, casual dining and takeaway options operate along and near this end.
                    Business names and operating hours change, so check before relying on a specific
                    venue — see our{" "}
                    <Link to="/food" className="text-primary hover:underline">
                      food and dining guide
                    </Link>
                    .
                  </p>
                </CardContent>
              </Card>
            </div>

            <img
              src="/rock-pool-townsville.webp"
              alt="The Strand Rockpool saltwater swimming lagoon in Townsville"
              className="w-full h-[240px] md:h-[400px] object-cover object-[center_70%] rounded-xl"
              loading="lazy"
            />
          </section>

          {/* Walking */}
          <section className="space-y-4" aria-labelledby="walking">
            <h2 id="walking" className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Footprints className="w-6 h-6 text-primary" />
              Walking The Strand
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The waterfront route runs for approximately 2.2 kilometres. You can walk the entire
              promenade or choose a shorter section depending on the time you have and the heat. The
              northern end connects naturally with Jezzine Barracks, while the southern end leads
              toward the marina and the central city.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The walk is generally most comfortable in the morning or late afternoon. Some sections
              have better shade, seating and facilities than others, and heat and humidity can make
              the return journey more tiring than expected — plan water and a turnaround point
              before you set off.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Short visit",
                  text: "Allow approximately 45–60 minutes for a relaxed waterfront section.",
                },
                {
                  title: "Longer visit",
                  text: "Allow two to three hours when combining walking, swimming facilities, playgrounds, food or Jezzine Barracks.",
                },
                {
                  title: "Half-day visit",
                  text: "Allow longer when travelling with children, stopping for meals or using multiple facilities.",
                },
              ].map((o) => (
                <Card key={o.title}>
                  <CardContent className="p-4">
                    <p className="font-semibold text-foreground mb-1">{o.title}</p>
                    <p className="text-sm text-muted-foreground">{o.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Times vary with pace, heat, stops and how many facilities you use.
            </p>
          </section>

          {/* Etiquette */}
          <section className="space-y-3" aria-labelledby="etiquette">
            <h2 id="etiquette" className="text-2xl font-bold text-foreground">
              Walking and Cycling Etiquette
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "Shared paths may be used by walkers, runners, scooters and cyclists",
                "Keep left where appropriate and pass with care",
                "Supervise children near shared paths",
                "Avoid blocking the path when stopping for photos or a rest",
                "Stay alert when crossing driveways and roads",
                "Use lights and visible clothing when exercising in low light",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Facilities */}
          <section className="space-y-4" aria-labelledby="facilities">
            <h2
              id="facilities"
              className="text-2xl font-bold text-foreground flex items-center gap-2"
            >
              <Bath className="w-6 h-6 text-primary" />
              Facilities Along The Strand
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Facilities are spread across different sections of The Strand, so visitors should
              choose their starting point based on the facilities they need. Not every facility is
              available continuously along the full 2.2-kilometre route.
            </p>
            <Card>
              <CardContent className="p-5">
                <ul className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
                  {[
                    "Public toilets at selected facilities",
                    "Accessible toilets at some facilities",
                    "Outdoor showers near swimming areas",
                    "Drinking-water fountains at intervals",
                    "Playgrounds in several sections",
                    "The Water Park (free, central Strand)",
                    "The Rockpool (free, northern Strand)",
                    "Tobruk Memorial Baths (paid entry)",
                    "Picnic tables and shelters",
                    "Barbecues in park areas",
                    "Seating along the promenade",
                    "Parking areas along and behind the foreshore",
                    "Lifeguard or patrol services in some areas at some times",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground">
              Exact facility locations, availability and patrol arrangements change.{" "}
              <a
                href={COUNCIL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Check the current Council Strand map or facility information
              </a>{" "}
              before visiting, and{" "}
              <a
                href={BEACHSAFE}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Beachsafe
              </a>{" "}
              for beach and patrol conditions.
            </p>
          </section>

          {/* Tobruk */}
          <section className="space-y-3" aria-labelledby="tobruk">
            <h2 id="tobruk" className="text-2xl font-bold text-foreground">
              Tobruk Memorial Baths
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Tobruk Memorial Baths is a paid public swimming facility on The Strand, separate from
              the free Rockpool and Water Park. It suits lap swimming, swimming lessons and visitors
              who prefer a managed pool environment. Current admission prices and opening hours
              should be checked directly with the{" "}
              <a
                href={COUNCIL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Townsville City Council pools information
              </a>
              .
            </p>
          </section>

          {/* Kids */}
          <section className="space-y-4" aria-labelledby="kids">
            <h2 id="kids" className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Baby className="w-6 h-6 text-primary" />
              The Strand With Children
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The Water Park, playgrounds, Rockpool, open parkland and picnic facilities make The
              Strand one of the easiest family stops in Townsville. Shorter walking sections, nearby
              toilets and shade help, but supervision around water and shared paths is essential and
              the hottest part of the day is best avoided. Different parts suit different ages.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardContent className="p-5 space-y-2">
                  <p className="font-semibold text-foreground">Toddlers and younger children</p>
                  <p className="text-sm text-muted-foreground">
                    Keep visits short, stay in shade, and base yourself near a playground or the
                    Water Park with toilets close by. Close supervision is essential around all
                    water areas.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5 space-y-2">
                  <p className="font-semibold text-foreground">Older children and teenagers</p>
                  <p className="text-sm text-muted-foreground">
                    Walking, cycling, exercise, swimming facilities, photography and food stops all
                    work well, and the northern end combines easily with{" "}
                    <Link to="/jezzine-barracks" className="text-primary hover:underline">
                      Jezzine Barracks
                    </Link>
                    .
                  </p>
                </CardContent>
              </Card>
            </div>
            <p className="text-sm text-muted-foreground">
              For more family planning, see our{" "}
              <Link to="/townsville-with-kids" className="text-primary hover:underline">
                Townsville with kids guide
              </Link>
              .
            </p>
          </section>

          {/* Parking */}
          <section className="space-y-3" aria-labelledby="parking">
            <h2 id="parking" className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Car className="w-6 h-6 text-primary" />
              Parking at The Strand
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Parking is available in several areas along and near The Strand. Availability varies
              by location, time of day, events and current signs, and popular areas can become busy
              on weekends, around sunset and during major events.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Check signs for restrictions and time limits before leaving your vehicle. Parking a
              little farther from a busy facility — for example on nearby streets such as Mitchell
              Street or near Queens Gardens, where current signs and restrictions must be checked —
              is often easier than circling a full car park.
            </p>
          </section>

          {/* Car free */}
          <section className="space-y-3" aria-labelledby="car-free">
            <h2
              id="car-free"
              className="text-2xl font-bold text-foreground flex items-center gap-2"
            >
              <Bus className="w-6 h-6 text-primary" />
              Visiting The Strand Without a Car
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The Strand, North Ward and Jezzine Barracks together form one of Townsville's most
              practical car-free visitor areas. Visitors staying nearby can walk to cafés, parkland
              and waterfront attractions, and parts of the CBD and ferry precinct may be reachable
              on foot depending on your starting location and the weather.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Taxis, rideshare and buses help connect other parts of the city. Walking with luggage
              or during peak heat can be uncomfortable, so plan longer trips for cooler hours. See
              our{" "}
              <Link to="/townsville-without-a-car" className="text-primary hover:underline">
                Townsville without a car guide
              </Link>{" "}
              for the full picture.
            </p>
          </section>

          {/* Accessibility */}
          <section className="space-y-3" aria-labelledby="accessibility">
            <h2
              id="accessibility"
              className="text-2xl font-bold text-foreground flex items-center gap-2"
            >
              <Accessibility className="w-6 h-6 text-primary" />
              Accessibility
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Much of the waterfront uses sealed or paved paths, but access conditions differ along
              the full length of The Strand. Gradients, kerbs, crossings, beach access and distances
              between facilities all vary, and accessible toilets and parking may be available only
              at selected facilities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The Rockpool, Water Park, playgrounds and Tobruk Memorial Baths should each be
              assessed individually, and current facility information is worth checking before
              travelling. Our{" "}
              <Link to="/accessible-townsville" className="text-primary hover:underline">
                Townsville accessibility guide
              </Link>{" "}
              covers more mobility-friendly locations.
            </p>
          </section>

          {/* Dogs */}
          <section className="space-y-3" aria-labelledby="dogs">
            <h2 id="dogs" className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Dog className="w-6 h-6 text-primary" />
              Dogs at The Strand
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Dogs should remain leashed in public unless current signs identify a designated
              Council off-leash area. Do not assume time-based off-leash access applies.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "Carry waste bags and clean up",
                "Bring water — tropical conditions dehydrate dogs quickly",
                "Avoid hot pavement and sand in the middle of the day",
                "Follow signs near playgrounds, swimming areas and events",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground">
              See our{" "}
              <Link to="/dog-friendly" className="text-primary hover:underline">
                dog-friendly Townsville guide
              </Link>{" "}
              and check the Council off-leash area list for current rules.
            </p>
          </section>

          {/* Best time */}
          <section className="space-y-4" aria-labelledby="best-time">
            <h2
              id="best-time"
              className="text-2xl font-bold text-foreground flex items-center gap-2"
            >
              <Sun className="w-6 h-6 text-primary" />
              Best Time to Visit The Strand
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Morning",
                  text: "Best for walking, running, families, cooler conditions and photography.",
                },
                {
                  title: "Late afternoon and sunset",
                  text: "Cooler conditions, the best views, dining and relaxed walking.",
                },
                {
                  title: "Middle of the day",
                  text: "Heat and sun exposure can be significant. Shade and water breaks matter, and the Water Park or an indoor alternative may suit families better.",
                },
                {
                  title: "Evening",
                  text: "Some parts remain active with walkers and diners. Lighting and activity levels vary, so stay aware of your surroundings, and expect busier conditions on event nights.",
                },
              ].map((t) => (
                <Card key={t.title}>
                  <CardContent className="p-5">
                    <p className="font-semibold text-foreground mb-1">{t.title}</p>
                    <p className="text-sm text-muted-foreground">{t.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Also see{" "}
              <Link to="/guides/beat-the-heat" className="text-primary hover:underline">
                beating the Townsville heat
              </Link>{" "}
              and{" "}
              <Link to="/guides/sunset-walks" className="text-primary hover:underline">
                sunset walks
              </Link>
              .
            </p>
          </section>

          {/* Wet weather */}
          <section className="space-y-3" aria-labelledby="wet-weather">
            <h2
              id="wet-weather"
              className="text-2xl font-bold text-foreground flex items-center gap-2"
            >
              <CloudRain className="w-6 h-6 text-primary" />
              The Strand in Wet Weather
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The waterfront is exposed, and conditions can become uncomfortable during heavy rain
              or storms. Paths, parkland and facilities may be affected, and water-play or swimming
              facilities can close temporarily. Check weather warnings and Council notices before
              heading out.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              During severe weather, choose an indoor or sheltered option instead — our{" "}
              <Link to="/guides/rainy-day-activities" className="text-primary hover:underline">
                rainy day activities guide
              </Link>{" "}
              has alternatives.
            </p>
          </section>

          {/* Safety */}
          <section className="space-y-3" aria-labelledby="safety">
            <h2 id="safety" className="text-2xl font-bold text-foreground flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-primary" />
              Safety and Local Tips
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "Follow current stinger and swimming signage before entering the water",
                "Drink plenty of water — tropical heat and humidity build up quickly",
                "Wear sunscreen; UV levels are strong year-round",
                "Watch for cyclists and scooters on shared paths",
                "Do a quick overhead check before setting up under coconut palms in park areas — falling coconuts are a genuine hazard on windy days",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Events */}
          <section className="space-y-3" aria-labelledby="events">
            <h2 id="events" className="text-2xl font-bold text-foreground">
              Current Events and Temporary Changes
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The Strand regularly hosts markets, community events and sporting occasions, and
              nearby stadium event days can affect traffic and parking. Event dates, facility
              closures and maintenance schedules change, so check the{" "}
              <Link to="/events" className="text-primary hover:underline">
                Townsville events page
              </Link>{" "}
              and current Council notices close to your visit rather than relying on published
              dates.
            </p>
          </section>

          {/* Nearby */}
          <section className="space-y-3" aria-labelledby="nearby">
            <h2 id="nearby" className="text-2xl font-bold text-foreground flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              Nearby Attractions and Areas
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The Strand sits alongside North Ward, with Gregory Street connecting the foreshore to
              cafés and local shops a short walk back from the water. Jezzine Barracks anchors the
              northern end, Rowes Bay continues around the coast beyond it, and the marina end leads
              toward the CBD and the Magnetic Island ferry terminal. Castle Hill rises directly
              behind the area for the best views over the bay.
            </p>
          </section>

          {/* FAQ */}
          <section className="space-y-4" aria-labelledby="faq">
            <h2 id="faq" className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Info className="w-6 h-6 text-primary" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold text-foreground">{f.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
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

          <div className="flex justify-center pt-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/">Ask our Townsville AI a question</Link>
            </Button>
          </div>
        </main>
      </div>
    </>
  );
};

export default TheStrand;
