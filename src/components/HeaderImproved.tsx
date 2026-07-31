import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, ChevronDown } from "lucide-react";
import logo from "@/assets/myaussieguide-logo.png";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface NavItem {
  to: string;
  label: string;
  subItems?: { to: string; label: string }[];
}

const HeaderImproved = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { to: "/", label: "Home" },
    { to: "/things-to-do", label: "Things to Do" },
    { to: "/beaches", label: "Beaches" },
    { to: "/nature", label: "Nature & Walks" },
    { to: "/food", label: "Food & Drink" },
    { to: "/shopping", label: "Shopping" },
    { to: "/accommodation", label: "Accommodation" },
    { to: "/suburbs", label: "Suburbs" },
    { to: "/events", label: "Events" },
    {
      to: "/local-tips",
      label: "Local Tips",
      subItems: [
        { to: "/accessible-townsville", label: "Accessibility Guide" },
        { to: "/useful-contacts", label: "Useful Contacts" },
      ],
    },
    { to: "/history", label: "History" },
    { to: "/advertise", label: "Partner With Us" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path;
  };

  const isSubItemActive = (subItems?: { to: string }[]) => {
    if (!subItems) return false;
    return subItems.some((sub) => location.pathname === sub.to);
  };

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setDropdownOpen(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(null);
    }, 150);
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
              alt="Townsville Guide"
              className="h-16 md:h-20"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => item.subItems && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.to}
                  className={cn(
                    "text-sm font-medium transition-colors flex items-center gap-1",
                    isActive(item.to) || isSubItemActive(item.subItems)
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-gray-700 hover:text-primary"
                  )}
                >
                  {item.label}
                  {item.subItems && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>
                {item.subItems && dropdownOpen === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-border py-2 z-50">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.to}
                        to={sub.to}
                        className={cn(
                          "block px-4 py-2 text-sm transition-colors",
                          isActive(sub.to)
                            ? "text-primary bg-primary/5 font-medium"
                            : "text-gray-700 hover:text-primary hover:bg-muted"
                        )}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
                      <div key={item.to}>
                        <Link
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
                        {item.subItems && (
                          <div className="pl-4 border-l-2 border-border ml-6 mr-4 space-y-1">
                            {item.subItems.map((sub) => (
                              <Link
                                key={sub.to}
                                to={sub.to}
                                onClick={() => setOpen(false)}
                                className={cn(
                                  "flex items-center px-6 py-2 text-sm font-medium transition-colors rounded-md",
                                  isActive(sub.to)
                                    ? "text-primary bg-primary/5"
                                    : "text-gray-600 hover:bg-muted hover:text-primary"
                                )}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
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
