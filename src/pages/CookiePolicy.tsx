import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const CookiePolicy = () => {
  return (
    <>
      <SEOHead
        title="Cookie Policy | Duncan's Guide – Townsville"
        description="Learn how Duncan's Guide – Townsville uses cookies to improve functionality, analyse traffic, and enhance user experience. Includes details on analytics, consent, and cookie control."
        canonical="https://duncansguide.com/cookie-policy"
      />
      <Helmet>

        {/* Cookie Policy Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "CookiePolicy",
            "name": "Cookie Policy",
            "url": "https://duncansguide.com/cookie-policy",
            "description": "Information about how cookies are used on Duncan's Guide – Townsville, including analytics, affiliate cookies, and user consent.",
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
                  "name": "Cookie Policy",
                  "item": "https://duncansguide.com/cookie-policy"
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

          {/* Back to Home */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          {/* Page Header */}
          <h1 className="text-4xl font-bold mb-8 text-foreground">Cookie Policy</h1>

          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">

            <p>
              Duncan's Guide – Townsville uses cookies to enhance your browsing experience, analyse website
              performance, and deliver relevant content. Cookies are small text files stored on your device
              when you visit our site.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">1. Why We Use Cookies</h2>
            <p>We use cookies for several reasons:</p>
            <ul>
              <li>To improve website speed and functionality</li>
              <li>To remember your preferences (such as cookie consent)</li>
              <li>To analyse anonymous visitor traffic through Google Analytics</li>
              <li>To support affiliate links (e.g., Booking.com tracking)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground">2. Types of Cookies We Use</h2>

            <h3 className="text-xl font-semibold text-foreground">Essential Cookies</h3>
            <p>
              These are required for the website to function properly, such as security cookies
              and basic navigation.
            </p>

            <h3 className="text-xl font-semibold text-foreground">Analytics Cookies</h3>
            <p>
              We may use Google Analytics to track anonymous usage data, such as page views,
              device type, and time spent on the site. No personally identifiable information is collected.
            </p>

            <h3 className="text-xl font-semibold text-foreground">Affiliate Cookies</h3>
            <p>
              Some pages may include affiliate links (e.g., Booking.com or Skyscanner). These services
              may set their own cookies to track referrals and purchases.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">3. Cookie Consent</h2>
            <p>
              When you first visit the website, a cookie banner may appear to obtain your
              consent for optional cookies such as analytics or affiliate tracking.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">4. How to Disable Cookies</h2>
            <p>You can disable or delete cookies anytime through your browser settings:</p>
            <ul>
              <li>Chrome: Settings → Privacy → Cookies</li>
              <li>Safari: Preferences → Privacy</li>
              <li>Firefox: Preferences → Privacy & Security</li>
              <li>Edge: Settings → Site Permissions → Cookies</li>
            </ul>
            <p>
              Disabling cookies may affect certain website features or functionality.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">5. Contact</h2>
            <p>
              If you have questions about our Cookie Policy, contact us at:
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

export default CookiePolicy;
