import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import LocalInsightCard from "@/components/LocalInsightCard";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Waves,
  Baby,
  BookOpen,
  Palette,
  Footprints,
  Utensils,
  Gift,
  Accessibility,
  Car,
  Bus,
  Dog,
  Sun,
  Clock,
  Scale,
  AlertTriangle,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const SITE = "https://www.townsvilleguide.com.au";
const PATH = "/riverway";

const TITLE = "Riverway Townsville: Lagoons, Parklands & Things to Do";
const DESCRIPTION =
  "Plan a visit to Riverway Townsville, with free swimming lagoons, parklands, library, gallery, walking paths, parking, family tips and local advice.";

const LAGOON_STATUS =
  "Riverway Lagoons operate during supervised opening hours and the gates are locked outside those times. Check Townsville City Council for the current schedule before visiting.";

const ITINERARIES = [
  {
    title: "Two-hour visit",
    steps: ["Swim in the lagoons", "Short walk along the Ross River", "Coffee or a picnic before leaving"],
  },
  {
    title: "Family half-day",
    steps: [
      "Morning swim while it is still cool",
      "Picnic or barbecue on the lawns",
      "Library or Pinnacles Gallery break out of the sun",
      "A second swim before leaving if conditions and opening hours allow",
    ],
  },
  {
    title: "Hot afternoon",
    steps: [
      "Start indoors at the library or gallery",
      "Move to the lagoons later in the afternoon",
      "Finish with a river walk near sunset",
    ],
  },
  {
    title: "Free half-day",
    steps: [
      "Swim",
      "Riverside walk",
      "Picnic brought from your accommodation",
      "Public art or a look through the gallery",
    ],
  },
];

const MISTAKES = [
  "Assuming Riverway is next to the CBD — it is in Thuringowa Central, a solid drive west of the city centre.",
  "Arriving without checking the current lagoon opening status, then finding the gates locked.",
  "Thinking the lagoons are the only thing there and missing the library, gallery and parklands.",
  "Forgetting swimmers and towels, which turns a swimming trip into a walk.",
  "Expecting a major tourist attraction rather than a local recreation precinct.",
  "Visiting at midday in summer without shade, sunscreen or enough water.",
  "Assuming dogs can come into the lagoon and swimming areas — they cannot.",
  "Planning around a free event or movie night without checking the current schedule.",
];

const STATUS_CHECKS = [
  {
    name: "Townsville City Council — Riverway",
    url: "https://www.townsville.qld.gov.au/facilities-and-recreation/riverway",
    text: "Precinct information, facilities and current notices.",
  },
  {
    name: "Riverway Lagoons — Townsville City Council",
    url: "https://www.townsville.qld.gov.au/facilities-and-recreation/riverway/riverway-lagoons",
    text: "Current supervised opening hours and any temporary closures.",
  },
  {
    name: "CityLibraries Townsville",
    url: "https://www.townsville.qld.gov.au/facilities-and-recreation/libraries",
    text: "Current library hours, services and programs.",
  },
  {
    name: "Pinnacles Gallery — Townsville City Council",
    url: "https://www.townsville.qld.gov.au/facilities-and-recreation/galleries",
    text: "Current exhibitions and gallery opening information.",
  },
  {
    name: "Townsville Disaster Dashboard",
    url: "https://disaster.townsville.qld.gov.au/",
    text: "Useful during severe weather, when facilities may close.",
  },
  {
    name: "Translink — journey planner",
    url: "https://translink.com.au/",
    text: "Current bus routes and timetables for the Riverway area.",
  },
];

const RELATED = [
  { name: "Townsville with Kids", to: "/townsville-with-kids", text: "The full family-planning guide." },
  { name: "Free Things to Do", to: "/guides/free-things", text: "Townsville on a budget, including free swimming." },
  { name: "Beat the Heat", to: "/guides/beat-the-heat", text: "Planning a hot Townsville day safely." },
  { name: "Rainy Day Activities", to: "/guides/rainy-day-activities", text: "Indoor and wet-weather options." },
  { name: "First Time in Townsville", to: "/first-time-in-townsville", text: "Orientation for a first visit." },
  { name: "Townsville Without a Car", to: "/townsville-without-a-car", text: "What works without driving." },
  { name: "Townsville in One Day", to: "/townsville-in-one-day", text: "A realistic single-day itinerary." },
  { name: "The Strand", to: "/the-strand", text: "The city's main waterfront precinct." },
  { name: "Castle Hill", to: "/castle-hill", text: "Townsville's landmark lookout." },
  { name: "What's On in Townsville", to: "/events", text: "Current events, including free community events." },
  { name: "Townsville Beaches", to: "/beaches", text: "Swimming and beach options around the city." },
  { name: "Useful Contacts", to: "/useful-contacts", text: "Council, emergency and visitor contacts." },
];

