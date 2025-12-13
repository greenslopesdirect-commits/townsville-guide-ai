import { Button } from "@/components/ui/button";
import { FileText, Sparkles } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-[hsl(195,75%,92%)] to-[hsl(45,90%,90%)] dark:from-[hsl(195,40%,18%)] dark:to-[hsl(45,40%,15%)]">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Free Guide + Weekly Tips
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
            Plan Your Best Weekend Yet (And Survive the Holidays! 🌴)
          </h2>
          
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join <strong className="text-foreground">500+ locals</strong> receiving{" "}
            <strong className="text-foreground">'The Townsville Weekender'</strong> every Thursday.{" "}
            Sign up today and get the{" "}
            <span className="inline-flex items-center gap-1 text-primary font-semibold">
              <FileText className="w-4 h-4" />
              Townsville School Holiday Survival Guide (PDF)
            </span>{" "}
            sent straight to your inbox—free.
          </p>

          <Button 
            asChild
            size="lg" 
            className="h-12 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <a href="https://myaussieguide.beehiiv.com/">
              Join for Free & Get the Guide
            </a>
          </Button>
          
          <p className="text-xs text-muted-foreground mt-4">
            Unsubscribe anytime. We respect your inbox.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
