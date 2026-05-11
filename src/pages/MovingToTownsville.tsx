import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Home,
  Building2,
  Zap,
  Shield,
  Plane,
  GraduationCap,
  HeartPulse,
  ExternalLink,
  TrendingUp,
} from "lucide-react";
import LocalInsightCard from "@/components/LocalInsightCard";
import havenGarbuttNight from "@/assets/haven-garbutt-night.webp";

const MovingToTownsville = () => {
  return (
    <>
      <SEOHead
        title="Moving to Townsville 2026 | Local Relocation & Growth Guide"
        description="A local-verified relocation guide to Townsville for 2026. Suburbs, the $40B infrastructure boom, jobs in Defence and Green Energy, schools, healthcare and the airport — all in one place."
        canonical="https://www.myaussieguide.com.au/moving-to-townsville"
      />

      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-10 max-w-4xl space-y-12">
          {/* Hero */}
          <header className="space-y-4">
            <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 w-fit">
              Updated: May 11, 2026
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Moving to Townsville 2026: The Local's Relocation & Growth Guide
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Townsville is in the middle of a generational <strong>$40B infrastructure boom</strong> — Green
              Energy, Defence, Port and Health projects are all rolling at once. But what makes the city
              special isn't the headline numbers; it's the lifestyle. This is the best place in North
              Queensland for what we call the <strong>"Quiet Business" lifestyle</strong>: dry-season mornings on
              The Strand, school runs that take 12 minutes, and a coastal town where you can run a serious
              business without the Brisbane or Sydney grind.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This guide is written by locals, for people thinking about the move. It covers where to live,
              what jobs are out there, and the day-to-day essentials you'll need to settle in.
            </p>
          </header>

          {/* Choosing a Suburb */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2">
              <Home className="w-7 h-7 text-primary" />
              Choosing a Suburb
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Townsville's suburbs each have a distinct flavour — coastal, leafy-suburban, or quiet rural.
              For most newcomers, the choice comes down to commute, schools, and how close to the water
              you want to be. Two of our most popular deep-dive guides:
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Saunders Beach</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    The quiet northern escape — 6km of unspoilt sand, 30 minutes from the CBD, and a true
                    locals-only feel. Great for remote workers and dog owners.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/beaches/saunders-beach">
                      View Saunders Beach Guide <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-emerald-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Rowes Bay</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Beachfront living minutes from the CBD, The Strand and Jezzine Barracks. Popular with
                    Defence families and anyone who wants a sunset walk after work.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/rowes-bay">
                      View Rowes Bay Guide <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-amber-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">North Shore</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    The northern growth heart. Perfect for families wanting modern homes, 42km of walking
                    trails, and the best community leisure centre in the city.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/north-shore-townsville">
                      View North Shore Guide <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <LocalInsightCard title="Local Tip — Pick the commute, not just the postcode" variant="insight">
              <p>
                Townsville is small, but Friday-afternoon traffic across Lowths Bridge on a Cowboys game day
                is real. If you're working in the CBD or at the Hospital, test-drive the route at peak hour
                before signing a lease.
              </p>
            </LocalInsightCard>
          </section>

          {/* Suburban Life Spotlight */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Suburban Life: A Local Perspective
            </h2>
            <div className="grid gap-6 md:grid-cols-2 items-start">
              <figure className="space-y-2">
                <img
                  src={havenGarbuttNight}
                  alt="Moonlit evening walk in The Haven development at Garbutt with Castle Hill in the background"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                  loading="lazy"
                />
                <figcaption className="text-xs text-muted-foreground italic">
                  Quiet evening walks in the Haven development, Garbutt — featuring a moonlit view of Castle Hill.
                </figcaption>
              </figure>
              <div className="space-y-4">
                <LocalInsightCard title="The Garbutt Growth Story" variant="insight">
                  <p>
                    For those looking to be close to the CBD and the airport, Garbutt's newer developments
                    like <strong>The Haven</strong> offer a quiet, secure community atmosphere. It's a prime
                    example of Townsville's <strong>"Quiet Business"</strong> lifestyle — central enough for
                    easy access to everything, but far enough away to enjoy a peaceful evening stroll under
                    the light of Castle Hill.
                  </p>
                  <p className="mt-3">
                    <strong>May 11 Update:</strong> With the evening temps dropping to 20°C, the walk under
                    Castle Hill is at its absolute best right now. It's the perfect example of the
                    "Quiet Business" lifestyle.
                  </p>
                </LocalInsightCard>
                <Button asChild variant="outline" size="sm">
                  <Link to="/dog-friendly">
                    Explore more dog-friendly walking tracks in Townsville
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Job Market & Infrastructure */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2">
              <Building2 className="w-7 h-7 text-primary" />
              Job Market & Infrastructure
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Townsville's economy in 2026 is being reshaped by two major waves: <strong>Green Energy</strong>{" "}
              and <strong>Defence</strong>. The city is positioning itself as the renewable manufacturing hub
              of North Queensland, and the existing Defence footprint at Lavarack Barracks and RAAF
              Townsville continues to expand.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-emerald-600" />
                    <CardTitle className="text-lg">Green Energy</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    The Lansdown Eco-Industrial Precinct, hydrogen and critical minerals processing, and
                    large-scale renewable manufacturing are creating long-term skilled roles in
                    engineering, trades and project management.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <CardTitle className="text-lg">Defence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Lavarack Barracks, RAAF Townsville and ongoing AUKUS-aligned upgrades make Defence one
                    of the city's most stable employers — both for uniformed roles and for civilian
                    contractors and trades.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-amber-50/60 border-amber-200">
              <CardContent className="p-5 flex gap-3 items-start">
                <TrendingUp className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                <p className="text-sm text-amber-900">
                  <strong>The $40B headline:</strong> Combined public and private investment across energy,
                  Defence, Port expansion, the Hospital and transport is the largest pipeline in regional
                  Queensland. Translation for newcomers — long-term work, not a fly-in-fly-out boom.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Local Essentials */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Local Essentials</h2>
            <p className="text-muted-foreground leading-relaxed">
              The practical stuff you'll want sorted in your first month — getting in and out of town,
              schools for the kids, and where to register with a GP.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Plane className="w-5 h-5 text-primary" />
                    <CardTitle className="text-lg">Airport</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Townsville Airport (TSV) is just 5 minutes from the CBD with daily direct flights to
                    Brisbane, Sydney, Melbourne and Cairns.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/townsville-airport">
                      Airport Guide <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <CardTitle className="text-lg">Schools</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Strong mix of state, Catholic and independent schools, plus James Cook University.
                    Family-friendly suburbs and short school runs are part of the appeal.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/townsville-with-kids">
                      Family Guide <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <HeartPulse className="w-5 h-5 text-primary" />
                    <CardTitle className="text-lg">Healthcare</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Townsville University Hospital is the major tertiary hospital for North Queensland,
                    backed by a wide network of GPs, specialists and private clinics.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/local-tips">
                      Local Tips <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA — Website Reviver */}
          <section>
            <Card className="bg-primary/5 border-2 border-primary/20">
              <CardContent className="p-6 sm:p-8 text-center space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Starting a business in Townsville?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Need a local web presence for your new Townsville business? <strong>Website Reviver</strong>{" "}
                  builds fast, SEO-ready websites for North Queensland operators — built locally, optimised
                  for Townsville search.
                </p>
                <Button asChild size="lg" className="gap-2">
                  <a href="https://websitereviver.com.au" target="_blank" rel="noopener noreferrer">
                    Visit Website Reviver
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </>
  );
};

export default MovingToTownsville;
