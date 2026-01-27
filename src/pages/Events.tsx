import { Calendar, MapPin, Music, Sun, Umbrella, MessageCircle, Trophy, ExternalLink, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Events = () => {
  const askAI = (query: string) => {
    (window as any).setAiInputValue?.(query);
  };

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link to="/" className="text-sm hover:underline opacity-90 mb-4 block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">What's On: Jan 31 – Feb 1</h1>
          <p className="text-xl opacity-90 mb-6">
            Townsville returns to its relaxed tropical rhythm. Discover local markets, footy, and the best spots for a Sunday morning walk.
          </p>
          <div className="flex flex-wrap gap-3">
             <Button 
              variant="secondary" 
              onClick={() => askAI("What is on right now?")}
              className="gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              Ask What's On
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20 gap-2" asChild>
                <a href="https://whatson.townsville.qld.gov.au/" target="_blank" rel="noreferrer">
                    Official Event Calendar <ExternalLink className="h-4 w-4"/>
                </a>
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-75">Last Updated: Jan 27, 2026</p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 -mt-8">
        
        {/* Ask AI Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-l-4 border-blue-500">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">What's On This Week?</h2>
              <p className="text-gray-600">Ask our AI guide for the latest events and activities happening right now.</p>
            </div>
            <Button onClick={() => askAI("What is on this week?")} className="shrink-0 gap-2">
              <MessageCircle className="h-4 w-4" />
              Ask AI Agent
            </Button>
          </div>
        </div>

        {/* This Weekend's Highlights */}
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

          {/* New Rowes Bay Promo */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg text-blue-900">Looking for a quiet sunset spot?</h3>
              <p className="text-blue-800 text-sm">
                Escape the crowds at The Strand. Check out our new guide to Rowes Bay (and where to get the best fish & chips).
              </p>
            </div>
            <Button asChild className="shrink-0" variant="outline">
              <Link to="/rowes-bay">View Rowes Bay Guide</Link>
            </Button>
          </div>
        </div>

        {/* The Big Ones You Can't Miss */}
        <div className="bg-neutral-900 text-white rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">The Big Ones You Can't Miss</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-2xl">🏎️</span>
                <div>
                  <h3 className="font-bold text-lg">NTI Townsville 500 (Supercars)</h3>
                  <p className="text-gray-300 text-sm">Every July, the Reid Park precinct shuts down for a weekend of street racing and massive concerts.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <span className="text-2xl">🥕</span>
                <div>
                  <h3 className="font-bold text-lg">Market Watch</h3>
                  <p className="text-gray-300 text-sm">Locals go to <strong>Willows Rotary Markets</strong> (Sundays in Kirwan) for the best fresh fruit and veg.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-2xl">🌅</span>
                <div>
                  <h3 className="font-bold text-lg">Lest We Forget</h3>
                  <p className="text-gray-300 text-sm">The Anzac Day Dawn Service (April 25) at The Strand is a deeply moving experience.</p>
                </div>
              </div>
            </div>
        </div>

        {/* Recurring Events */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Recurring Events</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
              <Music className="h-5 w-5" />
            </div>
            <h3 className="font-bold mb-2">Strand Night Markets</h3>
            <p className="text-sm text-gray-600 mb-2">First Friday of Month</p>
            <p className="text-sm text-gray-500">
              Check seasonality (Dry Season only).
            </p>
            <Button variant="link" onClick={() => askAI("When are Strand Night Markets?")} className="p-0 h-auto mt-2">
                Check dates
            </Button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="h-10 w-10 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-yellow-600">
              <Trophy className="h-5 w-5" />
            </div>
            <h3 className="font-bold mb-2">Cowboys NRL Games</h3>
            <p className="text-sm text-gray-600 mb-2">March–September</p>
            <p className="text-sm text-gray-500">
              Home games at QCB Stadium. Electric atmosphere.
            </p>
            <Button variant="link" onClick={() => askAI("When is the next Cowboys game?")} className="p-0 h-auto mt-2">
                Find next game
            </Button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
              <Umbrella className="h-5 w-5" />
            </div>
            <h3 className="font-bold mb-2">Wet Season Planning</h3>
            <p className="text-sm text-gray-600 mb-2">Jan – March</p>
            <p className="text-sm text-gray-500">
              Best time for waterfalls (Wallaman/Crystal Creek).
            </p>
          </div>
        </div>

        {/* Major 2026 Events Text List */}
        <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Major 2026 Events to Plan For</h2>
            <p className="text-gray-600 mb-6">Mark your calendar for these highlights.</p>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 border rounded-lg">
                    <h3 className="font-bold">Strand Ephemera</h3>
                    <p className="text-sm text-gray-600">Australia's leading outdoor sculpture festival. Biennial event transforming The Strand.</p>
                </div>
                <div className="bg-white p-4 border rounded-lg">
                    <h3 className="font-bold">Magnetic Island Race Week</h3>
                    <p className="text-sm text-gray-600">Late August. Sailing yachts compete around Magnetic Island's stunning bays.</p>
                </div>
                <div className="bg-white p-4 border rounded-lg">
                    <h3 className="font-bold">North Australian Festival of Arts</h3>
                    <p className="text-sm text-gray-600">June–July. Flagship arts festival featuring theatre, music, and circus.</p>
                </div>
            </div>
        </div>

        {/* Detailed Annual Festivals */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Annual Festivals</h2>
        <div className="space-y-4 mb-12">
           {/* NAFA */}
           <div className="bg-white p-4 rounded-lg border flex flex-col sm:flex-row gap-4">
            <div className="bg-pink-100 w-full sm:w-24 h-24 rounded-lg flex items-center justify-center shrink-0 text-pink-700 font-bold text-sm text-center p-1">
              JUN-JUL
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">North Australian Festival of Arts (NAFA)</h3>
              <p className="text-sm text-gray-600 mb-2">Townsville's flagship arts festival featuring theatre, music, circus, comedy, light shows and outdoor performances.</p>
              <div className="flex gap-2 text-xs text-gray-500 mb-3">
                <span className="bg-gray-100 px-2 py-1 rounded">Arts</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Family Friendly</span>
              </div>
              <Button variant="ghost" size="sm" onClick={() => askAI("Tell me about NAFA festival")} className="text-primary p-0 h-auto">
                <MessageCircle className="h-3 w-3 mr-1"/> Ask AI
              </Button>
            </div>
          </div>

           {/* AFCM */}
           <div className="bg-white p-4 rounded-lg border flex flex-col sm:flex-row gap-4">
            <div className="bg-indigo-100 w-full sm:w-24 h-24 rounded-lg flex items-center justify-center shrink-0 text-indigo-700 font-bold text-sm text-center p-1">
              JUL-AUG
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">Australian Festival of Chamber Music</h3>
              <p className="text-sm text-gray-600 mb-2">World-class chamber music performed across stunning venues including St James' Cathedral.</p>
              <div className="flex gap-2 text-xs text-gray-500 mb-3">
                <span className="bg-gray-100 px-2 py-1 rounded">Music</span>
                <span className="bg-gray-100 px-2 py-1 rounded">World-Class</span>
              </div>
              <Button variant="ghost" size="sm" onClick={() => askAI("Tell me about AFCM")} className="text-primary p-0 h-auto">
                <MessageCircle className="h-3 w-3 mr-1"/> Ask AI
              </Button>
            </div>
          </div>

          {/* Running Festival */}
           <div className="bg-white p-4 rounded-lg border flex flex-col sm:flex-row gap-4">
            <div className="bg-emerald-100 w-full sm:w-24 h-24 rounded-lg flex items-center justify-center shrink-0 text-emerald-700 font-bold text-sm text-center p-1">
              AUGUST
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">Townsville Running Festival</h3>
              <p className="text-sm text-gray-600 mb-2">Marathon, half-marathon and fun run options through scenic streets and waterfront.</p>
              <Button variant="ghost" size="sm" onClick={() => askAI("Townsville Running Festival details")} className="text-primary p-0 h-auto">
                <MessageCircle className="h-3 w-3 mr-1"/> Ask AI
              </Button>
            </div>
          </div>

          {/* Christmas */}
           <div className="bg-white p-4 rounded-lg border flex flex-col sm:flex-row gap-4">
            <div className="bg-red-100 w-full sm:w-24 h-24 rounded-lg flex items-center justify-center shrink-0 text-red-700 font-bold text-sm text-center p-1">
              DECEMBER
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">Townsville Christmas Festival</h3>
              <p className="text-sm text-gray-600 mb-2">Festive lights, markets, food stalls and entertainment to celebrate the holiday season.</p>
              <Button variant="ghost" size="sm" onClick={() => askAI("Christmas events Townsville")} className="text-primary p-0 h-auto">
                <MessageCircle className="h-3 w-3 mr-1"/> Ask AI
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Calendar */}
        <div className="bg-slate-50 rounded-xl p-6 mb-12 border">
            <h2 className="text-xl font-bold mb-4">Quick Calendar</h2>
            <div className="grid md:grid-cols-3 gap-4">
                <div>
                    <h4 className="font-bold text-sm text-orange-600 mb-1">Dry Season (May–Oct)</h4>
                    <p className="text-xs text-gray-600">Peak event season. NAFA, AFCM, Race Week, outdoor festivals and perfect weather.</p>
                </div>
                <div>
                    <h4 className="font-bold text-sm text-yellow-600 mb-1">Build-Up (Nov–Dec)</h4>
                    <p className="text-xs text-gray-600">Christmas markets, end-of-year celebrations and warmer weather.</p>
                </div>
                <div>
                    <h4 className="font-bold text-sm text-blue-600 mb-1">Wet Season (Jan–Apr)</h4>
                    <p className="text-xs text-gray-600">Indoor events, school holiday activities and quieter event calendar.</p>
                </div>
            </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-neutral-900 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Have specific questions about the weekend?</h2>
          <p className="mb-6 text-gray-300">Not sure where to park or if your dog is allowed? Ask our AI agent on the homepage.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="secondary" size="lg">
                <Link to="/">Ask the Local AI</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/20">
                <Link to="/dog-friendly">🐕 View Dog Beach Guide</Link>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Events;
