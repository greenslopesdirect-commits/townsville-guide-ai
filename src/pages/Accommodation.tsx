import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import FoundingPartnerCTA from "@/components/FoundingPartnerCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertTriangle,
  Baby,
  Bed,
  Building2,
  Car,
  Clock,
  Coffee,
  MapPin,
  Ship,
  Sun,
  Umbrella,
  Waves,
} from "lucide-react";

const SITE = "https://www.townsvilleguide.com.au";
const PATH = "/accommodation";

const TITLE = "Where to Stay in Townsville | Best Areas & Accommodation Guide";
const DESCRIPTION =
  "Find the best area to stay in Townsville, from The Strand and North Ward to Palmer Street, the CBD, Magnetic Island and family-friendly accommodation.";

const COMPARISON = [
  {
    area: "Strand / North Ward",
    bestFor: "First visit, families, waterfront, walking",
    car: "Not essential for a central stay",
    advantage: "Best overall leisure base",
    tradeoff: "Not closest to every suburban attraction",
  },
  {
    area: "CBD",
    bestFor: "Central sightseeing, business, food",
    car: "Not essential for central activities",
    advantage: "Walkability and central access",
    tradeoff: "Less resort or waterfront feel",
  },
  {
    area: "Palmer Street / South Townsville",
    bestFor: "Dining, couples, ferry convenience",
    car: "Often not essential centrally",
    advantage: "Restaurants and central access",
    tradeoff: "Less family-waterfront feel than North Ward",
  },
  {
    area: "Magnetic Island",
    bestFor: "Island nature, beaches, a slower stay",
    car: "Depends on your island plan",
    advantage: "Destination atmosphere",
    tradeoff: "Less convenient for mainland sightseeing",
  },
  {
    area: "Aitkenvale / West",
    bestFor: "Practical stays, JCU or hospital, shopping, longer stays",
    car: "Helpful",
    advantage: "Practical suburban access",
    tradeoff: "Not a primary tourist base",
  },
  {
    area: "Airport / Garbutt",
    bestFor: "Transit, short stays, airport convenience",
    car: "Helpful",
    advantage: "Airport access",
    tradeoff: "Limited walkable sightseeing",
  },
];

const BOOKING_REALITY = [
  "Prices fluctuate by season, day of the week and demand.",
  "School holidays, major events and weekends can affect both price and availability.",
  "Cancellation terms vary widely between properties and booking channels.",
  "Parking may be limited, off-site or charged — do not assume it is free.",
  "Breakfast may or may not be included in the rate you are quoted.",
  "Reception hours vary, and some properties are not staffed late at night.",
  "Apartment check-in arrangements differ; some use key boxes or after-hours codes.",
  "Confirm anything that matters to your trip directly with the property before booking.",
];

const MISTAKES = [
  "Booking the cheapest property without considering where it actually is.",
  "Assuming Townsville is compact enough that location does not matter.",
  "Staying a long way from central attractions without a car.",
  "Assuming every property has free on-site parking.",
  "Assuming breakfast is included.",
  "Assuming every apartment has a full kitchen and laundry.",
  "Booking airport-area accommodation for a leisure stay without realising the trade-off.",
  "Staying on Magnetic Island when most planned activities are on the mainland.",
  "Staying on the mainland when the trip is almost entirely island-focused.",
  "Relying on old hotel names or outdated reviews that no longer reflect the property.",
  "Ignoring cancellation conditions on a non-refundable rate.",
  "Not checking availability around event periods and school holidays.",
];

