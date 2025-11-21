import { Link } from "react-router-dom";
import logo from "@/assets/duncans-guide-logo.webp";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <nav className="container mx-auto px-4 py-3">
        {/* CHANGED: py-4 to py-3 to reduce vertical padding */}
        <div className="flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            {/* CHANGED: h-32 to h-16 to reduce logo height */}
            <img src={logo} alt="Duncan's Guide" className="h-16" />
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/history"
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
