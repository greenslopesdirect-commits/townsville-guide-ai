import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  MapPin,
  Camera,
  Sunrise,
  Palmtree,
  Building2,
  Dog,
  Compass,
  Bot,
} from "lucide-react";

const ThingsToDo = () => {
  const navigate = useNavigate();

  const askAI = (question: string) => {
    navigate("/townsville", {
      state: { aiQuestion: question },
    });
  };

  return (
    <>
      <SEOHead
        title="Things to Do in Townsville – Local Highlights & Must-See Spots"
        description="Discover the best things to do in Townsville — Castle Hill, Magnetic Island, The Strand, wildlife, walks, beaches and more."
        canonical="https://duncansguide.com/townsville/things-to-do"
      />

      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Things to Do in Townsville",
            "url": "https://duncansguide.com/townsville/things-to-do",
            "description": "Local guide to the best things to do in Townsville."
          }
        `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">

            {/* Back Button */}
            <Link to="/townsville">
              <Button variant="ghost" className="mb-6 group">
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>

            {/* Header */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Things to Do in Townsville
              </h1>
              <p className="text-muted-foreground">
                A simple local overview of the best things to do in and around Townsville.
              </p>
            </header>

            <div className="space-y-12">

              {/* Castle Hill */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Castle Hill Lookout</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  Townsville’s most iconic viewpoint with 360-degree views.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://www.google.com/maps/place/Castle+Hill,+Townsville"
                    target="_blank"
                  >
                    <MapPin className="w-4 h-4 mr-1" />
                    View on Map
                  </a>
                </Button>
              </section>

              {/* The Strand */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Sunrise className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">The Strand</h2>
                </div>
                <p className="text-muted-foreground">
                  2.2km beachfront promenade with swimming, cafés and parks.
                </p>
              </section>

              {/* Magnetic Island */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Palmtree className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Magnetic Island</h2>
                </div>

                <Button
                  variant="link"
                  className="text-primary p-0"
                  onClick={() =>
                    askAI("Create a 1 day itinerary for Magnetic Island from Townsville")
                  }
                >
                  <Bot className="w-4 h-4 mr-1" />
                  Ask the AI for a Magnetic Island day plan
                </Button>
              </section>

              {/* Billabong */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Billabong Sanctuary</h2>
                </div>
                <p className="text-muted-foreground">
                  Wildlife park with koalas, crocs and kangaroos.
                </p>
              </section>

              {/* Dog Friendly */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Dog className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Dog Friendly Spots</h2>
                </div>

                <Button
                  variant="link"
                  className="text-primary p-0"
                  onClick={() => askAI("Show me dog friendly places in Townsville")}
                >
                  <Bot className="w-4 h-4 mr-1" />
                  Ask the AI for dog-friendly places
                </Button>
              </section>

            </div>

            {/* AI Guide CTA */}
            <div className="mt-16 pt-8 border-t text-center">
              <h3 className="text-2xl font-bold mb-4">
                Need Help Planning Your Visit?
              </h3>

              <Button
                size="lg"
                onClick={() =>
                  askAI("Plan my perfect day in Townsville")
                }
              >
                <Bot className="w-5 h-5 mr-2" />
                Ask the AI Guide
              </Button>
            </div>

            {/* Final Back to Home */}
            <div className="mt-12 text-center">
              <Link to="/townsville">
                <Button variant="outline" size="lg">
                  Return to Home
                  <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
                </Button>
              </Link>
            </div>

          </div>
        </main>
      </div>
    </>
  );
};

export default ThingsToDo;
