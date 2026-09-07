import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertTriangle,
  ArrowRight,
  Baby,
  CloudRain,
  ExternalLink,
  Flag,
  LifeBuoy,
  PhoneCall,
  ShieldAlert,
  Shirt,
  Ship,
  Waves,
} from "lucide-react";

const SITE = "https://www.townsvilleguide.com.au";
const PATH = "/guides/stinger-safety";

const TITLE = "Stinger Season in Townsville: Marine Stinger Safety Guide";
const DESCRIPTION =
  "Learn how to swim more safely in Townsville during marine stinger season, including stinger nets, suits, beach advice, first aid and emergency guidance.";

const COUNCIL_BEACHES =
  "https://www.townsville.qld.gov.au/facilities-and-recreation/beaches-parks-and-playgrounds";
const QLD_STINGERS =
  "https://www.qld.gov.au/health/staying-healthy/environmental/marine-stingers";
const POISONS = "https://www.poisonsinfo.health.qld.gov.au/about-us";
const BEACHSAFE = "https://beachsafe.org.au/";
const CROCWISE =
  "https://www.qld.gov.au/environment/plants-animals/animals/crocodiles/crocwise";
const BOM = "http://www.bom.gov.au/qld/warnings/";
const DASHBOARD = "https://disaster.townsville.qld.gov.au/";

const MISTAKES = [
  "Assuming stinger season is the only time marine stingers can occur",
  "Treating stinger nets as complete protection",
  "Swimming next to an enclosure rather than inside it",
  "Ignoring the red-and-yellow flags",
  "Swimming at an unpatrolled beach because the water looks calm",
  "Not wearing protective clothing during higher-risk periods",
  "Touching jellyfish washed onto the beach",
  "Using vinegar indiscriminately for every jellyfish sting",
  "Assuming Magnetic Island beaches are automatically safer",
  "Relying on an old blog post for current stinger-net status",
  "Ignoring beach closures after severe weather",
];

const RELATED = [
  { name: "Townsville Beaches", to: "/beaches", text: "Where to swim, patrolled areas and beach planning." },
  { name: "The Strand", to: "/the-strand", text: "Townsville's main patrolled foreshore and swimming precinct." },
  { name: "Townsville with Kids", to: "/townsville-with-kids", text: "Family planning, including safer swimming options." },
  { name: "First Time in Townsville", to: "/first-time-in-townsville", text: "Orientation and trip planning for first visits." },
  { name: "Beat the Heat", to: "/guides/beat-the-heat", text: "Planning outdoor and water time around tropical heat." },
  { name: "Rainy Day Activities", to: "/guides/rainy-day-activities", text: "Alternatives when weather closes beaches." },
  { name: "Magnetic Island Day Trip", to: "/guides/magnetic-island-day-trip", text: "Planning a day on the island, including bays and beaches." },
  { name: "Magnetic Island Ferry", to: "/guides/magnetic-island-ferry", text: "Getting across, timetables and practicalities." },
  { name: "Useful Contacts", to: "/useful-contacts", text: "Emergency, Council and official contact details." },
];

