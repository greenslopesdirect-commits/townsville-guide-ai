import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const PrivacyPolicy = () => {
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
        
        <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
          <p>
            Duncan's Guide – Townsville respects your privacy. We collect limited data, such as AI chat queries, 
            contact emails, and anonymous analytics, to improve user experience. No personal information is sold 
            or shared with third parties.
          </p>
          
          <p>
            Cookies are used to remember preferences and to help us understand site traffic through Google Analytics. 
            By using this site, you consent to this usage.
          </p>
          
          <p>
            For questions about your data, please contact{" "}
            <a 
              href="mailto:greenslopesdirect@gmail.com" 
              className="text-primary hover:text-primary/80 underline"
            >
              greenslopesdirect@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
