import { Button } from "@/components/ui/button";
import { FileText, Sparkles } from "lucide-react";
const NewsletterSection = () => {
  return <section className="py-12 px-4 bg-gradient-to-br from-[hsl(195,75%,92%)] to-[hsl(45,90%,90%)] dark:from-[hsl(195,40%,18%)] dark:to-[hsl(45,40%,15%)]">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">Weekend Planning Made Simple<Sparkles className="w-4 h-4" />
            Free Guide + Weekly Tips
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Plan Your Weekend with Confidence 🌴</h2>
          
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join  receiving{" "}
             every Thursday.{" "}
            Sign up today and get the{" "}
            {" "}
            sent straight to your inbox—free.
          </p>

          <Button asChild size="lg" className="h-12 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
            <a href="https://myaussieguide.beehiiv.com/">
              Join for Free & Get the Guide
            </a>
          </Button>
          
          <p className="text-xs text-muted-foreground mt-4">We’ll only email you when we have something genuinely useful to share. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>;
};
export default NewsletterSection;