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
  Building2,
  Car,
  Coffee,
  MapPin,
  ShoppingBag,
  Store,
  Sun,
  Umbrella,
} from "lucide-react";

const SITE = "https://www.townsvilleguide.com.au";
const PATH = "/shopping";

const TITLE = "Shopping in Townsville | Shopping Centres, Markets & Local Stores";
const DESCRIPTION =
  "Discover shopping in Townsville, from Stockland, Castletown and Willows to CBD stores, local markets, souvenirs, essentials and rainy-day options.";

const COMPARISON = [
  {
    place: "Stockland Townsville",
    bestFor: "All-round shopping, essentials, fashion, longer visits",
    area: "Aitkenvale",
    car: "Helpful",
    feel: "Major suburban centre",
  },
  {
    place: "Castletown",
    bestFor: "Convenient everyday shopping, central-city visitors, practical stops",
    area: "Hyde Park / near-central",
    car: "Helpful but not always essential depending on your stay",
    feel: "Convenient inner-city centre",
  },
  {
    place: "Willows",
    bestFor: "Western suburbs, combining with Riverway, broad retail",
    area: "Kirwan",
    car: "Helpful",
    feel: "Major western shopping centre",
  },
  {
    place: "CBD / Flinders Street",
    bestFor: "Local browsing, cafés, independent shops, central visitors",
    area: "Townsville CBD",
    car: "Not essential if staying centrally",
    feel: "Walkable local shopping",
  },
];

const TIPS = [
  "Do not assume every centre keeps the same hours every day.",
  "Public holidays regularly change trading hours across the city.",
  "Specialty-store hours can differ from the centre's advertised hours.",
  "Check current centre websites before making a dedicated shopping trip.",
  "Supermarkets and major stores often trade different hours to smaller tenants.",
  "Group suburban shopping with a nearby attraction rather than making a separate trip.",
  "Do not drive across town just for minor supplies if a closer option will do.",
  "Always check market listings before travelling — dates, locations and weather all affect them.",
];

const MISTAKES = [
  "Relying on old opening hours found in a search result or an old listing.",
  "Assuming all shops stay open late, particularly outside the major centres.",
  "Treating CBD shopping like a major mall — it is smaller and more independent.",
  "Crossing the city for basics that a closer centre or supermarket already covers.",
  "Assuming market schedules never change from season to season.",
  "Overlooking Castletown when you only need convenient everyday shopping.",
  "Overlooking Willows when you are already out at Riverway or Kirwan.",
  "Expecting tourist souvenir shops on every corner.",
  "Assuming every centre offers exactly the same stores and services.",
  "Planning an outdoor market visit in poor weather without checking first.",
];

const PATHWAYS = [
  { label: "All-round shopping", name: "Stockland Townsville", to: "/things-to-do" },
  { label: "Western suburbs", name: "Willows", to: "/riverway" },
  { label: "Near-central", name: "Castletown", to: "/the-strand" },
  { label: "Local browsing", name: "CBD / Flinders Street", to: "/things-to-do" },
  { label: "Essentials", name: "Nearest major centre", to: "/first-time-in-townsville" },
  { label: "Markets", name: "Check current schedule", to: "/food" },
  { label: "No car", name: "CBD and central options", to: "/townsville-without-a-car" },
  { label: "With kids", name: "Major centres", to: "/townsville-with-kids" },
  { label: "Hot weather", name: "Air-conditioned centres", to: "/guides/beat-the-heat" },
  { label: "Rain", name: "Major centres", to: "/guides/rainy-day-activities" },
  { label: "Riverway day", name: "Willows", to: "/riverway" },
  { label: "Strand stay", name: "Central or Castletown", to: "/the-strand" },
];

