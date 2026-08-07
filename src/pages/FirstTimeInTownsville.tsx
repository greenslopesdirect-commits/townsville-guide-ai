import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Car,
  MapPin,
  Sun,
  ArrowRight,
  Waves,
  CloudRain,
  Baby,
  Wallet,
} from "lucide-react";
import heroImage from "@/assets/strand-hero.jpg";
import strandImg from "@/assets/the-strand-townsville.webp";
import castleHillImg from "@/assets/castle-hill-townsville.webp";
import jezzineImg from "@/assets/jezzine-barracks-townsville.webp";
import magneticImg from "@/assets/magnetic-island-townsville.webp";
import riverwayImg from "@/assets/ross-river-dam-townsville.webp";
import billabongImg from "@/assets/billabong-sanctuary-townsville.webp";

const SITE = "https://www.townsvilleguide.com.au";

const STAY_AREAS = [
  {
    name: "The Strand and North Ward",
    text: "The strongest general leisure base: waterfront access, restaurants and cafés, easy walking, Jezzine Barracks on the headland, and reasonably short trips into the CBD and the ferry area.",
  },
  {
    name: "Townsville CBD",
    text: "Useful for business travel, dining, the museum and central access, with the ferry terminal close by.",
  },
  {
    name: "Palmer Street and South Townsville",
    text: "Good for dining, with easy access to city attractions and the ferry area across the river.",
  },
  {
    name: "Magnetic Island",
    text: "Excellent if the island itself is the main focus of your trip, but it is a different holiday from using Townsville as your base — plan ferry timing around everything you do on the mainland.",
  },
];

const TRAVELLER_TYPES = [
  {
    icon: Baby,
    title: "With children",
    text: "Water play, wildlife, short walks and shaded parks make Townsville easy with kids, provided you plan around heat and rest time.",
    to: "/townsville-with-kids",
    linkText: "Townsville with Kids",
  },
  {
    icon: Wallet,
    title: "On a budget",
    text: "The waterfront, lookouts, public swimming areas and parks cost nothing, so a good first visit does not need a big budget.",
    to: "/guides/free-things",
    linkText: "Free Things to Do",
  },
  {
    icon: Car,
    title: "Without a car",
    text: "A central base plus the ferry covers most of the classic first-time experiences on foot.",
    to: "/townsville-without-a-car",
    linkText: "Townsville Without a Car",
  },
  {
    icon: Sun,
    title: "In very hot weather",
    text: "Shift outdoor sightseeing to the cooler ends of the day and build water or air conditioning into the middle.",
    to: "/guides/beat-the-heat",
    linkText: "Beat the Heat",
  },
  {
    icon: CloudRain,
    title: "In wet weather",
    text: "Passing showers rarely ruin a day, but steady rain or severe weather needs a different plan.",
    to: "/guides/rainy-day-activities",
    linkText: "Rainy Day Activities",
  },
];

const PATHWAYS = [
  { label: "One day", to: "/townsville-in-one-day", name: "Townsville in One Day" },
  { label: "No car", to: "/townsville-without-a-car", name: "Townsville Without a Car" },
  { label: "Kids", to: "/townsville-with-kids", name: "Townsville with Kids" },
  { label: "Budget", to: "/guides/free-things", name: "Free Things to Do" },
  { label: "Hot weather", to: "/guides/beat-the-heat", name: "Beat the Heat" },
  { label: "Rain", to: "/guides/rainy-day-activities", name: "Rainy Day Activities" },
  { label: "Magnetic Island", to: "/guides/magnetic-island-day-trip", name: "Magnetic Island Day Trip" },
  { label: "Mountain day trip", to: "/guides/paluma-day-trip", name: "Paluma Day Trip" },
];

const MISTAKES = [
  "Attempting Castle Hill on foot in peak heat rather than early morning or late afternoon.",
  "Trying to see all of Magnetic Island in a single day.",
  "Assuming every beach is suitable for swimming at all times.",
  "Allowing too little time for Magnetic Island — it deserves a full day, not a couple of hours.",
  "Treating Paluma as a quick suburban stop rather than a mountain day trip.",
  "Assuming Townsville is easily walkable end to end.",
  "Overlooking The Strand because it is \u201cjust a waterfront\u201d.",
  "Expecting Reef HQ to be open.",
  "Ignoring wet-season weather, road conditions and official warnings.",
  "Overpacking each day instead of leaving room for heat, rest and a slower pace.",
];

