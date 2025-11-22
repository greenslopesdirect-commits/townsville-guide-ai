import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-foreground text-background">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">Duncan's Guide – Townsville</h3>
          <p className="text-background/80">Your local AI companion for North Queensland</p>
        </div>
        
        <div className="mb-6">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-background/80">
            <Link 
              to="/privacy-policy" 
              className="hover:text-background transition-colors underline"
            >
              Privacy Policy
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link 
              to="/terms-of-use" 
              className="hover:text-background transition-colors underline"
            >
              Terms of Use
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link 
              to="/affiliate-disclosure" 
              className="hover:text-background transition-colors underline"
            >
              Affiliate Disclosure
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link 
              to="/cookie-policy" 
              className="hover:text-background transition-colors underline"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
        
        <div className="pt-6 border-t border-background/20">
          <p className="text-sm text-background/70">
            © {new Date().getFullYear()} Duncan's Guide – Townsville. Designed and maintained in North Queensland by Duncan Ross.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