const RELATED = [
  { to: "/things-to-do", name: "Things to Do in Townsville", text: "The main activity hub for planning your days." },
  { to: "/food", name: "Food in Townsville", text: "Where to eat by area, meal and traveller type." },
  { to: "/first-time-in-townsville", name: "First Time in Townsville", text: "What to prioritise on a first visit." },
  { to: "/townsville-without-a-car", name: "Townsville Without a Car", text: "Getting around centrally on foot and by bus." },
  { to: "/townsville-with-kids", name: "Townsville with Kids", text: "Family-friendly planning across the city." },
  { to: "/guides/rainy-day-activities", name: "Rainy Day Activities", text: "Indoor options when the weather turns." },
  { to: "/guides/beat-the-heat", name: "Beat the Heat", text: "Timing your day around Townsville's heat." },
  { to: "/the-strand", name: "The Strand", text: "The waterfront precinct and its cafés and conveniences." },
  { to: "/riverway", name: "Riverway", text: "Free lagoons and parkland out at Thuringowa Central." },
  { to: "/local-tips", name: "Local Tips", text: "Practical observations that do not fit elsewhere." },
  { to: "/guides/magnetic-island-ferry", name: "Magnetic Island Ferry", text: "Crossing times and what to do either side." },
  { to: "/useful-contacts", name: "Useful Contacts", text: "Emergency, health and council contacts." },
];

const faqs = [
  {
    q: "What is the best shopping centre in Townsville?",
    a: "Stockland Townsville in Aitkenvale is the best all-round choice for fashion, essentials and general retail. Willows suits visitors around Kirwan and Riverway, and Castletown is the most convenient centre if you are staying near the city. The right one depends on where you are based.",
  },
  {
    q: "Where is the best place for shopping in central Townsville?",
    a: "The CBD and Flinders Street for independent stores, services and cafés, and Castletown in Hyde Park for a conventional centre close to town. Central shopping is more about convenience and browsing than large-scale retail.",
  },
  {
    q: "Is Stockland Townsville good for visitors?",
    a: "Yes, particularly for longer stays or when you need a broad range of shops in one stop. It is easiest with a car. Check the centre's current website for trading hours before making a dedicated trip.",
  },
  {
    q: "Is Castletown close to central Townsville?",
    a: "It sits in Hyde Park, near-central and a short drive from the CBD, North Ward and The Strand. Depending on where you are staying it can be practical without a car, but a car or bus makes it easier.",
  },
  {
    q: "Is Willows worth visiting for shopping?",
    a: "It is worth it if you are already in the western suburbs or visiting Riverway. It is a major centre with broad retail, but it is not worth crossing the city for if a closer option covers what you need.",
  },
  {
    q: "Where can you shop in Townsville without a car?",
    a: "The CBD and Flinders Street are the easiest on foot for central visitors, with Castletown practical depending on your accommodation. Suburban centres are simpler by car or bus — see our without-a-car guide for getting around.",
  },
  {
    q: "Where can you buy souvenirs in Townsville?",
    a: "Local gifts, art and handmade products turn up at CBD stores, market stalls and attraction gift shops rather than in one dedicated souvenir precinct. Markets are often the best option for handmade and local items.",
  },
  {
    q: "Are there markets in Townsville?",
    a: "Yes — Cotters Market in the CBD is the best known, and other community markets run around the city. Days, locations and seasons change and weather can cancel events, so check current official listings before travelling.",
  },
  {
    q: "What is good for shopping on a rainy day?",
    a: "The major air-conditioned centres — Stockland, Castletown and Willows — plus CBD cafés and indoor shopping. Shopping is a useful wet-weather filler rather than a full rainy-day plan.",
  },
  {
    q: "Do Townsville shopping centres open late?",
    a: "Late trading is limited and varies by centre, day and individual store. Specialty-store hours often differ from the centre's own hours, so check the current centre website on the day.",
  },
  {
    q: "Where can families shop in Townsville?",
    a: "The major centres work best with children: air-conditioning, meals, toilets, parking and practical supplies in one place. They are also a reliable break in hot or wet weather.",
  },
  {
    q: "Which shopping centre is closest to Riverway?",
    a: "Willows at Kirwan is the closest major centre to Riverway, which makes it easy to combine a lagoon swim with shopping, lunch or picking up supplies.",
  },
];

