import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldAlert, MapPin, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const StingerSafety = () => (
  <>
    <SEOHead
      title="Townsville Stinger Safety 2026 | Safe Swimming Nets & Beaches"
      description="Your practical 2026 guide to stinger season in Townsville. Find safe swimming nets, beaches with enclosures, stinger suit advice and what to do if stung."
      canonical="https://www.myaussieguide.com.au/guides/stinger-safety"
    />

    <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">

      {/* Page Header */}
      <h1 className="text-4xl font-bold mb-4 text-center">
        Townsville Stinger Safety Guide (2026 Season)
      </h1>

      <p className="text-center text-sm text-gray-500 mb-6">
        Updated for the 2026 North Queensland stinger season (November – May).
      </p>

      {/* Hero Image */}
      <img
        src="/summer-safety-guide.webp"
        alt="Stinger net enclosure at The Strand Townsville during summer"
        className="rounded-xl shadow-lg w-full h-[400px] md:h-[500px] object-cover object-bottom mb-8"
      />

      {/* Intro Paragraph */}
      <div className="mb-8 text-gray-700 space-y-4">
        <p>
          Stinger season in Townsville typically runs from <strong>November to May</strong>.
          During this time, marine stingers including box jellyfish may be present in coastal waters.
        </p>
        <p>
          The safest way to swim is inside designated <strong>stinger net enclosures</strong> at
          The Strand, Pallarenda Beach, Rowes Bay, and Horseshoe Bay on Magnetic Island.
        </p>
      </div>

      {/* Safety Cards */}
      <div className="space-y-6 mb-10 text-red-900 font-medium text-left">

        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-6">
            <strong>1. Swim in the Nets:</strong> Always use the patrolled enclosures at 
            The Strand, Pallarenda Beach, and other netted beaches during summer months.
          </CardContent>
        </Card>

        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-6">
            <strong>2. Wear a Stinger Suit:</strong> If swimming outside nets or on Magnetic Island,
            wear a full Lycra stinger suit to reduce risk.
          </CardContent>
        </Card>

        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-6">
            <strong>3. Vinegar First Aid:</strong> Vinegar stations are located at netted beaches.
            If stung, douse the area and call <strong>000</strong> immediately.
          </CardContent>
        </Card>

      </div>

      {/* Local Pro Tip */}
      <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-10">
        <h4 className="font-bold text-xl mb-2 text-orange-700 flex items-center gap-2">
          <ShieldAlert className="w-5 h-5" />
          Local Tip
        </h4>
        <p className="text-gray-800">
          Even shallow ankle-deep water can contain marine stingers during peak summer.
          Nets dramatically reduce risk — use them whenever available.
        </p>
      </div>

      {/* Internal Links */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center space-y-4">
        <h3 className="font-semibold text-lg text-blue-900">
          Looking for Safe Swimming Beaches?
        </h3>
        <p className="text-blue-700 text-sm">
          See our full guide to Townsville beaches including stinger net locations,
          dog access rules and quieter local swimming spots.
        </p>
        <Button asChild variant="outline" className="bg-white">
          <Link to="/beaches">
            <MapPin className="w-4 h-4 mr-2" />
            View Beaches Guide
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>

    </div>
  </>
);

export default StingerSafety;
