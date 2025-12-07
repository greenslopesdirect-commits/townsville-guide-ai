import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Shopping = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <SEOHead
        title="Shopping & Markets in Townsville"
        description="Explore boutiques, local stores and weekend markets in Townsville."
        canonical="https://duncansguide.com/townsville/shopping"
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
      
      <h1 className="text-3xl font-bold mb-4">Shopping & Markets in Townsville</h1>
      <p className="text-muted-foreground mb-8">
        Explore boutiques, local stores and weekend markets — full guide coming soon.
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

export default Shopping;
