import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/myaussieguide-logo.png";
import HeaderWeather from "@/components/HeaderWeather";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/townsville", label: "Home" },
  { to: "/townsville/history", label: "History" },
  { to: "/townsville/things-to-do", label: "Things to Do" },
  { to: "/townsville/beaches", label: "Beaches" },
  { to: "/townsville/food", label: "Food & Drink" },
  { to: "/townsville/local-tips", label: "Local Tips" },
  { to: "/townsville/accommodation", label: "Accommodation" },
  { to: "/townsville/events", label: "Events" },
  { to: "/townsville/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            to="/townsville" 
            className="hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <img
              src={logo}
              alt="MyAussieGuide"
              className="h-32 sm:h-40 md:h-48 w-auto min-w-[220px] sm:min-w-[260px] md:min-w-[300px]"
              style={{ objectFit: "contain" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.filter(link => link.to !== "/townsville/contact").map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-base text-gray-800 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/townsville/contact">
              <Button variant="outline" size="sm" className="rounded-full px-5 font-medium border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                Contact
              </Button>
            </Link>
            <HeaderWeather />
          </div>

          {/* Mobile Navigation */}
          <div className="flex xl:hidden items-center gap-3">
            <HeaderWeather />
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
                    {navLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setOpen(false)}
                        className="flex items-center px-6 py-3 text-base font-medium text-gray-800 hover:bg-muted hover:text-primary transition-colors"
                      >
                        {link.label}
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

export default Header;
