import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ArrowRight,
  Sun,
  Home,
  TrendingDown,
  HardHat,
  MapPin,
  Shield,
  CloudRain,
  ThermometerSun,
  Waves,
  Plane,
  Dog,
  Calendar,
  AlertTriangle,
  Building2,
  Zap,
  Heart,
} from "lucide-react";
import LocalInsightCard from "@/components/LocalInsightCard";

const suburbs = [
  {
    title: "The Professional Choice",
    name: "Annandale",
    description:
      "Close to the Uni, Hospital, and Army Barracks. Leafy, established, and family-oriented. A top pick for Defence families and healthcare workers relocating to Townsville.",
    icon: <Building2 className="w-5 h-5" />,
    highlights: ["James Cook University", "Townsville University Hospital", "Lavarack Barracks", "Family-friendly parks"],
  },
  {
    title: "The Coastal Classic",
    name: "North Shore / Bushland Beach",
    description:
      "Modern living with a sea breeze. Ideal for young families and dog owners. New estates are going up fast, and the community vibe is strong.",
    icon: <Waves className="w-5 h-5" />,
    highlights: ["Modern estates", "Off-leash dog beaches", "Growing retail precinct", "Sea breeze lifestyle"],
  },
  {
    title: "The Rising Star",
    name: "Garbutt",
    badge: "Local's Pick",
    description:
      "Centrally located, high-yield potential, and minutes from the Airport and CBD. Garbutt is where savvy investors and first-home buyers are looking in 2026.",
    icon: <TrendingDown className="w-5 h-5" />,
    highlights: ["5 min to Airport", "10 min to CBD", "High rental yield", "Infrastructure upgrades"],
  },
  {
    title: "The Beachfront Icon",
    name: "The Strand / North Ward",
    description:
      "High-density, high-energy, and the heart of Townsville's lifestyle. Walk to restaurants, the beach, and weekend markets. Premium pricing but unbeatable convenience.",
    icon: <Sun className="w-5 h-5" />,
    highlights: ["Beachfront living", "Cafés & restaurants", "Weekend markets", "Premium apartments"],
  },
];

const infrastructure = [
  {
    name: "CopperString 2032",
    status: "Construction Ramping Up",
    description:
      "The $5B+ high-voltage transmission line connecting the North West Minerals Province to the national grid. Construction is driving demand for logistics, trades, and support services across the region.",
    icon: <Zap className="w-5 h-5 text-amber-500" />,
  },
  {
    name: "Townsville University Hospital Expansion",
    status: "Active Recruitment",
    description:
      "A massive healthcare expansion is fuelling one of the largest recruitment drives in North Queensland. Nursing, allied health, and specialist roles are in high demand through mid-2026.",
    icon: <Heart className="w-5 h-5 text-rose-500" />,
  },
  {
    name: "Lansdown Eco-Industrial Precinct",
    status: "Planning & Early Works",
    description:
      "The future of green manufacturing in the North. Lansdown is positioning Townsville as a national leader in hydrogen, critical minerals processing, and sustainable industry.",
    icon: <HardHat className="w-5 h-5 text-emerald-500" />,
  },
];

