import { ArrowLeft, MapPin, Landmark, Palette, Mountain, Flag, Car, Footprints } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import maxKissingPoint from "@/assets/max-at-kissing-point.webp";

const highlights = [
  {
    icon: Landmark,
    title: "The Army Museum",
    description: "Housed in historic barracks, exploring North Queensland's military heritage from the Boer War to modern peacekeeping.",
  },
  {
    icon: Palette,
    title: "Public Art Trail",
    description: "32 commissioned artworks celebrating Aboriginal and military history throughout the precinct.",
  },
  {
    icon: Mountain,
    title: "Kissing Point Fort",
    description: "The best spot for panoramic views of Magnetic Island, Cleveland Bay, and the Coral Sea.",
  },
  {
    icon: Flag,
    title: "Kennedy Regiment Plaza",
    description: "A central hub for local ceremonies, reflection, and community events honouring service history.",
  },
];

const JezzineBarracks = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <div className="relative bg-slate-900">
        <img
          src={maxKissingPoint}
          alt="Giant Schnauzer at Kissing Point Fort Townsville sunset"
          className="w-full h-[300px] md:h-[500px] object-cover opacity-80 rounded-b-lg"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="container mx-auto max-w-4xl px-4 pb-8 text-white">
            <Link to="/things-to-do" className="inline-flex items-center text-sm hover:text-primary mb-4 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Things to Do
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">Jezzine Barracks & Kissing Point</h1>
            <p className="text-lg md:text-xl text-gray-200">Where Military History Meets Coastal Beauty.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 mt-8 space-y-8">

        {/* Feature Image Caption */}
        <figure className="rounded-lg overflow-hidden border border-border/40 bg-muted/30">
          <img
            src={maxKissingPoint}
            alt="Giant Schnauzer at Kissing Point Fort Townsville sunset"
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
          <figcaption className="p-4 text-sm text-muted-foreground italic">
            Sunset at Kissing Point Fort. The elevated boardwalks at Jezzine are the best spot in Townsville to catch the evening breeze and watch the light change over Cleveland Bay.
          </figcaption>
        </figure>

        {/* Quick Summary */}
        <Card className="bg-muted/30 border-border/40">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Quick Summary</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Spanning 15 hectares, this heritage precinct is a must-visit. It features the Army Museum of North Queensland, 
              stunning public art, and the iconic coastal boardwalk connecting The Strand to Rowes Bay.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <MapPin className="h-3 w-3" /> North Ward
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Free Entry
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Family Friendly
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Key Highlights */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-foreground">Key Highlights</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => {
              const IconComp = item.icon;
              return (
                <Card key={item.title} className="border-2 border-border/40 hover:border-primary/30 transition-colors">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-primary/10 flex-shrink-0">
                        <IconComp className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Getting There */}
        <section className="bg-muted/30 rounded-xl p-6 md:p-8 border border-border/40">
          <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
            <Car className="w-5 h-5 text-primary" /> Getting There
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-start gap-3">
              <Car className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">By Car</h3>
                <p>Free parking is available off Mitchell Street. Follow the signs to the Jezzine Barracks precinct.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Footprints className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground">On Foot</h3>
                <p>Walk from The Strand via the coastal boardwalk — a flat, scenic 10-minute stroll past Kissing Point.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Stops */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-foreground">Nearby Stops</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="border-2 border-border/40 hover:border-primary/30 transition-colors">
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-1">The Strand</h3>
                <p className="text-sm text-muted-foreground mb-3">Continue south along the boardwalk to Townsville's iconic beachfront promenade.</p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/the-strand">View Strand Guide</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-border/40 hover:border-primary/30 transition-colors">
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-1">Rowes Bay</h3>
                <p className="text-sm text-muted-foreground mb-3">Head north for sunset views and a quieter coastal experience.</p>
                <Button asChild variant="outline" size="sm">
                  <Link to="/rowes-bay">View Rowes Bay Guide</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
    </div>
  );
};

export default JezzineBarracks;
