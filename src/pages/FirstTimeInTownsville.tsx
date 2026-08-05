import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Car,
  CalendarDays,
  Footprints,
  Ship,
  Users,
  MapPin,
  Sun,
  ArrowRight,
} from "lucide-react";
import heroImage from "@/assets/strand-hero.jpg";
import strandImg from "@/assets/the-strand-townsville.webp";
import castleHillImg from "@/assets/castle-hill-townsville.webp";
import jezzineImg from "@/assets/jezzine-barracks-townsville.webp";
import magneticImg from "@/assets/magnetic-island-townsville.webp";
import riverwayImg from "@/assets/ross-river-dam-townsville.webp";
import reefImg from "@/assets/great-barrier-reef-aquarium-townsville.webp";

const QUICK_ANSWERS = [
  {
    icon: Clock,
    q: "How long should you stay?",
    a: "Two to three days is enough for the main Townsville attractions. Allow an extra day if you are visiting Magnetic Island.",
  },
  {
    icon: Car,
    q: "Do you need a car?",
    a: "A car is helpful for places outside the city centre, including Paluma, Little Crystal Creek, Billabong Sanctuary and some beaches. The Strand, CBD, North Ward and ferry terminal are easier to explore without one.",
  },
  {
    icon: CalendarDays,
    q: "Best time to visit",
    a: "The cooler and drier months are generally the most comfortable for outdoor sightseeing. Visitors during the hotter and wetter months should plan around heat, humidity and possible heavy rain.",
  },
  {
    icon: Footprints,
    q: "Is Townsville walkable?",
    a: "The Strand, North Ward, CBD and ferry area are reasonably walkable, but Townsville is spread out and many attractions require driving.",
  },
  {
    icon: Ship,
    q: "How many days for Magnetic Island?",
    a: "A day trip works well for a first visit, although an overnight stay gives more time to explore the beaches, walks and quieter parts of the island.",
  },
  {
    icon: Users,
    q: "Is Townsville family-friendly?",
    a: "Yes. The Strand, Riverway, Jezzine Barracks, Magnetic Island and several nearby day trips suit families.",
  },
];

const STAY_AREAS = [
  {
    name: "North Ward and The Strand",
    text: "Best for first-time visitors who want beaches, walking paths, cafés, parks and easy access to central attractions.",
  },
  {
    name: "Townsville CBD",
    text: "Useful for business travel, events, dining and access to the ferry terminal.",
  },
  {
    name: "Palmer Street and South Townsville",
    text: "Good for restaurants and visitors who want to stay near the city without being directly on The Strand.",
  },
  {
    name: "Near the airport or suburban areas",
    text: "More suitable for short overnight stays, work trips or visitors with a car.",
  },
];

const ATTRACTIONS = [
  {
    name: "The Strand",
    image: strandImg,
    text: "Townsville's beachfront promenade with swimming areas, playgrounds, parks and cafés.",
    time: "2–3 hours",
    free: "Free",
    to: "/the-strand",
  },
  {
    name: "Castle Hill",
    image: castleHillImg,
    text: "The pink granite lookout above the city, reachable on foot or by car.",
    time: "1–2 hours",
    free: "Free",
    to: "/castle-hill",
  },
  {
    name: "Jezzine Barracks",
    image: jezzineImg,
    text: "A headland precinct combining coastal walks, public art and military history.",
    time: "1–2 hours",
    free: "Free",
    to: "/guides/jezzine-barracks",
  },
  {
    name: "Magnetic Island",
    image: magneticImg,
    text: "A short passenger ferry ride to beaches, bushwalks and wildlife.",
    time: "Full day",
    free: "Ferry fare applies",
    to: "/guides/magnetic-island-day-trip",
  },
  {
    name: "Riverway",
    image: riverwayImg,
    text: "Riverside lagoons, parkland and walking paths along the Ross River — check current availability before visiting.",
    time: "2–3 hours",
    free: "Free",
    to: "/things-to-do",
  },
  {
    name: "Reef and marine attractions",
    image: reefImg,
    text: "Reef-focused attractions and tours operating from Townsville — check current availability before visiting.",
    time: "Half day",
    free: "Paid",
    to: "/great-barrier-reef-townsville",
  },
];

const DAY_PLAN = [
  {
    label: "Morning",
    text: "Walk along The Strand and stop for breakfast or coffee.",
  },
  {
    label: "Late morning",
    text: "Visit Jezzine Barracks and explore the waterfront and military history area.",
  },
  {
    label: "Afternoon",
    text: "Spend time at the Museum of Tropical Queensland, Reef HQ area, Riverway or another suitable attraction depending on current availability and weather.",
  },
  {
    label: "Late afternoon or sunset",
    text: "Drive to Castle Hill for the views.",
  },
  {
    label: "Evening",
    text: "Choose dinner around Palmer Street, Gregory Street, The Strand or the CBD.",
  },
];

