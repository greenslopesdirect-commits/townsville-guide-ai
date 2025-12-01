import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Waves, Sunset, Dog, AlertTriangle, Bot } from "lucide-react";

const Beaches = () => {
  return (
    <>
      <Helmet>
        <title>Best Beaches in Townsville | Duncan's Guide</title>
        <meta name="description" content="Explore the beautiful beaches, from The Strand to Magnetic Island." />
        <link rel="canonical" href="https://www.myaussieguide.com.au/townsville/beaches" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        
        <main className="pt-8 pb-16 md:pt-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Back Button */}
            <Link to="/townsville">
              <Button 
                variant="ghost" 
                className="mb-6 group"
                aria-label="Back to Townsville Home"
              >
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>

            {/* Page Header */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Best Beaches in Townsville – Local Coastal Guide
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Townsville has a relaxed coastal lifestyle with calm swimming spots, long foreshore walks and easy access to Magnetic Island. Whether you're looking for a family-friendly swimming area, a quiet beach for sunset, or dog-friendly coastal walks, this guide covers the best beaches in and around Townsville.
              </p>
            </header>

            {/* Content Sections (rest of the content is unchanged) */}
            <div className="space-y-12">
              {/* The Strand Beach */}
              <section id="the-strand" className="p-6 bg-card rounded-xl shadow-lg">
                <h2 className="text-3xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <Waves className="w-6 h-6 text-primary" /> The Strand
                </h2>
                <p className="text-muted-foreground mb-4">
                  The Strand is Townsville's iconic beachfront promenade, offering a 2.2km stretch of beach, parks, and dining options. It's the most popular and family-friendly swimming area in the city.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <span className="flex items-center gap-2 text-green-600 font-medium">
                    <Waves className="w-4 h-4" /> Stinger Net (Seasonal)
                  </span>
                  <span className="flex items-center gap-2 text-blue-600 font-medium">
                    <MapPin className="w-4 h-4" /> Central Location
                  </span>
                  <span className="flex items-center gap-2 text-yellow-600 font-medium">
                    <Waves className="w-4 h-4" /> Calm Swimming
                  </span>
                  <span className="flex items-center gap-2 text-purple-600 font-medium">
                    <Sunset className="w-4 h-4" /> Great Sunset Views
                  </span>
                </div>
              </section>

              {/* Pallarenda Beach */}
              <section id="pallarenda" className="p-6 bg-card rounded-xl shadow-lg">
                <h2 className="text-3xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" /> Pallarenda Beach
                </h2>
                <p className="text-muted-foreground mb-4">
                  Located north of the city, Pallarenda is a long, undeveloped beach offering a relaxed, natural setting. It's famous for its dog-friendly status and the historical Cape Pallarenda Conservation Park nearby.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <span className="flex items-center gap-2 text-green-600 font-medium">
                    <Dog className="w-4 h-4" /> Dog-Friendly (Certain zones)
                  </span>
                  <span className="flex items-center gap-2 text-blue-600 font-medium">
                    <MapPin className="w-4 h-4" /> Mountain Bike Trails
                  </span>
                  <span className="flex items-center gap-2 text-yellow-600 font-medium">
                    <Sunset className="w-4 h-4" /> Quiet & Scenic
                  </span>
                  <span className="flex items-center gap-2 text-red-600 font-medium">
                    <AlertTriangle className="w-4 h-4" /> Unpatrolled
                  </span>
                </div>
              </section>

              {/* Nelly Bay, Magnetic Island */}
              <section id="nelly-bay" className="p-6 bg-card rounded-xl shadow-lg">
                <h2 className="text-3xl font-semibold mb-4 text-foreground flex items-center gap-2">
                  <Waves className="w-6 h-6 text-primary" /> Nelly Bay (Magnetic Island)
                </h2>
                <p className="text-muted-foreground mb-4">
                  Nelly Bay is the main entry point to Magnetic Island and a sheltered bay perfect for swimming, snorkelling, and accessing the island's many other beaches and hiking trails. A short ferry ride away.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <span className="flex items-center gap-2 text-green-600 font-medium">
                    <Waves className="w-4 h-4" /> Snorkelling Spots
                  </span>
                  <span className="flex items-center gap-2 text-blue-600 font-medium">
                    <MapPin className="w-4 h-4" /> Ferry Terminal
                  </span>
                  <span className="flex items-center gap-2 text-yellow-600 font-medium">
                    <Waves className="w-4 h-4" /> Sheltered Bay
                  </span>
                  <span className="flex items-center gap-2 text-purple-600 font-medium">
                    <AlertTriangle className="w-4 h-4" /> Stinger Net (Seasonal)
                  </span>
                </div>
              </section>

              {/* Ask the AI for Recommendations */}
              <section className="p-6 bg-primary/10 rounded-xl border border-primary/20">
                <h2 className="text-2xl font-bold mb-3 text-foreground flex items-center gap-2">
                  <Bot className="w-6 h-6 text-primary" /> Need a personalised recommendation?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Ask our AI guide for the perfect beach based on your mood, whether you need dog parks, a quiet picnic spot, or the best place for a sunrise photo.
                </p>
                <Link to="/townsville">
                  <Button className="gap-2" aria-label="Open AI chat assistant">
                    <Bot className="w-5 h-5" />
                    Ask the AI Guide
                  </Button>
                </Link>
              </section>
            </div>

            {/* Back to Home CTA */}
            <div className="mt-16 pt-8 border-t border-border text-center">
              <Link to="/townsville">
                <Button variant="outline" size="lg" className="group" aria-label="Return to Duncan's Guide home page">
                  Return to Home
                  <ArrowLeft className="ml-2 w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </main>

      </div>
    </>
  );
};

export default Beaches;
