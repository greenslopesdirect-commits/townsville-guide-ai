import { Link } from "react-router-dom";
import { Calendar, ArrowRight, MapPin, Clock, Music, Laugh, Star, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const EventsOn = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Upcoming Events & Local Highlights</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">What's On: Caravan Expo, Dream Fields & Cowboys vs Rabbitohs</h2>
            <p className="text-slate-600 mt-2 max-w-xl text-lg">
              Townsville hosts markets, festivals, live shows, and community events throughout the year.
            </p>
          </div>
          
          <Link to="/events">
            <Button variant="outline" className="hidden md:flex gap-2">
              View Full Calendar <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* FEATURED: YEAR-ROUND EVENTS */}
        <div className="grid lg:grid-cols-5 gap-0 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12 hover:shadow-md transition-shadow">
            
            {/* Visual Side (Left) */}
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 flex flex-col justify-between text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="relative z-10">
                    <span className="inline-block px-3 py-1 bg-yellow-400 text-blue-900 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                        May 2026 Highlights
                    </span>
                    <h3 className="text-3xl font-bold leading-tight mb-2">Events & Festivals</h3>
                    <p className="text-blue-100 font-medium">Caravan expo, festivals & Sunday arvo footy</p>
                     <p className="mt-3 text-sm font-semibold text-yellow-300">🚐 Caravan & 4x4 Expo — May 15–17, Reid Park</p>
                     <span className="inline-block mt-2 px-2 py-0.5 bg-green-400 text-green-900 font-bold text-xs uppercase tracking-wider rounded-full">The Perfect Dry</span>
                </div>
                <div className="relative z-10 mt-8">
                     <div className="flex items-center gap-2 text-sm font-medium opacity-90">
                        <MapPin className="w-4 h-4" />
                        <span>Reid Park, Central Park & QLD Country Bank Stadium</span>
                     </div>
                </div>
            </div>

            {/* Content Side (Right) */}
            <div className="lg:col-span-3 p-8 flex flex-col justify-center">
                <div className="prose prose-slate mb-6">
                    <p className="text-slate-600 text-lg leading-relaxed">
                        From the <strong>Cowboys vs Eels</strong> Round 10 blockbuster (Friday May 8, 8:00 PM kick-off) to the <strong>World Science Festival QLD</strong> at the Museum of Tropical Queensland (Saturday May 9), and a massive <strong>Mother's Day Sunday</strong> with the Colour Frenzy at Riverway and the Charity Fun Run at Rossiter Park —
                        there's always something happening in Townsville.
                    </p>
                </div>
                
                <div className="flex flex-wrap gap-4 items-center">
                    <Link to="/events">
                        <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
                            View Full Events Calendar
                        </Button>
                    </Link>
                    <span className="text-sm text-slate-500 italic">
                        Updated May 4, 2026.
                    </span>
                </div>
            </div>
        </div>

        {/* UPCOMING EVENTS GRID */}
        <h3 className="font-bold text-xl text-slate-800 mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" /> Coming Up
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
            
            {/* Card 1 — Cowboys vs Eels (May 8) */}
            <Card className="hover:shadow-lg transition-all cursor-pointer group border-l-4 border-l-blue-500 border-slate-200">
                <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                            May 8 — Round 10
                        </div>
                        <Trophy className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Cowboys vs Eels (Home)</h4>
                    <p className="text-xs text-primary font-medium mb-1">Friday, May 8</p>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <MapPin className="w-4 h-4" /> QLD Country Bank Stadium
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock className="w-4 h-4" /> Kick-off: 8:00 PM
                    </div>
                    <p className="text-xs text-slate-500 mt-2">🚧 Lowths Bridge closes at 4:30 PM.</p>
                </CardContent>
            </Card>

            {/* Card 2 — World Science Festival QLD (May 9) */}
            <Card className="hover:shadow-lg transition-all cursor-pointer group border-slate-200">
                <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold">
                            Saturday — May 9
                        </div>
                        <Star className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">World Science Festival QLD</h4>
                    <p className="text-xs text-primary font-medium mb-1">Saturday, May 9 • 9:00 AM – 3:00 PM</p>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <MapPin className="w-4 h-4" /> Museum of Tropical Queensland
                    </div>
                    <p className="text-xs text-slate-500 mt-2">🔬 Community Day — free family fun!</p>
                </CardContent>
            </Card>

            {/* Card 3 — Mother's Day (May 10) */}
            <Card className="hover:shadow-lg transition-all cursor-pointer group border-slate-200">
                <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-bold">
                            Sunday — May 10
                        </div>
                        <Star className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Mother's Day in Townsville</h4>
                    <p className="text-xs text-primary font-medium mb-1">Sunday, May 10</p>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <MapPin className="w-4 h-4" /> Riverway & Rossiter Park
                    </div>
                    <p className="text-xs text-slate-500 mt-2">💐 Colour Frenzy at Riverway (8:30 AM) & Charity Fun Run at Rossiter Park (7:00 AM).</p>
                </CardContent>
            </Card>

        </div>

        {/* May Preview — Featured */}
        <div className="grid md:grid-cols-1 gap-6 mt-6">
          <Card className="hover:shadow-lg transition-all cursor-pointer group border-l-4 border-l-green-500 border-slate-200">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                  May 23 — Festival Preview
                </div>
                <Star className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
              </div>
              <h4 className="text-lg font-bold mb-2">Dream Fields Festival</h4>
              <p className="text-xs text-primary font-medium mb-1">Saturday, May 23</p>
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                <MapPin className="w-4 h-4" /> Central Park, Townsville
              </div>
              <p className="text-xs text-slate-500 mt-2">🎶 Galantis, Peking Duk, Mallrat & Skegss at Central Park</p>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-sm text-slate-600 mt-6">
          🏉 Cowboys vs Eels Friday May 8 (8:00 PM kick-off), World Science Festival Saturday, and Mother's Day events Sunday! <Link to="/events" className="text-primary font-medium hover:underline">View the full calendar →</Link>
        </p>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
            <Link to="/events">
                <Button variant="outline" className="w-full">
                    View Full Calendar
                </Button>
            </Link>
        </div>

      </div>
    </section>
  );
};

export default EventsOn;
