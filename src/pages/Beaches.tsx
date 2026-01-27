import { MapPin, Info, ArrowRight, Umbrella, Dog, Sun } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Beaches = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Beaches & Swimming</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            From the bustling Strand to quiet dog-walking spots. Find your perfect patch of sand in Townsville.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 -mt-8">
        
        {/* Main Beach Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* 1. THE STRAND (Main Hub) */}
          <Card className="hover:shadow-lg transition-shadow border-blue-100">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-blue-800">The Strand</CardTitle>
                  <CardDescription>Townsville's Foreshore</CardDescription>
                </div>
                <Badge className="bg-blue-600 hover:bg-blue-700">Most Popular</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-4 flex-wrap">
                <Badge variant="outline" className="flex gap-1"><Umbrella className="w-3 h-3" /> Stinger Nets</Badge>
                <Badge variant="outline">Rockpool</Badge>
                <Badge variant="outline">Water Park</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-4 h-16">
                The city's playground. Features a swimming enclosure, the rockpool, water park for kids, and endless cafes. Safe for swimming inside nets/enclosures.
              </p>
              <Button asChild className="w-full" variant="outline">
                <Link to="/things-to-do">View Strand Guide</Link>
              </Button>
            </CardContent>
          </Card>

          {/* 2. PALLARENDA (Off-Leash Spoke) */}
          <Card className="hover:shadow-lg transition-shadow border-green-100">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-green-800">Pallarenda Beach</CardTitle>
                  <CardDescription>North of City</CardDescription>
                </div>
                <Badge className="bg-green-600 hover:bg-green-700 flex gap-1"><Dog className="w-3 h-3" /> Dog Friendly</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-4 flex-wrap">
                <Badge variant="outline">Off-Leash Areas</Badge>
                <Badge variant="outline">Stinger Nets (Seasonal)</Badge>
                <Badge variant="outline">Kite Surfing</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-4 h-16">
                A long stretch of sand with specific off-leash zones (Gate 8-10). Great for kite surfing and escaping the city crowds.
              </p>
              <Button asChild className="w-full" variant="default">
                <Link to="/pallarenda-beach">View Off-Leash Rules</Link>
              </Button>
            </CardContent>
          </Card>

          {/* 3. ROWES BAY (New Sunset Spoke) */}
          <Card className="hover:shadow-lg transition-shadow border-orange-100 cursor-pointer" onClick={() => navigate('/rowes-bay')}>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-orange-800">Rowes Bay</CardTitle>
                  <CardDescription>The Sunset Strip</CardDescription>
                </div>
                <Badge className="bg-orange-500 hover:bg-orange-600 flex gap-1"><Sun className="w-3 h-3" /> Best Sunset</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-4 flex-wrap">
                <Badge variant="outline">On-Leash Walks</Badge>
                <Badge variant="outline">Caravan Park</Badge>
                <Badge variant="outline">Peaceful</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-4 h-16">
                The quieter neighbor to The Strand. Famous for sunset views, fish & chips on the grass, and long peaceful walks.
              </p>
              <Button className="w-full bg-orange-100 text-orange-900 hover:bg-orange-200 border-none">
                Read Guide &rarr;
              </Button>
            </CardContent>
          </Card>

          {/* 4. MAGNETIC ISLAND */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Magnetic Island</CardTitle>
                  <CardDescription>20min Ferry Ride</CardDescription>
                </div>
                <Badge variant="secondary">Day Trip</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-4 flex-wrap">
                <Badge variant="outline">Alma Bay</Badge>
                <Badge variant="outline">Horseshoe Bay</Badge>
                <Badge variant="outline">Snorkeling</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-4 h-16">
                Home to 23 stunning bays. Alma Bay is perfect for families, while Horseshoe Bay offers water sports and dining.
              </p>
              <Button asChild className="w-full" variant="outline">
                <Link to="/guides/magnetic-island-day-trip">View Day Trip Guide</Link>
              </Button>
            </CardContent>
          </Card>

        </div>

        {/* Safety Section */}
        <div className="mt-12 bg-white rounded-xl p-8 border shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-red-100 p-3 rounded-full text-red-600">
              <Info className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">A Note on Marine Stingers</h3>
              <p className="text-gray-700 mb-4">
                During the warmer months (Nov - May), marine stingers are present in North Queensland waters.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
                <li>Swim inside the <strong>stinger nets</strong> (The Strand, Pallarenda).</li>
                <li>Wear a <strong>stinger suit</strong> (lycra full body suit) if swimming outside nets.</li>
                <li>Look for the yellow vinegar bottles at beach entrances.</li>
              </ul>
              <Button asChild variant="secondary">
                <Link to="/guides/stinger-safety">Read Full Safety Guide</Link>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Beaches;
