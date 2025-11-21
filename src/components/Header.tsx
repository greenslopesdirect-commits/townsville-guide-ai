import { Link } from "react-router-dom";
import logo from "@/assets/duncans-guide-logo.webp";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-all duration-300 hover:scale-105">
            <img 
              src={logo} 
              alt="Duncan's Guide" 
              className="h-40 drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] drop-shadow-[0_0_50px_rgba(255,255,255,0.4)] drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]" 
            />
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/history"
              className="text-sm md:text-base text-white hover:text-foreground transition-colors font-medium"
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
