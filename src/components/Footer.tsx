import { Link } from "react-router-dom";
import { Mail, MapPin, Facebook, Instagram } from "lucide-react";

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
              Duncan's Guide – Townsville
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
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/things-to-do" className="hover:text-primary">Things to Do</Link></li>
              <li><Link to="/beaches" className="hover:text-primary">Beaches</Link></li>
              <li><Link to="/food-drink" className="hover:text-primary">Food & Dining</Link></li>
              <li><Link to="/events" className="hover:text-primary">Events</Link></li>
              <li><Link to="/local-tips" className="hover:text-primary">Local Tips</Link></li>
              <li><Link to="/accommodation" className="hover:text-primary">Accommodation</Link></li>
            </ul>
          </div>

          {/* Column 3 – Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="hover:text-primary">Terms of Use</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-primary">Cookie Policy</Link></li>
              <li><Link to="/affiliate-disclosure" className="hover:text-primary">Affiliate Disclosure</Link></li>
            </ul>
          </div>

          {/* Column 4 – Contact + Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Contact</h4>

            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:greenslopesdirect@gmail.com"
                className="hover:text-primary"
              >
                greenslopesdirect@gmail.com
              </a>
            </div>

            <h4 className="font-semibold text-foreground mt-6 mb-3">Follow</h4>
            <div className="flex gap-4 text-muted-foreground">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
<div className="mt-12 border-t border-border/40 pt-6 text-center">
  <p className="text-sm text-gray-400">
    © {year} Duncan's Guide – Townsville. All rights reserved.
  </p>

  <p className="text-sm text-gray-500 mt-1">
    Townsville’s trusted source for beaches, food, events and local tips.
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