const faqs = [
  {
    q: "Is Riverway worth visiting?",
    a: "Yes, particularly for families, hot-weather days and visitors looking for a relaxed free activity. If you only have a few hours in Townsville, The Strand and Castle Hill should usually come first, but on a stay of two to four days Riverway is well worth the trip.",
  },
  {
    q: "Are Riverway Lagoons free?",
    a: "Yes. Entry to the Riverway Lagoons is free, as is access to the surrounding parklands, walking paths and public spaces.",
  },
  {
    q: "What can you do at Riverway?",
    a: "Swim in the lagoons, walk or cycle along the Ross River, picnic and use the barbecue facilities, visit CityLibraries Riverway, see contemporary exhibitions at Pinnacles Gallery, use the lawns and playspaces, and attend free community events when they are scheduled.",
  },
  {
    q: "Is Riverway good for children?",
    a: "Very. There are shallow family-friendly lagoon areas, deeper water for stronger swimmers, large lawns, shade, picnic and barbecue facilities, and an air-conditioned library nearby, so you can alternate active and quiet time across a half-day.",
  },
  {
    q: "Do Riverway Lagoons have lifeguards?",
    a: "Yes. The lagoons are supervised by lifeguards during their opening hours, which is one of the reasons they suit families. Always follow lifeguard instructions and posted signage.",
  },
  {
    q: "What are the current Riverway Lagoon opening hours?",
    a: LAGOON_STATUS,
  },
  {
    q: "Is there parking at Riverway?",
    a: "Yes. There is extensive free on-site public parking across the precinct, accessed from Riverway Drive and the surrounding precinct roads. Parking closest to the lagoons fills first on hot weekends and during events.",
  },
  {
    q: "Can you get to Riverway without a car?",
    a: "Yes, but it is less convenient than The Strand, the CBD and North Ward. Translink buses serve the Riverway area with connections from surrounding centres including Willows, and taxis or rideshare are a practical alternative. Check current routes and timetables with Translink before relying on a bus.",
  },
  {
    q: "Is Riverway accessible?",
    a: "Riverway has extensive accessible infrastructure, including wide pathways, ramps, accessible building entrances, lagoon access ramps, accessible viewing areas, handrails and accessible picnic facilities. Visitors with specific requirements should check current Council accessibility information before travelling.",
  },
  {
    q: "Can dogs visit Riverway?",
    a: "Dogs may visit appropriate parkland areas of Riverway on a suitable leash and under effective control. They are not permitted in the lagoons and swimming areas, or in any area where Council rules prohibit dogs. Check current Council rules and on-site signage.",
  },
  {
    q: "Is Riverway good in hot weather?",
    a: "It is one of the better hot-weather options in Townsville, because you can combine swimming, shade, an air-conditioned library and a gallery in one place. Still bring sunscreen and water, watch for hot surfaces, and plan around the worst of the afternoon heat.",
  },
  {
    q: "How long should you spend at Riverway?",
    a: "Two to four hours suits most visitors. Families combining swimming, a picnic and the library or gallery can comfortably fill a half-day.",
  },
];

