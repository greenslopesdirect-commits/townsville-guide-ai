import { MapPin, ArrowRight, Umbrella, Waves, Dog, Sun, Anchor } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Beaches = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-gray-600 hover:text-primary flex items-center gap-2 text-sm font-medium transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Stinger Season Active (Nets Up)
          </span>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl space-y-8">
        
        {/* Hero Section */}
        <div className="space-y-4 text-center sm:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Beaches & Swimming
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Townsville has beautiful coastlines, but you need to know where (and when) it's safe to swim. 
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          
          {/* The Strand Card - UPDATED LINK */}
          <Card className="hover:shadow-lg transition-shadow border-blue-200">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <Badge className="bg-blue-600 hover:bg-blue-700">Most Popular</Badge>
                <Umbrella className="w-5 h-5 text-gray-400" />
              </div>
              <CardTitle className="text-xl mt-2">The Strand</CardTitle>
              <div className="flex flex-col gap-1 text-sm text-gray-600 mt-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Townsville's Foreshore</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs">Stinger Nets</Badge>
                <Badge variant="outline" className="text-xs">Rockpool</Badge>
                <Badge variant="outline" className="text-xs">Water Park</Badge>
              </div>
              <p className="text-gray-600 text-sm">
                The city's playground. Features a swimming enclosure, the rockpool, water park for kids, and endless cafes. Safe for swimming inside nets.
              </p>
              <Button asChild className="w-full bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 shadow-sm">
                <Link to="/the-strand">View Strand Guide</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Pallarenda Card - UPDATED LINK */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Dog Friendly</Badge>
                <Dog className="w-5 h-5 text-gray-400" />
              </div>
              <CardTitle className="text-xl mt-2">Pallarenda Beach</CardTitle>
              <div className="flex flex-col gap-1 text-sm text-gray-600 mt-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>North of City (10min drive)</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs">Off-Leash Area</Badge>
                <Badge variant="outline" className="text-xs">Stinger Net</Badge>
              </div>
              <p className="text-gray-600 text-sm">
                A long stretch of sand perfect for dog walking. Features a permanent stinger net and designated off-leash zones.
              </p>
              <Button asChild className="w-full" variant="outline">
                <Link to="/pallarenda-beach">View Dog Beach Guide</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Rowes Bay Card - UPDATED LINK */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <Badge variant="outline">Sunset Spot</Badge>
                <Sun className="w-5 h-5 text-gray-400" />
              </div>
              <CardTitle className="text-xl mt-2">Rowes Bay</CardTitle>
              <div className="flex flex-col gap-1 text-sm text-gray-600 mt-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Between Strand & Pallarenda</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs">Stinger Net</Badge>
                <Badge variant="outline" className="text-xs">Quiet</Badge>
              </div>
              <p className="text-gray-600 text-sm">
                Quieter than the Strand. Excellent for sunset walks and fish & chips. Has a stinger net but verify tide levels (it gets shallow).
              </p>
              <Button asChild className="w-full" variant="outline">
                <Link to="/rowes-bay">View Rowes Bay Guide</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Magnetic Island Card - EXTERNAL/FUTURE LINK */}
          <Card className="hover:shadow-lg transition-shadow opacity-90">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <Badge variant="outline">Day Trip</Badge>
                <Anchor className="w-5 h-5 text-gray-400" />
              </div>
              <CardTitle className="text-xl mt-2">Magnetic Island</CardTitle>
              <div className="flex flex-col gap-1 text-sm text-gray-600 mt-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>20min Ferry Ride</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs">Alma Bay</Badge>
                <Badge variant="outline" className="text-xs">Horseshoe Bay</Badge>
              </div>
              <p className="text-gray-600 text-sm">
                World-class beaches. Alma Bay is patrolled and family friendly. Horseshoe Bay has water sports and nets.
              </p>
              <Button asChild className="w-full" variant="outline">
                <Link to="/guides/magnetic-island-day-trip">View Day Trip Guide</Link>
              </Button>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
};

export default Beaches;
