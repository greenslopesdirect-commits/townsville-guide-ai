import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Handshake, CalendarPlus, Store, Sparkles, Mail } from "lucide-react";

const Advertise = () => {
  return (
    <>
      <SEOHead
        title="Partner With Us - MyAussieGuide Townsville"
        description="Run a local business in Townsville? Get listed in our guides. Submit events, feature your venue, or explore sponsorship opportunities."
        canonical="https://www.myaussieguide.com.au/advertise"
      />
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Partner With Us",
            "url": "https://www.myaussieguide.com.au/advertise",
            "description": "Partnership and listing opportunities on MyAussieGuide Townsville"
          }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            
            {/* Header */}
            <header className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Handshake className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Partner With Us / Get Listed
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Do you run a local business in Townsville? We are constantly looking for the best cafes, tours, and accommodation to feature in our guides.
              </p>
            </header>

            {/* Content Sections */}
            <div className="space-y-12">
              
              {/* How to Get Involved */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
                  How to Get Involved
                </h2>
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-6 flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <CalendarPlus className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Submit Your Event</h3>
                      <p className="text-muted-foreground">
                        Hosting an event? Let us know and we can add it to our weekly calendar.
                      </p>
                    </div>
                  </div>
                  <div className="border border-border rounded-lg p-6 flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Store className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Feature Your Business</h3>
                      <p className="text-muted-foreground">
                        Invite us to review your venue or tour and get featured in our guides.
                      </p>
                    </div>
                  </div>
                  <div className="border border-border rounded-lg p-6 flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Sponsorship</h3>
                      <p className="text-muted-foreground">
                        Discuss future sponsorship opportunities to reach our growing audience.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact CTA */}
              <section className="text-center pt-8 border-t border-border">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">
                    Get in Touch
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  Interested in partnering with MyAussieGuide? Contact us to discuss how we can work together.
                </p>
                <Button size="lg" asChild>
                  <a href="mailto:advertise@myaussieguide.com.au">
                    Contact Us to Enquire
                  </a>
                </Button>
                <div className="mt-8">
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/">← Back to Home</Link>
                  </Button>
                </div>
              </section>

            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Advertise;
