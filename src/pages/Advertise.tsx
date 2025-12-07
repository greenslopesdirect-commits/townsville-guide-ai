import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Megaphone, Users, Target, TrendingUp, LayoutGrid, Mail } from "lucide-react";
import AdvertiserAdBlock from "@/components/AdvertiserAdBlock";

const Advertise = () => {
  return (
    <>
      <SEOHead
        title="Advertise With Us - Duncan's Guide Townsville"
        description="Promote your business to visitors exploring Townsville. Reach a high-intent local travel audience with cost-effective advertising options."
        canonical="https://duncansguide.com/townsville/advertise"
      />
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Advertise With Us",
            "url": "https://duncansguide.com/townsville/advertise",
            "description": "Advertising opportunities on Duncan's Guide Townsville"
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
                <Megaphone className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Advertise With Us
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Promote your business to visitors exploring Townsville.
              </p>
            </header>

            {/* Content Sections */}
            <div className="space-y-12">
              
              {/* Why Advertise */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Why Advertise on Duncan's Guide?
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <Users className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">High-Intent Audience</h3>
                    <p className="text-muted-foreground text-sm">
                      Reach visitors actively planning trips to Townsville — people ready to book accommodation, restaurants, and experiences.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <Target className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Multiple Ad Placements</h3>
                    <p className="text-muted-foreground text-sm">
                      Choose from sidebar ads, in-content placements, footer banners, and sponsored listings to match your goals.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Cost-Effective Exposure</h3>
                    <p className="text-muted-foreground text-sm">
                      Affordable rates designed for local businesses. Get more value than traditional advertising channels.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <Users className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">Locals + Visitors</h3>
                    <p className="text-muted-foreground text-sm">
                      Our audience includes tourists planning trips and locals looking for things to do — double the exposure for your business.
                    </p>
                  </div>
                </div>
              </section>

              {/* Ad Placement Options */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <LayoutGrid className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Ad Placement Options
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Sidebar Ad Block</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      300×250 display ad visible alongside main content on desktop. High visibility placement.
                    </p>
                    <span className="text-xs text-primary font-medium">Coming Soon</span>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">In-Content Ad Block</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Native-style ad placed within article content. Excellent engagement rates.
                    </p>
                    <span className="text-xs text-primary font-medium">Coming Soon</span>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Footer Ad Block</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Banner placement above the site footer. Visible on every page.
                    </p>
                    <span className="text-xs text-primary font-medium">Coming Soon</span>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Sponsored Listings</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Featured placement in our restaurant, accommodation, or attractions guides. Premium visibility.
                    </p>
                    <span className="text-xs text-primary font-medium">Coming Soon</span>
                  </div>
                </div>
              </section>

              {/* Example Ad Block */}
              <section>
                <h2 className="text-xl font-bold mb-4 text-foreground text-center">
                  Example Ad Placement
                </h2>
                <AdvertiserAdBlock />
              </section>

              {/* Contact CTA */}
              <section className="text-center pt-8 border-t border-border">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">
                    Get Started
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  Interested in advertising your business on Duncan's Guide? Contact us to discuss options and pricing.
                </p>
                <Button size="lg" asChild>
                  <a href="mailto:advertise@duncansguide.com">
                    Contact Us to Enquire
                  </a>
                </Button>
                <div className="mt-8">
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/townsville">← Back to Home</Link>
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
