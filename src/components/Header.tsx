import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors">
            Duncan's Guide
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/history" 
              className="text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors font-medium"
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
