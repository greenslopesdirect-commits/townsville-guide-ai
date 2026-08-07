import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Baby,
  Car,
  Clock,
  Coins,
  Compass,
  Info,
  MapPin,
  Mountain,
  Ship,
  Sun,
  TreePine,
  Umbrella,
  Waves,
} from "lucide-react";

const SITE = "https://www.townsvilleguide.com.au";
const PATH = "/nature";

const TITLE = "Best Nature Experiences in Townsville | Parks, Wildlife & Walks";
const DESCRIPTION =
  "Discover Townsville's best nature experiences, from Magnetic Island and Paluma rainforest to beaches, wildlife, coastal walks, lookouts and local parks.";

const PATHWAYS = [
  { label: "Island nature", to: "/guides/magnetic-island-day-trip", name: "Magnetic Island Day Trip" },
  { label: "Rainforest", to: "/guides/paluma-day-trip", name: "Paluma Day Trip" },
  { label: "Coastal nature", to: "/pallarenda-beach", name: "Pallarenda" },
  { label: "Beaches", to: "/beaches", name: "Townsville Beaches" },
  { label: "Views", to: "/castle-hill", name: "Castle Hill" },
  { label: "Easy coastal walk", to: "/jezzine-barracks", name: "Jezzine Barracks" },
  { label: "Riverfront", to: "/riverway", name: "Riverway" },
  { label: "Walking", to: "/guides/walking-castle-hill", name: "Walking Castle Hill" },
  { label: "Island walk", to: "/guides/forts-walk-magnetic-island", name: "Forts Walk" },
  { label: "Wildlife", to: "/billabong-sanctuary", name: "Billabong Sanctuary" },
  { label: "Reef experience", to: "/great-barrier-reef-townsville", name: "Great Barrier Reef from Townsville" },
  { label: "Swimming safety", to: "/guides/stinger-safety", name: "Marine Stinger Safety" },
  { label: "Hot weather", to: "/guides/beat-the-heat", name: "Beat the Heat" },
  { label: "Wet weather", to: "/guides/rainy-day-activities", name: "Rainy Day Activities" },
];

const RELATED = [
  { name: "Magnetic Island Day Trip", to: "/guides/magnetic-island-day-trip", text: "The region's strongest all-round nature day." },
  { name: "Paluma Day Trip", to: "/guides/paluma-day-trip", text: "Rainforest, creeks and the mountain drive." },
  { name: "Magnetic Island Ferry", to: "/guides/magnetic-island-ferry", text: "Crossings, timings and what to book." },
  { name: "Forts Walk", to: "/guides/forts-walk-magnetic-island", text: "The island's best-known walk, with wildlife and views." },
  { name: "Pallarenda", to: "/pallarenda-beach", text: "Quiet coastline, walking and Cape Pallarenda." },
  { name: "Rowes Bay", to: "/rowes-bay", text: "Easy coastal walking between Jezzine and Pallarenda." },
  { name: "Townsville Beaches", to: "/beaches", text: "Which beaches suit swimming, walking or a picnic." },
  { name: "Castle Hill", to: "/castle-hill", text: "The city's main dry-tropical lookout." },
  { name: "Walking Castle Hill", to: "/guides/walking-castle-hill", text: "Tracks, timing and heat management." },
  { name: "Jezzine Barracks", to: "/jezzine-barracks", text: "Coastal scenery and heritage at Kissing Point." },
  { name: "Riverway", to: "/riverway", text: "Ross River parkland, lagoons and gentle walking." },
  { name: "Great Barrier Reef from Townsville", to: "/great-barrier-reef-townsville", text: "Reef tours, diving, snorkelling and marine experiences." },
  { name: "Townsville with Kids", to: "/townsville-with-kids", text: "Family-friendly nature and water play." },
  { name: "Free Things to Do", to: "/guides/free-things", text: "No-cost walks, lookouts and coastline." },
  { name: "Beat the Heat", to: "/guides/beat-the-heat", text: "How to structure outdoor time on hot days." },
  { name: "Rainy Day Activities", to: "/guides/rainy-day-activities", text: "What to do when the weather changes plans." },
];

