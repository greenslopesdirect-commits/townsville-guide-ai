import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import LocalInsightCard from "@/components/LocalInsightCard";
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
  Dog,
  Waves,
  Sun,
  Thermometer,
  AlertTriangle,
  ShieldAlert,
  Bird,
  Clock,
  MapPin,
  Fence,
  Backpack,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import maxPallarenda from "@/assets/max-at-kissing-point1.webp";
import maxQuaysideImg from "@/assets/max-quayside-crown-princess.jpg";

const SITE = "https://www.townsvilleguide.com.au";
const PATH = "/dog-friendly";

const TITLE = "Dog Beaches in Townsville | Off-Leash Beaches & Dog Parks";
const DESCRIPTION =
  "Find Townsville's dog beaches and off-leash areas, including Pallarenda and Benwell Road, with dog park, heat, tide, crocodile and local safety advice.";

const COUNCIL_OFF_LEASH =
  "https://www.townsville.qld.gov.au/community-support/pets-and-animals/dogs/dog-off-leash-areas";
const COUNCIL_DOGS =
  "https://www.townsville.qld.gov.au/community-support/pets-and-animals/dogs";
const CROCWISE =
  "https://www.qld.gov.au/environment/plants-animals/animals/crocodiles/crocwise";
const TIDES = "http://www.bom.gov.au/australia/tides/";
const DASHBOARD = "https://disaster.townsville.qld.gov.au/";

const COMPARISON = [
  {
    beach: "Pallarenda Dog Beach",
    area: "Pallarenda, north of the city",
    length: "Approximately 570 metres, between beach access areas 8 and 9",
    fenced: "No — unfenced",
    water: "Ocean access, crocodile caution applies",
    bestFor: "Longer beach runs and confident off-leash dogs",
  },
  {
    beach: "Benwell Road",
    area: "South Townsville, close to the CBD and Palmer Street",
    length: "Approximately 520 metres of beach foreshore",
    fenced: "No — unfenced",
    water: "Ocean access, tidally influenced, crocodile caution applies",
    bestFor: "A central off-leash option planned around the tide",
  },
];

const FENCED_PARKS = [
  "Cambridge Park",
  "Charles Moroney Park",
  "Edison Street Park",
  "Mannikin Way Park",
  "Mountview Park",
  "Murray Park",
  "Riverside Green Park",
  "Peggy Banfield Park",
  "Solaris Recreational Reserve",
];

const WATER_PARKS = ["Gleeson's Weir Park", "Apex Park", "Lou Litster Park"];

const MISTAKES = [
  "Assuming every Townsville beach allows off-leash dogs",
  "Assuming all of Pallarenda Beach is off leash",
  "Taking a dog with poor recall to an unfenced beach",
  "Visiting in the middle of the day in hot weather",
  "Forgetting drinking water and a portable bowl",
  "Ignoring crocodile warning signs",
  "Allowing dogs to chase shorebirds",
  "Ignoring the tide at Benwell Road",
  "Assuming river swimming is automatically safer than ocean swimming",
  "Leaving dog waste behind",
  "Leaving an aggressive or intrusive dog in an off-leash area",
  "Relying on old social-media advice instead of current Council-designated areas",
];

const RELATED = [
  { name: "Townsville Beaches", to: "/beaches", text: "General beach planning, swimming and access." },
  { name: "Pallarenda Beach", to: "/pallarenda-beach", text: "The wider Pallarenda foreshore and day-out guide." },
  { name: "Beat the Heat", to: "/guides/beat-the-heat", text: "Planning outdoor time around tropical heat." },
  { name: "Townsville with Kids", to: "/townsville-with-kids", text: "Family planning across the city." },
  { name: "Rainy Day Activities", to: "/guides/rainy-day-activities", text: "What to do when the weather turns." },
  { name: "Useful Contacts", to: "/useful-contacts", text: "Council, emergency and official contacts." },
  { name: "Accommodation", to: "/accommodation", text: "Where to stay, including pet-friendly enquiries." },
  { name: "Stinger Safety", to: "/guides/stinger-safety", text: "Marine stingers, signage and seasonal advice." },
];