const Riverway = () => {
  return (
    <>
      <SEOHead
        title="Riverway Townsville | Lagoons, Parklands & Visitor Guide"
        description={DESCRIPTION}
        canonical={`${SITE}${PATH}`}
        ogType="article"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: TITLE,
            description: DESCRIPTION,
            author: { "@type": "Person", name: "Duncan Ross" },
            publisher: { "@type": "Organization", name: "Townsville Guide" },
            mainEntityOfPage: `${SITE}${PATH}`,
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
              { "@type": "ListItem", position: 2, name: "Things to Do", item: `${SITE}/things-to-do` },
              { "@type": "ListItem", position: 3, name: "Riverway", item: `${SITE}${PATH}` },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="bg-muted/40 border-b border-border">
        <div className="container mx-auto max-w-4xl px-4 py-14 md:py-20 text-center">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
            Thuringowa Central
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
            Riverway Townsville: Lagoons, Parklands &amp; Things to Do
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Riverway is a free riverside recreation precinct in Thuringowa Central, on the banks of
            the Ross River. It brings together swimming lagoons, parklands, walking paths, a
            library, an art gallery, picnic and barbecue facilities and open family-friendly spaces
            in one place.
          </p>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
            Most visitors come for the lagoons, but Riverway is far more than the swimming — it is
            where a lot of Townsville families spend a relaxed morning or afternoon, and almost all
            of it costs nothing.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-12 space-y-14">
        <GuideQuickFacts />

        {/* Worth visiting */}
        <section aria-labelledby="worth-visiting">
          <h2 id="worth-visiting" className="text-2xl md:text-3xl font-bold mb-5">
            Is Riverway Worth Visiting?
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Yes — particularly for families, hot-weather days and anyone looking for a relaxed
              free activity. It is one of the strongest free swimming options in Townsville and one
              of the easiest places to fill a half-day without spending money.
            </p>
            <p>
              With that said, be realistic about where it sits in a short trip. If you only have a
              few hours in Townsville, <Link to="/the-strand" className="text-primary underline underline-offset-2">The Strand</Link> and{" "}
              <Link to="/castle-hill" className="text-primary underline underline-offset-2">Castle Hill</Link>{" "}
              should usually come first — they are closer to where most visitors stay and they are
              the two experiences people remember. Riverway becomes more worthwhile on a two- to
              four-day stay, once the headline sights are done.
            </p>
            <p>
              It also feels different to a conventional tourist attraction. Riverway is a local
              recreation precinct: council-run, community-focused and busiest with Townsville
              families rather than visitors. That is exactly why some people love it. If you are
              planning a first visit, the{" "}
              <Link to="/first-time-in-townsville" className="text-primary underline underline-offset-2">
                First Time in Townsville
              </Link>{" "}
              guide sets out how it fits alongside everything else, and{" "}
              <Link to="/townsville-in-one-day" className="text-primary underline underline-offset-2">
                Townsville in One Day
              </Link>{" "}
              covers the very short stay.
            </p>
          </div>
        </section>

        {/* Lagoons */}
        <section aria-labelledby="lagoons">
          <h2 id="lagoons" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Waves className="w-6 h-6 text-primary" aria-hidden="true" /> Riverway Lagoons
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The lagoons are the main attraction and the reason most people make the drive. They
              are free to enter, set into landscaped parkland, and split into separate upper and
              lower lagoon areas so different groups are not competing for the same water.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">Shallow family areas</strong> — gently graded
                sections that suit small children and non-swimmers.
              </li>
              <li>
                <strong className="text-foreground">Deeper swimming water</strong> — enough space
                for older children and adults to actually swim rather than paddle.
              </li>
              <li>
                <strong className="text-foreground">Shade and grass</strong> — trees, shelters and
                lawn around the water, which matters more than it sounds in a Townsville summer.
              </li>
              <li>
                <strong className="text-foreground">Lifeguard supervision</strong> — the lagoons are
                supervised during their opening hours. Follow lifeguard direction and posted signage.
              </li>
              <li>
                <strong className="text-foreground">Accessible entry</strong> — ramped lagoon access
                and accessible surrounding infrastructure.
              </li>
              <li>
                <strong className="text-foreground">Free</strong> — there is no entry fee.
              </li>
            </ul>
          </div>

          <LocalInsightCard variant="warning" title="Check before you drive out" className="mt-6">
            <p>{LAGOON_STATUS}</p>
            <p>
              The lagoons are not open dawn to dusk. Turning up outside supervised hours means
              locked gates, so a 30-second check saves a wasted trip — especially with children in
              the car.
            </p>
          </LocalInsightCard>
        </section>

        {/* With kids */}
        <section aria-labelledby="with-kids">
          <h2 id="with-kids" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Baby className="w-6 h-6 text-primary" aria-hidden="true" /> Riverway With Kids
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Riverway is one of the easiest family half-days in Townsville, mostly because it lets
              you alternate active and quiet time without moving the car.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Shallow lagoon areas for toddlers and young children, with deeper water nearby for stronger swimmers.</li>
              <li>Large lawns and shaded areas for a break between swims.</li>
              <li>CityLibraries Riverway for an air-conditioned reset when everyone has had enough sun.</li>
              <li>Open, family-friendly public spaces rather than tight, fenced attractions.</li>
              <li>Picnic and barbecue facilities, so you can feed everyone without buying lunch.</li>
              <li>Enough variety for a genuine half-day rather than a 40-minute stop.</li>
            </ul>
            <p>
              For age-by-age advice, itineraries and the rest of the city's family options, use the
              full{" "}
              <Link to="/townsville-with-kids" className="text-primary underline underline-offset-2 font-medium">
                Townsville with Kids
              </Link>{" "}
              guide.
            </p>
          </div>
        </section>

        {/* Library */}
        <section aria-labelledby="library">
          <h2 id="library" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-primary" aria-hidden="true" /> CityLibraries Riverway
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The library is part of the precinct and genuinely useful to visitors, not just
              residents. It is free to walk into, air-conditioned, and sits a short walk from the
              lagoons.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Air-conditioning and comfortable seating</li>
              <li>Books, magazines and newspapers</li>
              <li>Dedicated children's and youth areas</li>
              <li>Quiet space for reading, study or working</li>
              <li>Creative and digital facilities where currently available</li>
              <li>A practical break from heat or rain in the middle of a visit</li>
            </ul>
            <p>
              Hours, services and programs change, so check current CityLibraries information before
              relying on it. It is a regular fixture in both the{" "}
              <Link to="/guides/rainy-day-activities" className="text-primary underline underline-offset-2">
                rainy day
              </Link>{" "}
              and{" "}
              <Link to="/guides/beat-the-heat" className="text-primary underline underline-offset-2">
                hot weather
              </Link>{" "}
              plans for good reason.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section aria-labelledby="gallery">
          <h2 id="gallery" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Palette className="w-6 h-6 text-primary" aria-hidden="true" /> Pinnacles Gallery
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Pinnacles Gallery sits within the Riverway precinct and shows contemporary
              exhibitions, often with a strong North Queensland focus. It is small enough to see
              properly in half an hour and easy to combine with the library and the lagoons.
            </p>
            <p>
              As an indoor, air-conditioned space it works well during heat or passing rain. Current
              exhibitions and opening information change regularly, so check before making a special
              trip for a particular show.
            </p>
          </div>
        </section>

        {/* Walking and Ross River */}
        <section aria-labelledby="walking">
          <h2 id="walking" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Footprints className="w-6 h-6 text-primary" aria-hidden="true" /> Walking and the Ross River
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Riverway follows the Ross River, and the riverfront setting is a big part of why it
              works. Pathways run alongside the water and connect the precinct with adjacent
              recreation areas and boardwalk sections.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Gentle, mostly flat riverside walking rather than a serious hike</li>
              <li>Shaded or partly shaded sections along much of the route</li>
              <li>Boardwalks and connections into surrounding parkland and recreation areas</li>
              <li>Best early in the morning or late in the afternoon during hot weather</li>
              <li>Wildlife such as birdlife is often around the river, though nothing is guaranteed</li>
            </ul>
            <p>
              Treat it as a relaxed stroll to round out a visit. If you want a proper walk with a
              payoff, that is{" "}
              <Link to="/castle-hill" className="text-primary underline underline-offset-2">
                Castle Hill
              </Link>{" "}
              territory instead.
            </p>
          </div>
        </section>

        {/* Picnics and food */}
        <section aria-labelledby="food">
          <h2 id="food" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Utensils className="w-6 h-6 text-primary" aria-hidden="true" /> Picnics, Barbecues and Food
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Riverway is set up for bringing your own food, which is what makes it such a
              low-cost family half-day.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Picnic areas and tables around the parkland</li>
              <li>Public barbecue facilities</li>
              <li>Large open lawns for laying out a rug</li>
              <li>Shaded spaces for the middle of the day</li>
              <li>Café or kiosk food within the precinct where currently operating</li>
            </ul>
            <p>
              Food outlets in the precinct change over time, so pack something rather than counting
              on a café being open. See the{" "}
              <Link to="/food" className="text-primary underline underline-offset-2">
                Townsville food and drink guide
              </Link>{" "}
              if you would rather eat properly before or after.
            </p>
          </div>
        </section>

        {/* Free things */}
        <section aria-labelledby="free">
          <h2 id="free" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Gift className="w-6 h-6 text-primary" aria-hidden="true" /> Free Things to Do at Riverway
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Almost everything at Riverway costs nothing:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Swimming in the lagoons</li>
              <li>Riverside walking</li>
              <li>Parklands and lawns</li>
              <li>Public art around the precinct</li>
              <li>CityLibraries Riverway</li>
              <li>Pinnacles Gallery, where entry is free</li>
              <li>Picnics and public barbecues</li>
              <li>Free community events and movie nights when scheduled</li>
            </ul>
            <p>
              Riverway also hosts free community events and movie nights at selected times. Check
              the current{" "}
              <Link to="/events" className="text-primary underline underline-offset-2">
                Townsville events calendar
              </Link>{" "}
              before planning around one. For the wider picture, see{" "}
              <Link to="/guides/free-things" className="text-primary underline underline-offset-2 font-medium">
                Free Things to Do in Townsville
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Accessibility */}
        <section aria-labelledby="accessibility">
          <h2 id="accessibility" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Accessibility className="w-6 h-6 text-primary" aria-hidden="true" /> Accessibility
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Riverway is one of the better-equipped public precincts in Townsville for accessible
              visits. Useful features include:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Wide, sealed pathways through the precinct</li>
              <li>Accessible ramps and graded connections</li>
              <li>Accessible entrances to the buildings</li>
              <li>Lagoon access ramps into the water</li>
              <li>Accessible viewing areas</li>
              <li>Handrails on key access points</li>
              <li>Accessible picnic facilities</li>
              <li>Accessible drinking fountains where available</li>
            </ul>
            <p>
              Riverway has extensive accessible infrastructure, although visitors with specific
              requirements should check current Council accessibility information before travelling.
              Our{" "}
              <Link to="/accessible-townsville" className="text-primary underline underline-offset-2">
                Accessible Townsville
              </Link>{" "}
              guide covers the rest of the city.
            </p>
          </div>
        </section>

        {/* Getting there */}
        <section aria-labelledby="getting-there">
          <h2 id="getting-there" className="text-2xl md:text-3xl font-bold mb-5">
            Parking and Getting There
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="bg-muted/40">
              <CardContent className="p-5 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <Car className="w-5 h-5 text-primary" aria-hidden="true" /> By car
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The easiest option for most visitors. There is substantial free on-site public
                  parking, accessed from Riverway Drive and the surrounding precinct roads. The car
                  parks nearest the lagoons fill first on hot weekends and event days.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/40">
              <CardContent className="p-5 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <Bus className="w-5 h-5 text-primary" aria-hidden="true" /> Public transport
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Translink buses serve the Riverway area, with connections available from
                  surrounding centres including Willows. Routes and schedules change, so plan the
                  trip with{" "}
                  <a
                    href="https://translink.com.au/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-primary underline underline-offset-2"
                  >
                    Translink
                  </a>{" "}
                  before you set out.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/40">
              <CardContent className="p-5 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <Car className="w-5 h-5 text-primary" aria-hidden="true" /> Taxi or rideshare
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A practical alternative, particularly for a one-way trip out with a bus or lift
                  back. Worth pre-arranging a return if you are visiting late in the day.
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="mt-5 text-muted-foreground leading-relaxed">
            Riverway is possible without a car, but it is less convenient than The Strand, the CBD
            and North Ward attractions. If you are not driving in Townsville, read{" "}
            <Link to="/townsville-without-a-car" className="text-primary underline underline-offset-2 font-medium">
              Townsville Without a Car
            </Link>{" "}
            first and decide whether the trip is worth the travel time for your stay.
          </p>
        </section>

        {/* Dogs */}
        <section aria-labelledby="dogs">
          <h2 id="dogs" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Dog className="w-6 h-6 text-primary" aria-hidden="true" /> Riverway and Dogs
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Dogs are welcome in appropriate parkland areas of Riverway, but they must stay on a
            suitable leash, remain out of the lagoons and swimming areas, stay out of any area where
            Council rules prohibit dogs, and be kept under effective control at all times. Check
            on-site signage and current Council rules — and see{" "}
            <Link to="/dog-friendly" className="text-primary underline underline-offset-2">
              Dog-Friendly Townsville
            </Link>{" "}
            for places where dogs can actually swim.
          </p>
        </section>

        {/* Heat and weather */}
        <section aria-labelledby="weather">
          <h2 id="weather" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Sun className="w-6 h-6 text-primary" aria-hidden="true" /> Heat and Weather
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Riverway handles hot weather better than most Townsville outings, because swimming,
              shade, the library and the gallery are all in one place and the whole precinct runs at
              a slower pace.
            </p>
            <p>Even so, plan for the conditions:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Sunscreen, hats and shade breaks — the UV is strong year-round</li>
              <li>Bring plenty of drinking water</li>
              <li>Hot surfaces around paths and paved areas, particularly for bare feet and dogs</li>
              <li>Afternoon heat is the hardest part of the day; mornings are easier</li>
              <li>Storms build quickly in the wet season</li>
              <li>Facilities can close temporarily during significant weather</li>
            </ul>
            <p>
              Do not assume Riverway facilities stay open through severe weather. See{" "}
              <Link to="/guides/beat-the-heat" className="text-primary underline underline-offset-2">
                Beat the Heat
              </Link>{" "}
              and{" "}
              <Link to="/guides/rainy-day-activities" className="text-primary underline underline-offset-2">
                Rainy Day Activities
              </Link>{" "}
              for the full weather playbook.
            </p>
          </div>
        </section>

        {/* Itineraries */}
        <section aria-labelledby="itineraries">
          <h2 id="itineraries" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Clock className="w-6 h-6 text-primary" aria-hidden="true" /> Suggested Riverway Itineraries
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {ITINERARIES.map((it) => (
              <Card key={it.title} className="bg-muted/40">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-3">{it.title}</h3>
                  <ol className="space-y-2 text-sm text-muted-foreground list-decimal pl-5">
                    {it.steps.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Keep these flexible and build them around the current lagoon, library and gallery
            opening information rather than fixed times.
          </p>
        </section>

        {/* Riverway vs The Strand */}
        <section aria-labelledby="vs-strand">
          <h2 id="vs-strand" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Scale className="w-6 h-6 text-primary" aria-hidden="true" /> Riverway vs The Strand
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-muted/40">
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-3">Choose The Strand if</h3>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                  <li>It is your first day in Townsville</li>
                  <li>You want the waterfront and ocean views</li>
                  <li>You are staying centrally</li>
                  <li>You want restaurants and visitor atmosphere</li>
                  <li>You want easy access from North Ward or the CBD</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-muted/40">
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-3">Choose Riverway if</h3>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                  <li>You have children with you</li>
                  <li>You want free supervised swimming</li>
                  <li>You want a quieter, local atmosphere</li>
                  <li>You are already in the western suburbs</li>
                  <li>You want swimming plus library and gallery options</li>
                  <li>You have more than a very short stay</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Neither is objectively better — they do different jobs. Read the full{" "}
            <Link to="/the-strand" className="text-primary underline underline-offset-2 font-medium">
              Strand guide
            </Link>{" "}
            to compare properly.
          </p>
        </section>

        {/* Mistakes */}
        <section aria-labelledby="mistakes">
          <h2 id="mistakes" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-primary" aria-hidden="true" /> Common Riverway Mistakes
          </h2>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            {MISTAKES.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </section>

        {/* Current status */}
        <section aria-labelledby="status">
          <h2 id="status" className="text-2xl md:text-3xl font-bold mb-5">
            Current-Status Checks
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Opening hours, exhibitions, events and transport timetables all change. Check these
            directly before you go:
          </p>
          <ul className="space-y-3">
            {STATUS_CHECKS.map((s) => (
              <li key={s.url} className="text-sm">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-1.5 text-primary underline underline-offset-2 font-medium"
                >
                  {s.name}
                  <ExternalLink className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                </a>
                <span className="block text-muted-foreground">{s.text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Council and emergency numbers are listed in{" "}
            <Link to="/useful-contacts" className="text-primary underline underline-offset-2">
              Useful Contacts
            </Link>
            .
          </p>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq">
          <h2 id="faq" className="text-2xl md:text-3xl font-bold mb-5">
            Riverway FAQ
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Related guides */}
        <section aria-labelledby="related">
          <h2 id="related" className="text-2xl md:text-3xl font-bold mb-5">
            Related Guides
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RELATED.map((r) => (
              <Link
                key={r.to}
                to={r.to}
                className="block bg-card rounded-xl p-5 border hover:border-primary hover:shadow-md transition"
              >
                <h3 className="font-semibold text-foreground mb-1 flex items-center gap-1.5">
                  {r.name}
                  <ArrowRight className="w-4 h-4 text-primary" aria-hidden="true" />
                </h3>
                <p className="text-sm text-muted-foreground">{r.text}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Riverway;
