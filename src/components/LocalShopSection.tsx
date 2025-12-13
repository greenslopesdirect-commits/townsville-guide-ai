import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Bell, Mail, Check } from "lucide-react";
import { toast } from "sonner";

const LocalShopSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    setIsSubmitting(true);
    
    // Simulate submission - in production, this would connect to your email service
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      toast.success("You're on the waitlist! We'll notify you when it launches. 🎉");
    }, 800);
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sunset/20 text-[hsl(var(--sunset))] text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Local Shop
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Unplug with the Offline Companion
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Townsville Activity Book
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Heading to Magnetic Island or relaxing by the Strand? Give your eyes a break from screens. 
              Features Word Searches of local suburbs, Trivia, and Sudoku — perfect for ferry rides, beach days, or lazy Sunday arvos.
            </p>
            
            <ul className="space-y-2 mb-6 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                30+ pages of puzzles & games
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Local Townsville trivia
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Perfect for all ages
              </li>
            </ul>

            {/* Waitlist Form */}
            {!isSubmitted ? (
              <form onSubmit={handleWaitlistSubmit} className="space-y-3">
                <p className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Bell className="w-4 h-4 text-primary" />
                  Notify me when the Activity Book drops
                </p>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting}>
                    <Bell className="mr-2 w-4 h-4" />
                    {isSubmitting ? "Joining..." : "Join Waitlist"}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="flex items-center gap-2 p-4 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                <p className="text-green-700 dark:text-green-300 font-medium">
                  You're on the list! We'll email you when it launches.
                </p>
              </div>
            )}
          </div>

          {/* Image Placeholder */}
          <div className="order-1 md:order-2">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[hsl(var(--sand))] to-[hsl(var(--ocean-light))] flex items-center justify-center border-2 border-border/40 overflow-hidden">
              <div className="text-center p-8">
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-primary/60" />
                <p className="text-muted-foreground font-medium">Activity Book Preview</p>
                <p className="text-sm text-primary mt-1 font-semibold">Coming Soon!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalShopSection;