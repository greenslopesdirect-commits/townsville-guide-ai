import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "@/assets/duncans-guide-logo.webp";
import { cn } from "@/lib/utils";

const HeaderImproved = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/townsville", label: "Home" },
    { to: "/townsville/history", label: "History" },
    { to: "/townsville/things-to-do", label: "Things to Do" },
    { to: "/townsville/beaches", label: "Beaches" },
    { to: "/townsville/food", label: "Food & Drink" },
    { to: "/townsville/local-tips", label: "Local Tips" },
    { to: "/townsville/accommodation", label: "Accommodation" },
    { to: "/townsville/events", label: "Events" },
  ];

  const isActive = (path: string) => {
    if (path === "/townsville") {
      return location.pathname === "/townsville" || location.pathname === "/";
    }
    return location.pathname === path;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white border-b border-border transition-shadow duration-300 h-20",
        scrolled && "shadow-md"
      )}
      style={{ maxHeight: '80px' }}
    >
      {/* ✅ LOCKED HEADER HEIGHT */}
      <nav className="container mx-auto h-20 px-4 flex items-center">
        <div className="flex items-center justify-between w-full">
          <Link to="/townsville" className="hover:opacity-80 transition-opacity">
            {/* ✅ NO NEGATIVE MARGINS */}
            <img
              src={logo}
              alt="Duncan's Guide to Townsville"
              className="h-12"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive(item.to)
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-gray-700 hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderImproved;
