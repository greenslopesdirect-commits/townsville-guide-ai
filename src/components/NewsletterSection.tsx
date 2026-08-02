import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calculator, Sparkles } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-[hsl(195,75%,92%)] to-[hsl(45,90%,90%)] dark:from-[hsl(195,40%,18%)] dark:to-[hsl(45,40%,15%)]">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Weekend Planning Made Simple
          </div>

          {/* Headline */}
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Plan Your Weekend with Confidence 🌴</h2>

          {/* Description */}
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Local tools and insights to help you plan better weekends around Townsville — starting with a quick,
            personalised weekend cost calculator.
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="h-12 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Link to="/weekend-cost-calculator" className="inline-flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Calculate My Weekend Cost
            </Link>
          </Button>

          {/* Reassurance */}
          <p className="text-xs text-muted-foreground mt-4">
            Free to use, no email required — just a quick local price estimate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
