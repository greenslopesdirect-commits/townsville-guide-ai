import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Duncan's Guide – Townsville</title>
        <meta 
          name="description" 
          content="Read the Privacy Policy for Duncan's Guide – Townsville. Learn how we handle data, cookies, analytics and AI interactions on this website." 
        />

        {/* Privacy Policy Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "PrivacyPolicy",
            "name": "Privacy Policy",
            "url": "https://duncansguide.com/privacy-policy",
            "description": "Privacy Policy for Duncan's Guide explaining data usage, cookies, analytics and how user information is handled.",
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
                  "position": 2",
                  "name": "Privacy Policy",
                  "item": "https://duncansguide.com/privacy-policy"
                }
              ]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Duncan's Guide",
              "url": "https://duncansguide.com"
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
              Duncan's Guide – Townsville respects your privacy. This Privacy Policy explains what information 
              we collect, how it is used, and how you can contact us with questions.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
            <p>
              We collect minimal information to operate and improve this website. This may include:
            </p>
            <ul>
              <li>Anonymous analytics data (page visits, device type, session duration)</li>
              <li>AI chat queries that help improve local recommendations</li>
              <li>Your email only if you contact us directly</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground">How We Use Your Information</h2>
            <p>
              We use collected data solely to improve Duncan's Guide. We do <strong>not</strong> sell, trade, 
              or share personal information with third parties.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">Cookies & Analytics</h2>
            <p>
              This site uses cookies for:
            </p>
            <ul>
              <li>Remembering user preferences</li>
              <li>Understanding site traffic (via Google Analytics or similar tools)</li>
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
                href="mailto:greenslopesdirect@gmail.com" 
                className="text-primary underline"
              >
                greenslopesdirect@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
