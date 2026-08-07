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
  Landmark,
  MapPin,
  Mountain,
  Palette,
  Footprints,
  Baby,
  Utensils,
  Accessibility,
  Building2,
  Dog,
  Sun,
  Car,
  Clock,
  Scale,
  AlertTriangle,
  ExternalLink,
  ArrowRight,
  Feather,
} from "lucide-react";
import jezzineHero from "@/assets/jezzine-barracks-townsville.webp";

const SITE = "https://www.townsvilleguide.com.au";
const PATH = "/jezzine-barracks";

const TITLE = "Jezzine Barracks Townsville | Kissing Point Visitor Guide";
const DESCRIPTION =
  "Explore Jezzine Barracks and Kissing Point in Townsville, with coastal walks, military and Aboriginal heritage, playgrounds, views, parking and local tips.";

const ITINERARIES = [
  {
    title: "45–60 minutes",
    steps: [
      "Park or walk in from The Strand",
      "Head straight up to Kissing Point",
      "Look through the fort and heritage area",
      "Take in the coastal views, then return the same way",
    ],
  },
  {
    title: "Around 90 minutes",
    steps: [
      "Wander the public art through the precinct",
      "Read the heritage interpretation as you go",
      "Kissing Point and the observation areas",
      "Finish along the coastal boardwalk",
    ],
  },
  {
    title: "Half-day with The Strand",
    steps: [
      "Walk The Strand from the southern end",
      "Continue north into Jezzine Barracks",
      "Kissing Point and the heritage precinct",
      "Continue toward Rowes Bay, or head back for lunch nearby",
    ],
  },
];

const MISTAKES = [
  "Thinking Jezzine is only a military museum — the walks, art, views and open space are most of the experience.",
  "Driving there when you are already staying on The Strand, then hunting for a park you never needed.",
  "Visiting in the middle of the day, in summer, with no water.",
  "Missing Kissing Point entirely and only seeing the lower parts of the precinct.",
  "Assuming every part of the precinct is fully accessible — some heritage areas are more limited.",
  "Assuming the Army Museum is free because Jezzine Barracks itself is.",
  "Visiting only the playground and skipping the heritage walk.",
  "Stopping at the boundary instead of continuing along the coastal route toward Rowes Bay.",
];

const STATUS_CHECKS = [
  {
    name: "Townsville City Council — Jezzine Barracks",
    url: "https://www.townsville.qld.gov.au/facilities-and-recreation/parks-and-playgrounds/jezzine-barracks",
    text: "Precinct information, facilities, access and current notices.",
  },
  {
    name: "Army Museum North Queensland",
    url: "https://www.armymuseumnq.com.au/",
    text: "Current opening days, admission conditions and visitor information.",
  },
  {
    name: "Townsville City Council — accessibility information",
    url: "https://www.townsville.qld.gov.au/",
    text: "Current accessible parking, path and facility details.",
  },
  {
    name: "Townsville Disaster Dashboard",
    url: "https://disaster.townsville.qld.gov.au/",
    text: "Worth checking during severe weather, when coastal areas may be affected.",
  },
  {
    name: "Bureau of Meteorology — Townsville",
    url: "http://www.bom.gov.au/qld/forecasts/townsville.shtml",
    text: "Forecast, heat and storm warnings before an exposed coastal walk.",
  },
];

const RELATED = [
  { name: "The Strand", to: "/the-strand", text: "The waterfront precinct that runs straight into Jezzine." },
  { name: "Townsville with Kids", to: "/townsville-with-kids", text: "The full family-planning guide." },
  { name: "Free Things to Do", to: "/guides/free-things", text: "Townsville on a budget." },
  { name: "Townsville Without a Car", to: "/townsville-without-a-car", text: "What works on foot and by bus." },
  { name: "First Time in Townsville", to: "/first-time-in-townsville", text: "Orientation for a first visit." },
  { name: "Townsville in One Day", to: "/townsville-in-one-day", text: "A realistic single-day itinerary." },
  { name: "Beat the Heat", to: "/guides/beat-the-heat", text: "Planning a hot Townsville day safely." },
  { name: "Rainy Day Activities", to: "/guides/rainy-day-activities", text: "Indoor and wet-weather options." },
  { name: "Castle Hill", to: "/castle-hill", text: "Townsville's landmark panoramic lookout." },
  { name: "Walking Castle Hill", to: "/guides/walking-castle-hill", text: "Tracks, difficulty and what to expect." },
  { name: "Rowes Bay", to: "/rowes-bay", text: "Where the coastal route continues north." },
  { name: "Townsville Beaches", to: "/beaches", text: "Swimming and beach options around the city." },
  { name: "Useful Contacts", to: "/useful-contacts", text: "Council, emergency and visitor contacts." },
];

