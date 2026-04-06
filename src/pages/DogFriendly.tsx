import SEOHead from "@/components/SEOHead";
import { MapPin, Bone, Waves, ArrowRight, Dog, ShieldCheck, Thermometer, Droplets, Fish } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import LocalInsightCard from "@/components/LocalInsightCard";
import StingerSeasonAlert from "@/components/StingerSeasonAlert";

const dogSpots = [
  {
    name: "The Strand (Dog-Friendly Areas)",
    type: "Beach & Promenade",
    dogAccess: "Off-leash before 8am & after 5pm",
    stingerNet: true,
    description: "Townsville's iconic beachfront promenade with designated dog-friendly walking areas. Ideal for sunrise and evening walks with ocean views.",
    features: ["Designated off-leash times (before 8am and after 5pm)", "Beautiful ocean views for walks", "Water fountains and shaded areas", "Close to cafés and restaurants"],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Strand+Townsville",
    badge: "🐾 Schnauzer Approved",
    guideLink: "/the-strand",
    guideLinkText: "View Strand Guide",
  },
  {
    name: "Pallarenda Dog Beach",
    type: "Off-Leash Beach",
    dogAccess: "Off-leash area available",
    stingerNet: true,
    description: "One of Townsville's best off-leash beaches with long sandy stretches, shallow water, and plenty of space for energetic dogs. A top pick for dog swimming in Townsville.",
    features: ["Off-leash beach access", "Long sandy stretches for running", "Shallow, calm waters for swimming dogs", "Natural setting with mangroves nearby"],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Pallarenda+Off+Leash+Dog+Beach",
    badge: "🐾 Schnauzer Approved",
    guideLink: "/pallarenda-beach",
    guideLinkText: "View Off-Leash Guide",
  },
  {
    name: "Bushland Beach Off-Leash Area",
    type: "Off-Leash Beach",
    dogAccess: "Designated off-leash zones",
    stingerNet: false,
    description: "A quieter beach north of Townsville with wide sandy areas and shallow tidal flats that dogs love to explore. Great for morning walks away from the crowds. Check the What's On page for local coffee spots near the beach for your post-walk caffeine fix.",
    features: ["Designated off-leash zones", "Quiet, less crowded beach", "Shallow tidal flats to explore", "Great for morning walks"],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bushland+Beach+Townsville",
  },
];

const faqItems = [
  {
    question: "Are dogs allowed on Townsville beaches?",
    answer: "Yes, several Townsville beaches welcome dogs. Pallarenda has dedicated off-leash areas, The Strand allows off-leash access before 8am and after 5pm, and Bushland Beach has designated off-leash zones. Always check local signage for current rules."
  },
  {
    question: "When can dogs be off-leash on Townsville beaches?",
    answer: "Off-leash times vary by beach. The Strand allows off-leash before 8am and after 5pm. Pallarenda and Bushland Beach have dedicated off-leash areas with broader access. Check council signage at each location."
  },
  {
    question: "Are Townsville beaches safe for dogs during stinger season?",
    answer: "During stinger season (November to May), keep dogs out of the water outside stinger-netted areas. The Strand and Pallarenda have stinger nets. Supervise dogs closely near the waterline and rinse them after beach visits."
  },
];

