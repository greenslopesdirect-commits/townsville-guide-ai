import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const DogFriendly = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <SEOHead
        title="Dog-Friendly Spots in Townsville - Parks, Beaches & Cafés"
        description="A comprehensive guide to dog beaches, off-leash parks, walking tracks and pet-friendly locations in Townsville."
        canonical="https://duncansguide.com/townsville/dog-friendly"
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
      
      <h1 className="text-3xl font-bold mb-4">Dog-Friendly Spots in Townsville</h1>
      <p className="text-muted-foreground mb-8">
        A dedicated guide to dog beaches, off-leash parks, walking tracks and pet-friendly locations is coming soon.
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

export default DogFriendly;
