import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const EMAIL = "greenslopesdirect@gmail.com";

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Townsville Guide"
        description="Read the Privacy Policy for Townsville Guide. Learn how we handle data, cookies, analytics and AI interactions on this website."
        canonical="https://www.townsvilleguide.com.au/privacy-policy"
        noindex={true}
      />
      <Helmet>

        {/* Privacy Policy Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy",
            "url": "https://www.townsvilleguide.com.au/privacy-policy",
            "description": "Privacy Policy for Townsville Guide explaining data usage, cookies, analytics and how user information is handled.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.townsvilleguide.com.au"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Privacy Policy",
                  "item": "https://www.townsvilleguide.com.au/privacy-policy"
                }
              ]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Townsville Guide",
              "url": "https://www.townsvilleguide.com.au"
            }
          }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          
          <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
            <p>
              Townsville Guide is operated by DKR Sales (ABN 63 824 596 227) in Queensland, Australia. 
              We take privacy seriously and comply with Australian privacy requirements.
            </p>

            <p>
              Townsville Guide – Townsville respects your privacy. This Privacy Policy explains what information 
              we collect, how it is used, and how you can contact us with questions.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
            <p>
              We collect minimal information to operate and improve this website. This may include:
            </p>
            <ul>
              <li>Anonymous analytics data (page visits, device type, session duration)</li>
              <li>AI chat queries that help improve local recommendations</li>
              <li>Your email address if you contact us directly, or if you use the Weekend Cost Calculator (see below)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground">How We Use Your Information</h2>
            <p>
              We use collected data to operate and improve Townsville Guide. We never sell your
              personal information.
            </p>
            <p>
              Our analytics and affiliate partners (Google Analytics, Stay22 and its booking partners,
              such as Booking.com, Expedia, Agoda and GetYourGuide) may set cookies and receive usage
              data, such as your device, browser and the links you click, when you visit our pages or
              click through to their sites. Their use of that data is governed by their own privacy policies.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">Weekend Cost Calculator</h2>
            <p>
              The Weekend Cost Calculator is a separate tool hosted on GitHub Pages and shown on our
              Weekend Cost Calculator page. It asks for your email address before it shows the full
              breakdown. When you submit it, the calculator sends your email address and the time of
              submission to the operator of Townsville Guide, as a notification that the calculator was
              used. The message is sent through EmailJS, a third-party email-sending service, which
              processes it under its own privacy policy. The figures you enter (adults, kids, transport,
              meals and activities) are not included in that message.
            </p>
            <p>
              The calculator's own page says it will "only use this to show your result". In practice
              your email address is also sent to us in the way described above. If you'd rather not
              share your email address, please don't use the calculator. To ask us to delete your email
              address, contact us using the details below.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">Cookies & Analytics</h2>
            <p>
              This site uses cookies for:
            </p>
            <ul>
              <li>Remembering user preferences</li>
              <li>Understanding site traffic (via Google Analytics or similar tools)</li>
              <li>Tracking affiliate referrals (via Stay22 and its booking partners)</li>
            </ul>
            <p>
              You can disable cookies in your browser settings at any time.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">AI Chat System</h2>
            <p>
              The AI chat assistant may temporarily process your queries to generate responses.  
              These queries are not used to personally identify you.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
            <p>
              For privacy concerns or data questions, please contact:
            </p>
            <p>
              <a
                href={`mailto:${EMAIL}`}
                className="text-primary underline"
              >
                {EMAIL}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
