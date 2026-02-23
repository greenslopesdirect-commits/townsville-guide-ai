import { Link } from "react-router-dom";
import { ArrowRight, TreePine, Users, ShoppingBag, Bird, Trophy, MapPin, Waves, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import LocalInsightCard from "@/components/LocalInsightCard";

const NorthShoreTownsville = () => {
  return (
    <>
      <SEOHead
        title="North Shore Townsville Guide 2026 | Nature, Community & Leisure"
        description="Discover Townsville's North Shore — Burdell Forest trails, Northern Beaches Leisure Centre, wetlands birdwatching, and the best local dining at North Shore Marketplace."
        canonical="https://www.myaussieguide.com.au/north-shore-townsville"
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
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover Townsville's northern heart, where wetlands meet world-class leisure facilities.
            </p>
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

          {/* Burdell Wetlands — Local Secret */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-none">
                Local Secret
              </Badge>
            </div>
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Bird className="w-6 h-6 text-primary" />
              Burdell Wetlands
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
                  Bring binoculars and a camera — you'll want them.
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
                </div>
              </CardContent>
            </Card>

            <LocalInsightCard title="Best Time to Visit" variant="tip">
              <p>
                Arrive at dawn for the best light and bird activity. The dry season (May–October) 
                brings migratory species and calmer conditions for photography.
              </p>
            </LocalInsightCard>
          </section>

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
                  <h3 className="font-semibold text-foreground text-lg">Game Day on the North Shore</h3>
                </div>
                <p className="text-muted-foreground">
                  Watching the Cowboys? The North Shore Tavern is the best local spot for 
                  away-game watch parties. Cold beers, big screens, and a crowd that knows 
                  every player by name.
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
