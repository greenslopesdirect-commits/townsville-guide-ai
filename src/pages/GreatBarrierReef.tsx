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
      answer: "Yes. Full-day boat trips leave from Breakwater Marina, near The Strand, for outer reefs about 40 to 90 km offshore. Adrenalin Snorkel and Dive, for example, lists snorkel and dive day trips, with check-in at 7:00am and departure at 7:25am. Some trips also pick up at Nelly Bay on Magnetic Island.",
    },
    {
      question: "Can you see the Museum of Underwater Art without diving?",
      answer: "Yes. The Ocean Sentinels sculptures sit at about 5 metres at John Brewer Reef, and the Museum of Underwater Art says snorkellers are welcome. The deeper Coral Greenhouse is at about 16 metres, with a shallower snorkelling area of 4 to 6 metres. You reach both by boat, usually on a commercial tour.",
    },
    {
      question: "Do tours to the Great Barrier Reef from Townsville run in the wet season?",
      answer: "Operators run through the year, but rough weather can cancel or change trips, particularly in the wet season (roughly November to April). Ask the operator about their weather and cancellation policy before you pay.",
    },
    {
      question: "Where do you dive the SS Yongala wreck?",
      answer: "Yongala Dive runs two-dive day trips departing Alva Beach, near Ayr, south of Townsville. It lists the boat ride to the wreck as just over half an hour. Other operators, including some based in Townsville, also offer Yongala trips, so compare departure points and travel time.",
    },
    {
      question: "Is it better to visit from Cairns or Townsville?",
      answer: "Both give access to the Great Barrier Reef. Cairns and Port Douglas have far more operators and a bigger tourism scene. Townsville's reef trips are a smaller field, and the draw is sites such as John Brewer Reef and the Museum of Underwater Art, plus the Yongala for certified divers.",
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
        title="Great Barrier Reef from Townsville: Tours, Sites & Seasons"
        description="Reef day trips from Townsville: where boats leave, John Brewer Reef and the Museum of Underwater Art, the Yongala wreck, seasons and costs."
        canonical="https://www.townsvilleguide.com.au/great-barrier-reef-townsville"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.townsvilleguide.com.au/" },
              { "@type": "ListItem", position: 2, name: "Nature", item: "https://www.townsvilleguide.com.au/nature" },
              { "@type": "ListItem", position: 3, name: "Great Barrier Reef Townsville", item: "https://www.townsvilleguide.com.au/great-barrier-reef-townsville" },
            ],
          })}
        </script>
      </Helmet>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        Great Barrier Reef Tours from Townsville
      </h1>

      <p className="text-lg text-muted-foreground leading-relaxed mb-2">
        Townsville is a working gateway to the central Great Barrier Reef. Full-day boats leave from Breakwater
        Marina, a few minutes from The Strand, and head 40 to 90 km offshore to outer reefs. The signature
        stops are John Brewer Reef, home to the Museum of Underwater Art, and, for certified divers, the
        SS Yongala wreck.
      </p>
      <p className="text-base text-muted-foreground leading-relaxed mb-6">
        This page covers where the boats go, how to see the underwater sculptures, what is different about
        going from Townsville, when to go, and what to check before you book.
      </p>

      <Separator className="my-8" />

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Quick Visitor Snapshot</h2>
        <Card className="bg-muted/30 border-border/50">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Anchor className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Departure</p>
                  <p className="text-sm text-muted-foreground">Breakwater Marina, Mariners Drive. Some trips also pick up at Nelly Bay on Magnetic Island.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Tour Length</p>
                  <p className="text-sm text-muted-foreground">A full day. Check-in is early (7:00am for Adrenalin Snorkel and Dive). Confirm return times when booking.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Fish className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Activities</p>
                  <p className="text-sm text-muted-foreground">Snorkelling and scuba diving on outer reefs, plus the Museum of Underwater Art sculptures</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Weather</p>
                  <p className="text-sm text-muted-foreground">Often calmer May to October. Rough weather can cancel trips at any time of year.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground">
                <strong>Stinger season:</strong> marine stingers can be present in tropical waters, mostly
                in the warmer months. Ask your operator about stinger suits and read our{" "}
                <Link to="/guides/stinger-safety" className="text-primary hover:underline">stinger safety guide</Link>.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Where the boats go</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          Adrenalin Snorkel and Dive, one of the Townsville operators, lists these sites on its{" "}
          <a href="https://www.adrenalindive.com.au/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">website</a>,
          with distances offshore from Townsville. Which site you visit on the day depends on the operator,
          the trip you book and the weather.
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong>Lodestone Reef (about 40 km):</strong> shallow coral gardens suited to snorkelling and diving.</span></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong>Little Broadhurst Reef (about 60 km):</strong> shallow lagoons and coral bommies, for snorkellers and divers.</span></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong>John Brewer Reef (about 70 km):</strong> the Museum of Underwater Art, below.</span></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong>Davies Reef (about 80 km) and Keeper Reef (about 74 km):</strong> swim-throughs and caves, described mainly as dive sites.</span></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong>Wheeler Reef (about 90 km):</strong> a drift dive at around 20 m for Advanced or Adventure-level divers.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Museum of Underwater Art (MOUA)</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          MOUA's Townsville installations are at John Brewer Reef, reached by boat. Both are by sculptor Jason
          deCaires Taylor, and the{" "}
          <a href="https://www.moua.com.au/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Museum of Underwater Art</a>{" "}
          says recreational visitors to the Marine Park can see them for free as public art. Most people go on a
          commercial tour.
        </p>
        <ul className="space-y-2 text-muted-foreground mb-3">
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong>Ocean Sentinels:</strong> eight concrete figures of marine scientists and conservationists, each about 2.2 m tall, at about 5 m depth. Snorkellers, free-divers and scuba divers are all welcome.</span></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong>Coral Greenhouse:</strong> a 12 m tall structure at about 16 m. MOUA says deeper sections (12 to 18 m) suit scuba divers and shallower areas (4 to 6 m) suit snorkellers. The Ocean Sentinels are a short swim away.</span></li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          MOUA has a no-touching policy, as on any reef. Space on tour boats is limited, so book early.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">SS Yongala: diving the wreck</h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          The Yongala is a famous wreck dive, and it is a certified-diver trip rather than a snorkel. Many
          Yongala trips do not leave from Townsville. Yongala Dive runs two-dive day trips from{" "}
          <a href="https://www.yongaladive.com.au/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Alva Beach</a>,
          near Ayr, south of Townsville, with a boat ride it lists as just over half an hour. Some
          Townsville and Magnetic Island operators also offer Yongala trips. Compare the departure point and
          allow for the drive or the longer boat trip, and check what certification each operator requires.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Going from Townsville vs Cairns</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Cairns and Port Douglas have many more operators and pontoon options. Townsville is a smaller field.</span></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Townsville's reefs are further out, roughly 40 to 90 km, so it is a long day on a boat.</span></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>The point of difference is the Museum of Underwater Art and the Yongala, which are off Townsville rather than Cairns.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Best Time of Year</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-border/50">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <Sun className="w-5 h-5 text-amber-500" />
                <h3 className="font-semibold text-foreground">Dry season (roughly May to October)</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Generally calmer seas and more reliable departures</li>
                <li>• Winter southeasterly winds can still make for a bumpy crossing</li>
                <li>• Cooler on the water, so bring a layer</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-border/50">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <CloudRain className="w-5 h-5 text-blue-500" />
                <h3 className="font-semibold text-foreground">Wet season (roughly November to April)</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Storms and rough seas can cancel or change trips</li>
                <li>• Hotter and more humid, and marine stingers are more likely in coastal waters</li>
                <li>• Ask your operator about stinger suits</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <p className="text-sm text-muted-foreground mt-3">
          Conditions vary day to day in every season, and visibility is never guaranteed. Treat any season as
          a tendency, not a promise.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Costs and what is included</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Prices vary by operator, season and whether you snorkel or dive, and they change, so we don't quote a figure. Expect a full-day reef trip to cost a few hundred dollars per adult.</span></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Reef tours pay the Reef Authority's environmental management charge, listed at $8.50 per passenger per full day at time of writing. Check whether your ticket includes it. See{" "}
            <a href="https://www.gbrmpa.gov.au/access/environmental-management-charge" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GBRMPA</a>.</span></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Adrenalin Snorkel and Dive says wetsuits and (seasonal) stinger suits are provided on day trips, masks and snorkels are supplied at the dock, and a fuel levy may apply on the day. Dive guides cost extra. Other operators differ, so ask.</span></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Age limits: that operator recommends snorkelling from age 6 and scuba from age 12, and certified dives need a certification card.</span></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">What to Bring</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>A rash vest or covered swimwear. It cuts down on sunscreen, which is better for the reef</span></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Hat, sunglasses and a towel</span></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>A light jacket. It can be windy on the boat</span></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Motion sickness tablets, taken before departure, if you are unsure</span></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Your dive certification card if you are diving</span></li>
        </ul>
        <p className="text-sm text-muted-foreground mt-3">
          Follow the Reef Authority's{" "}
          <a href="https://www.gbrmpa.gov.au/access/responsible-reef-practices" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">responsible reef practices</a>:
          don't touch coral or turtles, and don't feed fish.
        </p>
      </section>

      <div className="mb-10">
        <LocalInsightCard title="Booking tip" variant="tip">
          <p>
            Boats have limited spaces, so book ahead in school holidays and for Yongala dives. Phone the
            operator if the weather looks doubtful and ask what happens if they cancel. Operators are listed
            in our <Link to="/directory?category=tours" className="text-primary hover:underline">tours directory</Link>.
          </p>
        </LocalInsightCard>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Combine With These Nearby Experiences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-5 text-center">
              <h3 className="font-semibold text-foreground mb-2">Magnetic Island</h3>
              <p className="text-sm text-muted-foreground mb-3">A short ferry ride to beaches, wildlife and hiking.</p>
              <Button asChild variant="outline" size="sm" className="gap-1">
                <Link to="/guides/magnetic-island-day-trip">View Guide <ArrowRight className="w-3 h-3" /></Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-5 text-center">
              <h3 className="font-semibold text-foreground mb-2">Reef HQ closure</h3>
              <p className="text-sm text-muted-foreground mb-3">The Townsville aquarium is closed. Here is the latest and what to do instead.</p>
              <Button asChild variant="outline" size="sm" className="gap-1">
                <Link to="/reef-hq-townsville">Read the update <ArrowRight className="w-3 h-3" /></Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-5 text-center">
              <h3 className="font-semibold text-foreground mb-2">Townsville Beaches</h3>
              <p className="text-sm text-muted-foreground mb-3">Swimming, stinger nets and coastal walks.</p>
              <Button asChild variant="outline" size="sm" className="gap-1">
                <Link to="/beaches">View Beaches <ArrowRight className="w-3 h-3" /></Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8" />

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
