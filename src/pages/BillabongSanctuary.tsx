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
import { TreePine, Users, Clock, Heart, HelpCircle, Check, Utensils } from "lucide-react";
import billabongImage from "@/assets/billabong-sanctuary-townsville-2.webp";

const BillabongSanctuary = () => {
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
        description="Your local guide to Billabong Sanctuary in Townsville. Hold a koala, feed kangaroos, watch croc shows & enjoy a relaxed wildlife experience. Family-friendly tips from MyAussieGuide."
        canonical="https://www.myaussieguide.com.au/billabong-sanctuary"
        ogType="article"
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Billabong Sanctuary Townsville – Wildlife Experience Guide
        </h1>

        {/* Hero Image */}
        <img
          src={billabongImage}
          alt="Billabong Sanctuary Townsville wildlife park with native Australian animals"
          className="rounded-xl shadow-lg w-full h-[400px] md:h-[500px] object-cover mb-8"
        />

        {/* Intro */}
        <section className="mb-8">
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Billabong Sanctuary is Townsville's main wildlife park where visitors can experience native Australian animals up close, including the popular koala holding experience. Located about 20 minutes south of Townsville, it offers a relaxed bush setting focused on education, conservation and family-friendly encounters.
          </p>
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

        {/* Facilities */}
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
