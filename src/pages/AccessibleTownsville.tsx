import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Accessibility,
  Waves,
  Brain,
  Bus,
  ExternalLink,
  MapPin,
} from "lucide-react";
import LocalInsightCard from "@/components/LocalInsightCard";

const AccessibleTownsville = () => {
  return (
    <>
      <SEOHead
        title="Accessible Townsville | Wheelchair-Friendly Beaches, Parks & Venues"
        description="A local guide to accessible Townsville — wheelchair-friendly walks at The Strand, ramp-entry swimming at Riverway Lagoons, sensory-friendly venues, and accessible transport options."
        canonical="https://www.myaussieguide.com.au/accessible-townsville"
      />

      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-10 max-w-4xl space-y-12">
          {/* Hero */}
          <header className="space-y-4">
            <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 w-fit">
              Updated: May 11, 2026
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Exploring Townsville for All: The Local Guide to Accessible Beaches, Parks &amp; Venues
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Townsville is one of the most accessible coastal cities in North Queensland — flat
              foreshore paths, ramp-entry pools, and modern transport infrastructure make it easy
              for visitors with mobility or sensory needs to enjoy the very best of the Dry Season.
              This local-verified guide covers the spots we recommend most.
            </p>
          </header>

          {/* Quick Links */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Quick Links</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Accessibility className="w-5 h-5 text-blue-600" />
                    <CardTitle className="text-lg">Wheelchair-Friendly Walks</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Flat, paved foreshore paths and accessible boardwalks across The Strand,
                    Riverway and Jezzine Barracks.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-cyan-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Waves className="w-5 h-5 text-cyan-600" />
                    <CardTitle className="text-lg">Accessible Swimming</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Ramp-entry pools at Riverway Lagoons and Strand Rockpool — safe, free, and
                    open year-round outside stinger season.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-violet-500">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-violet-600" />
                    <CardTitle className="text-lg">Sensory-Friendly Spots</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Quiet morning windows at the Museum of Tropical Queensland and shaded,
                    low-stimulation parks around the city.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Top Recommendations */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2">
              <MapPin className="w-7 h-7 text-primary" />
              Top Recommendations
            </h2>

            <div className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">The Strand</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    2.2km of flat, paved paths running the full length of the foreshore. Ramp
                    access leads down to the <strong>Strand Rockpool</strong> and the free{" "}
                    <strong>Water Park</strong>, with accessible toilets and shaded rest stops
                    along the way.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/the-strand">
                      View Strand Guide <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Riverway Lagoons</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Free public lagoons in Thuringowa with <strong>gradual ramp entry</strong>{" "}
                    into the pools, wide shaded walkways, and accessible parking close to the
                    water.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Museum of Tropical Queensland</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Fully accessible with elevators on all levels. Quieter sensory-friendly
                    windows are typically <strong>Tuesday and Wednesday mornings</strong> just
                    after opening — ideal for visitors who prefer a calmer environment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Jezzine Barracks (Kissing Point)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Accessible boardwalks and dedicated parking at the headland. The{" "}
                    <strong>Kissing Point Battery stairs are steep</strong>, but the{" "}
                    <strong>lower coastal path</strong> offers the same sweeping bay views and
                    sunset vantage points without the climb.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/guides/jezzine-barracks">
                      View Jezzine Guide <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Transport */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2">
              <Bus className="w-7 h-7 text-primary" />
              Accessible Transport
            </h2>
            <LocalInsightCard title="Sunbus & Wheelchair-Accessible Taxis" variant="insight">
              <p>
                Townsville Sunbus services include low-floor, wheelchair-accessible buses with priority seating and ramp access available for passengers who need it. For door-to-door travel, wheelchair-accessible taxis operate in Townsville and are fitted with ramps and secure anchor points.
              </p>
              <p className="mt-2">
                Eligible passengers may be able to use Queensland's Taxi Subsidy Scheme, which covers 50% of eligible taxi fares up to $30 per trip. Pre-booking wheelchair-accessible taxis is recommended, especially during busy periods, weekends, major events, medical appointments, or transport connections.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button asChild variant="outline" size="sm">
                  <a
                    href="https://www.wearekinetic.com/au/townsville"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sunbus Townsville <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a
                    href="https://tsvtaxi.com.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Townsville Taxis (WATs) <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Button>
              </div>
            </LocalInsightCard>
          </section>
        </main>
      </div>
    </>
  );
};

export default AccessibleTownsville;