const NOT_TO_OVERTHINK = [
  "You do not have to walk Castle Hill — you can drive to the lookout.",
  "You do not need a car just to enjoy The Strand.",
  "You do not need to stay overnight on Magnetic Island to experience it.",
  "You do not need to fill every hour with attractions.",
  "Townsville works well at a relaxed pace.",
  "The Strand is worth visiting at more than one time of day — morning and evening feel quite different.",
];

const RELATED_GUIDES = [
  { name: "Townsville in One Day", to: "/townsville-in-one-day", image: strandImg },
  { name: "Townsville Without a Car", to: "/townsville-without-a-car", image: jezzineImg },
  { name: "Townsville with Kids", to: "/townsville-with-kids", image: billabongImg },
  { name: "Free Things to Do", to: "/guides/free-things", image: castleHillImg },
  { name: "Beat the Heat", to: "/guides/beat-the-heat", image: riverwayImg },
  { name: "Rainy Day Activities", to: "/guides/rainy-day-activities", image: magneticImg },
  { name: "The Strand", to: "/the-strand", image: strandImg },
  { name: "Castle Hill", to: "/castle-hill", image: castleHillImg },
  { name: "Walking Castle Hill", to: "/guides/walking-castle-hill", image: castleHillImg },
  { name: "Magnetic Island Day Trip", to: "/guides/magnetic-island-day-trip", image: magneticImg },
  { name: "Magnetic Island Ferry", to: "/guides/magnetic-island-ferry", image: magneticImg },
  { name: "Paluma Day Trip", to: "/guides/paluma-day-trip", image: riverwayImg },
  { name: "Stinger Safety", to: "/guides/stinger-safety", image: strandImg },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "How many days do you need in Townsville?",
    a: "Three to four days suits most first visits. Two days is the minimum worthwhile stay: one for The Strand, Jezzine Barracks and Castle Hill, and one for Magnetic Island. Four days or more lets you add Paluma, the northern beaches, museums, wildlife or extra island time.",
  },
  {
    q: "What should I do first in Townsville?",
    a: "Walk The Strand. It is the easiest introduction to the city, it is free, it is close to most central accommodation, and it works well in the early morning or late afternoon while you get used to the heat.",
  },
  {
    q: "What are the three must-see places in Townsville?",
    a: "The Strand, Castle Hill and Magnetic Island. Between them they cover the waterfront, the city's best viewpoint and the region's best day trip. Everything else is an addition based on your time, transport, weather and budget.",
  },
  {
    q: "Do I need a car in Townsville?",
    a: "Not necessarily for a short first visit. If you stay around The Strand, North Ward or the CBD you can walk to the waterfront, Jezzine Barracks and the ferry terminal. A car makes the wider region — Riverway, Billabong Sanctuary, Pallarenda, the northern beaches and Paluma — much easier.",
  },
  {
    q: "Where should first-time visitors stay?",
    a: "The Strand and North Ward are the strongest general base for a leisure visit thanks to waterfront access, dining, walking and proximity to the CBD and ferry area. The CBD and Palmer Street also work well, particularly for dining and central access.",
  },
  {
    q: "Is Magnetic Island worth visiting?",
    a: "Yes. For most first-time visitors it is the single strongest experience in the region, and a passenger ferry day trip from Townsville is straightforward. Allow a full day rather than trying to squeeze it around other plans.",
  },
  {
    q: "Can you visit Townsville without going to Magnetic Island?",
    a: "Yes. The Strand, Castle Hill, Jezzine Barracks, Riverway, the museum and the CBD easily fill a short trip. If you only have one day, a focused mainland itinerary is usually more rewarding than a rushed island visit.",
  },
  {
    q: "Can you swim at Townsville beaches?",
    a: "In places, but do not assume every beach is suitable. Use designated swimming areas, follow current signs and local advice, understand marine-stinger risks, supervise children closely and check conditions before entering the water.",
  },
  {
    q: "Is Townsville suitable for children?",
    a: "Yes. The Strand water play areas, Riverway, Jezzine Barracks, Billabong Sanctuary and Magnetic Island all suit families. The main planning task is heat management and building rest into the middle of the day.",
  },
  {
    q: "Is Townsville too hot for sightseeing?",
    a: "No, but it needs a different rhythm from a cooler southern city. Do exposed outdoor sightseeing early, use shade, swimming, lunch or indoor time around the middle of the day, and head back outdoors later. Humidity can make conditions feel harder than the forecast maximum suggests.",
  },
  {
    q: "What can you do when it rains?",
    a: "Passing showers rarely stop a Townsville day. For steady rain there are museums, galleries, libraries, cinemas and food-based options. In severe weather, follow Bureau of Meteorology warnings and the Townsville Disaster Dashboard, and never drive through floodwater.",
  },
  {
    q: "Is Reef HQ open?",
    a: "No. The Great Barrier Reef Aquarium, formerly known as Reef HQ, is closed for redevelopment and is not currently available to visitors. Check the official aquarium website for redevelopment and reopening updates.",
  },
];

