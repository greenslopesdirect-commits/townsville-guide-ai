import { Link } from "react-router-dom";
import logo from "@/assets/duncans-guide-logo.webp";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <nav className="container mx-auto px-4 py-3">
        {/* Padding py-3 maintains the small header bar height */}
        <div className="flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img
              src={logo}
              alt="Duncan's Guide"
              // INCREASED SIZE (h-24) and ADDED NEGATIVE MARGINS (-my-4)
              className="h-24 -my-4"
            />
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/history"
              className="text-sm md:text-base text-gray-800 hover:text-foreground transition-colors font-medium"
            >
              {/* CHANGED: 'History' to 'Townsville's History' */}
              Townsville's History
            </Link>
            <Link
              to="/things-to-do"
              className="text-sm md:text-base text-gray-800 hover:text-foreground transition-colors font-medium"
            >
              Things to Do
            </Link>
            <Link
              to="/beaches"
              className="text-sm md:text-base text-gray-800 hover:text-foreground transition-colors font-medium"
            >
              Beaches
            </Link>
            <Link
              to="/food"
              className="text-sm md:text-base text-gray-800 hover:text-foreground transition-colors font-medium"
            >
              Food & Drink
            </Link>
            <Link
              to="/local-tips"
              className="text-sm md:text-base text-gray-800 hover:text-foreground transition-colors font-medium"
            >
              Local Tips
            </Link>
            <Link
              to="/accommodation"
              className="text-sm md:text-base text-gray-800 hover:text-foreground transition-colors font-medium"
            >
              Accommodation
            </Link>
            <Link
              to="/events"
              className="text-sm md:text-base text-gray-800 hover:text-foreground transition-colors font-medium"
            >
              Events
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