const PATHWAYS = [
  { label: "First visit", name: "Strand / North Ward", to: "/first-time-in-townsville" },
  { label: "Without a car", name: "Strand, CBD or Palmer Street", to: "/townsville-without-a-car" },
  { label: "With kids", name: "Strand / North Ward", to: "/townsville-with-kids" },
  { label: "Couples", name: "Strand or Palmer Street", to: "/the-strand" },
  { label: "Dining trip", name: "Palmer Street / CBD", to: "/food" },
  { label: "Ferry convenience", name: "CBD / Palmer Street", to: "/guides/magnetic-island-ferry" },
  { label: "Island stay", name: "Magnetic Island", to: "/guides/magnetic-island-day-trip" },
  { label: "Longer stay", name: "Apartment-style accommodation", to: "/things-to-do" },
  { label: "Business", name: "CBD or near your work location", to: "/things-to-do" },
  { label: "JCU / hospital", name: "Aitkenvale and the west", to: "/riverway" },
  { label: "Airport transit", name: "Garbutt / airport area", to: "/townsville-airport" },
  { label: "Mixed sightseeing", name: "Mainland central base", to: "/things-to-do" },
];

const RELATED = [
  { to: "/first-time-in-townsville", name: "First Time in Townsville", text: "What to prioritise on a first visit." },
  { to: "/townsville-without-a-car", name: "Townsville Without a Car", text: "Getting around centrally on foot and by bus." },
  { to: "/townsville-with-kids", name: "Townsville with Kids", text: "Family-friendly planning across the city." },
  { to: "/the-strand", name: "The Strand", text: "The waterfront precinct beside the main leisure stay area." },
  { to: "/food", name: "Food in Townsville", text: "Where to eat by area, meal and traveller type." },
  { to: "/things-to-do", name: "Things to Do in Townsville", text: "The main activity hub for planning your days." },
  { to: "/guides/magnetic-island-day-trip", name: "Magnetic Island Day Trip", text: "How to plan a full island day from the mainland." },
  { to: "/guides/magnetic-island-ferry", name: "Magnetic Island Ferry", text: "Crossing times and what to do either side." },
  { to: "/riverway", name: "Riverway", text: "Free lagoons and parkland out at Thuringowa Central." },
  { to: "/guides/beat-the-heat", name: "Beat the Heat", text: "Timing your day around Townsville's heat." },
  { to: "/guides/rainy-day-activities", name: "Rainy Day Activities", text: "Indoor options when the weather turns." },
  { to: "/local-tips", name: "Local Tips", text: "Practical observations that do not fit elsewhere." },
];

const faqs = [
  {
    q: "What is the best area to stay in Townsville?",
    a: "For most leisure visitors, The Strand and North Ward are the strongest all-round base: waterfront, walkable, close to cafés and easy for families. The CBD and Palmer Street are the best alternatives if you want central access or a dining-focused stay.",
  },
  {
    q: "Is The Strand a good place to stay?",
    a: "Yes. It is the easiest base for a short leisure trip, with the waterfront, swimming, parks, Jezzine Barracks and casual food all within walking distance. A car is useful for day trips but not essential day to day.",
  },
  {
    q: "Where should first-time visitors stay in Townsville?",
    a: "The Strand or North Ward. It puts the waterfront, walking, swimming and casual dining on your doorstep, and keeps Castle Hill, the CBD and the ferry terminal a short trip away. The CBD and Palmer Street are strong alternatives.",
  },
  {
    q: "Where should families stay in Townsville?",
    a: "The Strand and North Ward suit families best, with the water play areas, parks and swimming enclosures nearby. Apartment-style accommodation often works better than a hotel room for space, laundry and self-catering — confirm facilities with the property.",
  },
  {
    q: "Where should you stay in Townsville without a car?",
    a: "Stay centrally: The Strand and North Ward, the CBD, or Palmer Street. All three keep the main attractions, food and the ferry terminal within walking distance or a short rideshare. Suburban accommodation is much harder work without a car.",
  },
  {
    q: "Is Palmer Street a good place to stay?",
    a: "It suits couples, dining-focused stays and anyone catching the Magnetic Island ferry, thanks to the restaurant strip and central position. It has less of a family-waterfront feel than North Ward.",
  },
  {
    q: "Should you stay in Townsville or on Magnetic Island?",
    a: "Neither is universally better. Stay on the island if you want a slower pace, beaches and several island days. Stay on the mainland if your trip mixes Castle Hill, The Strand, dining and day trips — the island still works well as a day trip from town.",
  },
  {
    q: "Where should you stay before the Magnetic Island ferry?",
    a: "The CBD, Palmer Street or central South Townsville are the most convenient for the passenger ferry terminal. Central accommodation also avoids unnecessary cross-city driving when you return.",
  },
  {
    q: "Is the CBD a good place to stay in Townsville?",
    a: "Yes, if you value central access over a beachfront setting. It works well for business travel, museums and galleries, restaurants and walking, and it is practical for the ferry depending on the property.",
  },
  {
    q: "Is it better to stay in a hotel or apartment?",
    a: "Hotels suit short stays, couples, business trips and travellers who eat out. Apartments and serviced apartments suit families, longer stays and anyone wanting extra space, self-catering or laundry. Facilities vary by property, so confirm before booking.",
  },
  {
    q: "Where should you stay for a longer visit?",
    a: "Apartment-style or serviced accommodation is usually the better fit. Central areas still work well for leisure, while Aitkenvale and the western suburbs can be more practical if your stay is built around JCU, the hospital, shopping or family rather than sightseeing.",
  },
  {
    q: "Is it worth staying near Townsville Airport?",
    a: "Mainly for transit — a very early flight, a late arrival or a short work trip. For a leisure visit it is a poor trade-off, because you lose walkable access to The Strand, the CBD and the waterfront.",
  },
];

