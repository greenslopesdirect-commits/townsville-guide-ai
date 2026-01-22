import { Link } from "react-router-dom";
import { Calendar, ArrowRight, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const EventsOn = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Happening Now</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">What's On in Townsville</h2>
            <p className="text-slate-600 mt-2 max-w-xl text-lg">
              Your guide to the Australia Day long weekend and weekly local markets.
            </p>
          </div>
          
          <Link to="/townsville/events">
            <Button variant="outline" className="hidden md:flex gap-2">
              View Full Calendar <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* FEATURED EVENT: AUSTRALIA DAY */}
        <div className="grid lg:grid-cols-5 gap-0 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12 hover:shadow-md transition-shadow">
            
            {/* Visual Side (Left) */}
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 flex flex-col justify-between text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="relative z-10">
                    <span className="inline-block px-3 py-1 bg-yellow-400 text-blue-900 font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                        Long Weekend
                    </span>
                    <h3 className="text-3xl font-bold leading-tight mb-2">Australia Day 2026</h3>
                    <p className="text-blue-100 font-medium">Jan 24 – Jan 26</p>
                </div>
                <div className="relative z-10 mt-8">
                     <div className="flex items-center gap-2 text-sm font-medium opacity-90">
                        <MapPin className="w-4 h-4" />
                        <span>Jezzine Barracks & The Strand</span>
                     </div>
                </div>
            </div>

            {/* Content Side (Right) */}
            <div className="lg:col-span-3 p-8 flex flex-col justify-center">
                <div className="prose prose-slate mb-6">
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Townsville comes alive this weekend! Join the <strong>Aussie Fun Run</strong> at Jezzine Barracks (6:30 AM), 
                        witness the <strong>21-Gun Salute</strong>, or pay respects at the <strong>Survival Day</strong> dawn service.
                    </p>
                </div>
                
                <div className="flex flex-wrap gap-4 items-center">
                    <Link to="/townsville/events">
                        <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
                            Get the Full Guide
                        </Button>
                    </Link>
                    <span className="text-sm text-slate-500 italic">
                        Includes parking maps & firing times.
                    </span>
                </div>
            </div>
        </div>

        {/* WEEKLY MARKETS GRID */}
        <h3 className="font-bold text-xl text-slate-800 mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" /> Weekend Essentials
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
            
            {/* Market 1 */}
            <Card className="hover:shadow-lg transition-all cursor-pointer group border-slate-200">
                <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                            Sunday
                        </div>
                        <Calendar className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Cotters Market</h4>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <MapPin className="w-4 h-4" /> Flinders St, CBD
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock className="w-4 h-4" /> 8:00 AM – 1:00 PM
                    </div>
                </CardContent>
            </Card>

            {/* Market 2 */}
            <Card className="hover:shadow-lg transition-all cursor-pointer group border-slate-200">
                <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                            Sunday
                        </div>
                        <Calendar className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Willows Markets</h4>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <MapPin className="w-4 h-4" /> Willows Shopping Centre
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock className="w-4 h-4" /> 7:30 AM – 11:30 AM
                    </div>
                </CardContent>
            </Card>

            {/* View All Link */}
            <Card className="bg-slate-50 border-dashed border-2 border-slate-200 hover:border-primary/50 transition-colors flex flex-col justify-center items-center text-center p-6">
                <h4 className="font-semibold text-slate-700 mb-2">Looking for more?</h4>
                <p className="text-sm text-slate-500 mb-4">Music, Sports, and Art.</p>
                <Link to="/townsville/events" className="text-primary font-bold flex items-center gap-1 hover:underline">
                    View Calendar <ArrowRight className="w-4 h-4" />
                </Link>
            </Card>

        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
            <Link to="/townsville/events">
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
