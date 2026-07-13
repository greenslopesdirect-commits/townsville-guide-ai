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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">What's On: Dry Season & Upcoming Events 2026</h2>
            <p className="text-slate-600 mt-2 max-w-xl text-lg">
              From weekly morning markets to massive stadium blockbusters, here is what is coming up across Townsville.
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
                        Dry Season 2026
                    </span>
                    <h3 className="text-3xl font-bold leading-tight mb-2">Events & Festivals</h3>
                    <p className="text-blue-100 font-medium">Markets, motorsport & footy blockbusters</p>
                     <p className="mt-3 text-sm font-semibold text-yellow-300">🏉 Next Up: Queensland Derby — Cowboys vs Broncos, Sat 25 July 2026</p>
                     <span className="inline-block mt-2 px-2 py-0.5 bg-green-400 text-green-900 font-bold text-xs uppercase tracking-wider rounded-full">The Perfect Dry</span>
                </div>
                <div className="relative z-10 mt-8">
                     <div className="flex items-center gap-2 text-sm font-medium opacity-90">
                        <MapPin className="w-4 h-4" />
                        <span>Reid Park, Flinders Street & Queensland Country Bank Stadium</span>
                     </div>
                </div>
            </div>

            {/* Content Side (Right) */}
            <div className="lg:col-span-3 p-8 flex flex-col justify-center">
                <div className="prose prose-slate mb-6">
                    <p className="text-slate-600 text-lg leading-relaxed">
                        From the <strong>V8 Supercars Townsville 500</strong> in July to the <strong>Cowboys home games</strong> at Queensland Country Bank Stadium —
                        there's always something happening in Townsville.
                    </p>
                </div>
                
                <div className="flex flex-wrap gap-4 items-center">
                    <Link to="/events">
                        <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
                            View Full Events Calendar
                        </Button>
                    </Link>
                    <span className="text-sm text-muted-foreground italic">
                        Updated July 2026.
                    </span>
                </div>
            </div>
        </div>

        {/* UPCOMING EVENTS GRID */}
        <h3 className="font-bold text-xl text-slate-800 mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" /> Coming Up
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
            
            {/* Card 1 — Cotters Market */}
            <Card className="hover:shadow-lg transition-all cursor-pointer group border-l-4 border-l-orange-500 border-slate-200">
                <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">
                            Every Sunday — Markets
                        </div>
                        <Star className="w-5 h-5 text-muted-foreground/60 group-hover:text-primary transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Cotters Market</h4>
                    <p className="text-xs text-primary font-medium mb-1">Next: Sunday July 19, 2026 (8 AM – 1 PM)</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <MapPin className="w-4 h-4" /> Flinders Street, CBD
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Townsville's premier Sunday morning market. Grab a fresh coffee, browse local North Queensland crafts, and enjoy the live street entertainment in the fresh morning air.</p>
                </CardContent>
            </Card>

            {/* Card 2 — NTI Townsville 500 (just wrapped) */}
            <Card className="hover:shadow-lg transition-all cursor-pointer group border-l-4 border-l-slate-400 border-slate-200">
                <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-bold">
                            Just Wrapped — Motorsport
                        </div>
                        <Trophy className="w-5 h-5 text-muted-foreground/60 group-hover:text-primary transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">NTI Townsville 500</h4>
                    <p className="text-xs text-primary font-medium mb-1">Concluded Sunday 12 July 2026</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <MapPin className="w-4 h-4" /> Reid Park Street Circuit
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">The annual supercar street circuit wrapped up on Sunday. Pack-down of the Reid Park circuit is underway this week — expect some temporary road changes while barriers come down. Returns July 2027.</p>
                </CardContent>
            </Card>

            {/* Card 3 — Cowboys vs Broncos (Queensland Derby) */}
            <Card className="hover:shadow-lg transition-all cursor-pointer group border-l-4 border-l-blue-500 border-slate-200">
                <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                            Next NRL Home Game
                        </div>
                        <Trophy className="w-5 h-5 text-muted-foreground/60 group-hover:text-primary transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Queensland Derby: Cowboys vs Broncos (Round 21)</h4>
                    <p className="text-xs text-primary font-medium mb-1">Saturday, July 25, 2026</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <MapPin className="w-4 h-4" /> Queensland Country Bank Stadium
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">🏉 The Queensland Derby returns to Townsville — Cowboys host the Brisbane Broncos in a Round 21 blockbuster. Tickets are moving fast; use the free Park &amp; Ride at Lou Litster Park to skip CBD traffic.</p>
                </CardContent>
            </Card>

        </div>

        <p className="text-center text-sm text-slate-600 mt-6">
          🏉 Next home game: Queensland Derby vs Broncos, Sat 25 July · Cotters Market returns Sun 19 July · NTI Townsville 500 just wrapped. <Link to="/events" className="text-primary font-medium hover:underline">View the full calendar →</Link>
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
