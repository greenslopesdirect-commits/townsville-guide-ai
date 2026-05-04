import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import AirportTransferCard from "@/components/AirportTransferCard";
import { Link } from "react-router-dom";
import { Dog } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const StingerSafety = () => (
  <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
    <SEOHead
      title="Is it Safe to Swim in Townsville Today? | 2026 Stinger Guide"
      description="Learn when stinger season runs in Townsville, where stinger nets are located, and how to swim safely in North Queensland. Updated April 27, 2026."
      canonical="https://www.myaussieguide.com.au/guides/stinger-safety"
    />
    <h1 className="text-4xl font-bold mb-4 text-center">May 2026 Stinger Update</h1>

    {/* Current Status Banner */}
    <div className="bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-400 dark:border-amber-600 rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-300 mb-2">🌊 April 27 Status</h2>
      <p className="text-amber-700 dark:text-amber-400 leading-relaxed">
        <strong>Stinger nets remain ACTIVE</strong> at <strong>The Strand, Pallarenda, and Magnetic Island</strong> through May. The good news: <strong>Dry Season breezes are clearing the water</strong> and visibility is improving daily. Always swim within the nets.
      </p>
    </div>

    <img src="/summer-safety-guide.webp" alt="Stinger net floats" className="rounded-xl shadow-lg w-full h-[400px] md:h-[500px] object-cover object-bottom mb-8" />
    <div className="space-y-6 mb-8 text-red-900 font-medium text-left">
      <Card className="bg-red-50 border-red-200"><CardContent className="p-6"><strong>1. Swim in the Nets:</strong> Use the patrolled enclosures at The Strand and Pallarenda.</CardContent></Card>
      <Card className="bg-red-50 border-red-200"><CardContent className="p-6"><strong>2. Stinger Suits:</strong> Wear Lycra suits when swimming in open bays at Magnetic Island.</CardContent></Card>
      <Card className="bg-red-50 border-red-200"><CardContent className="p-6"><strong>3. Vinegar:</strong> Look for the vinegar stands at the beach. If stung, douse and call 000.</CardContent></Card>
    </div>
    <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-8">
      <h4 className="font-bold text-xl mb-2 text-orange-700">Duncan's Local Pro-Tip</h4>
      <p>"March is the peak for Irukandji activity as the waters stay warm. Even if the 'stinger nets' look clear of debris, the microscopic stingers are still there. Don't risk it—stay in the nets."</p>
    </div>

    {/* Stinger Safety for Dogs */}
    <div className="bg-[#00A693]/10 border-2 border-[#00A693]/30 rounded-xl p-6 mb-8">
      <h3 className="font-bold text-xl mb-3 text-[#00A693]">🐾 Can Dogs Get Stung?</h3>
      <p className="text-muted-foreground leading-relaxed mb-3">
        Yes. While a dog's fur provides some protection, their paws, nose, and belly are vulnerable.
      </p>
      <div className="bg-[#00A693]/10 rounded-lg p-4">
        <p className="text-sm font-medium text-foreground">
          🐾 <strong>Schnauzer Approved Safety:</strong> During March, keep your dogs on the sand or in the very shallow wash-zone at off-leash beaches. Avoid letting them swim in deep open water outside of the nets at Pallarenda.
        </p>
      </div>
    </div>

    {/* Dog Beach Call-out */}
    <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 dark:border-blue-700 rounded-xl p-6 mb-8">
      <h3 className="font-bold text-xl mb-3 text-blue-800 dark:text-blue-300 flex items-center gap-2">
        <Dog className="w-5 h-5" />
        🐕 Taking the Dog to the Beach?
      </h3>
      <p className="text-blue-700 dark:text-blue-400 leading-relaxed">
        While stingers aren't as common in the shallow wash, always keep your dogs out of the deep water during stinger season (Nov–May). See our{" "}
        <Link to="/dog-friendly" className="font-semibold text-blue-800 dark:text-blue-300 hover:underline">
          Dog-Friendly Beach Guide
        </Link>{" "}
        for the safest off-leash spots like Pallarenda.
      </p>
    </div>

    {/* Autumn Tip */}
    <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-300 dark:border-sky-700 rounded-xl p-6 mb-12">
      <h4 className="font-bold text-lg mb-2 text-sky-800 dark:text-sky-300">🍂 Mid-March Update</h4>
      <p className="text-sky-700 dark:text-sky-400 leading-relaxed">
        The transition to Autumn is starting, but the 'Stinger Season' doesn't care about the calendar. Nets stay in until at least May. Keep those stinger suits handy for Magnetic Island trips this week!
      </p>
    </div>

    {/* Section 1 */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4">When Is Stinger Season in Townsville?</h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        Stinger season in Townsville typically runs from November to May, during the warmer months in North Queensland. During this period, marine stingers such as box jellyfish and Irukandji may be present in coastal waters.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed font-semibold">
        We are currently in the peak of the 2025/2026 season. Stay vigilant through to May.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Swimming is considered safe when using patrolled stinger enclosures at The Strand, Pallarenda, and other netted beaches. Always check local signage or Surf Life Saving updates before entering the water.
      </p>
    </section>

    {/* Section 2 */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Where Are Stinger Nets in Townsville?</h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">Stinger nets are installed during the season at:</p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
        <li>The Strand (Townsville Foreshore)</li>
        <li>Pallarenda Beach</li>
        <li>Rowes Bay</li>
        <li>Horseshoe Bay (Magnetic Island)</li>
      </ul>
      <p className="text-muted-foreground leading-relaxed">
        These enclosures provide a safer swimming environment during stinger season. Conditions can vary depending on weather and tides.
      </p>
    </section>

    {/* Section 3 */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Is It Safe to Swim in Townsville?</h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">Yes — when you follow local safety advice.</p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        During stinger season (November–May), always swim inside stinger nets or wear a full stinger suit when swimming in open water.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Outside of stinger season, beaches in Townsville are generally safe, but visitors should always remain aware of marine conditions.
      </p>
    </section>

    {/* Section 4: FAQ */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border/40">
          <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
            Can you swim in Townsville during stinger season?
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground leading-relaxed">
            Yes. Swim only within stinger nets or wear a full stinger suit when swimming outside enclosures.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border/40">
          <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
            What should I do if stung by a jellyfish?
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground leading-relaxed">
            Apply vinegar immediately and call 000 if symptoms are severe.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border/40">
          <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
            Are stingers present all year?
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground leading-relaxed">
            No. They are most common between November and May.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    {/* Airport Transfer CTA */}
    <section className="mt-12 -mx-4 px-4 py-10 bg-slate-50 dark:bg-slate-900/40 rounded-xl">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-2 text-foreground">Planning Your Townsville Arrival?</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Now that you're up to speed on beach safety, ensure your trip from the tarmac to the sand is just as smooth. Check the latest local transport and transfer options below.
        </p>
        <AirportTransferCard />
      </div>
    </section>
  </div>
);
export default StingerSafety;
