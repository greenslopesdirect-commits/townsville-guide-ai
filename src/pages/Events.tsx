import { Calendar, MapPin, Music, Info, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header Section */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-gray-600 hover:text-primary flex items-center gap-2 text-sm font-medium transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
          <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            Last Updated: Feb 2, 2026
          </span>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl space-y-8">
        
        {/* Hero Section - UPDATED FOR FEB 6-8 */}
        <div className="space-y-4 text-center sm:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
            What's On: Feb 6 – Feb 8
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            The first Friday of the month brings the famous <strong>Strand Night Markets</strong>! Enjoy cool evening breezes, street food, and the best of the local weekend scene.
          </p>
        </div>

        {/* AI Call to Action */}
        <Card className="bg-primary/5 border-primary/20 shadow-sm">
          <CardContent className="flex flex-col sm:flex-row items-center gap-4 p-4">
            <div className="bg-primary/10 p-3 rounded-full shrink-0">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-grow text-center sm:text-left">
              <h3 className="font-semibold text-primary">What's On This Week?</h3>
              <p className="text-sm text-gray-600">Ask our AI guide for the latest events and activities happening right now.</p>
            </div>
            <Button asChild className="shrink-0 w-full sm:w-auto">
              <Link to="/">Ask AI Agent</Link>
            </Button>
          </CardContent>
        </Card>

        {/* This Weekend's Highlights - UPDATED DATES & ADDED STRAND MARKETS */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-gray-900">This Weekend's Highlights</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-1">
            
            {/* Strand Night Markets - NEW HERO EVENT */}
            <Card className="border-l-4 border-l-purple-500 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 border-none">
                    Must Do
                  </Badge>
                  <Music className="w-5 h-5 text-gray-400" />
                </div>
                <CardTitle className="text-xl mt-2">Strand Night Markets</CardTitle>
                <div className="flex flex-col gap-1 text-sm text-gray-600 mt-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Friday, Feb 6 | 5:00 PM – 9:30 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Strand Park (The Strand)</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  The monthly favorite returns. Dozens of food trucks, local crafts, and live music under the palm trees. 
                  <strong> Tip:</strong> Parking fills up by 5:30 PM; try the back streets of North Ward.
                </p>
              </CardContent>
            </Card>

            {/* Willows Markets - DATE UPDATE */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge variant="outline">Shopping</Badge>
                  <Info className="w-5 h-5 text-gray-400" />
                </div>
                <CardTitle className="text-xl mt-2">Willows Rotary Markets</CardTitle>
                <div className="flex flex-col gap-1 text-sm text-gray-600 mt-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Sunday, Feb 8 | 7:30 AM – 11:30 AM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Willows Shopping Centre Carpark</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Townsville's biggest weekly market. Fresh produce, plants, and second-hand treasures. Get there early for the best fruit & veg.
                </p>
              </CardContent>
            </Card>

            {/* Cotters Market - DATE UPDATE */}
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <Badge variant="outline">Local</Badge>
                  <Info className="w-5 h-5 text-gray-400" />
                </div>
                <CardTitle className="text-xl mt-2">Cotters Market</CardTitle>
                <div className="flex flex-col gap-1 text-sm text-gray-600 mt-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Sunday, Feb 8 | 8:00 AM – 1:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Flinders Street, CBD</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  The classic city market. Great for local arts, crafts, and grabbing a coffee while exploring the CBD.
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Rowes Bay Promo Block (PRESERVED) */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-semibold text-lg text-blue-900">Looking for a quiet sunset spot?</h3>
            <p className="text-blue-700 text-sm max-w-md">
              Escape the crowds at The Strand. Check out our new guide to Rowes Bay (and where to get the best fish & chips).
            </p>
          </div>
          <Button asChild variant="outline" className="bg-white hover:bg-blue-50 text-blue-700 border-blue-200 shrink-0">
            <Link to="/rowes-bay">View Rowes Bay Guide</Link>
          </Button>
        </div>

        {/* The Big Ones You Can't Miss (PRESERVED) */}
        <section className="pt-8 border-t">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Big Ones You Can't Miss</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-3">
              <div className="text-4xl">🏎️</div>
              <h3 className="font-semibold text-gray-900">NTI Townsville 500 (Supercars)</h3>
              <p className="text-sm text-gray-600">
                Every July, the Reid Park precinct shuts down for a weekend of street racing and massive concerts.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl">🥕</div>
              <h3 className="font-semibold text-gray-900">Market Watch</h3>
              <p className="text-sm text-gray-600">
                Locals go to Willows Rotary Markets (Sundays in Kirwan) for the best fresh fruit and veg.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl">🌅</div>
              <h3 className="font-semibold text-gray-900">Lest We Forget</h3>
              <p className="text-sm text-gray-600">
                The Anzac Day Dawn Service (April 25) at The Strand is a deeply moving experience.
              </p>
            </div>
          </div>
        </section>

        {/* Annual Festivals (PRESERVED) */}
        <section className="pt-8">
           <h2 className="text-2xl font-bold text-gray-900 mb-6">Annual Festivals</h2>
           <div className="space-y-4">
              <Card>
                <CardContent className="p-4 flex gap-4">
                  <div className="text-xs font-bold text-gray-500 w-16 pt-1">JUN-JUL</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">North Australian Festival of Arts (NAFA)</h3>
                    <p className="text-sm text-gray-600 mt-1">Townsville's flagship arts festival featuring theatre, music, circus, comedy, light shows and outdoor performances.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex gap-4">
                  <div className="text-xs font-bold text-gray-500 w-16 pt-1">JUL-AUG</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Australian Festival of Chamber Music</h3>
                    <p className="text-sm text-gray-600 mt-1">World-class chamber music performed across stunning venues including St James' Cathedral.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex gap-4">
                  <div className="text-xs font-bold text-gray-500 w-16 pt-1">AUGUST</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Townsville Running Festival</h3>
                    <p className="text-sm text-gray-600 mt-1">Marathon, half-marathon and fun run options through scenic streets and waterfront.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex gap-4">
                  <div className="text-xs font-bold text-gray-500 w-16 pt-1">DECEMBER</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Townsville Christmas Festival</h3>
                    <p className="text-sm text-gray-600 mt-1">Festive lights, markets, food stalls and entertainment to celebrate the holiday season.</p>
                  </div>
                </CardContent>
              </Card>
           </div>
        </section>

        {/* Quick Calendar (PRESERVED) */}
        <section className="pt-8">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Calendar</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="p-4 bg-white border rounded-lg">
              <div className="font-medium text-primary">Dry Season (May–Oct)</div>
              <div className="text-sm text-gray-500 mt-1">Peak event season. NAFA, AFCM, Race Week, outdoor festivals and perfect weather.</div>
            </div>
            <div className="p-4 bg-white border rounded-lg">
              <div className="font-medium text-primary">Build-Up (Nov–Dec)</div>
              <div className="text-sm text-gray-500 mt-1">Christmas markets, end-of-year celebrations and warmer weather.</div>
            </div>
            <div className="p-4 bg-white border rounded-lg">
              <div className="font-medium text-primary">Wet Season (Jan–Apr)</div>
              <div className="text-sm text-gray-500 mt-1">Indoor events, school holiday activities and quieter event calendar.</div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Events;