const faqs = [
  {
    q: "When is stinger season in Townsville?",
    a: "Townsville's typical marine stinger season runs from November to May, when tropical waters are warmest. This is a practical seasonal guide rather than a guarantee, so always check current beach signs and Townsville City Council beach information before swimming.",
  },
  {
    q: "Are marine stingers present outside stinger season?",
    a: "Yes, they can be. The November to May window describes when risk is generally highest, not a period outside which dangerous marine stingers cannot occur. Treat current signs, lifeguard advice and official Council information as the source of truth all year round.",
  },
  {
    q: "Which Townsville beaches have stinger nets?",
    a: "Selected Townsville and Magnetic Island beaches may have seasonal stinger enclosures. Installation and removal dates change from year to year and with weather events, so check current Townsville City Council beach information rather than relying on a list published online.",
  },
  {
    q: "Are stinger nets completely safe?",
    a: "No. Stinger nets reduce risk but do not eliminate it. Small jellyfish can pass through or around an enclosure. Stay well inside the designated area, avoid sitting on or swimming against the net, follow lifeguard advice, and consider a full-body stinger suit as an extra layer of protection.",
  },
  {
    q: "Should I wear a stinger suit in Townsville?",
    a: "A full-body Lycra-style stinger suit is commonly recommended for swimming in tropical North Queensland, particularly during the warmer, higher-risk months. It reduces exposed skin, but it does not remove all risk, and you still need sunscreen on any skin left uncovered.",
  },
  {
    q: "Can you swim at The Strand during stinger season?",
    a: "Many visitors do swim at The Strand during stinger season, using patrolled areas, swimming between the red-and-yellow flags and any seasonal enclosure that is in place, often with a stinger suit. Check current signs and Council beach information on the day, and follow lifeguard directions.",
  },
  {
    q: "What should I do if someone is stung by a jellyfish?",
    a: "For a suspected serious tropical jellyfish sting, call Triple Zero (000) immediately and follow the instructions given by emergency services. Use vinegar where current Queensland guidance recommends it for dangerous tropical jellyfish stings. If the person is unresponsive and not breathing normally, begin CPR. Do not delay calling for help.",
  },
  {
    q: "Should vinegar be used on jellyfish stings?",
    a: "Not for every sting. Vinegar is recommended by current Queensland guidance for suspected dangerous tropical jellyfish stings such as box jellyfish, but it should not be used for a suspected bluebottle sting, where first aid differs. Follow current Queensland Health and Poisons Information Centre guidance, and call Triple Zero (000) if the sting is serious.",
  },
  {
    q: "What are the symptoms of an Irukandji sting?",
    a: "The initial sting may seem relatively minor, with significant symptoms developing afterwards. Reported symptoms can include severe pain, restlessness, sweating, nausea, vomiting and worsening systemic symptoms. Seek urgent medical assessment if an Irukandji sting is suspected or symptoms become severe.",
  },
  {
    q: "What should I do for a suspected box jellyfish sting?",
    a: "Call Triple Zero (000) immediately for a suspected serious box jellyfish sting, particularly if the person collapses, has breathing difficulty, becomes unconscious or develops severe systemic symptoms. Follow emergency-services instructions, use vinegar where current Queensland guidance recommends it, and begin CPR if the person is unresponsive and not breathing normally.",
  },
  {
    q: "Can children swim during stinger season?",
    a: "Children can swim during stinger season when families use designated or patrolled swimming areas, supervise closely, use protective clothing during higher-risk months and follow current beach signs. Teach children not to touch jellyfish or tentacles washed onto the beach, because washed-up marine stingers may still sting.",
  },
  {
    q: "Do Magnetic Island beaches have marine stingers?",
    a: "Marine-stinger considerations apply on Magnetic Island as they do on the mainland. Selected island beaches may have seasonal enclosures, but not every bay has the same swimming setup or patrol arrangement, so check current local signs and official beach information before entering the water.",
  },
];

