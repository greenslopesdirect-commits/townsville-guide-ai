import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import LocalInsightCard from "@/components/LocalInsightCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Waves,
  Sun,
  Umbrella,
  Baby,
  Footprints,
  Car,
  CloudRain,
  Thermometer,
  AlertTriangle,
  Dog,
  Clock,
  ShieldAlert,
  ExternalLink,
  ArrowRight,
  MapPin,
} from "lucide-react";

const SITE = "https://www.townsvilleguide.com.au";
const PATH = "/beaches";

const TITLE = "Best Beaches in Townsville | Swimming, Pallarenda & Local Guide";
const DESCRIPTION =
  "Discover Townsville's best beaches, including The Strand, Pallarenda, Rowes Bay and northern beaches, with swimming, stinger, family and access advice.";

const COMPARISON = [
  {
    beach: "The Strand",
    bestFor: "First visits, families, easy beach access",
    swimming: "Designated and patrolled options, depending on current conditions",
    car: "No",
    feel: "Main visitor waterfront",
    to: "/the-strand",
  },
  {
    beach: "Pallarenda",
    bestFor: "Quieter beach outing, picnic, coastal scenery",
    swimming: "Check current seasonal net and patrol status",
    car: "Yes — very helpful",
    feel: "Relaxed",
    to: "/pallarenda-beach",
  },
  {
    beach: "Rowes Bay",
    bestFor: "Walking, views, sunset",
    swimming: "Check current official status; not a primary swimming beach",
    car: "Helpful",
    feel: "Scenic and local",
    to: "/rowes-bay",
  },
  {
    beach: "Bushland Beach",
    bestFor: "Foreshore, picnic, local atmosphere",
    swimming: "Check current official status",
    car: "Yes",
    feel: "Suburban and local",
    to: undefined,
  },
  {
    beach: "Balgal Beach",
    bestFor: "Northern beach day, regional coastal outing",
    swimming: "Check current seasonal arrangements",
    car: "Yes",
    feel: "Regional",
    to: undefined,
  },
  {
    beach: "Toomulla",
    bestFor: "Quiet northern coast, relaxed stop",
    swimming: "Check current official status",
    car: "Yes",
    feel: "Very local",
    to: undefined,
  },
];

const ITINERARIES = [
  {
    title: "First-time beach morning",
    steps: [
      "Start early on The Strand",
      "Water Park or the Rockpool, where conditions suit",
      "Walk north toward Jezzine Barracks",
      "Breakfast or coffee along the foreshore",
    ],
  },
  {
    title: "Quiet coastal afternoon",
    steps: [
      "Jezzine Barracks and Kissing Point",
      "Continue to Rowes Bay",
      "Drive on to Pallarenda",
      "Stay for the late afternoon light",
    ],
  },
  {
    title: "Northern beaches drive",
    steps: [
      "Pick one or two beaches, not all of them",
      "Pack a picnic and plenty of water",
      "Relaxed coastal stops rather than a schedule",
      "Head back before the worst of the afternoon heat",
    ],
  },
  {
    title: "Family beach outing",
    steps: [
      "The Strand or Pallarenda",
      "Playground and picnic time first",
      "Check current swimming status before anyone gets in",
      "Wrap up or take a shaded break before peak heat",
    ],
  },
];

const MISTAKES = [
  "Assuming every Townsville beach is patrolled — most are not.",
  "Assuming every beach has a stinger net. Only selected beaches do.",
  "Treating a stinger net as complete protection rather than risk reduction.",
  "Deciding to swim because the water looks calm.",
  "Heading to Pallarenda or the northern beaches without enough drinking water.",
  "Assuming food and cafés are available at every beach — outside The Strand, often nothing is.",
  "Planning a long beach visit in the middle of the day in summer.",
  "Ignoring current weather warnings or closure advice.",
  "Treating Rowes Bay as a primary designated swimming location.",
  "Assuming dog rules are the same at every beach instead of checking the dog beaches guide.",
];

