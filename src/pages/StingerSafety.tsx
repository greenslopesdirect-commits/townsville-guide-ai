import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const StingerSafety = () => (
  <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
    <h1 className="text-4xl font-bold mb-4 text-center">Summer Safety: Townsville Stinger Guide</h1>
    <p className="text-xl text-muted-foreground mb-6 text-center">Expert advice for swimming safely in tropical waters.</p>
    
    <img src="/lovable-uploads/StingerNet.jpg" alt="Stinger net floats on the Strand" className="rounded-xl shadow-lg w-full h-[500px] object-cover mb-8" />
    
    <div className="space-y-6 mb-8 text-red-900 font-medium">
      <Card className="bg-red-50 border-red-200"><CardContent className="p-6 text-lg"><strong>1. Follow the Nets:</strong> Only swim inside the white/yellow float lines (pictured). These nets are designed to keep out box jellyfish.</CardContent></Card>
      <Card className="bg-red-50 border-red-200"><CardContent className="p-6 text-lg"><strong>2. Wear a Stinger Suit:</strong> If you are swimming outside of nets (like at the island bays), a Lycra suit is the only way to be 100% safe from Irukandji.</CardContent></Card>
      <Card className="bg-red-50 border-red-200"><CardContent className="p-6 text-lg"><strong>3. Vinegar Stations:</strong> Familiarize yourself with the vinegar stands located at the beach. If stung, douse the area and call 000 immediately.</CardContent></Card>
    </div>
    
    <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
      <h4 className="font-bold text-xl mb-2 text-orange-700">Duncan's Local Pro-Tip</h4>
      <p>"Irukandji are tiny and can go through nets. During the peak summer months, the locals always wear Lycra. It also saves you from the brutal North Queensland UV rays!"</p>
    </div>
  </div>
);

export default StingerSafety;
