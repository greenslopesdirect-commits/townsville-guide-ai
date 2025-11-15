import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const AffiliateDisclosure = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 text-foreground">Affiliate Disclosure</h1>
        
        <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
          <p>
            Some links on this website are affiliate links, meaning we may earn a small commission if you make 
            a purchase at no additional cost to you.
          </p>
          
          <p>
            These include travel and booking links through Booking.com, Skyscanner, and other trusted partners.
          </p>
          
          <p>
            This helps support the free operation of Duncan's Guide and allows us to keep improving our local AI guide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AffiliateDisclosure;
