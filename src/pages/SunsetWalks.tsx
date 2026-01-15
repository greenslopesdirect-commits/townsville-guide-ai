import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const SunsetWalks = () => (
  <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
    <h1 className="text-4xl font-bold mb-4 text-center">Best Places for a Sunset Walk</h1>
    <p className="text-xl text-muted-foreground mb-6 text-center">The best time to see Townsville is 'Blue Hour'.</p>
    
    <img src="/lovable-uploads/DogPathNight.jpg" alt="Sunset walk at the Breakwater" className="rounded-xl shadow-lg w-full h-[500px] object-cover mb-8" />
    
    <div className="grid gap-6 mb-8">
      <Card><CardContent className="p-6"><strong>The Breakwater:</strong> Incredible water reflections and a constant sea breeze (pictured above).</CardContent></Card>
      <Card><CardContent className="p-6"><strong>Pallarenda Jetty:</strong> The most peaceful spot to watch the sun drop behind the ranges.</CardContent></Card>
      <Card><CardContent className="p-6"><strong>The Strand Pier:</strong> Walk to the very end for a 360-degree view of the city lights and the ocean.</CardContent></Card>
    </div>
    
    <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 text-orange-900">
      <h4 className="font-bold text-xl mb-2">Duncan's Local Pro-Tip</h4>
      <p>"In January, the humidity doesn't drop until the sun is completely gone. Aim to start your walk 15 minutes before sunset to catch the best colors without the midday burn."</p>
    </div>
  </div>
);

export default SunsetWalks;
