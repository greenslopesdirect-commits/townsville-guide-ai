import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";

const SunsetWalks = () => (
  <>
  <SEOHead
    title="Best Sunset Walks in Townsville"
    description="A local guide to the best places to catch a sunset walk in Townsville — The Breakwater, Pallarenda Jetty and Castle Hill."
    canonical="https://www.myaussieguide.com.au/guides/sunset-walks/"
  />
  <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
    <h1 className="text-4xl font-bold mb-4 text-center">Best Places for a Sunset Walk</h1>
    <img src="/sunset-walks-guide.webp" alt="Sunset walk at the Breakwater" className="rounded-xl shadow-lg w-full h-[500px] md:h-[700px] object-cover object-[center_30%] mb-8" />
    <div className="grid gap-6 mb-8">
      <Card><CardContent className="p-6 text-left"><strong>The Breakwater:</strong> Perfect for ocean reflections and city lights.</CardContent></Card>
      <Card><CardContent className="p-6 text-left"><strong>Pallarenda Jetty:</strong> A quiet local favorite with views across to the island.</CardContent></Card>
      <Card><CardContent className="p-6 text-left"><strong>Castle Hill Road:</strong> Catch the cooling breeze at the summit.</CardContent></Card>
    </div>
    <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
      <h4 className="font-bold text-xl mb-2 text-orange-700">Duncan's Local Pro-Tip</h4>
      <p>"My favorite loop is the Breakwater. It's flat, well-lit, and usually 2-3 degrees cooler than the city streets because of the sea breeze."</p>
    </div>
  </div>
  </>
);
export default SunsetWalks;
