import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";

const StingerSafety = () => (
  <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
    <h1 className="text-4xl font-bold mb-4 text-center">Townsville Summer Safety Guide</h1>
    <img src="/summer-safety-guide.webp" alt="Stinger net floats" className="rounded-xl shadow-lg w-full h-[400px] md:h-[500px] object-cover mb-8" />
    <div className="space-y-6 mb-8 text-red-900 font-medium text-left">
      <Card className="bg-red-50 border-red-200"><CardContent className="p-6"><strong>1. Swim in the Nets:</strong> Use the patrolled enclosures at The Strand and Pallarenda.</CardContent></Card>
      <Card className="bg-red-50 border-red-200"><CardContent className="p-6"><strong>2. Stinger Suits:</strong> Wear Lycra suits when swimming in open bays at Magnetic Island.</CardContent></Card>
      <Card className="bg-red-50 border-red-200"><CardContent className="p-6"><strong>3. Vinegar:</strong> Look for the vinegar stands at the beach. If stung, douse and call 000.</CardContent></Card>
    </div>
    <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
      <h4 className="font-bold text-xl mb-2 text-orange-700">Duncan's Local Pro-Tip</h4>
      <p>"Even if you're just wading in ankle-deep water, stingers can be present during summer. Stay inside the nets to be safe."</p>
    </div>
  </div>
);
export default StingerSafety;
