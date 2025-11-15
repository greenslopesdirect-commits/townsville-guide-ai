import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const TermsOfUse = () => {
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
        
        <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Use</h1>
        
        <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
          <p>
            Duncan's Guide provides general local information for entertainment and reference purposes only. 
            While we aim for accuracy, we do not guarantee that all AI responses or listings are correct or up to date.
          </p>
          
          <p>
            The website and its AI guide are provided "as is." We are not liable for errors, omissions, or damages 
            arising from use of the site or third-party links (such as Booking.com).
          </p>
          
          <p>
            Users agree not to misuse the site, duplicate its content, or use AI outputs for illegal purposes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
