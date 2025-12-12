import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Download, Mail } from "lucide-react";
import { toast } from "sonner";

interface NewsletterHouseAdProps {
  className?: string;
}

const NewsletterHouseAd = ({ className = "" }: NewsletterHouseAdProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast.success("Check your email for the PDF! 🎉");
      setEmail("");
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div
      className={`border-2 border-primary/30 rounded-xl p-6 bg-gradient-to-br from-[hsl(var(--ocean-light))] to-[hsl(var(--sand))] dark:from-[hsl(var(--ocean-light))] dark:to-[hsl(210,40%,15%)] ${className}`}
    >
      <div className="text-center max-w-sm mx-auto">
        <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
          <FileText className="w-7 h-7 text-primary" />
        </div>
        
        <h3 className="font-bold text-lg text-foreground mb-2">
          Don't miss out! 🌴
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4">
          Get the <strong className="text-foreground">Townsville School Holiday Survival Guide PDF</strong> when you join our list.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 bg-background/80 border-border"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            <Download className="mr-2 w-4 h-4" />
            {isSubmitting ? "Sending..." : "Download Free PDF"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterHouseAd;
