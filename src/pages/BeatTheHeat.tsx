import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Sun, Wind, Thermometer } from "lucide-react";

const BeatTheHeat = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">3 Best Ways to Beat the Townsville Heat</h1>
        <p className="text-xl text-muted-foreground mb-6">Actionable local shortcuts to stay cool in the tropics.</p>
        
        <img 
          src="/beat-the-heat-guide.webp"
          alt="Max using a water station in Townsville" 
          className="rounded-xl shadow-lg w-full h-[500px] object-cover mb-8"
        />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
        <div className="p-4 bg-blue-50 rounded-lg flex flex-col items-center">
          <Droplets className="text-blue-600 mb-2" />
          <span className="font-bold">Hydrate Early</span>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg flex flex-col items-center">
          <Sun className="text-blue-600 mb-2" />
          <span className="font-bold">Avoid 10am-3pm</span>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg flex flex-col items-center">
          <Wind className="text-blue-600 mb-2" />
          <span className="font-bold">Chase the Breeze</span>
        </div>
      </div>

      <div className="space-y-8 mb-12">
        <Card className="border-l-4 border-blue-500">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-2">1. Chilled Water Stations</h3>
            <p className="text-lg text-left">Townsville has excellent water infrastructure. Along the Strand and in major parks, look for the black chilled water bollards (like the one Max is using above). They are free, filtered, and much colder than tap water.</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-blue-500">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-2">2. Shaded Lagoons</h3>
            <p className="text-lg text-left">Freshwater swimming pools like Riverway offer deep natural shade from massive rain trees. It's the best way to swim during the day without being in the direct sun.</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-blue-500">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-2">3. Indoor Refuges</h3>
            <p className="text-lg text-left">When the humidity is unbearable, head to the Museum of Tropical Queensland. It is 100% air-conditioned and has great interactive displays to keep you busy while you cool down.</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-8 flex flex-col md:flex-row gap-6 items-center">
        <Thermometer size={64} className="text-orange-500 flex-shrink-0" />
        <div>
          <h4 className="text-2xl font-bold text-orange-700 mb-2 text-left">Duncan's Local Pro-Tip</h4>
          <p className="text-lg text-orange-900 leading-relaxed text-left">
            "Don't forget the 'Hot Car' rule. In 35-degree heat, your car interior hits 50+ degrees in minutes. Plan your trips to avoid the 2pm heat soak—if you have to go out, start the car and air-con 5 minutes before the kids or dogs get in."
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeatTheHeat;
