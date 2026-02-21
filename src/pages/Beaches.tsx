import { MapPin, ArrowRight, Umbrella, Waves, Dog, Sun, Anchor, ShieldCheck, Thermometer } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import LocalInsightCard from "@/components/LocalInsightCard";
import StingerSeasonAlert from "@/components/StingerSeasonAlert";

const beaches = [
  {
    name: "The Strand",
    location: "Townsville's Foreshore",
    distance: "City Centre",
    dogAccess: "On-leash only",
    stingerNet: true,
    badge: { label: "Most Popular", color: "bg-blue-600 hover:bg-blue-700" },
    icon: <Umbrella className="w-5 h-5 text-muted-foreground" />,
    tags: ["Stinger Nets", "Rockpool", "Water Park"],
    description: "The city's playground. Features a swimming enclosure, the rockpool, water park for kids, and endless cafes. Safe for swimming inside nets.",
    guideLink: "/the-strand",
    guideLinkText: "View Strand Guide",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Strand+Townsville",
    buttonVariant: "default" as const,
  },
  {
    name: "Pallarenda Beach",
    location: "North of City (10min drive)",
    distance: "10 min drive north",
    dogAccess: "Off-leash area available",
    stingerNet: true,
    badge: { label: "Dog Friendly", color: "bg-emerald-100 text-emerald-800 hover:bg-emerald-100" },
    icon: <Dog className="w-5 h-5 text-muted-foreground" />,
    tags: ["Off-Leash Area", "Stinger Net"],
    description: "A long stretch of sand perfect for dog walking. Features a permanent stinger net and designated off-leash zones. One of the best off-leash beaches in Townsville.",
    guideLink: "/pallarenda-beach",
    guideLinkText: "View Dog Beach Guide",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Pallarenda+Beach+Townsville",
    buttonVariant: "outline" as const,
  },
  {
    name: "Rowes Bay",
    location: "Between Strand & Pallarenda",
    distance: "5 min drive north",
    dogAccess: "On-leash",
    stingerNet: true,
    badge: { label: "Sunset Spot", color: "" },
    icon: <Sun className="w-5 h-5 text-muted-foreground" />,
    tags: ["Stinger Net", "Quiet"],
    description: "Quieter than the Strand. Excellent for sunset walks and fish & chips. Has a stinger net but verify tide levels (it gets shallow).",
    guideLink: "/rowes-bay",
    guideLinkText: "View Rowes Bay Guide",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rowes+Bay+Townsville",
    buttonVariant: "outline" as const,
  },
  {
    name: "Magnetic Island Beaches",
    location: "20min Ferry Ride",
    distance: "20 min ferry",
    dogAccess: "Varies by beach",
    stingerNet: true,
    badge: { label: "Day Trip", color: "" },
    icon: <Anchor className="w-5 h-5 text-muted-foreground" />,
    tags: ["Alma Bay", "Horseshoe Bay"],
    description: "World-class beaches north of Townsville. Alma Bay is patrolled and family friendly. Horseshoe Bay has water sports and stinger nets.",
    guideLink: "/guides/magnetic-island-day-trip",
    guideLinkText: "View Day Trip Guide",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Magnetic+Island+Queensland",
    buttonVariant: "outline" as const,
  },
];

