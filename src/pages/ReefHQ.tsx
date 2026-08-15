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
  ArrowRight,
  Baby,
  Building2,
  CloudRain,
  ExternalLink,
  Fish,
  Info,
  MapPin,
  Ship,
  Sun,
  XCircle,
} from "lucide-react";

const SITE = "https://www.townsvilleguide.com.au";
const PATH = "/reef-hq-townsville";

const TITLE = "Is Reef HQ Open? Townsville Aquarium Closure & 2029 Update";
const DESCRIPTION =
  "Reef HQ is closed for redevelopment as the Great Barrier Reef Aquarium. See the current 2029 reopening target, project status and what to visit instead.";

const AQUARIUM = "https://www.gbraquarium.com.au/";
const GBRMPA = "https://www.gbrmpa.gov.au/great-barrier-reef-aquarium";

const RELATED = [
  { name: "Rainy Day Activities", to: "/guides/rainy-day-activities", text: "Indoor and wet-weather options across Townsville." },
  { name: "Townsville with Kids", to: "/townsville-with-kids", text: "Family planning, attractions and easy days out." },
  { name: "First Time in Townsville", to: "/first-time-in-townsville", text: "Orientation and trip planning for a first visit." },
  { name: "The Strand", to: "/the-strand", text: "Water Park, Rockpool, beaches and the foreshore." },
  { name: "Riverway", to: "/riverway", text: "Free lagoons, library, gallery and riverside parkland." },
  { name: "Magnetic Island Day Trip", to: "/guides/magnetic-island-day-trip", text: "Beaches, wildlife and walks a short ferry away." },
  { name: "Magnetic Island Ferry", to: "/guides/magnetic-island-ferry", text: "Getting across the bay and planning the crossing." },
  { name: "Free Things to Do", to: "/guides/free-things", text: "No-cost options across the city." },
  { name: "Townsville in One Day", to: "/townsville-in-one-day", text: "A workable single-day plan." },
  { name: "Useful Contacts", to: "/useful-contacts", text: "Council, visitor and emergency contacts." },
];

const faqs = [
  {
    q: "Is Reef HQ open?",
    a: "No. The Great Barrier Reef Aquarium, formerly known as Reef HQ, is closed to the public while it undergoes a major redevelopment. Do not plan a current Townsville itinerary around visiting it.",
  },
  {
    q: "What is Reef HQ called now?",
    a: "The attraction is now referred to as the Great Barrier Reef Aquarium, Australia's National Education Centre for the Great Barrier Reef. Reef HQ is the former name that many visitors still search for.",
  },
  {
    q: "When will Reef HQ reopen?",
    a: "The project is currently working towards reopening in 2029, but a final public opening date has not yet been announced. Check the official Great Barrier Reef Aquarium website for the latest project status before planning a future trip around it.",
  },
  {
    q: "Will the Great Barrier Reef Aquarium open in 2029?",
    a: "The current official target is 2029, but a final public opening date has not yet been announced. Redevelopment timelines can change, so treat 2029 as a target rather than a confirmed opening date.",
  },
  {
    q: "Has Reef HQ been demolished?",
    a: "No. The original aquarium building remains. Some adjacent buildings were removed as part of the broader redevelopment of the site, which may have created the impression that Reef HQ itself had been demolished.",
  },
  {
    q: "Why is Reef HQ closed?",
    a: "It is closed so that a major Commonwealth-funded redevelopment can be delivered. The work involves design, approvals and construction planning as well as building work, which is why the closure is a long one rather than a short seasonal shutdown.",
  },
  {
    q: "What happened to the animals at Reef HQ?",
    a: "According to official information, larger animals were rehomed with partner facilities, while fish and coral from the major reef exhibits were relocated into purpose-built care systems. Specialist staff continue to care for them, and some animals and coral may support the commissioning of future exhibits.",
  },
  {
    q: "Is the aquarium moving to another site?",
    a: "No. The redevelopment remains at the existing Townsville CBD site unless current official project information states otherwise. Treat the official Great Barrier Reef Aquarium and Great Barrier Reef Marine Park Authority information as the authority on this.",
  },
  {
    q: "What can families do instead of Reef HQ?",
    a: "Queensland Museum Tropics in the CBD is the strongest indoor alternative for families. The Strand offers the Water Park, Rockpool and beachfront, and Riverway has free lagoons, a library and a gallery. A Magnetic Island day trip is the best option for marine and wildlife interest.",
  },
  {
    q: "What is the best rainy-day alternative to Reef HQ?",
    a: "Queensland Museum Tropics is the best genuinely weatherproof alternative, with libraries, galleries and the cinema as further indoor options. See our rainy day activities guide for a full wet-weather plan.",
  },
];