const DogFriendly = () => {
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
    <>
      <SEOHead
        title="Best Dog-Friendly Beaches in Townsville (Off-Leash Guide 2026)"
        description="Find the best dog friendly beaches in Townsville. Our 2026 guide covers Pallarenda, Saunders Beach, and Bushland Beach with off-leash zones and tropical safety tips."
        canonical="https://www.myaussieguide.com.au/dog-friendly"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-background pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-3 sm:px-4 max-w-4xl space-y-10">

          {/* Intro */}
          <section className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
              Dog-Friendly Beaches in Townsville
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto sm:mx-0 leading-relaxed">
              Townsville has some excellent dog-friendly beaches, but knowing when dogs are allowed off-leash, where stinger nets are active, and how the tropical climate affects dogs is essential. This local guide highlights the best beaches where dogs can safely walk, swim, and explore in North Queensland.
            </p>
          <p className="text-sm text-muted-foreground mt-4">
            Looking for general swimming beaches? See our full <Link to="/beaches" className="text-primary hover:underline font-medium">Townsville Beaches Guide</Link>.
          </p>
          <div className="h-px bg-border w-full mt-6" />
        </section>

          {/* Local Tip */}
          <LocalInsightCard variant="tip" title="☀️ Local Dog Owner Tip">
           <p>
               ☀️ Heat Check (April 6): UV is Extreme (11+). Even with a pleasant 29°C breeze, pavements heat up fast between 10am and 3pm. If it's too hot for the back of your hand for 5 seconds, it's too hot for your dog's paws!
             </p>
          </LocalInsightCard>

          {/* Stinger Alert */}
          <StingerSeasonAlert />

          {/* Beach Listings */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Dog Beaches & Off-Leash Spots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {dogSpots.map((spot, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-t-4 border-t-primary flex flex-col">
                  <CardHeader className="p-4 sm:p-6 pb-3 sm:pb-4">
                    <div className="mb-2">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-1 rounded-full inline-block">
                        {spot.type}
                      </span>
                    </div>
                    <CardTitle className="text-lg sm:text-xl mb-1 leading-tight break-words">{spot.name}</CardTitle>
                    {spot.badge && (
                      <div className="text-sm font-bold text-jade flex items-center gap-1 flex-wrap">
                        {spot.badge}
                      </div>
                    )}
                    <div className="space-y-1 text-xs text-muted-foreground mt-2">
                      <div className="flex items-center gap-2">
                        <Dog className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{spot.dogAccess}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{spot.stingerNet ? "Stinger net available" : "No stinger net"}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4 flex-1 flex flex-col">
                    <p className="text-muted-foreground text-sm leading-relaxed">{spot.description}</p>

                    <div className="space-y-2 flex-1">
                      {spot.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Bone className="w-4 h-4 text-primary/60 mt-0.5 flex-shrink-0" />
                          <span className="break-words">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 pt-2 mt-auto">
                      {spot.guideLink && (
                        <Button asChild className="w-full">
                          <Link to={spot.guideLink}>
                            <span className="truncate">{spot.guideLinkText}</span>
                            <ArrowRight className="w-4 h-4 flex-shrink-0 ml-2" />
                          </Link>
                        </Button>
                      )}
                      <Button variant="outline" size="sm" asChild className="w-full gap-2">
                        <a href={spot.mapUrl} target="_blank" rel="noopener noreferrer">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          View on Google Maps
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Duncan's Local Pro-Tips */}
          <section className="space-y-4">
            <div className="rounded-xl border-2 border-jade bg-[hsl(var(--sand))] p-5 sm:p-6 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">🐾 Duncan's Local Pro-Tips for Tropical Paws</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Thermometer className="w-5 h-5 text-jade mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">The 5-Second Test</p>
                    <p className="text-sm text-muted-foreground mt-1">Sand and bitumen can reach 50°C by mid-morning. If you can't hold the back of your hand to the ground for 5 seconds, it's too hot for your dog's paws.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Fish className="w-5 h-5 text-jade mt-0.5 flex-shrink-0" />
                  <div>
                     <p className="font-semibold text-sm text-foreground">Twilight Toad Alert</p>
                     <p className="text-sm text-muted-foreground mt-1">With the recent humidity, Cane Toads are active near the dunes at Saunders and Bushland Beach at dusk. Keep a close eye on your dog if you're out for a sunset stroll.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Droplets className="w-5 h-5 text-jade mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">Post-Beach Rinse</p>
                    <p className="text-sm text-muted-foreground mt-1">Tropical salt and humidity can cause skin irritation. Always use the fresh-water showers at the Pallarenda boat ramp or The Strand to rinse your dog's coat and paws.</p>
                  </div>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full sm:w-auto border-jade text-jade hover:bg-jade hover:text-white">
                <a href="https://aussiedogguide.com.au" target="_blank" rel="noopener noreferrer">
                  Need an Emergency Protocol? Visit AussieDogGuide.com.au
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </section>

          {/* Dog Safety Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Dog Safety at Townsville Beaches</h2>
            <p className="text-muted-foreground text-sm">
              North Queensland's tropical climate means a few extra precautions when taking your dog to the beach.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/40 border">
                <Thermometer className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm text-foreground">Heat & Hydration</p>
                  <p className="text-xs text-muted-foreground mt-1">Dogs overheat fast in the tropics. Walk early morning or after 4pm, carry fresh water, and watch for signs of heat stress.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/40 border">
                <Droplets className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm text-foreground">Sand Temperature</p>
                  <p className="text-xs text-muted-foreground mt-1">Sand can exceed 50°C in summer. Test the ground with your hand — if it's too hot for you, it's too hot for paws.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/40 border">
                <ShieldCheck className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm text-foreground">Stinger Season</p>
                  <p className="text-xs text-muted-foreground mt-1">🌊 April 6 Update: Stinger nets are ACTIVE. Keep dogs out of the water outside of netted areas at The Strand and Pallarenda. For off-leash runs, Saunders Beach and Bushland Beach are great, but stay on the wet sand near the water's edge to keep paws cool.</p>
                  <p className="text-xs text-muted-foreground mt-1">Review our <Link to="/guides/stinger-safety" className="text-primary hover:underline font-medium">Townsville Stinger Season Guide</Link> for full details.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/40 border">
                <Waves className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm text-foreground">Tide Awareness</p>
                  <p className="text-xs text-muted-foreground mt-1">Some beaches become very shallow or expose rocks at low tide. Check tide times before heading out.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/40 border sm:col-span-2">
                <Fish className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm text-foreground">Wildlife Awareness</p>
                  <p className="text-xs text-muted-foreground mt-1">Cane toads can appear near dunes at dusk and are toxic to dogs. Crocodile warning signs should always be taken seriously. Keep dogs leashed in unfamiliar areas.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Freshwater Swimming & Stinger Alternatives */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">Freshwater Swimming & Stinger Alternatives</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Looking for a stinger-free dip? While Townsville's beaches are iconic, many locals head inland during the peak of the season. Popular spots like Ross River (Loam Island) offer freshwater access, but always be mindful of seasonal crocodile signage and water quality alerts. For the safest saltwater swimming, stick to the netted areas at The Strand and Pallarenda.
            </p>
            <p className="text-sm text-muted-foreground">
              Explore more inland options in our <Link to="/nature" className="text-primary hover:underline font-medium">Nature & Walks guide</Link>.
            </p>
          </section>

          {/* FAQ */}
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
            <h2 className="text-xl font-bold text-foreground">More Townsville Dog & Beach Guides</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { to: "/beaches", label: "Beaches & Swimming Guide" },
                { to: "/guides/magnetic-island-day-trip", label: "Magnetic Island Day Trip" },
                { to: "/pallarenda-beach", label: "Pallarenda Off-Leash Guide" },
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
            Helping Townsville dog owners and visitors find safe, enjoyable places across North Queensland.
          </p>

        </div>
      </div>
    </>
  );
};

export default DogFriendly;
