import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border mt-12">
      {/* Townsville Quick Resource Index */}
      <div className="border-b border-border/40 py-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
            Townsville Quick Resource Index
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Essential Townsville Guides */}
            <div>
              <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                Essential Townsville Guides
              </h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/guides/magnetic-island-day-trip" className="text-muted-foreground hover:text-primary transition-colors">Magnetic Island Day Trip</Link></li>
                <li><Link to="/guides/stinger-safety" className="text-muted-foreground hover:text-primary transition-colors">Stinger & Safety Guide</Link></li>
                <li><Link to="/cowboys-stadium-guide" className="text-muted-foreground hover:text-primary transition-colors">Cowboys Stadium & NRL Info</Link></li>
                <li><Link to="/townsville-airport" className="text-muted-foreground hover:text-primary transition-colors">Townsville Airport Guide</Link></li>
                <li><Link to="/guides/beat-the-heat" className="text-muted-foreground hover:text-primary transition-colors">Beat the Heat Guide</Link></li>
                <li><Link to="/useful-contacts" className="text-muted-foreground hover:text-primary transition-colors">Useful Contacts & Emergency Info</Link></li>
              </ul>
            </div>

            {/* Explore & Nature */}
            <div>
              <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                Explore & Nature
              </h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/the-strand" className="text-muted-foreground hover:text-primary transition-colors">The Strand Waterfront</Link></li>
                <li><Link to="/castle-hill" className="text-muted-foreground hover:text-primary transition-colors">Castle Hill Lookouts</Link></li>
                <li><Link to="/great-barrier-reef-townsville" className="text-muted-foreground hover:text-primary transition-colors">Great Barrier Reef Tours</Link></li>
                <li><Link to="/billabong-sanctuary" className="text-muted-foreground hover:text-primary transition-colors">Billabong Sanctuary</Link></li>
                <li><Link to="/little-crystal-creek-townsville" className="text-muted-foreground hover:text-primary transition-colors">Little Crystal Creek</Link></li>
                <li><Link to="/guides/sunset-walks" className="text-muted-foreground hover:text-primary transition-colors">Sunset Walks & Trails</Link></li>
              </ul>
            </div>

            {/* Planning & Lifestyle */}
            <div>
              <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                Planning & Lifestyle
              </h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/townsville-with-kids" className="text-muted-foreground hover:text-primary transition-colors">Townsville with Kids</Link></li>
                <li><Link to="/guides/free-things" className="text-muted-foreground hover:text-primary transition-colors">Free Things to Do</Link></li>
                <li><Link to="/moving-to-townsville" className="text-muted-foreground hover:text-primary transition-colors">Moving to Townsville Guide</Link></li>
                <li><Link to="/events" className="text-muted-foreground hover:text-primary transition-colors">Local Event Calendar</Link></li>
                <li><Link to="/dog-friendly" className="text-muted-foreground hover:text-primary transition-colors">Dog-Friendly Spots</Link></li>
                <li><Link to="/accessible-townsville" className="text-muted-foreground hover:text-primary transition-colors">Accessibility Guide</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-12">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Column 1 – Branding */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              My Aussie Guide – Townsville
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your friendly local guide to the best of Townsville:
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
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/things-to-do" className="hover:text-primary transition-colors">Things to Do</Link></li>
              <li><Link to="/beaches" className="hover:text-primary transition-colors">Beaches</Link></li>
              <li><Link to="/food" className="hover:text-primary transition-colors">Food & Drink</Link></li>
              <li><Link to="/events" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link to="/dog-friendly" className="hover:text-primary transition-colors">Dog-Friendly Spots</Link></li>
              <li><Link to="/accommodation" className="hover:text-primary transition-colors">Accommodation</Link></li>
              <li><Link to="/flights" className="hover:text-primary transition-colors">Flights</Link></li>
              <li><Link to="/local-tips" className="hover:text-primary transition-colors">Local Tips</Link></li>
              <li><Link to="/guides/magnetic-island-day-trip" className="hover:text-primary transition-colors">Wild Koala Guide</Link></li>
              <li><Link to="/cowboys-stadium-guide" className="hover:text-primary transition-colors">Cowboys Game Day</Link></li>
              <li><Link to="/north-shore-townsville" className="hover:text-primary transition-colors">North Shore Guide</Link></li>
              <li><Link to="/moving-to-townsville" className="hover:text-primary transition-colors">Moving to Townsville Guide</Link></li>
              <li><Link to="/advertise" className="hover:text-primary transition-colors">Partner With Us</Link></li>
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
                to="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </div>

          </div>
        </div>

        {/* Acknowledgement of Country */}
        <div className="mt-12 border-t border-border/40 pt-8">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-sm font-medium text-muted-foreground mb-3">
              Acknowledgement of Country
            </h4>
            <p className="text-xs text-muted-foreground/80 leading-relaxed">
              My Aussie Guide acknowledges the Traditional Owners of the land on which we live and work, 
              the Wulgurukaba and Bindal people, and recognises their continuing connection to land, 
              sea and community. We pay our respects to their Elders past and present and extend that 
              respect to all Aboriginal and Torres Strait Islander peoples today.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-border/20 pt-6 text-center space-y-2">
          <p className="text-xs text-muted-foreground">
            © 2026 My Aussie Guide — Curated by Duncan Ross, Townsville Local. Operated by DKR Sales (ABN 63 824 596 227)
          </p>
          <p className="text-xs text-muted-foreground">
            Townsville's trusted source for beaches, food, events and local tips.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
