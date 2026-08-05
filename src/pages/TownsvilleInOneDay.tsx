import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sunrise,
  Utensils,
  Landmark,
  Trees,
  Footprints,
  Sun,
  CloudRain,
  Car,
  ArrowRight,
  Clock,
} from "lucide-react";
import heroImage from "@/assets/castle-hill-townsville.webp";

const SITE = "https://www.townsvilleguide.com.au";

const SUMMARY = [
  { label: "Morning", text: "The Strand and Jezzine Barracks" },
  { label: "Lunch", text: "North Ward, Gregory Street, The Strand or Palmer Street" },
  { label: "Afternoon", text: "Museum, CBD or Riverway depending on weather and interests" },
  { label: "Sunset", text: "Castle Hill" },
  { label: "Evening", text: "Dinner in one of Townsville's main dining areas" },
];

const SUITS = [
  "First-time visitors",
  "Couples",
  "Families with school-aged children",
  "Road-trippers stopping overnight",
  "Visitors before or after a Magnetic Island trip",
  "People who want a relaxed overview rather than a packed schedule",
];

const LUNCH_AREAS = [
  {
    name: "North Ward and Gregory Street",
    text: "Convenient after The Strand and Jezzine Barracks, with cafés and casual dining.",
  },
  {
    name: "The Strand",
    text: "Suitable for visitors who want to remain near the waterfront.",
  },
  {
    name: "Palmer Street",
    text: "A good choice for visitors driving toward the CBD or South Townsville.",
  },
  {
    name: "Townsville CBD",
    text: "Useful if the afternoon plan includes a museum, gallery or city-centre stop.",
  },
];

const AFTERNOON = [
  {
    icon: Landmark,
    title: "Option A: Museum and CBD",
    best: ["History", "Culture", "Indoor time", "Hot or wet weather"],
    text: "The Museum of Tropical Queensland and the central galleries sit within walking distance of much of the CBD, making this the easiest option when the weather is uncomfortable. Check current opening hours and attraction availability before visiting.",
  },
  {
    icon: Trees,
    title: "Option B: Riverway",
    best: ["Families", "Open space", "Walking", "A more relaxed afternoon"],
    text: "Riverway sits along the Ross River with parkland and walking paths, and suits families who want space rather than another city stop. It is a short drive from the CBD, so allow travel time in both directions and check current availability before heading out.",
  },
  {
    icon: Footprints,
    title: "Option C: More time around The Strand and North Ward",
    best: ["Visitors without a car", "Relaxed travellers", "Families", "People who prefer not to cross the city"],
    text: "Staying put works well: more waterfront walking, a longer stop at a café, the parks and playgrounds along The Strand, or a slower second look at Jezzine Barracks.",
  },
];

const DINNER_AREAS = ["Palmer Street", "Gregory Street", "The Strand", "Townsville CBD", "South Townsville"];

const LEAVE_FOR_ANOTHER_DAY = [
  "Magnetic Island",
  "Paluma",
  "Little Crystal Creek",
  "Charters Towers",
  "A long regional drive",
  "Several major indoor attractions",
];

const HOT_WEATHER = [
  "Complete the outdoor walking early in the day.",
  "Carry water and refill where you can.",
  "Use shade and sun protection throughout the day.",
  "Choose an indoor afternoon activity.",
  "Drive to Castle Hill rather than walking.",
  "Allow breaks between stops rather than moving continuously.",
  "Avoid exposed walking during peak afternoon heat.",
];

const WET_WEATHER = [
  "Check road and weather conditions before setting out.",
  "Prioritise indoor attractions for the middle of the day.",
  "Shorten the waterfront walks rather than cancelling them.",
  "Avoid Castle Hill if visibility or road conditions are poor.",
  "Check for temporary closures at any attraction you plan to visit.",
  "Never enter flooded roads or paths.",
];

const RELATED = [
  { name: "First Time in Townsville", to: "/first-time-in-townsville" },
  { name: "The Strand", to: "/the-strand" },
  { name: "Jezzine Barracks", to: "/guides/jezzine-barracks" },
  { name: "Castle Hill", to: "/castle-hill" },
  { name: "Townsville with Kids", to: "/townsville-with-kids" },
  { name: "Free Things to Do", to: "/guides/free-things" },
  { name: "Food and Dining", to: "/food" },
  { name: "Magnetic Island Day Trip", to: "/guides/magnetic-island-day-trip" },
  { name: "Stinger Safety", to: "/guides/stinger-safety" },
];

