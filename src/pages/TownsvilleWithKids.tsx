import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { 
  Baby, 
  Sun, 
  Palmtree, 
  Backpack, 
  MapPin,
  Waves,
  TreePine,
  ShieldCheck,
  Clock,
  Calendar
} from "lucide-react";

const TownsvilleWithKids = () => {
  return (
    <>
      <SEOHead
        title="Best Things to Do in Townsville With Kids | Family Guide"
        description="A practical family guide to Townsville covering free activities, easy day trips, and tips for managing the tropical heat with kids. Perfect for planning your visit."
        canonical="https://www.townsvilleguide.com.au/townsville-with-kids"
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Baby className="w-4 h-4" />
            Family Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Best Things to Do in Townsville With Kids
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A calm, practical guide for families visiting North Queensland's largest tropical city.
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 md:p-8">
              <p className="text-lg leading-relaxed text-foreground">
                Townsville is a wonderful destination for families. With a mix of free beachside activities, 
                easy day trips, and plenty of shade to escape the tropical heat, it's well-suited for kids of all ages. 
                This guide covers the best family-friendly experiences—from calm beaches and flat walks to wildlife 
                encounters and practical tips for visiting with little ones.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Section 1: Free & Easy Family Activities */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Waves className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Free & Easy Family Activities</h2>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  The Strand
                </h3>
                <p className="text-muted-foreground mb-4">
                  Townsville's famous 2.2-kilometre waterfront promenade is perfect for families. 
                  The Strand features shaded playgrounds, a free water park, grassy picnic areas, 
                  and calm swimming enclosures. Kids can splash in the rock pool while parents 
                  relax under the palm trees.
                </p>
                <Link to="/the-strand">
                  <Button variant="outline" size="sm">
                    View Strand Guide →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Calm Beaches for Kids</h3>
                <p className="text-muted-foreground mb-4">
                  The Strand Rock Pool and stinger-netted enclosures provide safe, calm water ideal for 
                  younger children. Pallarenda Beach offers shallow, gentle waters and is popular with 
                  local families. Both locations have toilet facilities and shaded areas nearby.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Link to="/beaches">
                    <Button variant="outline" size="sm">
                      Explore Beaches →
                    </Button>
                  </Link>
                  <Link to="/pallarenda-beach">
                    <Button variant="ghost" size="sm">
                      Pallarenda Guide
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Flat Walks & Open Spaces</h3>
                <p className="text-muted-foreground">
                  For families with prams or younger children, the flat pathways along The Strand and 
                  Riverway Lagoons are ideal. Jezzine Barracks offers coastal boardwalks with sea breezes 
                  and wide open spaces where kids can run freely. All are free to access and suitable for 
                  all fitness levels.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 2: Nature, Wildlife & Easy Day Trips */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 rounded-lg">
              <TreePine className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Nature, Wildlife & Easy Day Trips</h2>
          </div>

          <div className="space-y-4">
            <Card className="border-l-4 border-green-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Palmtree className="w-5 h-5 text-green-600" />
                  Magnetic Island Day Trip
                </h3>
                <p className="text-muted-foreground mb-4">
                  Just a 20-minute ferry ride from the city, Magnetic Island is a fantastic family day trip. 
                  The island has calm bays for swimming, short walking tracks suitable for children, and 
                  wild koalas that can often be spotted in the eucalyptus trees along the Forts Walk. 
                  Many families visit for just half a day and find it perfectly manageable.
                </p>
                <Link to="/guides/magnetic-island-day-trip">
                  <Button variant="coral" size="sm">
                    View Day Trip Guide →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Wildlife Encounters</h3>
                <p className="text-muted-foreground">
                  Beyond Magnetic Island, families can visit Billabong Sanctuary—a wildlife park just 
                  outside Townsville where kids can see crocodiles, koalas, wombats, and native birds 
                  up close. The Reef HQ Great Barrier Reef Aquarium in the city centre is another 
                  excellent option, especially on hot days when you need air-conditioned activities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Short Outdoor Experiences</h3>
                <p className="text-muted-foreground">
                  The Palmetum botanical gardens offer shaded walking paths through tropical gardens—
                  perfect for a gentle morning stroll. For older kids, the drive up Castle Hill provides 
                  spectacular views without needing to walk (though the goat track is popular with 
                  adventurous families in the cooler months).
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 3: Beating the Heat With Kids */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Sun className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Beating the Heat With Kids</h2>
          </div>

          <Card className="bg-orange-50 border-orange-200 mb-4">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-orange-800">Best Times for Outdoor Activities</h3>
              <div className="grid md:grid-cols-2 gap-4 text-orange-900">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Morning (before 10am)</p>
                    <p className="text-sm">Ideal for beach time, walks, and outdoor play</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Late Afternoon (after 4pm)</p>
                    <p className="text-sm">Great for sunset walks along The Strand</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-orange-800">
                Avoid outdoor activities between 10am and 3pm when the sun is strongest. 
                This is the perfect time for indoor attractions, naps, or lunch in 
                air-conditioned cafés.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Shade & Water Tips</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Free chilled water stations along The Strand</li>
                  <li>• Carry at least 1L of water per person</li>
                  <li>• Seek shade under the large rain trees at Riverway</li>
                  <li>• The water park at The Strand is free and shaded</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Sun Safety Essentials</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• SPF 50+ sunscreen (reapply every 2 hours)</li>
                  <li>• Wide-brimmed hats for everyone</li>
                  <li>• Rashies for swimming</li>
                  <li>• Sunglasses with UV protection</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-4 border-amber-300 bg-amber-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">Stinger Season Awareness</h3>
                  <p className="text-amber-700 mb-3">
                    Between November and May, marine stingers may be present in the ocean. 
                    Always swim within the netted enclosures and check with lifeguards about 
                    current conditions. Vinegar stations are located at most beaches.
                  </p>
                  <Link to="/guides/stinger-safety">
                    <Button variant="outline" size="sm" className="border-amber-400 text-amber-800 hover:bg-amber-100">
                      Read Stinger Safety Guide →
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section 4: Practical Tips for Families */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Backpack className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Practical Tips for Families</h2>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">What to Pack for Townsville</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-foreground mb-2">Essentials</p>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Lightweight, breathable clothing</li>
                      <li>• Swimmers and rashies</li>
                      <li>• Reef-safe sunscreen</li>
                      <li>• Insulated water bottles</li>
                      <li>• Portable shade (beach tent)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-2">Nice to Have</p>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Snorkelling gear for older kids</li>
                      <li>• Binoculars for wildlife spotting</li>
                      <li>• Stinger suit (Nov–May)</li>
                      <li>• Portable fan or mister</li>
                      <li>• Waterproof phone pouch</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Best Time to Visit With Kids</h3>
                    <p className="text-muted-foreground mb-3">
                      The dry season (May to October) offers the most comfortable weather for families—
                      warm days, cooler nights, and low humidity. School holidays during this period 
                      are popular, so book accommodation early. The wet season (November to April) 
                      is hotter and more humid, but can still be enjoyable with proper planning and 
                      a focus on morning activities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">How Long Should You Stay?</h3>
                <p className="text-muted-foreground">
                  Most families find 3–4 days is ideal to experience Townsville comfortably. This allows 
                  time for The Strand, a Magnetic Island day trip, and a few other activities without 
                  rushing. If you're travelling with very young children, consider adding an extra day 
                  for rest and flexibility. Families often combine Townsville with a road trip north 
                  to Mission Beach or south to Airlie Beach.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Local Pro-Tip */}
        <section className="mb-8">
          <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 md:p-8">
            <h4 className="font-bold text-xl mb-2 text-orange-700">Duncan's Local Pro-Tip</h4>
            <p className="text-orange-900 leading-relaxed">
              "The secret to enjoying Townsville with kids is pacing yourself. Do your outdoor adventures 
              early, retreat for lunch and rest during the heat of the day, then head back out for a 
              sunset swim at The Strand. The rock pool is magical at golden hour—and much quieter than 
              the morning."
            </p>
          </div>
        </section>

        {/* Related Guides CTA */}
        <section>
          <h3 className="text-xl font-semibold mb-4 text-center">Explore More Guides</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link to="/guides/beat-the-heat" className="block">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <Sun className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <p className="font-medium">Beat the Heat Guide</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/guides/free-things" className="block">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <MapPin className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="font-medium">Free Things to Do</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/guides/magnetic-island-day-trip" className="block">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <Palmtree className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="font-medium">Magnetic Island</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default TownsvilleWithKids;