const northernBeaches = [
  {
    name: "Saunders Beach",
    location: "30 min North",
    distance: "30 min drive north",
    dogAccess: "Dog friendly",
    stingerNet: false,
    badge: { label: "Quiet", color: "" },
    icon: <Sun className="w-5 h-5 text-muted-foreground" />,
    tags: ["Quiet", "Dog Friendly"],
    description: "The local pick for an unspoilt escape. 6km of golden sand and no crowds—perfect for a long, peaceful walk.",
    guideLink: undefined,
    guideLinkText: undefined,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Saunders+Beach+Queensland",
    buttonVariant: "outline" as const,
  },
  {
    name: "Toolakea Beach",
    location: "40 min North",
    distance: "40 min drive north",
    dogAccess: "On-leash",
    stingerNet: false,
    badge: { label: "Remote", color: "" },
    icon: <Waves className="w-5 h-5 text-muted-foreground" />,
    tags: ["Birdwatching", "Remote"],
    description: "A sleepy residential beach that becomes very shallow at low tide. Great for birdwatching or a quiet family picnic.",
    guideLink: undefined,
    guideLinkText: undefined,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Toolakea+Beach+Queensland",
    buttonVariant: "outline" as const,
  },
  {
    name: "Balgal Beach",
    location: "1 hour North",
    distance: "1 hr drive north",
    dogAccess: "Dog friendly",
    stingerNet: true,
    badge: { label: "Day Trip", color: "" },
    icon: <Anchor className="w-5 h-5 text-muted-foreground" />,
    tags: ["Stinger Net", "Camping"],
    description: "The only beach north of the city with a patrolled stinger net (Nov–May). Excellent boat ramp and a great \"day trip\" escape.",
    guideLink: undefined,
    guideLinkText: undefined,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Balgal+Beach+Queensland",
    buttonVariant: "outline" as const,
  },
];

const faqItems = [
  {
    question: "Are dogs allowed on Townsville beaches?",
    answer: "Yes, dogs are allowed on several Townsville beaches. Pallarenda Beach has designated off-leash areas, while most other beaches like The Strand require dogs to be on-leash. Always check local signage for current rules."
  },
  {
    question: "When is stinger season in Townsville?",
    answer: "Stinger season in Townsville runs from November to May. During this time, always swim within stinger nets or enclosures. The Strand, Pallarenda, and Rowes Bay all have stinger nets available."
  },
  {
    question: "Which Townsville beaches have stinger nets?",
    answer: "The Strand, Pallarenda Beach, and Rowes Bay all have stinger nets installed during stinger season (November to May). Horseshoe Bay on Magnetic Island also has nets. Always check with lifesavers for current conditions."
  },
  {
    question: "What is the best stinger-free swimming spot near Townsville?",
    answer: "Little Crystal Creek in Paluma National Park offers refreshing freshwater mountain pools that are completely safe from stingers year-round."
  },
];

const Beaches = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Best Beaches in Townsville (2026 Guide) | Stinger Nets, Dog-Friendly & Safe Swimming"
        description="Looking for the best beaches in Townsville? Discover which beaches have stinger nets, where dogs are allowed, and the safest swimming spots for 2026. Local guide to The Strand, Pallarenda, Rowes Bay & Magnetic Island."
        canonical="https://www.myaussieguide.com.au/beaches"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-card border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm font-medium transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Beaches Guide
          </span>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl space-y-10">

        <section className="space-y-4 text-center sm:text-left">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Best Beaches in Townsville — Swimming, Safety & Local Tips
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Townsville offers some of the best beaches in North Queensland for safe swimming, sunset walks, dog-friendly outings and tropical relaxation. This local guide covers stinger-net beaches, quieter coastal spots, and family-friendly swimming areas across the Townsville region.
          </p>
          <div className="h-px bg-border w-full mt-4" />
        </section>

        <LocalInsightCard variant="tip" title="☀️ Beach Timing Tip">
          <p>
            Early mornings and evenings are best for beach walks in Townsville. Sand temperatures can become very hot during the day, and dogs can overheat quickly in tropical conditions. Always check pavement with your hand before walking your dog.
          </p>
        </LocalInsightCard>

        <Card className="border-2 border-primary/20 bg-primary/5">
          <CardContent className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
              <Dog className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-semibold text-foreground mb-1">Dog-Friendly Beaches Guide</h2>
              <p className="text-sm text-muted-foreground">
                Travelling with a dog? See our dedicated guide covering off-leash beaches, safety tips, and the best spots for dogs around Townsville.
              </p>
            </div>
            <Button asChild className="w-full sm:w-auto flex-shrink-0">
              <Link to="/dog-friendly">
                View Dog Beach Guide
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <StingerSeasonAlert />

        {/* Beach Guide Cards and remaining sections unchanged from your version */}

      </main>
    </div>
  );
};

export default Beaches;