const STATUS_CHECKS = [
  {
    name: "Townsville City Council — beaches and lifeguard information",
    url: "https://www.townsville.qld.gov.au/facilities-and-recreation/beaches-and-pools",
    text: "Current beach status, patrol arrangements and facility information.",
  },
  {
    name: "Surf Life Saving Queensland",
    url: "https://lifesaving.com.au/",
    text: "Patrol services and swimming safety guidance for Queensland beaches.",
  },
  {
    name: "Beachsafe (Surf Life Saving Australia)",
    url: "https://beachsafe.org.au/",
    text: "Beach-by-beach conditions, hazards and patrol details.",
  },
  {
    name: "Bureau of Meteorology — Townsville",
    url: "http://www.bom.gov.au/qld/forecasts/townsville.shtml",
    text: "Forecast, heat, storm and marine warnings.",
  },
  {
    name: "Townsville Disaster Dashboard",
    url: "https://disaster.townsville.qld.gov.au/",
    text: "Road, closure and severe-weather information.",
  },
  {
    name: "Queensland Government — Be Crocwise",
    url: "https://www.qld.gov.au/environment/plants-animals/animals/crocodiles/crocwise",
    text: "Official crocodile safety guidance for North Queensland.",
  },
];

const RELATED = [
  { name: "The Strand", to: "/the-strand", text: "The full guide to Townsville's main beachfront." },
  { name: "Pallarenda Beach", to: "/pallarenda-beach", text: "The quieter coastal option north of the city." },
  { name: "Rowes Bay", to: "/rowes-bay", text: "Walking, views and late-afternoon coastline." },
  { name: "Saunders Beach", to: "/beaches/saunders-beach", text: "A long, quiet northern beach." },
  { name: "Jezzine Barracks", to: "/jezzine-barracks", text: "Coastal heritage precinct at the end of The Strand." },
  { name: "Stinger Safety", to: "/guides/stinger-safety", text: "Marine stingers, nets and what to do." },
  { name: "Townsville with Kids", to: "/townsville-with-kids", text: "Family planning for the whole city." },
  { name: "Free Things to Do", to: "/guides/free-things", text: "Townsville without spending money." },
  { name: "First Time in Townsville", to: "/first-time-in-townsville", text: "Orientation for a first visit." },
  { name: "Townsville Without a Car", to: "/townsville-without-a-car", text: "What works on foot and by bus." },
  { name: "Beat the Heat", to: "/guides/beat-the-heat", text: "Hot-weather planning and safety." },
  { name: "Rainy Day Activities", to: "/guides/rainy-day-activities", text: "Wet-weather alternatives." },
  { name: "Magnetic Island Day Trip", to: "/guides/magnetic-island-day-trip", text: "The island's bays, a ferry ride away." },
  { name: "Dog-Friendly Townsville", to: "/dog-friendly", text: "Dog beach locations and access rules." },
];