const Accommodation = () => (
  <>
    <SEOHead title={TITLE} description={DESCRIPTION} canonical={PATH} ogType="article" />
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: "Where to Stay in Townsville",
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
                { "@type": "ListItem", position: 3, name: "Where to Stay in Townsville", item: `${SITE}${PATH}` },
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
        <Bed className="w-4 h-4" aria-hidden="true" />
        Accommodation hub
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">Where to Stay in Townsville</h1>

      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        The best place to stay depends on the kind of trip you are planning, but for most first-time
        leisure visitors it comes down to three areas:{" "}
        <Link to="/the-strand" className="text-primary hover:underline">
          The Strand
        </Link>{" "}
        and North Ward, the CBD, or Palmer Street and South Townsville. Magnetic Island is a
        different decision again — a destination stay rather than another Townsville suburb.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-8">
        This page is about choosing the right area and the right style of accommodation, not ranking
        individual hotels. Property names, operators, prices and facilities change often, so pick the
        area first and confirm the details with the property before you book.
      </p>

      <GuideQuickFacts className="mb-10" />

      {/* Best areas */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Start here: the best areas to stay</h2>
        <p className="text-muted-foreground mb-6">
          Four choices cover almost every visitor. None of them is universally best — match the area
          to your trip.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Waves className="w-5 h-5 text-primary" aria-hidden="true" /> The Strand / North Ward
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              The strongest all-round choice for leisure visitors: first-timers, families and couples
              alike. You get waterfront access, walking, swimming, cafés and restaurants, and easy
              access to{" "}
              <Link to="/jezzine-barracks" className="text-primary hover:underline">
                Jezzine Barracks
              </Link>
              , plus the relaxed morning and evening atmosphere that makes the area work.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              It is an excellent base for a short leisure visit, because walking, swimming, dining and
              sightseeing combine without much planning. A car is useful for day trips, but it is not
              essential for a central stay — see{" "}
              <Link to="/townsville-without-a-car" className="text-primary hover:underline">
                Townsville Without a Car
              </Link>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" aria-hidden="true" /> CBD / Flinders Street
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Best for central access, museums and galleries, business travel, and restaurants and
              cafés. Depending on the property, it can also be walkable to Palmer Street and the ferry
              area. The CBD is practical rather than beachfront — you trade the waterfront setting for
              being close to everything. See{" "}
              <Link to="/things-to-do" className="text-primary hover:underline">
                Things to Do
              </Link>
              ,{" "}
              <Link to="/food" className="text-primary hover:underline">
                Food
              </Link>{" "}
              and{" "}
              <Link to="/townsville-without-a-car" className="text-primary hover:underline">
                Townsville Without a Car
              </Link>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Coffee className="w-5 h-5 text-primary" aria-hidden="true" /> Palmer Street / South
              Townsville
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Best for dining, marina atmosphere, couples and dinner-focused stays, with convenient
              access toward the ferry and waterfront areas. It is especially useful if your trip
              includes{" "}
              <Link to="/guides/magnetic-island-day-trip" className="text-primary hover:underline">
                Magnetic Island
              </Link>
              , a{" "}
              <Link to="/food" className="text-primary hover:underline">
                dining
              </Link>
              -led itinerary, or a short central stay. See the{" "}
              <Link to="/guides/magnetic-island-ferry" className="text-primary hover:underline">
                Magnetic Island Ferry
              </Link>{" "}
              guide for crossing details.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Ship className="w-5 h-5 text-primary" aria-hidden="true" /> Magnetic Island
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Treat this as a distinct stay choice rather than a suburb. Staying on the island suits
              visitors who want a slower island pace, beaches, nature, walking and multiple island
              days — including the{" "}
              <Link to="/guides/forts-walk-magnetic-island" className="text-primary hover:underline">
                Forts Walk
              </Link>
              .
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Staying on the island is not necessary for a good day trip, though. If your itinerary
              mixes Castle Hill, The Strand, dining and mainland day trips, a mainland base is usually
              more convenient. See the{" "}
              <Link to="/guides/magnetic-island-day-trip" className="text-primary hover:underline">
                Magnetic Island Day Trip
              </Link>{" "}
              guide before deciding.
            </p>
          </div>
        </div>
      </section>

      {/* Other practical areas */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Other practical areas</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold mb-1">Aitkenvale / western suburbs</h3>
            <p className="text-sm text-muted-foreground">
              Useful for longer practical stays, JCU or hospital-related visits, shopping and{" "}
              <Link to="/riverway" className="text-primary hover:underline">
                Riverway
              </Link>
              , and for visitors travelling with a car. It is not a sightseeing base — see{" "}
              <Link to="/shopping" className="text-primary hover:underline">
                Shopping
              </Link>{" "}
              for what is nearby.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold mb-1">Garbutt / airport area</h3>
            <p className="text-sm text-muted-foreground">
              Mainly for airport convenience, short practical stays and business or transit nights.
              For a leisure visitor wanting to walk to major attractions it is generally the weakest
              option. See the{" "}
              <Link to="/townsville-airport" className="text-primary hover:underline">
                Townsville Airport
              </Link>{" "}
              guide for transport.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Which area should you choose?</h2>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left font-semibold px-4 py-3">Area</th>
                <th className="text-left font-semibold px-4 py-3">Best for</th>
                <th className="text-left font-semibold px-4 py-3">Car needed?</th>
                <th className="text-left font-semibold px-4 py-3">Main advantage</th>
                <th className="text-left font-semibold px-4 py-3">Main trade-off</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.area} className="border-t align-top">
                  <td className="px-4 py-3 font-medium text-foreground">{row.area}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.bestFor}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.car}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.advantage}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.tradeoff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Traveller type */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Best area by traveller type</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-1">First-time visitors</h3>
            <p className="text-muted-foreground">
              The Strand and North Ward, with the CBD and Palmer Street as strong alternatives. Start
              with{" "}
              <Link to="/first-time-in-townsville" className="text-primary hover:underline">
                First Time in Townsville
              </Link>{" "}
              to see what a first trip usually covers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
              <Baby className="w-5 h-5 text-primary" aria-hidden="true" /> With kids
            </h3>
            <p className="text-muted-foreground">
              Prioritise The Strand and North Ward, and consider apartment-style accommodation where
              extra space helps. Easy access to swimming, parks and casual food makes the days simpler
              — see{" "}
              <Link to="/townsville-with-kids" className="text-primary hover:underline">
                Townsville with Kids
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
              <Car className="w-5 h-5 text-primary" aria-hidden="true" /> Without a car
            </h3>
            <p className="text-muted-foreground">
              Stay in The Strand and North Ward, the CBD or Palmer Street. See{" "}
              <Link to="/townsville-without-a-car" className="text-primary hover:underline">
                Townsville Without a Car
              </Link>{" "}
              for how to get around once you are based centrally.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Couples</h3>
            <p className="text-muted-foreground">
              The Strand, Palmer Street, or selected CBD properties — depending on whether you want
              waterfront mornings or dinner on the doorstep.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Business travellers</h3>
            <p className="text-muted-foreground">
              The CBD is usually the most practical, with the airport and Garbutt area suiting short
              trips, and suburban areas making sense when your work location dictates it.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Longer stays</h3>
            <p className="text-muted-foreground">
              Apartment-style or serviced accommodation often suits families, longer stays and anyone
              wanting kitchen or laundry facilities. Facilities differ by property, so confirm what is
              actually included.
            </p>
          </div>
        </div>
      </section>

      {/* Hotel vs apartment */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Hotel or apartment?</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold mb-1">Hotel</h3>
            <p className="text-sm text-muted-foreground">
              Generally better for short stays, couples, business trips and travellers who plan to eat
              out most nights.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold mb-1">Apartment / serviced apartment</h3>
            <p className="text-sm text-muted-foreground">
              Generally better for families, longer stays, self-catering, and travellers who want
              laundry access or extra space. Individual facilities vary, so check before booking.
            </p>
          </div>
        </div>
      </section>

      {/* Length of stay */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Clock className="w-6 h-6 text-primary" aria-hidden="true" /> One night or several?
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            <strong className="text-foreground">One night</strong> — prioritise convenience: the CBD,
            Palmer Street or The Strand, or the airport area if you have a very early flight.
          </p>
          <p>
            <strong className="text-foreground">Two to four nights</strong> — prioritise a leisure
            base: The Strand and North Ward, or the CBD and Palmer Street depending on whether food or
            waterfront matters more.
          </p>
          <p>
            <strong className="text-foreground">Longer stay</strong> — consider apartment-style
            accommodation, and Aitkenvale or the western suburbs if practical needs outweigh
            sightseeing.
          </p>
        </div>
      </section>

      {/* Magnetic Island */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Staying before or after Magnetic Island</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            <strong className="text-foreground">Before the ferry</strong> — the CBD, Palmer Street or
            central Townsville keeps the terminal close and the morning simple.
          </p>
          <p>
            <strong className="text-foreground">After returning</strong> — central accommodation
            avoids unnecessary cross-city driving at the end of a long island day.
          </p>
          <p>
            <strong className="text-foreground">Stay on the island instead?</strong> — good for slower,
            island-focused trips, but not necessary for a standard day trip. A mainland base is often
            better for mixed Townsville itineraries. See{" "}
            <Link to="/guides/magnetic-island-ferry" className="text-primary hover:underline">
              Magnetic Island Ferry
            </Link>{" "}
            and{" "}
            <Link to="/guides/magnetic-island-day-trip" className="text-primary hover:underline">
              Magnetic Island Day Trip
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Strand */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Staying around The Strand</h2>
        <p className="text-muted-foreground leading-relaxed">
          The reason this area works so well is that the good parts of a Townsville day are already
          there: morning walks along the waterfront, swimming, casual food and coffee, Jezzine
          Barracks at the northern end, family facilities like playgrounds and water play, and an
          easy evening atmosphere. It also makes downtime effortless, which matters more than people
          expect on a hot-weather trip. The full detail is in{" "}
          <Link to="/the-strand" className="text-primary hover:underline">
            The Strand
          </Link>{" "}
          guide.
        </p>
      </section>

      {/* Kids */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Accommodation with kids</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          The practical considerations are usually room size, kitchen facilities, laundry, a pool,
          walkability, parking, and proximity to The Strand and nearby parks.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Do not assume every property offers these — configurations differ even within the same
          building. Confirm the facilities you actually need directly with the property before
          booking. See{" "}
          <Link to="/townsville-with-kids" className="text-primary hover:underline">
            Townsville with Kids
          </Link>{" "}
          for how the rest of the trip fits together.
        </p>
      </section>

      {/* No car */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Accommodation without a car</h2>
        <p className="text-muted-foreground leading-relaxed">
          Staying centrally saves a lot of transport hassle. The Strand and North Ward, the CBD and
          Palmer Street are the strongest choices, because the waterfront, food and the ferry
          terminal are all within walking distance or a short rideshare. Suburban accommodation is
          considerably less convenient for sightseeing without a car — see{" "}
          <Link to="/townsville-without-a-car" className="text-primary hover:underline">
            Townsville Without a Car
          </Link>
          .
        </p>
      </section>

      {/* Weather */}
      <section className="mb-12">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-card p-5">
            <h2 className="text-lg font-semibold mb-1 flex items-center gap-2">
              <Sun className="w-5 h-5 text-primary" aria-hidden="true" /> Accommodation in hot weather
            </h2>
            <p className="text-sm text-muted-foreground">
              Central walkability reduces unnecessary travel, and a pool and reliable air-conditioning
              matter more here than in cooler cities. Easy access to food and swimming lets you avoid
              midday movement altogether — see{" "}
              <Link to="/guides/beat-the-heat" className="text-primary hover:underline">
                Beat the Heat
              </Link>
              .
            </p>
          </div>
          <div className="rounded-xl border bg-card p-5">
            <h2 className="text-lg font-semibold mb-1 flex items-center gap-2">
              <Umbrella className="w-5 h-5 text-primary" aria-hidden="true" /> Accommodation in wet
              weather
            </h2>
            <p className="text-sm text-muted-foreground">
              A central stay makes indoor alternatives easier to reach, and the CBD and major shopping
              areas are the most convenient wet-weather fallbacks. Avoid building an outdoor-only
              itinerary — see{" "}
              <Link to="/guides/rainy-day-activities" className="text-primary hover:underline">
                Rainy Day Activities
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Around attractions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-primary" aria-hidden="true" /> Where to stay for major
          attractions
        </h2>
        <ul className="space-y-3 text-muted-foreground list-disc pl-5">
          <li>
            <strong className="text-foreground">
              <Link to="/the-strand" className="text-primary hover:underline">
                The Strand
              </Link>{" "}
              and{" "}
              <Link to="/jezzine-barracks" className="text-primary hover:underline">
                Jezzine
              </Link>
            </strong>{" "}
            — stay in North Ward or along The Strand.
          </li>
          <li>
            <strong className="text-foreground">
              <Link to="/castle-hill" className="text-primary hover:underline">
                Castle Hill
              </Link>
            </strong>{" "}
            — no need to stay specifically nearby; any central area works well.
          </li>
          <li>
            <strong className="text-foreground">
              <Link to="/guides/magnetic-island-ferry" className="text-primary hover:underline">
                Magnetic Island ferry
              </Link>
            </strong>{" "}
            — the CBD, Palmer Street or the central area.
          </li>
          <li>
            <strong className="text-foreground">
              <Link to="/riverway" className="text-primary hover:underline">
                Riverway
              </Link>
            </strong>{" "}
            — the western suburbs can be practical for local, family or longer stays.
          </li>
          <li>
            <strong className="text-foreground">
              <Link to="/guides/paluma-day-trip" className="text-primary hover:underline">
                Paluma
              </Link>
            </strong>{" "}
            — Townsville accommodation works fine as the base for a day trip.
          </li>
        </ul>
      </section>

      {/* Booking reality */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Booking reality</h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-5">
          {BOOKING_REALITY.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <p className="text-muted-foreground mt-4">
          More small practicalities are collected in{" "}
          <Link to="/local-tips" className="text-primary hover:underline">
            Local Tips
          </Link>
          , and{" "}
          <Link to="/useful-contacts" className="text-primary hover:underline">
            Useful Contacts
          </Link>{" "}
          covers health and council services if you need help during your stay.
        </p>
      </section>

      {/* Mistakes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-primary" aria-hidden="true" /> Common accommodation
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
        <h2 className="text-2xl font-bold mb-4">Plan by stay type</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {PATHWAYS.map((p) => (
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
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Townsville accommodation questions</h2>
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

export default Accommodation;
