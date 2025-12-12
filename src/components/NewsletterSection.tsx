import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Calendar } from "lucide-react";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "https://myaussieguide.beehiiv.com/";
  };

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

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 h-12 bg-background border-border"
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              className="h-12 px-6"
            >
              Subscribe Free
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4">
            Unsubscribe anytime. No spam, just local goodness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