const MovingToTownsville = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the median house price in Townsville in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The median house price in Townsville is approximately $606,000 as of April 2026, driven by infrastructure investment and population growth.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Townsville rental market competitive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, with a rental vacancy rate of just 0.9%, Townsville's rental market is critically tight. Applicants should have references and bond ready before arriving.",
        },
      },
      {
        "@type": "Question",
        name: "What are the best suburbs to live in Townsville?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Popular suburbs include Annandale (families/professionals), North Shore/Bushland Beach (coastal living), Garbutt (investors/first-home buyers), and The Strand/North Ward (lifestyle/beachfront).",
        },
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Moving to Townsville 2026: The Ultimate Relocation & Suburb Guide"
        description="Planning a move to North Queensland? Get the 2026 local's guide to Townsville suburbs, rental market survival (0.9% vacancy), job growth, and tropical living tips."
        canonical="https://www.myaussieguide.com.au/moving-to-townsville"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-background pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-3 sm:px-4 max-w-5xl space-y-12">
          {/* Back */}
          <Link to="/">
            <Button variant="ghost" className="group" aria-label="Back to home">
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>

          {/* Hero */}
          <header className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <MapPin className="w-4 h-4" />
              Relocation Hub — 2026
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Moving to Townsville in 2026
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your "Local-Verified" guide to navigating the North Queensland property market, infrastructure boom, and tropical lifestyle.
            </p>

            {/* Key Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4">
              {[
                { icon: <Sun className="w-5 h-5" />, label: "300+ Days of Sun", sublabel: "Per year" },
                { icon: <Home className="w-5 h-5" />, label: "$606,000", sublabel: "Median House (Apr 2026)" },
                { icon: <TrendingDown className="w-5 h-5" />, label: "0.9% Vacancy", sublabel: "Rental Market: Critical" },
                { icon: <HardHat className="w-5 h-5" />, label: "$40B+ Pipeline", sublabel: "Regional Projects" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-4 rounded-2xl bg-card border-2 hover:border-primary/30 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-2">
                    {stat.icon}
                  </div>
                  <p className="font-semibold text-foreground text-sm sm:text-base">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
                </div>
              ))}
            </div>
          </header>

          {/* Market Snapshot */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">The 2026 Market Snapshot</h2>
            <p className="text-muted-foreground leading-relaxed">
              Townsville is currently experiencing a generational growth spurt. With the CopperString 2032 project and hospital expansions in full swing, the rental market is tight. If you're moving here, you need to be "Rental Ready" before you land.
            </p>
            <LocalInsightCard variant="tip" title="🏠 Rental Survival Tip">
              <p>
                Secure your references and have your digital "bond pack" ready. Applications are moving in under 48 hours. Contact agents before you arrive and be prepared to apply sight-unseen for high-demand properties.
              </p>
            </LocalInsightCard>
          </section>

          {/* Suburb Deep Dives */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Suburb Deep Dives</h2>
            <p className="text-muted-foreground">
              Every suburb has its own personality. Here's where the locals would steer you based on your lifestyle.
            </p>
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              Townsville offers a blend of rugged coastal beauty and modern convenience — from the sunset views at Castle Hill to the growing family hubs in the North.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {suburbs.map((suburb, i) => (
                <Card
                  key={i}
                  className="hover:shadow-lg transition-shadow border-t-4 border-t-primary flex flex-col"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-1 rounded-full">
                        {suburb.title}
                      </span>
                      {suburb.badge && (
                        <Badge variant="secondary" className="text-xs">
                          {suburb.badge}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                        {suburb.icon}
                      </div>
                      {suburb.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-3 flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {suburb.description}
                    </p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {suburb.highlights.map((h, j) => (
                        <div key={j} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <span className="text-primary font-bold">•</span>
                          {h}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Infrastructure Tracker */}
          <section className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              The Infrastructure Tracker (2026 Update)
            </h2>
            <p className="text-muted-foreground">
              These are the mega-projects driving Townsville's growth — and the reason the job market is booming.
            </p>
            <div className="space-y-4">
              {infrastructure.map((project, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-xl border-2 bg-card hover:border-primary/30 transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-muted flex-shrink-0">{project.icon}</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-foreground">{project.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tropical Survival 101 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Tropical Survival 101
            </h2>
            <p className="text-muted-foreground">
              Townsville is paradise — but it comes with a learning curve. Here's what every newcomer needs to know.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="flex items-start gap-3 p-5 rounded-xl bg-card border-2 hover:border-primary/30 transition-colors">
                <Waves className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Stinger Safety</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Marine stingers are present November–May. Always swim inside stinger enclosures at The Strand or Pallarenda. Read our{" "}
                    <Link to="/guides/stinger-safety" className="text-primary hover:underline font-medium">
                      Stinger Safety Guide
                    </Link>{" "}
                    before your first beach day.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-5 rounded-xl bg-card border-2 hover:border-primary/30 transition-colors">
                <CloudRain className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Cyclone Readiness</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    It's part of life in North Queensland — prepare, don't panic. Keep a kit ready during the wet season (Nov–Apr) and follow the Bureau of Meteorology for official updates.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-5 rounded-xl bg-card border-2 hover:border-primary/30 transition-colors">
                <ThermometerSun className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">The Heat</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Why we do everything before 9:00 AM. The UV is extreme year-round, so SPF 50+, a hat, and hydration are non-negotiable. Schedule outdoor activities for early morning or after 4 PM.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">Start Exploring</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              <Button asChild variant="outline" className="w-full justify-start gap-2 h-auto py-3">
                <Link to="/flights">
                  <Plane className="w-4 h-4 flex-shrink-0" />
                  View our Flights Guide
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start gap-2 h-auto py-3">
                <Link to="/dog-friendly">
                  <Dog className="w-4 h-4 flex-shrink-0" />
                  Dog-Friendly Townsville
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start gap-2 h-auto py-3">
                <Link to="/events">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  Full Events Calendar
                </Link>
              </Button>
            </div>
          </section>

          {/* Authority Footer */}
          <p className="text-center text-xs text-muted-foreground pt-4 pb-2">
            A local's perspective on moving to Townsville — Last Verified April 2026.
          </p>
        </div>
      </div>
    </>
  );
};

export default MovingToTownsville;
