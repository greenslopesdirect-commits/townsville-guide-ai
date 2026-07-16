import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, AlertTriangle, CheckCircle, Fish, Dog, Quote } from "lucide-react";
import LocalInsightCard from "@/components/LocalInsightCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroAsset from "@/assets/pallarenda-max-hero.webp.asset.json";

const faqs = [
  {
    q: "Is Pallarenda Beach dog-friendly?",
    a: "Yes — it's Townsville's flagship off-leash dog beach. The off-leash zone runs between Gates 8, 9 and 10 along Cape Pallarenda Road. The Main Beach at the southern end is on-leash only, and dogs are not permitted past the Conservation Park gate at the northern end (heavy fines apply).",
  },
  {
    q: "Are there stinger nets at Pallarenda?",
    a: "There is normally one seasonal net at the Main Beach (installed roughly November–May for families). It's currently packed away for the Dry season and will be reinstalled in November. The off-leash dog zone at Gates 8–10 is never netted, so treat it as open ocean during stinger season.",
  },
  {
    q: "Where exactly is the off-leash zone?",
    a: "Drive north along Cape Pallarenda Road past the Main Beach and look for the beach access points signed Gate 8, 9 and 10. The off-leash boundary ends at the Conservation Park gate — don't take dogs beyond it.",
  },
  {
    q: "Is it safe to swim at Pallarenda?",
    a: "The Main Beach is the safer swimming option when the seasonal net is in (Nov–May). Outside of that, or anywhere in the off-leash zone, there's no net — so during stinger season it's wading and sand play only. For year-round stinger-free swimming, head to The Strand Rockpool.",
  },
  {
    q: "When's the best time to visit?",
    a: "Time it with low tide — Pallarenda is very flat, and at low tide the water pulls back hundreds of metres, creating huge sand flats for dogs to run and chase balls. King Tides can leave almost no beach near the tree line, so check the tide chart before you drive out.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.myaussieguide.com.au/" },
        { "@type": "ListItem", position: 2, name: "Beaches", item: "https://www.myaussieguide.com.au/beaches" },
        { "@type": "ListItem", position: 3, name: "Pallarenda Beach", item: "https://www.myaussieguide.com.au/pallarenda-beach" },
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

const PallarendaBeach = () => {
  return (
    <>
      <SEOHead
        title="Pallarenda Beach & Dog Off-Leash Guide | My Aussie Guide"
        description="Local guide to Pallarenda Beach. Maps for the Gate 8-10 off-leash dog zone, fishing spots, and stinger safety tips."
        canonical="https://www.myaussieguide.com.au/pallarenda-beach"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-background">
        {/* Hero Image */}
        <section className="relative w-full h-[70vh] min-h-[460px] max-h-[720px] overflow-hidden -mt-20 bg-slate-900">
          {/* Blurred fill so the portrait photo has no black bars */}
          <img
            src={heroAsset.url}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-70"
          />
          {/* Sharp, uncropped photo */}
          <img
            src={heroAsset.url}
            alt="Pallarenda Beach at sunset with Max the giant schnauzer on-lead, low-tide sand flats and Magnetic Island in the distance"
            className="relative w-full h-full object-contain"
            width={1200}
            height={1600}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="container mx-auto px-4 max-w-4xl pb-8 md:pb-10">
              <div className="flex items-center gap-2 text-yellow-300 font-bold uppercase tracking-wider text-xs md:text-sm mb-2 drop-shadow">
                <MapPin className="w-4 h-4" /> Northern Suburbs
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 drop-shadow-lg leading-tight">
                Pallarenda Beach
              </h1>
              <p className="text-base md:text-xl text-slate-100 max-w-2xl drop-shadow">
                A quieter alternative to The Strand — famous for its off-leash dog zones, fishing channels, and views of Magnetic Island.
              </p>
            </div>
          </div>
        </section>

        <main className="pt-10 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            
            {/* Back Button */}
            <div className="mb-6">
              <Link to="/beaches">
                <Button variant="ghost" className="group pl-0 hover:bg-transparent hover:text-primary">
                  <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Beaches
                </Button>
              </Link>
            </div>



            {/* Quick Info Grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
                <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                    <div className="flex items-center gap-2 font-bold text-blue-700 dark:text-blue-400 mb-2">
                        <Dog className="w-5 h-5" /> Dog Friendly?
                    </div>
                    <p className="text-sm text-blue-900 dark:text-blue-100">
                        Yes! <br/><strong>Gates 8–10</strong> are Off-Leash. <br/>Main beach is On-Leash.
                    </p>
                </div>

                <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800">
                    <div className="flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400 mb-2">
                        <AlertTriangle className="w-5 h-5" /> Stinger Nets?
                    </div>
                    <p className="text-sm text-amber-900 dark:text-amber-100">
                        <strong>No net right now.</strong> Townsville's stinger nets (including Pallarenda Main Beach) are packed away for the Dry season — reinstalled Nov. For year-round stinger-free swimming, head to <Link to="/the-strand" className="underline font-semibold">The Strand Rockpool</Link>.
                    </p>
                </div>

                <div className="p-5 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
                    <div className="flex items-center gap-2 font-bold text-green-700 dark:text-green-400 mb-2">
                        <Fish className="w-5 h-5" /> Activities
                    </div>
                    <p className="text-sm text-green-900 dark:text-green-100">
                        Beach fishing, kite surfing, and historic fort walks nearby.
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="space-y-8">
                
                {/* Section 1: The Dog Zone */}
                <section>
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        🐕 The Off-Leash Rules (Gate 8-10)
                    </h2>
                    <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                        <p>
                            Many visitors get confused because Pallarenda is a long stretch of sand. You cannot just let your dog off anywhere.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-4">
                            <li><strong>The Main Beach:</strong> In stinger season (Nov–May) a net is installed here for families; it's currently out for the Dry. Dogs on-leash only in this zone.</li>
                            <li><strong>The Off-Leash Zone:</strong> You need to drive further down Cape Pallarenda Road. Look for the beach access points labeled <strong>Gate 8, 9, or 10</strong>.</li>
                            <li><strong>The Boundary:</strong> The zone ends near the Conservation Park gate. Do not take dogs past the gate into the Conservation Park (heavy fines apply).</li>
                        </ul>
                    </div>
                </section>

                {/* Duncan's Local Tip */}
                <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                        <Quote className="w-6 h-6 text-amber-700 mt-1 shrink-0" />
                        <div>
                            <h2 className="text-lg font-bold mb-2 text-amber-900">Duncan's Local Tip</h2>
                            <p className="text-amber-900/90 leading-relaxed text-sm mb-2">
                                Time your run with <strong>low tide</strong>. Pallarenda is dead-flat, so the water pulls back hundreds of metres and you get a footy-oval of hard sand for the dogs to tear across. On a King Tide the beach can almost disappear back to the tree line — check the tide chart before you drive out, otherwise you'll be sharing a metre of sand with every other dog owner in the northern beaches.
                            </p>
                            <p className="text-amber-900/90 leading-relaxed text-sm">
                                Park at Gate 9 for the sweet spot — it's the middle of the off-leash zone, so you've got room to walk either direction without hitting a boundary.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 2: Stinger Safety */}
                <section className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                        ⚠️ Important Safety Warning
                    </h2>
                    <p className="text-muted-foreground mb-4">
                        Unlike The Strand, the off-leash area here has <strong>no stinger nets</strong>. During the summer months (Nov–May), dangerous Box Jellyfish and Irukandji are present in these waters.
                    </p>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>Stick to sand play only during summer.</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>Carry vinegar in your car (locals always do).</span>
                        </div>
                    </div>
                </section>

                {/* Nearby Guides */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">Nearby Guides</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link to="/rowes-bay" className="block bg-card rounded-xl p-5 shadow-sm border hover:border-primary hover:shadow-md transition">
                            <h3 className="font-semibold mb-1">Rowes Bay</h3>
                            <p className="text-sm text-muted-foreground">Sunset strip & on-leash beach just south of Pallarenda.</p>
                        </Link>
                        <Link to="/beaches/saunders-beach" className="block bg-card rounded-xl p-5 shadow-sm border hover:border-primary hover:shadow-md transition">
                            <h3 className="font-semibold mb-1">Saunders Beach</h3>
                            <p className="text-sm text-muted-foreground">Sleepy northern beach community, 30 min drive.</p>
                        </Link>
                        <Link to="/guides/sunset-walks" className="block bg-card rounded-xl p-5 shadow-sm border hover:border-primary hover:shadow-md transition">
                            <h3 className="font-semibold mb-1">Sunset Walks</h3>
                            <p className="text-sm text-muted-foreground">Best foreshore & headland walks for golden hour.</p>
                        </Link>
                        <Link to="/dog-friendly" className="block bg-card rounded-xl p-5 shadow-sm border hover:border-primary hover:shadow-md transition">
                            <h3 className="font-semibold mb-1">Dog-Friendly Townsville</h3>
                            <p className="text-sm text-muted-foreground">Off-leash parks, dog cafés & pet-friendly stays.</p>
                        </Link>
                        <Link to="/guides/stinger-safety" className="block bg-card rounded-xl p-5 shadow-sm border hover:border-primary hover:shadow-md transition">
                            <h3 className="font-semibold mb-1">Stinger & Safety Guide</h3>
                            <p className="text-sm text-muted-foreground">Current net status, season dates & first aid.</p>
                        </Link>
                    </div>
                </section>

                {/* FAQ */}
                <section className="bg-card rounded-xl p-6 border">
                    <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
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
                        <a href="https://www.google.com/maps/search/?api=1&query=Pallarenda+Off+Leash+Dog+Beach" target="_blank" rel="noopener noreferrer">
                            <MapPin className="mr-2 w-4 h-4" /> Open in Google Maps
                        </a>
                    </Button>
                </div>

            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default PallarendaBeach;
