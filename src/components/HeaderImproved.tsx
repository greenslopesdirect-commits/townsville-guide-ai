import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, ChevronDown } from "lucide-react";
import logo from "@/assets/townsvilleguide-logo.png";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface NavLinkItem {
  to: string;
  label: string;
}

interface NavGroup {
  label: string;
  items: NavLinkItem[];
}

// Desktop: a few most-used links, three grouped dropdowns, then Partner With Us and Contact.
// Home is the logo on desktop and the first entry in the mobile menu.
const HOME_LINK: NavLinkItem = { to: "/", label: "Home" };
const PRIMARY_LINKS: NavLinkItem[] = [
  { to: "/things-to-do", label: "Things to Do" },
  { to: "/beaches", label: "Beaches" },
  { to: "/events", label: "Events" },
  { to: "/guides/magnetic-island-day-trip", label: "Magnetic Island" },
];
const NAV_GROUPS: NavGroup[] = [
  {
    label: "Explore",
    items: [
      { to: "/food", label: "Food & Drink" },
      { to: "/nature", label: "Nature & Walks" },
      { to: "/shopping", label: "Shopping" },
      { to: "/history", label: "History" },
    ],
  },
  {
    label: "Plan Your Trip",
    items: [
      { to: "/first-time-in-townsville", label: "First Time Visitors" },
      { to: "/accommodation", label: "Accommodation" },
      { to: "/accessible-townsville", label: "Accessibility Guide" },
    ],
  },
  {
    label: "Living Here",
    items: [
      { to: "/directory", label: "Directory" },
      { to: "/suburbs", label: "Suburbs" },
      { to: "/useful-contacts", label: "Useful Contacts" },
    ],
  },
];
const END_LINKS: NavLinkItem[] = [
  { to: "/advertise", label: "Partner With Us" },
  { to: "/contact", label: "Contact" },
];

const HeaderImproved = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  // The group last opened by a click or tap. Hovering opens a group too, so a click on a group that
  // is already open from hover must keep it open instead of toggling it shut.
  const pinnedRef = useRef<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close any open dropdown on route change
  useEffect(() => {
    pinnedRef.current = null;
    setDropdownOpen(null);
  }, [location.pathname]);

  // Close when clicking or tapping outside the desktop nav
  useEffect(() => {
    if (!dropdownOpen) return;
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        pinnedRef.current = null;
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [dropdownOpen]);

  const isActive = (path: string) => location.pathname === path;

  const isGroupActive = (group: NavGroup) => group.items.some((i) => isActive(i.to));

  const clearCloseTimer = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
  };

  const handleMouseEnter = (label: string) => {
    clearCloseTimer();
    setDropdownOpen(label);
  };

  const handleMouseLeave = () => {
    clearCloseTimer();
    dropdownTimeoutRef.current = setTimeout(() => {
      pinnedRef.current = null;
      setDropdownOpen(null);
    }, 150);
  };

  const handleGroupClick = (label: string) => {
    if (dropdownOpen === label && pinnedRef.current === label) {
      pinnedRef.current = null;
      setDropdownOpen(null);
    } else {
      pinnedRef.current = label;
      setDropdownOpen(label);
    }
  };

  // Esc closes the dropdown and returns focus to its button
  const handleGroupKeyDown = (e: React.KeyboardEvent, label: string) => {
    if (e.key === "Escape") {
      pinnedRef.current = null;
      setDropdownOpen(null);
      triggerRefs.current[label]?.focus();
    }
  };

  const desktopLinkClass = (active: boolean) =>
    cn(
      "text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-1",
      active ? "text-primary border-b-2 border-primary pb-1" : "text-gray-700 hover:text-primary"
    );

  const mobileLinkClass = (active: boolean) =>
    cn(
      "flex items-center px-6 py-3 text-base font-medium transition-colors",
      active ? "text-primary bg-primary/5" : "text-gray-800 hover:bg-muted hover:text-primary"
    );

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
          <Link to="/" className="hover:opacity-80 transition-opacity flex-shrink-0">
            {/* ✅ NO NEGATIVE MARGINS */}
            <img
              src={logo}
              alt="Townsville Guide"
              className="h-16 md:h-20"
            />
          </Link>

          {/* Desktop Navigation */}
          <div ref={navRef} className="hidden lg:flex items-center gap-6">
            {PRIMARY_LINKS.map((item) => (
              <Link key={item.to} to={item.to} className={desktopLinkClass(isActive(item.to))}>
                {item.label}
              </Link>
            ))}

            {NAV_GROUPS.map((group) => {
              const isOpen = dropdownOpen === group.label;
              return (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(group.label)}
                  onMouseLeave={handleMouseLeave}
                  onKeyDown={(e) => handleGroupKeyDown(e, group.label)}
                >
                  <button
                    type="button"
                    ref={(el) => {
                      triggerRefs.current[group.label] = el;
                    }}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onClick={() => handleGroupClick(group.label)}
                    className={desktopLinkClass(isGroupActive(group))}
                  >
                    {group.label}
                    <ChevronDown
                      className={cn("w-3.5 h-3.5 transition-transform", isOpen && "rotate-180")}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div className="absolute top-full left-0 pt-1 z-50">
                      <div className="w-56 bg-white rounded-lg shadow-lg border border-border py-2">
                        {group.items.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            className={cn(
                              "block px-4 py-2 text-sm whitespace-nowrap transition-colors",
                              isActive(sub.to)
                                ? "text-primary bg-primary/5 font-medium"
                                : "text-gray-700 hover:text-primary hover:bg-muted"
                            )}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {END_LINKS.map((item) => (
              <Link key={item.to} to={item.to} className={desktopLinkClass(isActive(item.to))}>
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
                    {[HOME_LINK, ...PRIMARY_LINKS].map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className={mobileLinkClass(isActive(item.to))}
                      >
                        {item.label}
                      </Link>
                    ))}

                    {NAV_GROUPS.map((group) => (
                      <div key={group.label} className="mt-2">
                        <p className="px-6 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {group.label}
                        </p>
                        {group.items.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            onClick={() => setOpen(false)}
                            className={mobileLinkClass(isActive(sub.to))}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    ))}

                    <div className="mt-2 border-t border-border pt-2">
                      {END_LINKS.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className={mobileLinkClass(isActive(item.to))}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
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
