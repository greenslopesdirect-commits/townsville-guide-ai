import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import LocalInsightCard from "@/components/LocalInsightCard";
import SEOHead from "@/components/SEOHead";
import { MapPin, Clock, Fish, Calendar, AlertTriangle, Sun, CloudRain, ArrowRight, Anchor } from "lucide-react";
import { Helmet } from "react-helmet";

const GreatBarrierReef = () => {
  const faqItems = [
    {
      question: "Can you visit the Great Barrier Reef from Townsville?",
      answer: "Yes — several tour operators run full-day trips from Townsville Marina to outer reef sites, including snorkelling and diving options.",
    },
    {
      question: "How long is a reef tour from Townsville?",
      answer: "Most full-day tours run for 7–8 hours, including travel time to the reef and time in the water.",
    },
    {
      question: "Is it better to visit from Cairns or Townsville?",
      answer: "Both offer excellent reef access. Cairns has more operators and larger boats, while Townsville tends to offer a quieter, less crowded experience with smaller group sizes.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
      <SEOHead
        title="Great Barrier Reef from Townsville – Tours, Tips & Best Time to Visit"
        description="Planning to visit the Great Barrier Reef from Townsville? Learn what to expect, best months to go, tour length, and practical local tips."
        canonical="https://www.townsvilleguide.com.au/great-barrier-reef-townsville"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* H1 */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        Great Barrier Reef Tours from Townsville – What to Expect
      </h1>

      <p className="text-lg text-muted-foreground leading-relaxed mb-2">
        Townsville offers direct access to the Central Section of the Great Barrier Reef via world-class day tours and dive operators departing from the city marina. While Cairns is the more commercialised gateway, a Townsville reef tour provides a quieter, more exclusive experience—featuring pristine outer reef sites, the globally unique Museum of Underwater Art (MOUA), and the world-famous SS Yongala shipwreck.
      </p>
      <p className="text-base text-muted-foreground leading-relaxed mb-6">
        If you're visiting Townsville and want to see the reef, a full-day tour is one of the most rewarding things you can do.
      </p>

      <Separator className="my-8" />

      {/* Quick Visitor Snapshot */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Quick Visitor Snapshot</h2>
        <Card className="bg-muted/30 border-border/50">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Anchor className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Departure</p>
                  <p className="text-sm text-muted-foreground">Townsville Marina</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Tour Length</p>
                  <p className="text-sm text-muted-foreground">Full day (usually 7–8 hours)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Fish className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Activities</p>
                  <p className="text-sm text-muted-foreground">Snorkelling outer reefs, diving the SS Yongala wreck, exploring MOUA sculptures</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Best Months</p>
                  <p className="text-sm text-muted-foreground">May–October (calmer conditions)</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground">
                <strong>Summer note:</strong> Wet season may affect sea conditions and tour availability.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Is It Worth Visiting? */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Is It Worth Visiting from Townsville?</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Yes — especially if you prefer a less crowded reef experience. Tours from Townsville visit genuine outer reef sites 
          with excellent coral coverage and marine life, and the smaller group sizes mean more time in the water.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Weather plays a bigger role in summer, so dry season visits tend to offer the best conditions. 
          If you're prone to seasickness, it's worth considering calmer months or taking motion sickness medication.
        </p>
      </section>

      {/* Compared to Cairns */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">What's Different Compared to Cairns?</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Fewer operators — a more personalised experience</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Less mass tourism — quieter reef sites</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Smaller boats — often more comfortable for families</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Access to world-renowned specific sites like the Coral Greenhouse and Ocean Sentinels at John Brewer Reef.</span>
          </li>
        </ul>
      </section>

      {/* Townsville's Signature Reef Experiences */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Townsville's Signature Reef Experiences</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>Museum of Underwater Art (MOUA):</strong> Located at John Brewer Reef, this is the Southern Hemisphere's only underwater museum. Snorkellers and divers can explore the stunning 'Coral Greenhouse' and 'Ocean Sentinels' sculptures that double as thriving artificial reefs.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span><strong>The SS Yongala Wreck:</strong> Rated as one of the top wreck dives in the world. Sitting within the marine park, it is an absolute magnet for megafauna like giant trevally, turtles, and manta rays (recommended for experienced certified divers).</span>
          </li>
        </ul>
      </section>

      {/* Best Time of Year */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Best Time of Year</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-border/50">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <Sun className="w-5 h-5 text-amber-500" />
                <h3 className="font-semibold text-foreground">Dry Season (May–October)</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Calmer seas and clearer visibility</li>
                <li>• More reliable tour departures</li>
                <li>• Cooler, more comfortable boat trips</li>
                <li>• The absolute prime window for flat seas, 100% underwater visibility, and comfortable day-trip boat travel.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-border/50">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <CloudRain className="w-5 h-5 text-blue-500" />
                <h3 className="font-semibold text-foreground">Wet Season (Nov–April)</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Storms possible — tours may be cancelled</li>
                <li>• Rougher seas on some days</li>
                <li>• Stinger season does not affect outer reef snorkelling the same way as beaches</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What to Bring */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">What to Bring</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Reef-safe sunscreen</span></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Hat & sunglasses</span></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Light jacket (it can be windy on the boat)</span></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Motion sickness tablets (if unsure)</span></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Water bottle</span></li>
        </ul>
      </section>

      {/* Local Tip */}
      <div className="mb-10">
        <LocalInsightCard title="Local Tip" variant="tip">
          <p>Book reef tours at least 2–3 days in advance during school holidays.</p>
        </LocalInsightCard>
      </div>

      {/* Combine With */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Combine With These Nearby Experiences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-5 text-center">
              <h3 className="font-semibold text-foreground mb-2">Magnetic Island</h3>
              <p className="text-sm text-muted-foreground mb-3">A 20-minute ferry to beaches, wildlife, and hiking.</p>
              <Button asChild variant="outline" size="sm" className="gap-1">
                <Link to="/guides/magnetic-island-day-trip">View Guide <ArrowRight className="w-3 h-3" /></Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-5 text-center">
              <h3 className="font-semibold text-foreground mb-2">Townsville Beaches</h3>
              <p className="text-sm text-muted-foreground mb-3">Swimming, stinger nets, and coastal walks.</p>
              <Button asChild variant="outline" size="sm" className="gap-1">
                <Link to="/beaches">View Beaches <ArrowRight className="w-3 h-3" /></Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-5 text-center">
              <h3 className="font-semibold text-foreground mb-2">Little Crystal Creek</h3>
              <p className="text-sm text-muted-foreground mb-3">Temporarily closed following severe weather damage — check current access.</p>
              <Button asChild variant="outline" size="sm" className="gap-1">
                <Link to="/little-crystal-creek-townsville">Explore Guide <ArrowRight className="w-3 h-3" /></Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8" />

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left text-foreground font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Back link */}
      <div className="text-center">
        <Button asChild variant="outline" className="gap-2">
          <Link to="/things-to-do">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Things to Do
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default GreatBarrierReef;
