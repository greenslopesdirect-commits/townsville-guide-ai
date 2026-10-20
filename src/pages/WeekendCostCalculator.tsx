import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Calculator, ExternalLink } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const SITE = "https://www.townsvilleguide.com.au";
const PATH = "/weekend-cost-calculator";
const TOOL_URL = "https://greenslopesdirect-commits.github.io/townsville-weekend-cost-calculator/";

const TITLE = "Townsville Weekend Cost Calculator | Estimate Your Trip";
const DESCRIPTION =
  "Estimate what a weekend in Townsville might cost: transport, eating out and paid activities for adults and kids. A quick planning tool, estimates only.";

const RELATED = [
  { to: "/things-to-do", label: "Things to Do", note: "Pick the activities to cost." },
  { to: "/guides/free-things", label: "Free Things to Do", note: "Keep the activity budget down." },
  { to: "/guides/magnetic-island-ferry", label: "Magnetic Island Ferry", note: "Check ferry fares with the operators." },
  { to: "/accommodation", label: "Where to Stay", note: "The calculator doesn't include accommodation." },
  { to: "/food", label: "Food & Drink", note: "Where to eat, by area." },
];

const WeekendCostCalculator = () => (
  <>
    <SEOHead title={TITLE} description={DESCRIPTION} canonical={`${SITE}${PATH}`} />
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              name: "Townsville Weekend Cost Calculator",
              url: `${SITE}${PATH}`,
              description: DESCRIPTION,
              isPartOf: { "@type": "WebSite", name: "Townsville Guide", url: `${SITE}/` },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
                { "@type": "ListItem", position: 2, name: "Weekend Cost Calculator", item: `${SITE}${PATH}` },
              ],
            },
          ],
        })}
      </script>
    </Helmet>

    <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
        <Calculator className="w-4 h-4" aria-hidden="true" />
        Planning tool
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">Townsville Weekend Cost Calculator</h1>

      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Want a rough idea of what a Townsville weekend will cost before you commit? Tell the calculator
        how many adults and kids are going, how you'll get around, how often you'll eat out and how many
        paid activities you want. It gives you a quick estimate for transport, food and activities, plus a
        total and a per-person figure.
      </p>
      <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground leading-relaxed mb-6">
        <li>Inputs: 1 to 4 adults, 0 to 4 kids, transport (walking or cycling, driving, or the Magnetic Island ferry), eating out and paid activities.</li>
        <li>It is an estimate only. Actual prices vary, so check current prices with each operator before you book.</li>
        <li>It doesn't include accommodation.</li>
        <li>The calculator is a separate tool hosted outside this site. To show the full breakdown it asks for an email address. That address and the time are sent to us through EmailJS as a notification. There is also an optional, unticked box to get a weekly what's-on email. See our <Link to="/privacy-policy" className="text-primary hover:underline">privacy policy</Link>.</li>
      </ul>

      <p className="mb-4">
        <a
          href={TOOL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
        >
          <Calculator className="w-5 h-5" aria-hidden="true" />
          Open the calculator
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
      </p>

      <div className="rounded-xl border bg-card overflow-hidden mb-4">
        <iframe
          src={TOOL_URL}
          title="Townsville Weekend Cost Calculator"
          loading="lazy"
          className="w-full h-[760px] md:h-[820px] border-0"
        />
      </div>
      <p className="text-sm text-muted-foreground mb-10">
        If the embedded calculator doesn't load, use the "Open the calculator" button above to open it in
        its own tab.
      </p>

      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-4">Plan the rest of the weekend</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {RELATED.map((r) => (
            <Link
              key={r.to}
              to={r.to}
              className="group block rounded-xl border bg-card p-5 hover:border-primary/40 transition-colors"
            >
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{r.label}</h3>
              <p className="text-sm text-muted-foreground mt-1">{r.note}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  </>
);

export default WeekendCostCalculator;