const faqs = [
  {
    q: "Where can dogs go off leash on Townsville beaches?",
    a: "Dogs may only run off leash in Townsville City Council designated off-leash areas. On the coast, the two main designated off-leash beach areas are Pallarenda Dog Beach, between beach access areas 8 and 9, and the Benwell Road foreshore in South Townsville. Both are unfenced. Check current Council off-leash information before you go, because boundaries and designations can change.",
  },
  {
    q: "Is Pallarenda Dog Beach off leash?",
    a: "Yes. Council designates an off-leash free-run beach area at Pallarenda of roughly 570 metres between beach access areas 8 and 9. It is unfenced, so your dog still needs to be under effective control, and crocodile caution applies as it does anywhere along this coast.",
  },
  {
    q: "Is all of Pallarenda Beach dog friendly?",
    a: "No. Only the designated section between access areas 8 and 9 is an off-leash free-run area. Elsewhere along the Pallarenda foreshore and in nearby parks, dogs should remain on leash and under effective control, and you should follow the signs at each location.",
  },
  {
    q: "Is Benwell Road a dog beach?",
    a: "Yes. Benwell Road in South Townsville has a designated off-leash beach foreshore area of roughly 520 metres. It is unfenced, it is tidally influenced, and it is shared with other users such as fishers, so effective control of your dog is essential.",
  },
  {
    q: "Are Townsville dog beaches fenced?",
    a: "No. The designated off-leash beach areas at Pallarenda and Benwell Road are unfenced. If your dog may run off, choose one of the Council fenced off-leash dog parks instead.",
  },
  {
    q: "Can dogs swim at Pallarenda?",
    a: "The designated off-leash area at Pallarenda has ocean access, so dogs can enter the water there. Council specifically notes crocodile caution for this location, so follow warning signs, keep away from creek mouths and water edges, and do not assume the water is risk-free just because other dogs are in it.",
  },
  {
    q: "Are there crocodiles near Townsville dog beaches?",
    a: "Townsville is crocodile country, and coastal, estuarine and river environments can overlap with crocodile habitat. Council gives specific crocodile caution for both Pallarenda Dog Beach and the Benwell Road off-leash area. That does not mean a crocodile is present on any given day, but it does mean you should follow signage and Queensland Government Crocwise guidance.",
  },
  {
    q: "What is the best fenced dog park in Townsville?",
    a: "There is no single best park — it depends on where you are staying. Council provides a number of fully fenced off-leash parks, including Cambridge Park, Charles Moroney Park, Edison Street Park, Mannikin Way Park, Mountview Park, Murray Park, Riverside Green Park, Peggy Banfield Park and Solaris Recreational Reserve. Check current Council information for the nearest one and its facilities.",
  },
  {
    q: "Where can small dogs exercise off leash?",
    a: "Some Council fenced off-leash parks include a separate small-dog area. Facilities vary between parks and can change, so check the current Council off-leash listing for which nearby park has a dedicated small-dog section before you plan around it.",
  },
  {
    q: "Can dogs walk on normal Townsville beaches?",
    a: "In most public places dogs must remain on leash and under effective control unless you are inside a designated off-leash area. Some beach sections have their own rules, so follow the signage at the location. If you are planning general beach time rather than dog exercise, see our Townsville beaches guide.",
  },
  {
    q: "What is the best time to take a dog to the beach in Townsville?",
    a: "Early morning or late afternoon. Sand and paths can become very hot through the middle of the day, humidity adds to heat stress, and dogs can still overheat while swimming. Test surfaces with your hand before walking, carry drinking water and keep sessions shorter in humid conditions.",
  },
  {
    q: "Do I need to pick up dog waste in off-leash areas?",
    a: "Yes. Owners must pick up and dispose of dog waste in off-leash areas as they would anywhere else, fill in any holes their dog digs, and remove a dog that becomes aggressive or repeatedly bothers other users.",
  },
  {
    q: "Are cane toads a concern for dogs in Townsville?",
    a: "Yes — cane toads are toxic to pets at every life stage and are present across the region, so they're worth being aware of, particularly at night and around water. Not every dog is interested in them, but if your dog mouths or contacts a cane toad, treat it as a veterinary emergency and contact a vet immediately.",
  },
  {
    q: "Should dog owners worry about snakes in Townsville?",
    a: "It's worth being aware rather than worried — snakes can be found in parks, bushland and undergrowth around Townsville, but an encounter on a typical walk is uncommon. Many local dog owners simply stay alert as a habit. If you suspect your dog has been bitten, treat it as a veterinary emergency and get to a vet as quickly as you safely can.",
  },
];

