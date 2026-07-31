import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import PartnerEnquiryForm from "@/components/PartnerEnquiryForm";
import {
  Handshake,
  Mail,
  MapPin,
  Check,
  Users,
  TrendingUp,
  Star,
  Trophy,
} from "lucide-react";

// -----------------------------------------------------------------------------
// Editable stats
// -----------------------------------------------------------------------------
const STATS: { label?: string; value: string; note: string; Icon: typeof Users }[] = [
  {
    value: "Growing fast",
    note: "Seen by thousands of searches every month for Townsville events, beaches, safety info and Cowboys game day.",
    Icon: TrendingUp,
  },
  {
    value: "Hyper-local, not generic",
    note: "Every guide written and kept current by a real Townsville local — not scraped or AI-generated content.",
    Icon: MapPin,
  },
  {
    value: "Ground floor",
    note: "We're hand-picking a small number of Founding Partners during our early growth phase — this is the best time to lock in launch pricing.",
    Icon: Star,
  },
];

type TierId = "community" | "founding" | "gameday";

const scrollToForm = (tier: TierId) => {
  window.dispatchEvent(new CustomEvent("preselect-partner-tier", { detail: tier }));
  const el = document.getElementById("apply-form");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// -----------------------------------------------------------------------------
// Pricing tiers
// -----------------------------------------------------------------------------
const TIERS: {
  id: TierId;
  name: string;
  price: string;
  priceNote: string;
  tagline: string;
  features: string[];
  ctaLabel: string;
  highlight: boolean;
}[] = [
  {
    id: "community",
    name: "Community Listing",
    price: "Free",
    priceNote: "for locals & small events",
    tagline: "A basic line on the map for the good stuff already happening around town.",
    features: [
      "One paragraph listing (no photos)",
      "Business or community event",
      "Appears in the relevant guide page",
      "Reviewed & approved by Duncan personally",
    ],
    ctaLabel: "Apply for a Community Listing",
    highlight: false,
  },
  {
    id: "founding",
    name: "Founding Partner",
    price: "$49",
    priceNote: "per month · introductory rate",
    tagline:
      "Featured card placement styled like the restaurant cards on the Food & Drink page — a proper spot on the guide.",
    features: [
      "Featured card with one hero photo",
      "Placement in relevant guide pages (Food, Beaches, Accommodation, etc.)",
      "Short write-up in Duncan's own voice",
      "\"Ask the AI about this place\" button on your card",
      "Cancel anytime — no lock-in",
    ],
    ctaLabel: "Apply as a Founding Partner",
    highlight: true,
  },
  {
    id: "gameday",
    name: "Game Day / Peak Placement",
    price: "$99",
    priceNote: "per month · or flat fee per major event",
    tagline:
      "Sponsor placement on the pages that spike hardest — Cowboys game day and the Events calendar.",
    features: [
      "Sponsor spot on the Cowboys Game Day guide",
      "Featured slot on the Events calendar page",
      "Ideal for pubs, function venues, tour operators, transfer services",
      "Per-event pricing available (V8 Supercars, NRL blockbusters, etc.)",
      "Priority scheduling around confirmed peak weekends",
    ],
    ctaLabel: "Enquire about Peak Placement",
    highlight: false,
  },
];

const Advertise = () => {
  return (
    <>
      <SEOHead
        title="Partner With Us | Townsville Guide"
        description="Partner with Townsville Guide — the fastest-growing local guide for Townsville events, beaches, safety info and Cowboys game day. Free community listings, $49/mo Founding Partner spots, and Game Day placements."
        canonical="https://www.townsvilleguide.com.au/advertise"
      />
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Partner With Townsville Guide",
            "url": "https://www.townsvilleguide.com.au/advertise",
            "description": "Partner tiers and pricing for Townsville Guide — Community, Founding Partner, and Game Day placements curated by Duncan Ross."
          }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-5xl">

            {/* Header */}
            <header className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Handshake className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Partner With Townsville's Independent Local Guide
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Townsville Guide is in its mid-2026 growth phase — a personal, local-first guide to Townsville that's picking up serious momentum through the July dry season, with the Queensland Derby (Cowboys vs Broncos, July 25) coming up as the next big game-day weekend. If you run something worth telling people about, there's a spot for you here.
              </p>
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Curated personally by Duncan Ross — Townsville local</span>
              </div>
            </header>

            {/* Stats */}
            <section aria-labelledby="stats-heading" className="mb-14">
              <h2 id="stats-heading" className="sr-only">Audience & reach</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {STATS.map(({ label, value, note, Icon }) => (
                  <Card key={value} className="border-2 border-border/40">
                    <CardContent className="p-5">
                      {label && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Icon className="w-4 h-4 text-primary" />
                          <span>{label}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 mb-2">
                        {!label && <Icon className="w-5 h-5 text-primary flex-shrink-0" />}
                        <div className="text-xl font-bold text-foreground leading-snug">{value}</div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{note}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4 max-w-2xl mx-auto">
                Townsville's fastest-growing independent local guide — built by a local, for locals and visitors alike.
              </p>
            </section>

            {/* Pricing Tiers */}
            <section aria-labelledby="tiers-heading" className="mb-16">
              <div className="text-center mb-8">
                <h2 id="tiers-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Three simple ways to partner
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Pick the level that fits — start with a free listing, or step up when you want proper featured placement.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {TIERS.map((tier) => (
                  <Card
                    key={tier.id}
                    className={
                      tier.highlight
                        ? "border-2 border-primary shadow-lg relative flex flex-col"
                        : "border-2 border-border/40 flex flex-col"
                    }
                  >
                    {tier.highlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        Most popular
                      </div>
                    )}
                    <CardContent className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">{tier.name}</h3>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                        <span className="text-sm text-muted-foreground">{tier.priceNote}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {tier.tagline}
                      </p>
                      <ul className="space-y-2 mb-6 text-sm text-foreground flex-1">
                        {tier.features.map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{f}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant={tier.highlight ? "default" : "outline"}
                        className="w-full mt-auto"
                        onClick={() => scrollToForm(tier.id)}
                      >
                        {tier.ctaLabel}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Founding Partner card example */}
            <section aria-labelledby="example-heading" className="mb-16">
              <div className="text-center mb-6">
                <h2 id="example-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  What a Founding Partner listing looks like
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Same style as the restaurant cards on the Food & Drink page — a hero photo, a short write-up in Duncan's voice, and an "Ask the AI" button.
                </p>
              </div>

              <div className="max-w-sm mx-auto">
                <Card className="overflow-hidden border-2 border-primary/30 shadow-lg">
                  <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center">
                    <div className="text-center px-4">
                      <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">
                        Example placement
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Your hero photo goes here
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <div className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-semibold px-2 py-0.5 rounded-full mb-2">
                      <Star className="w-3 h-3" />
                      Founding Partner
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      Your Business Name
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      A short, honest write-up in Duncan's voice — what you do, why locals rate it, and the one thing a visitor should know before they walk in. Same tone as the rest of the guide, no ad-speak.
                    </p>
                    <Button variant="outline" size="sm" className="w-full" disabled>
                      <span className="mr-2">🤖</span>
                      Ask AI about this place
                    </Button>
                  </CardContent>
                </Card>
                <p className="text-xs text-center text-muted-foreground mt-3">
                  Preview only — your live card appears on relevant guide pages.
                </p>
              </div>
            </section>

            {/* Game Day highlight strip */}
            <section className="mb-16">
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Cowboys home games & V8 Supercars weekends
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      These are the two biggest traffic spikes on the site — locals and visitors specifically checking the Game Day guide and Events calendar to plan their day. If your venue benefits from that crowd — pubs, function rooms, transfers, accommodation — Peak Placement puts your business in front of them at exactly the moment they're deciding where to go.
                    </p>
                  </div>
                  <div className="md:flex-shrink-0">
                    <Button variant="default" onClick={() => scrollToForm("gameday")}>
                      Enquire
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Enquiry Form */}
            <section id="apply-form" className="mb-16 scroll-mt-24">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center gap-2 mb-3 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Apply online
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Send your enquiry straight through here. Duncan will review it personally and reply by email within 1–2 business days.
                </p>
              </div>
              <div className="max-w-2xl mx-auto">
                <PartnerEnquiryForm />
              </div>
            </section>

            {/* Back to home */}
            <div className="text-center pt-8 border-t border-border">
              <Button variant="outline" size="lg" asChild>
                <Link to="/">← Back to Home</Link>
              </Button>
            </div>

          </div>
        </main>
      </div>
    </>
  );
};

export default Advertise;
