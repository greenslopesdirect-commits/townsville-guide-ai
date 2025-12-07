import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Nature = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <SEOHead
        title="Nature & Walks in Townsville"
        description="From Castle Hill to wetlands and local trails — discover Townsville's natural beauty."
        canonical="https://duncansguide.com/townsville/nature"
      />
      
      {/* Back Button */}
      <Link to="/townsville">
        <Button 
          variant="ghost" 
          className="mb-6 group"
          aria-label="Back to home"
        >
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Button>
      </Link>
      
      <h1 className="text-3xl font-bold mb-4">Nature & Walks in Townsville</h1>
      <p className="text-muted-foreground mb-8">
        From Castle Hill to wetlands and local trails — a complete nature guide is coming soon.
      </p>
      
      {/* Back to Home */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg" asChild>
          <Link to="/townsville">← Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default Nature;
