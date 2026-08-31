import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Dog, ShieldAlert, TreePine, Users, Quote } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is Bushland Beach good for swimming?",
    a: "Bushland Beach is not automatically a recommended swimming beach. There's no permanently patrolled or netted swimming area documented here the way there is at The Strand, so treat it as unpatrolled. Check current Townsville City Council information on patrol and net status before deciding to swim, particularly during stinger season (November–May).",
  },
  {
    q: "Is Bushland Beach dog-friendly?",
    a: "Yes. Peggy Banfield Park at Bushland Beach combines fenced dog exercise areas with a playground, toilets, barbecues and pathways, so you can run a family and dog outing side by side without the kids and dogs needing to share the same fenced space. Check current Council signage for on-leash and off-leash zones on the day.",
  },
  {
    q: "What is there to do at Bushland Beach?",
    a: "It's a suburban foreshore rather than a visitor attraction — the appeal is the local beach lifestyle. At low tide the water pulls well back, opening up a wide, flat stretch of sand that's great for letting a dog run properly or for kids to explore safely away from deep water. Peggy Banfield Park adds a playground and barbecue facilities for a longer family outing.",
  },
  {
    q: "How does Bushland Beach compare to Saunders Beach or Pallarenda?",
    a: "All three sit along Townsville's Northern Beaches corridor and share a car-dependent, residential feel rather than a central-visitor one. Bushland Beach is the most suburban of the three — a local foreshore attached to a residential community — while Pallarenda is known for its off-leash dog zones and Saunders Beach for its quieter, more remote stretch of sand. See our Saunders Beach and Beaches guides for the comparison.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.townsvilleguide.com.au/" },
        { "@type": "ListItem", position: 2, name: "Beaches", item: "https://www.townsvilleguide.com.au/beaches" },
        { "@type": "ListItem", position: 3, name: "Bushland Beach", item: "https://www.townsvilleguide.com.au/bushland-beach" },
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
};

