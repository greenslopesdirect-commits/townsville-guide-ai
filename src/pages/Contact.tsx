import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Mail, Calendar, AlertCircle, Handshake } from "lucide-react";

const Contact = () => {
  return (
    <>
      <SEOHead
        title="Contact Us - MyAussieGuide Townsville"
        description="Get in touch with MyAussieGuide. Submit events, report corrections, or explore partnership opportunities for your Townsville business."
        canonical="https://www.myaussieguide.com.au/contact"
      />
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Us",
            "url": "https://www.myaussieguide.com.au/contact",
            "description": "Contact MyAussieGuide for event listings, corrections, and partnership enquiries"
          }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            
            {/* Hero Section */}
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a question about Townsville? Want to list your event or correct a mistake? We'd love to hear from you.
              </p>
            </header>

            {/* Contact Card */}
            <section className="mb-16">
              <div className="bg-muted/30 border border-border rounded-xl p-8 md:p-12 text-center max-w-xl mx-auto">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                  <Mail className="w-10 h-10 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                  General Enquiries & Event Listings
                </p>
                <a 
                  href="mailto:hello@myaussieguide.com.au"
                  className="text-2xl md:text-3xl font-semibold text-primary hover:underline transition-colors"
                >
                  hello@myaussieguide.com.au
                </a>
              </div>
            </section>

            {/* Why Contact Us Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
                Why Contact Us?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-muted/30 border border-border rounded-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">Event Listings</h3>
                  <p className="text-muted-foreground text-sm">
                    Hosting a market or gig? Send us the details and we'll add it to our calendar.
                  </p>
                </div>
                <div className="bg-muted/30 border border-border rounded-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <AlertCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">Corrections</h3>
                  <p className="text-muted-foreground text-sm">
                    Spotted an error? Help us keep the guide accurate for everyone.
                  </p>
                </div>
                <div className="bg-muted/30 border border-border rounded-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Handshake className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">Partnerships</h3>
                  <p className="text-muted-foreground text-sm">
                    Interested in featuring your local business? Let's chat.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </main>
      </div>
    </>
  );
};

export default Contact;