const MISTAKES = [
  "Trying to walk everywhere.",
  "Underestimating the heat.",
  "Leaving Magnetic Island planning too late.",
  "Assuming every beach is suitable for swimming at all times.",
  "Planning too many regional attractions in one day.",
  "Not checking opening days and hours.",
  "Visiting Castle Hill during the hottest part of the afternoon.",
  "Assuming Townsville and the wider North Queensland region are all close together.",
];

const NEXT_GUIDES = [
  { name: "Things to Do", to: "/things-to-do" },
  { name: "Townsville with Kids", to: "/townsville-with-kids" },
  { name: "Food and Dining", to: "/food" },
  { name: "Dog-Friendly Townsville", to: "/dog-friendly" },
  { name: "Magnetic Island Day Trip", to: "/guides/magnetic-island-day-trip" },
  { name: "Stinger Safety", to: "/guides/stinger-safety" },
  { name: "Local Tips", to: "/local-tips" },
  { name: "Castle Hill", to: "/castle-hill" },
  { name: "Little Crystal Creek", to: "/little-crystal-creek-townsville" },
];

const SITE = "https://www.townsvilleguide.com.au";

const FirstTimeInTownsville = () => {
  return (
    <>
      <SEOHead
        title="First Time in Townsville: Complete Visitor Guide"
        description="Visiting Townsville for the first time? Learn how long to stay, where to stay, whether you need a car, what to see and how to plan your visit."
        canonical={`${SITE}/first-time-in-townsville`}
        ogType="article"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "First Time in Townsville: Everything You Need to Know",
            description:
              "Visiting Townsville for the first time? Learn how long to stay, where to stay, whether you need a car, what to see and how to plan your visit.",
            author: { "@type": "Person", name: "Duncan Ross" },
            publisher: { "@type": "Organization", name: "Townsville Guide" },
            mainEntityOfPage: `${SITE}/first-time-in-townsville`,
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
                name: "First Time in Townsville",
                item: `${SITE}/first-time-in-townsville`,
              },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: QUICK_ANSWERS.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          })}
        </script>
      </Helmet>

      {/* 1. Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="The Strand waterfront in Townsville, North Queensland"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" />
        </div>
        <div className="relative container mx-auto max-w-4xl px-4 py-16 md:py-24 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
            First Time in Townsville? Start Here
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Townsville is easy to enjoy once you understand the distances, weather, transport and
            best areas to visit. This practical first-time guide explains how long to stay, whether
            you need a car, where to base yourself and what not to miss.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <a href="#plan-your-stay">Plan Your Stay</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/things-to-do">See the Top Attractions</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-12 space-y-14">
        {/* 2. Quick answers */}
        <section aria-labelledby="quick-answers">
          <h2 id="quick-answers" className="text-2xl md:text-3xl font-bold mb-6">
            Quick Answers for First-Time Visitors
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {QUICK_ANSWERS.map(({ icon: Icon, q, a }) => (
              <Card key={q} className="bg-muted/40">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <Icon className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{q}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 3. Before you arrive */}
        <section id="plan-your-stay" aria-labelledby="before-you-arrive" className="scroll-mt-24">
          <h2 id="before-you-arrive" className="text-2xl md:text-3xl font-bold mb-4">
            Before You Arrive
          </h2>
          <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pl-5">
            <li>
              <Link to="/townsville-airport" className="text-primary underline underline-offset-2">
                Townsville Airport
              </Link>{" "}
              is close to the city, so transfers are short.
            </li>
            <li>
              Public transport exists but is limited compared with larger Australian cities.
            </li>
            <li>
              Check current weather and road conditions before regional day trips, such as{" "}
              <Link
                to="/little-crystal-creek-townsville"
                className="text-primary underline underline-offset-2"
              >
                Little Crystal Creek
              </Link>
              .
            </li>
            <li>
              Sunscreen, water and sun protection matter throughout the year — see our{" "}
              <Link to="/guides/beat-the-heat" className="text-primary underline underline-offset-2">
                beat the heat guide
              </Link>
              .
            </li>
            <li>
              Check swimming conditions and{" "}
              <Link
                to="/guides/stinger-safety"
                className="text-primary underline underline-offset-2"
              >
                marine stinger advice
              </Link>{" "}
              before entering the water.
            </li>
            <li>
              Some restaurants, cafés and attractions may close earlier than visitors expect — our{" "}
              <Link to="/local-tips" className="text-primary underline underline-offset-2">
                local tips
              </Link>{" "}
              cover the practical details.
            </li>
          </ul>
        </section>

        {/* 4. Where to stay */}
        <section aria-labelledby="where-to-stay">
          <h2 id="where-to-stay" className="text-2xl md:text-3xl font-bold mb-2">
            Where Should You Stay in Townsville?
          </h2>
          <p className="text-muted-foreground mb-6">
            These are general area recommendations to help you choose a base, not endorsements of
            specific accommodation.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {STAY_AREAS.map((area) => (
              <Card key={area.name}>
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{area.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{area.text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            For more detail, see our{" "}
            <Link to="/accommodation" className="text-primary underline underline-offset-2">
              Townsville accommodation guide
            </Link>
            .
          </p>
        </section>

        {/* 5. Attractions */}
        <section aria-labelledby="see-first">
          <h2 id="see-first" className="text-2xl md:text-3xl font-bold mb-6">
            What Should You See First?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ATTRACTIONS.map((a) => (
              <Card key={a.name} className="overflow-hidden flex flex-col">
                <img
                  src={a.image}
                  alt={`${a.name}, Townsville`}
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover"
                />
                <CardContent className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{a.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{a.text}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-4">
                    <span className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5">
                      <Clock className="w-3 h-3" aria-hidden="true" />
                      {a.time}
                    </span>
                    <span className="rounded-full border border-border px-2 py-0.5">{a.free}</span>
                  </div>
                  <Link
                    to={a.to}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Read the guide
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 6. First day plan */}
        <section aria-labelledby="first-day">
          <h2 id="first-day" className="text-2xl md:text-3xl font-bold mb-2">
            A Simple First Day in Townsville
          </h2>
          <p className="text-muted-foreground mb-6">
            Attraction availability changes, so check current opening days and hours before
            visiting.
          </p>
          <ol className="space-y-4">
            {DAY_PLAN.map((step) => (
              <li key={step.label} className="rounded-lg border border-border bg-muted/30 p-5">
                <p className="font-semibold text-foreground">{step.label}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 7. Magnetic Island */}
        <section aria-labelledby="magnetic-island">
          <h2 id="magnetic-island" className="text-2xl md:text-3xl font-bold mb-4">
            Should You Visit Magnetic Island?
          </h2>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>
              Magnetic Island is one of the main reasons many visitors come to Townsville.
              Passenger ferries leave from the Townsville ferry terminal, and a day trip is
              comfortably possible.
            </p>
            <p>
              Taking a car across is not always necessary — plan your transport on the island
              before you travel. If you have more time, an extra day gives you room for the
              beaches, walks and wildlife.
            </p>
          </div>
          <Button asChild className="mt-6">
            <Link to="/guides/magnetic-island-day-trip">Plan a Magnetic Island Day Trip</Link>
          </Button>
        </section>

        {/* 8. Weather and safety */}
        <section aria-labelledby="weather-safety">
          <h2 id="weather-safety" className="text-2xl md:text-3xl font-bold mb-4">
            Weather and Safety
          </h2>
          <div className="rounded-xl border border-border bg-muted/40 p-5 md:p-6">
            <div className="flex items-start gap-3 mb-4">
              <Sun className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
              <p className="text-muted-foreground leading-relaxed">
                Townsville's climate is warm year-round, with heat and humidity peaking in the
                wetter months. A little planning keeps things comfortable.
              </p>
            </div>
            <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
              <li>Plan outdoor walks for the early morning or late afternoon rather than midday.</li>
              <li>Wet-season rain can be heavy — allow flexibility in your plans.</li>
              <li>
                Use sun protection and carry water; our{" "}
                <Link
                  to="/guides/beat-the-heat"
                  className="text-primary underline underline-offset-2"
                >
                  beat the heat guide
                </Link>{" "}
                has more detail.
              </li>
              <li>
                Check{" "}
                <Link
                  to="/guides/stinger-safety"
                  className="text-primary underline underline-offset-2"
                >
                  marine stinger advice
                </Link>{" "}
                before swimming, and swim between the flags or inside stinger enclosures.
              </li>
              <li>
                Be crocodile aware near natural waterways, creeks and estuaries, and do not swim
                where signage advises against it.
              </li>
              <li>Follow official signs and warnings, including beach and creek closures.</li>
            </ul>
          </div>
        </section>

        {/* 9. Getting around */}
        <section aria-labelledby="getting-around">
          <h2 id="getting-around" className="text-2xl md:text-3xl font-bold mb-4">
            Getting Around Townsville
          </h2>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            <li>A car gives visitors the most flexibility, especially outside the city centre.</li>
            <li>Rideshare and taxis are available.</li>
            <li>
              Buses can be useful for selected routes but may not suit every itinerary — check
              current services before relying on them.
            </li>
            <li>The Strand, CBD and ferry terminal area can be explored on foot.</li>
            <li>
              Regional attractions such as Paluma, Little Crystal Creek and Billabong Sanctuary
              usually require a car.
            </li>
            <li>
              Check driving times rather than judging distances from the map alone — North
              Queensland distances are longer than they look.
            </li>
          </ul>
        </section>

        {/* 10. Mistakes */}
        <section aria-labelledby="mistakes">
          <h2 id="mistakes" className="text-2xl md:text-3xl font-bold mb-4">
            Common First-Time Visitor Mistakes
          </h2>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            {MISTAKES.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </section>

        {/* 11. Next guides */}
        <section aria-labelledby="next-guides">
          <h2 id="next-guides" className="text-2xl md:text-3xl font-bold mb-6">
            Plan the Rest of Your Visit
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {NEXT_GUIDES.map((g) => (
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

export default FirstTimeInTownsville;
