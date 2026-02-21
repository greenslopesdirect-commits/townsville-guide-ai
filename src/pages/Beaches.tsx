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
    dogAccess: "On-leash only",
    stingerNet: true,
    badge: { label: "Most Popular", color: "bg-blue-600 hover:bg-blue-700" },
    icon: <Umbrella className="w-5 h-5 text-muted-foreground" />,
    tags: ["Stinger Nets", "Rockpool", "Water Park"],
    description:
      "The city's playground. Features a swimming enclosure, the rockpool, water park for kids, and endless cafes. Safe for swimming inside nets.",
    guideLink: "/the-strand",
    guideLinkText: "View Strand Guide",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Strand+Townsville",
  },
  {
    name: "Pallarenda Beach",
    location: "North of City (10min drive)",
    dogAccess: "Off-leash area available",
    stingerNet: true,
    badge: { label: "Dog Friendly", color: "bg-emerald-100 text-emerald-800" },
    icon: <Dog className="w-5 h-5 text-muted-foreground" />,
    tags: ["Off-Leash Area", "Stinger Net"],
    description:
      "A long stretch of sand perfect for dog walking. Features a permanent stinger net and designated off-leash zones. One of the best off-leash beaches in Townsville.",
    guideLink: "/dog-friendly",
    guideLinkText: "View Dog Beach Guide",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Pallarenda+Beach+Townsville",
  },
  {
    name: "Rowes Bay",
    location: "Between Strand & Pallarenda",
    dogAccess: "On-leash",
    stingerNet: true,
    badge: { label: "Sunset Spot", color: "" },
    icon: <Sun className="w-5 h-5 text-muted-foreground" />,
    tags: ["Stinger Net", "Quiet"],
    description:
      "Quieter than the Strand. Excellent for sunset walks and fish & chips. Has a stinger net but verify tide levels (it gets shallow).",
    guideLink: "/rowes-bay",
    guideLinkText: "View Rowes Bay Guide",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rowes+Bay+Townsville",
  },
  {
    name: "Magnetic Island Beaches",
    location: "20min Ferry Ride",
    dogAccess: "Varies by beach",
    stingerNet: true,
    badge: { label: "Day Trip", color: "" },
    icon: <Anchor className="w-5 h-5 text-muted-foreground" />,
    tags: ["Alma Bay", "Horseshoe Bay"],
    description:
      "World-class beaches north of Townsville. Alma Bay is patrolled and family friendly. Horseshoe Bay has water sports and stinger nets.",
    guideLink: "/guides/magnetic-island-day-trip",
    guideLinkText: "View Day Trip Guide",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Magnetic+Island+Queensland",
  },
];

const northernBeaches = [
  {
    name: "Saunders Beach",
    location: "30 min North",
    dogAccess: "Dog friendly",
    stingerNet: false,
  },
  {
    name: "Toolakea Beach",
    location: "40 min North",
    dogAccess: "On-leash",
    stingerNet: false,
  },
  {
    name: "Balgal Beach",
    location: "1 hour North",
    dogAccess: "Dog friendly",
    stingerNet: true,
  },
];

const Beaches = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">

      <SEOHead
        title="Best Beaches in Townsville — Swimming, Safety & Local Tips"
        description="Local guide to the best beaches in Townsville. Find stinger net locations, safe swimming spots, quiet beaches, and dog-friendly areas across North Queensland."
        canonical="https://www.myaussieguide.com.au/beaches"
      />

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl space-y-10">

        {/* Intro */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">
            Best Beaches in Townsville — Swimming, Safety & Local Tips
          </h1>
          <p className="text-muted-foreground">
            Townsville offers a variety of beaches for swimming, walking,
            relaxing, and exploring across North Queensland.
          </p>
        </section>

        {/* Local Tip */}
        <LocalInsightCard variant="tip" title="☀️ Beach Timing Tip">
          <p>
            Early mornings and evenings are best. Sand temperatures can exceed
            50°C in summer and dogs can overheat quickly.
          </p>
        </LocalInsightCard>

        {/* Stinger Alert Component */}
        <StingerSeasonAlert />

        {/* Beach Guide */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Beach Guide</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {beaches.map((beach) => (
              <Card key={beach.name}>
                <CardHeader>
                  <Badge className={beach.badge.color || undefined}>
                    {beach.badge.label}
                  </Badge>
                  <CardTitle className="mt-2">{beach.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{beach.location}</p>
                  <p className="text-sm">{beach.dogAccess}</p>
                  <p className="text-sm">
                    {beach.stingerNet ? "Stinger net available" : "No stinger net"}
                  </p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex gap-2 flex-wrap">
                    {beach.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {beach.description}
                  </p>
                  <Button asChild>
                    <Link to={beach.guideLink}>{beach.guideLinkText}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Northern Beaches */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">
            Northern Beaches & Hidden Gems
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {northernBeaches.map((beach) => (
              <Card key={beach.name}>
                <CardHeader>
                  <CardTitle>{beach.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{beach.location}</p>
                  <p className="text-sm">{beach.dogAccess}</p>
                  <p className="text-sm">
                    {beach.stingerNet ? "Stinger net available" : "No stinger net"}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Safety Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Beach Safety in Townsville</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-4 border rounded-lg">
              <Thermometer className="w-5 h-5 text-orange-500 mb-2" />
              <p className="font-medium">Heat & Sun Safety</p>
              <p className="text-sm text-muted-foreground">
                Swim early morning or after 4pm. Wear sunscreen and hydrate.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <ShieldCheck className="w-5 h-5 text-amber-500 mb-2" />
              <p className="font-medium">Stinger Season</p>
              <p className="text-sm text-muted-foreground">
                Marine stingers present November–May.
                See our <Link to="/guides/stinger-safety" className="underline">Stinger Safety Guide</Link>.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <Waves className="w-5 h-5 text-cyan-500 mb-2" />
              <p className="font-medium">Tide Awareness</p>
              <p className="text-sm text-muted-foreground">
                Check tide times especially at Rowes Bay.
              </p>
            </div>

            <div className="p-4 border rounded-lg">
              <Dog className="w-5 h-5 text-emerald-500 mb-2" />
              <p className="font-medium">Dogs at the Beach</p>
              <p className="text-sm text-muted-foreground">
                See our <Link to="/dog-friendly" className="underline">Dog-Friendly Beaches Guide</Link>.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Beaches;
