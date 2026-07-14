import React from "react";
import { Helmet } from "react-helmet";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const StingerSafety = () => (
  <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
    <SEOHead
      title="Is it Safe to Swim in Townsville Today? | 2026 Stinger Guide"
      description="Learn when stinger season runs in Townsville, where stinger nets are located, and how to swim safely in North Queensland. Updated June 1, 2026."
      canonical="https://www.myaussieguide.com.au/guides/stinger-safety"
    />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.myaussieguide.com.au/" },
              { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://www.myaussieguide.com.au/" },
              { "@type": "ListItem", "position": 3, "name": "Stinger Safety", "item": "https://www.myaussieguide.com.au/guides/stinger-safety/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Can you swim in Townsville during stinger season?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Swim only within stinger nets or wear a full stinger suit when swimming outside enclosures."
                }
              },
              {
                "@type": "Question",
                "name": "What should I do if stung by a jellyfish?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Apply vinegar immediately and call 000 if symptoms are severe."
                }
              },
              {
                "@type": "Question",
                "name": "Are stingers present all year?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. They are most common between November and May."
                }
              }
            ]
          }
        ]
      })}</script>
    </Helmet>

    <h1 className="text-4xl font-bold mb-4 text-center">July 13, 2026 Stinger Update</h1>
    <p className="text-center text-sm text-muted-foreground mb-6">Updated: July 13, 2026</p>

    {/* Current Status Banner */}
    <div className="bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-400 dark:border-amber-600 rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-300 mb-2">🌊 July 13 Status: Stinger Season Has Ended — Nets May Still Be In Place</h2>
      <p className="text-amber-700 dark:text-amber-400 leading-relaxed">
        The 2025/26 marine stinger season has officially wrapped up, so swimming at Townsville and Magnetic Island beaches is no longer considered high-risk for stings. Council typically leaves the beach enclosures up and maintained for a period afterwards as a precaution while water temperatures settle — so if you still see nets at The Strand, Pallarenda, or Magnetic Island, treat them as a comfort option rather than an active warning. Continue to check local signage and stay aware of general marine and crocodile advisories.
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
      <p>"The stinger nets are officially packed away for the cooler months! It’s the absolute best time of year to enjoy our beaches. While the risk of box jellyfish and Irukandji drops right down during the dry season, remember to always swim between the red and yellow flags where the lifeguards can keep an eye on you."</p>
    </div>

    {/* Stinger Safety for Dogs */}
    <div className="bg-[#00A693]/10 border-2 border-[#00A693]/30 rounded-xl p-6 mb-8">
      <h3 className="font-bold text-xl mb-3 text-[#00A693]">🐾 Can Dogs Get Stung?</h3>
      <p className="text-muted-foreground leading-relaxed mb-3">
        Yes. While a dog's fur provides some protection, their paws, nose, and belly are vulnerable.
      </p>
      <div className="bg-[#00A693]/10 rounded-lg p-4">
        <p className="text-sm font-medium text-foreground">
          🐾 <strong>Dry Season Update:</strong> Now that the stinger season has wrapped up and the nets are out, deep-water swimming is significantly safer for your dogs at un-netted northern beaches like Saunders, Toolakea, and Bushland Beach. Enjoy those beautiful, crisp morning beach runs!
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
      <h4 className="font-bold text-lg mb-2 text-sky-800 dark:text-sky-300">🍂 Final Weeks of Season</h4>
      <p className="text-sky-700 dark:text-sky-400 leading-relaxed">
        The official season typically concludes at the end of May. However, the exact date the nets are removed depends on consistent water temperature drops. Check back here or on the homepage for the 'Nets Out' announcement usually expected in early June.
      </p>
    </div>

    {/* Section 1 */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4">When Is Stinger Season in Townsville?</h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        Stinger season in Townsville typically runs from November to May. The 2025/2026 season has now officially concluded as of late May, and nets have been removed across all local beaches. The next season will commence in November 2026.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed font-semibold">
        Swimming is considered safe when using patrolled stinger enclosures at The Strand, Pallarenda, and other netted beaches. Always check local signage or Surf Life Saving updates before entering the water.
      </p>
    </section>

    {/* Section 2 */}
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4">Townsville &amp; Magnetic Island Stinger Net Locations</h2>
      <div className="overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[220px]">Beach Location</TableHead>
              <TableHead>Exact Enclosure Details</TableHead>
              <TableHead className="w-[180px]">Safety Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">The Strand (North)</TableCell>
              <TableCell>Near the Rockpool and Jezzine Barracks end.</TableCell>
              <TableCell>
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">Removed for Dry Season</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">The Strand (South)</TableCell>
              <TableCell>Located directly opposite the Water Park and surf club precinct.</TableCell>
              <TableCell>
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">Removed for Dry Season</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Pallarenda Beach</TableCell>
              <TableCell>Main enclosure located directly off the main foreshore parking area.</TableCell>
              <TableCell>
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">Removed for Dry Season</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Picnic Bay (Magnetic Island)</TableCell>
              <TableCell>Enclosure situated right next to the historic Picnic Bay jetty.</TableCell>
              <TableCell>
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">Removed for Dry Season</span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Horseshoe Bay (Magnetic Island)</TableCell>
              <TableCell>Positioned in the center of the main bay swimming zone.</TableCell>
              <TableCell>
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">Removed for Dry Season</span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
        Note: While the cooler dry season lowers stinger risks, swimming inside these dedicated enclosures is always recommended for absolute peace of mind.
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
