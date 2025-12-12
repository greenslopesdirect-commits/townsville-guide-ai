import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="py-12 px-4 bg-[hsl(195,75%,92%)] dark:bg-[hsl(195,40%,18%)]">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Weekly Newsletter
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
            Want to know what's on this weekend in Townsville? 📅
          </h2>
          
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join 500+ locals receiving <strong className="text-foreground">'The Townsville Weekender'</strong>. 
            Every Thursday, we send you the best markets, hidden café spots, and event updates.
          </p>

          <Button 
            asChild
            size="lg" 
            className="h-12 px-6"
          >
            <a href="https://myaussieguide.beehiiv.com/" className="inline-flex items-center gap-2">
              Get The Townsville Weekender
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          
          <p className="text-sm text-muted-foreground mt-3">
            Free weekly email. Sign up takes seconds.
          </p>
          
          <p className="text-xs text-muted-foreground mt-4">
            Unsubscribe anytime. No spam, just local goodness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
