import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Thermometer, Sun, Wind, Car } from "lucide-react";

const BeatTheHeat = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">3 Best Ways to Beat the Townsville Heat with Kids</h1>
        <p className="text-xl text-muted-foreground mb-6">Stop reading long blogs. Start staying cool.</p>
        <img 
          src="/lovable-uploads/beat-the-heat-hero.png" 
          alt="Kids playing at Riverway Lagoons" 
          className="rounded-xl shadow-lg w-full h-[400px] object-cover mb-8"
        />
      </section>

      {/* Quick Facts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
          <Sun className="text-blue-600" />
          <span className="font-medium">Avg Temp: 31°C</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
          <Thermometer className="text-blue-600" />
          <span className="font-medium">Humidity: 70%+</span>
        </div>
        <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
          <Wind className="text-blue-600" />
          <span className="font-medium">Best Time: Pre-10am</span>
        </div>
      </div>

      {/* The 3 Steps */}
      <div className="space-y-8 mb-12">
        <Card className="border-l-4 border-blue-500">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-2">1. Riverway Lagoons</h3>
            <p className="text-lg">Freshwater swimming pools surrounded by massive shade trees. Completely free and perfect for toddlers. There's a great cafe right next to the water for parents.</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-blue-500">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-2">2. The Strand Water Park</h3>
            <p className="text-lg">The big bucket-drop is a local legend. Arrive before 10am to secure a shaded picnic table. If it gets too hot, the rockpool is only a 2-minute walk away.</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-blue-500">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-2">3. Museum of Tropical Queensland</h3>
            <p className="text-lg">When the humidity is unbearable, head indoors. The museum is fully air-conditioned and the 'Enchanted Rainforest' interactive area will keep kids busy for hours.</p>
          </CardContent>
        </Card>
      </div>

      {/* Duncan's Pro-Tip Box */}
      <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-8 flex flex-col md:flex-row gap-6 items-center">
        <Car size={64} className="text-orange-500 flex-shrink-0" />
        <div>
          <h4 className="text-2xl font-bold text-orange-700 mb-2">Duncan's Local Pro-Tip</h4>
          <p className="text-lg text-orange-900 leading-relaxed">
            "Don't forget the 'Hot Car' rule. In 35-degree heat, your car interior hits 50+ degrees in minutes. Plan your trips to avoid the 2pm heat soak—if you have to go out, start the car and air-con 5 minutes before the kids get in."
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeatTheHeat;
