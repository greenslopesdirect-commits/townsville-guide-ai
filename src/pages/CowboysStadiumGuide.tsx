import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Users, Car, Utensils, Volume2, Trophy, ExternalLink, Accessibility, Brain, Armchair } from "lucide-react";
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
        description="Plan your 2026 Cowboys game day in Townsville. Detailed guide for Round 14 vs Dolphins (Sat June 6, 5:30 PM) — parking, free shuttles, and Saturday evening logistics."
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
              June Update
            </Badge>
          </div>
        </div>

        <main className="container mx-auto px-4 py-8 max-w-4xl space-y-10">

          {/* Hero Section */}
          <header className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Cowboys Game Day Guide & Queensland Country Bank Stadium Parking Tips
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Everything you need to know for game day in Townsville, from the 'Stampede' to the best local seats.
            </p>
          </header>

          <section className="space-y-4">
             <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
               <Trophy className="w-6 h-6 text-primary" />
               2026 Season – June Update: Dolphins Blockbuster Next!
             </h2>
             <div className="grid gap-4 md:grid-cols-2">
               <Card className="border-l-4 border-l-green-500 bg-green-50/30">
                 <CardHeader className="pb-2">
                   <Badge variant="secondary" className="w-fit bg-green-100 text-green-700">
                     Season Update
                   </Badge>
                     <CardTitle className="text-lg mt-2">Rabbitohs Victory, Dolphins Next at Home</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                     <p className="text-sm text-muted-foreground">
                       Fresh off a stellar <strong>30–18 home victory</strong> against the Rabbitohs in front of a buzzing Townsville crowd, the Cowboys are keeping the momentum rolling. Our focus now shifts to the next massive Queensland blockbuster at home against the <strong>Dolphins</strong>.
                     </p>
                 </CardContent>
               </Card>

               <Card className="border-l-4 border-l-primary shadow-sm">
                 <CardHeader className="pb-2">
                   <Badge className="bg-primary/10 text-primary hover:bg-primary/10 border-none w-fit">
                     Next Home Game
                   </Badge>
                   <CardTitle className="text-lg mt-2">NEXT HOME GAME: Round 14 – Cowboys vs. Dolphins</CardTitle>
                 </CardHeader>
                 <CardContent className="space-y-4">
                   <div className="space-y-2">
                     <div className="flex items-center gap-2 text-sm text-muted-foreground">
                       <Calendar className="w-4 h-4 flex-shrink-0" />
                       <span>Saturday, June 6, 2026</span>
                     </div>
                      <div className="flex items-start gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>
                          Queensland Country Bank Stadium.<br />
                          <span className="font-medium text-foreground">Gates Open: 2:15 PM | Kick-off: 5:30 PM</span>
                        </span>
                      </div>
                   </div>
                   <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-900">
                     <strong>☀️ Stadium Tip:</strong> With a 5:30 PM Saturday kick-off, you'll catch the tail end of the afternoon winter sky, but the sun drops fast behind the Western stand. Bring a light jacket or hoodie, as the stadium cool breeze sets in quickly after dark during the dry season.
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
                      <tr className="bg-primary/5">
                        <td className="px-4 py-3 font-medium">Round 14 <Badge className="ml-1 bg-primary/10 text-primary hover:bg-primary/10 border-none">HOME</Badge></td>
                        <td className="px-4 py-3 font-semibold">vs Dolphins</td>
                        <td className="px-4 py-3 text-muted-foreground">Sat June 6, 2026, 5:30 PM</td>
                        <td className="px-4 py-3 text-muted-foreground">QCB Stadium</td>
                      </tr>
                      <tr className="bg-primary/5">
                        <td className="px-4 py-3 font-medium">Round 17 <Badge className="ml-1 bg-primary/10 text-primary hover:bg-primary/10 border-none">HOME</Badge></td>
                        <td className="px-4 py-3 font-semibold">vs Penrith Panthers</td>
                        <td className="px-4 py-3 text-muted-foreground">Sat June 27, 2026, 5:30 PM</td>
                        <td className="px-4 py-3 text-muted-foreground">QCB Stadium</td>
                      </tr>
                      <tr className="bg-primary/5">
                        <td className="px-4 py-3 font-medium">Round 21 <Badge className="ml-1 bg-primary/10 text-primary hover:bg-primary/10 border-none">HOME</Badge></td>
                        <td className="px-4 py-3 font-semibold">vs Brisbane Broncos</td>
                        <td className="px-4 py-3 text-muted-foreground">Sat July 25, 2026, 7:35 PM</td>
                        <td className="px-4 py-3 text-muted-foreground">QCB Stadium</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* QCB Stadium Game Day Schedule */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Calendar className="w-6 h-6 text-primary" />
              Queensland Country Bank Stadium Game Day Schedule
            </h2>
            <Card>
              <CardContent className="p-6 space-y-3">
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">Free Park &amp; Ride shuttle starts:</strong> 2 hours before kick-off from Lou Litster Park &amp; CBD stops.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">Stadium gates open:</strong> Approximately 3 hours before kick-off (e.g. 2:30 PM for a 5:30 PM start).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">'The Stampede' departs:</strong> Roughly 45 minutes before kick-off from Cowboys Leagues Club across Lowths Bridge.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">Kick-off:</strong> As scheduled (5:30 PM or 7:35 PM for prime-time fixtures).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">When does a Cowboys game end?</strong> Approximately <strong>1 hour and 50 minutes after kick-off time</strong> (allowing for two 40-minute halves, a 10-minute half-time, and stoppages). A 5:30 PM game typically wraps around 7:20 PM; a 7:35 PM game around 9:25 PM.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">Return shuttles:</strong> Run continuously for up to 1 hour after the final whistle.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Dean Street Carpark Warning */}
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-5 flex gap-3 items-start">
              <span className="text-2xl" aria-hidden="true">⚠️</span>
              <div>
                <p className="text-red-900 font-bold text-base">Dean Street Carpark — Game Day Closure</p>
                <p className="text-red-800 text-sm mt-2">
                  Townsville City Council laws state that the <strong>Dean Street Carpark completely closes to public parking from 2:00 PM on Cowboys home game days</strong>. Vehicles left inside risk being towed at the owner's expense.
                </p>
              </div>
            </div>
          </section>


          {/* Visiting from out of town CTA */}
          <Card className="bg-muted/40 border-2 border-border/60 shadow-sm">
            <CardContent className="p-6 sm:p-8 space-y-3">
              <h3 className="text-xl font-bold text-foreground">🏟️ Visiting for the Dolphins Game?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Don't get caught out — last-minute stays near the stadium fill up fast for Saturday evening home games. Whether you're after a luxury resort with a view or a budget-friendly apartment for the family, we've found the best spots.
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
                    For the <strong>5:30 PM kick-off</strong>, the Leagues Club will be buzzing from mid-afternoon. The 'Stampede' march across Lowths Bridge will depart at <strong>approximately 4:45 PM</strong>.
                  </p>
                  <p className="text-amber-800 text-sm mt-2 font-semibold">
                    Saturday evening means a lively pre-game — aim to be at the Leagues Club by 3:00 PM for drinks and atmosphere before the march.
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
            <Card className="border-l-4 border-l-green-600">
              <CardContent className="p-6 space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-none w-fit">Primary Free Parking Hub</Badge>
                <h3 className="font-semibold text-foreground text-lg">Lou Litster Park — Park &amp; Ride</h3>
                <p className="text-muted-foreground">
                  <strong>Lou Litster Park</strong> is the recommended free parking hub for every Cowboys home game. Ample sealed parking, easy in/out access, and a direct, accessible <strong>Park &amp; Ride shuttle bus</strong> running from <strong>2 hours before kick-off</strong> straight to the stadium gates — skip the CBD gridlock entirely.
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span><strong className="text-foreground">Shuttle from:</strong> 2 hours before kick-off (e.g. from 3:30 PM for a 5:30 PM game).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span><strong className="text-foreground">Accessibility:</strong> Buses are low-floor, wheelchair-accessible, and pram-friendly.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span><strong className="text-foreground">Return service:</strong> Runs continuously for up to 1 hour after the final whistle.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold text-foreground text-lg">Secondary Option: Townsville CBD Shuttle Stops</h3>
                <p className="text-muted-foreground text-sm">
                  Free 'Park &amp; Ride' shuttles also collect fans from multiple stops along <strong>Flinders Street</strong> in the CBD — handy if you're already in town for pre-game food &amp; drinks. Note: CBD on-street parking fills quickly on game days, so Lou Litster Park remains the easiest option.
                </p>
              </CardContent>
            </Card>
            <AirportTransferCard className="mt-2" proTipExtra="Perfect for fans flying in on Saturday afternoon to avoid the CBD taxi rush." />
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

          {/* Accessibility & Sensory Info */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2">
              <Accessibility className="w-7 h-7 text-blue-600" />
              Accessibility &amp; Sensory Info
            </h2>
            <p className="text-muted-foreground">
              Queensland Country Bank Stadium was designed with accessibility front-of-mind. Here's
              what to know before you go.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-5 space-y-2">
                  <div className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-foreground">Accessible Parking</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Accessible parking is available directly at the stadium (<strong>pre-booking
                    required</strong> via the stadium website). For general fans, the Lou Litster
                    "Park &amp; Ride" shuttle is wheelchair accessible.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-violet-500">
                <CardContent className="p-5 space-y-2">
                  <div className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-violet-600" />
                    <h3 className="font-semibold text-foreground">Sensory Support</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    A dedicated <strong>Quiet Room on Level 1</strong> is available for fans
                    needing a break from the crowd noise — ideal for sensory-sensitive visitors and
                    young families.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-emerald-500">
                <CardContent className="p-5 space-y-2">
                  <div className="flex items-center gap-2">
                    <Armchair className="w-5 h-5 text-emerald-600" />
                    <h3 className="font-semibold text-foreground">Accessible Seating</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    QCB Stadium offers world-class accessible viewing platforms and companion
                    seating throughout <strong>all levels</strong> of the venue.
                  </p>
                </CardContent>
              </Card>
            </div>
            <p className="text-sm text-muted-foreground">
              Planning a wider trip? See our{" "}
              <Link to="/accessible-townsville" className="text-primary hover:underline font-medium">
                Accessible Townsville Guide
              </Link>{" "}
              for accessible beaches, parks and transport across the city.
            </p>
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
