import { Link } from "react-router-dom";
import logo from "@/assets/duncans-guide-logo.webp";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <nav className="container mx-auto px-4 py-3">
        {/* Padding py-3 maintains the small header bar height */}
        <div className="flex items-center justify-between">
          {/* UPDATED: Logo links to the new home path /townsville */}
          <Link to="/townsville" className="hover:opacity-80 transition-opacity">
            <img
              src={logo}
              alt="Duncan's Guide"
              // INCREASED SIZE (h-24) and ADDED NEGATIVE MARGINS (-my-4)
              className="h-24 -my-4"
            />
          </Link>

          <div className="flex items-center gap-6">
            {/* UPDATED: Home links to the new home path /townsville */}
            <Link
              to="/townsville"
              className="text-sm md:text-base text-gray-800 hover:text-foreground transition-colors font-medium"
            >
              Home
            </Link>
            {/* UPDATED: History is now /townsville/history */}
            <Link
              to="/townsville/history"
              className="text-sm md:text-base text-gray-800 hover:text-foreground transition-colors font-medium"
            >
              Townsville's History
            </Link>
            {/* UPDATED: Things to Do is now /townsville/things-to-do */}
            <Link
              to="/townsville/things-to-do"
              className="text-sm md:text-base text-gray-800 hover:text-foreground transition-colors font-medium"
            >
              Things to Do
            </Link>
            {/* UPDATED: Beaches is now /townsville/beaches */}
            <Link
              to="/townsville/beaches"
              className="text-sm md:text-base text-gray-800 hover:text-foreground transition-colors font-medium"
            >
              Beaches
            </Link>
            {/* UPDATED: Food is now /townsville/food */}
            <Link
              to="/townsville/food"
              className="text-sm md:text-base text-gray-800 hover:text-foreground transition-colors font-medium"
            >
              Food & Drink
            </Link>
            {/* UPDATED: Local Tips is now /townsville/local-tips */}
            <Link
              to="/townsville/local-tips"
              className="text-sm md:text-base text-gray-800 hover:text-foreground transition-colors font-medium"
            >
              Local Tips
            </Link>
            {/* UPDATED: Accommodation is now /townsville/accommodation */}
            <Link
              to="/townsville/accommodation"
              className="text-sm md:text-base text-gray-800 hover:text-foreground transition-colors font-medium"
            >
              Accommodation
            </Link>
            {/* UPDATED: Events is now /townsville/events */}
            <Link
              to="/townsville/events"
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
