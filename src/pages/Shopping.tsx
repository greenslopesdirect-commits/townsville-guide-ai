import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft,
  MapPin,
  ShoppingBag,
  Check,
  Store,
  Coffee,
  Calendar,
  Quote,
  HelpCircle,
} from "lucide-react";

interface ShoppingCardProps {
  title: string;
  description: string;
  features: string[];
  mapUrl: string;
  icon: React.ReactNode;
  type: string;
  bestFor?: string;
}

const ShoppingCard = ({ title, description, features, mapUrl, icon, type, bestFor }: ShoppingCardProps) => (
  <Card className="overflow-hidden hover:shadow-[var(--shadow-tropical)] transition-all duration-300 border-2 hover:border-primary/30">
    <CardHeader className="bg-gradient-to-br from-primary/5 to-transparent pb-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            {icon}
          </div>
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="text-sm mt-1">{type}</CardDescription>
          </div>
        </div>
      </div>
    </CardHeader>
    <CardContent className="pt-4 space-y-4">
      <p className="text-muted-foreground leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {bestFor && (
        <div className="rounded-lg bg-primary/5 border border-primary/10 px-3 py-2 text-sm">
          <span className="font-semibold text-foreground">Best for: </span>
          <span className="text-muted-foreground">{bestFor}</span>
        </div>
      )}
      <Button variant="outline" size="sm" asChild className="gap-2 w-full sm:w-auto">
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} on Google Maps`}
        >
          <MapPin className="w-4 h-4" />
          View on Google Maps
        </a>
      </Button>
    </CardContent>
  </Card>
);

const Shopping = () => {
  const shoppingCentres: ShoppingCardProps[] = [
    {
      title: "Castletown Shopping Centre",
      description:
        "A well-established, walkable centre in Hyde Park, just a short drive south of the CBD. Castletown has a relaxed, community feel — locals pop in for groceries, a coffee, and a browse rather than a full-day shop. It's fully air-conditioned, which makes it a genuine relief in the wet season.",
      features: [
        "Supermarket and everyday essentials",
        "Cafés and casual dining",
        "Fashion, homewares and specialty stores",
        "Undercover and outdoor parking",
      ],
      bestFor:
        "A quick, low-stress shop close to town — groceries, a coffee stop, or errands without the crowds of a mega-centre.",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Castletown+Shopping+World+Townsville",
      icon: <Store className="w-6 h-6" />,
      type: "Neighbourhood Centre · Hyde Park",
    },
    {
      title: "Willows Shopping Centre",
      description:
        "Out in the western suburbs around Kirwan, Willows is a big family-focused centre with a cinema, major supermarkets, and a strong mix of national retailers. It's typically a 15–20 minute drive from the CBD and popular with locals from Kirwan, Thuringowa and the Upper Ross.",
      features: [
        "Cinema complex on-site",
        "Full-line supermarkets and department stores",
        "Fashion, sports and homewares",
        "Large free car park",
      ],
      bestFor:
        "Families and western-suburbs locals wanting a one-stop weekend outing — shop, eat, and catch a movie in one trip.",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Willows+Shopping+Centre+Townsville",
      icon: <ShoppingBag className="w-6 h-6" />,
      type: "Regional Centre · Kirwan",
    },
    {
      title: "Stockland Townsville",
      description:
        "Townsville's largest shopping centre, in Aitkenvale about 10 minutes south of the CBD. This is where you go for serious retail — a broad specialty-store lineup, department-store anchors, a big food precinct and cinemas. It gets busy on weekends and public holidays.",
      features: [
        "Extensive specialty-store lineup",
        "Department stores and major anchors",
        "Large dining and food-court precinct",
        "Cinemas and entertainment",
        "Multi-level covered parking",
      ],
      bestFor:
        "A proper shopping day out — fashion browsing, gift hunting, or anything you can't find at your local centre.",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Stockland+Townsville+Aitkenvale",
      icon: <ShoppingBag className="w-6 h-6" />,
      type: "Major Regional Centre · Aitkenvale",
    },
  ];

  const markets: ShoppingCardProps[] = [
    {
      title: "Cotters Market",
      description:
        "Townsville's flagship Sunday market and a proper local institution. Runs every Sunday morning on Flinders Street in the CBD, from 8:00 AM to 1:00 PM. Expect fresh coffee, local North Queensland crafts, artisan food stalls and live street music — a perfect way to start a Sunday before heading to the Strand.",
      features: [
        "Every Sunday, 8:00 AM – 1:00 PM",
        "Flinders Street, Townsville CBD",
        "Fresh coffee, food stalls and local produce",
        "Handmade crafts and live music",
      ],
      bestFor:
        "A slow Sunday morning — coffee, a wander, and a bit of local colour before the day heats up.",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Cotters+Market+Flinders+Street+Townsville",
      icon: <Coffee className="w-6 h-6" />,
      type: "Weekly · Sunday Morning",
    },
    {
      title: "North Shore Market",
      description:
        "A smaller, family-friendly community market in the North Shore area. It has a relaxed, neighbourhood feel — local stalls, breakfast vendors, and plenty of space for kids. Good for a morning browse if you're already staying out north.",
      features: [
        "Local artisan and craft stalls",
        "Breakfast and coffee vendors",
        "Family-friendly, kid-friendly space",
        "Quieter alternative to Cotters",
      ],
      bestFor:
        "Locals and visitors staying on the north side who'd rather skip the CBD run.",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=North+Shore+Market+Townsville",
      icon: <Calendar className="w-6 h-6" />,
      type: "Community Market · North Shore",
    },
  ];

  const faqs = [
    {
      question: "What are the best shopping centres in Townsville?",
      answer:
        "The three main centres are Stockland Townsville in Aitkenvale (the largest, with the widest range of stores and a cinema), Willows Shopping Centre in Kirwan (family-focused with a cinema, great for the western suburbs), and Castletown in Hyde Park (a smaller, walkable centre closer to the CBD, good for a quick shop). Which suits you best depends on where you're staying and how much shopping you actually want to do.",
    },
    {
      question: "When is Cotters Market on?",
      answer:
        "Cotters Market runs every Sunday morning on Flinders Street in the Townsville CBD, from 8:00 AM to 1:00 PM. Get there early in the dry season — the morning air is cool and the atmosphere is at its best before the sun climbs.",
    },
    {
      question: "Is there a night market in Townsville?",
      answer:
        "Yes — the Strand Night Markets run along The Strand foreshore on the first Friday of the month during the dry season, typically from around 5:00 PM. You'll find North Queensland food trucks, arts, crafts and live music under the palms. It's seasonal, so it winds down over the wet-season months. See our Strand guide for the next date.",
    },
    {
      question: "Where's the best place to shop for local souvenirs and crafts?",
      answer:
        "Skip the tourist trinkets and head to the markets. Cotters Market on Sunday morning has genuine local craft, art and produce, and the Strand Night Markets (first Friday of the month, dry season) are strong for handmade pieces from North Queensland makers.",
    },
    {
      question: "Are the shopping centres open on Sundays and public holidays?",
      answer:
        "The major centres — Stockland, Willows and Castletown — generally trade on Sundays with reduced hours, and most public holidays with further reduced or restricted hours. Trading hours can change around Christmas, Easter and Anzac Day, so check the individual centre's website before making a special trip.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Shopping & Markets in Townsville — Local Guide"
        description="A local guide to shopping in Townsville — Stockland, Willows and Castletown shopping centres, plus Cotters Market and the Strand Night Markets."
        canonical="https://www.myaussieguide.com.au/shopping"
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
                { "@type": "ListItem", "position": 2, "name": "Shopping & Markets", "item": "https://www.myaussieguide.com.au/shopping" },
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

      <div className="min-h-screen bg-background">
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Back Button */}
            <Link to="/">
              <Button
                variant="ghost"
                className="mb-6 group"
                aria-label="Back to home"
              >
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>

            {/* Hero Header */}
            <header className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <ShoppingBag className="w-4 h-4" />
                Shopping Guide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Shopping & Markets in Townsville
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Townsville's retail scene is split between three main shopping centres — Stockland, Willows and Castletown — and a small but loyal weekend market circuit. This guide covers where each one fits, what it's best for, and when the markets are actually on.
              </p>
            </header>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {[
                { icon: <ShoppingBag className="w-5 h-5" />, label: "3 Major Centres", sublabel: "Stockland, Willows, Castletown" },
                { icon: <Store className="w-5 h-5" />, label: "Aitkenvale Hub", sublabel: "Stockland — the largest" },
                { icon: <Coffee className="w-5 h-5" />, label: "Sunday Mornings", sublabel: "Cotters Market, CBD" },
                { icon: <Calendar className="w-5 h-5" />, label: "First Friday", sublabel: "Strand Night Markets" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-2xl bg-card border-2 hover:border-primary/30 transition-colors">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-2">
                    {stat.icon}
                  </div>
                  <p className="font-semibold text-foreground">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
                </div>
              ))}
            </div>

            {/* Shopping Centres Section */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Store className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Shopping Centres
                  </h2>
                  <p className="text-muted-foreground">The three main indoor centres, and what each one is actually good for</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {shoppingCentres.map((centre, index) => (
                  <ShoppingCard key={index} {...centre} />
                ))}
              </div>
            </section>

            {/* Duncan Local Tip */}
            <section className="mb-16">
              <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-6 md:p-8">
                <div className="flex gap-4">
                  <Quote className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-base md:text-lg text-foreground leading-relaxed italic mb-3">
                      "In the wet season, an air-conditioned centre stops being a shopping trip and starts being a genuine escape. Stockland's my pick on a 34-degree humid afternoon — you can drift between shops, grab a coffee, and still be indoors when the storm rolls through."
                    </p>
                    <p className="text-sm font-semibold text-foreground">— Duncan, MyAussieGuide</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Markets Section */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Coffee className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Local Markets
                  </h2>
                  <p className="text-muted-foreground">Weekend markets for coffee, produce and North Queensland crafts</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {markets.map((market, index) => (
                  <ShoppingCard key={index} {...market} />
                ))}
              </div>

              {/* Night Markets callout */}
              <div className="mt-6 rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Strand Night Markets
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  On the first Friday of each month during the dry season, The Strand Night Markets take over Strand Park from around 5:00 PM — local food trucks, arts, crafts and live music under the palms. Full details, next date and location on our{" "}
                  <Link to="/the-strand" className="text-primary font-medium hover:underline">
                    Strand guide
                  </Link>.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <HelpCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Shopping FAQs
                  </h2>
                  <p className="text-muted-foreground">The questions we get asked most about shopping in Townsville</p>
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-8 border-2">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Explore More of Townsville
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Pair your shopping trip with a coffee, a beach, or a Sunday event.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild>
                  <Link to="/food">Food & Drink</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/events">Events Calendar</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/the-strand">The Strand</Link>
                </Button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Shopping;
