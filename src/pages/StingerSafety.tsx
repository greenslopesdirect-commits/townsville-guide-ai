import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const StingerSafety = () => (
  <>
    <SEOHead
      title="Townsville Stinger Safety 2026 | Safe Swimming Nets & Beaches"
      description="Your practical guide to stinger season in Townsville for 2026. Find safe swimming nets, beaches, stinger suit advice and what to do if stung."
      canonical="https://www.myaussieguide.com.au/stinger-safety"
    />

    <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Townsville Stinger Safety Guide (2026 Season)
      </h1>

      <p className="text-center text-sm text-gray-500 mb-6">
        Updated for the 2026 North Queensland stinger season.
      </p>

      <img
        src="/summer-safety-guide.webp"
        alt="Stinger net floats at The Strand in Townsville"
        className="rounded-xl shadow-lg w-full h-[400px] md:h-[500px] object-cover object-bottom mb-8"
      />

      <div className="space-y-6 mb-8 text-red-900 font-medium text-left">
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-6">
            <strong>1. Swim in the Nets:</strong> Use the patrolled enclosures at The Strand and Pallarenda.
          </CardContent>
        </Card>

        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-6">
            <strong>2. Stinger Suits:</strong> Wear Lycra suits when swimming in open bays at Magnetic Island.
          </CardContent>
        </Card>

        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-6">
            <strong>3. Vinegar:</strong> Look for the vinegar stands at the beach. If stung, douse and call 000.
          </CardContent>
        </Card>
      </div>

      <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
        <h4 className="font-bold text-xl mb-2 text-orange-700 flex items-center gap-2">
          <ShieldAlert className="w-5 h-5" />
          Duncan's Local Pro-Tip
        </h4>
        <p>
          "Even if you're just wading in ankle-deep water, stingers can be present during summer. Stay inside the nets to be safe."
        </p>
      </div>
    </div>
  </>
);

export default StingerSafety;