const faqs = [
  {
    q: "Is Jezzine Barracks worth visiting?",
    a: "Yes, especially if you are already visiting The Strand or staying in North Ward. It is free, scenic, easy to walk, family-friendly and historically interesting, and it works well as a relaxed one- to two-hour visit. It is not normally an all-day attraction on its own.",
  },
  {
    q: "Is Jezzine Barracks free?",
    a: "Yes. The precinct itself is a free public space, including the walking paths, Kissing Point, the public art and the playground. The Army Museum North Queensland is a separate attraction with its own operating arrangements and any applicable admission conditions.",
  },
  {
    q: "How long do you need at Jezzine Barracks?",
    a: "Most visitors are comfortable with one to two hours. Around 45 to 60 minutes is enough for Kissing Point and the fort area, while 90 minutes lets you take in the public art, heritage interpretation and the coastal boardwalk without rushing.",
  },
  {
    q: "What is Kissing Point?",
    a: "Kissing Point is the headland at the northern end of the precinct, with coastal views over Cleveland Bay toward Magnetic Island, observation and lookout areas, and the restored elements of the historic Kissing Point Fort complex. It is easy to reach as part of a walk through Jezzine Barracks.",
  },
  {
    q: "Can you walk from The Strand to Jezzine Barracks?",
    a: "Yes. Jezzine Barracks sits at the northern end of The Strand and the two connect directly on foot along the waterfront. It is one of the easiest walking additions to a Strand morning or late afternoon.",
  },
  {
    q: "Is Jezzine Barracks good for children?",
    a: "Yes. There is a playground, open grassed space, picnic areas and short walking distances, plus views and heritage features that tend to hold the interest of older children. It combines easily with a morning on The Strand.",
  },
  {
    q: "Is there a playground at Jezzine Barracks?",
    a: "Yes, there is a fenced playground within the precinct with shade provided over the play area. Shade over the playground does not mean the rest of the precinct is shaded — much of the coastal walking is exposed.",
  },
  {
    q: "Is there parking at Jezzine Barracks?",
    a: "Yes, public parking is available around the precinct, with access from the North Ward street network. It can be busy at peak times, on weekends and during events, and if you are staying on The Strand you generally do not need to drive at all.",
  },
  {
    q: "Is Jezzine Barracks wheelchair accessible?",
    a: "Much of Jezzine Barracks has accessible paths and facilities, including accessible toilets and accessible parking, although some areas of the heritage precinct have more limited access due to the terrain and historic structures. Visitors with specific access requirements should check current Townsville City Council information before visiting.",
  },
  {
    q: "Can dogs visit Jezzine Barracks?",
    a: "Dogs are allowed in appropriate areas of the precinct and must be kept on a leash where required, under effective control at all times. Not every part of the precinct allows dogs, so follow on-site signage and current Council rules, and clean up after your dog.",
  },
  {
    q: "Is the Army Museum free?",
    a: "Jezzine Barracks itself is free, but the Army Museum is a separate attraction. Check its current official information for opening and admission details.",
  },
  {
    q: "What is the best time to visit Jezzine Barracks?",
    a: "Early morning or late afternoon. Parts of the precinct are exposed, so the middle of the day is uncomfortable for much of the year, and the coastal light and views over Cleveland Bay are at their best at either end of the day.",
  },
];

