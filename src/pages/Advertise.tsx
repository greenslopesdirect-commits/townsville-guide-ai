import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Handshake, CalendarPlus, Store, Sparkles, Mail, MapPin } from "lucide-react";

const Advertise = () => {
  return (
    <>
      <SEOHead
        title="Partner With Us | My Aussie Guide Townsville"
        description="Grow your Townsville business with My Aussie Guide. Apply for a Founding Partner listing and reach locals and tourists looking for the best cafes, tours, and accommodation in North Queensland."
        canonical="https://www.myaussieguide.com.au/advertise"
      />
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Founding Partner Program",
            "url": "https://www.myaussieguide.com.au/advertise",
            "description": "Founding Partner listings on My Aussie Guide Townsville — curated by Duncan Ross, Townsville Local."
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
                Grow With Townsville's Independent Voice
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                My Aussie Guide is currently the region's fastest-growing local resource. We are now selecting a limited number of Founding Partners to feature during our May 2026 Dry Season surge.
              </p>
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>A Townsville Local initiative — curated by Duncan Ross</span>
              </div>
            </header>

            {/* Content Sections */}
            <div className="space-y-12">

              {/* How to Get Involved */}
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
                  Founding Partner Opportunities
                </h2>
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-6 flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <CalendarPlus className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">Submit Your Event</h3>
                      <p className="text-muted-foreground">
                        Currently accepting complimentary community event listings for our May 2026 calendar to help locals and visitors plan their weekends.
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
                        Apply to join as a Founding Partner. We are currently waiving our standard review and photography fees for select Townsville cafes, tours, and accommodation during our Q2 growth phase.
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
                        Discuss future sponsorship opportunities as we scale toward our 2026 traffic milestones.
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
                    Apply for a Founding Partner Listing
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  Founding Partner spots are limited and curated personally by Duncan Ross to keep the guide authentic and hyper-local. Reach out to start the conversation.
                </p>
                <Button size="lg" asChild>
                  <a href="mailto:advertise@myaussieguide.com.au?subject=Founding%20Partner%20Application">
                    Apply for a Founding Partner Listing
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
