import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Dog, ShieldAlert, Sparkles, Quote } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SaundersGallery from "@/components/SaundersGallery";
import AirportTransferCard from "@/components/AirportTransferCard";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is Saunders Beach good for stargazing?",
    a: "Yes — it's one of the best spots in the Townsville region for it. Because Saunders sits about 35 minutes north of the city, there's very little light pollution, and the open beach + tree-line combo gives you a clear southern sky. Bring a telescope or just a picnic rug.",
  },
  {
    q: "Are dogs allowed at Saunders Beach?",
    a: "Yes — Saunders is 100% dog-friendly. There's plenty of room for a high-energy run, especially at low tide when the sand flats are exposed.",
  },
  {
    q: "Is there a stinger net at Saunders Beach?",
    a: "No. There's no stinger enclosure at Saunders. It's beautiful for walks and wading at low tide, but during stinger season (Nov–May) stick to the seasonal nets at Pallarenda Main Beach or The Strand, or the year-round stinger-free Rockpool at The Strand for actual swimming.",
  },
  {
    q: "How far is Saunders Beach from Townsville?",
    a: "About 35 minutes' drive north of the Townsville CBD, and roughly the same from Townsville Airport. It's an easy day trip or a quiet base if you're staying up in the northern beaches.",
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
        { "@type": "ListItem", position: 3, name: "Saunders Beach", item: "https://www.townsvilleguide.com.au/beaches/saunders-beach" },
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

const SaundersBeach = () => {
  return (
    <>
      <SEOHead
        title="Saunders Beach Townsville | Local Guide, Photos & Tips"
        description="A local's guide to Saunders Beach, Townsville: 6km of unspoilt sand, dog-friendly low-tide runs, stargazing tips, and honest stinger-season safety advice."
        canonical="https://www.townsvilleguide.com.au/beaches/saunders-beach"
        ogImage="https://www.townsvilleguide.com.au/saunders-beach-blue-sky.webp"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />


      {/* Hero */}
      <section
        className="relative w-full h-[60vh] min-h-[420px] max-h-[640px] bg-cover bg-center"
        style={{ backgroundImage: "url('/saunders-beach-blue-sky.webp')" }}
        aria-label="Wide view of Saunders Beach under clear blue Dry Season skies"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        <div className="relative z-10 h-full max-w-5xl mx-auto px-4 flex flex-col justify-end pb-10">
          <div className="mb-4">
            <Button asChild variant="hero" size="sm">
              <Link to="/beaches">
                <ArrowLeft className="w-4 h-4" />
                Back to Beaches Guide
              </Link>
            </Button>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg leading-tight">
            Saunders Beach: The Quiet North Townsville Escape
          </h1>
          <p className="mt-3 text-lg md:text-xl text-white/95 drop-shadow max-w-2xl">
            6km of unspoilt sand, northern breezes, and the best stargazing in Townsville.
          </p>
          <div className="mt-3 flex items-center gap-2 text-white/90 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Saunders Beach, North Townsville QLD</span>
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-10">
        {/* Intro */}
        <section className="mb-8">
          <p className="text-lg text-foreground leading-relaxed">
            Tucked about 35 minutes north of the city, Saunders Beach is the kind of place
            Townsville locals quietly keep to themselves. No big resorts, no crowds—just a
            long, soft stretch of sand framed by a natural tree line and the Coral Sea.
          </p>
        </section>

        {/* Gallery */}
        <SaundersGallery />

        {/* Local Insider Tips */}
        <section className="mt-10 space-y-5" aria-labelledby="local-tips-heading">
          <h2 id="local-tips-heading" className="text-2xl md:text-3xl font-bold text-foreground">
            Local Insider Tips
          </h2>

          {/* Vibe */}
          <div className="rounded-xl border border-border bg-card p-5 md:p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">The Vibe</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Saunders is where locals go to escape the Strand crowds. It's about long
                  walks, rippled sand, and actual peace and quiet.
                </p>
              </div>
            </div>
          </div>

          {/* Safety */}
          <div className="rounded-xl border-2 border-amber-200 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-900/60 p-5 md:p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-5 h-5 text-amber-700 dark:text-amber-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Safety</h3>
                <p className="text-foreground/80 leading-relaxed">
                  <strong>Note: No stinger nets here.</strong> Beautiful for walks and wading
                  at low tide, but during stinger season (Nov–May), stick to the seasonal nets
                  at Pallarenda Main Beach or The Strand, or the year-round stinger-free
                  Rockpool at The Strand.
                </p>
              </div>
            </div>
          </div>

          {/* Dog Info */}
          <div className="rounded-xl border border-border bg-card p-5 md:p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                <Dog className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Dog Info 🐾</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">100% Dog Friendly.</strong> Plenty of
                  room for a high-energy run, especially at low tide when the sand flats are
                  exposed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Duncan's Local Tip */}
        <section className="mt-10 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <Quote className="w-6 h-6 text-amber-700 mt-1 shrink-0" />
            <div>
              <h2 className="text-lg font-bold mb-2 text-amber-900">Duncan's Local Tip</h2>
              <p className="text-amber-900/90 leading-relaxed text-sm mb-2">
                Do the drive in the late afternoon, not the middle of the day. You'll leave
                town around 4pm, hit Saunders as the light softens, and get the beach
                practically to yourself while the day-trippers are packing up. Time it with a
                falling tide so the sand flats are opening up as you walk.
              </p>
              <p className="text-amber-900/90 leading-relaxed text-sm">
                Then stay for the sky. Once the sun's down, there's almost no light pollution
                out here — I've had my best stargazing nights of the year at Saunders. Pack a
                jumper, a torch (red-filter if you have one), and something warm to drink.
              </p>
            </div>
          </div>
        </section>

        {/* Nearby Guides */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Nearby Guides</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/pallarenda-beach" className="block bg-card rounded-xl p-5 shadow-sm border hover:border-primary hover:shadow-md transition">
              <h3 className="font-semibold mb-1 text-foreground">Pallarenda Beach</h3>
              <p className="text-sm text-muted-foreground">Off-leash dog zone & quiet northern shoreline.</p>
            </Link>
            <Link to="/rowes-bay" className="block bg-card rounded-xl p-5 shadow-sm border hover:border-primary hover:shadow-md transition">
              <h3 className="font-semibold mb-1 text-foreground">Rowes Bay</h3>
              <p className="text-sm text-muted-foreground">Townsville's sunset strip, closer to town.</p>
            </Link>
            <Link to="/north-shore-townsville" className="block bg-card rounded-xl p-5 shadow-sm border hover:border-primary hover:shadow-md transition">
              <h3 className="font-semibold mb-1 text-foreground">North Shore Townsville</h3>
              <p className="text-sm text-muted-foreground">The suburb & lifestyle guide for Townsville's north.</p>
            </Link>
            <Link to="/dog-friendly" className="block bg-card rounded-xl p-5 shadow-sm border hover:border-primary hover:shadow-md transition">
              <h3 className="font-semibold mb-1 text-foreground">Dog-Friendly Townsville</h3>
              <p className="text-sm text-muted-foreground">Off-leash parks, dog cafés & pet-friendly stays.</p>
            </Link>
            <Link to="/guides/stinger-safety" className="block bg-card rounded-xl p-5 shadow-sm border hover:border-primary hover:shadow-md transition">
              <h3 className="font-semibold mb-1 text-foreground">Stinger & Safety Guide</h3>
              <p className="text-sm text-muted-foreground">Current net status, season dates & first aid.</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-10 bg-card rounded-xl p-6 border">
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


        {/* Airport Transfer */}
        <section className="mt-12 -mx-4 px-4 py-10 bg-slate-50 dark:bg-slate-900/40 rounded-xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-2 text-foreground">Planning Your Townsville Arrival?</h3>
            <p className="text-muted-foreground mb-6">
              Saunders Beach is about 35 minutes north of Townsville Airport. Skip the rental
              counter queue and pre-book a private transfer straight from the tarmac.
            </p>
            <AirportTransferCard proTipExtra="Heading to Saunders or Bluewater? Mention the suburb in your booking notes for an accurate quote." />
          </div>
        </section>
      </main>
    </>
  );
};

export default SaundersBeach;
