import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import LocalInsightCard from "@/components/LocalInsightCard";
import SEOHead from "@/components/SEOHead";
import MapLocationCard from "@/components/MapLocationCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TreePine, Users, Clock, Heart, HelpCircle, Check, Utensils, MapPin, Car, Sun } from "lucide-react";
import billabongHero from "@/assets/billabong-sanctuary4.webp";
import billabongKangaroo from "@/assets/billabong-sanctuary3.webp";
import billabongTurtle from "@/assets/billabong-sanctuary2.webp";

const BillabongSanctuary = () => {
  const showSchedule = [
    { time: "09:15 AM", event: "Koala Feeding" },
    { time: "09:30 AM", event: "Cassowary Feeding" },
    { time: "09:45 AM", event: "Wombat Experience" },
    { time: "11:00 AM", event: "Reptile Experience" },
    { time: "11:30 AM", event: "Dingo Walk / Meet the Meerkats" },
    { time: "12:00 PM", event: "Crocodile Feeding" },
    { time: "01:00 PM", event: "Free-Flight Bird Show" },
    { time: "01:30 PM", event: "Turtle Feeding" },
    { time: "02:00 PM", event: "Meerkat Encounter" },
    { time: "03:15 PM", event: "Crocodile Feeding (Final Session)" },
  ];

  const faqs = [
    {
      question: "How long should I spend at Billabong Sanctuary?",
      answer: "Most visitors spend 2–3 hours exploring. If you want to attend all the scheduled talks and feeding shows, allow closer to 3–4 hours."
    },
    {
      question: "Can you hold a koala at Billabong Sanctuary?",
      answer: "Yes — Billabong Sanctuary is one of the few places in Townsville where you can hold a koala. An additional fee usually applies, and photos are often included. Availability may vary for animal welfare reasons, so booking ahead is recommended during peak seasons."
    },
    {
      question: "Is Billabong Sanctuary suitable for young children?",
      answer: "Absolutely. The park is designed to be family-friendly with flat paths, shaded areas, and interactive animal encounters like kangaroo feeding that kids love."
    },
    {
      question: "What's the best time of day to visit?",
      answer: "Arrive early in the morning, especially during the warmer months. Animals are more active, it's cooler for walking, and you'll have time to catch all the scheduled shows."
    },
    {
      question: "Is there food available at the park?",
      answer: "Yes, there's a café on-site with refreshments. You can also bring your own food and use the picnic and BBQ areas throughout the park."
    }
  ];

  return (
    <>
      <SEOHead
        title="Billabong Sanctuary Townsville – Wildlife Experience Guide"
        description="Local guide to Billabong Sanctuary Townsville — hold a koala, feed kangaroos, watch croc shows and enjoy a family-friendly wildlife day out."
        canonical="https://www.myaussieguide.com.au/billabong-sanctuary"
        ogType="article"
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.myaussieguide.com.au/" },
            { "@type": "ListItem", "position": 2, "name": "Billabong Sanctuary", "item": "https://www.myaussieguide.com.au/billabong-sanctuary/" }
          ]
        }) }}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Billabong Sanctuary Townsville – Wildlife Experience Guide
        </h1>

        {/* Hero Image */}
        <img
          src={billabongHero}
          alt="Billabong Sanctuary Townsville entrance sign surrounded by lush palm trees"
          className="rounded-xl shadow-lg w-full h-[400px] md:h-[500px] object-cover mb-2"
        />
        <p className="text-xs text-muted-foreground italic text-center mb-8">
          Welcome to Billabong Sanctuary — Looking lush and vibrant in May 2026.
        </p>

        {/* Intro */}
        <section className="mb-8">
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Billabong Sanctuary is Townsville's main wildlife park where visitors can experience native Australian animals up close, including the popular koala holding experience. Located about 20 minutes south of Townsville, it offers a relaxed bush setting focused on education, conservation and family-friendly encounters.
          </p>
        </section>

        {/* Local May 2026 Update */}
        <section className="mb-8">
          <LocalInsightCard title="Local Update (May 4, 2026)" variant="tip">
            <p>
              We visited yesterday and the park is in peak condition. The morning air is perfect for the <strong>9:45 AM Wombat experience</strong>, and the water levels are high, making the <strong>1:30 PM Turtle feeding</strong> particularly active!
            </p>
          </LocalInsightCard>
        </section>

        {/* Quick Visitor Info */}
        <section className="mb-8">
          <Card className="bg-muted/30 shadow-sm">
            <CardContent className="p-5 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Quick Visitor Info</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: "📍", text: "About 20 minutes south of Townsville CBD" },
                  { icon: "⏱", text: "Typical visit: 2–3 hours" },
                  { icon: "👨‍👩‍👧", text: "Best for: Families, wildlife lovers, first-time visitors" },
                  { icon: "🐨", text: "Koala holding available (additional fee usually applies)" },
                  { icon: "☀️", text: "Best time: Early morning in warmer months" },
                  { icon: "🚗", text: "Easy parking on-site" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                    <span className="text-sm text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why Visitors Go */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Why Visitors Go</h2>
          </div>
          <ul className="space-y-2 mb-4">
            {[
              "Hold a koala (Queensland licensed experience)",
              "Feed kangaroos and wallabies",
              "Watch crocodile feeding shows",
              "See cassowaries, wombats, dingoes and reptiles",
              "Relaxed bush-style wildlife park",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            It's especially popular with families visiting North Queensland, overseas tourists looking for an authentic wildlife encounter, and locals hosting friends or relatives from out of town.
          </p>
        </section>

        {/* Kangaroo Feeding */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Kangaroo Feeding</h2>
          </div>
          <img
            src={billabongKangaroo}
            alt="Family feeding gentle kangaroos at Billabong Sanctuary Townsville"
            className="rounded-xl shadow-lg w-full h-[350px] md:h-[450px] object-cover mb-2"
          />
          <p className="text-xs text-muted-foreground italic text-center mb-4">
            Getting up close for a feed. The kangaroos are incredibly gentle and a highlight for kids.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The open kangaroo enclosure lets you walk among the mob and hand-feed them. It's one of the most memorable parts of the day, especially for young children visiting for the first time.
          </p>
        </section>

        {/* Show Times - May 2026 Verified */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Show Times (May 2026 Verified)</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Park open daily 9:00 AM – 4:00 PM. All experiences below are included with entry.
          </p>
          <Card className="border-l-4 border-primary">
            <CardContent className="p-5">
              <ul className="divide-y divide-border">
                {showSchedule.map((s, i) => (
                  <li key={i} className="flex items-center justify-between py-2.5">
                    <span className="font-mono text-sm font-semibold text-primary">{s.time}</span>
                    <span className="text-sm text-muted-foreground text-right">{s.event}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Koala Holding Experience */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <TreePine className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Koala Holding Experience</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Yes, you can hold a koala here. This is one of the few reliable locations near Townsville offering this experience.
          </p>
          <Card className="border-l-4 border-primary">
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-3">Important Notes</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Additional fee usually applies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Photos often included</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Availability varies for animal welfare reasons</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Advance booking recommended in peak seasons</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Turtle Feeding */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <TreePine className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Turtle Feeding</h2>
          </div>
          <img
            src={billabongTurtle}
            alt="Child feeding freshwater turtles by the billabong at Billabong Sanctuary"
            className="rounded-xl shadow-lg w-full h-[350px] md:h-[450px] object-cover mb-2"
          />
          <p className="text-xs text-muted-foreground italic text-center mb-4">
            A local secret: The turtle feeding is interactive and a fantastic experience for young explorers.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Down by the main billabong, kids can hand-feed dozens of freshwater turtles right at the water's edge. It's a quieter, hands-on moment that often becomes the favourite memory of the day.
          </p>
        </section>

        {/* Local Tips */}
        <section className="mb-8">
          <LocalInsightCard title="Local Tips from Duncan" variant="tip">
            <ul className="space-y-2">
              {[
                "Visit early during warmer months — the animals are more active and it's much cooler",
                "Bring water and sunscreen — it's an outdoor park",
                "Comfortable footwear recommended for bush paths",
                "Allow at least 2–3 hours to see everything",
                "Great alternative to a beach day, especially if the wind is up",
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-500">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </LocalInsightCard>
        </section>

        {/* Best Season Tip */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Sun className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Best Season Tip</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            During the hotter months (October to March), visiting earlier in the day makes a big difference.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The animals tend to be more active in cooler hours, and it's far more comfortable for walking around the outdoor areas.
          </p>
        </section>

        {/* Getting There */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Car className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Getting There</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Billabong Sanctuary is located about a 20-minute drive south of Townsville via the Bruce Highway.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Most visitors drive, but some organised tours may be available during peak visitor periods. Parking is easy and the park layout is straightforward for families.
          </p>
        </section>

        {/* Local Authority Trust Signal */}
        <section className="mb-8">
          <Card className="border-l-4 border-primary/50 bg-muted/20">
            <CardContent className="p-5">
              <p className="text-muted-foreground leading-relaxed italic">
                Many Townsville locals recommend Billabong Sanctuary when friends or family visit from interstate or overseas — it's one of the easiest ways to experience iconic Australian wildlife close to the city.
              </p>
            </CardContent>
          </Card>
        </section>
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Utensils className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Facilities</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Picnic & BBQ areas",
              "Café / refreshments",
              "Shaded seating throughout",
              "Educational talks & shows",
              "Family-friendly layout",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Who It's Best For */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Who It's Best For</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Families with kids",
              "Wildlife enthusiasts",
              "Visitors wanting an authentic Australian experience",
              "People staying several days in Townsville",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <Heart className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Map */}
        <section className="mb-8">
          <MapLocationCard url="https://www.google.com/maps/search/?api=1&query=Billabong+Sanctuary+Townsville" />
        </section>

        {/* FAQs */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Billabong Sanctuary – FAQs</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/40">
                <AccordionTrigger className="text-left text-base font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Internal Links */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Explore More of Townsville</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            <Link to="/guides/magnetic-island-day-trip" className="block p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors text-center">
              <span className="text-2xl mb-1 block">🏝️</span>
              <span className="text-sm font-medium text-foreground">Magnetic Island Day Trip</span>
            </Link>
            <Link to="/local-tips" className="block p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors text-center">
              <span className="text-2xl mb-1 block">💡</span>
              <span className="text-sm font-medium text-foreground">Townsville Travel Tips</span>
            </Link>
            <Link to="/things-to-do" className="block p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors text-center">
              <span className="text-2xl mb-1 block">🗺️</span>
              <span className="text-sm font-medium text-foreground">Things to Do</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default BillabongSanctuary;
