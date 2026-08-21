import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Mountain, Sunrise, Camera, Footprints, Thermometer, Heart, MapPin, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import castleHillImage from "@/assets/castle-hill-townsville-2.webp";

const FAQS = [
  {
    q: "Is Castle Hill worth visiting?",
    a: "Yes — it's Townsville's best-known panoramic lookout, it's free, and it's a short drive from the city centre. Locals use it daily for walks, sunrise and sunset, and it's an easy first stop for visitors deciding what to prioritise in a short trip.",
  },
  {
    q: "Can I drive to the top of Castle Hill?",
    a: "Yes. Castle Hill Road is sealed and runs to the summit, with parking close to the lookout areas — the simplest way to get the view without a walk.",
  },
  {
    q: "Can I walk up Castle Hill?",
    a: "Yes, using the Goat Track, the Cudtheringa Track, or Castle Hill Road itself. All routes are steep and exposed with limited shade — see our Walking Castle Hill guide for a full route comparison.",
  },
  {
    q: "How long should I allow at Castle Hill?",
    a: "A lookout visit by car can take as little as 20–60 minutes depending on how long you stay at the top. If you're walking up, allow considerably longer — walking time depends on your fitness, route and the heat, so there's no single figure. See our Walking Castle Hill guide for more detail.",
  },
  {
    q: "Is Castle Hill suitable for children?",
    a: "Driving to the summit is the easier option for most families. Walking suitability depends on a child's age, fitness and the weather on the day, since the tracks are steep and fully exposed — heat is usually the deciding factor.",
  },
  {
    q: "Is Castle Hill accessible for visitors with limited mobility?",
    a: "The walking tracks are steep and not suitable for all mobility levels. Driving to the summit is far more practical, with parking close to the lookout areas — though surfaces and access vary between individual viewing points, so check current details before visiting.",
  },
  {
    q: "Is sunrise or sunset better at Castle Hill?",
    a: "Both work well, and it depends what you want. Sunrise tends to bring calmer conditions, while sunset produces more dramatic colour over Cleveland Bay and Magnetic Island.",
  },
  {
    q: "What should I take to Castle Hill?",
    a: "Water, suitable shoes and sun protection if you're walking — the climb is steep and exposed. If you're driving to the summit, you need far less preparation.",
  },
  {
    q: "Is there parking at the Castle Hill summit?",
    a: "Yes — parking is available at the summit. Demand is high around sunrise and sunset, and temporary restrictions can apply, so arrive a little early at those times if you want a good spot.",
  },
];

