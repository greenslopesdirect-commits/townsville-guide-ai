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
import GuideQuickFacts from "@/components/GuideQuickFacts";
import { Clock, Car, MapPin, Droplets, Sun, CloudRain, TreePine, Baby, Dog, ArrowRight, AlertTriangle } from "lucide-react";

const LittleCrystalCreek = () => {
  const faqItems = [
    {
      question: "Is Little Crystal Creek free to visit?",
      answer: "Entry is free, but the day-use area is temporarily closed — check the Queensland Parks alert before travelling.",
    },
    {
      question: "Do you need a 4WD?",
      answer: "No, the road is sealed in normal conditions.",
    },
    {
      question: "Are there crocodiles?",
      answer: "No — this is a freshwater creek in the Paluma Range.",
    },
    {
      question: "Is it suitable year-round?",
      answer: "Normally accessible most of the year, but conditions vary during wet season and the area is currently closed.",
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
        title="Little Crystal Creek Townsville – Swimming, Access & Local Tips"
        description="Planning a visit to Little Crystal Creek near Townsville? Here's what to know about swimming, facilities, safety and the best time to go."
        canonical="https://www.townsvilleguide.com.au/little-crystal-creek-townsville"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* H1 & Intro */}
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Little Crystal Creek, Townsville – Local Guide
      </h1>

      {/* Current closure notice */}
      <div className="mb-6 rounded-xl border-2 border-amber-300 dark:border-amber-800/60 bg-amber-50 dark:bg-amber-900/20 p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-700 dark:text-amber-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h2 className="text-lg font-bold text-amber-900 dark:text-amber-200 mb-1">
              Current closure
            </h2>
            <p className="text-sm md:text-base text-amber-900/90 dark:text-amber-100/90 leading-relaxed">
              Little Crystal Creek day-use area is temporarily closed following severe weather damage.
              Queensland Parks currently lists the closure as continuing until 6 December 2026. Check the
              official park alert before travelling because reopening dates may change.
            </p>
            <a
              href="https://parks.desi.qld.gov.au/parks/paluma-range/alerts"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-amber-900 dark:text-amber-200 underline underline-offset-4"
            >
              View the Queensland Parks alert for Paluma Range National Park
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>


      {/* Hero Image */}
      <div className="mb-2">
        <img
          src="/little-crystal-creek-townsville.webp"
          alt="Aerial view of Little Crystal Creek stone arch bridge surrounded by rainforest"
          className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-lg"
          width={1600}
          height={900}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
      </div>
      <p className="text-xs text-muted-foreground mb-6">
        Courtesy of Tourism and Events Queensland
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mb-2">
        Little Crystal Creek is one of the most popular freshwater swimming spots near Townsville. Located in the Paluma Range, it's known for its historic stone arch bridge, clear rainforest water and peaceful natural setting.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        If you're planning a free day trip from Townsville, this is one of the most scenic options in North Queensland.
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        The visitor information below describes the site as it normally operates and applies after the day-use
        area reopens. Swimming, picnicking, parking and toilets are not available while the closure is in place.
      </p>
      <GuideQuickFacts className="mb-10" />
      <Separator className="mb-10" />

      {/* Section 1: Where */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Where Is Little Crystal Creek?</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Little Crystal Creek is located approximately 65–70 km north of Townsville within Paluma Range National Park.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          {[
            { icon: Clock, label: "Drive time", value: "~1 hour 15 min" },
            { icon: Car, label: "Road access", value: "Fully sealed road" },
            { icon: MapPin, label: "Vehicle type", value: "Standard vehicles OK" },
          ].map((item) => (
            <Card key={item.label} className="bg-muted/30">
              <CardContent className="p-4 flex items-center gap-3">
                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="font-medium text-sm text-foreground">{item.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <LocalInsightCard variant="tip" title="Before You Go">
          <p>Always check road and weather conditions during wet season before travelling.</p>
        </LocalInsightCard>
      </section>

      {/* Section 2: Swimming */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Can You Swim at Little Crystal Creek?</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Not at present — the day-use area is closed. When open, swimming is allowed and very popular. The creek forms natural pools beneath the historic stone bridge. Water is typically clear and cool, especially during dry season.
        </p>
        <LocalInsightCard variant="warning" title="Safety Note">
          <p>Check current conditions before entering the water. Avoid swimming after heavy rainfall, as currents and water levels can rise quickly.</p>
        </LocalInsightCard>
      </section>

      {/* Section 3: Best Time */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Best Time to Visit</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Dry Season (May–October)</h3>
              </div>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Clearer water</li>
                <li>• Lower flow</li>
                <li>• Cooler air</li>
                <li>• Best overall conditions</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <CloudRain className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Wet Season (Nov–April)</h3>
              </div>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Higher water levels</li>
                <li>• Possible road closures</li>
                <li>• Stronger currents</li>
                <li>• More insects</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 4: Facilities */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Facilities (when open)</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {["Picnic tables", "Public toilets", "Parking area", "Walking paths"].map((f) => (
            <Card key={f} className="bg-muted/30">
              <CardContent className="p-3 text-center">
                <p className="text-sm font-medium text-foreground">{f}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          There are no cafés or shops on site, so bring water and food.
        </p>
      </section>

      {/* Section 5: Kids */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Is It Good for Kids?</h2>
        <p className="text-muted-foreground leading-relaxed mb-2">
          Yes, but active supervision is essential. Some areas are shallow and suitable for paddling. Other areas are deeper and rocks can be slippery.
        </p>
        <p className="text-muted-foreground leading-relaxed">Water shoes are recommended.</p>
      </section>

      {/* Section 6: Dogs */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Is Little Crystal Creek Dog-Friendly?</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          No. Dogs are not permitted as it is located within a national park.
        </p>
        <Link to="/dog-friendly" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
          See our Dog-Friendly Townsville guide <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Section 7: Local Tips */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Local Tips</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>• Arrive early on weekends — parking fills quickly</li>
          <li>• Upper pools are usually quieter</li>
          <li>• Bring insect repellent in warmer months</li>
          <li>• The water is colder than coastal beaches</li>
          <li>• Combine with a visit to Paluma village for a full day trip</li>
        </ul>
      </section>

      {/* Section 8: FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border/40">
              <AccordionTrigger className="text-left text-base font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <Separator className="mb-10" />

      {/* Internal Links */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Explore More Around Townsville</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: "Free Things to Do in Townsville", to: "/guides/free-things" },
            { label: "Best Time to Visit Townsville", to: "/local-tips" },
            { label: "Magnetic Island Day Trip", to: "/guides/magnetic-island-day-trip" },
            { label: "Townsville Beaches Guide", to: "/beaches" },
          ].map((link) => (
            <Card key={link.to} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <Link to={link.to} className="flex items-center justify-between text-foreground font-medium hover:text-primary transition-colors">
                  {link.label}
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Local Authority Footer */}
      <p className="text-center text-sm text-muted-foreground py-6">
        Helping Townsville locals and visitors discover safe, enjoyable places across North Queensland.
      </p>
    </div>
  );
};

export default LittleCrystalCreek;
