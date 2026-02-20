import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import logo from "@/assets/myaussieguide-logo.png";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const HeaderImproved = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/things-to-do", label: "Things to Do" },
    { to: "/beaches", label: "Beaches" },
    { to: "/food", label: "Food & Drink" },
    { to: "/accommodation", label: "Accommodation" },
    { to: "/events", label: "Events" },
    { to: "/local-tips", label: "Local Tips" },
    { to: "/history", label: "History" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
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
          <Link to="/" className="hover:opacity-80 transition-opacity">
            {/* ✅ NO NEGATIVE MARGINS */}
            <img
              src={logo}
              alt="My Aussie Guide – Townsville"
              className="h-16 md:h-20"
            />
          </Link>

          {/* Desktop Navigation */}
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

          {/* Mobile Navigation */}
          <div className="flex lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                    <span className="font-semibold text-lg">Menu</span>
                  </div>
                  <nav className="flex-1 overflow-y-auto py-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center px-6 py-3 text-base font-medium transition-colors",
                          isActive(item.to)
                            ? "text-primary bg-primary/5"
                            : "text-gray-800 hover:bg-muted hover:text-primary"
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderImproved;
