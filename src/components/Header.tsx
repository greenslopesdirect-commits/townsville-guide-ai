import { Link } from "react-router-dom";
import logo from "@/assets/duncans-guide-logo.webp";

const Header = () => {
  return (
    // CHANGED: Removed transparency/blur classes and set solid white background
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img src={logo} alt="Duncan's Guide" className="h-20" />
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/history"
              // CHANGED: text-muted-foreground is fine, but text-gray-800 is a clear dark alternative
              className="text-sm md:text-base text-gray-800 hover:text-foreground transition-colors font-medium"
            >
              History
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
