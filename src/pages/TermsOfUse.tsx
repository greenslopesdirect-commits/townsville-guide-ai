import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const EMAIL = "greenslopesdirect@gmail.com";

const TermsOfUse = () => {
  return (
    <>
      <SEOHead
        title="Terms of Use | Townsville Guide"
        description="Read the Terms of Use for Townsville Guide. Learn about disclaimers, limitations, and user responsibilities when using our local travel guide."
        canonical="https://www.townsvilleguide.com.au/terms-of-use"
        noindex={true}
      />
      <Helmet>

        {/* Terms of Service Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "TermsOfService",
            "name": "Terms of Use",
            "url": "https://www.townsvilleguide.com.au/terms-of-use",
            "description": "Terms of Use for Townsville Guide. Includes disclaimers, acceptable use, and legal limitations.",
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
                  "name": "Terms of Use",
                  "item": "https://www.townsvilleguide.com.au/terms-of-use"
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

          <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Use</h1>

          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
            <p>
              This website (Townsville Guide) is owned and operated by DKR Sales (ABN 63 824 596 227).
            </p>

            <p>
              Townsville Guide provides general travel, local information, and AI-generated
              suggestions for entertainment and reference purposes only. While we strive for accuracy,
              we cannot guarantee that all information or AI outputs are correct, complete, or up to date.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">1. No Professional Advice</h2>
            <p>
              The information on this site should not be considered professional advice. Users should
              independently verify details such as opening hours, safety alerts, weather conditions,
              ferry schedules, and directions.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">2. Limitation of Liability</h2>
            <p>
              The website, its owner, and its AI assistant are not liable for any losses, damages,
              injuries, or issues arising from:
            </p>
            <ul>
              <li>Use of AI-generated responses</li>
              <li>Errors or outdated information</li>
              <li>Links to third-party websites (e.g., Booking.com)</li>
              <li>Reliance on local recommendations or travel suggestions</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground">3. Acceptable Use</h2>
            <p>Visitors agree not to:</p>
            <ul>
              <li>Copy or reproduce site content without permission</li>
              <li>Use the AI system for illegal or harmful activities</li>
              <li>Attempt to interfere with website functionality</li>
              <li>Exploit the content or code for commercial use without approval</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground">4. Third-Party Services</h2>
            <p>
              We may link to external services such as booking platforms, maps, or attractions.
              We do not control these services and are not responsible for their content.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">5. Changes to These Terms</h2>
            <p>
              We may update these Terms of Use at any time. Continued use of the site indicates
              acceptance of any revised terms.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">6. Contact</h2>
            <p>
              For questions about these Terms, please contact:
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

export default TermsOfUse;
