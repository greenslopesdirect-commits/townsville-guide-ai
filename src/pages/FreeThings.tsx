import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const FreeThings = () => (
  <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
    <h1 className="text-4xl font-bold mb-4 text-center">5 Completely Free Things in Townsville</h1>
    <p className="text-xl text-muted-foreground mb-6 text-center">Explore the best of the North without spending a cent.</p>
    
    <img src="/lovable-uploads/CastleHill.jpg" alt="View from Castle Hill summit" className="rounded-xl shadow-lg w-full h-[500px] object-cover mb-8" />
    
    <div className="grid gap-4 mb-8">
      <Card><CardContent className="p-4 text-lg font-semibold">1. Castle Hill Summit: The best 360-degree view in North Queensland (pictured).</CardContent></Card>
      <Card><CardContent className="p-4 text-lg font-semibold">2. The Strand Waterfront: 2.2km of world-class walkway and free water parks.</CardContent></Card>
      <Card><CardContent className="p-4 text-lg font-semibold">3. Riverway Lagoons: Massive freshwater swimming pools in a parkland setting.</CardContent></Card>
      <Card><CardContent className="p-4 text-lg font-semibold">4. Jezzine Barracks: Coastal boardwalks mixed with incredible local history.</CardContent></Card>
      <Card><CardContent className="p-4 text-lg font-semibold">5. The Palmetum: A hidden tropical botanical garden that is 100% free.</CardContent></Card>
    </div>
    
    <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
      <h4 className="font-bold text-xl mb-2 text-orange-700">Duncan's Local Pro-Tip</h4>
      <p>"Most people drive up Castle Hill, but if you want the 'local' experience, take the Goat Track at sunrise. It's free, a great workout, and the view feels much better earned!"</p>
    </div>
  </div>
);

export default FreeThings;
