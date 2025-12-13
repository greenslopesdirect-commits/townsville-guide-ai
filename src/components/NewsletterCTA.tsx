import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, FileText } from "lucide-react";

interface NewsletterCTAProps {
  className?: string;
}

const NewsletterCTA = ({ className = "" }: NewsletterCTAProps) => {
  return (
    <Card className={`border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent ${className}`}>
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="w-8 h-8 text-primary" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Get the Townsville Weekender
            </h3>
            <p className="text-muted-foreground mb-4">
              Join 500+ locals getting weekly updates on events, markets, and local tips delivered to your inbox every Friday.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button asChild size="lg">
                <a 
                  href="https://myaussieguide.beehiiv.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Subscribe Free
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <FileText className="w-4 h-4" />
                Download PDF Guide
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsletterCTA;