const DogFriendly = () => {
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
              { "@type": "ListItem", position: 2, name: "Dog Beaches in Townsville", item: `${SITE}${PATH}` },
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
        <div className="container mx-auto max-w-4xl px-4 py-12 md:py-20 text-center">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-3">
            Townsville with Dogs
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
            Dog Beaches in Townsville: Off-Leash Beaches &amp; Dog Parks
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Yes, dogs can visit many Townsville coastal areas — but dogs may only run off leash in
            designated Townsville City Council off-leash areas. Not every beach is a dog beach, some
            designated off-leash beaches are unfenced, and rules differ from one stretch of sand to
            the next.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-10 md:py-14 space-y-12">
        {/* Intro */}
        <section aria-labelledby="intro">
          <h2 id="intro" className="sr-only">
            Overview
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              This is the dog-specific guide to Townsville: where dogs can legally run off leash,
              which places are fenced, where dogs can reach the water, and what heat, tide, wildlife
              and crocodile issues you need to understand first. For general swimming and beach
              planning, use the{" "}
              <Link to="/beaches" className="text-primary hover:underline font-medium">
                Townsville beaches guide
              </Link>{" "}
              instead.
            </p>
            <p>
              In normal public places, dogs must stay on leash and under effective control.
              Designated off-leash areas have specific boundaries, and several of the coastal ones
              are unfenced. Signage at the location should always be followed, and because
              designations and boundaries can change, current{" "}
              <a
                href={COUNCIL_OFF_LEASH}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium inline-flex items-center gap-1"
              >
                Townsville City Council off-leash information
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>{" "}
              remains the authoritative source.
            </p>
          </div>
        </section>

        <GuideQuickFacts />

        {/* Can dogs go on Townsville beaches */}
        <section aria-labelledby="can-dogs" className="space-y-4">
          <h2 id="can-dogs" className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <Dog className="w-6 h-6 text-primary" aria-hidden="true" />
            Can Dogs Go on Townsville Beaches?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Yes — but not every Townsville beach is an off-leash dog beach. The distinction matters
            more here than in many cities, because the designated off-leash beach areas are short,
            specific stretches rather than whole beaches.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Dogs may only run off leash in designated Council off-leash areas",
              "Everywhere else, dogs should be on leash and under effective control",
              "Specific beach sections can have different rules to the beach beside them",
              "Follow the signs at the location — they override general advice",
              "Owners remain responsible for their dog's behaviour at all times",
            ].map((line) => (
              <div key={line} className="flex items-start gap-2 rounded-lg border bg-card p-4">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-sm text-muted-foreground">{line}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            There is an environmental side too. Do not allow dogs to chase shorebirds, respect fenced
            or signed habitat areas, and keep your dog controlled around wildlife.
          </p>
        </section>

        {/* Pallarenda */}
        <section aria-labelledby="pallarenda" className="space-y-4">
          <h2 id="pallarenda" className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <Waves className="w-6 h-6 text-primary" aria-hidden="true" />
            Pallarenda Dog Beach
          </h2>
          <Card className="overflow-hidden">
            <div className="relative w-full h-56 md:h-72 overflow-hidden">
              <img
                src={maxPallarenda}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover scale-125"
                style={{ filter: "blur(24px) saturate(1.2)" }}
              />
              <img
                src={maxPallarenda}
                alt="Max the Giant Schnauzer at golden hour on the Townsville coast"
                loading="lazy"
                className="relative w-full h-full object-contain"
              />
            </div>
            <CardContent className="p-5 md:p-6 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Pallarenda is Townsville's lead dog beach. Council designates an off-leash beach area
                between beach access areas 8 and 9 — roughly 570 metres of free-run beach with
                off-street parking and direct ocean access for dogs.
              </p>
              <ul className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
                {[
                  "Designated off-leash beach between access areas 8 and 9",
                  "Approximately 570 metres of beach",
                  "Unfenced free-run area",
                  "Off-street parking",
                  "Ocean access for dogs",
                  "Crocodile caution applies",
                  "Other users, including horse riders in nearby areas, may be present",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5" aria-hidden="true">
                      •
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div>
                <p className="font-semibold text-foreground mb-1">Best for</p>
                <p className="text-sm text-muted-foreground">
                  Dogs with reliable recall, confident off-leash dogs, longer beach runs, and owners
                  comfortable with an open, unfenced area.
                </p>
              </div>
              <div className="rounded-lg border bg-muted/40 p-4 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-sm text-muted-foreground">
                  Because the area is unfenced, it is not suitable for every dog. Effective voice
                  control is still required, even inside a designated off-leash area.
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Planning a longer visit? See the full{" "}
                <Link to="/pallarenda-beach" className="text-primary hover:underline font-medium">
                  Pallarenda Beach guide
                </Link>
                .
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Pallarenda on-leash */}
        <section aria-labelledby="pallarenda-onleash" className="space-y-3">
          <h2 id="pallarenda-onleash" className="text-2xl md:text-3xl font-bold">
            Pallarenda On-Leash Areas
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Not all of Pallarenda is off leash. The free-run area is the designated section between
            access points 8 and 9 only. Outside that section, along the wider foreshore and in nearby
            parks, dogs should remain leashed and you should follow the signage in place. Treat the
            off-leash section as an exception within an otherwise on-leash area, not the other way
            around.
          </p>
        </section>

        {/* Benwell Road */}
        <section aria-labelledby="benwell" className="space-y-4">
          <h2 id="benwell" className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
            Benwell Road Dog Beach
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Benwell Road in South Townsville is the most central designated off-leash beach area,
            covering roughly 520 metres of beach foreshore. It is a free-run area with ocean access,
            and it is unfenced.
          </p>
          <ul className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
            {[
              "South Townsville location",
              "Approximately 520 metres of beach foreshore",
              "Designated off-leash free-run area",
              "Unfenced",
              "Ocean access",
              "Crocodile caution applies",
              "Tidally influenced — substantially more usable beach around lower tide",
              "Shared use with other people, including fishers",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 rounded-lg border bg-card p-3">
                <span className="text-primary mt-0.5" aria-hidden="true">
                  •
                </span>
                {f}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            It suits visitors staying around South Townsville, the CBD or Palmer Street who want
            dog exercise without a longer drive. Like Pallarenda, it is unfenced and requires
            effective control of your dog at all times.
          </p>
        </section>

        {/* Comparison */}
        <section aria-labelledby="compare" className="space-y-4">
          <h2 id="compare" className="text-2xl md:text-3xl font-bold">
            Pallarenda vs Benwell Road
          </h2>
          <div className="overflow-x-auto rounded-xl border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Beach</TableHead>
                  <TableHead>Area</TableHead>
                  <TableHead>Off-leash length</TableHead>
                  <TableHead>Fenced</TableHead>
                  <TableHead>Water</TableHead>
                  <TableHead>Best for</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {COMPARISON.map((c) => (
                  <TableRow key={c.beach}>
                    <TableCell className="font-medium">{c.beach}</TableCell>
                    <TableCell>{c.area}</TableCell>
                    <TableCell>{c.length}</TableCell>
                    <TableCell>{c.fenced}</TableCell>
                    <TableCell>{c.water}</TableCell>
                    <TableCell>{c.bestFor}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-2">Choose Pallarenda if</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>You want a longer beach run</li>
                <li>You are staying around North Ward or northern Townsville</li>
                <li>Your dog has reliable recall</li>
                <li>You want to combine the trip with Pallarenda / Cape Pallarenda</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-2">Choose Benwell Road if</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>You are staying around the CBD, Palmer Street or South Townsville</li>
                <li>You want a more central off-leash beach</li>
                <li>You can plan around the tide</li>
                <li>Your dog is comfortable in an unfenced, shared space</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Neither is universally better — it comes down to where you are staying, the tide and how
            your dog handles open space.
          </p>
        </section>

        {/* Dog parks */}
        <section aria-labelledby="parks" className="space-y-5">
          <h2 id="parks" className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <Fence className="w-6 h-6 text-primary" aria-hidden="true" />
            Best Dog Parks Away From the Beach
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Townsville City Council provides a large number of designated off-leash areas across the
            city, including both fenced and unfenced options. If the beach is not right for your dog,
            a park is usually the better call.
          </p>

          <div>
            <h3 className="text-xl font-semibold mb-2">Fully fenced dog parks</h3>
            <div className="flex flex-wrap gap-2">
              {FENCED_PARKS.map((p) => (
                <span key={p} className="rounded-full border bg-card px-3 py-1.5 text-sm">
                  {p}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Depending on the park, features can include a separate small-dog area, shade, seating,
              agility equipment and lighting. Not every park has every feature, so check the current
              Council listing for the one nearest you.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Water-access and riverside off-leash areas</h3>
            <div className="flex flex-wrap gap-2">
              {WATER_PARKS.map((p) => (
                <span key={p} className="rounded-full border bg-card px-3 py-1.5 text-sm">
                  {p}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              These riverside areas suit dogs that like water, but river and creek environments in
              North Queensland carry their own crocodile and water-edge considerations. River
              swimming is not automatically safer than the beach — follow signage at the location and
              apply the same caution near water edges.
            </p>
          </div>
        </section>

        {/* Best option by dog type */}
        <section aria-labelledby="by-dog" className="space-y-4">
          <h2 id="by-dog" className="text-2xl md:text-3xl font-bold">
            Best Option by Dog Type
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Reliable recall / confident off-leash dog",
                body: "Pallarenda Dog Beach or the Benwell Road off-leash foreshore. Both are open, unfenced and reward a dog that comes back first time.",
              },
              {
                title: "Dog that may run away",
                body: "A fully fenced Council off-leash park. Do not use the unfenced beaches for a dog with unreliable recall.",
              },
              {
                title: "Small dog",
                body: "A fenced park with a dedicated small-dog section, where the current Council listing confirms one nearby.",
              },
              {
                title: "Older dog",
                body: "Shorter outings, shaded parks and cooler times of day. Long sand runs are hard work for older joints.",
              },
              {
                title: "Dog that loves water",
                body: "A designated area with water access — paired with crocodile awareness, current signage, heat management and an eye on tides and water conditions.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-xl border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-1.5">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Heat */}
        <section aria-labelledby="heat" className="space-y-4">
          <h2 id="heat" className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <Thermometer className="w-6 h-6 text-primary" aria-hidden="true" />
            Heat and Paw Safety
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Heat is the single most common problem for dogs in Townsville, and it catches out
            visitors more than locals.
          </p>
          <ul className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
            {[
              "Visit early in the morning or late in the afternoon",
              "Avoid peak midday heat entirely in warmer months",
              "Sand, bitumen and paths can become very hot",
              "Test surfaces with your hand before walking",
              "Carry drinking water and a portable bowl",
              "Use shade wherever it is available",
              "Keep exercise shorter in humid conditions",
              "Dogs can still overheat while swimming",
              "Never leave a dog in a parked vehicle",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 rounded-lg border bg-card p-3">
                <Sun className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground">
            More on planning around the climate in our{" "}
            <Link to="/guides/beat-the-heat" className="text-primary hover:underline font-medium">
              Beat the Heat guide
            </Link>
            . In Duncan's own routine, he tends to walk his dog later in the afternoon, around
            sunset, when the UV and heat are lower — that's his personal habit rather than a rule
            everyone needs to follow.
          </p>
        </section>

        {/* Crocodiles */}
        <section aria-labelledby="crocs" className="space-y-3">
          <h2 id="crocs" className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-primary" aria-hidden="true" />
            Crocodile Safety
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Townsville is crocodile country. Coastal, estuarine and river environments can overlap
            with crocodile habitat, and Council gives specific crocodile caution for both Pallarenda
            Dog Beach and the Benwell Road off-leash area. That does not mean crocodiles are routinely
            present at every dog beach — it means the risk is real enough to plan around.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Follow warning signs, every time</li>
            <li>• Keep dogs away from creek mouths and water edges where risk may be greater</li>
            <li>• Do not let your dog enter the water simply because other dogs are doing so</li>
            <li>
              • Follow Queensland Government{" "}
              <a
                href={CROCWISE}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium inline-flex items-center gap-1"
              >
                Crocwise guidance
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </section>

        {/* Stingers */}
        <section aria-labelledby="stingers" className="space-y-3">
          <h2 id="stingers" className="text-2xl md:text-3xl font-bold">
            Marine Stingers and Dogs
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Tropical marine hazards can apply along this coast. Follow current signage, do not assume
            seawater is risk-free, use designated dog areas and check current conditions before
            letting a dog swim. Human stinger-net enclosures are set up for swimmers and do not
            automatically make dog swimming safe elsewhere. General stinger information is in our{" "}
            <Link to="/guides/stinger-safety" className="text-primary hover:underline font-medium">
              stinger safety guide
            </Link>
            .
          </p>
        </section>

        {/* Tides */}
        <section aria-labelledby="tides" className="space-y-3">
          <h2 id="tides" className="text-2xl md:text-3xl font-bold">
            Tides
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Benwell Road is tidally influenced. A lower tide exposes substantially more usable beach,
            while a high tide can reduce the available exercise space considerably. Check current tide
            information before planning a dedicated trip, and do not walk dogs onto unfamiliar mudflats
            or tidal areas without understanding the conditions.
          </p>
          <a
            href={TIDES}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline font-medium inline-flex items-center gap-1"
          >
            Bureau of Meteorology tide predictions
            <ExternalLink className="w-3 h-3" aria-hidden="true" />
          </a>
        </section>

        {/* Wildlife */}
        <section aria-labelledby="wildlife" className="space-y-3">
          <h2 id="wildlife" className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <Bird className="w-6 h-6 text-primary" aria-hidden="true" />
            Wildlife and Shorebirds
          </h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Keep dogs away from shorebirds and do not allow chasing</li>
            <li>• Shorten the leash around wildlife where appropriate</li>
            <li>• Respect nesting areas, fenced sections and signs</li>
            <li>• Uncontrolled dogs can disturb feeding and nesting birds</li>
          </ul>
        </section>

        {/* Cane toads and snakes */}
        <section aria-labelledby="hazards" className="space-y-4">
          <h2 id="hazards" className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-primary" aria-hidden="true" />
            Cane Toads and Snakes
          </h2>
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Cane toads</h3>
            <p className="text-muted-foreground leading-relaxed">
              Cane toads are toxic to pets at every life stage and are present across Townsville and
              the wider region, so they are worth being aware of, particularly at night and around
              water. In Duncan's experience, this is one of the more difficult everyday issues for
              pet owners here — his own dog fortunately ignores them, but he knows many pets do not.
              If your dog mouths or contacts a cane toad, treat it as a veterinary emergency and
              contact a vet immediately rather than waiting to see if symptoms develop.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Snakes</h3>
            <p className="text-muted-foreground leading-relaxed">
              Snakes can be found in parks, bushland and undergrowth around Townsville, as in most
              of Queensland, though an encounter on a typical walk is uncommon. When Duncan walks
              his dog, he stays alert for snakes as a matter of routine — not because they're
              constantly present, but because it's a sensible habit in this environment. If you
              suspect your dog has been bitten, treat it as a veterinary emergency and get to a vet
              as quickly as you safely can.
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            See{" "}
            <a
              href="https://www.business.qld.gov.au/industries/farms-fishing-forestry/agriculture/biosecurity/animals/invasive/other/cane-toad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium inline-flex items-center gap-1"
            >
              Queensland Government — cane toads
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>{" "}
            for background, and our{" "}
            <Link to="/useful-contacts" className="text-primary hover:underline font-medium">
              useful contacts page
            </Link>{" "}
            for the emergency vet number.
          </p>
        </section>

        {/* Etiquette */}
        <section aria-labelledby="etiquette" className="space-y-3">
          <h2 id="etiquette" className="text-2xl md:text-3xl font-bold">
            Dog Beach Etiquette
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Off leash does not mean uncontrolled. The basics that keep these areas open:
          </p>
          <div className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
            {[
              "Maintain effective control of your dog at all times",
              "Leash dogs before entering and after leaving designated off-leash areas",
              "Remove a dog that becomes aggressive or repeatedly bothers others",
              "Pick up and dispose of dog waste",
              "Fill in any holes your dog digs",
              "Do not interfere with other users",
              "Respect fishers, walkers, families, horses and wildlife",
            ].map((t) => (
              <div key={t} className="flex items-start gap-2 rounded-lg border bg-card p-3">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* Family + dog */}
        <section aria-labelledby="family" className="space-y-4">
          <h2 id="family" className="text-2xl md:text-3xl font-bold">
            Family and Dog Outings
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-1.5">Pallarenda</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You can combine designated dog-beach time with nearby picnic and family areas plus
                on-leash walking. Keep the zones clear in your head: free running belongs in the
                section between access areas 8 and 9, and the leash goes back on elsewhere.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-1.5">
                Peggy Banfield Park, Bushland Beach
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Where current Council information confirms it, this area combines fenced dog exercise
                areas with a playground, toilets, barbecues, pathways and family recreation
                facilities. Children and dogs do not need to share the same fenced exercise space —
                run them as separate parts of the outing.
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Building a wider family day? See{" "}
            <Link to="/townsville-with-kids" className="text-primary hover:underline font-medium">
              Townsville with Kids
            </Link>
            .
          </p>
        </section>

        {/* Coastal walks */}
        <section aria-labelledby="walks" className="space-y-3">
          <h2 id="walks" className="text-2xl md:text-3xl font-bold">
            Dog-Friendly Coastal Walks
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Where current Council rules confirm on-leash dog access — such as the wider Pallarenda
            foreshore and nearby parks — these areas work well for a leashed coastal walk in the early
            morning or late afternoon. For other stretches of coastline, including The Strand, Jezzine
            and Rowes Bay, check current signage at the location before assuming dog access, because
            rules vary section by section. General coastal planning lives in the{" "}
            <Link to="/beaches" className="text-primary hover:underline font-medium">
              beaches guide
            </Link>
            .
          </p>
        </section>

        {/* Local Spotlight */}
        <section aria-labelledby="local-spotlight" className="space-y-6">
          <h2 id="local-spotlight" className="text-2xl md:text-3xl font-bold">
            Local Spotlight
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="overflow-hidden">
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={maxQuaysideImg}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover scale-125"
                  style={{ filter: "blur(24px) saturate(1.2)" }}
                />
                <img
                  src={maxQuaysideImg}
                  alt="Giant Schnauzer Max at Townsville Cruise Terminal during sunset walk with Crown Princess cruise ship"
                  loading="lazy"
                  className="relative w-full h-full object-contain"
                />
              </div>
              <CardContent className="p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  Quayside Terminal
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Golden hour at the Quayside Terminal. This wide, paved precinct is a local favorite
                  for evening walks—the sea breeze is reliable, and the ground cools down much faster
                  than inland bitumen.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={maxPallarenda}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover scale-125"
                  style={{ filter: "blur(24px) saturate(1.2)" }}
                />
                <img
                  src={maxPallarenda}
                  alt="Giant Schnauzer at Kissing Point Fort Townsville sunset"
                  loading="lazy"
                  className="relative w-full h-full object-contain"
                />
              </div>
              <CardContent className="p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  Kissing Point
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Schnauzer Approved: Max taking in the view from the Kissing Point battery. The wide,
                  paved paths at the barracks stay cooler than inland roads—perfect for large breeds
                  during golden hour.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What to bring */}
        <section aria-labelledby="bring" className="space-y-3">
          <h2 id="bring" className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <Backpack className="w-6 h-6 text-primary" aria-hidden="true" />
            What to Bring
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Leash",
              "Waste bags",
              "Drinking water",
              "Portable bowl",
              "Towel",
              "Shade where practical",
              "Phone",
            ].map((t) => (
              <span key={t} className="rounded-full border bg-card px-3 py-1.5 text-sm">
                {t}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Plus whatever your dog normally needs on an outing.
          </p>
        </section>

        {/* Suggested outings */}
        <section aria-labelledby="outings" className="space-y-4">
          <h2 id="outings" className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
            Suggested Dog Outings
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Pallarenda dog morning",
                steps: [
                  "Arrive early, before the heat builds",
                  "Use the designated off-leash section",
                  "Water and rest in shade",
                  "Nearby on-leash walk or picnic",
                ],
              },
              {
                title: "South Townsville dog beach visit",
                steps: [
                  "Check the tide first",
                  "Benwell Road off-leash section",
                  "A short beach run",
                  "Water and shade afterwards",
                ],
              },
              {
                title: "Fenced dog-park visit",
                steps: [
                  "Choose a current Council fenced off-leash area",
                  "Ideal for dogs with unreliable recall",
                  "Shorter, contained exercise",
                ],
              },
              {
                title: "Family and dog outing",
                steps: [
                  "Peggy Banfield Park or another verified family and dog location",
                  "Separate dog exercise and family play time",
                  "Finish before the middle of the day",
                ],
              },
            ].map((o) => (
              <div key={o.title} className="rounded-xl border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">{o.title}</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {o.steps.map((s) => (
                    <li key={s}>• {s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Keep these flexible — the tide, the weather and your dog will all have opinions.
          </p>
        </section>

        {/* Mistakes */}
        <section aria-labelledby="mistakes" className="space-y-3">
          <h2 id="mistakes" className="text-2xl md:text-3xl font-bold">
            Common Dog-Beach Mistakes
          </h2>
          <div className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
            {MISTAKES.map((m) => (
              <div key={m} className="flex items-start gap-2 rounded-lg border bg-card p-3">
                <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" aria-hidden="true" />
                {m}
              </div>
            ))}
          </div>
        </section>

        {/* Current status */}
        <section aria-labelledby="status">
          <LocalInsightCard variant="tip" title="Check current status before you go">
            <ul className="space-y-1.5 text-sm">
              <li>
                <a href={COUNCIL_OFF_LEASH} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Townsville City Council — dog off-leash areas
                </a>{" "}
                (including Pallarenda Dog Beach and the Benwell Road off-leash area)
              </li>
              <li>
                <a href={COUNCIL_DOGS} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Townsville City Council — current dog rules
                </a>
              </li>
              <li>
                <a href={CROCWISE} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Queensland Government — Be Crocwise
                </a>
              </li>
              <li>
                <a href={TIDES} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Bureau of Meteorology — tide predictions
                </a>
              </li>
              <li>
                <a href={DASHBOARD} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Townsville Disaster Dashboard
                </a>{" "}
                for weather and closures
              </li>
            </ul>
          </LocalInsightCard>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq" className="space-y-4">
          <h2 id="faq" className="text-2xl md:text-3xl font-bold">
            Dog Beach FAQs
          </h2>
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

export default DogFriendly;