const faqs = [
  {
    q: "What is the best beach in Townsville?",
    a: "The Strand is the strongest all-round option, especially for first-time visitors. It combines a long beachfront and promenade with designated swimming areas, playgrounds, the Rockpool, the Strand Water Park, food and toilets, and it is easy to reach without a car. Pallarenda is the better choice if you want somewhere quieter.",
  },
  {
    q: "Can you swim at Townsville beaches?",
    a: "Yes, but swimming suitability varies significantly between locations and across the year. Use designated swimming areas where they are available, swim between the flags when lifeguards are operating, and check current Townsville City Council beach information before entering the water. Marine stingers are a genuine consideration in tropical Queensland, so do not judge a beach by how calm the water looks.",
  },
  {
    q: "Which Townsville beaches have stinger nets?",
    a: "Selected beaches around Townsville and Magnetic Island have seasonal stinger enclosures rather than permanent year-round nets. Installation and removal dates change from season to season and nets can be removed temporarily after severe weather, so check current Townsville City Council information for which enclosures are in place before you swim.",
  },
  {
    q: "When is stinger season in Townsville?",
    a: "The typical marine stinger season in North Queensland runs from November to May. Seasonal stinger enclosures are generally installed for that period, but exact dates vary each year and stingers can be present outside those months, so treat the season as a guide rather than a guarantee.",
  },
  {
    q: "Is The Strand good for swimming?",
    a: "The Strand is the most set-up beach for swimming in Townsville, with designated swimming areas and seasonal enclosures, lifeguard services at times, and the Rockpool as a netted alternative. Current patrol and net arrangements change through the year, so check Council information and follow on-beach signage and flags.",
  },
  {
    q: "Is Pallarenda Beach good for swimming?",
    a: "Pallarenda is a pleasant, quieter beach with a seasonal swimming enclosure arrangement, but it does not have the same continuous services as The Strand. Do not assume lifeguards are on duty. Check current Townsville City Council information on net and patrol status before entering the water.",
  },
  {
    q: "Is Rowes Bay a swimming beach?",
    a: "Rowes Bay is better thought of as a walking, views and sunset beach rather than a primary swimming location. It is quiet and scenic, and it links Jezzine Barracks with Pallarenda on foot. If you are considering swimming there, check current official beach information first.",
  },
  {
    q: "Which Townsville beach is best with children?",
    a: "The Strand is the strongest family choice, with playgrounds, the Strand Water Park, the Rockpool, shade, toilets, food nearby and designated swimming options. Pallarenda works well for a quieter family picnic if you have a car, with swimming decisions based on current conditions and official status.",
  },
  {
    q: "Do you need a car to visit Townsville beaches?",
    a: "Not for The Strand, which is the easiest beach experience in the city without a car and connects on foot to Jezzine Barracks and Rowes Bay. A car is helpful for Pallarenda and effectively necessary for the northern beaches, though taxis and rideshare are an option for shorter trips.",
  },
  {
    q: "What are the best beaches near Townsville?",
    a: "North of the city, Saunders Beach, Toolakea, Toomulla and Balgal Beach are the main options, and they suit a relaxed coastal drive rather than a rushed itinerary. Magnetic Island's bays, including Alma Bay and Horseshoe Bay, are a short ferry ride away and are the strongest beach day trip from Townsville.",
  },
  {
    q: "Are Townsville beaches safe in the wet season?",
    a: "Beaches should not be treated as suitable during thunderstorms or severe weather. Heavy rain can affect water quality, wash debris into coastal areas and change beach access, and stinger enclosures may be removed temporarily. Check the Bureau of Meteorology, the Townsville Disaster Dashboard and current Council beach information before heading out.",
  },
  {
    q: "Where can I take my dog to the beach in Townsville?",
    a: "Townsville has specific on-leash and off-leash beach rules that vary by location. See our dedicated Townsville dog beaches guide for current locations, access rules and dog-specific advice.",
  },
];

