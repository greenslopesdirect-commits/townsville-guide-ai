import { Link } from "react-router-dom";
import { Calendar, ArrowRight, MapPin, Clock, Music, Laugh, Star } from "lucide-react";
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">What's On: ANZAC Day, Guy Sebastian, Cowboys vs Sharks & More</h2>
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
                        ANZAC Long Weekend & May 2026
                    </span>
                    <h3 className="text-3xl font-bold leading-tight mb-2">Events & Festivals</h3>
                    <p className="text-blue-100 font-medium">ANZAC Day services, live music & footy</p>
                     <p className="mt-3 text-sm font-semibold text-yellow-300">🇦🇺 ANZAC Day: Sat April 25 — Dawn Service 5:20 AM</p>
                     <span className="inline-block mt-2 px-2 py-0.5 bg-green-400 text-green-900 font-bold text-xs uppercase tracking-wider rounded-full">Dry Season Begins</span>
                </div>
                <div className="relative z-10 mt-8">
                     <div className="flex items-center gap-2 text-sm font-medium opacity-90">
                        <MapPin className="w-4 h-4" />
                        <span>The Strand, TECC, QLD Country Bank Stadium & citywide</span>
                     </div>
                </div>
            </div>

            {/* Content Side (Right) */}
            <div className="lg:col-span-3 p-8 flex flex-col justify-center">
                <div className="prose prose-slate mb-6">
                    <p className="text-slate-600 text-lg leading-relaxed">
                        From the <strong>ANZAC Day Dawn Service</strong> and <strong>Strand Parade</strong> to <strong>Guy Sebastian</strong> at TECC, <strong>Cowboys vs Sharks</strong> Friday night footy and the <strong>Dream Fields Festival</strong> in May —
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
                        Updated April 20, 2026.
                    </span>
                </div>
            </div>
        </div>

        {/* UPCOMING EVENTS GRID */}
        <h3 className="font-bold text-xl text-slate-800 mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" /> Coming Up
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
            
            {/* Card 1 — ANZAC Day (Lead) */}
            <Card className="hover:shadow-lg transition-all cursor-pointer group border-l-4 border-l-red-600 border-slate-200">
                <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">
                            Saturday — ANZAC Day
                        </div>
                        <Star className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">ANZAC Day Dawn Service & Parade</h4>
                    <p className="text-xs text-primary font-medium mb-1">Saturday, April 25</p>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <MapPin className="w-4 h-4" /> Anzac Memorial Park & The Strand
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock className="w-4 h-4" /> Dawn 5:20 AM • Parade 9:00 AM
                    </div>
                </CardContent>
            </Card>

            {/* Card 2 — Guy Sebastian */}
            <Card className="hover:shadow-lg transition-all cursor-pointer group border-slate-200">
                <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold">
                            Wednesday
                        </div>
                        <Music className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Guy Sebastian</h4>
                    <p className="text-xs text-primary font-medium mb-1">Wednesday, April 22 • 7:00 PM</p>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <MapPin className="w-4 h-4" /> TECC
                    </div>
                    <p className="text-xs text-slate-500 mt-2">🎤 100 Times Around the Sun Tour</p>
                </CardContent>
            </Card>

            {/* Card 3 — Cowboys vs Sharks */}
            <Card className="hover:shadow-lg transition-all cursor-pointer group border-slate-200">
                <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                            Friday
                        </div>
                        <Calendar className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Cowboys vs Sharks (Home)</h4>
                    <p className="text-xs text-primary font-medium mb-1">Friday, April 24</p>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <MapPin className="w-4 h-4" /> QLD Country Bank Stadium
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock className="w-4 h-4" /> Early kick-off: 6:00 PM
                    </div>
                </CardContent>
            </Card>

        </div>

        {/* More upcoming cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Card className="hover:shadow-lg transition-all cursor-pointer group border-slate-200">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">
                  Tuesday
                </div>
                <Laugh className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
              </div>
              <h4 className="text-lg font-bold mb-2">Jimmy Carr: Laughs Funny</h4>
              <p className="text-xs text-primary font-medium mb-1">Tuesday, April 28</p>
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                <MapPin className="w-4 h-4" /> TECC
              </div>
              <p className="text-xs text-slate-500 mt-2">😂 The king of one-liners live in Townsville</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all cursor-pointer group border-slate-200">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                  May Preview
                </div>
                <Star className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
              </div>
              <h4 className="text-lg font-bold mb-2">Dream Fields Festival</h4>
              <p className="text-xs text-primary font-medium mb-1">Saturday, May 23</p>
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                <MapPin className="w-4 h-4" /> Central Park, Townsville
              </div>
              <p className="text-xs text-slate-500 mt-2">🎶 Galantis, Peking Duk, Mallrat & Skegss</p>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-sm text-slate-600 mt-6">
          🇦🇺 ANZAC Day this Saturday, Guy Sebastian Wednesday night, and Cowboys vs Sharks Friday (early 6 PM kick-off)! <Link to="/events" className="text-primary font-medium hover:underline">View the full calendar →</Link>
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