const JezzineBarracks = () => {
  return (
    <>
      <SEOHead title={TITLE} description={DESCRIPTION} canonical={PATH} ogType="article" />
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
              { "@type": "ListItem", position: 3, name: "Jezzine Barracks", item: `${SITE}${PATH}` },
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
            North Ward
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
            Jezzine Barracks Townsville: Kissing Point, Walks &amp; Visitor Guide
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Jezzine Barracks is a free coastal and heritage precinct in North Ward, sitting at the
            northern end of The Strand. It brings together coastal walking paths, Kissing Point and
            its fort remains, military and Aboriginal heritage, commissioned public art, a
            playground and picnic areas on one headland site.
          </p>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
            It is much more than a playground or a military site, and for most people it is a
            comfortable one- to two-hour experience rather than an all-day attraction.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-12 space-y-14">
        <figure className="rounded-xl overflow-hidden border border-border/40 bg-muted/30">
          <img
            src={jezzineHero}
            alt="Coastal parkland and heritage precinct at Jezzine Barracks, North Ward, Townsville"
            className="w-full h-auto"
            width={1600}
            height={900}
            loading="eager"
            decoding="async"
          />
          <figcaption className="p-4 text-sm text-muted-foreground italic">
            The Jezzine Barracks precinct wraps around Kissing Point at the northern end of The
            Strand.
          </figcaption>
        </figure>

        <GuideQuickFacts />

        <a
          href="https://www.google.com/maps/search/?api=1&query=Jezzine+Barracks+North+Ward+QLD"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <MapPin className="w-4 h-4" aria-hidden="true" />
          Get Directions
        </a>

        {/* Worth visiting */}
        <section aria-labelledby="worth-visiting">
          <h2 id="worth-visiting" className="text-2xl md:text-3xl font-bold mb-5">
            Is Jezzine Barracks Worth Visiting?
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Yes — especially if you are already visiting{" "}
              <Link to="/the-strand" className="text-primary underline underline-offset-2">
                The Strand
              </Link>{" "}
              or staying in North Ward. It costs nothing, it is genuinely scenic, and it takes very
              little effort to add to a day you were having anyway.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Free to enter and free to walk through</li>
              <li>Coastal views over Cleveland Bay toward Magnetic Island</li>
              <li>Flat, easy walking on formed paths and boardwalk sections</li>
              <li>Directly connected to The Strand on foot</li>
              <li>Playground, open space and picnic areas for families</li>
              <li>Genuinely interesting heritage, both military and Aboriginal</li>
              <li>Well suited to a relaxed one- to two-hour visit</li>
            </ul>
            <p>
              Be realistic about the scale, though. Jezzine is not normally an all-day attraction by
              itself — it is a precinct you walk through, not a venue you spend a day inside. Plan
              it as part of a wider waterfront morning or late afternoon. If you are working out
              where it fits in a short trip, see{" "}
              <Link to="/first-time-in-townsville" className="text-primary underline underline-offset-2">
                First Time in Townsville
              </Link>{" "}
              and{" "}
              <Link to="/townsville-in-one-day" className="text-primary underline underline-offset-2">
                Townsville in One Day
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Kissing Point */}
        <section aria-labelledby="kissing-point">
          <h2 id="kissing-point" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Mountain className="w-6 h-6 text-primary" aria-hidden="true" /> Kissing Point
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Kissing Point is the headland at the northern end of the precinct and the natural
              high point of a Jezzine walk. It is where the coastal views, the fort remains and the
              observation areas all come together.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Open coastal views across Cleveland Bay toward Magnetic Island</li>
              <li>Lookout and observation areas built into the headland</li>
              <li>Restored military structures from the historic fort complex</li>
              <li>Easy access as part of the main walking route through the precinct</li>
              <li>Strong appeal at sunrise and in the late afternoon, when the light and the sea breeze are both better</li>
            </ul>
            <p>
              It is worth being clear about what Kissing Point is and is not. It is not a
              replacement for{" "}
              <Link to="/castle-hill" className="text-primary underline underline-offset-2">
                Castle Hill
              </Link>
              : Castle Hill gives you the wider panoramic view over the whole city, while Kissing
              Point gives you easier, closer coastal views combined with heritage. They do different
              jobs, and most visitors with time end up doing both.
            </p>
          </div>
        </section>

        {/* Military heritage */}
        <section aria-labelledby="military-heritage">
          <h2 id="military-heritage" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Landmark className="w-6 h-6 text-primary" aria-hidden="true" /> Military Heritage
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The site was used by the military for well over a century before it was returned to
              public use as a heritage parkland, and that history is still visible as you walk
              through it.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Restored elements of the Kissing Point Fort complex on the headland</li>
              <li>Interpretive signage explaining what the structures were used for</li>
              <li>Displays and memorial spaces recognising Townsville's defence history</li>
              <li>Heritage structures set within the walking route rather than behind a ticket gate</li>
            </ul>
            <p>
              You do not need any background knowledge to get something out of it — the
              interpretation is written for general visitors, and the structures make more sense
              once you are standing on the headland looking out over the approach to the harbour.
              If you want the deeper story, the{" "}
              <Link to="/history" className="text-primary underline underline-offset-2">
                history of Townsville
              </Link>{" "}
              guide covers the wider picture.
            </p>
          </div>
        </section>

        {/* Aboriginal heritage */}
        <section aria-labelledby="aboriginal-heritage">
          <h2 id="aboriginal-heritage" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Feather className="w-6 h-6 text-primary" aria-hidden="true" /> Aboriginal Heritage and Garabarra
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Jezzine Barracks commemorates both Aboriginal and military history, and the Aboriginal
              heritage of the site is represented throughout the precinct rather than confined to
              one corner of it. The precinct is known as Garabarra, a name used by Townsville City
              Council and in the site's own interpretation.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Garabarra — the name given to the redeveloped precinct</li>
              <li>Aboriginal heritage interpretation integrated through the site</li>
              <li>Commissioned artworks and cultural elements produced for the precinct</li>
              <li>Recognition of the site's significance alongside its later military use</li>
            </ul>
            <p>
              Read the on-site interpretation as you walk — it is the appropriate source for the
              cultural meaning of the site, and Townsville City Council's Jezzine Barracks
              information carries the current official detail. Please treat the cultural elements of
              the precinct respectfully.
            </p>
          </div>
        </section>

        {/* Public art */}
        <section aria-labelledby="public-art">
          <h2 id="public-art" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Palette className="w-6 h-6 text-primary" aria-hidden="true" /> Public Art
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Public art is a genuine part of the Jezzine experience rather than a bonus. More than
              30 commissioned public artworks are spread throughout the precinct, covering both the
              Aboriginal and military heritage of the site.
            </p>
            <p>
              You do not need a separate art itinerary. The works are placed along the paths,
              around the headland and through the open spaces, so you encounter them naturally
              while walking. If you slow down and read the accompanying interpretation, an ordinary
              coastal stroll turns into something considerably more interesting.
            </p>
          </div>
        </section>

        {/* Coastal walk */}
        <section aria-labelledby="coastal-walk">
          <h2 id="coastal-walk" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Footprints className="w-6 h-6 text-primary" aria-hidden="true" /> The Coastal Walk and Boardwalk
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              This is the part most first-time visitors underestimate. Jezzine works best as a link
              in a longer waterfront route rather than a standalone stop:
            </p>
            <p className="font-medium text-foreground">
              The Strand → Jezzine Barracks → Kissing Point → Rowes Bay
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Formed paths and boardwalk sections around the headland</li>
              <li>Continuous coastal views for most of the route</li>
              <li>Flat, easy walking with no climbing required</li>
              <li>A direct on-foot connection between North Ward and Rowes Bay</li>
              <li>One of the best options in the city if you do not have a car</li>
              <li>Best walked in the morning or late afternoon in hot weather</li>
            </ul>
            <p>
              From the northern side you can continue toward{" "}
              <Link to="/rowes-bay" className="text-primary underline underline-offset-2">
                Rowes Bay
              </Link>
              , or turn around and head back into{" "}
              <Link to="/the-strand" className="text-primary underline underline-offset-2">
                The Strand
              </Link>{" "}
              for food and swimming. If you are getting around on foot, see{" "}
              <Link to="/townsville-without-a-car" className="text-primary underline underline-offset-2">
                Townsville Without a Car
              </Link>
              , and for other no-cost options see{" "}
              <Link to="/guides/free-things" className="text-primary underline underline-offset-2">
                Free Things to Do
              </Link>
              .
            </p>
          </div>
        </section>

        {/* With kids */}
        <section aria-labelledby="with-kids">
          <h2 id="with-kids" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Baby className="w-6 h-6 text-primary" aria-hidden="true" /> Jezzine Barracks With Kids
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Jezzine is an easy add-on to a family morning on The Strand, mainly because the
              distances are short and nothing about it is strenuous.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fenced playground, with shade provided over the play area</li>
              <li>Large open grassed spaces to run around in</li>
              <li>Picnic areas for a break or a packed lunch</li>
              <li>Short walking distances between the main features</li>
              <li>Kissing Point views, which most children enjoy more than they expect</li>
              <li>Heritage structures and artworks that hold the interest of older children</li>
              <li>Straightforward to combine with a Strand morning and a swim</li>
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

        {/* Facilities */}
        <section aria-labelledby="facilities">
          <h2 id="facilities" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Utensils className="w-6 h-6 text-primary" aria-hidden="true" /> Picnics and Facilities
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The precinct is set up as a public parkland, so the practical basics are covered
              without needing to leave the site:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Picnic shelters and tables</li>
              <li>Barbecue facilities</li>
              <li>Public toilets, including accessible toilets</li>
              <li>Fenced, shaded playground</li>
              <li>Formed walking paths and coastal boardwalk</li>
              <li>Lookout and observation areas around Kissing Point</li>
              <li>Public parking around the precinct</li>
            </ul>
            <p>
              Facilities are occasionally closed for maintenance or during events, so check current
              Townsville City Council information if a specific facility matters to your plans.
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
              Much of Jezzine Barracks has accessible paths and facilities, although some areas of
              the heritage precinct have more limited access. The parkland and coastal sections are
              considerably easier than the older structures on the headland.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Sealed, largely flat paths through the main parkland areas</li>
              <li>Accessible toilets within the precinct</li>
              <li>Ramps and graded access to a number of areas</li>
              <li>Accessible parking near the precinct</li>
              <li>Steeper, uneven or stepped access in parts of the heritage and fort areas</li>
            </ul>
            <p>
              We would not describe the whole precinct as fully accessible. Visitors with specific
              access requirements should check current Townsville City Council information before
              visiting, and our{" "}
              <Link to="/accessible-townsville" className="text-primary underline underline-offset-2">
                Accessible Townsville
              </Link>{" "}
              guide covers the wider city.
            </p>
          </div>
        </section>

        {/* Army Museum */}
        <section aria-labelledby="army-museum">
          <h2 id="army-museum" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Building2 className="w-6 h-6 text-primary" aria-hidden="true" /> Army Museum North Queensland
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The Army Museum North Queensland is located within the Jezzine precinct but operates
              as a separate attraction. This trips people up regularly.
            </p>
            <p>
              Jezzine Barracks itself is free, but the Army Museum is a separate attraction with its
              own operating arrangements and any applicable admission conditions. It is not open
              continuously, and its arrangements are not set by the parkland.
            </p>
            <p className="font-medium text-foreground">
              Check the Army Museum's current official information before planning your visit.
            </p>
          </div>
        </section>

        {/* Dogs */}
        <section aria-labelledby="dogs">
          <h2 id="dogs" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Dog className="w-6 h-6 text-primary" aria-hidden="true" /> Dogs at Jezzine Barracks
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Dogs are allowed in appropriate areas of the precinct under current Council rules. They
            must remain on a leash where required, stay under effective control, and stay out of any
            area where signage prohibits dogs — not every part of the precinct allows them. Clean up
            after your dog and follow on-site signage, which is the authority on the day. For places
            where dogs get more freedom, see{" "}
            <Link to="/dog-friendly" className="text-primary underline underline-offset-2">
              Dog-Friendly Townsville
            </Link>
            .
          </p>
        </section>

        {/* Heat and weather */}
        <section aria-labelledby="weather">
          <h2 id="weather" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Sun className="w-6 h-6 text-primary" aria-hidden="true" /> Heat and Weather
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Parts of the precinct are genuinely exposed, particularly around the headland and the
              open coastal paths. Shade over the playground and picnic areas does not mean the whole
              precinct is shaded.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Morning and late afternoon are far more comfortable</li>
              <li>Carry water — there is a lot of open ground between shade</li>
              <li>Hats, sunscreen and sensible footwear, year-round</li>
              <li>Allow more time in humid conditions, especially with children</li>
            </ul>
            <p>
              Our{" "}
              <Link to="/guides/beat-the-heat" className="text-primary underline underline-offset-2">
                Beat the Heat
              </Link>{" "}
              guide covers the full hot-weather playbook.
            </p>
            <p>
              In wet weather, passing showers do not necessarily rule out a visit — the walk is
              short and you can wait one out under a shelter. Persistent rain or severe weather is
              different: exposed coastal walking stops being worthwhile, and you should follow
              current weather warnings. See{" "}
              <Link to="/guides/rainy-day-activities" className="text-primary underline underline-offset-2">
                Rainy Day Activities
              </Link>{" "}
              for the alternatives.
            </p>
          </div>
        </section>

        {/* Getting there */}
        <section aria-labelledby="getting-there">
          <h2 id="getting-there" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Car className="w-6 h-6 text-primary" aria-hidden="true" /> Getting There
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">From The Strand</h3>
              <p>
                Jezzine sits at the northern end of The Strand, so the two combine on foot without
                any planning at all. Walk to the northern end of the promenade and keep going — the
                precinct starts where the beachfront path curves around the headland.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">By car</h3>
              <p>
                Public parking is available around the precinct, accessed from the North Ward street
                network. It fills up at peak times, on weekends and during events, so allow a little
                flexibility. Check current signage for any time limits.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Without a car</h3>
              <p>
                Jezzine is one of the easier Townsville attractions to reach without private
                transport if you are staying around The Strand, North Ward or the CBD — it is a
                walk, not a drive. See{" "}
                <Link
                  to="/townsville-without-a-car"
                  className="text-primary underline underline-offset-2 font-medium"
                >
                  Townsville Without a Car
                </Link>{" "}
                for the full walking and bus picture.
              </p>
            </div>
          </div>
        </section>

        {/* Itineraries */}
        <section aria-labelledby="itineraries">
          <h2 id="itineraries" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Clock className="w-6 h-6 text-primary" aria-hidden="true" /> Suggested Visits
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
            All timings are approximate — how long you spend depends mostly on how much of the
            heritage interpretation you stop to read.
          </p>
        </section>

        {/* Comparison */}
        <section aria-labelledby="vs-castle-hill">
          <h2 id="vs-castle-hill" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Scale className="w-6 h-6 text-primary" aria-hidden="true" /> Jezzine Barracks vs Castle Hill
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            These are the two obvious "view" options in central Townsville, and neither is
            objectively better — they suit different days and different visitors.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-muted/40">
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-3">Choose Jezzine if</h3>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                  <li>You want an easy, flat walk</li>
                  <li>You are getting around without a car</li>
                  <li>You are travelling with younger children</li>
                  <li>You are interested in coastal heritage</li>
                  <li>You want to combine it with The Strand</li>
                  <li>You want scenery without a strenuous climb</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-muted/40">
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-3">Choose Castle Hill if</h3>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                  <li>Panoramic city views are the priority</li>
                  <li>You have transport, or are happy to walk up</li>
                  <li>You want Townsville's highest major viewpoint</li>
                  <li>You want a more substantial walking challenge</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            See{" "}
            <Link to="/castle-hill" className="text-primary underline underline-offset-2">
              Castle Hill
            </Link>{" "}
            and{" "}
            <Link to="/guides/walking-castle-hill" className="text-primary underline underline-offset-2">
              Walking Castle Hill
            </Link>{" "}
            for tracks, difficulty and parking.
          </p>
        </section>

        {/* Mistakes */}
        <section aria-labelledby="mistakes">
          <h2 id="mistakes" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-primary" aria-hidden="true" /> Common Jezzine Barracks Mistakes
          </h2>
          <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pl-5">
            {MISTAKES.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </section>

        <LocalInsightCard title="The easiest win on a Strand day">
          <p>
            If you are already walking The Strand, keep going north. Jezzine adds views, history and
            art for the price of another twenty minutes on your feet, and it is the single easiest
            worthwhile addition most visitors miss.
          </p>
        </LocalInsightCard>

        {/* Status checks */}
        <section aria-labelledby="status">
          <h2 id="status" className="text-2xl md:text-3xl font-bold mb-5">
            Current-Status Checks
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Facility availability, museum arrangements and weather all change. Check these directly
            before you go:
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
            Jezzine Barracks FAQ
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

        {/* Related */}
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

export default JezzineBarracks;
