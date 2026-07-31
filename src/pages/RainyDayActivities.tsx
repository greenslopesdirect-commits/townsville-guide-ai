import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CloudRain, Coffee, Film, Target, Landmark, AlertTriangle, MapPin, DollarSign, Users } from "lucide-react";

const QuickFact = ({
  location,
  cost,
  ages,
}: {
  location: string;
  cost: string;
  ages: string;
}) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
    <div className="flex items-start gap-2 bg-muted/40 rounded-lg p-3">
      <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
      <div>
        <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">Location</p>
        <p className="text-sm font-medium">{location}</p>
      </div>
    </div>
    <div className="flex items-start gap-2 bg-muted/40 rounded-lg p-3">
      <DollarSign className="w-4 h-4 mt-0.5 text-primary shrink-0" />
      <div>
        <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">Cost</p>
        <p className="text-sm font-medium">{cost}</p>
      </div>
    </div>
    <div className="flex items-start gap-2 bg-muted/40 rounded-lg p-3">
      <Users className="w-4 h-4 mt-0.5 text-primary shrink-0" />
      <div>
        <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">Best for ages</p>
        <p className="text-sm font-medium">{ages}</p>
      </div>
    </div>
  </div>
);

const RainyDayActivities = () => (
  <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
    <SEOHead
      title="Rainy Day Activities in Townsville: Wet Season Guide"
      description="A local's guide to the best rainy day activities in Townsville — indoor things to do with kids, cosy cafes, bowling, cinemas and wet season safety tips."
      canonical="https://www.townsvilleguide.com.au/guides/rainy-day-activities"
    />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.townsvilleguide.com.au/" },
              { "@type": "ListItem", position: 2, name: "Guides", item: "https://www.townsvilleguide.com.au/" },
              { "@type": "ListItem", position: 3, name: "Rainy Day Activities", item: "https://www.townsvilleguide.com.au/guides/rainy-day-activities/" },
            ],
          },
          {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "When is the wet season in Townsville?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The wet season generally runs from November through to April, with the heaviest rainfall typically in January, February and March.",
                },
              },
              {
                "@type": "Question",
                name: "Does it rain all day in Townsville's wet season?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Rarely. Most wet season days bring intense bursts of rain lasting 30–90 minutes, often followed by sunshine. All-day rain typically only happens during a tropical low or cyclone system.",
                },
              },
              {
                "@type": "Question",
                name: "What's the best free rainy day activity in Townsville?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Browsing Townsville Central or Castletown shopping centres is free and undercover. For more ideas, see our Top 10 Free Things to Do guide.",
                },
              },
            ],
          },
        ],
      })}</script>
    </Helmet>


    <h1 className="text-4xl font-bold mb-3 text-center">Rainy Day Activities in Townsville</h1>
    <p className="text-center text-lg text-muted-foreground mb-2">Your Wet Season Survival Guide</p>
    <p className="text-center text-sm text-muted-foreground mb-8">Updated: July 13, 2026</p>

    {/* Empathetic Intro */}
    <div className="bg-sky-50 dark:bg-sky-950/30 border-2 border-sky-200 dark:border-sky-800 rounded-xl p-6 mb-10">
      <div className="flex items-start gap-3">
        <CloudRain className="w-6 h-6 text-sky-700 dark:text-sky-300 shrink-0 mt-1" />
        <div>
          <h2 className="text-xl font-bold text-sky-900 dark:text-sky-200 mb-2">When the sky opens up…</h2>
          <p className="text-sky-800 dark:text-sky-300 leading-relaxed">
            We get it. You finally landed in tropical North Queensland, the kids are buzzing, the bags are unpacked — and then a wall of warm rain dumps on the city for the next four hours. Townsville's wet season (roughly November to April) brings sudden, dramatic downpours that can shut down beach plans in minutes. Don't worry: locals know exactly where to go when the radar lights up. Here are the rainy day spots we send our own friends and family to.
          </p>
        </div>
      </div>
    </div>

    {/* Section 1: Cultural & Educational */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Landmark className="w-6 h-6 text-primary" />
        Indoor Cultural &amp; Educational Spots
      </h2>
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">Museum of Tropical Queensland</h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Easily the best rainy-day anchor in town. The museum's centrepiece is the wreck of HMS Pandora — a full-scale recreation that towers over the main hall and tells the story of one of Australia's most fascinating maritime mysteries. Beyond the maritime history, there's a hands-on <strong>MindZone</strong> for kids packed with interactive science exhibits, a coral reef gallery, and rotating dinosaur and natural history displays. You can easily burn 3–4 hours here without anyone noticing the rain.
          </p>
          <QuickFact
            location="70-102 Flinders Street, CBD"
            cost="Adults ~$15 · Kids ~$9 · Family passes available"
            ages="All ages (especially great 4–14)"
          />
        </CardContent>
      </Card>
    </section>

    {/* Section 2: Energy Burners */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Target className="w-6 h-6 text-primary" />
        Energy Burners (Active Indoor)
      </h2>
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">Kingpin Townsville</h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            When the kids (or the adults) are climbing the walls, this is the answer. Kingpin packs <strong>tenpin bowling, laser tag, a massive arcade, pool tables, and karaoke rooms</strong> under one roof in the city centre. It's loud, it's air-conditioned, and it doesn't matter how hard it's bucketing down outside. Great for birthday groups, teen meltdowns, and rainy weekend afternoons.
          </p>
          <QuickFact
            location="Townsville CBD, near Flinders Street"
            cost="From ~$20 per person per activity"
            ages="6+ (toddlers can roll with bumpers)"
          />
        </CardContent>
      </Card>
    </section>

    {/* Section 3: Movie & Chill */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Film className="w-6 h-6 text-primary" />
        Movie &amp; Chill
      </h2>
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">Event Cinemas — Townsville Central</h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            The most reliable rainy-day backup in town. Located right inside Townsville Central, you can park undercover, walk straight in, and catch a session without setting foot in the rain. Standard screens, Vmax for the blockbusters, and Gold Class if you fancy treating yourself. Check Tuesday cheap-day pricing for the best value.
          </p>
          <QuickFact
            location="Townsville Central, Sturt Street"
            cost="From ~$13 standard · Cheap Tuesday ~$10"
            ages="All ages"
          />
        </CardContent>
      </Card>
    </section>

    {/* Section 4: Cosy Cafes */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Coffee className="w-6 h-6 text-primary" />
        Cosy Local Cafes
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">The Chapter House</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              A character-filled CBD cafe set inside a heritage building with plenty of indoor seating. Excellent coffee, big brunch plates, and high ceilings that swallow the noise — perfect for parking up with the family while a downpour rolls through.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-2">Juliette's Gelateria (The Strand)</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              An icon. Indoor and covered outdoor seating right on the waterfront, with a kids' menu and gelato that will absolutely fix a wet-weather mood. Watching a tropical storm roll across Cleveland Bay with a coffee in hand is a very Townsville experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Crucial Safety Callout */}
    <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-400 dark:border-red-700 rounded-xl p-6 mb-12">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-6 h-6 text-red-700 dark:text-red-300 shrink-0 mt-1" />
        <div>
          <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-2">⚠️ Local Safety Tip: Flash Flooding</h3>
          <p className="text-red-800 dark:text-red-300 leading-relaxed mb-3">
            Townsville's tropical downpours can dump <strong>50–100mm of rain in under an hour</strong>. Several known local roads flood fast and without warning. Be especially cautious around:
          </p>
          <ul className="list-disc list-inside text-red-800 dark:text-red-300 space-y-1 mb-3">
            <li>Sections of <strong>Woolcock Street</strong> near the rail underpass</li>
            <li>Low-lying causeways around <strong>Ross River Road</strong> and <strong>Bowen Road</strong></li>
            <li>The Aitkenvale and Mundingburra creek crossings</li>
            <li>Any unsealed road near a creek line in the suburbs</li>
          </ul>
          <p className="text-red-900 dark:text-red-200 font-semibold leading-relaxed">
            The rule locals live by: <em>"If it's flooded, forget it."</em> Never drive through water of unknown depth, even in a 4WD. Check the QLD Traffic app and the Bureau of Meteorology radar before heading out.
          </p>
        </div>
      </div>
    </div>

    {/* Duncan's Pro-Tip */}
    <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-12">
      <h4 className="font-bold text-xl mb-2 text-orange-700">Duncan's Local Pro-Tip</h4>
      <p className="text-orange-900">
        "Townsville rain often comes in <strong>30-to-60 minute bursts</strong> with bright sunshine on either side. If you can wait it out at a cafe with a coffee, you'll often be back on the beach within the hour. Don't write the day off too early!"
      </p>
    </div>

    {/* FAQ */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="faq-1" className="border-border/40">
          <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
            When is the wet season in Townsville?
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground leading-relaxed">
            The wet season generally runs from November through to April, with the heaviest rainfall typically in January, February and March.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2" className="border-border/40">
          <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
            Does it rain all day in Townsville's wet season?
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground leading-relaxed">
            Rarely. Most wet season days bring intense bursts of rain lasting 30–90 minutes, often followed by sunshine. All-day rain typically only happens during a tropical low or cyclone system.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3" className="border-border/40">
          <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
            What's the best free rainy day activity in Townsville?
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground leading-relaxed">
            Browsing Townsville Central or Castletown shopping centres is free and undercover. For more ideas, see our{" "}
            <Link to="/guides/free-things" className="font-semibold text-primary hover:underline">
              Top 10 Free Things to Do
            </Link>{" "}
            guide.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    {/* Internal Linking Cluster */}
    <section className="bg-muted/40 rounded-xl p-6 mb-4">
      <h3 className="text-xl font-bold mb-4">More Townsville Survival Guides</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <Link
          to="/guides/beat-the-heat"
          className="block bg-background border-2 border-border/40 rounded-lg p-4 hover:border-primary hover:shadow-md transition-all"
        >
          <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-1">Local Guide</p>
          <p className="font-semibold text-foreground">Beat the Heat in Townsville →</p>
          <p className="text-sm text-muted-foreground mt-1">Local shortcuts for staying cool when the humidity climbs.</p>
        </Link>
        <Link
          to="/guides/free-things"
          className="block bg-background border-2 border-border/40 rounded-lg p-4 hover:border-primary hover:shadow-md transition-all"
        >
          <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-1">Local Guide</p>
          <p className="font-semibold text-foreground">Top 10 Free Things to Do →</p>
          <p className="text-sm text-muted-foreground mt-1">The best completely free experiences Townsville has to offer.</p>
        </Link>
      </div>
    </section>
  </div>
);

export default RainyDayActivities;
