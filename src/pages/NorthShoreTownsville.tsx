import { Link } from "react-router-dom";
import { ArrowRight, TreePine, Users, ShoppingBag, Bird, Trophy, MapPin, Waves, Camera, Coffee, Droplets, ExternalLink, Dog, Leaf, Ruler, Mountain, Heart, Accessibility } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import LocalInsightCard from "@/components/LocalInsightCard";

const NorthShoreTownsville = () => {
  return (
    <>
      <SEOHead
        title="North Shore Townsville: Nature, Community & Guide (July 2026)"
        description="Discover Townsville's North Shore. From the Burdell Wetlands and Leisure Centre to the best local coffee, explore our updated July 2026 guide to the northern heart of the city."
        canonical="https://www.townsvilleguide.com.au/north-shore-townsville"
      />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-muted/30 border-b">
          <div className="max-w-4xl mx-auto px-4 py-12 md:py-16 space-y-4">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-none">
              Suburb Guide
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              North Shore: Nature, Community & Modern Living
            </h1>
            <p className="text-sm text-muted-foreground">Updated: July 13, 2026</p>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover Townsville's northern heart, where wetlands meet world-class leisure facilities.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-sm text-emerald-900 max-w-2xl">
              ☀️ <strong>July 2026 Update:</strong> The humidity has dropped, making the Burdell Forest trails and wetlands loops perfect for morning walks. The 'Perfect Dry' weather means the paths are firm and the morning birdlife is at its peak.
            </div>
          </div>
        </section>

        <main className="max-w-4xl mx-auto px-4 py-8 space-y-10">

          {/* Three-Column Highlights */}
          <section className="grid gap-4 md:grid-cols-3">
            <Card className="border">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <TreePine className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-semibold text-foreground">The Great Outdoors</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  Explore Burdell Forest trails and enjoy over 42km of walking and cycling paths 
                  that wind through bushland and coastal wetlands.
                </p>
              </CardContent>
            </Card>

            <Card className="border">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-semibold text-foreground">Family & Leisure</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  The Northern Beaches Leisure Centre offers an Olympic-sized pool, water slides, 
                  and a splash park — perfect for families year-round.
                </p>
              </CardContent>
            </Card>

            <Card className="border">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <ShoppingBag className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-semibold text-foreground">Local Flavors</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  North Shore Marketplace is the local hub for groceries, cafés, and services. 
                  The North Shore Tavern is a favourite for relaxed meals and live sport.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Burdell Forest & Wetlands */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-none">
                🌿 July Highlight
              </Badge>
            </div>
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Bird className="w-6 h-6 text-primary" />
              Burdell Forest & Wetlands
            </h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground">
                  Tucked behind the newer estates, the Burdell Wetlands are one of Townsville's 
                  best-kept secrets for birdwatching and nature photography. Early mornings bring 
                  a chorus of brolgas, jabirus, and kingfishers across the still water.
                </p>
                <p className="text-muted-foreground">
                  The flat, well-maintained boardwalks make it accessible for all fitness levels. 
                  It's also a dog-friendly area (on lead), so bring your four-legged walking 
                  partner along for a peaceful morning loop.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="gap-1">
                    <Camera className="w-3 h-3" /> Photography
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Bird className="w-3 h-3" /> Birdwatching
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Waves className="w-3 h-3" /> Wetlands
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Dog className="w-3 h-3" /> Dog-Friendly (On Lead)
                  </Badge>
                </div>
                <p className="text-xs font-medium text-blue-700 flex items-start gap-1.5">
                  <Accessibility className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>♿ 100% Paved &amp; Flat. Excellent for prams and mobility aids.</span>
                </p>

                {/* Trail Info Card */}
                <div className="relative overflow-hidden rounded-xl shadow-md border border-emerald-200 dark:border-emerald-800/40 bg-gradient-to-br from-emerald-50 via-emerald-50/80 to-amber-50/40 dark:from-emerald-950/30 dark:via-emerald-950/20 dark:to-amber-950/10">
                  {/* Decorative leaf icon */}
                  <Leaf className="absolute top-4 right-4 w-16 h-16 text-emerald-200/50 dark:text-emerald-800/30 -rotate-12" strokeWidth={1} />

                  <div className="relative p-6 space-y-5">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Trail Guide</p>
                      <h3 className="text-xl font-bold text-foreground">Bohle River Wetlands & Forest Trails</h3>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="flex flex-col items-center gap-1.5 rounded-lg bg-white/60 dark:bg-emerald-900/20 p-3 border border-emerald-100 dark:border-emerald-800/30">
                        <Ruler className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-xs font-medium text-muted-foreground">Distance</span>
                        <span className="text-sm font-bold text-foreground">3.5 km Loop</span>
                      </div>
                      <div className="flex flex-col items-center gap-1.5 rounded-lg bg-white/60 dark:bg-emerald-900/20 p-3 border border-emerald-100 dark:border-emerald-800/30">
                        <Mountain className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-xs font-medium text-muted-foreground">Difficulty</span>
                        <span className="text-sm font-bold text-foreground">Easy / Paved</span>
                      </div>
                      <div className="flex flex-col items-center gap-1.5 rounded-lg bg-white/60 dark:bg-emerald-900/20 p-3 border border-emerald-100 dark:border-emerald-800/30">
                        <Heart className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-xs font-medium text-muted-foreground">Best For</span>
                        <span className="text-sm font-bold text-foreground text-center">Birds & Dogs</span>
                      </div>
                    </div>

                    {/* Local Insight */}
                    <blockquote className="border-l-4 border-emerald-400 dark:border-emerald-600 pl-4 py-2 text-sm text-muted-foreground italic bg-white/40 dark:bg-emerald-900/10 rounded-r-lg">
                      The primary trailhead is at Erskine Place. Park at the Northern Beaches Leisure Centre or Northshore Skate Park; the paved path begins at the northern edge of the parkland.
                    </blockquote>

                    {/* CTA Button */}
                    <a
                      href="https://www.google.com/maps/@-19.2648,146.7620,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white h-10 px-5 py-2 text-sm font-medium w-full sm:w-auto transition-colors shadow-sm"
                    >
                      <MapPin className="w-4 h-4" />
                      Open Trailhead in Google Maps
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <LocalInsightCard title="Accessibility Tip" variant="tip">
              <p>
                This is a 100% pram and wheelchair-friendly loop. For the best birdwatching, head toward the Main Street bridge section at sunrise.
              </p>
            </LocalInsightCard>

            <LocalInsightCard title="Pro-Tip: Gateway to the North" variant="insight">
              <p>
                North Shore is the perfect staging point for a day trip to Saunders Beach or Toolakea—just a 15-minute drive further north.
              </p>
            </LocalInsightCard>

            <LocalInsightCard title="Seasonal Tip" variant="tip">
              <p>
                The Wetlands Loop remains at its absolute best through July. The early dry season lushness has mellowed into crisp, clear mornings, and the brolgas and jabirus are incredibly active at sunrise. Cool dry-season mornings are perfect for the 3.5km loop before the UV index climbs.
              </p>
            </LocalInsightCard>

            <LocalInsightCard title="Dog Owners (July Update)" variant="insight">
              <p>
                Those cooling dry season breezes make the North Shore trails ideal for larger breeds. Just a reminder to keep dogs on-lead through the Bohle River Wetlands to protect the nesting brolgas.
              </p>
            </LocalInsightCard>
          </section>

          {/* Northern Beaches Leisure Centre */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Droplets className="w-6 h-6 text-primary" />
              Northern Beaches Leisure Centre
            </h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground">
                  With an Olympic-sized pool, water slides, a toddler splash park, and a gym, 
                  this is North Shore's flagship community facility. It's busy on weekends but 
                  quieter during weekday mornings — a local favourite for lap swimmers.
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Northern+Beaches+Leisure+Centre+Townsville"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <MapPin className="w-4 h-4" />
                  View on Google Maps
                </a>
              </CardContent>
            </Card>

            <LocalInsightCard title="Pro-Tip: The Local's Pool" variant="insight">
              <p>
                If the ocean is a bit rough or you're keeping an eye on stinger season, this is the local's alternative. 
                With four pools and plenty of shade, it's a high-quality facility that feels like a resort but functions 
                like a community hub.
              </p>
            </LocalInsightCard>

            <LocalInsightCard title="July Tip" variant="tip">
              <p>
                With the dry season in full swing, the Northern Beaches Leisure Centre is the local's go-to for a worry-free swim on a sunny winter afternoon — the slides are a hit with the kids while the lap pool stays quiet on weekday mornings.
              </p>
            </LocalInsightCard>
          </section>

          {/* North Shore Marketplace */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Coffee className="w-6 h-6 text-primary" />
              North Shore Marketplace
            </h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground">
                  The social hub of North Shore — home to a Woolworths, specialty shops, medical services, 
                  and a growing café scene. It's where locals grab their morning coffee and weekend supplies.
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=North+Shore+Marketplace+Townsville"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <MapPin className="w-4 h-4" />
                  View on Google Maps
                </a>
              </CardContent>
            </Card>

            <LocalInsightCard title="Pro-Tip: The Coffee Tree" variant="insight">
              <p>
                The Coffee Tree is the heartbeat of the morning here. It's a great 'Quiet Business' spot to sit 
                with a laptop or meet a friend before heading to the nearby markets.
              </p>
            </LocalInsightCard>
          </section>

          {/* Accessibility Cross-Link */}
          <div className="flex items-start gap-2 p-4 rounded-lg bg-blue-50 border border-blue-100 text-sm text-blue-800">
            <span className="mt-0.5">♿</span>
            <p>
              View our full{" "}
              <Link to="/accessible-townsville" className="font-medium text-blue-700 hover:underline">
                Townsville Accessibility Guide
              </Link>{" "}
              for more mobility-friendly locations.
            </p>
          </div>

          {/* Getting There */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              Getting There
            </h2>
            <Card>
              <CardContent className="p-6 space-y-3">
                <p className="text-muted-foreground">
                  North Shore is a 15-minute drive from the Townsville CBD via the Stuart Drive / 
                  Woolcock Street corridor. Free parking is available at the Leisure Centre 
                  and North Shore Marketplace.
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=North+Shore+Townsville+QLD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <MapPin className="w-4 h-4" />
                  View on Google Maps
                </a>
              </CardContent>
            </Card>
          </section>

          {/* Game Day Card */}
          <section className="space-y-4">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground text-lg">🏟️ Dry Season Home Games at QCB Stadium</h3>
                </div>
                <p className="text-muted-foreground">
                  The North Shore Tavern is the local heartbeat for Cowboys home games through the dry season. Catch upcoming fixtures at Queensland Country Bank Stadium on the big screens, or make it your pre-game lunch stop before walking down to the Stampede.
                </p>
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <Link to="/cowboys-stadium-guide">
                    Read the Cowboys Guide
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* CTA */}
          <div className="bg-muted/30 rounded-2xl p-8 text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Explore More of Townsville</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              North Shore is just one part of the story. Discover beaches, food, and events across the city.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/things-to-do">Things to Do</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/beaches">Beaches Guide</Link>
              </Button>
            </div>
          </div>

        </main>
      </div>
    </>
  );
};

export default NorthShoreTownsville;