const FirstTimeInTownsville = () => {
  return (
    <>
      <SEOHead
        title="First Time in Townsville | Essential Local Visitor Guide"
        description="Visiting Townsville for the first time? Find out what not to miss, how many days you need, where to stay, transport tips, weather advice and easy itineraries."
        canonical={`${SITE}/first-time-in-townsville`}
        ogType="article"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "First Time in Townsville: What You Need to Know",
            description:
              "Visiting Townsville for the first time? Find out what not to miss, how many days you need, where to stay, transport tips, weather advice and easy itineraries.",
            author: { "@type": "Person", name: "Duncan Ross" },
            publisher: { "@type": "Organization", name: "Townsville Guide" },
            dateModified: "2026-08-07",
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
            mainEntity: FAQS.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          })}
        </script>
      </Helmet>

      {/* Hero */}
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
            First Time in Townsville: What You Need to Know
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            If you do nothing else on a first visit, do these three:{" "}
            <Link to="/the-strand" className="text-primary underline underline-offset-2">
              The Strand
            </Link>
            ,{" "}
            <Link to="/castle-hill" className="text-primary underline underline-offset-2">
              Castle Hill
            </Link>{" "}
            and{" "}
            <Link
              to="/guides/magnetic-island-day-trip"
              className="text-primary underline underline-offset-2"
            >
              Magnetic Island
            </Link>
            . Everything else — Jezzine Barracks, Riverway, Billabong Sanctuary, the museums, Paluma
            or the northern beaches — is an addition based on how long you are staying, whether you
            have a car, the weather, whether you are travelling with children and your budget.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <a href="#three-things">If You Only Do Three Things</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#how-many-days">How Many Days Do You Need?</a>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-12 space-y-14">
        <GuideQuickFacts />

        {/* Three things */}
        <section id="three-things" aria-labelledby="three-things-heading" className="scroll-mt-24">
          <h2 id="three-things-heading" className="text-2xl md:text-3xl font-bold mb-6">
            If You Only Do Three Things
          </h2>

          <div className="space-y-6">
            <Card className="overflow-hidden">
              <img
                src={strandImg}
                alt="The Strand promenade and beach in Townsville"
                loading="lazy"
                className="w-full aspect-[16/7] object-cover"
              />
              <CardContent className="p-5 md:p-6">
                <h3 className="text-xl font-semibold mb-2">1. Walk The Strand</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  The Strand is the easiest introduction to Townsville. It is a long waterfront
                  promenade with easy walking, designated swimming areas and water-play options for
                  children, cafés and restaurants close by, and shaded parks along the way. It suits
                  families, it costs nothing, and it feels quite different in the morning and the
                  evening — both are worth seeing.
                </p>
                <Link
                  to="/the-strand"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Read the full Strand guide <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <img
                src={castleHillImg}
                alt="View over Townsville from the Castle Hill lookout"
                loading="lazy"
                className="w-full aspect-[16/7] object-cover"
              />
              <CardContent className="p-5 md:p-6">
                <h3 className="text-xl font-semibold mb-2">2. See Townsville From Castle Hill</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  The lookout is the quickest way to understand Townsville geographically — the
                  city, the river, The Strand, the port and Magnetic Island all make sense from up
                  there. You can drive to the summit; walking is entirely optional, and if you do
                  walk, it needs more heat and fitness planning than most visitors expect.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/castle-hill"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Castle Hill guide <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/guides/walking-castle-hill"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Walking Castle Hill <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <img
                src={magneticImg}
                alt="Bay and headland scenery on Magnetic Island near Townsville"
                loading="lazy"
                className="w-full aspect-[16/7] object-cover"
              />
              <CardContent className="p-5 md:p-6">
                <h3 className="text-xl font-semibold mb-2">3. Spend a Day on Magnetic Island</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  For most first-time visitors the island is the strongest experience in the region:
                  bays and beaches, bushwalks, wildlife and a much slower pace, all reached by a
                  short passenger ferry from the Townsville terminal. Give it a full day rather than
                  a few hours, and decide in advance whether you are travelling as a foot passenger
                  or taking a vehicle.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/guides/magnetic-island-day-trip"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Magnetic Island Day Trip <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/guides/magnetic-island-ferry"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Ferry guide <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/guides/forts-walk-magnetic-island"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Forts Walk <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How many days */}
        <section id="how-many-days" aria-labelledby="how-many-days-heading" className="scroll-mt-24">
          <h2 id="how-many-days-heading" className="text-2xl md:text-3xl font-bold mb-6">
            How Many Days Do You Need?
          </h2>
          <div className="space-y-5">
            <div className="rounded-lg border border-border bg-muted/30 p-5">
              <h3 className="font-semibold text-foreground mb-1">One day</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                One day is enough for a genuinely useful introduction, but you have to prioritise
                rather than trying to cover everything. Our dedicated itinerary sets out a realistic
                version.
              </p>
              <Link
                to="/townsville-in-one-day"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                Townsville in One Day <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="rounded-lg border border-border bg-muted/30 p-5">
              <h3 className="font-semibold text-foreground mb-2">Two days</h3>
              <ul className="text-sm text-muted-foreground leading-relaxed list-disc pl-5 space-y-1">
                <li>
                  <strong className="text-foreground">Day 1:</strong>{" "}
                  <Link to="/the-strand" className="text-primary underline underline-offset-2">
                    The Strand
                  </Link>
                  ,{" "}
                  <Link
                    to="/guides/jezzine-barracks"
                    className="text-primary underline underline-offset-2"
                  >
                    Jezzine Barracks
                  </Link>{" "}
                  and{" "}
                  <Link to="/castle-hill" className="text-primary underline underline-offset-2">
                    Castle Hill
                  </Link>
                  .
                </li>
                <li>
                  <strong className="text-foreground">Day 2:</strong>{" "}
                  <Link
                    to="/guides/magnetic-island-day-trip"
                    className="text-primary underline underline-offset-2"
                  >
                    Magnetic Island
                  </Link>
                  .
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-muted/30 p-5">
              <h3 className="font-semibold text-foreground mb-2">Three days</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                Add one or two of the following — not all of them. A third day works best when it is
                relaxed.
              </p>
              <ul className="text-sm text-muted-foreground leading-relaxed list-disc pl-5 space-y-1">
                <li>
                  <Link
                    to="/billabong-sanctuary"
                    className="text-primary underline underline-offset-2"
                  >
                    Billabong Sanctuary
                  </Link>{" "}
                  for wildlife.
                </li>
                <li>
                  Riverway on the Ross River for lagoons, parkland and riverside paths — see{" "}
                  <Link to="/things-to-do" className="text-primary underline underline-offset-2">
                    things to do
                  </Link>
                  .
                </li>
                <li>The CBD and the Museum of Tropical Queensland.</li>
                <li>More unhurried time on The Strand, including a second visit at another time of day.</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-muted/30 p-5">
              <h3 className="font-semibold text-foreground mb-2">Four days or more</h3>
              <ul className="text-sm text-muted-foreground leading-relaxed list-disc pl-5 space-y-1">
                <li>
                  A mountain day trip to{" "}
                  <Link
                    to="/guides/paluma-day-trip"
                    className="text-primary underline underline-offset-2"
                  >
                    Paluma
                  </Link>
                  .
                </li>
                <li>
                  Northern beaches and{" "}
                  <Link to="/pallarenda-beach" className="text-primary underline underline-offset-2">
                    Pallarenda
                  </Link>{" "}
                  — see the{" "}
                  <Link to="/beaches" className="text-primary underline underline-offset-2">
                    beaches guide
                  </Link>
                  .
                </li>
                <li>
                  Extra time on Magnetic Island, including the{" "}
                  <Link
                    to="/guides/forts-walk-magnetic-island"
                    className="text-primary underline underline-offset-2"
                  >
                    Forts Walk
                  </Link>
                  .
                </li>
                <li>Museums, galleries and wildlife experiences.</li>
                <li>
                  Local{" "}
                  <Link to="/events" className="text-primary underline underline-offset-2">
                    events
                  </Link>{" "}
                  and slower Townsville days with no fixed plan.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Car */}
        <section aria-labelledby="need-a-car">
          <h2 id="need-a-car" className="text-2xl md:text-3xl font-bold mb-4">
            Do You Need a Car?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Not necessarily for a short first visit — but a car makes the wider Townsville region
            much easier to explore.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-2">Without a car</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Base yourself around The Strand, North Ward or the CBD and you can reach the
                  waterfront, Jezzine Barracks, dining and the ferry terminal without driving. That
                  covers two of the three headline experiences plus the island.
                </p>
                <Link
                  to="/townsville-without-a-car"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  Townsville Without a Car <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-2">With a car</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A car is genuinely useful for Riverway, Billabong Sanctuary, Paluma, Pallarenda,
                  the northern beaches and wider regional exploration — and for driving to the
                  Castle Hill lookout instead of walking.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Where to stay */}
        <section aria-labelledby="where-to-stay">
          <h2 id="where-to-stay" className="text-2xl md:text-3xl font-bold mb-2">
            Where Should First-Time Visitors Stay?
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
                    <MapPin
                      className="w-5 h-5 mt-0.5 text-primary flex-shrink-0"
                      aria-hidden="true"
                    />
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

        {/* Traveller type */}
        <section aria-labelledby="traveller-type">
          <h2 id="traveller-type" className="text-2xl md:text-3xl font-bold mb-6">
            First Visit by Traveller Type
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {TRAVELLER_TYPES.map(({ icon: Icon, title, text, to, linkText }) => (
              <Card key={title}>
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <Icon className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-2">{text}</p>
                      <Link
                        to={to}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                      >
                        {linkText} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Swimming */}
        <section aria-labelledby="swimming">
          <h2 id="swimming" className="text-2xl md:text-3xl font-bold mb-4">
            First-Time Swimming Advice
          </h2>
          <div className="rounded-xl border border-border bg-muted/40 p-5 md:p-6">
            <div className="flex items-start gap-3 mb-4">
              <Waves className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
              <p className="text-muted-foreground leading-relaxed">
                Townsville is tropical coastal Queensland, and swimming here works differently from
                a southern beach holiday.
              </p>
            </div>
            <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
              <li>Do not assume every beach is suitable for swimming.</li>
              <li>Use designated swimming areas, including patrolled areas and stinger enclosures where appropriate.</li>
              <li>Follow current signs and local advice, including closures.</li>
              <li>Understand marine-stinger risks before entering the water.</li>
              <li>Supervise children closely at all times.</li>
              <li>Check current conditions before swimming.</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              More detail:{" "}
              <Link
                to="/guides/stinger-safety"
                className="text-primary underline underline-offset-2"
              >
                stinger safety
              </Link>
              ,{" "}
              <Link to="/beaches" className="text-primary underline underline-offset-2">
                Townsville beaches
              </Link>{" "}
              and{" "}
              <Link to="/the-strand" className="text-primary underline underline-offset-2">
                The Strand
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Heat */}
        <section aria-labelledby="heat">
          <h2 id="heat" className="text-2xl md:text-3xl font-bold mb-4">
            First-Time Heat Advice
          </h2>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>
              One of the easiest first-time mistakes is planning Townsville like a cooler southern
              city.
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Do exposed outdoor sightseeing early in the day.</li>
              <li>Use shade, swimming, lunch or indoor time around the middle of the day.</li>
              <li>Head back outdoors later in the afternoon and evening.</li>
              <li>
                Castle Hill walking tracks need particular care — see{" "}
                <Link
                  to="/guides/walking-castle-hill"
                  className="text-primary underline underline-offset-2"
                >
                  Walking Castle Hill
                </Link>
                .
              </li>
              <li>
                Humidity can make conditions feel harder than the forecast maximum suggests.
              </li>
            </ul>
          </div>
          <Button asChild variant="outline" className="mt-5">
            <Link to="/guides/beat-the-heat">Read Beat the Heat</Link>
          </Button>
        </section>

        {/* Wet season */}
        <section aria-labelledby="wet-season">
          <h2 id="wet-season" className="text-2xl md:text-3xl font-bold mb-4">
            What Changes in the Wet Season?
          </h2>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            <li>Passing showers do not necessarily ruin a visit.</li>
            <li>Significant tropical weather requires a different plan, not a rearranged one.</li>
            <li>
              Check the Bureau of Meteorology forecast and warnings and the Townsville Disaster
              Dashboard.
            </li>
            <li>Never drive through floodwater.</li>
            <li>Avoid rushing to creeks or swimming holes after heavy rain.</li>
            <li>Ferry services and outdoor plans may need changing at short notice.</li>
          </ul>
          <Button asChild variant="outline" className="mt-5">
            <Link to="/guides/rainy-day-activities">Rainy Day Activities</Link>
          </Button>
        </section>

        {/* Not to overthink */}
        <section aria-labelledby="not-overthink">
          <h2 id="not-overthink" className="text-2xl md:text-3xl font-bold mb-4">
            What Not to Overthink
          </h2>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            {NOT_TO_OVERTHINK.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Mistakes */}
        <section aria-labelledby="mistakes">
          <h2 id="mistakes" className="text-2xl md:text-3xl font-bold mb-4">
            Common First-Time Mistakes
          </h2>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            {MISTAKES.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            The Great Barrier Reef Aquarium, formerly known as Reef HQ, is closed for redevelopment
            and is not currently available to visitors. See our{" "}
            <Link
              to="/great-barrier-reef-townsville"
              className="text-primary underline underline-offset-2"
            >
              reef and aquarium status page
            </Link>{" "}
            for current alternatives, and our{" "}
            <Link to="/useful-contacts" className="text-primary underline underline-offset-2">
              useful contacts
            </Link>{" "}
            page for official information sources.
          </p>
        </section>

        {/* First 24 hours */}
        <section aria-labelledby="first-24">
          <h2 id="first-24" className="text-2xl md:text-3xl font-bold mb-4">
            Your First 24 Hours in Townsville
          </h2>
          <ol className="space-y-4">
            {[
              {
                label: "Arrival",
                text: "Check in, get settled, and take a look at the weather forecast and how much daylight you have left.",
              },
              {
                label: "Late afternoon",
                text: "Head to The Strand for a walk, a swim in a designated area or simply a look at the waterfront as the heat eases.",
              },
              {
                label: "Sunset",
                text: "If conditions are suitable, drive up to the Castle Hill lookout for the view over the city, the river and the island.",
              },
              {
                label: "Evening",
                text: "Dinner around The Strand, the CBD or Palmer Street, depending on where you are staying.",
              },
              {
                label: "Next morning",
                text: "Either take the ferry to Magnetic Island for a full day, or keep exploring Townsville — Jezzine Barracks, the museum, Riverway — depending on how long your trip is.",
              },
            ].map((step) => (
              <li key={step.label} className="rounded-lg border border-border bg-muted/30 p-5">
                <p className="font-semibold text-foreground">{step.label}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-muted-foreground">
            Only have one day? Follow{" "}
            <Link to="/townsville-in-one-day" className="text-primary underline underline-offset-2">
              Townsville in One Day
            </Link>{" "}
            instead.
          </p>
        </section>

        {/* Pathways */}
        <section aria-labelledby="plan-your-trip">
          <h2 id="plan-your-trip" className="text-2xl md:text-3xl font-bold mb-6">
            Plan Your First Townsville Trip
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {PATHWAYS.map((p) => (
              <Link key={p.to + p.label} to={p.to} className="group">
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardContent className="p-4 flex items-center justify-between gap-3">
                    <span className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">{p.label}</span> → {p.name}
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

        {/* FAQ */}
        <section aria-labelledby="faq">
          <h2 id="faq" className="text-2xl md:text-3xl font-bold mb-6">
            First-Time Visitor Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((item) => (
              <div key={item.q} className="rounded-lg border border-border bg-muted/30 p-5">
                <h3 className="font-semibold text-foreground mb-1">{item.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related guides */}
        <section aria-labelledby="related-guides">
          <h2 id="related-guides" className="text-2xl md:text-3xl font-bold mb-6">
            Related Townsville Guides
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RELATED_GUIDES.map((g) => (
              <Link key={g.to} to={g.to} className="group">
                <Card className="h-full overflow-hidden transition-shadow hover:shadow-md">
                  <img
                    src={g.image}
                    alt={`${g.name} guide, Townsville`}
                    loading="lazy"
                    className="w-full aspect-[16/10] object-cover"
                  />
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
