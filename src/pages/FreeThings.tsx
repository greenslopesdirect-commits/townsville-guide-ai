import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, PiggyBank, Dog, HelpCircle, MapPin } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import LocalInsightCard from "@/components/LocalInsightCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FreeThings = () => {
  const faqs = [
    {
      question: "Is Townsville a good budget destination?",
      answer:
        "Yes — genuinely. Most of the city's headline attractions are outdoor and free: Castle Hill, The Strand, Riverway Lagoons, Jezzine Barracks, the Palmetum and Anderson Park all cost nothing to enjoy. The tropical climate means outdoor time is comfortable for most of the year, and free BBQ facilities and chilled water stations across the city keep daily costs low.",
    },
    {
      question: "What's the best free activity for kids?",
      answer:
        "The Strand Water Park and Riverway Lagoons are the two standouts — both are large, well-shaded, lifeguarded free swimming areas with playgrounds and BBQ facilities nearby. Kids can happily spend a full day at either without spending a cent beyond food.",
    },
    {
      question: "Are the free activities dog-friendly?",
      answer:
        "Many are, on a leash. Castle Hill, The Strand foreshore, Jezzine Barracks and Rowes Bay all welcome leashed dogs. Riverway Lagoons and the Palmetum have their own on-site rules — check signage before you head in. See our full dog-friendly guide for the current details.",
    },
    {
      question: "Do I need to pay for parking at these places?",
      answer:
        "Almost all of the spots on this page have free parking. Castle Hill, Jezzine Barracks, Rowes Bay, the Palmetum, Anderson Park and Riverway all have free on-site or nearby parking. The Strand has a mix of free and metered on-street parking depending on the block.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Free Things to Do in Townsville — Local Budget Guide"
        description="A local guide to the best genuinely free things to do in Townsville — Castle Hill, The Strand, Riverway, Jezzine Barracks, the Palmetum, Anderson Park, Cotters Market and more."
        canonical="https://www.myaussieguide.com.au/guides/free-things"
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
                { "@type": "ListItem", "position": 3, "name": "Free Things to Do", "item": "https://www.myaussieguide.com.au/guides/free-things" },
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
          Free Things to Do in Townsville — A Local Guide
        </h1>

        <img
          src="/5-free-things-to-do.webp"
          alt="View from Castle Hill lookout over Townsville, The Strand and Cleveland Bay — one of the city's best free attractions"
          className="rounded-xl shadow-lg w-full h-[400px] md:h-[500px] object-cover mb-2"
        />
        <p className="text-xs text-muted-foreground italic text-center mb-8">
          The Castle Hill view — Townsville's most popular free attraction.
        </p>

        {/* Intro */}
        <section className="mb-10">
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Townsville is one of the easier Australian cities to enjoy on a tight budget.
            Most of the headline attractions are outdoor and completely free — the Castle
            Hill lookout, the Strand foreshore, the Riverway Lagoons, Jezzine Barracks and
            the Palmetum all cost nothing to visit. Add in free BBQ facilities, chilled
            water stations along The Strand, and a tropical climate that makes outdoor
            time comfortable for most of the year, and it's genuinely possible to have a
            full day out without spending much beyond food.
          </p>
        </section>

        {/* The Spots */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <Gift className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Nine Genuinely Free Things to Do</h2>
          </div>

          <div className="grid gap-6">
            {/* Castle Hill */}
            <Card className="border-l-4 border-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">1. Castle Hill Lookout</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  The classic Townsville view — the whole city, harbour, Strand foreshore
                  and Magnetic Island in one panorama. Drive up Castle Hill Road or walk one
                  of the tracks (the Goat Track is the most direct on foot). Sunrise and
                  sunset are the busiest times, and for good reason.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong className="text-foreground">Practical:</strong> Free parking at
                  the summit. Bring water — there's little shade on the walking tracks.
                </p>
                <Link to="/castle-hill" className="text-primary hover:underline text-sm font-medium">
                  → Full Castle Hill guide
                </Link>
              </CardContent>
            </Card>

            {/* The Strand */}
            <Card className="border-l-4 border-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">2. The Strand</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Townsville's showpiece foreshore: a long flat walkway, a free water park
                  for the kids, the Rockpool for safe swimming, playgrounds, shaded picnic
                  areas and free BBQs. You can easily spend a whole day here without paying
                  for anything beyond food and drinks.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong className="text-foreground">Practical:</strong> Chilled water
                  bollards along the strip — refill your bottle for free. A mix of free and
                  metered on-street parking.
                </p>
                <Link to="/the-strand" className="text-primary hover:underline text-sm font-medium">
                  → Full Strand guide
                </Link>
              </CardContent>
            </Card>

            {/* Riverway */}
            <Card className="border-l-4 border-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">3. Riverway Lagoons</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Free, lifeguarded freshwater swimming lagoons on the Ross River in
                  Thuringowa. Deep natural shade from the surrounding rain trees keeps the
                  temperature down even at midday, which makes it one of the best
                  wet-season swim options in the city. Playgrounds, grassed lawns, cafés
                  and public toilets on-site.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Practical:</strong> Free parking.
                  Ramp entry into the pools makes it accessible for prams and wheelchairs.
                </p>
              </CardContent>
            </Card>

            {/* Jezzine */}
            <Card className="border-l-4 border-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">4. Jezzine Barracks & Kissing Point</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  A free coastal parkland at the northern end of The Strand, combining a
                  paved cliff-top boardwalk, interpretive signage on the site's Indigenous
                  and military history, a heritage battery and picnic lawns with sweeping
                  views over Rowes Bay. Free BBQs make it a solid picnic option too.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong className="text-foreground">Practical:</strong> Free parking,
                  sealed paths throughout — good for prams and wheelchairs.
                </p>
                <Link to="/guides/jezzine-barracks" className="text-primary hover:underline text-sm font-medium">
                  → Full Jezzine Barracks guide
                </Link>
              </CardContent>
            </Card>

            {/* Palmetum */}
            <Card className="border-l-4 border-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">5. The Palmetum</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  A large tropical botanical garden dedicated to palms from around the
                  world — quiet, deeply shaded, and a completely different feel to the
                  coastal spots. A good option for a hot midday when the beach and
                  lookouts are too exposed.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Practical:</strong> Free entry and
                  free parking. Well-formed paths.
                </p>
              </CardContent>
            </Card>

            {/* Anderson Park */}
            <Card className="border-l-4 border-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">6. Anderson Park Botanic Gardens</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Townsville's other major botanic garden — spacious, shaded lawns with
                  a world-class tropical plant collection. A locals' favourite for a
                  low-key picnic and letting the kids explore. Much quieter than the
                  Strand on weekends.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Practical:</strong> Free entry and
                  free on-site parking.
                </p>
              </CardContent>
            </Card>

            {/* Cotters Market */}
            <Card className="border-l-4 border-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">7. Cotters Market (Sunday Mornings)</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Townsville's premier Sunday market takes over Flinders Street from
                  around 8:00 AM to 1:00 PM. The stalls cost money, but the atmosphere —
                  live street music, buskers, coffee smells, local crowd — is free to
                  wander through. A great, cheap way to spend a Sunday morning before
                  heading to The Strand or Riverway.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Practical:</strong> Free on-street
                  parking within a short walk on Sundays. Go early — it can get hot by
                  late morning.
                </p>
              </CardContent>
            </Card>

            {/* Rowes Bay */}
            <Card className="border-l-4 border-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">8. Rowes Bay Foreshore & Sunset Walk</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  A quieter, less-touristed foreshore reserve between Pallarenda and The
                  Strand. Wide open views toward Magnetic Island, grassed picnic areas,
                  and a reliably beautiful sunset — mostly shared with locals walking
                  dogs or having a kickabout.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong className="text-foreground">Practical:</strong> Free foreshore
                  parking, public toilets and shaded picnic areas.
                </p>
                <Link to="/rowes-bay" className="text-primary hover:underline text-sm font-medium">
                  → Full Rowes Bay guide
                </Link>
              </CardContent>
            </Card>

            {/* Water stations */}
            <Card className="border-l-4 border-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">9. Free Chilled Water Stations</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  A small thing but genuinely useful in a tropical climate: Townsville has
                  free black chilled-water bollards along The Strand and in major parks.
                  They're filtered and noticeably colder than tap water. Carry a bottle
                  and you'll save a small fortune on drinks over a hot day out.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Duncan's original quote */}
        <section className="mb-10">
          <LocalInsightCard title="Duncan's Local Pro-Tip" variant="tip">
            <p>
              "Pack a picnic and head to Jezzine Barracks at sunset. There are plenty of
              free BBQ stations and the view over Rowes Bay is world-class."
            </p>
          </LocalInsightCard>
        </section>

        {/* Budget tips */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <PiggyBank className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Stretching a Tight Budget</h2>
          </div>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>
                <strong className="text-foreground">BYO picnic, use the free BBQs.</strong>{" "}
                Jezzine Barracks, The Strand and Riverway all have free public BBQs and
                shaded picnic tables. A stop at the supermarket beforehand turns lunch or
                dinner into a $10-a-head affair.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>
                <strong className="text-foreground">Refill, don't buy.</strong> Carry a
                water bottle and use the free chilled bollards along The Strand rather
                than buying drinks.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>
                <strong className="text-foreground">Park for free.</strong> Castle Hill,
                Jezzine, Rowes Bay, the Palmetum, Anderson Park and Riverway all have free
                on-site parking. The Strand has free on-street options a block or two back
                from the water.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>
                <strong className="text-foreground">Stack a Sunday.</strong> Cotters
                Market in the morning, a picnic and swim at The Strand at midday, then a
                sunset walk at Jezzine or Rowes Bay — all free, all in walking distance of
                each other.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <span>
                <strong className="text-foreground">Have a wet-season backup.</strong>{" "}
                When the rain rolls in, most of these spots become unpleasant fast — see
                our{" "}
                <Link to="/guides/rainy-day-activities" className="text-primary hover:underline">
                  Rainy Day Survival Guide
                </Link>{" "}
                for indoor options.
              </span>
            </li>
          </ul>
        </section>

        {/* Dog-friendly */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Dog className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Free & Dog-Friendly</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Several of the spots on this page double as excellent dog-friendly outings.
            Castle Hill, The Strand foreshore, Jezzine Barracks and the Rowes Bay
            foreshore all welcome dogs on-leash. The paved paths at Jezzine and along the
            Quayside end of The Strand stay noticeably cooler than the inland streets
            thanks to the sea breeze — Max the Giant Schnauzer's picks for a hot-weather
            walk.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Riverway Lagoons and the Palmetum have their own on-site rules for dogs —
            check signage before entering.
          </p>
          <Link to="/dog-friendly" className="text-primary hover:underline text-sm font-medium">
            → Full dog-friendly Townsville guide
          </Link>
        </section>

        {/* Second quote */}
        <section className="mb-10">
          <LocalInsightCard title="Local Tip — Riverway on a Hot Day" variant="tip">
            <p>
              "If it's a scorcher, Riverway wins every time. The rain trees give you deep
              shade right at the water's edge, the pools are free, and you can spend the
              whole day there without paying for anything but an ice cream."
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

        {/* Wet-season pivot (kept from original) */}
        <div className="mt-6 bg-sky-50 border-2 border-sky-200 rounded-xl p-5 text-left">
          <p className="text-sky-900 leading-relaxed">
            ☔ Wet season cutting your free outdoor plans short? Pivot to our{" "}
            <Link to="/guides/rainy-day-activities" className="font-semibold underline hover:text-sky-700">
              Rainy Day Survival Guide
            </Link>{" "}
            for the best indoor things to do in Townsville.
          </p>
        </div>
      </div>
    </>
  );
};

export default FreeThings;
