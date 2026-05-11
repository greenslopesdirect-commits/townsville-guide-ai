import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Users, Car, Utensils, Volume2, Trophy, ExternalLink } from "lucide-react";
import stampedeMap from "@/assets/cowboys-stampede-map.webp";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import LocalInsightCard from "@/components/LocalInsightCard";
import AirportTransferCard from "@/components/AirportTransferCard";

const CowboysStadiumGuide = () => {
  return (
    <>
      <SEOHead
        title="Cowboys Game Day Guide 2026 | Stadium Info, Parking & The Stampede"
        description="Plan your 2026 Cowboys game day in Townsville. Detailed guide for Round 12 vs Rabbitohs (Sun May 24, 4:05 PM) — parking, free shuttles, and Sunday arvo logistics."
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

          <section className="space-y-4">
             <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
               <Trophy className="w-6 h-6 text-primary" />
               2026 Season – May 11 Update: Magic Round & Round 12 Home Game
             </h2>
             <div className="grid gap-4 md:grid-cols-2">
               <Card className="border-l-4 border-l-green-500 bg-green-50/30">
                 <CardHeader className="pb-2">
                   <Badge variant="secondary" className="w-fit bg-green-100 text-green-700">
                     Season Update
                   </Badge>
                    <CardTitle className="text-lg mt-2">Magic Round Bound, Rabbitohs Next at Home</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Following a Golden Point thriller against the Eels (<strong>30–33</strong>), we're looking ahead to <strong>Magic Round in Brisbane</strong> before returning home for a Sunday afternoon blockbuster against the <strong>Rabbitohs</strong>.
                    </p>
                 </CardContent>
               </Card>

              <Card className="border-l-4 border-l-primary shadow-sm">
                <CardHeader className="pb-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/10 border-none w-fit">
                    Next Home Game
                  </Badge>
                  <CardTitle className="text-lg mt-2">NEXT HOME GAME: Round 12 – Cowboys vs. South Sydney Rabbitohs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span>Sunday, May 24, 2026</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>
                        Queensland Country Bank Stadium.<br />
                        <span className="font-medium text-foreground">Gates Open: 2:30 PM | Kick-off: 4:05 PM</span>
                      </span>
                    </div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-900">
                    <strong>☀️ Stadium Tip — Sun Protection:</strong> Sunday arvo footy is back! If you're seated in the <strong>Western Stand</strong>, you'll face significant sun glare for the first half. Bring your sunnies and a hat — the <strong>Eastern Stand</strong> will be in the shade much earlier.
                  </div>
                  <Button asChild className="w-full sm:w-auto">
                    <a href="https://www.ticketmaster.com.au/north-queensland-cowboys-tickets/artist/1109825" target="_blank" rel="noopener noreferrer">
                      Get Tickets on Ticketmaster
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Upcoming Schedule */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Calendar className="w-6 h-6 text-primary" />
              Upcoming Schedule
            </h2>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50 text-foreground">
                      <tr>
                        <th className="text-left font-semibold px-4 py-3">Round</th>
                        <th className="text-left font-semibold px-4 py-3">Match</th>
                        <th className="text-left font-semibold px-4 py-3">Date & Time</th>
                        <th className="text-left font-semibold px-4 py-3">Venue</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="px-4 py-3 font-medium">Round 11 <span className="text-xs text-muted-foreground">(Magic Round)</span></td>
                        <td className="px-4 py-3">Away vs Roosters</td>
                        <td className="px-4 py-3 text-muted-foreground">Sat May 16, 5:30 PM</td>
                        <td className="px-4 py-3 text-muted-foreground">Suncorp Stadium</td>
                      </tr>
                      <tr className="bg-primary/5">
                        <td className="px-4 py-3 font-medium">Round 12 <Badge className="ml-1 bg-primary/10 text-primary hover:bg-primary/10 border-none">HOME</Badge></td>
                        <td className="px-4 py-3 font-semibold">vs Rabbitohs</td>
                        <td className="px-4 py-3 text-muted-foreground">Sun May 24, 4:05 PM</td>
                        <td className="px-4 py-3 text-muted-foreground">QCB Stadium</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Round 13</td>
                        <td className="px-4 py-3">Away vs Raiders</td>
                        <td className="px-4 py-3 text-muted-foreground">Sun May 31, 4:05 PM</td>
                        <td className="px-4 py-3 text-muted-foreground">GIO Stadium</td>
                      </tr>
                      <tr className="bg-primary/5">
                        <td className="px-4 py-3 font-medium">Round 14 <Badge className="ml-1 bg-primary/10 text-primary hover:bg-primary/10 border-none">HOME</Badge></td>
                        <td className="px-4 py-3 font-semibold">vs Dolphins</td>
                        <td className="px-4 py-3 text-muted-foreground">Sat June 6, 5:30 PM</td>
                        <td className="px-4 py-3 text-muted-foreground">QCB Stadium</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Visiting from out of town CTA */}
          <Card className="bg-muted/40 border-2 border-border/60 shadow-sm">
            <CardContent className="p-6 sm:p-8 space-y-3">
              <h3 className="text-xl font-bold text-foreground">🏟️ Visiting for the Rabbitohs Game?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Don't get caught out — last-minute stays near the stadium fill up fast for Sunday afternoon home games. Whether you're after a luxury resort with a view or a budget-friendly apartment for the family, we've found the best spots.
              </p>
              <Button asChild variant="default" size="lg" className="w-full sm:w-auto">
                <Link to="/accommodation">
                  View Townsville Accommodation Guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

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

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3 items-start">
              <span className="text-lg">💡</span>
              <div>
                <p className="text-amber-900 text-sm font-semibold">Local Tip</p>
                 <p className="text-amber-800 text-sm mt-1">
                   For the <strong>4:05 PM kick-off</strong>, the Leagues Club will be buzzing from lunch. The 'Stampede' march across Lowths Bridge will depart at <strong>approximately 3:15 PM</strong>.
                 </p>
                 <p className="text-amber-800 text-sm mt-2 font-semibold">
                   Sunday arvo means a relaxed pre-game — aim to be at the Leagues Club by 1:30 PM for a long lunch and a few drinks before the march.
                 </p>
              </div>
            </div>

            <LocalInsightCard title="Alternative Route" variant="insight">
              <p>
                Note: Lowths Bridge becomes a pedestrian-only zone on game days. It is the most direct route from City Lane, but if it's crowded, you can also use the Victoria Street Bridge to access the Central Park Boardwalk.
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
                    <div>
                      <span><strong>Lou Litster Park</strong> — Ample free parking with regular shuttle service</span>
                      <p className="text-xs text-muted-foreground mt-1 italic">
                        Searching for Cowboys Stadium parking? <strong>Lou Litster Park</strong> is the easiest free parking option with a direct shuttle — avoid the CBD gridlock entirely.
                      </p>
                    </div>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground italic">
                  Free Park & Ride shuttle service commences at <strong>2:15 PM</strong> (2 hours before kick-off) and runs up to 1 hour after the final whistle.
                </p>
                 <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex gap-2 items-start mt-2">
                   <span className="text-sm">⚠️</span>
                    <p className="text-amber-800 text-sm">
                      <strong>Sunday Game Alert:</strong> The <strong>Lowths Bridge vehicle closure is at 12:30 PM</strong> for this Sunday game — much earlier than Friday nights. Plan your city parking accordingly. The <strong>Lou Litster Park & Ride</strong> remains your best bet to skip the city traffic entirely.
                    </p>
                 </div>
              </CardContent>
            </Card>
            <AirportTransferCard className="mt-2" proTipExtra="Perfect for fans flying in on Sunday morning to avoid the CBD taxi rush." />
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

          {/* North Shore Link */}
          <p className="text-sm text-muted-foreground text-center">
            Need a break from the noise? Check out our{" "}
            <Link to="/north-shore-townsville" className="text-primary hover:underline font-medium">
              North Shore Nature Guide
            </Link>.
          </p>

        </main>
      </div>
    </>
  );
};

export default CowboysStadiumGuide;