const StingerSafety = () => (
  <>
    <SEOHead title={TITLE} description={DESCRIPTION} canonical={`${SITE}${PATH}`} ogType="article" />
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: "Marine Stinger Safety in Townsville: What Visitors Need to Know",
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
                { "@type": "ListItem", position: 2, name: "Beaches", item: `${SITE}/beaches` },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Marine Stinger Safety",
                  item: `${SITE}${PATH}`,
                },
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
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Marine Stinger Safety in Townsville: What Visitors Need to Know
      </h1>

      <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
        <p>
          Townsville sits in tropical North Queensland, where marine stinger risk is highest during
          the warmer months. The typical local stinger season runs from{" "}
          <strong className="text-foreground">November to May</strong>, although marine stingers can
          still occur outside that period.
        </p>
        <p>
          The practical answer for most visitors is simple: use designated or patrolled swimming
          areas where they are available, swim between the red-and-yellow flags, and treat current
          beach signs, lifeguard advice and{" "}
          <a href={COUNCIL_BEACHES} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Townsville City Council beach information
          </a>{" "}
          as the final word on the day you swim.
        </p>
        <p>
          None of this makes Townsville an unsafe place to visit. People swim here year round. It
          simply means swimming in the tropics comes with a short list of habits worth learning
          before your first beach day — see our{" "}
          <Link to="/beaches" className="text-primary hover:underline">
            Townsville beaches guide
          </Link>{" "}
          and{" "}
          <Link to="/first-time-in-townsville" className="text-primary hover:underline">
            first-time visitor guide
          </Link>{" "}
          for the wider picture.
        </p>
      </div>

      <GuideQuickFacts className="mb-10" />

      <img
        src="/summer-safety-guide.webp"
        alt="Stinger net floats marking a seasonal swimming enclosure on a Townsville beach"
        width={1600}
        height={900}
        loading="eager"
        decoding="async"
        className="rounded-xl shadow-lg w-full h-[280px] md:h-[420px] object-cover object-bottom mb-10"
      />

      {/* Emergency block */}
      <section className="mb-12">
        <div className="rounded-xl border-2 border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/30 p-6">
          <h2 className="text-2xl font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
            <PhoneCall className="w-6 h-6" aria-hidden="true" />
            In an emergency
          </h2>
          <p className="text-red-800/90 dark:text-red-200 leading-relaxed">
            Call <strong>Triple Zero (000)</strong> immediately for a suspected serious marine sting,
            particularly if the person collapses, has breathing difficulty, becomes unconscious or
            develops severe symptoms. Follow the instructions given by emergency services. If the
            person is unresponsive and not breathing normally, begin CPR.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What is stinger season?</h2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>
            Townsville's typical stinger season runs from November through May. Risk is generally
            higher in warmer tropical waters, which is why the season tracks the build-up, wet
            season and early autumn rather than the cooler dry-season months.
          </p>
          <p>
            Treat that window as a practical seasonal guide, not a guarantee. Dangerous marine
            stingers can occur outside the formal season, so the safest habit is to check current
            signage and official beach information every time you plan to swim — not once at the
            start of your trip.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Which marine stingers matter?</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-primary" aria-hidden="true" />
                Box jellyfish
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Box jellyfish can cause very painful and potentially life-threatening stings. They
                are a serious tropical marine hazard, and a suspected serious sting needs immediate
                action rather than a wait-and-see approach.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-primary" aria-hidden="true" />
                Irukandji
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Irukandji jellyfish are very small, and the initial sting may seem relatively minor.
                Significant symptoms can develop afterwards, so urgent medical assessment matters if
                Irukandji syndrome is suspected.
              </p>
            </CardContent>
          </Card>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          For clinical detail, follow{" "}
          <a href={QLD_STINGERS} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Queensland Government marine stinger guidance
          </a>{" "}
          and the{" "}
          <a href={POISONS} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Queensland Poisons Information Centre (13 11 26)
          </a>
          .
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Flag className="w-6 h-6 text-primary" aria-hidden="true" />
          Where is it safest to swim?
        </h2>
        <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5 mb-4">
          <li>Choose a patrolled beach where one is available.</li>
          <li>Swim between the red-and-yellow flags.</li>
          <li>Use designated swimming areas and stinger enclosures where they are provided.</li>
          <li>Read and follow the current signs at the beach entrance.</li>
          <li>Follow lifeguard and Council advice, which reflects conditions on the day.</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Selected Townsville and Magnetic Island beaches may have seasonal stinger enclosures.
          Installation and removal dates change, so check current Council information before
          swimming rather than relying on a fixed list.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/beaches" className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline">
            Townsville beaches guide <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link to="/the-strand" className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline">
            The Strand <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <a
            href={COUNCIL_BEACHES}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline"
          >
            Council beach &amp; lifeguard information <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <ShieldAlert className="w-6 h-6 text-primary" aria-hidden="true" />
          How effective are stinger nets?
        </h2>
        <p className="text-foreground font-semibold mb-3">
          Stinger nets reduce risk but do not eliminate it.
        </p>
        <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
          <li>Small jellyfish can pass through or around an enclosure.</li>
          <li>Stay well inside the designated enclosure rather than swimming beside it.</li>
          <li>Do not sit on, climb on or swim directly against the net.</li>
          <li>Follow lifeguard advice, including any instruction to leave the water.</li>
          <li>Protective clothing adds another useful layer of protection inside the net.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Shirt className="w-6 h-6 text-primary" aria-hidden="true" />
          Stinger suits
        </h2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>
            A full-body Lycra-style stinger suit reduces the amount of exposed skin, which is the
            main practical reason they are commonly recommended for swimming in tropical North
            Queensland. They make particular sense during the warmer, higher-risk months.
          </p>
          <p>
            A suit is a sensible layer, not a guarantee — it does not remove all risk, and you still
            need sunscreen on hands, feet, face and any other exposed skin. Hire and purchase
            options exist locally; no particular brand is needed.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Waves className="w-6 h-6 text-primary" aria-hidden="true" />
          Beaches without nets or lifeguards
        </h2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>
            Many Townsville beaches are not patrolled, and some do not have seasonal stinger
            enclosures at all. Calm-looking water does not mean a location is the safest place to
            swim — quiet northern beaches often look the most inviting precisely because nobody is
            watching over them.
          </p>
          <p>
            Check current Council information before entering the water, and if you are unsure,
            choose a patrolled option instead. Our{" "}
            <Link to="/beaches" className="text-primary hover:underline">
              beaches guide
            </Link>{" "}
            explains which beaches suit which kind of visit.
          </p>
        </div>
      </section>

      {/* First aid */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <LifeBuoy className="w-6 h-6 text-primary" aria-hidden="true" />
          What to do if someone is stung
        </h2>
        <div className="rounded-xl border-2 border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/30 p-6 mb-4">
          <p className="font-semibold text-red-800 dark:text-red-300 mb-3">
            Suspected serious tropical jellyfish sting:
          </p>
          <ol className="space-y-2 text-red-800/90 dark:text-red-200 leading-relaxed list-decimal pl-5">
            <li>Call Triple Zero (000).</li>
            <li>Follow the instructions given by emergency services.</li>
            <li>
              Use vinegar for suspected dangerous tropical jellyfish stings where current Queensland
              guidance recommends it.
            </li>
            <li>Begin CPR if the person is unresponsive and not breathing normally.</li>
          </ol>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Never delay emergency assistance to look up advice. For non-emergency questions about a
          sting, the{" "}
          <a href={POISONS} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Queensland Poisons Information Centre on 13 11 26
          </a>{" "}
          can advise.
        </p>
      </section>

      <section className="mb-12">
        <div className="rounded-xl border-2 border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-6">
          <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-300 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6" aria-hidden="true" />
            Vinegar: an important distinction
          </h2>
          <div className="space-y-3 text-amber-900/90 dark:text-amber-100 leading-relaxed">
            <p>
              Vinegar should not be treated as the correct first aid for every jellyfish sting.
              Current Queensland guidance recommends it for suspected dangerous tropical jellyfish
              stings, such as box jellyfish.
            </p>
            <p className="font-semibold">Do not use vinegar for a suspected bluebottle sting.</p>
            <p>
              Bluebottle first aid differs from dangerous tropical jellyfish first aid. If you are
              not sure what caused the sting, follow current{" "}
              <a href={QLD_STINGERS} target="_blank" rel="noopener noreferrer" className="underline font-medium">
                Queensland Health marine stinger guidance
              </a>{" "}
              or call the{" "}
              <a href={POISONS} target="_blank" rel="noopener noreferrer" className="underline font-medium">
                Poisons Information Centre on 13 11 26
              </a>
              , and call Triple Zero (000) if the sting looks serious.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Suspected box jellyfish emergency</h2>
        <div className="rounded-xl border-2 border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/30 p-6 space-y-3 text-red-800/90 dark:text-red-200 leading-relaxed">
          <p className="font-semibold text-red-800 dark:text-red-300">
            Call Triple Zero (000) immediately for a suspected serious box jellyfish sting,
            particularly if the person collapses, has breathing difficulty, becomes unconscious or
            develops severe systemic symptoms.
          </p>
          <p>If the person is unresponsive and not breathing normally, begin CPR and follow emergency-services instructions.</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Irukandji symptoms</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Reported symptoms of Irukandji syndrome can include:
        </p>
        <ul className="grid gap-2 sm:grid-cols-2 text-muted-foreground list-disc pl-5 mb-4">
          <li>Severe pain</li>
          <li>Restlessness</li>
          <li>Sweating</li>
          <li>Nausea</li>
          <li>Vomiting</li>
          <li>Worsening systemic symptoms</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          Symptoms alone are not a diagnosis. Seek urgent medical assessment if an Irukandji sting is
          suspected or symptoms become severe, and call Triple Zero (000) if the person deteriorates.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Bluebottles</h2>
        <p className="text-muted-foreground leading-relaxed">
          Bluebottles are a different animal from box jellyfish and Irukandji, and first aid differs.
          Vinegar is not recommended for a suspected bluebottle sting. Follow current Queensland
          Health guidance, and seek medical help if symptoms are severe or the person is unwell
          beyond local pain at the sting site.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Baby className="w-6 h-6 text-primary" aria-hidden="true" />
          Children and stinger safety
        </h2>
        <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5 mb-4">
          <li>Use designated or patrolled swimming areas.</li>
          <li>Supervise children closely in and near the water.</li>
          <li>Use protective clothing during the higher-risk months.</li>
          <li>Follow the current signs at each beach.</li>
          <li>
            Teach children not to touch jellyfish or tentacles washed onto the beach — washed-up
            marine stingers may still sting.
          </li>
        </ul>
        <Link to="/townsville-with-kids" className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline">
          Townsville with Kids <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Ship className="w-6 h-6 text-primary" aria-hidden="true" />
          Magnetic Island
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Marine-stinger considerations apply on Magnetic Island just as they do on the mainland.
          Selected island beaches may have seasonal enclosures, but not every bay has the same
          swimming setup or patrol arrangement, so check current local signs and official beach
          information before you swim.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/guides/magnetic-island-day-trip" className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline">
            Magnetic Island day trip <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link to="/guides/magnetic-island-ferry" className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline">
            Magnetic Island ferry <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link to="/beaches" className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline">
            Beaches guide <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <CloudRain className="w-6 h-6 text-primary" aria-hidden="true" />
          Wet weather and stinger nets
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Severe weather can affect beaches and stinger enclosures. Nets may be temporarily removed,
          swimming areas may close, and water quality and debris can change after heavy rain or a
          storm. Check current beach status before heading down, and have a{" "}
          <Link to="/guides/rainy-day-activities" className="text-primary hover:underline">
            wet-weather plan
          </Link>{" "}
          ready.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Stinger safety and crocodile safety</h2>
        <p className="text-muted-foreground leading-relaxed">
          Stinger precautions do not replace crocodile awareness. Townsville is tropical North
          Queensland, so follow all beach signage, use designated swimming areas and follow official{" "}
          <a href={CROCWISE} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Crocwise guidance
          </a>{" "}
          where relevant. Our{" "}
          <Link to="/beaches" className="text-primary hover:underline">
            beaches guide
          </Link>{" "}
          covers this alongside general beach planning.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Common stinger-safety mistakes</h2>
        <ul className="grid gap-2 sm:grid-cols-2 text-muted-foreground list-disc pl-5">
          {MISTAKES.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Check current status before you swim</h2>
        <div className="rounded-xl border bg-muted/40 p-6">
          <ul className="space-y-3 text-muted-foreground">
            <li>
              <a href={COUNCIL_BEACHES} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                Townsville City Council — beaches, lifeguards and stinger enclosures
              </a>
            </li>
            <li>
              <a href={QLD_STINGERS} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                Queensland Government — marine stinger safety
              </a>
            </li>
            <li>
              <a href={POISONS} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                Queensland Poisons Information Centre — 13 11 26
              </a>
            </li>
            <li>
              <a href={BEACHSAFE} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                Surf Life Saving — Beachsafe beach and patrol information
              </a>
            </li>
            <li>
              <a href={BOM} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                Bureau of Meteorology — Queensland warnings
              </a>{" "}
              and the{" "}
              <a href={DASHBOARD} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                Townsville Disaster Dashboard
              </a>
            </li>
            <li>
              <Link to="/useful-contacts" className="text-primary font-medium hover:underline">
                Useful contacts for Townsville visitors
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`} className="border-border/40">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-4">Related guides</h2>
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

export default StingerSafety;