const CastleHill = () => {
  return (
    <>
      <SEOHead
        title="Castle Hill Townsville – Local Guide | Townsville Guide"
        description="Castle Hill Townsville local guide — panoramic views, walking tracks, sunrise and sunset tips. Free attraction near the city centre."
        canonical="https://www.townsvilleguide.com.au/castle-hill"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.townsvilleguide.com.au/" },
              { "@type": "ListItem", position: 2, name: "Things to Do", item: "https://www.townsvilleguide.com.au/things-to-do" },
              { "@type": "ListItem", position: 3, name: "Castle Hill", item: "https://www.townsvilleguide.com.au/castle-hill" },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative">
          <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
            <img
              src={castleHillImage}
              alt="Castle Hill Lookout overlooking Townsville and Cleveland Bay"
              className="w-full h-full object-cover"
              width={1600}
              height={900}
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
            <p className="text-xs text-muted-foreground italic text-center mt-2 px-4">
              Castle Hill lookout with panoramic views over Townsville and Magnetic Island.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Intro */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Castle Hill Townsville – Local Guide
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Castle Hill is one of Townsville's most recognisable landmarks — a granite monolith rising 286 metres above the city with panoramic views over Cleveland Bay, Magnetic Island, and the Townsville skyline. It's a favourite local lookout for sunrise walks, sunset photos, and relaxed scenic drives.
            </p>
          </header>

          {/* Quick Visitor Info */}
          <GuideQuickFacts className="mb-4" />

          <a
            href="https://www.google.com/maps/search/?api=1&query=Castle+Hill+Lookout+Townsville+QLD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mb-12"
          >
            <MapPin className="w-4 h-4" aria-hidden="true" />
            Get Directions
          </a>

          {/* Why Visit */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Mountain className="w-6 h-6 text-primary" />
              Why Visit
            </h2>
            <ul className="space-y-3">
              {[
                "Best panoramic views in Townsville",
                "Free attraction close to the city",
                "Sunrise and sunset viewing",
                "Walking tracks or drive access",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Why Locals Love Castle Hill */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary" />
              Why Locals Love Castle Hill
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Castle Hill isn't just for tourists — it's a daily ritual for many Townsville locals. Morning walkers, runners, photographers, and families all use it as an easy escape with some of the best coastal views in North Queensland.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              It's one of the simplest ways to experience the Townsville lifestyle without leaving the city.
            </p>
          </section>

          {/* Walking Options */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Footprints className="w-6 h-6 text-primary" />
              Walking Options
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You can reach the summit on foot using one of Castle Hill's dedicated walking tracks —
              including the Goat Track and the Cudtheringa Track — or by walking the sealed Castle
              Hill Road, which is shared with vehicles and cyclists. Either way the climb is steep
              and exposed, with limited shade.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Preparation matters: carry water, wear suitable shoes, avoid the middle of the day and
              check current Townsville City Council notices, because tracks and road access can close
              temporarily for repairs, weather or events.
            </p>
            <Button asChild>
              <Link to="/guides/walking-castle-hill">Read the Walking Castle Hill Guide</Link>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-primary" />
              Bring water — it gets hot quickly in North Queensland. See our{" "}
              <Link to="/guides/beat-the-heat" className="text-primary hover:underline">
                Beat the Heat guide
              </Link>
              .
            </p>
          </section>

          {/* Children */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Is Castle Hill Suitable for Children?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For most families, driving to the summit is the easier option. Walking suitability
              depends on a child's age, fitness and the weather on the day — the tracks are steep and
              fully exposed, and heat is usually the deciding factor.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              More family planning ideas are in our{" "}
              <Link to="/townsville-with-kids" className="text-primary hover:underline">
                Townsville with Kids guide
              </Link>
              , and there are indoor alternatives in our{" "}
              <Link to="/guides/rainy-day-activities" className="text-primary hover:underline">
                rainy day activities guide
              </Link>
              .
            </p>
          </section>

          {/* Accessibility */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Accessibility</h2>
            <p className="text-muted-foreground leading-relaxed">
              The walking tracks are steep and are not suitable for all mobility levels. Visitors who
              cannot manage steep terrain will find driving to the summit far more practical, with
              parking close to the lookout areas. Surfaces and lookout access vary between viewing
              points, so check current details before visiting — see{" "}
              <Link to="/accessible-townsville" className="text-primary hover:underline">
                Accessible Townsville
              </Link>{" "}
              for more.
            </p>
          </section>

          {/* Best Time to Visit */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Sunrise className="w-6 h-6 text-primary" />
              Best Time to Visit
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Early morning and sunset are the most comfortable times, especially during warmer months. Midday heat can be intense, particularly on the exposed walking tracks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Sunrise often brings calm conditions, while sunset offers spectacular colours over Cleveland Bay and Magnetic Island.
            </p>
          </section>

          {/* Local Tips */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">🗺️ Local Tips</h2>
            <Card className="border-2 bg-primary/5">
              <CardContent className="p-6 space-y-3">
                {[
                  "Parking fills at sunset — arrive a bit early for the best spot.",
                  "Sea breeze is usually cooler at the summit.",
                  "Combine with a Strand visit or Magnetic Island day trip.",
                  "Early morning or evening is most comfortable.",
                ].map((tip, i) => (
                  <p key={i} className="text-muted-foreground flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>{tip}</span>
                  </p>
                ))}
              </CardContent>
            </Card>
          </section>

          {/* Photography Tip */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Camera className="w-6 h-6 text-primary" />
              Photography Tip
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Castle Hill is one of the best photo spots in Townsville. Wide coastal views, city skyline perspectives, and changing light conditions make it ideal for travel photography.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Sunset usually produces the most dramatic colours.
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-12" aria-labelledby="castle-hill-faq">
            <h2
              id="castle-hill-faq"
              className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2"
            >
              <HelpCircle className="w-6 h-6 text-primary" />
              Castle Hill Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`} className="border-border/40">
                  <AccordionTrigger className="text-left text-base font-semibold hover:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Combine With Nearby Stops */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Combine Castle Hill With These Nearby Stops</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you're visiting Castle Hill, these nearby attractions pair perfectly:
            </p>
            <ul className="space-y-2">
              {[
                { text: "The Strand beachfront (walking, swimming, cafés)", to: "/the-strand" },
                { text: "Magnetic Island day trip from the nearby ferry terminal", to: "/guides/magnetic-island-day-trip" },
                { text: "Free things to do around the city centre", to: "/guides/free-things" },
                { text: "Sunset viewing at Rowes Bay", to: "/rowes-bay" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <Link to={item.to} className="hover:text-primary hover:underline">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Explore More of Townsville */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Explore More of Townsville</h2>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link to="/things-to-do">Things to Do</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/guides/magnetic-island-day-trip">Magnetic Island Guide</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/the-strand">The Strand Guide</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/local-tips">Local Tips</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/guides/walking-castle-hill">Walking Castle Hill</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/first-time-in-townsville">First Time in Townsville</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/townsville-in-one-day">Townsville in One Day</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/townsville-without-a-car">Townsville Without a Car</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/guides/sunset-walks">Sunset Walks</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/accessible-townsville">Accessible Townsville</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CastleHill;
