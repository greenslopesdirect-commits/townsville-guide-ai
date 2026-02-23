import { Calendar, MapPin, Music, Info, ArrowRight, ExternalLink, Dog, Footprints, Trophy, Leaf, Sun, Thermometer } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SEOHead
        title="What's On in Townsville This Week | Events, Markets & Festivals (2026)"
        description="Find out what's on in Townsville this week. Updated weekly by a local guide with markets, festivals, NRL games, nature events, and seasonal highlights across North Queensland."
      />

      {/* Header Section */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-gray-600 hover:text-primary flex items-center gap-2 text-sm font-medium transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
          <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            Updated: Feb 23, 2026
          </span>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl space-y-8">
        
        {/* Hero Section — SEO-enhanced H1 */}
        <div className="space-y-4 text-center sm:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
             What's On in Townsville This Week (Feb 23–March 1, 2026)
           </h1>
           <p className="text-sm text-gray-500">
             Updated weekly by a local Townsville guide to help you discover events, markets, festivals, and seasonal highlights.
           </p>
           <p className="text-lg text-gray-600 max-w-2xl">
             Late February and early March in Townsville brings the excitement of the NRL season launch alongside our beautiful tropical mornings. Plan your outdoor activities early.
           </p>
        </div>

        {/* SEO Intro Paragraph */}
        <p className="text-gray-600 max-w-3xl">
          Looking for events in Townsville this weekend or planning the week ahead? This regularly updated local guide highlights what's happening around Townsville — from community markets and sporting events to festivals, nature activities, and seasonal experiences across North Queensland. Visiting Townsville for an event? Check our <Link to="/townsville-airport" className="text-primary font-medium hover:underline">Townsville Airport Guide</Link> for transport, arrival tips, and local travel advice.
        </p>

        {/* This Week's Highlights Quick Summary */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">This Week's Highlights in Townsville</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>NRL season launch excitement and local watch gatherings</li>
            <li>Sunday Cotters Market in the CBD</li>
            <li>Community Clean Up Australia Day events</li>
            <li>Wet-season waterfalls and lush nature conditions — perfect for visiting <Link to="/guides/little-crystal-creek" className="text-primary font-medium hover:underline">Crystal Creek</Link> or the <Link to="/nature" className="text-primary font-medium hover:underline">Paluma Range</Link></li>
          </ul>
        </section>

        {/* AI Call to Action + Official Calendar */}
        <Card className="bg-primary/5 border-primary/20 shadow-sm">
          <CardContent className="flex flex-col md:flex-row items-center gap-6 p-6">
            <div className="flex-grow space-y-2 text-center md:text-left">
              <h3 className="font-semibold text-lg text-primary">What's On This Week?</h3>
              <p className="text-sm text-gray-600">
                Ask me: "What's the best sunrise walk in Townsville?" or "Is it safe to swim this weekend?"
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button asChild className="w-full sm:w-auto">
                <Link to="/">Ask AI Agent</Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto gap-2">
                <a href="https://whatson.townsville.qld.gov.au/" target="_blank" rel="noopener noreferrer">
                  Official Event Calendar
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* This Weekend's Highlights */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-gray-900">This Weekend's Highlights</h2>
             <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-100">
               Feb 23 – March 1
             </Badge>
          </div>

          <div className="grid gap-6 md:grid-cols-1">
            
            {/* NRL Season Opener */}
            <Card className="border-l-4 border-l-green-500 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">
                    The Big Event
                  </Badge>
                  <Trophy className="w-5 h-5 text-gray-400" />
                </div>
                <CardTitle className="text-xl mt-2">NRL Season Opener: Cowboys vs Knights (Vegas)</CardTitle>
                <div className="flex flex-col gap-1 text-sm text-gray-600 mt-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Sunday, March 1 | 1:15 PM AEST</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Local Watch Parties (Leagues Club & North Shore Tavern)</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-600 text-sm">
                  The season kicks off in Las Vegas! Join the local crowd for a midday celebration. Head to the <Link to="/cowboys-stadium-guide" className="text-primary font-medium hover:underline">Cowboys Game Day Guide</Link> for tips on attending home games later in the season.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  Check with local venues like the Cowboys Leagues Club for their specific pre-game event start times.
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Cotters Market */}
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline">Markets</Badge>
                    <Info className="w-5 h-5 text-gray-400" />
                  </div>
                  <CardTitle className="text-lg mt-2">Cotters Market</CardTitle>
                  <div className="flex flex-col gap-1 text-sm text-gray-600 mt-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Sunday, March 1 | 8:00 AM – 1:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Flinders Street, CBD</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Perfect for a Sunday stroll before the footy starts.
                  </p>
                </CardContent>
              </Card>

              {/* Clean Up Australia Day */}
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline">Nature</Badge>
                    <Leaf className="w-5 h-5 text-gray-400" />
                  </div>
                  <CardTitle className="text-lg mt-2">Clean Up Australia Day</CardTitle>
                  <div className="flex flex-col gap-1 text-sm text-gray-600 mt-1">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Sunday, March 1 | Various Locations</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-gray-600 text-sm">
                    Join the local teams at Pallarenda or the Ross River to keep our backyard beautiful. Explore our <Link to="/beaches" className="text-primary font-medium hover:underline">Beaches guide</Link> for more coastal spots nearby.
                  </p>
                  <p className="text-sm">
                    <Link to="/north-shore-townsville" className="text-primary font-medium hover:underline">
                      Explore quiet walking trails on the North Shore →
                    </Link>
                  </p>
                </CardContent>
              </Card>
            </div>

          </div>
        </section>

        {/* Local Climate Tip */}
        <div className="bg-amber-50 border border-amber-100 rounded-lg p-5 flex gap-4 items-start">
          <Thermometer className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
          <div>
            <h3 className="font-semibold text-amber-900 text-sm">Local Tip</h3>
            <p className="text-amber-800 text-sm mt-1">
              Townsville's tropical climate means outdoor events are usually best early morning or late afternoon. Locals often avoid midday heat, especially during the warmer months. Check out our <Link to="/guides/beat-the-heat" className="text-primary font-medium hover:underline">Beat the Heat guide</Link> for more tips.
            </p>
          </div>
        </div>

        {/* Rowes Bay Promo Block */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-semibold text-lg text-blue-900">Looking for a quiet sunset spot?</h3>
            <p className="text-blue-700 text-sm max-w-md">
              For a quieter coastal sunset, head north to Rowes Bay. Easy parking, fewer crowds, and steady sea breeze.
            </p>
          </div>
          <Button asChild variant="outline" className="bg-white hover:bg-blue-50 text-blue-700 border-blue-200 shrink-0">
            <Link to="/rowes-bay">View Rowes Bay Guide</Link>
          </Button>
        </div>

        {/* Recurring Events Section */}
        <section className="pt-8 border-t">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recurring Events</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Strand Night Markets</CardTitle>
                <p className="text-sm text-gray-500">First Friday of Month</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">Check seasonality (Dry Season only). A popular evening out along <Link to="/the-strand" className="text-primary font-medium hover:underline">The Strand</Link> with live music, food, and local crafts.</p>
                <Button asChild variant="outline" size="sm" className="w-full gap-2">
                  <a href="https://whatson.townsville.qld.gov.au/" target="_blank" rel="noopener noreferrer">
                    Check dates <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cowboys NRL Games</CardTitle>
                <p className="text-sm text-gray-500">March–September</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">Season Starts March 1! First home game vs Titans on March 22.</p>
                <Button asChild variant="outline" size="sm" className="w-full gap-2">
                  <Link to="/cowboys-stadium-guide">View Cowboys Guide <ArrowRight className="w-3 h-3" /></Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full gap-2">
                  <a href="https://www.cowboys.com.au/draw/" target="_blank" rel="noopener noreferrer">
                    Find next game <ExternalLink className="w-3 h-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Wet Season Planning</CardTitle>
                <p className="text-sm text-gray-500">Jan – March</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Peak waterfall flow at Wallaman Falls and Crystal Creek. Check road conditions after heavy rain. Browse our <Link to="/things-to-do" className="text-primary font-medium hover:underline">Things to Do guide</Link> for wet-season ideas.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Major 2026 Events to Plan For */}
        <section className="pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Major 2026 Events to Plan For</h2>
          <p className="text-gray-600 mb-6">Mark your calendar for these highlights. Need a place to stay? Check our <Link to="/accommodation" className="text-primary font-medium hover:underline">Accommodation guide</Link>.</p>
          
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900">Strand Ephemera</h3>
                <p className="text-sm text-gray-600 mt-1">Australia's leading outdoor sculpture festival. Biennial event transforming The Strand into an open-air gallery with installations from local and international artists.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900">Magnetic Island Race Week</h3>
                <p className="text-sm text-gray-600 mt-1">Late August. Sailing yachts compete around Magnetic Island's stunning bays in one of North Queensland's biggest sailing spectacles and a major regional tourism draw.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900">North Australian Festival of Arts</h3>
                <p className="text-sm text-gray-600 mt-1">June–July. Flagship arts festival featuring theatre, music, and circus, plus comedy nights, outdoor installations, and light shows across multiple Townsville venues.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Annual Festivals - Detailed List */}
        <section className="pt-8">
           <h2 className="text-2xl font-bold text-gray-900 mb-6">Annual Festivals Calendar</h2>
           <div className="space-y-4">
              <Card>
                <CardContent className="p-4 flex gap-4">
                  <div className="text-xs font-bold text-gray-500 w-16 pt-1">JUN-JUL</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">North Australian Festival of Arts (NAFA)</h3>
                    <p className="text-sm text-gray-600 mt-1">Townsville's flagship arts festival featuring theatre, music, circus, comedy, light shows and outdoor performances. It's the largest multi-arts festival in Northern Australia, drawing performers from across the country.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex gap-4">
                  <div className="text-xs font-bold text-gray-500 w-16 pt-1">JUL-AUG</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Australian Festival of Chamber Music</h3>
                    <p className="text-sm text-gray-600 mt-1">World-class chamber music performed across stunning venues including St James' Cathedral. The festival attracts internationally acclaimed musicians and is one of Australia's premier classical music events.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex gap-4">
                  <div className="text-xs font-bold text-gray-500 w-16 pt-1">AUGUST</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Townsville Running Festival</h3>
                    <p className="text-sm text-gray-600 mt-1">Marathon, half-marathon and fun run options through scenic streets and waterfront. A fantastic community event with courses winding past <Link to="/the-strand" className="text-primary font-medium hover:underline">The Strand</Link> and Castle Hill.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex gap-4">
                  <div className="text-xs font-bold text-gray-500 w-16 pt-1">DECEMBER</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Townsville Christmas Festival</h3>
                    <p className="text-sm text-gray-600 mt-1">Festive lights, markets, food stalls and entertainment to celebrate the holiday season. A family-friendly atmosphere with spectacular light displays across the CBD and waterfront.</p>
                  </div>
                </CardContent>
              </Card>
           </div>
        </section>

        {/* FAQ Section */}
        <section className="pt-8 border-t">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked About Townsville Events</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger className="text-left font-semibold text-gray-900">What is happening in Townsville this weekend?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Markets, sports events, seasonal festivals, and outdoor activities typically feature each week. This page is updated regularly with current highlights. You can also check the <a href="https://whatson.townsville.qld.gov.au/" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">official Townsville events calendar</a> for additional listings.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger className="text-left font-semibold text-gray-900">Where can I find live music in Townsville?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Popular spots include Palmer Street venues, Cowboys Leagues Club, Strand Night Markets, and seasonal festival stages. Browse our <Link to="/food" className="text-primary font-medium hover:underline">Food & Drink guide</Link> for dining spots with live entertainment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3">
              <AccordionTrigger className="text-left font-semibold text-gray-900">Are Townsville events family friendly?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Most community markets, festivals, lagoon activities, and outdoor events welcome families. Always check venue-specific details. For family activity ideas, see our <Link to="/things-to-do" className="text-primary font-medium hover:underline">Things to Do</Link> and <Link to="/dog-friendly" className="text-primary font-medium hover:underline">Dog-Friendly</Link> guides.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Footer CTA Section */}
        <section className="pt-8 pb-8 border-t">
          <div className="bg-primary/5 rounded-2xl p-8 text-center space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Have specific questions about the weekend?</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Not sure where to park or if your dog is allowed? Ask our AI agent on the homepage.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/">Ask the Local AI</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/dog-friendly">
                  <Dog className="w-4 h-4" />
                  View Dog Beach Guide
                </Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Events;