const BushlandBeach = () => {
  return (
    <>
      <SEOHead
        title="Bushland Beach Townsville | Local Guide & Peggy Banfield Park"
        description="A local's guide to Bushland Beach, Townsville: the grassed foreshore, Peggy Banfield Park's dog exercise areas and playground, and honest swimming-safety advice."
        canonical="https://www.townsvilleguide.com.au/bushland-beach"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-neutral-50 pb-20">
        {/* Hero Section (image intentionally omitted — awaiting a genuine Bushland Beach photo) */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
          <div className="container mx-auto max-w-4xl px-4 text-white">
            <Link to="/beaches" className="inline-flex items-center text-sm text-gray-300 hover:text-primary mb-4 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Beaches
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Bushland Beach</h1>
            <p className="text-xl text-gray-200">Townsville's Quiet Northern Foreshore</p>
          </div>
        </div>

        <div className="container mx-auto max-w-4xl px-4 mt-8 relative z-30">
          {/* Quick Chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <Dog className="h-3 w-3" /> Dog-Friendly Park
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Suburban & Local
            </span>
            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
              Car Recommended
            </span>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Bushland+Beach+Townsville+QLD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mb-8"
          >
            <MapPin className="w-4 h-4" aria-hidden="true" />
            Get Directions
          </a>

          {/* Intro */}
          <section className="mb-8">
            <p className="text-lg text-foreground leading-relaxed">
              Bushland Beach is a residential coastal community on the northern edge of Townsville,
              one of the city's Northern Beaches. It's a suburban foreshore rather than a visitor
              destination — the appeal is the local beach lifestyle: a grassed foreshore, an easy
              walk, somewhere to eat a picnic, and open coastal views that are especially good in
              the late afternoon.
            </p>
          </section>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Peggy Banfield Park */}
            <section className="bg-white dark:bg-card rounded-xl border p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
                <Users className="w-5 h-5 text-primary" aria-hidden="true" /> Peggy Banfield Park
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                The local hub for a Bushland Beach outing. Where current Council information confirms
                it, the park combines fenced dog exercise areas with a playground, toilets, barbecues,
                pathways and family recreation facilities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Children and dogs don't need to share the same fenced exercise space — run them as
                separate parts of the outing, then regroup for a picnic or a barbecue afterward.
              </p>
            </section>

            {/* Duncan's Local Tip */}
            <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Quote className="w-6 h-6 text-amber-700 mt-1 shrink-0" />
                <div>
                  <h2 className="text-lg font-bold mb-2 text-amber-900">Duncan's Local Tip</h2>
                  <p className="text-amber-900/90 leading-relaxed text-sm">
                    This is genuinely one of my favourite beaches in Townsville. When the tide goes
                    out, it goes way out — leaving a huge stretch of flat, firm sand that's perfect
                    for the dog to run properly and for the kids to explore without anyone needing
                    to worry about deep water close by.
                  </p>
                </div>
              </div>
            </section>

            {/* Swimming Safety */}
            <section className="rounded-xl border-2 border-amber-200 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-900/60 p-5 md:p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-5 h-5 text-amber-700 dark:text-amber-300" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-1">Swimming & Safety</h2>
                  <p className="text-foreground/80 leading-relaxed">
                    Bushland Beach is not automatically a recommended swimming beach. Use current{" "}
                    <a
                      href="https://www.townsville.qld.gov.au/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-medium"
                    >
                      Townsville City Council
                    </a>{" "}
                    information for patrol and net status before deciding to swim, especially during
                    stinger season (November–May). For year-round stinger-free swimming, the{" "}
                    <Link to="/the-strand" className="underline font-medium">
                      Strand Rockpool
                    </Link>{" "}
                    is the reliable option. See our{" "}
                    <Link to="/guides/stinger-safety" className="underline font-medium">
                      Stinger Safety guide
                    </Link>{" "}
                    for the full picture.
                  </p>
                </div>
              </div>
            </section>

            {/* Northern Beaches Context */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
                <TreePine className="w-5 h-5 text-primary" aria-hidden="true" /> Part of the Northern Beaches
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Bushland Beach sits alongside{" "}
                <Link to="/beaches/saunders-beach" className="text-primary underline underline-offset-2">
                  Saunders Beach
                </Link>
                , Toolakea, Toomulla and Balgal Beach along the coast north of the city. These
                suburbs are more spread out, residential and car-dependent than the central
                waterfront, and suit quieter coastal outings or longer local stays rather than
                a rushed first-time itinerary. If you're weighing it up against a move rather than
                a visit, our{" "}
                <Link to="/suburbs" className="text-primary underline underline-offset-2">
                  Suburbs Guide
                </Link>{" "}
                and{" "}
                <Link to="/moving-to-townsville" className="text-primary underline underline-offset-2">
                  Moving to Townsville
                </Link>{" "}
                guide cover it as a residential option too.
              </p>
            </section>

            {/* Nearby Guides */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Nearby Guides</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link to="/beaches/saunders-beach" className="block bg-card rounded-xl p-5 shadow-sm border hover:border-primary hover:shadow-md transition">
                  <h3 className="font-semibold mb-1 text-foreground">Saunders Beach</h3>
                  <p className="text-sm text-muted-foreground">Sleepy northern beach community, further up the coast.</p>
                </Link>
                <Link to="/north-shore-townsville" className="block bg-card rounded-xl p-5 shadow-sm border hover:border-primary hover:shadow-md transition">
                  <h3 className="font-semibold mb-1 text-foreground">North Shore Townsville</h3>
                  <p className="text-sm text-muted-foreground">The suburb & lifestyle guide for Townsville's north.</p>
                </Link>
                <Link to="/dog-friendly" className="block bg-card rounded-xl p-5 shadow-sm border hover:border-primary hover:shadow-md transition">
                  <h3 className="font-semibold mb-1 text-foreground">Dog-Friendly Townsville</h3>
                  <p className="text-sm text-muted-foreground">Off-leash parks, dog cafés & pet-friendly stays.</p>
                </Link>
                <Link to="/beaches" className="block bg-card rounded-xl p-5 shadow-sm border hover:border-primary hover:shadow-md transition">
                  <h3 className="font-semibold mb-1 text-foreground">Townsville Beaches</h3>
                  <p className="text-sm text-muted-foreground">The full comparison of every beach in the city.</p>
                </Link>
                <Link to="/guides/stinger-safety" className="block bg-card rounded-xl p-5 shadow-sm border hover:border-primary hover:shadow-md transition">
                  <h3 className="font-semibold mb-1 text-foreground">Stinger & Safety Guide</h3>
                  <p className="text-sm text-muted-foreground">Current net status, season dates & first aid.</p>
                </Link>
                <Link to="/moving-to-townsville" className="block bg-card rounded-xl p-5 shadow-sm border hover:border-primary hover:shadow-md transition">
                  <h3 className="font-semibold mb-1 text-foreground">Moving to Townsville</h3>
                  <p className="text-sm text-muted-foreground">Suburbs, jobs and settling-in essentials.</p>
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-card rounded-xl p-6 border">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Map Button */}
            <div className="flex justify-center pt-4">
              <Button asChild size="lg" className="w-full md:w-auto">
                <a href="https://www.google.com/maps/search/?api=1&query=Peggy+Banfield+Park+Bushland+Beach" target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 w-4 h-4" /> Open in Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BushlandBeach;