const COMPARISON = [
  {
    experience: "Magnetic Island",
    bestFor: "Island nature, beaches, wildlife, walking",
    time: "Full day",
    car: "Not essential",
    feel: "Major nature day trip",
  },
  {
    experience: "Paluma",
    bestFor: "Rainforest, mountain scenery, creeks",
    time: "Full day",
    car: "Yes",
    feel: "Regional nature escape",
  },
  {
    experience: "Pallarenda",
    bestFor: "Coast, walking, relaxed scenery",
    time: "1–3 hours",
    car: "Helpful",
    feel: "Quiet local coast",
  },
  {
    experience: "Castle Hill",
    bestFor: "Views, dry-tropical landscape",
    time: "1–2 hours",
    car: "Helpful unless walking",
    feel: "Major local viewpoint",
  },
  {
    experience: "Jezzine / Rowes Bay",
    bestFor: "Easy coastal walking",
    time: "1–2 hours",
    car: "No if staying centrally",
    feel: "Easy local nature",
  },
  {
    experience: "Riverway",
    bestFor: "Riverfront, families, gentle walking",
    time: "2–4 hours",
    car: "Helpful",
    feel: "Local recreation and nature",
  },
];

const faqs = [
  {
    q: "What are the best nature experiences in Townsville?",
    a: "Magnetic Island and the Paluma Range are the two strongest, and both work best as full days. After those, Pallarenda, Castle Hill, Riverway and the Jezzine Barracks to Rowes Bay coastline are the easiest local nature options.",
  },
  {
    q: "Is Magnetic Island the best nature day trip from Townsville?",
    a: "For most visitors, yes. It combines granite headlands, bays, national park walking, wildlife and coastal scenery in a single ferry-accessible day. See our Magnetic Island day trip guide for planning and the ferry guide before you travel.",
  },
  {
    q: "Is Paluma worth visiting?",
    a: "Yes, if you want rainforest, mountain scenery and creeks rather than coast. It is a full-day drive-based trip and conditions on the range can differ from the coast. Access to some sites, including Little Crystal Creek, can change, so check current park alerts first.",
  },
  {
    q: "Where can you see wildlife around Townsville?",
    a: "Birds, wallabies, lizards, butterflies and marine life turn up naturally around Magnetic Island, Pallarenda, the Town Common area and Ross River parkland, though nothing is guaranteed. For a structured wildlife visit with reliable viewing, Billabong Sanctuary is the main option.",
  },
  {
    q: "What are the best nature activities with kids?",
    a: "Riverway for riverside parkland and swimming, Jezzine Barracks and Rowes Bay for easy coastal walking, Pallarenda for a relaxed outing, Billabong Sanctuary for wildlife, and a Magnetic Island day if you have the time. Our Townsville with kids guide covers timing and heat.",
  },
  {
    q: "What nature activities are free?",
    a: "Castle Hill, Pallarenda, Jezzine Barracks, Rowes Bay, the Riverway parkland and lagoons, the beaches and the walking paths between them all cost nothing. See our free things to do guide for the full list.",
  },
  {
    q: "What are the best walks near Townsville?",
    a: "The Forts Walk on Magnetic Island, the Castle Hill tracks, the Jezzine Barracks to Rowes Bay coastal path, the Cape Pallarenda tracks and rainforest walks around Paluma where they are currently open. Check park alerts before heading out.",
  },
  {
    q: "Can you enjoy Townsville nature without a car?",
    a: "Yes. Jezzine Barracks, Rowes Bay, The Strand and coastal walking are all reachable on foot from central accommodation, and Magnetic Island is a ferry trip rather than a drive. Castle Hill is walkable for capable walkers. Our without-a-car guide has the detail.",
  },
  {
    q: "What nature activities are best in hot weather?",
    a: "Do exposed walks such as Castle Hill early or late, shorten outdoor activity through the middle of the day, and use Riverway or a swimming option instead. Paluma often feels cooler than the coast, but that is not guaranteed. See our beat the heat guide.",
  },
  {
    q: "Is it safe to visit creeks after heavy rain?",
    a: "Not automatically. Freshwater sites can become unsafe after significant rain, and access can change quickly. Check current signage, park alerts and conditions before travelling, and do not enter water where warnings are in place.",
  },
  {
    q: "What is the best coastal nature area near Townsville?",
    a: "Pallarenda, for quieter coastline, walking and views, with Cape Pallarenda and the Town Common nearby. Rowes Bay and Jezzine Barracks are the easiest central alternatives if you are walking from town.",
  },
  {
    q: "Can you visit the Great Barrier Reef from Townsville?",
    a: "Yes — reef tours, diving and snorkelling all operate from Townsville, along with marine experiences such as the Museum of Underwater Art and the SS Yongala. See our Great Barrier Reef from Townsville guide. This is separate from Reef HQ, which is closed for redevelopment.",
  },
];

