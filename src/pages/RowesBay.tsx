import { ArrowLeft, MapPin, Info, Sun, Coffee, AlertTriangle, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";

const faqs = [
  {
    q: "Is Rowes Bay good for swimming?",
    a: "Rowes Bay is better known for sunset walks and wading in the shallows than serious swimming. There's no stinger net here, so during stinger season (November–May) most locals stick to The Strand Rockpool at the northern end, which is stinger-free year-round.",
  },
  {
    q: "Are dogs allowed at Rowes Bay?",
    a: "Yes — Rowes Bay is dog-friendly but on-leash only. If you want an off-leash run, keep heading north past the Pallarenda gate (access via Heatley's Parade), where the dedicated dog beach begins.",
  },
  {
    q: "Is there a stinger net at Rowes Bay?",
    a: "No. Unlike The Strand, Rowes Bay does not have a stinger enclosure. During stinger season (Nov–May) wear a stinger suit for any water contact, or swim at The Strand Rockpool instead — it's a fully enclosed saltwater lagoon that stays stinger-free all year.",
  },
  {
    q: "Where's the best spot to watch the sunset at Rowes Bay?",
    a: "Anywhere along the foreshore works, but the grassy area opposite The Fish Inn is a local favourite — grab fish and chips, sit on the grass, and watch the sun drop over Magnetic Island to the north-west.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.townsvilleguide.com.au/" },
        { "@type": "ListItem", position: 2, name: "Beaches", item: "https://www.townsvilleguide.com.au/beaches" },
        { "@type": "ListItem", position: 3, name: "Rowes Bay", item: "https://www.townsvilleguide.com.au/rowes-bay" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const RowesBay = () => {
  return (
    <>
      <SEOHead
        title="Rowes Bay Townsville — Sunset Beach Guide"
        description="A local guide to Rowes Bay Townsville — sunset views, dog-friendly zones, parking and what to know before you visit."
        canonical="https://www.townsvilleguide.com.au/rowes-bay"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="min-h-screen bg-neutral-50 pb-20">
      {/* Hero Section (image intentionally omitted — awaiting a genuine Rowes Bay photo) */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
        <div className="container mx-auto max-w-4xl px-4 text-white">
          <Link to="/beaches" className="inline-flex items-center text-sm text-gray-300 hover:text-primary mb-4 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Beaches
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Rowes Bay</h1>
          <p className="text-xl text-gray-200">The Sunset Strip & Quiet Alternative</p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 mt-8 relative z-30">
        
        {/* Quick Chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <Sun className="h-3 w-3" /> Best for Sunsets
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            Family Friendly
          </span>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
            On-Leash Dogs
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Left Column: Details */}
          <div className="md:col-span-2 space-y-6">
            
            {/* The Vibe */}
            <section className="bg-white rounded-xl p-6 shadow-sm border">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">The Vibe</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Rowes Bay offers a much quieter, more relaxed atmosphere than The Strand. It connects the city to Pallarenda and is famous for its wide, sweeping views of Magnetic Island.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Because of the bay's angle, this is one of the few places on the East Coast where you can watch the sunset over the water (to the North-West). It's a favorite spot for evening walks, fish and chips on the grass, and caravan travelers.
              </p>
            </section>

            {/* Dog Rules */}
            <section className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex items-start gap-3">
                <Info className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h2 className="text-xl font-bold mb-2 text-gray-800">Dog Rules: On-Leash Only</h2>
                  <p className="text-gray-700 mb-4">
                    Unlike Pallarenda (further north), <strong>Rowes Bay is an On-Leash zone</strong>.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800">
                    <strong>Looking for Off-Leash?</strong> Keep heading north. Once you pass the dedicated "Dog Beach" sign near the Pallarenda gate (access via Heatley's Parade), dogs can run free.
                    <br/>
                    <Link to="/pallarenda-beach" className="underline font-semibold mt-2 block">
                      View Pallarenda Off-Leash Guide →
                    </Link>
                  </div>
                </div>
              </div>
            </section>

             {/* Hazards */}
             <section className="bg-white rounded-xl p-6 shadow-sm border border-red-100">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
                <div>
                  <h2 className="text-xl font-bold mb-2 text-gray-800">Swimming Safety</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Stinger Season (Nov - May):</strong> Box Jellyfish and Irukandji are present. Unlike The Strand, Rowes Bay does <strong>not</strong> have a stinger net.</li>
                    <li><strong>Crocodiles:</strong> While rare on the open beach, be "Croc Wise" near creek mouths and at dawn/dusk.</li>
                    <li><strong>Recommendation:</strong> Great for walking and wading in the shallows (in stinger suits during season). For serious swimming, head to <Link to="/the-strand" className="underline text-primary">The Strand Rockpool</Link> — a fully enclosed saltwater lagoon that's stinger-free year-round.</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-3">
                    See our <Link to="/guides/stinger-safety" className="underline text-primary">Stinger &amp; Safety Guide</Link> for the current season status.
                  </p>
                </div>
              </div>
            </section>

            {/* Duncan's Local Tip */}
            <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Quote className="h-6 w-6 text-amber-700 mt-1 shrink-0" />
                <div>
                  <h2 className="text-lg font-bold mb-2 text-amber-900">Duncan's Local Tip</h2>
                  <p className="text-amber-900/90 leading-relaxed text-sm">
                    Time your visit for about 45 minutes before sunset. Park near The Fish Inn, grab a paper-wrapped feed, then walk it across to the grass strip on the foreshore. You'll get Magnetic Island silhouetted against the colour, far fewer people than The Strand, and — if the tide's right — mirror-flat water. Bring a jumper in the Dry; the breeze picks up fast once the sun drops.
                  </p>
                </div>
              </div>
            </section>

            {/* Nearby Guides */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Nearby Guides</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link to="/pallarenda-beach" className="block bg-white rounded-xl p-5 shadow-sm border hover:border-primary hover:shadow-md transition">
                  <h3 className="font-semibold text-gray-800 mb-1">Pallarenda Beach</h3>
                  <p className="text-sm text-gray-600">Off-leash dog beach & quiet northern shoreline.</p>
                </Link>
                <Link to="/guides/sunset-walks" className="block bg-white rounded-xl p-5 shadow-sm border hover:border-primary hover:shadow-md transition">
                  <h3 className="font-semibold text-gray-800 mb-1">Sunset Walks</h3>
                  <p className="text-sm text-gray-600">Best foreshore & headland walks for golden hour.</p>
                </Link>
                <Link to="/jezzine-barracks" className="block bg-white rounded-xl p-5 shadow-sm border hover:border-primary hover:shadow-md transition">
                  <h3 className="font-semibold text-gray-800 mb-1">Jezzine Barracks</h3>
                  <p className="text-sm text-gray-600">Coastal boardwalk linking Rowes Bay to The Strand.</p>
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-xl p-6 shadow-sm border">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-gray-700">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>

          {/* Right Column: Amenities & Map */}
          <div className="space-y-6">
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-gray-600" />
                  Food & Drink
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold">The Fish Inn</h4>
                    <p className="text-sm text-gray-600">Iconic local spot. Grab fish & chips and sit in the park across the road.</p>
                  </div>
                  <div className="border-l-2 border-gray-200 pl-4">
                    <h4 className="font-semibold">Soroptimist Park</h4>
                    <p className="text-sm text-gray-600">Great BBQ facilities and playgrounds for kids.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-neutral-900 text-white rounded-xl p-6 text-center">
              <p className="mb-4 text-sm text-gray-300">Planning a big day out?</p>
              <Button asChild className="w-full bg-white text-neutral-900 hover:bg-gray-200">
                <Link to="/events">Check Events</Link>
              </Button>
            </div>

            {/* Next Stop Card */}
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2 text-foreground">Next Stop</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Walking back? Explore the Jezzine Barracks coastal boardwalk on your way to The Strand.
                </p>
                <Button asChild variant="default" size="sm" className="w-full">
                  <Link to="/jezzine-barracks">View Jezzine Guide</Link>
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default RowesBay;
