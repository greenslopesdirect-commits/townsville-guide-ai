import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const AffiliateDisclosure = () => {
  return (
    <>
      <SEOHead
        title="Affiliate Disclosure | MyAussieGuide – Townsville"
        description="Read MyAussieGuide affiliate disclosure, explaining how affiliate links work and how they support our Townsville local guide."
        canonical="https://duncansguide.com/affiliate-disclosure"
      />
      <Helmet>

        {/* Affiliate Disclosure Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Affiliate Disclosure",
            "url": "https://duncansguide.com/affiliate-disclosure",
            "description": "Information about how affiliate links on MyAussieGuide operate and how they support the website.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://duncansguide.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Affiliate Disclosure",
                  "item": "https://duncansguide.com/affiliate-disclosure"
                }
              ]
            },
            "publisher": {
              "@type": "Organization",
              "name": "MyAussieGuide",
              "url": "https://duncansguide.com"
            }
          }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <Link 
            to="/townsville" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          
          <h1 className="text-4xl font-bold mb-8 text-foreground">Affiliate Disclosure</h1>
          
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
            <p>
              MyAussieGuide is operated by DKR Sales (ABN 63 824 596 227). We may receive commissions 
              when users click on external booking links or make purchases through affiliate partners 
              such as Booking.com, Skyscanner, or other travel platforms. This helps support the site 
              at no extra cost to you.
            </p>

            <p>
              Some links on this website are affiliate links, meaning we may earn a small 
              commission if you click through and make a purchase. This comes at no additional 
              cost to you.
            </p>

            <p>
              These affiliate partnerships include services such as Booking.com, Skyscanner, 
              Amazon, and other trusted travel or product platforms.
            </p>

            <p>
              Affiliate earnings help support the operation and ongoing development of 
              MyAussieGuide — including maintaining server costs, improving our AI features, 
              and providing up-to-date local Townsville guides.
            </p>

            <p>
              We only recommend products or services we believe provide genuine value.  
              Transparency is important, and your trust is our priority.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AffiliateDisclosure;

