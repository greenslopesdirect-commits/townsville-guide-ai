import { Helmet } from "react-helmet";
import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Mail, Calendar, AlertCircle, Handshake, Copy, Check, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const EMAIL = "hello@myaussieguide.com.au";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy. Please copy manually.");
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Us - My Aussie Guide Townsville"
        description="Get in touch with My Aussie Guide. Submit events, report corrections, or explore partnership opportunities for your Townsville business."
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
            "description": "Contact My Aussie Guide for event listings, corrections, and partnership enquiries"
          }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">

            {/* Urgent Inquiries Callout */}
            <div className="mb-8 flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
              <Phone className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div className="flex-1 text-sm">
                <p className="font-semibold text-red-900">Need help right now?</p>
                <p className="text-red-800 mt-0.5">
                  This inbox isn't monitored 24/7. For urgent inquiries — emergency services,
                  hospitals, council, vets, transport — see our{" "}
                  <Link to="/useful-contacts" className="font-medium underline hover:no-underline inline-flex items-center gap-0.5">
                    Useful Contacts &amp; Emergency Info <ArrowRight className="w-3 h-3" />
                  </Link>{" "}
                  page. In a life-threatening emergency, always dial <strong>000</strong>.
                </p>
              </div>
            </div>

            {/* Hero Section */}
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a question about Townsville? Want to list your event or correct a mistake? We'd love to hear from you.
              </p>
              <p className="mt-4 text-base text-foreground/80 max-w-2xl mx-auto">
                Interested in becoming a Founding Partner? Reach out below.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Need help right now?{" "}
                <a href="/useful-contacts" className="text-primary font-medium hover:underline">
                  View Emergency Info →
                </a>
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
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors break-all"
                  >
                    {EMAIL}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    aria-label="Copy email address to clipboard"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors shrink-0"
                  >
                    {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
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