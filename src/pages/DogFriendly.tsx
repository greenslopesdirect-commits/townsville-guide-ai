import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { MapPin, Info, Bone, Waves, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const DogFriendly = () => {
  const dogSpots = [
    {
      name: "The Strand (Dog-Friendly Areas)",
      type: "Beach & Promenade",
      description: "Townsville's iconic beachfront promenade with designated dog-friendly walking areas. Ideal for sunrise and evening walks with ocean views.",
      features: ["Designated off-leash times (before 8am and after 5pm)", "Beautiful ocean views for walks", "Water fountains and shaded areas", "Close to cafés and restaurants"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Strand+Townsville",
      badge: "🐾 Schnauzer Approved",
      // No internal guide yet
    },
    {
      name: "Pallarenda Dog Beach",
      type: "Off-Leash Beach",
      description: "One of Townsville's best off-leash beaches with long sandy stretches, shallow water, and plenty of space for energetic dogs.",
      features: ["Off-leash beach access", "Long sandy stretches for running", "Shallow, calm waters for swimming dogs", "Natural setting with mangroves nearby"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Pallarenda+Off+Leash+Dog+Beach",
      
      // === THIS IS THE NEW CONNECTION ===
      // We add a link to the Deep Dive page we just built
      internalLink: "/pallarenda-beach",
      linkText: "View Off-Leash Guide"
    },
    {
      name: "Bushland Beach Off-Leash Area",
      type: "Off-Leash Beach",
      description: "A quieter northern beach with wide sandy areas and shallow tidal flats that dogs love to explore.",
      features: ["Designated off-leash zones", "Quiet, less crowded beach", "Shallow tidal flats to explore", "Great for morning walks"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Bushland+Beach+Townsville",
      // No internal guide yet
    }
  ];

  return (
    <>
      <SEOHead
        title="Dog Friendly Townsville | Beaches, Parks & Cafes"
        description="The ultimate guide to dog-friendly spots in Townsville. Off-leash beaches, parks, and cafes approved by locals."
        canonical="https://www.myaussieguide.com.au/dog-friendly"
      />
      
      <div className="min-h-screen bg-slate-50 pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Dog-Friendly Beaches in Townsville</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Townsville loves dogs! Here are the best spots to let your furry friend run, swim, and play.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {dogSpots.map((spot, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-t-4 border-t-primary flex flex-col h-full">
                <CardHeader>
                  <div className="mb-2">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-1 rounded-full">
                      {spot.type}
                    </span>
                  </div>
                  <CardTitle className="text-xl mb-1">{spot.name}</CardTitle>
                  {spot.badge && (
                    <div className="text-sm font-medium text-amber-600 flex items-center gap-1">
                       {spot.badge}
                    </div>
                  )}
                </CardHeader>
                <CardContent className="space-y-4 flex-grow flex flex-col">
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                    {spot.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {spot.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-slate-500">
                            <Bone className="w-4 h-4 text-primary/60 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                        </div>
                    ))}
                  </div>

                  <div className="space-y-2 mt-auto">
                    {/* 1. INTERNAL LINK (The New Strategy) */}
                    {spot.internalLink && (
                        <Link to={spot.internalLink} className="w-full">
                            <Button className="w-full justify-between bg-green-600 hover:bg-green-700 text-white mb-2">
                                {spot.linkText} <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    )}

                    {/* 2. EXTERNAL LINK (Google Maps) */}
                    <Button variant="outline" size="sm" asChild className="w-full justify-start">
                      <a href={spot.mapUrl} target="_blank" rel="noopener noreferrer">
                        <MapPin className="w-4 h-4 mr-2" />
                        View on Google Maps
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default DogFriendly;