const Beaches = () => {
  return (
    <>
      <SEOHead
        title={TITLE}
        description={DESCRIPTION}
        canonical={PATH}
        ogType="article"
        ogImage="https://www.townsvilleguide.com.au/rock-pool-townsville.webp"
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
              { "@type": "ListItem", position: 2, name: "Beaches", item: `${SITE}${PATH}` },
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
            Townsville Coastline
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
            Best Beaches in Townsville: Swimming, Pallarenda &amp; Local Guide
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Townsville's beaches make more sense as part of a tropical coastal lifestyle than as
            conventional surf beaches. Cleveland Bay is sheltered, the water is usually calm, and
            the appeal is early morning walks, shaded foreshores, picnics and long views out toward
            Magnetic Island rather than waves.
          </p>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
            They are also not interchangeable. Swimming suitability varies significantly between
            locations, and marine-stinger conditions, patrols and net arrangements need to be
            checked before you get in the water anywhere.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-12 space-y-14">
        <GuideQuickFacts />

        {/* Which beach */}
        <section aria-labelledby="which-beach">
          <h2 id="which-beach" className="text-2xl md:text-3xl font-bold mb-5">
            Which Townsville Beach Should You Visit?
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>The short version, before the detail:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">The Strand</strong> — the strongest all-round
                visitor beach area, and the right default for a first visit.
              </li>
              <li>
                <strong className="text-foreground">Pallarenda and Rowes Bay</strong> — quieter
                coastal experiences, better for walking, picnics and late afternoons.
              </li>
              <li>
                <strong className="text-foreground">Northern beaches</strong> — more local, more
                car-dependent, and best treated as a relaxed drive rather than a must-do.
              </li>
            </ul>
          </div>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                <Umbrella className="w-5 h-5 text-primary" aria-hidden="true" /> The Strand
              </h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  If you only visit one Townsville beach, make it this one. The Strand is a long
                  beachfront and promenade with everything built around it, and it is the only beach
                  area in the city that works as a whole half-day on its own.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Beachfront and continuous promenade</li>
                  <li>Cafés, restaurants and food along the strip</li>
                  <li>Multiple playgrounds and the Strand Water Park</li>
                  <li>The Rockpool, a netted swimming alternative</li>
                  <li>Designated swimming areas, with seasonal and patrol arrangements</li>
                  <li>Toilets, showers, shade and picnic facilities</li>
                  <li>Easy to reach on foot from North Ward and the CBD — no car needed</li>
                </ul>
                <p>
                  Full detail — parking, swimming spots, food, markets and facilities — is in the{" "}
                  <Link to="/the-strand" className="text-primary underline underline-offset-2 font-medium">
                    complete Strand guide
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                <Waves className="w-5 h-5 text-primary" aria-hidden="true" /> Pallarenda
              </h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Pallarenda is the quieter coastal outing, about ten minutes north of the city. It
                  is a long, open beach with a genuinely relaxed feel and far fewer people than The
                  Strand, and it pairs naturally with Cape Pallarenda and the Town Common.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Wide beach and open coastal views</li>
                  <li>Picnic facilities and shelters</li>
                  <li>Public toilets and a playground</li>
                  <li>Boat ramp area at the northern end</li>
                  <li>
                    Walking and cycling links to{" "}
                    <Link to="/nature" className="text-primary underline underline-offset-2">
                      Cape Pallarenda and Town Common
                    </Link>{" "}
                    trails
                  </li>
                  <li>Best in the morning or late afternoon</li>
                </ul>
                <p>
                  On swimming, be careful with assumptions. Pallarenda has a seasonal enclosure
                  arrangement rather than permanent protection, and lifeguard services are not the
                  same as The Strand — do not assume anyone is patrolling. Check current Townsville
                  City Council swimming-status information before entering the water. The{" "}
                  <Link to="/pallarenda-beach" className="text-primary underline underline-offset-2 font-medium">
                    Pallarenda Beach guide
                  </Link>{" "}
                  has the local detail.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                <Sun className="w-5 h-5 text-primary" aria-hidden="true" /> Rowes Bay
              </h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Rowes Bay is a walking and views beach first and foremost. It sits between{" "}
                  <Link to="/jezzine-barracks" className="text-primary underline underline-offset-2">
                    Jezzine Barracks
                  </Link>{" "}
                  and Pallarenda, and its real value is as the quiet middle section of the coastal
                  route — wide, open, and at its best in the late afternoon.
                </p>
                <p>
                  We would not casually recommend it as a swimming beach. It is shallow over a long
                  distance at low tide and does not have the same swimming set-up as The Strand.
                  Check current official information on patrol and net status before considering a
                  swim, and see the{" "}
                  <Link to="/rowes-bay" className="text-primary underline underline-offset-2 font-medium">
                    Rowes Bay guide
                  </Link>{" "}
                  for what it does well.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" aria-hidden="true" /> Bushland Beach
              </h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Bushland Beach, north of the city, is a suburban foreshore rather than a visitor
                  destination. The appeal is the local beach lifestyle: a grassed foreshore, an easy
                  walk, somewhere to eat a picnic and open coastal views in the late afternoon.
                </p>
                <p>
                  It is not automatically a recommended swimming beach. Use current Council
                  information for patrol and net status before deciding to swim. Our{" "}
                  <Link to="/north-shore-townsville" className="text-primary underline underline-offset-2">
                    North Shore guide
                  </Link>{" "}
                  covers the wider area.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                <Car className="w-5 h-5 text-primary" aria-hidden="true" /> Northern Beaches
              </h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  The northern beaches are more local, more car-dependent and better suited to a
                  relaxed coastal drive than a rushed first-time itinerary. Pick one or two rather
                  than trying to see them all.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-foreground">Saunders Beach</strong> — around 30 minutes
                    north, a long quiet stretch of sand with easy parking. See the{" "}
                    <Link to="/beaches/saunders-beach" className="text-primary underline underline-offset-2">
                      Saunders Beach guide
                    </Link>
                    .
                  </li>
                  <li>
                    <strong className="text-foreground">Toomulla</strong> — a very local, very quiet
                    stop on the northern coast; a relaxed pause rather than a destination.
                  </li>
                  <li>
                    <strong className="text-foreground">Balgal Beach</strong> — about an hour north,
                    the most substantial northern option, with a boat ramp and a foreshore area.
                    Seasonal stinger enclosure arrangements may operate here; check current Council
                    information rather than assuming.
                  </li>
                  <li>
                    <strong className="text-foreground">Toolakea</strong> — sleepy and residential,
                    with wide sand flats at low tide.
                  </li>
                </ul>
                <p>
                  Facilities thin out quickly as you head north. Carry water and food, and do not
                  assume toilets, shade or cafés will be available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section aria-labelledby="comparison">
          <h2 id="comparison" className="text-2xl md:text-3xl font-bold mb-5">
            Townsville Beach Comparison
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[140px]">Beach</TableHead>
                  <TableHead>Best for</TableHead>
                  <TableHead>Swimming setup</TableHead>
                  <TableHead className="w-[110px]">Car helpful?</TableHead>
                  <TableHead className="w-[150px]">Visitor feel</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {COMPARISON.map((row) => (
                  <TableRow key={row.beach}>
                    <TableCell className="font-medium text-foreground">
                      {row.to ? (
                        <Link to={row.to} className="text-primary underline underline-offset-2">
                          {row.beach}
                        </Link>
                      ) : (
                        row.beach
                      )}
                    </TableCell>
                    <TableCell className="text-muted-foreground">{row.bestFor}</TableCell>
                    <TableCell className="text-muted-foreground">{row.swimming}</TableCell>
                    <TableCell className="text-muted-foreground">{row.car}</TableCell>
                    <TableCell className="text-muted-foreground">{row.feel}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Beach patrols, stinger nets and swimming conditions can change. Always check current
            Townsville City Council information before swimming.
          </p>
        </section>

        {/* Swimming */}
        <section aria-labelledby="swimming">
          <h2 id="swimming" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Waves className="w-6 h-6 text-primary" aria-hidden="true" /> Swimming at Townsville Beaches
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              This is tropical coastal Queensland, and swimming here works differently to southern
              Australian beaches. None of it should put you off — it just needs a couple of minutes
              of thought before you get in.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Marine stingers are a genuine consideration, not a theoretical one</li>
              <li>Stinger nets reduce risk but are not complete protection</li>
              <li>Use designated or patrolled areas wherever they are available</li>
              <li>Swim between the flags when lifeguards are operating</li>
              <li>Follow all current signage and local advice on the day</li>
              <li>A stinger suit may be appropriate during the season</li>
              <li>Do not assume calm-looking water is automatically suitable for swimming</li>
            </ul>
            <p>
              The{" "}
              <Link to="/guides/stinger-safety" className="text-primary underline underline-offset-2 font-medium">
                Stinger Safety guide
              </Link>{" "}
              covers species, symptoms, first aid and what nets actually do. Read it once before
              your first swim and you will not need to think about it again.
            </p>
          </div>
        </section>

        {/* Stinger season */}
        <section aria-labelledby="stinger-season">
          <h2 id="stinger-season" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <ShieldAlert className="w-6 h-6 text-primary" aria-hidden="true" /> Stinger Season
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Typical stinger season: November to May.</strong>{" "}
              That is the window most local arrangements are built around.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Selected beaches have seasonal stinger enclosures rather than permanent nets</li>
              <li>Installation and removal dates change from year to year</li>
              <li>Severe weather can result in nets being removed temporarily</li>
              <li>Current beach status must be checked before swimming</li>
              <li>Nets reduce risk — they do not remove it</li>
            </ul>
            <p>
              We deliberately do not list which enclosures are in the water today, because that
              changes. Townsville City Council publishes the current position, and it is the source
              to trust.
            </p>
          </div>
        </section>

        {/* Families */}
        <section aria-labelledby="families">
          <h2 id="families" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Baby className="w-6 h-6 text-primary" aria-hidden="true" /> Beaches for Families
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">The Strand</h3>
              <p>
                The strongest all-round family choice, by a clear margin. Playgrounds, the Strand
                Water Park, food, toilets, shade, designated swimming options and easy walking
                between all of it — you can change plans on the spot when someone gets tired or too
                hot.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Pallarenda</h3>
              <p>
                Good for a picnic, the playground and a quieter beach experience if you have a car.
                Swimming decisions should depend on current conditions and official status rather
                than on how the water looks when you arrive.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Northern beaches</h3>
              <p>
                These can work well for a relaxed family outing, but only with a bit of preparation:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Have transport, and expect a drive at both ends</li>
                <li>Carry drinking water — more than you think you need</li>
                <li>Bring food; there may be nothing available</li>
                <li>Check swimming conditions before you commit to a swim</li>
                <li>Do not assume toilets, playgrounds or shade exist at every beach</li>
                <li>Supervise children closely around the water at unpatrolled beaches</li>
              </ul>
            </div>
            <p>
              Age-by-age advice and the rest of the city's family options are in the{" "}
              <Link to="/townsville-with-kids" className="text-primary underline underline-offset-2 font-medium">
                Townsville with Kids
              </Link>{" "}
              guide.
            </p>
          </div>
        </section>

        {/* Without a car */}
        <section aria-labelledby="without-car">
          <h2 id="without-car" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Footprints className="w-6 h-6 text-primary" aria-hidden="true" /> Beaches Without a Car
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">
                The Strand is by far the easiest Townsville beach experience without a car.
              </strong>{" "}
              If you are staying in North Ward or the CBD, you can walk to it, and everything you
              need is along it.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <Link to="/jezzine-barracks" className="text-primary underline underline-offset-2">
                  Jezzine Barracks
                </Link>{" "}
                and Rowes Bay can be added as a longer coastal walk for capable walkers
              </li>
              <li>Pallarenda is much less convenient without transport</li>
              <li>Northern beaches are far easier by private vehicle, taxi or rideshare</li>
            </ul>
            <p>
              See{" "}
              <Link to="/townsville-without-a-car" className="text-primary underline underline-offset-2 font-medium">
                Townsville Without a Car
              </Link>{" "}
              for the full walking and bus picture, and the{" "}
              <Link to="/the-strand" className="text-primary underline underline-offset-2">
                Strand guide
              </Link>{" "}
              for what is within walking distance.
            </p>
          </div>
        </section>

        {/* Walking */}
        <section aria-labelledby="walking">
          <h2 id="walking" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Footprints className="w-6 h-6 text-primary" aria-hidden="true" /> Beaches for Walking Rather Than Swimming
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Plenty of visitors get more out of Townsville's coastline on foot than in the water.
              The city's best coastal walking runs almost continuously north from the CBD:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">The Strand promenade</strong> — flat, shaded in
                parts, and the easiest walk in the city
              </li>
              <li>
                <strong className="text-foreground">The Strand → Jezzine Barracks</strong> — coastal
                views, heritage and public art
              </li>
              <li>
                <strong className="text-foreground">Jezzine → Rowes Bay</strong> — the quiet
                transition out of North Ward
              </li>
              <li>
                <strong className="text-foreground">Rowes Bay → Pallarenda</strong> — the longest and
                most exposed stretch; take water
              </li>
              <li>
                <strong className="text-foreground">Pallarenda foreshore</strong> — open beach
                walking with Magnetic Island in view
              </li>
            </ul>
            <p>
              Coastal paths in North Queensland are not permanent fixtures. Erosion, storm damage,
              access changes and maintenance works can all affect sections of the route, especially
              after severe weather. Check current conditions after any major weather event rather
              than assuming a path is open end to end.
            </p>
          </div>
        </section>

        {/* Sunrise and sunset */}
        <section aria-labelledby="sunrise-sunset">
          <h2 id="sunrise-sunset" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Sun className="w-6 h-6 text-primary" aria-hidden="true" /> Sunrise and Sunset
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-muted/40">
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-3">Early morning</h3>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                  <li>The Strand, before it warms up</li>
                  <li>Pallarenda, at its quietest</li>
                  <li>Any of the coastal walking routes</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-muted/40">
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-3">Late afternoon and sunset</h3>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                  <li>Pallarenda</li>
                  <li>Rowes Bay</li>
                  <li>Jezzine Barracks and Kissing Point</li>
                  <li>The Strand</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Conditions vary — cloud, haze and season all change what you get, so treat these as good
            places to be rather than guaranteed displays. For more, see{" "}
            <Link to="/guides/sunset-walks" className="text-primary underline underline-offset-2">
              sunset walks in Townsville
            </Link>
            .
          </p>
        </section>

        {/* Heat */}
        <section aria-labelledby="heat">
          <h2 id="heat" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Thermometer className="w-6 h-6 text-primary" aria-hidden="true" /> Heat and Sun
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <ul className="list-disc pl-5 space-y-2">
              <li>Sand and paved foreshore areas can become extremely hot underfoot</li>
              <li>Shade is limited at some beaches and absent at others</li>
              <li>Carry drinking water, particularly away from The Strand</li>
              <li>Sunscreen and a hat, year-round, not just in summer</li>
              <li>Mornings and later afternoons are far more comfortable</li>
              <li>Swimming does not remove heat risk — you still dehydrate</li>
            </ul>
            <p>
              The{" "}
              <Link to="/guides/beat-the-heat" className="text-primary underline underline-offset-2 font-medium">
                Beat the Heat
              </Link>{" "}
              guide has the full hot-weather playbook, including how to structure a day around the
              worst of it.
            </p>
          </div>
        </section>

        {/* Wet weather */}
        <section aria-labelledby="wet-weather">
          <h2 id="wet-weather" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <CloudRain className="w-6 h-6 text-primary" aria-hidden="true" /> Beaches in Wet Weather
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Beaches should not be treated as suitable during thunderstorms or severe weather. In
              the wet season this matters more than visitors expect.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Heavy rain can affect coastal water quality</li>
              <li>Debris washes into coastal areas after runoff</li>
              <li>Beach access and parking areas can change or close</li>
              <li>Stinger enclosures may be removed temporarily</li>
              <li>Roads and foreshore areas can be affected, particularly further north</li>
            </ul>
            <p>
              Check the Bureau of Meteorology, the Townsville Disaster Dashboard and current Council
              beach information before heading out, and see{" "}
              <Link to="/guides/rainy-day-activities" className="text-primary underline underline-offset-2 font-medium">
                Rainy Day Activities
              </Link>{" "}
              for what to do instead.
            </p>
          </div>
        </section>

        {/* Crocodiles */}
        <section aria-labelledby="crocodiles">
          <h2 id="crocodiles" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-primary" aria-hidden="true" /> Crocodile Awareness
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Townsville is in North Queensland, and coastal and estuarine environments here can
              overlap with crocodile habitat. This is a normal part of living and holidaying on this
              coast rather than a reason to avoid the water.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Read and follow crocodile warning signs wherever they appear</li>
              <li>Stay clear of creek mouths and estuarine areas where warnings apply</li>
              <li>Never feed wildlife of any kind</li>
              <li>Follow Queensland Government Be Crocwise guidance</li>
            </ul>
            <p>
              Crocodiles are not routinely present on every Townsville beach, and the main visitor
              beaches are not managed as high-risk locations. Signage is the practical guide — where
              there is a warning, take it seriously.
            </p>
          </div>
        </section>

        {/* Dogs */}
        <section aria-labelledby="dogs">
          <h2 id="dogs" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Dog className="w-6 h-6 text-primary" aria-hidden="true" /> Dog Beaches
          </h2>
          <Card className="bg-muted/40">
            <CardContent className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-muted-foreground leading-relaxed flex-1">
                <strong className="text-foreground">Travelling with a dog?</strong> Townsville has
                specific on-leash and off-leash beach rules. See our dedicated Townsville dog
                beaches guide for current locations, access rules and dog-specific advice.
              </p>
              <Button asChild className="flex-shrink-0">
                <Link to="/dog-friendly">
                  Dog beaches guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Itineraries */}
        <section aria-labelledby="itineraries">
          <h2 id="itineraries" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <Clock className="w-6 h-6 text-primary" aria-hidden="true" /> Suggested Beach Itineraries
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
            Keep these flexible — weather, tide and heat all have a vote. If you have a full day
            spare,{" "}
            <Link to="/guides/magnetic-island-day-trip" className="text-primary underline underline-offset-2">
              Magnetic Island
            </Link>{" "}
            is the strongest beach day trip from Townsville.
          </p>
        </section>

        {/* Mistakes */}
        <section aria-labelledby="mistakes">
          <h2 id="mistakes" className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-primary" aria-hidden="true" /> Common Beach Mistakes
          </h2>
          <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc pl-5">
            {MISTAKES.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </section>

        <LocalInsightCard title="Duncan's Local Take">
          <p>
            One thing Duncan values about Townsville is how many beautiful beaches there are that
            often feel uncrowded. Even in hot weather, he'll often find a quiet spot with shade
            under nearby trees and relax there for hours. That's his own experience rather than a
            guarantee — not every beach is quiet or shaded, it depends which one and when — and
            enjoying time on the sand doesn't mean the water is safe to swim in. Follow the
            swimming and stinger guidance above regardless of how calm a beach looks.
          </p>
        </LocalInsightCard>

        <LocalInsightCard variant="tip" title="Go early, and the whole thing changes">
          <p>
            Locals are on the beach before 8am for a reason. The sand is cool, the light is better,
            the breeze is up, and parking is easy everywhere from The Strand to Pallarenda. A
            midday beach visit in Townsville is a very different, much sweatier experience.
          </p>
        </LocalInsightCard>

        {/* Status checks */}
        <section aria-labelledby="status">
          <h2 id="status" className="text-2xl md:text-3xl font-bold mb-5">
            Current-Status Checks
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Patrols, stinger enclosures, weather and beach access all change. Check these before you
            swim:
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
            Townsville Beaches FAQ
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

export default Beaches;
