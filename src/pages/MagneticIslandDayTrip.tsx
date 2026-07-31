import React from "react";
import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import LocalInsightCard from "@/components/LocalInsightCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Ship, Users, Clock, MapPin, Sun, HelpCircle } from "lucide-react";
import AirportTransferCard from "@/components/AirportTransferCard";

const MagneticIslandDayTrip = () => {
  const faqs = [
    {
      question: "Is one day enough to see Magnetic Island?",
      answer: "Yes — a full day is enough to enjoy the highlights like The Forts Walk, feeding rock wallabies, and swimming at Alma Bay. For a more relaxed pace or to explore multiple bays, consider an overnight stay."
    },
    {
      question: "Can you visit without hiring a car?",
      answer: "Absolutely. The island bus service runs regularly and is timed with ferry arrivals. A day pass is affordable and covers most popular spots including Arcadia, Horseshoe Bay, and Nelly Bay."
    },
    {
      question: "Is Magnetic Island suitable for young children?",
      answer: "Yes, especially for school-age kids. Alma Bay is calm and protected, and feeding the rock wallabies is a highlight for little ones. Note that The Forts Walk has uneven terrain and isn't pram-friendly. For more tips, see our Townsville with Kids guide.",
      hasKidsLink: true
    },
    {
      question: "Are there stingers at Magnetic Island beaches?",
      answer: "During stinger season (November–May), marine stingers may be present. Swim within stinger nets where available, or wear a stinger suit. Check local signage and lifeguard advice on the day."
    },
    {
      question: "What's the best time of year to visit?",
      answer: "The dry season (May–October) offers cooler temperatures ideal for walking. Summer visits are great for swimming but can be hot for hiking — plan walks for early morning and stick to shaded bays."
    }
  ];

  return (
    <>
      <SEOHead
        title="Magnetic Island Day Trip: Ferries & Koalas"
        description="Planning a day trip to Magnetic Island? Ferry times, koala spotting on the Forts Walk, and the best swimming bays — from a local."
        canonical="https://www.townsvilleguide.com.au/guides/magnetic-island-day-trip"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": { "@type": "Answer", "text": f.answer }
          }))
        })}</script>
      </Helmet>

    <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
      <h1 className="text-4xl font-bold mb-4 text-center">Magnetic Island Family Day Trip</h1>
      <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-8 leading-relaxed">
        Wondering <strong>what to do on Magnetic Island for a day</strong>? This local-verified guide walks you through the best ferry times, koala spots, swimming bays, and the perfect one-day itinerary — no fluff, just what works.
      </p>
      
      {/* Is This Trip Right for You? */}
      <section className="mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50 rounded-xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Is This Magnetic Island Day Trip Right for You?</h2>
          </div>
          <ul className="space-y-2 text-muted-foreground ml-9">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Ideal for families with school-age kids, walkers, and beach lovers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>No car needed — the island bus service makes this trip easy</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Best enjoyed with an early ferry start, especially in warmer months</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Not ideal for prams or limited mobility due to uneven tracks</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Short on time? You can skip The Forts Walk and still enjoy the island</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Top 3 Things to Do Today */}
      <section className="mb-8">
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 rounded-xl p-6">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Sun className="w-6 h-6 text-amber-500" />
            Top 3 Things to Do Today
          </h2>
          <ol className="space-y-3 text-muted-foreground ml-2">
            <li className="flex items-start gap-3">
              <span className="font-bold text-amber-600 dark:text-amber-400 text-lg">1.</span>
              <div>
                <span className="font-semibold text-foreground">Forts Walk for Koalas</span>
                <p className="text-sm mt-0.5">The best spot on the island for wild koala sightings. Early morning is ideal — look for scratch marks on trees and follow the local markers.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-amber-600 dark:text-amber-400 text-lg">2.</span>
              <div>
                <span className="font-semibold text-foreground">Snorkelling at Geoffrey Bay</span>
                <p className="text-sm mt-0.5">Stunning coral right off the beach. Stinger suits required during stinger season (November–May). Check conditions before heading in.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-amber-600 dark:text-amber-400 text-lg">3.</span>
              <div>
                <span className="font-semibold text-foreground">Sunset at Horseshoe Bay</span>
                <p className="text-sm mt-0.5">End your day at the island's largest bay. Grab fish and chips, settle in on the sand, and watch the sky light up over the Coral Sea.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Hero Image */}
      <img
        src="/magnetic-island-guide.webp"
        alt="Magnetic Island Ferry"
        className="rounded-xl shadow-lg w-full h-[400px] md:h-[500px] object-cover mb-8"
        width={1600}
        height={900}
        fetchPriority="high"
        loading="eager"
        decoding="async"
      />

      {/* Getting There Section */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Ship className="w-6 h-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">Getting There: Magnetic Island Ferry Tips</h2>
        </div>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Magnetic Island ferries depart from the Breakwater Terminal in Townsville and take around 40–45 minutes.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
            <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-muted-foreground">Book ahead during weekends and school holidays</span>
          </div>
          <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
            <Sun className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-muted-foreground">Early ferries are cooler and less crowded</span>
          </div>
          <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-muted-foreground">Sit outside for views, but bring sun protection</span>
          </div>
          <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
            <Ship className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-muted-foreground">The island bus timetable is synced with ferry arrivals</span>
          </div>
        </div>
        <AirportTransferCard className="mt-6" />
      </section>

      {/* Existing Itinerary - PRESERVED EXACTLY */}
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Suggested Day Trip Itinerary</h2>
        <div className="space-y-4">
          <Card className="border-l-4 border-blue-400">
            <CardContent className="p-4">
              <strong>9:00 AM:</strong> Catch the ferry from the Breakwater Terminal.
            </CardContent>
          </Card>
          <Card className="border-l-4 border-blue-400">
            <CardContent className="p-4">
              <strong>10:30 AM:</strong> Hike The Forts Walk to spot wild koalas.
            </CardContent>
          </Card>
          <Card className="border-l-4 border-blue-400">
            <CardContent className="p-4">
              <strong>12:30 PM:</strong> Relax and swim at the protected Alma Bay.
            </CardContent>
          </Card>
          <Card className="border-l-4 border-blue-400">
            <CardContent className="p-4">
              <strong>4:00 PM:</strong> See the rock wallabies at the old Arcadia Jetty at Geoffrey Bay, near Bremner Point. You'll likely see them bounding out of the rocks here — there's no need to feed them, but if you do, stick to approved food only (carrots, sweet potato, rockmelon, apple, or wallaby pellets from local shops) and never bread or avocado, which can harm them.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Perfect 1-Day Itinerary */}
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">The Perfect 1-Day Magnetic Island Itinerary</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Short on time? Here's how locals tackle Magnetic Island in a single day — from the first ferry to the sunset return.
        </p>
        <ul className="space-y-4">
          <li className="bg-muted/30 rounded-lg p-4">
            <strong className="text-foreground">🌅 Morning:</strong> Catch the <strong>8:00 AM ferry</strong>, grab breakfast at <strong>Nelly Bay</strong>, then tackle the <strong>Forts Walk</strong> for koala spotting while it's still cool.
          </li>
          <li className="bg-muted/30 rounded-lg p-4">
            <strong className="text-foreground">🏖️ Midday:</strong> Head to <strong>Horseshoe Bay</strong> for lunch and a swim inside the stinger nets. During stinger season, check our <Link to="/guides/stinger-safety" className="text-primary font-medium hover:underline">Stinger Safety Guide</Link> before getting in the water.
          </li>
          <li className="bg-muted/30 rounded-lg p-4">
            <strong className="text-foreground">🦘 Late afternoon:</strong> Head to the <strong>old Arcadia Jetty at Geoffrey Bay</strong>, near Bremner Point, around <strong>4:00–4:30 PM</strong> to see the rock wallabies emerge. You'll likely see them bounding out of the rocks here — there's no need to feed them, but if you do, stick to approved food only (carrots, sweet potato, rockmelon, apple, or wallaby pellets from local shops) and never bread or avocado, which can harm them. Then catch the sunset ferry back to Townsville.
          </li>
        </ul>
      </section>

      {/* How to Spot Wild Koalas */}
      <section className="mb-8">
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50 rounded-xl p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">🐨 How to Spot Wild Koalas on the Forts Walk</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Magnetic Island is home to the largest wild koala colony in Northern Australia. To find them, follow these three local rules:
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg mt-0.5">1.</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">The Stick Arrow Rule</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Look at the ground! Locals often leave arrows made of sticks on the dirt path pointing toward a tree where a koala is snoozing.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg mt-0.5">2.</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">The "Grey Lumps" Test</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Don't look for ears; look for grey, furry ovals tucked into the forks of the Eucalyptus and Paperbark trees.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg mt-0.5">3.</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Look Down for Poo</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Small, green, oval-shaped pellets on the path are a dead giveaway. If you see them, stop and look directly up—a koala is likely right above you.</p>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-emerald-100/50 dark:bg-emerald-800/20 rounded-lg">
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              <strong className="not-italic text-foreground">Ask as you walk:</strong> It's a Maggie Island tradition to ask hikers walking the opposite way, "Any luck with koalas today?" They'll almost always tell you exactly which tree to scan.
            </p>
          </div>
        </div>
      </section>

      {/* Existing Duncan's Pro-Tip - PRESERVED EXACTLY */}
      <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-8">
        <h4 className="font-bold text-xl mb-2 text-orange-700">Duncan's Local Pro-Tip</h4>
        <p>"The bus on the island is timed with the ferry. If you aren't hiring a car, grab a Day Pass on the bus—it's the cheapest way to see all the bays."</p>
      </div>

      {/* Alternative Ways Section */}
      <section className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Alternative Ways to Spend a Day on Magnetic Island</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Option A */}
          <Card className="border-t-4 border-emerald-400">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-1 text-emerald-700 dark:text-emerald-400">Option A: Relaxed Family Beach Day</h3>
              <p className="text-sm text-muted-foreground mb-4">(No Big Walks)</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Ferry to Arcadia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Feed the rock wallabies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Swim at Alma Bay</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Lunch in Arcadia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Late afternoon ferry back</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Option B */}
          <Card className="border-t-4 border-amber-400">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-1 text-amber-700 dark:text-amber-400">Option B: Active Day</h3>
              <p className="text-sm text-muted-foreground mb-4">(Best in Cooler Weather)</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Early ferry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Forts Walk first</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Picnic lunch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Afternoon beach swim</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Return ferry before sunset</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* More Local Tips */}
      <section className="mb-8">
        <LocalInsightCard title="More Local Tips from Duncan" variant="tip">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-emerald-500">•</span>
              <span>Wallabies are easiest to spot early morning or late afternoon</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500">•</span>
              <span>Alma Bay is one of the safest swimming beaches on the island</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500">•</span>
              <span>Visiting during summer? Marine stingers are present from November to May. Review our <Link to="/guides/stinger-safety" className="text-primary hover:underline font-medium">Stinger Season Safety Guide</Link> before swimming.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500">•</span>
              <span>On very hot days, skip the Forts Walk and focus on the bays</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500">•</span>
              <span>Hiring a car is optional — the bus day pass covers most locations</span>
            </li>
          </ul>
        </LocalInsightCard>
      </section>

      {/* FAQs */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <HelpCircle className="w-6 h-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">Magnetic Island Family Day Trip – FAQs</h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-border/40"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
                {faq.hasKidsLink && (
                  <Link 
                    to="/townsville-with-kids" 
                    className="block mt-2 text-primary hover:underline font-medium"
                  >
                    View family guide →
                  </Link>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
    </>
  );
};

export default MagneticIslandDayTrip;