const TownsvilleInOneDay = () => {
  return (
    <>
      <SEOHead
        title="Townsville in One Day: A Realistic Itinerary"
        description="Only have one day in Townsville? Follow a practical itinerary covering The Strand, Jezzine Barracks, Castle Hill, dining and flexible afternoon options."
        canonical={`${SITE}/townsville-in-one-day`}
        ogType="article"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Townsville in One Day: A Realistic First-Time Itinerary",
            description:
              "Only have one day in Townsville? Follow a practical itinerary covering The Strand, Jezzine Barracks, Castle Hill, dining and flexible afternoon options.",
            author: { "@type": "Person", name: "Duncan Ross" },
            publisher: { "@type": "Organization", name: "Townsville Guide" },
            mainEntityOfPage: `${SITE}/townsville-in-one-day`,
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
                name: "Townsville in One Day",
                item: `${SITE}/townsville-in-one-day`,
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
            alt="View across Townsville and the coastline from Castle Hill"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" />
        </div>
        <div className="relative container mx-auto max-w-4xl px-4 py-16 md:py-24 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
            Townsville in One Day
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Only have one day in Townsville? This realistic itinerary covers the waterfront, local
            history, city views and a relaxed evening meal without trying to squeeze in too much.
          </p>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
            The plan works best with a car, although much of the morning can be completed on foot
            around The Strand and North Ward.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-12 space-y-14">
        {/* Quick facts */}
        <GuideQuickFacts />

        {/* 2. Quick itinerary summary */}
        <section aria-labelledby="itinerary-summary">
          <h2 id="itinerary-summary" className="text-2xl md:text-3xl font-bold mb-6">
            The Day at a Glance
          </h2>
          <Card className="bg-muted/40">
            <CardContent className="p-5 md:p-6">
              <dl className="space-y-3">
                {SUMMARY.map((item) => (
                  <div key={item.label} className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="font-semibold text-foreground sm:w-32 flex-shrink-0">
                      {item.label}
                    </dt>
                    <dd className="text-muted-foreground leading-relaxed">{item.text}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 flex items-start gap-2 text-sm text-muted-foreground border-t border-border/60 pt-4">
                <Clock className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" aria-hidden="true" />
                Total time: approximately 8–10 hours, depending on stops and weather.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* 3. Who this suits */}
        <section aria-labelledby="who-for">
          <h2 id="who-for" className="text-2xl md:text-3xl font-bold mb-4">
            Who This One-Day Plan Is For
          </h2>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            {SUITS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Visitors with limited mobility, toddlers, or anyone travelling during extreme-weather
            conditions may need to shorten or adapt the day. See our{" "}
            <Link to="/accessible-townsville" className="text-primary underline underline-offset-2">
              accessible Townsville guide
            </Link>{" "}
            for more detail.
          </p>
        </section>

        {/* 4. Morning */}
        <section aria-labelledby="morning">
          <h2 id="morning" className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
            <Sunrise className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            8:00 am — Start at The Strand
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The morning is generally the most comfortable time for walking along the waterfront,
            particularly in the warmer months when the afternoon becomes uncomfortable for exposed
            walking.
          </p>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            <li>Walk part of The Strand rather than trying to cover the full length.</li>
            <li>Stop for breakfast or coffee along the way.</li>
            <li>Enjoy the waterfront and island views.</li>
            <li>Visit the parks and playgrounds if you are travelling with children.</li>
            <li>Allow approximately 60–90 minutes.</li>
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Read the full{" "}
            <Link to="/the-strand" className="text-primary underline underline-offset-2">
              Strand guide
            </Link>{" "}
            for parking, facilities and the best sections to walk.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Check current swimming and marine-stinger advice before entering the water — see our{" "}
            <Link to="/guides/stinger-safety" className="text-primary underline underline-offset-2">
              stinger safety guide
            </Link>
            . Swimming is not suitable at all times of year or in all conditions.
          </p>
        </section>

        {/* 5. Jezzine */}
        <section aria-labelledby="jezzine">
          <h2 id="jezzine" className="text-2xl md:text-3xl font-bold mb-4">
            9:30 am — Explore Jezzine Barracks
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Jezzine Barracks sits at the northern end of The Strand and combines waterfront walking,
            military and local history, public art, views across the water and plenty of open space.
            It connects naturally with The Strand and North Ward, so you can continue on foot.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Allow approximately 60–90 minutes. The full{" "}
            <Link
              to="/guides/jezzine-barracks"
              className="text-primary underline underline-offset-2"
            >
              Jezzine Barracks guide
            </Link>{" "}
            covers the walking loop, parking and the museum in more detail.
          </p>
        </section>

        {/* 6. Lunch */}
        <section aria-labelledby="lunch">
          <h2 id="lunch" className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <Utensils className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            11:30 am — Stop for Lunch
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {LUNCH_AREAS.map((a) => (
              <Card key={a.name} className="bg-muted/40 h-full">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-1">{a.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our{" "}
            <Link to="/food" className="text-primary underline underline-offset-2">
              food and dining guide
            </Link>{" "}
            covers each area in more detail. Check opening days and hours before you go,
            particularly on Sundays and public holidays.
          </p>
        </section>

        {/* 7. Afternoon */}
        <section aria-labelledby="afternoon">
          <h2 id="afternoon" className="text-2xl md:text-3xl font-bold mb-3">
            1:00 pm — Choose One Afternoon Activity
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Pick one of these rather than attempting all three. Allow approximately two hours for
            whichever option you choose.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {AFTERNOON.map(({ icon: Icon, title, best, text }) => (
              <Card key={title} className="h-full">
                <CardContent className="p-5">
                  <Icon className="w-5 h-5 text-primary mb-3" aria-hidden="true" />
                  <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{text}</p>
                  <p className="text-xs font-medium text-foreground mb-1">Best for</p>
                  <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                    {best.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 8. Castle Hill */}
        <section aria-labelledby="castle-hill">
          <h2 id="castle-hill" className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
            <Sun className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            4:30 pm — Head to Castle Hill
          </h2>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            <li>Castle Hill gives one of the clearest overviews of Townsville and the coast.</li>
            <li>Driving to the summit is the simplest option for a one-day itinerary.</li>
            <li>The walking tracks are steep and exposed.</li>
            <li>Adjust the timing according to the season and the time of sunset.</li>
            <li>Parking can become busy around popular sunset times.</li>
            <li>Allow approximately 60–90 minutes.</li>
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Avoid attempting exposed walks during the hottest part of the day. Conditions can be
            hazy, wet or overcast, so a clear sunset is never guaranteed. The full{" "}
            <Link to="/castle-hill" className="text-primary underline underline-offset-2">
              Castle Hill guide
            </Link>{" "}
            covers access, parking and the lookouts.
          </p>
        </section>

        {/* 9. Dinner */}
        <section aria-labelledby="dinner">
          <h2 id="dinner" className="text-2xl md:text-3xl font-bold mb-4">
            6:30 pm — Finish With Dinner
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Townsville has several dining areas rather than one obvious best location:
          </p>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            {DINNER_AREAS.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The best choice depends on the atmosphere you want, your budget, parking, whether you
            are staying near the CBD or North Ward, and whether children are travelling with you.
            See the{" "}
            <Link to="/food" className="text-primary underline underline-offset-2">
              food and dining guide
            </Link>{" "}
            for area-by-area detail.
          </p>
        </section>

        {/* 10. Leave for another day */}
        <section aria-labelledby="another-day">
          <h2 id="another-day" className="text-2xl md:text-3xl font-bold mb-4">
            What Should You Leave for Another Day?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Trying to include Townsville, Magnetic Island and a regional day trip in one day will
            usually make the visit rushed and less enjoyable. Leave these for a separate day:
          </p>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            {LEAVE_FOR_ANOTHER_DAY.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            If you have a second day available, plan it around the{" "}
            <Link
              to="/guides/magnetic-island-day-trip"
              className="text-primary underline underline-offset-2"
            >
              Magnetic Island day trip
            </Link>{" "}
            instead of adding it to this itinerary.
          </p>
        </section>

        {/* 11. Hot weather */}
        <section aria-labelledby="hot-weather">
          <h2 id="hot-weather" className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
            <Sun className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            Adapting the Itinerary in Hot Weather
          </h2>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            {HOT_WEATHER.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our{" "}
            <Link to="/guides/beat-the-heat" className="text-primary underline underline-offset-2">
              beat the heat guide
            </Link>{" "}
            has more detail on managing hot days in Townsville.
          </p>
        </section>

        {/* 12. Wet weather */}
        <section aria-labelledby="wet-weather">
          <h2 id="wet-weather" className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
            <CloudRain className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            Adapting the Itinerary in Wet Weather
          </h2>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            {WET_WEATHER.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our{" "}
            <Link
              to="/guides/rainy-day-activities"
              className="text-primary underline underline-offset-2"
            >
              rainy day activities guide
            </Link>{" "}
            lists indoor alternatives.
          </p>
        </section>

        {/* 13. Without a car */}
        <section aria-labelledby="no-car">
          <h2 id="no-car" className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
            <Car className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            Can You Follow This Itinerary Without a Car?
          </h2>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            <li>
              The Strand, Jezzine Barracks, North Ward, parts of the CBD and the ferry precinct can
              be explored on foot.
            </li>
            <li>Taxis and rideshare can help connect the city areas.</li>
            <li>Castle Hill is more difficult without private transport.</li>
            <li>Check current bus routes and frequencies before relying on them.</li>
            <li>
              Simplify the itinerary rather than relying on connections that may not line up.
            </li>
          </ul>
        </section>

        {/* 16. Related guides */}
        <section aria-labelledby="related">
          <h2 id="related" className="text-2xl md:text-3xl font-bold mb-6">
            Continue Planning Your Townsville Visit
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

export default TownsvilleInOneDay;
