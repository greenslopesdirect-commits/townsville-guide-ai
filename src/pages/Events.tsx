import { Calendar, MapPin, Music, Sun, Umbrella } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Events = () => {
  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link to="/" className="text-sm hover:underline opacity-90 mb-4 block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">What's On: Jan 31 – Feb 1</h1>
          <p className="text-xl opacity-90">
            Townsville returns to its relaxed tropical rhythm. Discover local markets and the best spots for a Sunday morning walk.
          </p>
          <p className="text-sm mt-4 opacity-75">Last Updated: Jan 27, 2026</p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 -mt-8">
        
        {/* Weekend Highlights */}
        <div className="grid gap-6 mb-12">
          <Card className="shadow-lg border-none">
            <CardHeader className="bg-white rounded-t-lg border-b">
              <CardTitle className="flex items-center gap-2 text-primary">
                <Sun className="h-5 w-5" />
                This Weekend's Highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 grid md:grid-cols-2 gap-6">
              
              {/* Event 1 */}
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg">Willows Rotary Markets</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Shopping</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Sunday, Feb 1 | 7:30 AM – 11:30 AM</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Willows Shopping Centre Carpark</span>
                </div>
                <p className="text-sm text-gray-700">
                  Townsville's biggest weekly market. Fresh produce, plants, and second-hand treasures. Get there early for the best fruit & veg.
                </p>
              </div>

              {/* Event 2 */}
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg">Cotters Market</h3>
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Local</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Sunday, Feb 1 | 8:00 AM – 1:00 PM</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Flinders Street, CBD</span>
                </div>
                <p className="text-sm text-gray-700">
                  The classic city market. Great for local arts, crafts, and grabbing a coffee while exploring the CBD.
                </p>
              </div>

            </CardContent>
          </Card>

          {/* New Page Promo (Internal Linking Strategy) */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg text-blue-900">Looking for a quiet sunset spot?</h3>
              <p className="text-blue-800 text-sm">
                Escape the crowds at The Strand. Check out our new guide to Rowes Bay (and where to get the best fish & chips).
              </p>
            </div>
            <Button asChild className="shrink-0">
              <Link to="/rowes-bay">View Rowes Bay Guide</Link>
            </Button>
          </div>
        </div>

        {/* Recurring Events Section */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Regular Happenings</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
              <Music className="h-5 w-5" />
            </div>
            <h3 className="font-bold mb-2">Strand Night Markets</h3>
            <p className="text-sm text-gray-600 mb-2">First Friday of Month</p>
            <p className="text-sm text-gray-500">
              *Note: Usually pauses during peak wet season/summer heat. Check local listings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="h-10 w-10 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-yellow-600">
              <Sun className="h-5 w-5" />
            </div>
            <h3 className="font-bold mb-2">Magpies Crusaders</h3>
            <p className="text-sm text-gray-600 mb-2">Seasonal Football</p>
            <p className="text-sm text-gray-500">
              Keep an eye out for upcoming home games as the season warms up.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
              <Umbrella className="h-5 w-5" />
            </div>
            <h3 className="font-bold mb-2">Wet Season Planning</h3>
            <p className="text-sm text-gray-600 mb-2">Jan – March</p>
            <p className="text-sm text-gray-500">
              Best time for waterfalls (Wallaman/Crystal Creek) or indoor activities like the Museum of Tropical Queensland.
            </p>
          </div>
        </div>

        {/* Annual Festivals (Evergreen) */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">2026 Major Events</h2>
        <div className="space-y-4">
           {/* NAFA */}
           <div className="bg-white p-4 rounded-lg border flex gap-4">
            <div className="bg-pink-100 w-16 h-16 rounded-lg flex items-center justify-center shrink-0 text-pink-700 font-bold text-xs text-center p-1">
              JUN-JUL
            </div>
            <div>
              <h3 className="font-bold">North Australian Festival of Arts</h3>
              <p className="text-sm text-gray-600">Townsville's flagship arts festival featuring theatre, comedy, and light shows.</p>
            </div>
          </div>

           {/* AFCM */}
           <div className="bg-white p-4 rounded-lg border flex gap-4">
            <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center shrink-0 text-indigo-700 font-bold text-xs text-center p-1">
              JUL-AUG
            </div>
            <div>
              <h3 className="font-bold">Australian Festival of Chamber Music</h3>
              <p className="text-sm text-gray-600">World-class classical music in stunning tropical venues.</p>
            </div>
          </div>

          {/* Supercars */}
          <div className="bg-white p-4 rounded-lg border flex gap-4">
            <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center shrink-0 text-red-700 font-bold text-xs text-center p-1">
              JULY
            </div>
            <div>
              <h3 className="font-bold">NTI Townsville 500</h3>
              <p className="text-sm text-gray-600">The Reid Park street circuit roars to life. Supercars and concerts.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-neutral-900 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Have specific questions?</h2>
          <p className="mb-6 text-gray-300">Not sure if the markets are on due to rain? Ask our AI agent.</p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/">Ask the Local AI</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Events;
