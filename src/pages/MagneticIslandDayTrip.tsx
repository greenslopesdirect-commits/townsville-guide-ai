import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const MagneticIslandDayTrip = () => (
  <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
    <h1 className="text-4xl font-bold mb-4 text-center">Magnetic Island Family Day Trip</h1>
    <img src="/magnetic-island-guide.webp" alt="Magnetic Island Ferry" className="rounded-xl shadow-lg w-full h-[400px] md:h-[500px] object-cover mb-8" />
    <div className="space-y-4 mb-8">
      <Card className="border-l-4 border-blue-400"><CardContent className="p-4"><strong>9:00 AM:</strong> Catch the ferry from the Breakwater Terminal.</CardContent></Card>
      <Card className="border-l-4 border-blue-400"><CardContent className="p-4"><strong>10:30 AM:</strong> Hike The Forts Walk to spot wild koalas.</CardContent></Card>
      <Card className="border-l-4 border-blue-400"><CardContent className="p-4"><strong>12:30 PM:</strong> Feed the rock wallabies at Arcadia Jetty.</CardContent></Card>
      <Card className="border-l-4 border-blue-400"><CardContent className="p-4"><strong>2:30 PM:</strong> Relax and swim at the protected Alma Bay.</CardContent></Card>
    </div>
    <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
      <h4 className="font-bold text-xl mb-2 text-orange-700">Duncan's Local Pro-Tip</h4>
      <p>"The bus on the island is timed with the ferry. If you aren't hiring a car, grab a Day Pass on the bus—it's the cheapest way to see all the bays."</p>
    </div>
  </div>
);
export default MagneticIslandDayTrip;
