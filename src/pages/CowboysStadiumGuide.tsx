import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Users, Car, Utensils, Volume2, Trophy, ExternalLink } from "lucide-react";
import stampedeMap from "@/assets/cowboys-stampede-map.webp";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import LocalInsightCard from "@/components/LocalInsightCard";

const CowboysStadiumGuide = () => {
  return (
    <>
      <SEOHead
        title="Cowboys Game Day Guide 2026"
        description="The local's guide to the Cowboys Stampede, stadium tips, and where to watch the Vegas opener. Everything you need for game day in Townsville."
        canonical="https://www.myaussieguide.com.au/cowboys-stadium-guide"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/events" className="text-gray-600 hover:text-primary flex items-center gap-2 text-sm font-medium transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Events
            </Link>
            <Badge variant="secondary" className="bg-green-50 text-green-700">
              2026 Season
            </Badge>
          </div>
        </div>

        <main className="container mx-auto px-4 py-8 max-w-4xl space-y-10">

          {/* Hero Section */}
          <header className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              The Local's Guide to the Cowboys & QLD Country Bank Stadium
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Everything you need to know for game day in Townsville, from the 'Stampede' to the best local seats.
            </p>
          </header>

          {/* 2026 Season Launch */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Trophy className="w-6 h-6 text-primary" />
              2026 Season Launch
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader className="pb-2">
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none w-fit">
                    Season Opener
                  </Badge>
                  <CardTitle className="text-lg mt-2">Cowboys vs Knights (Vegas)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Sunday, March 1 | 12:15 PM AEST</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Las Vegas — Watch locally at Leagues Club & North Shore Tavern</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The NRL kicks off in Las Vegas! While the boys are overseas, the city comes alive with local watch parties. Get there early for the best seats.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardHeader className="pb-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/10 border-none w-fit">
                    First Home Game
                  </Badge>
                  <CardTitle className="text-lg mt-2">Cowboys vs Titans</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Sunday, March 22</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Queensland Country Bank Stadium, Townsville</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The first home game of 2026. Expect a packed stadium, pre-game fireworks, and the full Stampede experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* The Game Day Experience */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              The Game Day Experience
            </h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">The Stampede</h3>
                <p className="text-muted-foreground">
                  Game day in Townsville starts at the Cowboys Leagues Club. Fans gather for pre-game drinks 
                  before walking together across Lowths Bridge to the stadium — this is 'The Stampede'. 
                  It's one of the most unique match-day experiences in the NRL.
                </p>
                <p className="text-muted-foreground">
                  The walk takes about 15 minutes and the atmosphere builds as you cross the bridge with 
                  thousands of fellow fans. Lowths Bridge becomes a pedestrian-only zone on game days, 
                  turning it into a true fan parade. Face paint, jerseys, and singing are all part of the tradition.
                </p>

                {/* Stampede Map */}
                <div className="space-y-3 pt-2">
                  <img
                    src={stampedeMap}
                    alt="The Cowboys Stampede match day walking route from Cowboys Leagues Club across Lowths Bridge to Queensland Country Bank Stadium"
                    className="w-full rounded-lg"
                    loading="lazy"
                  />
                  <p className="text-sm text-muted-foreground italic text-center">
                    The Match Day March: A scenic 15-minute walk from the CBD to the stadium gates.
                  </p>
                  <a
                    href="https://www.google.com/maps/dir/Cowboys+Leagues+Club,+Townsville/Queensland+Country+Bank+Stadium,+Townsville/@-19.2590,146.7870,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x6978599e4b70bf71:0x2b1e3b3b3b3b3b3b!2m2!1d146.7814!2d-19.2567!1m5!1m1!1s0x6978599e4b70bf71:0x3c1e3b3b3b3b3b3b!2m2!1d146.7895!2d-19.2618!3e2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 text-sm font-medium w-full sm:w-auto transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    Open Walking Route in Google Maps
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <LocalInsightCard title="Lowths Bridge Closure" variant="insight">
              <p>
                Lowths Bridge closes to cars 2 hours before kick-off, making it a pedestrian paradise. Join the walk!
              </p>
            </LocalInsightCard>
          </section>

          {/* Stadium Pro-Tips */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Stadium Pro-Tips</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardContent className="p-5 space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">The Northern Green</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Best for families and a relaxed vibe. Grab a spot on the hill, spread out a blanket, 
                    and let the kids run around while you watch the game.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5 space-y-2">
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-foreground">The Quiet Room</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Available on Level 1 for those needing a sensory break. The stadium provides a 
                    calmer space away from the crowd noise — great for anyone who needs a moment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Getting There */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Car className="w-6 h-6 text-primary" />
              Getting There
            </h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-foreground text-lg">Free Park & Ride</h3>
                <p className="text-muted-foreground">
                  Skip the traffic and use the free 'Park & Ride' shuttle buses available on game days. 
                  Two main pick-up points:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span><strong>Townsville CBD</strong> — Multiple stops along Flinders Street</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span><strong>Lou Litster Park</strong> — Ample free parking with regular shuttle service</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground italic">
                  Buses run from 2 hours before kick-off and up to 1 hour after the final whistle.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Where to Eat & Drink */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Utensils className="w-6 h-6 text-primary" />
              Where to Eat & Drink
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardContent className="p-5 space-y-2">
                  <h3 className="font-semibold text-foreground">Pre-Game: City Lane</h3>
                  <p className="text-sm text-muted-foreground">
                    The laneway precinct in the CBD is buzzing on game days. Grab a craft beer, tacos, 
                    or a coffee before joining The Stampede.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5 space-y-2">
                  <h3 className="font-semibold text-foreground">Post-Game: Palmer Street</h3>
                  <p className="text-sm text-muted-foreground">
                    Townsville's restaurant strip comes alive after the siren. Great for a sit-down dinner, 
                    celebratory drinks, or a quiet debrief after a tough loss.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-primary/5 rounded-2xl p-8 text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Ready for game day?</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Check the full events calendar for upcoming home games, markets, and things to do around match weekends.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/events">View Events Calendar</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/food">
                  <Utensils className="w-4 h-4" />
                  Food & Drink Guide
                </Link>
              </Button>
            </div>
          </div>

        </main>
      </div>
    </>
  );
};

export default CowboysStadiumGuide;
