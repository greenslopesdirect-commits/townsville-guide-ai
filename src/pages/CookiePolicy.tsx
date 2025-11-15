import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const CookiePolicy = () => {
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
        
        <h1 className="text-4xl font-bold mb-8 text-foreground">Cookie Policy</h1>
        
        <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
          <p>
            This site uses cookies to improve functionality and analyze traffic. Cookies are small text files 
            stored on your device. You can clear or disable them anytime in your browser settings.
          </p>
          
          <p>
            Some cookies come from trusted third parties like Google Analytics or Booking.com affiliates.
          </p>
          
          <p>
            When you first visit, a cookie banner should appear to obtain your consent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
