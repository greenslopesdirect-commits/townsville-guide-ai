import { Helmet } from "react-helmet";
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
    stingerNet: false,
    badge: { label: "Sunset Spot", color: "" },
    icon: <Sun className="w-5 h-5 text-muted-foreground" />,
    tags: ["Quiet", "Sunset Views"],
    description: "Quieter than the Strand. Excellent for sunset walks and fish & chips. Verify tide levels before heading out (it gets very shallow at low tide).",
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
    badge: { label: "⭐ Top Search Pick", color: "bg-amber-100 text-amber-800 hover:bg-amber-100" },
    icon: <Sun className="w-5 h-5 text-muted-foreground" />,
    tags: ["Quiet", "Dog Friendly"],
    description: "6km of unspoilt sand—the ultimate local pick for a peaceful escape. New for May 2026: Check our updated guide for the best stargazing spots and family-friendly beach activities north of the city.",
    guideLink: "/beaches/saunders-beach",
    guideLinkText: "View Full Saunders Beach Guide →",
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
    description: "A sleepy residential beach that becomes very shallow at low tide. April 27 Update: As we transition into the Dry Season, the sunset photography at Toolakea is at its peak. Visit at low tide to capture the vast, reflective sand flats.",
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
        title="Best Beaches in Townsville 2026 | Swimming, Safety & Local Tips"
        description="Updated April 27: Your local-verified guide to Townsville beaches. Includes the new Saunders Beach deep-dive, stinger safety for May 2026, and the best off-leash dog spots."
        canonical="https://www.myaussieguide.com.au/beaches"
      />
      <Helmet>
        <meta name="keywords" content="beaches north of townsville, saunders beach, bushland beach townsville, dog friendly beaches townsville, stinger safety townsville" />
      </Helmet>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
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

        {/* Intro Section */}
        <section className="space-y-4 text-center sm:text-left">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Best Beaches in Townsville — Swimming, Safety & Local Tips
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Townsville offers a variety of beaches for swimming, walking, relaxing, and exploring. This guide covers the safest swimming spots, stinger-net beaches, quieter locations, and dedicated dog-friendly areas across North Queensland.
          </p>
          <p className="text-sm text-muted-foreground">
            🧭 Heading further north? Check out our <Link to="/north-shore-townsville" className="text-primary font-medium hover:underline">North Shore Guide</Link> for the best nature trails and the gateway to Bushland Beach.
          </p>
          <div className="h-px bg-border w-full mt-4" />
        </section>

        {/* Local Tip */}
        <LocalInsightCard variant="tip" title="☀️ Beach Timing Tip">
          <p>
            Early mornings and evenings are best for beach walks in Townsville. Sand temperatures can become very hot during the day, and dogs can overheat quickly in tropical conditions. Always check pavement with your hand before walking your dog.
          </p>
        </LocalInsightCard>

        {/* Dog-Friendly Guide Card */}
        <Card className="border-2 border-primary/20 bg-primary/5">
          <CardContent className="p-5 sm:p-6 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                <Dog className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-semibold text-foreground mb-1">Dog-Friendly Beaches Guide</h2>
                <p className="text-sm text-muted-foreground">
                  Travelling with a dog? See our dedicated guide covering off-leash beaches, safety tips, and the best spots for dogs around Townsville. <strong className="text-foreground">In May, Pallarenda is our top pick for morning runs</strong> — the lower humidity makes it perfect for an early off-leash adventure.
                </p>
              </div>
              <Button asChild className="w-full sm:w-auto flex-shrink-0">
                <Link to="/dog-friendly">
                  View Dog Beach Guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Heading out? Use the <a href="https://www.aussiedogguide.com.au/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">Aussie Dog Guide</a>—Australia's comprehensive resource for safe training and travel. It includes essential tropical safety checklists (Cane Toads, Marine Stingers & Heat Protection) for anyone exploring the North.
            </p>
          </CardContent>
        </Card>

        {/* Stinger Alert */}
        <StingerSeasonAlert />
        <p className="text-sm text-muted-foreground mt-3">
        ☀️ April 27 Update: Dry Season has officially arrived! Stinger nets remain ACTIVE at The Strand and Pallarenda, but Dry Season breezes are clearing the water — visibility is improving daily. With the humidity dropping, it’s peak season for long beach walks and morning runs.{" "}
          <Link to="/guides/stinger-safety" className="text-primary hover:underline font-medium">View the latest Safety Guide →</Link>
        </p>

        {/* Beach Listings */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Beach Guide</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {beaches.map((beach) => (
              <Card key={beach.name} className="hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <Badge
                      className={beach.badge.color || undefined}
                      variant={beach.badge.color ? "default" : "outline"}
                    >
                      {beach.badge.label}
                    </Badge>
                    {beach.icon}
                  </div>
                  <CardTitle className="text-xl mt-2">{beach.name}</CardTitle>
                  <div className="space-y-1 text-sm text-muted-foreground mt-1">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span>{beach.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Dog className="w-4 h-4 flex-shrink-0" />
                      <span>{beach.dogAccess}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                      <span>{beach.stingerNet ? "Stinger net available" : "No stinger net"}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <div className="flex gap-2 flex-wrap">
                    {beach.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm">{beach.description}</p>
                  <div className="mt-auto pt-2 flex flex-col gap-2">
                    {beach.guideLink && (
                      <Button asChild variant={beach.buttonVariant} className="w-full">
                        <Link to={beach.guideLink}>{beach.guideLinkText}</Link>
                      </Button>
                    )}
                    <Button asChild variant="outline" size="sm" className="w-full gap-2">
                      <a
                        href={beach.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${beach.name} on Google Maps`}
                      >
                        <MapPin className="w-4 h-4" />
                        View on Google Maps
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Northern Beaches Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Northern Beaches & Hidden Gems</h2>
          <p className="text-sm text-muted-foreground">Looking for the best beaches north of Townsville? These local favorites offer the best off-leash walking and quiet escapes away from the city crowd.</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {northernBeaches.map((beach) => (
              <Card key={beach.name} className="hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <Badge
                      className={beach.badge.color || undefined}
                      variant={beach.badge.color ? "default" : "outline"}
                    >
                      {beach.badge.label}
                    </Badge>
                    {beach.icon}
                  </div>
                  <h2 className="text-xl font-semibold leading-none tracking-tight mt-2">{beach.name}</h2>
                  <div className="space-y-1 text-sm text-muted-foreground mt-1">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span>{beach.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Dog className="w-4 h-4 flex-shrink-0" />
                      <span>{beach.dogAccess}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                      <span>{beach.stingerNet ? "Stinger net available" : "No stinger net"}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <div className="flex gap-2 flex-wrap">
                    {beach.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm">{beach.description}</p>
                  <div className="mt-auto pt-2 flex flex-col gap-2">
                    <Button asChild variant="outline" size="sm" className="w-full gap-2">
                      <a
                        href={beach.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${beach.name} on Google Maps`}
                      >
                        <MapPin className="w-4 h-4" />
                        View on Google Maps
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Looking for something even more secluded? Explore our <a href="#secret-beaches" className="text-primary font-medium hover:underline">🕵️ Secret Beaches guide</a>.
          </p>
        </section>

        {/* Secret Beaches Section */}
        <section id="secret-beaches" className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">🕵️ Townsville's 5 Best Secret Beaches & Hidden Gems</h2>
          <p className="text-sm text-muted-foreground">These hidden gems are known mostly to locals. They're off the beaten path and worth the effort to find.</p>

          {/* Local Secret — Northern Beaches Callout */}
          <div className="rounded-xl border-2 border-emerald-300 dark:border-emerald-700 bg-emerald-50/70 dark:bg-emerald-950/30 p-5 sm:p-6 flex gap-4 items-start">
            <span className="text-2xl shrink-0" aria-hidden="true">🌅</span>
            <div>
              <p className="font-bold text-emerald-900 dark:text-emerald-200 text-base sm:text-lg">Local Secret: Northern Beaches (Saunders &amp; Toolakea)</p>
              <p className="text-emerald-800 dark:text-emerald-300 text-sm sm:text-base mt-1 leading-relaxed">
                In May, these beaches catch the best of the cooling northern breezes. Perfect for those who want a quiet sunset walk without the Strand crowds.
              </p>
            </div>
          </div>



          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Secret Beach */}
            <Card className="hover:shadow-lg transition-shadow flex flex-col relative">
              <div className="absolute -top-1 right-2 z-10 bg-[#00A693] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                🐾 Schnauzer Approved
              </div>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Off-Leash</Badge>
                  <Dog className="w-5 h-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-xl mt-2">Secret Beach</CardTitle>
                <div className="space-y-1 text-sm text-muted-foreground mt-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>South Townsville (Benwell Rd)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Dog className="w-4 h-4 flex-shrink-0" />
                    <span>Off-leash free-run area</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                    <span>No stinger net</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="text-xs">Dog Friendly</Badge>
                  <Badge variant="outline" className="text-xs">Hidden Gem</Badge>
                </div>
                <p className="text-muted-foreground text-sm">Tucked away at the end of Benwell Road, this is a local favorite for dog owners. It is an official off-leash free-run beach spanning about 520m of foreshore.</p>
                <p className="text-xs font-medium text-[#00A693] italic">🐾 Schnauzer Approved. A true hidden gem for off-leash adventures — just keep an eye out near the water's edge.</p>
                <p className="text-xs text-muted-foreground italic">💡 Best visited at low tide to give your dog plenty of room to run on the sand flats.</p>
                <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                  <p className="text-xs font-medium text-destructive">🐊 Crocodile Caution: Near the mouth of the Ross River. Keep a close eye on your pets near the water's edge.</p>
                </div>
                <div className="mt-auto pt-2">
                  <Button asChild variant="outline" size="sm" className="w-full gap-2">
                    <a href="https://www.google.com/maps/search/?api=1&query=Secret+Beach+South+Townsville" target="_blank" rel="noopener noreferrer" aria-label="View Secret Beach on Google Maps">
                      <MapPin className="w-4 h-4" />
                      View on Google Maps
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Shelly Beach */}
            <Card className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge variant="outline">Secluded</Badge>
                  <Sun className="w-5 h-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-xl mt-2">Shelly Beach</CardTitle>
                <div className="space-y-1 text-sm text-muted-foreground mt-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>Northern tip of Pallarenda</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Dog className="w-4 h-4 flex-shrink-0" />
                    <span>No dogs (Conservation Park)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                    <span>No stinger net</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="text-xs">Hike Access</Badge>
                  <Badge variant="outline" className="text-xs">Pristine</Badge>
                </div>
                <p className="text-muted-foreground text-sm">A secluded, pristine stretch of sand at the northern tip of Pallarenda. Reachable via a hike or mountain bike through the Town Common.</p>
                <p className="text-xs text-muted-foreground italic">💡 Dogs are not allowed in the Cape Pallarenda Conservation Park trails leading to the beach, so this one is for the humans only.</p>
                <div className="mt-auto pt-2">
                  <Button asChild variant="outline" size="sm" className="w-full gap-2">
                    <a href="https://www.google.com/maps/search/?api=1&query=Shelly+Beach+Pallarenda+Townsville" target="_blank" rel="noopener noreferrer" aria-label="View Shelly Beach on Google Maps">
                      <MapPin className="w-4 h-4" />
                      View on Google Maps
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Radical Bay */}
            <Card className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge variant="outline">Day Trip</Badge>
                  <Anchor className="w-5 h-5 text-muted-foreground" />
                </div>
                <CardTitle className="text-xl mt-2">Radical Bay</CardTitle>
                <div className="space-y-1 text-sm text-muted-foreground mt-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>Magnetic Island (hike from Horseshoe Bay)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Dog className="w-4 h-4 flex-shrink-0" />
                    <span>On-leash only</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                    <span>No stinger net</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="text-xs">Hike Access</Badge>
                  <Badge variant="outline" className="text-xs">Paradise</Badge>
                </div>
                <p className="text-muted-foreground text-sm">A secluded paradise on 'Maggie' accessible via a hike from Horseshoe Bay.</p>
                <p className="text-xs text-muted-foreground italic">💡 Dogs are welcome on Magnetic Island but must be on-leash in these bay areas to protect local rock wallabies.</p>
                <div className="mt-auto pt-2">
                  <Button asChild variant="outline" size="sm" className="w-full gap-2">
                    <a href="https://www.google.com/maps/search/?api=1&query=Radical+Bay+Magnetic+Island" target="_blank" rel="noopener noreferrer" aria-label="View Radical Bay on Google Maps">
                      <MapPin className="w-4 h-4" />
                      View on Google Maps
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Beach Safety Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Beach Safety in Townsville</h2>
          <p className="text-muted-foreground text-sm">
            North Queensland's tropical climate means a few extra precautions when visiting the beach.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/40 border">
              <Thermometer className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm text-foreground">Heat & Sun Safety</p>
                <p className="text-xs text-muted-foreground mt-1">Sand can exceed 50°C in summer. Swim early morning or after 4pm. Always wear sunscreen and stay hydrated.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/40 border">
              <ShieldCheck className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm text-foreground">Stinger Season</p>
                <p className="text-xs text-muted-foreground mt-1">☀️ April 27 Update: Dry Season has arrived and the breezes are clearing the water. Stinger nets remain ACTIVE at The Strand and Pallarenda through May — stick to the enclosures for a worry-free swim. <Link to="/guides/stinger-safety" className="text-primary hover:underline font-medium">View the latest Safety Guide →</Link></p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/40 border">
              <Waves className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm text-foreground">Tide Awareness</p>
                <p className="text-xs text-muted-foreground mt-1">Some beaches become very shallow or expose rocks at low tide. April 27 Update: Low tide is in the mid-afternoon this week. It’s the perfect window to explore the sand flats at Rowes Bay or Pallarenda before the sun starts to dip.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/40 border">
              <Dog className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm text-foreground">Dogs at the Beach</p>
                <p className="text-xs text-muted-foreground mt-1">For detailed dog access rules and safety advice, see our dedicated <Link to="/dog-friendly" className="text-primary hover:underline font-medium">Dog-Friendly Beaches Guide</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <div key={i} className="p-4 rounded-lg border bg-card">
                <h3 className="font-semibold text-foreground text-sm">{faq.question}</h3>
                <p className="text-muted-foreground text-sm mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">More Townsville Guides</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { to: "/the-strand", label: "The Strand Beach Guide" },
              { to: "/dog-friendly", label: "Dog-Friendly Beaches" },
              { to: "/guides/magnetic-island-day-trip", label: "Magnetic Island Day Trip" },
            ].map((link) => (
              <Button key={link.to} asChild variant="outline" className="w-full justify-start gap-2 h-auto py-3">
                <Link to={link.to}>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                  {link.label}
                </Link>
              </Button>
            ))}
          </div>
        </section>

        {/* Local Authority Footer */}
        <p className="text-center text-xs text-muted-foreground pt-4 pb-2">
          Helping Townsville locals and visitors discover safe, enjoyable beaches across North Queensland.
        </p>

      </main>
    </div>
  );
};

export default Beaches;