const Shopping = () => (
  <>
    <SEOHead title={TITLE} description={DESCRIPTION} canonical={PATH} ogType="article" />
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: "Shopping in Townsville",
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
                { "@type": "ListItem", position: 3, name: "Shopping in Townsville", item: `${SITE}${PATH}` },
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
        <ShoppingBag className="w-4 h-4" aria-hidden="true" />
        Shopping hub
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">Shopping in Townsville</h1>

      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Townsville's shopping is spread out rather than concentrated in one precinct. Most of it sits
        in a handful of major suburban centres, with the CBD and Flinders Street covering smaller
        independent stores and services, local markets running on their own schedules, and{" "}
        <Link to="/the-strand" className="text-primary hover:underline">
          The Strand
        </Link>{" "}
        and North Ward good for convenience purchases rather than a proper shop.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-8">
        This page is a planning hub, not a store directory. It covers which centre makes sense for
        what you actually need, how to shop without a car, what works with kids, and how to combine a
        shopping stop with the rest of your day. Tenants and trading hours change often, so treat
        everything here as a starting point and confirm current details with the centre before a
        dedicated trip.
      </p>

      <GuideQuickFacts className="mb-10" />

      {/* Main options */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Start here: the main shopping options</h2>
        <p className="text-muted-foreground mb-6">
          Four options cover almost every visitor need. They are not equally important — pick by
          where you are staying and what you are actually shopping for.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-primary" aria-hidden="true" /> Stockland Townsville
              — Aitkenvale
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              One of Townsville's main all-round shopping centres, and the default answer when you
              want fashion, essentials, food and general retail in a single stop. It suits longer
              stays and anyone restocking properly rather than grabbing one or two things. Most
              convenient with a car. Check the centre's current information for trading hours and
              current tenants.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" aria-hidden="true" /> Castletown — Hyde Park
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The convenient near-central option. It handles everyday shopping well and is practical
              from North Ward, the CBD or Garbutt depending on where you are staying, which makes it
              easy to fold into a city day rather than planning around it. It is a useful centre, not
              a tourist attraction.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Store className="w-5 h-5 text-primary" aria-hidden="true" /> Willows — Kirwan
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The major western-suburbs centre, with broad retail and practical shopping. It is the
              obvious choice if you are staying around Kirwan or spending the day at{" "}
              <Link to="/riverway" className="text-primary hover:underline">
                Riverway
              </Link>
              , and it is much more convenient with a car than without one.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Coffee className="w-5 h-5 text-primary" aria-hidden="true" /> CBD and Flinders Street
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Smaller independent businesses, services and cafés rather than mall-style retail. It is
              the most walkable option for central visitors and the best place for browsing between
              other city activities — but do not arrive expecting a large shopping destination.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Which shopping centre should you choose?</h2>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left font-semibold px-4 py-3">Place</th>
                <th className="text-left font-semibold px-4 py-3">Best for</th>
                <th className="text-left font-semibold px-4 py-3">Area</th>
                <th className="text-left font-semibold px-4 py-3">Car useful?</th>
                <th className="text-left font-semibold px-4 py-3">Visitor feel</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.place} className="border-t align-top">
                  <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">{row.place}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.bestFor}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.area}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.car}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.feel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Shopping by need */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Shopping by need</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Everyday essentials</h3>
            <p className="text-muted-foreground leading-relaxed">
              Groceries, pharmacy items, clothing basics, travel essentials, toiletries and
              replacements for anything forgotten or broken are all covered by the major centres.
              Choose the closest one — Stockland, Castletown or Willows — rather than the biggest.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Fashion and general retail</h3>
            <p className="text-muted-foreground leading-relaxed">
              Stockland has the broadest range, with Willows a strong western alternative and
              Castletown useful for a quicker, more convenient shop. Tenant mixes change, so check
              the centre's current store list if you are after something specific.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Gifts and souvenirs</h3>
            <p className="text-muted-foreground leading-relaxed">
              Local gifts, tourism-related products, art and handmade items turn up across CBD
              stores, market stalls and attraction or museum gift shops. There is no single definitive
              souvenir shop in Townsville, so allow a little browsing rather than heading to one
              address.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Local and independent shopping</h3>
            <p className="text-muted-foreground leading-relaxed">
              This is a different experience to the major centres. The CBD, markets and a scattering
              of independent retailers around the inner suburbs are where you will find the local
              character — worth an hour of wandering rather than a planned shopping trip.
            </p>
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-3">Markets</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Cotters Market in the CBD is Townsville's best-known market, and other community markets run
          around the city. Markets are best for local stalls, food, handmade goods, casual browsing
          and atmosphere rather than serious shopping.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Market days, locations and seasons change, and weather can cancel or shorten an event.
          Always check current official listings before travelling. If you are building a market
          morning into your day, our{" "}
          <Link to="/food" className="text-primary hover:underline">
            food guide
          </Link>{" "}
          and{" "}
          <Link to="/things-to-do" className="text-primary hover:underline">
            things to do
          </Link>{" "}
          hub cover what pairs well with it.
        </p>
      </section>

      {/* Traveller pathways */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Shopping by traveller type</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Car className="w-5 h-5 text-primary" aria-hidden="true" /> Shopping without a car
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              CBD shopping is easiest if you are staying centrally, and Castletown can be practical
              depending on your accommodation. Suburban centres are far simpler by car or bus, so
              group any suburban shopping with a nearby activity rather than making a separate trip.
              See{" "}
              <Link to="/townsville-without-a-car" className="text-primary hover:underline">
                Townsville Without a Car
              </Link>{" "}
              for getting around.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Baby className="w-5 h-5 text-primary" aria-hidden="true" /> Shopping with kids
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The major centres are genuinely useful with children: air-conditioned breaks, meals,
              toilets, practical supplies and flexible time when the weather turns. See{" "}
              <Link to="/townsville-with-kids" className="text-primary hover:underline">
                Townsville with Kids
              </Link>{" "}
              for the rest of a family day.
            </p>
          </div>
        </div>
      </section>

      {/* Heat and rain */}
      <section className="mb-12">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-card p-5">
            <h2 className="text-lg font-semibold mb-1 flex items-center gap-2">
              <Sun className="w-5 h-5 text-primary" aria-hidden="true" /> Shopping in hot weather
            </h2>
            <p className="text-sm text-muted-foreground">
              An air-conditioned centre is one of the easiest midday breaks in Townsville. Outdoor
              markets are best timed for early, cooler conditions, so keep the outdoor parts of the
              day early or late. See{" "}
              <Link to="/guides/beat-the-heat" className="text-primary hover:underline">
                Beat the Heat
              </Link>
              .
            </p>
          </div>
          <div className="rounded-xl border bg-card p-5">
            <h2 className="text-lg font-semibold mb-1 flex items-center gap-2">
              <Umbrella className="w-5 h-5 text-primary" aria-hidden="true" /> Shopping when it rains
            </h2>
            <p className="text-sm text-muted-foreground">
              Stockland, Castletown and Willows all work as indoor time, with CBD cafés and indoor
              shopping a lighter alternative. It is a useful filler rather than a whole wet day — see{" "}
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
          <MapPin className="w-6 h-6 text-primary" aria-hidden="true" /> Shopping around major
          attractions
        </h2>
        <ul className="space-y-3 text-muted-foreground list-disc pl-5">
          <li>
            <strong className="text-foreground">
              <Link to="/the-strand" className="text-primary hover:underline">
                The Strand
              </Link>{" "}
              and North Ward
            </strong>{" "}
            — good for smaller purchases, cafés and convenience, not for large-scale retail. Do your
            proper shopping elsewhere.
          </li>
          <li>
            <strong className="text-foreground">CBD</strong> — combines well with the museum,
            galleries and a coffee or lunch stop. See{" "}
            <Link to="/things-to-do" className="text-primary hover:underline">
              Things to Do
            </Link>{" "}
            for what else fits a city morning.
          </li>
          <li>
            <strong className="text-foreground">
              <Link to="/riverway" className="text-primary hover:underline">
                Riverway
              </Link>
            </strong>{" "}
            — Willows is close by, so a lagoon swim and a shopping stop fit comfortably in one trip.
          </li>
          <li>
            <strong className="text-foreground">
              <Link to="/castle-hill" className="text-primary hover:underline">
                Castle Hill
              </Link>
            </strong>{" "}
            — there is no retail at the lookout, so shop before or after rather than expecting
            anything at the top.
          </li>
          <li>
            <strong className="text-foreground">
              <Link to="/guides/magnetic-island-ferry" className="text-primary hover:underline">
                Magnetic Island ferry
              </Link>
            </strong>{" "}
            — central, South Townsville and CBD shopping is far more practical before or after a
            crossing than a suburban detour.
          </li>
        </ul>
      </section>

      {/* Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Practical visitor shopping tips</h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-5">
          {TIPS.map((t) => (
            <li key={t}>{t}</li>
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
          covers pharmacies, health and council services if you need more than a shop.
        </p>
      </section>

      {/* Mistakes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-primary" aria-hidden="true" /> Common shopping
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
        <h2 className="text-2xl font-bold mb-4">Plan by shopping need</h2>
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
        <h2 className="text-2xl font-bold mb-4">Townsville shopping questions</h2>
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

export default Shopping;
