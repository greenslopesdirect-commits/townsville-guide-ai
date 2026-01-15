import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const MagneticIslandDayTrip = () => (
  <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
    <h1 className="text-4xl font-bold mb-4 text-center">The Perfect Magnetic Island Day Trip</h1>
    <p className="text-xl text-muted-foreground mb-6 text-center">How to see the best of 'Maggie' in 8 hours.</p>
    
    <img src="/lovable-uploads/FerryTerminal.jpg" alt="Magnetic Island Ferry Terminal" className="rounded-xl shadow-lg w-full h-[400px] object-cover mb-8" />
    
    <div className="space-y-4 mb-8">
      <Card className="border-l-4 border-blue-400"><CardContent className="p-4"><strong>9:00 AM:</strong> Arrive at the Breakwater Terminal (pictured) for the SeaLink or Magnetic Island Ferry.</CardContent></Card>
      <Card className="border-l-4 border-blue-400"><CardContent className="p-4"><strong>10:30 AM:</strong> Hike The Forts Walk. It is the most reliable place in Australia to spot wild koalas.</CardContent></Card>
      <Card className="border-l-4 border-blue-400"><CardContent className="p-4"><strong>Lunch:</strong> Visit Arcadia to see the Rock Wallabies, then grab lunch at the local pub.</CardContent></Card>
      <Card className="border-l-4 border-blue-400"><CardContent className="p-4"><strong>Afternoon:</strong> Swim at Alma Bay. It's perfectly shaded and the safest family beach on the island.</CardContent></Card>
    </div>
    
    <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
      <h4 className="font-bold text-xl mb-2 text-orange-700">Duncan's Local Pro-Tip</h4>
      <p>"The sun is stronger on the island than the mainland. If you're doing the Forts Walk, start before 10 AM or you'll be hiking in the direct midday sun with very little canopy cover."</p>
    </div>
  </div>
);

export default MagneticIslandDayTrip;
