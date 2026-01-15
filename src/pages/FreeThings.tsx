import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const FreeThings = () => (
  <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
    <h1 className="text-4xl font-bold mb-4 text-center">5 Completely Free Things to do in Townsville</h1>
    <img src="/5-free-things-to-do.webp" alt="Castle Hill View" className="rounded-xl shadow-lg w-full h-[500px] object-cover mb-8" />
    <div className="grid gap-4 mb-8">
      <Card><CardContent className="p-4 text-lg font-semibold">1. Castle Hill: Drive or hike for the best view in NQ.</CardContent></Card>
      <Card><CardContent className="p-4 text-lg font-semibold">2. The Strand: 2.2km of walkway, water parks, and beaches.</CardContent></Card>
      <Card><CardContent className="p-4 text-lg font-semibold">3. Riverway Lagoons: Massive freshwater swimming pools.</CardContent></Card>
      <Card><CardContent className="p-4 text-lg font-semibold">4. Jezzine Barracks: Coastal boardwalk and military history.</CardContent></Card>
      <Card><CardContent className="p-4 text-lg font-semibold">5. The Palmetum: 17 hectares of tropical botanical gardens.</CardContent></Card>
    </div>
    <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
      <h4 className="font-bold text-xl mb-2 text-orange-700">Duncan's Local Pro-Tip</h4>
      <p>"Pack a picnic and head to Jezzine Barracks at sunset. There are plenty of free BBQ stations and the view over Rowes Bay is world-class."</p>
    </div>
  </div>
);
export default FreeThings;
