import SEOHead from "@/components/SEOHead";
import { MapPin, Bone, Waves, ArrowRight, Dog, ShieldCheck, Thermometer, Droplets, Fish } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import LocalInsightCard from "@/components/LocalInsightCard";
import StingerSeasonAlert from "@/components/StingerSeasonAlert";
import maxQuaysideImg from "@/assets/max-quayside-crown-princess.jpg";
import maxKissingPoint1 from "@/assets/max-at-kissing-point1.webp";

const dogSpots = [
  {
    name: "Pallarenda Dog Beach",
    type: "Off-Leash Beach",
    dogAccess: "Off-leash area available",
    stingerNet: false,
    description: "Our top pick for July. One of Townsville's best off-leash beaches with long sandy stretches, shallow water, and plenty of space for energetic dogs. The massive low-tide sand flats are completely wide open, making it the perfect spot in Townsville for a long game of fetch on the wet sand.",
    features: ["Off-leash beach access", "Long sandy stretches for running", "Shallow, calm waters for swimming dogs", "Nets are now out for the Dry Season, making deep-water fetch much safer.", "Natural setting with mangroves nearby"],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Pallarenda+Off+Leash+Dog+Beach",
    badge: "🏆 July Top Pick",
    guideLink: "/pallarenda-beach",
    guideLinkText: "View Off-Leash Guide",
  },
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
    answer: "Stinger season typically runs November to May. During that period, keep dogs out of the water outside stinger-netted areas. The Strand and Pallarenda have stinger nets. Supervise dogs closely near the waterline and rinse them after beach visits."
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
        title="Dog-Friendly Beaches & Walks Townsville | Local Guide"
        description="Looking for dog-friendly beaches and coastal walks in Townsville? Here is the 2026 local guide to Pallarenda, Rowes Bay, The Strand, and scenic waterfront paths to beat the heat. Includes stinger safety and off-leash times."
        canonical="https://www.townsvilleguide.com.au/dog-friendly"
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
              Dog-Friendly Beaches & Coastal Walks in Townsville
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto sm:mx-0 leading-relaxed">
              Townsville has some excellent dog-friendly beaches and scenic coastal paths, but knowing when dogs are allowed off-leash, where stinger nets are active, and how the tropical climate affects dogs is essential. This local guide highlights the best beaches and waterfront walks where dogs can safely walk, swim, and explore in North Queensland.
            </p>
          <p className="text-sm text-muted-foreground mt-4">
            Looking for general swimming beaches? See our full <Link to="/beaches" className="text-primary hover:underline font-medium">Townsville Beaches Guide</Link>.
          </p>
          <div className="h-px bg-border w-full mt-6" />
        </section>

          {/* Local Tip */}
           <LocalInsightCard variant="tip" title="☀️ Local Dog Owner Tip">
           <p>
               ☀️ Heat Check (July Update): The Dry Season is in full glory. Mornings are beautifully crisp (around 20°C), making it the ultimate time for the Castle Hill Goat Track or Pallarenda sand flat runs. Note: Midday UV is still extreme, so protect those paws and stick to the early mornings or golden hour.
              </p>
              <p>
                🐸 Twilight Toad Alert: With the humidity bottomed out, cane toad activity has slowed down significantly, but they still lurk near the dunes at Bushland Beach and Saunders at dusk. Keep a close eye out during sunset walks.
             </p>
          </LocalInsightCard>

          {/* Stinger Alert */}
          <StingerSeasonAlert />

          {/* Pallarenda Off-Leash Feature Showcase */}
          <section aria-labelledby="pallarenda-offleash-showcase" className="my-8">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-50 bg-gradient-to-r from-teal-50/50 to-transparent">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🐕</span>
                  <div>
                    <h2 id="pallarenda-offleash-showcase" className="text-2xl font-bold text-gray-950">Pallarenda Off-Leash Dog Beach</h2>
                    <p className="text-sm text-gray-600">The premier off-leash coastal run in Townsville — Curated by Max the Giant Schnauzer</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                <div className="rounded-lg overflow-hidden border border-gray-100 h-80 bg-gray-50">
                  <img src="/assets/images/Pallarenda-max2.webp" alt="Max at Heatley Parade Beach Access Sign" className="w-full h-full object-cover" loading="lazy" />
                </div>

                <div className="grid grid-cols-2 gap-4 h-80">
                  <div className="rounded-lg overflow-hidden border border-gray-100 bg-gray-50">
                    <img src="/assets/images/Pallarenda-max1.webp" alt="Max looking out at Pallarenda Beach at sunset" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="rounded-lg overflow-hidden border border-gray-100 bg-gray-50">
                    <img src="/assets/images/Pallarenda-max4.webp" alt="Giant Schnauzer rolling in the sand at Pallarenda" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
                <div className="md:col-span-2 space-y-4">
                  <h3 className="font-bold text-gray-950 text-base">How to Find It & Access Info</h3>
                  <p>The main off-leash zone is located at <strong>Beach Access Point 1 on Heatley Parade</strong> (right where the pavement ends and the coastal road loops back). Look for the green and white Townsville City Council signpost next to the blue pedestrian footbridge.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex gap-2 items-start">
                      <span className="text-teal-600 font-bold">✔</span>
                      <span><strong>Stinger Safety Station:</strong> Access point includes public vinegar stands for peace of mind.</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-teal-600 font-bold">✔</span>
                      <span><strong>Firm Sand Flats:</strong> Low tide uncovers wide, flat stretches perfect for big dog sprints.</span>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50/60 border border-amber-100 rounded-xl p-4 text-amber-950 self-start">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🐾</span>
                    <strong className="text-sm font-bold">Max's Ambassador Pro-Tip:</strong>
                  </div>
                  <p className="text-xs leading-relaxed mb-2">"When you hit the sand at Access 1, head left toward the northern flats. If you come down during a low-tide sunset, the sand is beautifully cool on the paws, the breeze is steady, and the sand quality is absolutely premier for a post-walk roll!"</p>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded">Schnauzer Approved</span>
                </div>
              </div>
            </div>
          </section>

          {/* Local Spotlight - Quayside */}
          <section aria-labelledby="local-spotlight-quayside" className="my-8">
            <Card className="overflow-hidden border-2 border-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <figure className="relative">
                  <img
                    src={maxQuaysideImg}
                    alt="Giant Schnauzer Max at Townsville Cruise Terminal during sunset walk with Crown Princess cruise ship"
                    loading="lazy"
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white text-xs sm:text-sm p-3">
                    Golden hour at the Quayside Terminal. This wide, paved precinct is a local favorite for evening walks—the sea breeze is reliable, and the ground cools down much faster than inland bitumen.
                  </figcaption>
                </figure>
                <CardContent className="p-5 sm:p-6 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs mb-3">
                    <MapPin className="w-4 h-4" /> Local Spotlight
                  </div>
                  <h2 id="local-spotlight-quayside" className="text-xl sm:text-2xl font-bold text-foreground mb-3 leading-tight">
                    Sunset Walks at Quayside Terminal
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">Local Tip:</strong> If you're walking a large breed like a Giant Schnauzer, the Quayside precinct is one of the best spots to beat the North Queensland heat. The wide, paved paths stay cooler than the inland bitumen, and you always get that late-afternoon breeze off the water.
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Quayside+Terminal+Townsville"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                  >
                    View Quayside on Google Maps <ArrowRight className="w-3 h-3" />
                  </a>
                </CardContent>
              </div>
            </Card>
          </section>

          {/* Local Spotlight - Kissing Point */}
          <section aria-labelledby="local-spotlight-kissing-point" className="my-8">
            <Card className="overflow-hidden border-2 border-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <figure className="relative">
                  <img
                    src={maxKissingPoint1}
                    alt="Giant Schnauzer at Kissing Point Fort Townsville sunset"
                    loading="lazy"
                    className="w-full h-64 md:h-full object-cover rounded-lg"
                  />
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white text-xs sm:text-sm p-3">
                    Schnauzer Approved: Max taking in the view from the Kissing Point battery. The wide, paved paths at the barracks stay cooler than inland roads—perfect for large breeds during the July golden hour.
                  </figcaption>
                </figure>
                <CardContent className="p-5 sm:p-6 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs mb-3">
                    <MapPin className="w-4 h-4" /> Dog-Friendly Coastal Walks
                  </div>
                  <h2 id="local-spotlight-kissing-point" className="text-xl sm:text-2xl font-bold text-foreground mb-3 leading-tight">
                    Kissing Point & Jezzine Boardwalks
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                    <strong className="text-foreground">July Local Tip:</strong> The elevated boardwalks at Jezzine Barracks are paved, shaded by Norfolk pines, and catch the evening sea breeze. Ideal for an on-leash sunset stroll with your dog before dinner on Gregory Street.
                  </p>
                  <Link to="/guides/jezzine-barracks" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
                    View Jezzine Guide <ArrowRight className="w-3 h-3" />
                  </Link>
                </CardContent>
              </div>
            </Card>
          </section>

          {/* Beach Listings */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Dog Beaches & Off-Leash Spots</h2>
            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-700 rounded-lg p-4 mb-2">
              <p className="text-sm text-amber-800 dark:text-amber-300 font-medium">
                ⚠️ Safety First: During Stinger Season, stick to the wet sand for fetch. Check our{" "}
                <Link to="/guides/stinger-safety" className="text-amber-900 dark:text-amber-200 hover:underline font-semibold">
                  Stinger Safety Guide
                </Link>{" "}
                for current net status before you head out.
              </p>
            </div>
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

          {/* Exact Off-Leash Dog Beach Boundaries */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Exact Off-Leash Dog Beach Boundaries</h2>
            <ul className="list-disc pl-5 space-y-3 text-sm text-muted-foreground">
              <li><strong>Pallarenda Dog Beach:</strong> Fully off-leash on the sand starting exclusively from Beach Access Ramp 17 (clearly signposted) heading North all the way to the Cape Pallarenda National Park boundary. Dogs must remain on-leash in the main park, playground, and car park areas.</li>
              <li><strong>Saunders Beach:</strong> Dogs are permitted off-leash on the wide open beach area starting from the northern side of the main boat ramp area heading north. Ensure dogs are under effective voice control at all times.</li>
              <li><strong>Bushland Beach:</strong> Designated off-leash sandy areas are located further along the beach flats well away from the resort and main stinger/swimming zones. Check the local entry signage for exact daily seasonal zoning.</li>
            </ul>
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
                    <p className="text-sm text-muted-foreground mt-1">Tropical salt and humidity can cause skin irritation. The fresh-water showers at the Pallarenda boat ramp are a lifesaver for rinsing salt out of thick coats (like Max's!) before the drive home. The Strand showers also work in a pinch.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-jade mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">🌿 Dry Season Bonus</p>
                    <p className="text-sm text-muted-foreground mt-1">Not a beach fan? In July, the Ross River Parkway (near Loam Island) offers miles of shaded, wind-swept paths that are much cooler than the coastal dunes during midday.</p>
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
                  <p className="font-medium text-sm text-foreground">Stinger Season Ended</p>
                  <p className="text-xs text-muted-foreground mt-1">☀️ July Update: The 2025/26 stinger season has concluded and Townsville City Council removed the enclosures at The Strand, Pallarenda, Magnetic Island and Balgal Beach on 27 May 2026, after weeks of clear net drags confirmed no stinger presence. Nets return each November for the next season. Your dogs can now safely enjoy deep-water swimming at northern beaches like Saunders, Toolakea, and Bushland Beach without the summer worry. Remember to give them a good fresh-water rinse afterward to remove the tropical salt and sand!</p>
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
