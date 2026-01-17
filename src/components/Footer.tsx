import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border mt-12 py-12">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Column 1 – Branding */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              MyAussieGuide – Townsville
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your friendly AI-powered guide to the best of Townsville:
              beaches, food, walks, events, and local tips.
            </p>

            <div className="flex items-center gap-2 mt-4 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4" />
              <span>Townsville, Queensland</span>
            </div>
          </div>

          {/* Column 2 – Explore */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/townsville" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/townsville/things-to-do" className="hover:text-primary transition-colors">Things to Do</Link></li>
              <li><Link to="/townsville/beaches" className="hover:text-primary transition-colors">Beaches</Link></li>
              <li><Link to="/townsville/food" className="hover:text-primary transition-colors">Food & Drink</Link></li>
              <li><Link to="/townsville/events" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link to="/townsville/dog-friendly" className="hover:text-primary transition-colors">Dog-Friendly Spots</Link></li>
              <li><Link to="/townsville/accommodation" className="hover:text-primary transition-colors">Accommodation</Link></li>
              <li><Link to="/townsville/flights" className="hover:text-primary transition-colors">Flights</Link></li>
              <li><Link to="/townsville/local-tips" className="hover:text-primary transition-colors">Local Tips</Link></li>
              <li><Link to="/townsville/advertise" className="hover:text-primary transition-colors">Advertise With Us</Link></li>
            </ul>
          </div>

          {/* Column 3 – Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="hover:text-primary transition-colors">Terms of Use</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link to="/affiliate-disclosure" className="hover:text-primary transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>

          {/* Column 4 – Contact + Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Contact</h4>

            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
              <Mail className="w-4 h-4" />
              <Link
                to="/townsville/contact"
                className="hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-border/40 pt-6 text-center space-y-3">
          <p className="text-sm text-muted-foreground">
            © 2025 MyAussieGuide — Operated by DKR Sales (ABN 63 824 596 227)
          </p>
          <p className="text-sm text-muted-foreground">
            Townsville's trusted source for beaches, food, events and local tips.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
