import { Link } from "react-router-dom";
import logo from "@/assets/duncans-guide-logo.webp";
import HeaderWeather from "@/components/HeaderWeather";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            to="/townsville" 
            className="hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <img
  src={logo}
  alt="Duncan's Guide"
  className="h-32 sm:h-40 md:h-48 w-auto min-w-[220px] sm:min-w-[260px] md:min-w-[300px]"
/>

          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link
              to="/townsville"
              className="text-sm md:text-base text-gray-800 hover:text-foreground transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/townsville/history"
              className="text-sm md:text-base text-gray-800 hover:text-foreground transition-colors font-medium hidden md:inline"
            >
              History
            </Link>
            <Link
              to="/townsville/things-to-do"
              className="text-sm md:text-base text-gray-800 hover:text-foreground transition-colors font-medium hidden lg:inline"
            >
              Things to Do
            </Link>
            <Link
              to="/townsville/beaches"
              className="text-sm md:text-base text-gray-800 hover:text-foreground transition-colors font-medium hidden lg:inline"
            >
              Beaches
            </Link>
            <Link
              to="/townsville/food"
              className="text-sm md:text-base text-gray-800 hover:text-foreground transition-colors font-medium hidden xl:inline"
            >
              Food & Drink
            </Link>
            <Link
              to="/townsville/local-tips"
              className="text-sm md:text-base text-gray-800 hover:text-foreground transition-colors font-medium hidden xl:inline"
            >
              Local Tips
            </Link>
            <Link
              to="/townsville/accommodation"
              className="text-sm md:text-base text-gray-800 hover:text-foreground transition-colors font-medium hidden xl:inline"
            >
              Accommodation
            </Link>
            <Link
              to="/townsville/events"
              className="text-sm md:text-base text-gray-800 hover:text-foreground transition-colors font-medium hidden xl:inline"
            >
              Events
            </Link>

            <HeaderWeather />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