const Nature = () => (
  <>
    <SEOHead title={TITLE} description={DESCRIPTION} canonical={PATH} ogType="article" />
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: "Best Nature Experiences in Townsville",
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
                { "@type": "ListItem", position: 3, name: "Nature in Townsville", item: `${SITE}${PATH}` },
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
        <TreePine className="w-4 h-4" aria-hidden="true" />
        Nature discovery hub
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">Best Nature Experiences in Townsville</h1>

      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Townsville's natural appeal comes from a mix rather than one headline park:{" "}
        <Link to="/guides/magnetic-island-day-trip" className="text-primary hover:underline">
          Magnetic Island
        </Link>
        , the{" "}
        <Link to="/guides/paluma-day-trip" className="text-primary hover:underline">
          Paluma rainforest
        </Link>{" "}
        on the range,{" "}
        <Link to="/beaches" className="text-primary hover:underline">
          beaches and coastline
        </Link>
        , dry-tropical hills such as{" "}
        <Link to="/castle-hill" className="text-primary hover:underline">
          Castle Hill
        </Link>
        , riverside parkland at{" "}
        <Link to="/riverway" className="text-primary hover:underline">
          Riverway
        </Link>
        , local wildlife, coastal walking and{" "}
        <Link to="/great-barrier-reef-townsville" className="text-primary hover:underline">
          Great Barrier Reef experiences
        </Link>
        .
      </p>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Not every nature experience carries the same weight. Magnetic Island and Paluma are the two
        major nature days. Pallarenda, Castle Hill, Riverway and the Jezzine Barracks to Rowes Bay
        coastline are easier local options you can slot into a morning or afternoon. Use this page to
        choose, then follow the link through to the detailed guide.
      </p>

      <GuideQuickFacts className="mb-10" />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Start here: the major nature experiences</h2>
        <p className="text-muted-foreground mb-6">
          If you only have time for one proper nature day, it is one of these two.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Ship className="w-5 h-5 text-primary" aria-hidden="true" /> 1. Magnetic Island
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The strongest all-round nature experience in the region: granite hills and boulder
              landscapes, a string of bays and beaches, national park areas, walking tracks, wildlife
              in a natural setting and fringing reef and marine environments around parts of the
              coast. Treat it as its own full day. Start with the{" "}
              <Link to="/guides/magnetic-island-day-trip" className="text-primary hover:underline">
                Magnetic Island day trip guide
              </Link>
              , check the{" "}
              <Link to="/guides/magnetic-island-ferry" className="text-primary hover:underline">
                ferry guide
              </Link>{" "}
              before you travel, and see the{" "}
              <Link to="/guides/forts-walk-magnetic-island" className="text-primary hover:underline">
                Forts Walk
              </Link>{" "}
              if you want the best-known island walk.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <TreePine className="w-5 h-5 text-primary" aria-hidden="true" /> 2. Paluma Range
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The strongest rainforest and mountain experience within day-trip reach: rainforest,
              mountain scenery, creeks and walking, with a genuinely regional feel once you leave the
              highway. Upland conditions are often cooler than the coast, but that varies with the
              day and season, and access to individual sites can change. See the{" "}
              <Link to="/guides/paluma-day-trip" className="text-primary hover:underline">
                Paluma day trip guide
              </Link>{" "}
              and check the current{" "}
              <Link to="/little-crystal-creek-townsville" className="text-primary hover:underline">
                Little Crystal Creek status
              </Link>{" "}
              along with Queensland Parks alerts before you go.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Waves className="w-6 h-6 text-primary" aria-hidden="true" /> Coastal nature
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Pallarenda</h3>
            <p className="text-muted-foreground leading-relaxed">
              The pick for quieter coastline: walking, wide views across Cleveland Bay, and easy
              picnic or nature outings, with Cape Pallarenda and the Town Common wetlands adjoining
              the area for longer walks and birdlife. See{" "}
              <Link to="/pallarenda-beach" className="text-primary hover:underline">
                Pallarenda
              </Link>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Rowes Bay</h3>
            <p className="text-muted-foreground leading-relaxed">
              Easy, flat coastal walking and a reliable late-afternoon or sunset stretch, sitting
              between Jezzine Barracks and Pallarenda so the three link together on foot or by bike.
              It is a walking and scenery destination rather than a primary swimming beach. See{" "}
              <Link to="/rowes-bay" className="text-primary hover:underline">
                Rowes Bay
              </Link>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Jezzine Barracks and Kissing Point</h3>
            <p className="text-muted-foreground leading-relaxed">
              The easiest coastal scenery in the city, mixing heritage and public art with headland
              views, and walkable from North Ward or{" "}
              <Link to="/the-strand" className="text-primary hover:underline">
                The Strand
              </Link>{" "}
              in a short local outing. See{" "}
              <Link to="/jezzine-barracks" className="text-primary hover:underline">
                Jezzine Barracks
              </Link>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Townsville beaches</h3>
            <p className="text-muted-foreground leading-relaxed">
              Beaches around Townsville vary significantly in swimming suitability, patrols, stinger
              arrangements and facilities, so they are not interchangeable. Use the{" "}
              <Link to="/beaches" className="text-primary hover:underline">
                beaches guide
              </Link>{" "}
              to choose, and the{" "}
              <Link to="/guides/stinger-safety" className="text-primary hover:underline">
                marine stinger safety guide
              </Link>{" "}
              before swimming anywhere on the coast.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Mountain className="w-6 h-6 text-primary" aria-hidden="true" /> Hills, lookouts and
          dry-tropical landscapes
        </h2>
        <h3 className="text-xl font-semibold mb-2">Castle Hill</h3>
        <p className="text-muted-foreground leading-relaxed">
          The key dry-tropical hill and viewpoint experience, with excellent views over the city,
          Cleveland Bay and across to Magnetic Island. Driving to the lookout and walking up are two
          quite different experiences, and the tracks are exposed, so conditions matter more than
          fitness. See{" "}
          <Link to="/castle-hill" className="text-primary hover:underline">
            Castle Hill
          </Link>{" "}
          for visiting, or{" "}
          <Link to="/guides/walking-castle-hill" className="text-primary hover:underline">
            walking Castle Hill
          </Link>{" "}
          for the tracks.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">River and parkland nature</h2>
        <h3 className="text-xl font-semibold mb-2">Riverway and the Ross River</h3>
        <p className="text-muted-foreground leading-relaxed">
          Gentler nature: riverfront walking, parkland and a local-style outdoor afternoon that suits
          families well. It is particularly useful in hot weather because you can combine time
          outdoors with swimming and indoor facilities in one place. It is a pleasant local
          recreation area rather than a substitute for Magnetic Island or Paluma. See{" "}
          <Link to="/riverway" className="text-primary hover:underline">
            Riverway
          </Link>
          .
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Wildlife experiences</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-card rounded-xl p-5 border">
            <h3 className="font-semibold mb-3">Wildlife you may encounter naturally</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>Birds, including shorebirds and bush species</li>
              <li>Wallabies in island and bushland areas</li>
              <li>Marine life along the coast and reef</li>
              <li>Lizards and other reptiles</li>
              <li>Butterflies and insects, especially after rain</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-3">
              Sightings are never guaranteed. Early mornings, quieter tracks and patient walking give
              you the best chance. Keep your distance and never feed wildlife.
            </p>
          </div>
          <div className="bg-card rounded-xl p-5 border">
            <h3 className="font-semibold mb-3">Wildlife attractions</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <Link to="/billabong-sanctuary" className="text-primary hover:underline">
                Billabong Sanctuary
              </Link>{" "}
              is the main structured wildlife attraction near Townsville, where viewing is reliable
              and organised. Magnetic Island and Paluma are nature-based experiences instead — the
              setting is wild, so what you see varies. Check current admission, opening and animal
              presentation details directly with the operator.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Great Barrier Reef experiences</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Townsville is a working reef access point, with tours, diving and snorkelling, plus marine
          experiences such as the Museum of Underwater Art and the SS Yongala wreck. Our{" "}
          <Link to="/great-barrier-reef-townsville" className="text-primary hover:underline">
            Great Barrier Reef from Townsville guide
          </Link>{" "}
          covers what is realistically available and how to plan it.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Reef HQ is closed for redevelopment; for current aquarium status see the dedicated{" "}
          <Link to="/reef-hq-townsville" className="text-primary hover:underline">
            Reef HQ page
          </Link>
          . It is a separate thing from reef tours.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Compass className="w-6 h-6 text-primary" aria-hidden="true" /> Choose your nature
          experience
        </h2>
        <p className="text-muted-foreground mb-4">Timings are approximate and depend on conditions.</p>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-sm">
            <thead className="bg-muted/60">
              <tr>
                <th className="text-left font-semibold p-3">Experience</th>
                <th className="text-left font-semibold p-3">Best for</th>
                <th className="text-left font-semibold p-3">Time needed</th>
                <th className="text-left font-semibold p-3">Car helpful?</th>
                <th className="text-left font-semibold p-3">Visitor feel</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.experience} className="border-t align-top">
                  <td className="p-3 font-medium text-foreground whitespace-nowrap">{row.experience}</td>
                  <td className="p-3 text-muted-foreground">{row.bestFor}</td>
                  <td className="p-3 text-muted-foreground whitespace-nowrap">{row.time}</td>
                  <td className="p-3 text-muted-foreground">{row.car}</td>
                  <td className="p-3 text-muted-foreground">{row.feel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Nature by traveller type</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Baby className="w-5 h-5 text-primary" aria-hidden="true" /> With kids
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Prioritise Magnetic Island for a big day, Riverway for parkland and swimming,
              Pallarenda for a relaxed coastal outing, Jezzine Barracks for an easy walk, and
              Billabong Sanctuary when you want wildlife you can count on. See{" "}
              <Link to="/townsville-with-kids" className="text-primary hover:underline">
                Townsville with kids
              </Link>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Coins className="w-5 h-5 text-primary" aria-hidden="true" /> On a budget
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Castle Hill, Pallarenda, Jezzine Barracks, Rowes Bay, Riverway, the beaches and the
              coastal walking paths are all free. See{" "}
              <Link to="/guides/free-things" className="text-primary hover:underline">
                free things to do
              </Link>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Car className="w-5 h-5 text-primary" aria-hidden="true" /> Without a car
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Jezzine Barracks and Rowes Bay are walkable from central accommodation, The Strand and
              coastal walking work on foot, Magnetic Island is reachable by ferry, and Castle Hill is
              realistic for capable walkers in cooler conditions. See{" "}
              <Link to="/townsville-without-a-car" className="text-primary hover:underline">
                Townsville without a car
              </Link>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Sun className="w-5 h-5 text-primary" aria-hidden="true" /> In hot weather
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Do exposed walks early, shorten outdoor activity through the middle of the day, and use
              Riverway or a swimming option instead. Paluma may feel cooler on the range, but that is
              not guaranteed. See{" "}
              <Link to="/guides/beat-the-heat" className="text-primary hover:underline">
                beat the heat
              </Link>
              .
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <Umbrella className="w-5 h-5 text-primary" aria-hidden="true" /> In wet weather
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Avoid remote creeks and freshwater swimming holes after significant rain, postpone
              exposed walks, and expect island and mountain plans to change with conditions. See{" "}
              <Link to="/guides/rainy-day-activities" className="text-primary hover:underline">
                rainy day activities
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Clock className="w-6 h-6 text-primary" aria-hidden="true" /> Nature by time available
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="bg-card rounded-xl p-5 border">
            <h3 className="font-semibold mb-2">Two hours</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Jezzine Barracks and Kissing Point, the Castle Hill lookout, a Pallarenda visit, or a
              Riverway walk combined with the lagoons.
            </p>
          </div>
          <div className="bg-card rounded-xl p-5 border">
            <h3 className="font-semibold mb-2">Half a day</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pallarenda plus Rowes Bay, Castle Hill plus The Strand, a longer Riverway outing, or a
              wildlife attraction visit.
            </p>
          </div>
          <div className="bg-card rounded-xl p-5 border">
            <h3 className="font-semibold mb-2">Full day</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Magnetic Island or Paluma. Pick one — the detailed guides handle the itinerary.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Walking and hiking</h2>
        <p className="text-muted-foreground leading-relaxed">
          The main walking options are the{" "}
          <Link to="/guides/forts-walk-magnetic-island" className="text-primary hover:underline">
            Forts Walk
          </Link>{" "}
          on Magnetic Island, the{" "}
          <Link to="/guides/walking-castle-hill" className="text-primary hover:underline">
            Castle Hill tracks
          </Link>
          , the flat coastal path linking{" "}
          <Link to="/jezzine-barracks" className="text-primary hover:underline">
            Jezzine Barracks
          </Link>{" "}
          and{" "}
          <Link to="/rowes-bay" className="text-primary hover:underline">
            Rowes Bay
          </Link>
          , the{" "}
          <Link to="/pallarenda-beach" className="text-primary hover:underline">
            Pallarenda and Cape Pallarenda
          </Link>{" "}
          tracks, and rainforest walks around{" "}
          <Link to="/guides/paluma-day-trip" className="text-primary hover:underline">
            Paluma
          </Link>{" "}
          where they are currently accessible. Track availability changes, so check current park
          alerts and on-site signage before setting out. For golden-hour options, see our{" "}
          <Link to="/guides/sunset-walks" className="text-primary hover:underline">
            sunset walks guide
          </Link>
          .
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Nature and swimming</h2>
        <p className="text-muted-foreground leading-relaxed">
          Beaches and creeks need different safety checks. On the coast, marine stinger guidance
          applies and patrol and net arrangements vary by location and season — see the{" "}
          <Link to="/beaches" className="text-primary hover:underline">
            beaches guide
          </Link>{" "}
          and{" "}
          <Link to="/guides/stinger-safety" className="text-primary hover:underline">
            stinger safety guide
          </Link>
          . Freshwater sites in the{" "}
          <Link to="/guides/paluma-day-trip" className="text-primary hover:underline">
            Paluma
          </Link>{" "}
          area can become unsafe after heavy rain, and access can be restricted — check the current{" "}
          <Link to="/little-crystal-creek-townsville" className="text-primary hover:underline">
            Little Crystal Creek status
          </Link>
          . Current signage and access conditions always take priority over anything written here.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Crocodile awareness</h2>
        <p className="text-muted-foreground leading-relaxed">
          Townsville is in North Queensland, and coastal, estuarine and river environments in the
          region can overlap with crocodile habitat. That does not mean crocodiles are routinely
          present everywhere, but it does mean you should follow warning signs, swim only at
          designated swimming areas, and follow Queensland Government Crocwise advice rather than
          assuming any waterway is safe.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Heat and weather</h2>
        <p className="text-muted-foreground leading-relaxed">
          Early morning and late afternoon are the best times for exposed outdoor activity. Carry
          water, use sun protection, and remember that conditions on the range, on the island or in a
          shaded park can differ noticeably from central Townsville. Severe weather can affect roads,
          ferries, park access and walking tracks. See{" "}
          <Link to="/guides/beat-the-heat" className="text-primary hover:underline">
            beat the heat
          </Link>
          ,{" "}
          <Link to="/guides/rainy-day-activities" className="text-primary hover:underline">
            rainy day activities
          </Link>{" "}
          and{" "}
          <Link to="/useful-contacts" className="text-primary hover:underline">
            useful contacts
          </Link>
          .
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Camping and longer nature stays</h2>
        <p className="text-muted-foreground leading-relaxed">
          Some regional and national park camping requires permits, and restrictions and availability
          vary through the year. Magnetic Island and Paluma camping arrangements should be checked
          through current official Queensland Parks or Townsville City Council sources before you
          plan around them.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Info className="w-6 h-6 text-primary" aria-hidden="true" /> Common nature-planning
          mistakes
        </h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-5">
          <li>Treating every nature experience as a quick stop</li>
          <li>Trying to combine Magnetic Island and Paluma in one day</li>
          <li>Walking exposed tracks in peak heat</li>
          <li>Assuming Paluma is always cool</li>
          <li>Swimming in creeks after heavy rain without checking conditions</li>
          <li>Assuming every beach is suitable for swimming</li>
          <li>Relying on old track or road information</li>
          <li>Expecting guaranteed wildlife sightings</li>
          <li>Overlooking easy local nature such as Jezzine Barracks and Rowes Bay</li>
          <li>Treating Riverway as equivalent to a national park experience</li>
          <li>Confusing Reef HQ with reef tours</li>
          <li>Underestimating drive times to regional areas</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-primary" aria-hidden="true" /> Plan your nature day
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {PATHWAYS.map((p) => (
            <Link
              key={p.to + p.label}
              to={p.to}
              className="group flex items-center justify-between gap-3 rounded-xl border bg-card p-4 hover:border-primary/40 transition-colors"
            >
              <span className="min-w-0">
                <span className="block text-sm text-muted-foreground">{p.label}</span>
                <span className="block font-medium text-foreground group-hover:text-primary transition-colors">
                  {p.name}
                </span>
              </span>
              <ArrowRight
                className="w-4 h-4 text-primary flex-shrink-0 group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

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

export default Nature;