const ReefHQ = () => (
  <>
    <SEOHead title={TITLE} description={DESCRIPTION} canonical={`${SITE}${PATH}`} ogType="article" />
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: "Reef HQ Townsville: Closure, Redevelopment & Reopening Updates",
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
                { "@type": "ListItem", position: 3, name: "Reef HQ Townsville", item: `${SITE}${PATH}` },
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
        Reef HQ Townsville: Closure, Redevelopment &amp; Reopening Updates
      </h1>

      <div className="rounded-xl border-2 border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-6 mb-8">
        <p className="text-lg font-semibold text-amber-900 dark:text-amber-200 leading-relaxed flex items-start gap-3">
          <XCircle className="w-6 h-6 shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            Reef HQ is closed. The attraction is being redeveloped as the Great Barrier Reef
            Aquarium, with reopening currently targeted for 2029.
          </span>
        </p>
        <p className="text-sm text-amber-900/80 dark:text-amber-200/80 mt-3">
          Last checked 7 August 2026. Check the{" "}
          <a href={AQUARIUM} target="_blank" rel="noopener noreferrer" className="underline font-medium">
            official Great Barrier Reef Aquarium website
          </a>{" "}
          for the current project status.
        </p>
      </div>

      <GuideQuickFacts className="mb-10" />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Is Reef HQ open?</h2>
        <p className="text-foreground font-semibold mb-3">No.</p>
        <p className="text-muted-foreground leading-relaxed">
          The Great Barrier Reef Aquarium, formerly known as Reef HQ, is closed to the public while
          it undergoes a major redevelopment. There is no general visitor access to the aquarium, its
          exhibits or the turtle hospital, and no ticketing for casual visits. If you are planning a
          trip now, treat it as unavailable — see the{" "}
          <Link to="/things-to-do" className="text-primary hover:underline">
            things to do
          </Link>{" "}
          overview for what is open instead.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">When will it reopen?</h2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>
            The current official target is 2029. The project is currently working towards reopening
            in 2029, but a final public opening date has not yet been announced.
          </p>
          <p>
            That target is a redevelopment milestone rather than a fixed public opening date. If you
            are planning a future trip around the aquarium, check the{" "}
            <a href={AQUARIUM} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              official Great Barrier Reef Aquarium website
            </a>{" "}
            for updates closer to the time.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Has Reef HQ been demolished?</h2>
        <p className="text-muted-foreground leading-relaxed">
          No. The original aquarium building remains. Some adjacent buildings were removed as part of
          the broader redevelopment of the site, and that visible demolition work is most likely why
          some people assume the aquarium itself has gone.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Is the aquarium moving?</h2>
        <p className="text-muted-foreground leading-relaxed">
          The redevelopment remains at the existing Townsville CBD site unless current official
          project information states otherwise. The{" "}
          <a href={GBRMPA} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Great Barrier Reef Marine Park Authority
          </a>{" "}
          and the official aquarium website are the authority on the site and the project.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Why is it taking so long?</h2>
        <p className="text-muted-foreground leading-relaxed">
          This is a major Commonwealth-funded redevelopment rather than a refurbishment. Projects at
          this scale involve design, approvals and construction planning as well as building work,
          and redevelopment work is continuing. Use current official information for project
          milestones rather than older news coverage.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Fish className="w-6 h-6 text-primary" aria-hidden="true" />
          What happened to the animals?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          According to official information, larger animals were rehomed with partner facilities,
          while fish and coral from the major reef exhibits were relocated into purpose-built care
          systems. Specialist staff continue to care for them, and some of those animals and coral
          may support the commissioning of future exhibits when the new aquarium is ready.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What will replace Reef HQ?</h2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>
            It is not being replaced by an unrelated attraction. The same site is being redeveloped
            as <strong className="text-foreground">the Great Barrier Reef Aquarium — Australia's
            National Education Centre for the Great Barrier Reef</strong>.
          </p>
          <p>The redevelopment is described as placing emphasis on:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Living reef exhibits</li>
            <li>Marine science</li>
            <li>Reef education</li>
            <li>Conservation</li>
            <li>Immersive visitor experiences</li>
            <li>Improved visitor facilities</li>
          </ul>
          <p className="text-sm">
            Specific exhibits and experiences will be confirmed by the operator closer to opening.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What can visitors do instead?</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-primary" aria-hidden="true" />
                Queensland Museum Tropics
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The strongest general indoor alternative, covering tropical Queensland, reef and
                rainforest themes and regional maritime history. Check current exhibitions and entry
                information before you go. See{" "}
                <Link to="/guides/rainy-day-activities" className="text-primary hover:underline">
                  rainy day activities
                </Link>{" "}
                and{" "}
                <Link to="/townsville-with-kids" className="text-primary hover:underline">
                  Townsville with kids
                </Link>
                .
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sun className="w-4 h-4 text-primary" aria-hidden="true" />
                The Strand
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Best for families and waterfront time, including the Water Park, the Rockpool and
                beach and foreshore walking. See{" "}
                <Link to="/the-strand" className="text-primary hover:underline">
                  The Strand guide
                </Link>
                .
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                Riverway
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Free swimming lagoons, a library and a gallery in one riverside precinct — a good
                choice for families on hot or mixed-weather days. See{" "}
                <Link to="/riverway" className="text-primary hover:underline">
                  the Riverway guide
                </Link>
                .
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Ship className="w-4 h-4 text-primary" aria-hidden="true" />
                Magnetic Island
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The best substitute for coastal and marine nature: beaches, walking, wildlife and a
                full day-trip experience. See the{" "}
                <Link to="/guides/magnetic-island-day-trip" className="text-primary hover:underline">
                  day trip guide
                </Link>
                ,{" "}
                <Link to="/guides/magnetic-island-ferry" className="text-primary hover:underline">
                  ferry guide
                </Link>{" "}
                and{" "}
                <Link to="/guides/forts-walk-magnetic-island" className="text-primary hover:underline">
                  Forts Walk
                </Link>
                .
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Fish className="w-4 h-4 text-primary" aria-hidden="true" />
                Billabong Sanctuary
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Worth considering for wildlife-focused visitors south of the city. See{" "}
                <Link to="/billabong-sanctuary" className="text-primary hover:underline">
                  the Billabong Sanctuary guide
                </Link>
                .
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Info className="w-4 h-4 text-primary" aria-hidden="true" />
                Free alternatives
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Plenty of Townsville's best options cost nothing. See{" "}
                <Link to="/guides/free-things" className="text-primary hover:underline">
                  free things to do
                </Link>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">If you are visiting before the aquarium reopens</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Do not build your current Townsville itinerary around Reef HQ. Treat the aquarium as
          unavailable and plan another attraction instead. Here is the simplest swap by traveller
          type.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Baby className="w-4 h-4 text-primary" aria-hidden="true" />
              With kids
            </h3>
            <p className="text-sm text-muted-foreground">
              Queensland Museum Tropics,{" "}
              <Link to="/the-strand" className="text-primary hover:underline">The Strand</Link> and{" "}
              <Link to="/riverway" className="text-primary hover:underline">Riverway</Link>. Full plan
              in{" "}
              <Link to="/townsville-with-kids" className="text-primary hover:underline">
                Townsville with kids
              </Link>
              .
            </p>
          </div>
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <CloudRain className="w-4 h-4 text-primary" aria-hidden="true" />
              Rainy day
            </h3>
            <p className="text-sm text-muted-foreground">
              Queensland Museum Tropics, libraries, the cinema and galleries. See{" "}
              <Link to="/guides/rainy-day-activities" className="text-primary hover:underline">
                rainy day activities
              </Link>
              .
            </p>
          </div>
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Fish className="w-4 h-4 text-primary" aria-hidden="true" />
              Marine interest
            </h3>
            <p className="text-sm text-muted-foreground">
              A{" "}
              <Link to="/guides/magnetic-island-day-trip" className="text-primary hover:underline">
                Magnetic Island day trip
              </Link>
              , Queensland Museum Tropics, and official Great Barrier Reef educational resources from{" "}
              <a href={GBRMPA} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                the Marine Park Authority
              </a>
              . For on-water options see{" "}
              <Link to="/great-barrier-reef-townsville" className="text-primary hover:underline">
                reef tours from Townsville
              </Link>
              .
            </p>
          </div>
          <div className="rounded-xl border bg-card p-5">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Sun className="w-4 h-4 text-primary" aria-hidden="true" />
              Free day
            </h3>
            <p className="text-sm text-muted-foreground">
              <Link to="/the-strand" className="text-primary hover:underline">The Strand</Link>,{" "}
              <Link to="/riverway" className="text-primary hover:underline">Riverway</Link> and{" "}
              <Link to="/jezzine-barracks" className="text-primary hover:underline">Jezzine Barracks</Link>.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-5 sm:col-span-2">
            <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
              First visit
            </h3>
            <p className="text-sm text-muted-foreground">
              <Link to="/the-strand" className="text-primary hover:underline">The Strand</Link>,{" "}
              <Link to="/castle-hill" className="text-primary hover:underline">Castle Hill</Link> and{" "}
              <Link to="/guides/magnetic-island-day-trip" className="text-primary hover:underline">
                Magnetic Island
              </Link>
              . See{" "}
              <Link to="/first-time-in-townsville" className="text-primary hover:underline">
                first time in Townsville
              </Link>{" "}
              and{" "}
              <Link to="/townsville-in-one-day" className="text-primary hover:underline">
                Townsville in one day
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Current-status updates</h2>
        <div className="rounded-xl border bg-muted/40 p-6 space-y-3 text-muted-foreground leading-relaxed">
          <p>
            Redevelopment timelines can change. The official aquarium site is the primary source for
            current project status and any future opening announcement, and this page is updated when
            the official target or visitor status changes.
          </p>
          <ul className="space-y-2">
            <li>
              <a href={AQUARIUM} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline inline-flex items-center gap-1.5">
                Great Barrier Reef Aquarium — official site <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={GBRMPA} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline inline-flex items-center gap-1.5">
                Great Barrier Reef Marine Park Authority — redevelopment information{" "}
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
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

export default ReefHQ;
