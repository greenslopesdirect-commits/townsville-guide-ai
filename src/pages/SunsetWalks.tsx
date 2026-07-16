import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Camera, Dog, Clock, HelpCircle, MapPin } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import LocalInsightCard from "@/components/LocalInsightCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SunsetWalks = () => {
  const faqs = [
    {
      question: "What time is sunset in Townsville?",
      answer:
        "Sunset in Townsville falls in the early evening for most of the year — a little earlier in the dry season (roughly May–October) and a little later in the wet season (November–April). For an exact time on the day you're visiting, check a local sunset time app rather than relying on a fixed clock time, since it shifts week to week.",
    },
    {
      question: "Is Castle Hill or The Strand better for sunset?",
      answer:
        "Both are great and answer different moods. Castle Hill gives you the wide elevated view — city, harbour and Cleveland Bay all in one frame — but you need to drive or hike up and it can get busy at peak times. The Strand is easier: a flat, well-lit foreshore walk with the light changing over the water as you go. If you're short on time or travelling with kids or a dog, The Strand is the more relaxed pick.",
    },
    {
      question: "Are these walks dog-friendly?",
      answer:
        "Most are, on a leash. The Strand, the Breakwater, Jezzine Barracks and the Rowes Bay foreshore all allow leashed dogs. Some sections of Pallarenda are off-leash at set times — see our dog-friendly guide for the current rules. Castle Hill Road is walked by plenty of locals with dogs on-leash, though the traffic makes it less relaxing than the coastal options.",
    },
    {
      question: "Do I need to bring anything?",
      answer:
        "Water, insect repellent (especially near mangroves and around dusk), and a light layer if there's a breeze coming off the bay. A phone torch is handy for the walk back once the light drops.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Best Sunset Walks in Townsville — Local Guide"
        description="A local guide to the best sunset walks in Townsville — The Breakwater, Pallarenda Jetty, Castle Hill, Jezzine Barracks, Rowes Bay and The Strand foreshore."
        canonical="https://www.myaussieguide.com.au/guides/sunset-walks"
        ogType="article"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.myaussieguide.com.au/" },
                { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://www.myaussieguide.com.au/guides" },
                { "@type": "ListItem", "position": 3, "name": "Sunset Walks", "item": "https://www.myaussieguide.com.au/guides/sunset-walks" },
              ],
            },
            {
              "@type": "FAQPage",
              "mainEntity": faqs.map((f) => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": { "@type": "Answer", "text": f.answer },
              })),
            },
          ],
        })}</script>
      </Helmet>

      <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Best Sunset Walks in Townsville
        </h1>

        <img
          src="/sunset-walks-guide.webp"
          alt="Sunset walk along the Breakwater in Townsville with golden light over Cleveland Bay"
          className="rounded-xl shadow-lg w-full h-[400px] md:h-[500px] object-cover object-[center_30%] mb-2"
          width={1600}
          height={900}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <p className="text-xs text-muted-foreground italic text-center mb-8">
          Golden hour along the Breakwater — one of the easiest sunset loops in town.
        </p>

        {/* Intro */}
        <section className="mb-10">
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            The evening walk is a genuine local ritual in Townsville. Once the heat of the day
            eases off, the tropical sea breeze picks up along the foreshore and the light turns
            gold over Cleveland Bay and Magnetic Island — and half the city seems to head
            outside. Whether it's a quick loop after work, a slow amble with the dog, or a
            proper climb up Castle Hill, sunset is when Townsville is at its best.
          </p>
        </section>

        {/* The Spots */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <Sun className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Six Great Sunset Spots</h2>
          </div>

          <div className="grid gap-6">
            {/* Breakwater */}
            <Card className="border-l-4 border-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">The Breakwater</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  The Breakwater is the easiest sunset walk in Townsville — flat, well-lit and
                  right on the water, with the marina on one side and Cleveland Bay on the
                  other. You get city lights turning on behind you as the sun drops over the
                  bay, plus the reflections off the moored yachts. Good for all ages and
                  fitness levels.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Practical:</strong> Paved and level the
                  whole way. Parking near the marina precinct. Plenty of cafés and restaurants
                  right there for after.
                </p>
              </CardContent>
            </Card>

            {/* Pallarenda Jetty */}
            <Card className="border-l-4 border-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Pallarenda Jetty</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  A quieter local favourite at the northern end of the beaches. The jetty
                  points out across the water toward Magnetic Island, which sits right in the
                  frame as the sun goes down. Far fewer people than The Strand, and the long
                  flat beach means you can keep walking as long as the light holds.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Practical:</strong> Free parking at the
                  Pallarenda foreshore. Bring insect repellent — mozzies come out around dusk
                  near the mangroves.
                </p>
              </CardContent>
            </Card>

            {/* Castle Hill */}
            <Card className="border-l-4 border-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Castle Hill Road</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  The classic elevated view. From the summit you get the whole city, the
                  harbour, the Strand foreshore and Magnetic Island all in one panorama, with
                  a cooling breeze that's usually a few degrees down on the streets below.
                  You can drive up or walk one of the tracks — the Goat Track is the most
                  direct on foot.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong className="text-foreground">Practical:</strong> Popular around
                  sunset, so parking at the top can fill up. If you're walking, allow enough
                  time to get up before the light goes.
                </p>
                <Link to="/castle-hill" className="text-primary hover:underline text-sm font-medium">
                  → Full Castle Hill guide
                </Link>
              </CardContent>
            </Card>

            {/* Jezzine */}
            <Card className="border-l-4 border-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Jezzine Barracks / Kissing Point</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  The boardwalk around Jezzine Barracks and the Kissing Point headland is
                  one of the most photogenic sunset walks in the city. Wide paved paths,
                  interpretive signage about the site's Indigenous and military history, and
                  a headland that catches the last of the light beautifully. Sits right at
                  the northern end of The Strand, so you can combine the two.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong className="text-foreground">Practical:</strong> Sealed paths
                  throughout — good for prams, wheelchairs and dogs on-leash.
                </p>
                <Link to="/guides/jezzine-barracks" className="text-primary hover:underline text-sm font-medium">
                  → Full Jezzine Barracks guide
                </Link>
              </CardContent>
            </Card>

            {/* Rowes Bay */}
            <Card className="border-l-4 border-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Rowes Bay Foreshore</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  A relaxed, less-touristed foreshore walk between Pallarenda and The Strand.
                  Long open views toward Magnetic Island, a wide grassy reserve for a picnic
                  or a sit-down, and generally very quiet — you're mostly sharing it with
                  locals walking dogs or having a kickabout.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong className="text-foreground">Practical:</strong> Free parking along
                  the foreshore. Public toilets and shaded picnic areas.
                </p>
                <Link to="/rowes-bay" className="text-primary hover:underline text-sm font-medium">
                  → Full Rowes Bay guide
                </Link>
              </CardContent>
            </Card>

            {/* The Strand */}
            <Card className="border-l-4 border-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">The Strand Foreshore</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  The obvious one, and for good reason. A long flat foreshore walk with the
                  water on one side and cafés, playgrounds and pools on the other. Locals
                  come out in numbers around sunset — walkers, runners, dogs, kids on
                  scooters — and the whole strip has a genuinely relaxed evening feel.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong className="text-foreground">Practical:</strong> Well-lit the whole
                  way, so you can keep walking after the sun's down. Loads of parking and
                  dining options along the strip.
                </p>
                <Link to="/the-strand" className="text-primary hover:underline text-sm font-medium">
                  → Full Strand guide
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Duncan's original quote */}
        <section className="mb-10">
          <LocalInsightCard title="Duncan's Local Pro-Tip" variant="tip">
            <p>
              "My favourite loop is the Breakwater. It's flat, well-lit, and usually 2–3
              degrees cooler than the city streets because of the sea breeze."
            </p>
          </LocalInsightCard>
        </section>

        {/* Best Time to Go */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Best Time to Go</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Sunset in Townsville is typically early-to-mid evening during the dry season
            (roughly May–October) and a little later in the wet season (November–April).
            Rather than aiming for an exact clock time, plan to arrive about 30–45 minutes
            before sunset — that gives you the best of the golden light beforehand and the
            afterglow once the sun's down.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The dry season is the sweet spot: comfortable temperatures, low humidity and
            reliably clear skies. In the wet season, sunsets can be spectacular after a
            storm rolls through — just check the radar before heading out.
          </p>
        </section>

        {/* Dog-friendly */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Dog className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Walking the Dog at Sunset</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Sunset and dogs go together in Townsville — the pavement has cooled off, the
            breeze is up, and you'll see plenty of locals out with their dogs along the
            foreshore. Max the Giant Schnauzer's favourite loops are the Quayside boardwalk
            near the Breakwater and the wide paved paths at Kissing Point — both stay
            noticeably cooler than the inland streets thanks to the sea breeze.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            The Strand, the Breakwater, Jezzine Barracks and the Rowes Bay foreshore are all
            on-leash. Parts of Pallarenda have designated off-leash times — check current
            council rules before letting the dog run.
          </p>
          <Link to="/dog-friendly" className="text-primary hover:underline text-sm font-medium">
            → Full dog-friendly Townsville guide
          </Link>
        </section>

        {/* Photography */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Camera className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Photography Tips</h2>
          </div>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>
                <strong className="text-foreground">Direction of light:</strong> During the
                dry season the sun rises directly over Cleveland Bay and sets behind Castle
                Hill and the ranges to the west. That means the best sunset silhouettes look
                inland — the Strand pier shot from the Jezzine Barracks end back toward the
                Port is a classic frame.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>
                <strong className="text-foreground">Elevated vantage:</strong> Castle Hill
                and the Kissing Point headland both give you height, which helps compress the
                city, water and island into one frame.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>
                <strong className="text-foreground">Afterglow:</strong> Don't pack up when
                the sun disappears. The 15–20 minutes after sunset — the "blue hour" — often
                give richer colour over the water than sunset itself, especially with a few
                clouds around.
              </span>
            </li>
          </ul>
        </section>

        {/* Second quote */}
        <section className="mb-10">
          <LocalInsightCard title="Local Tip — Jezzine at Golden Hour" variant="tip">
            <p>
              "If I've only got half an hour, I'll head to Kissing Point. The paths stay
              cooler than inland roads, and the headland catches the last of the light
              beautifully — great with a dog in tow."
            </p>
          </LocalInsightCard>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </>
  );
};

export default SunsetWalks;
