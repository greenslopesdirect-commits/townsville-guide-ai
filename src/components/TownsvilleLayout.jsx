import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Assuming lucide-react is available

// --- Header Component (Self-contained) ---
const CustomHeader = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const location = useLocation();

    const navItems = [
        { name: "Home", path: "/townsville" },
        { name: "History", path: "/townsville/history" },
        { name: "Things to Do", path: "/townsville/things-to-do" },
        { name: "Beaches", path: "/townsville/beaches" },
        { name: "Food & Drink", path: "/townsville/food" },
        { name: "Local Tips", path: "/townsville/local-tips" },
        { name: "Accommodation", path: "/townsville/accommodation" },
        { name: "Events", path: "/townsville/events" },
    ];

    const getLinkClass = (path) => 
        location.pathname === path
            ? "font-bold text-blue-700 border-b-2 border-blue-700"
            : "text-gray-600 hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition duration-150";

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Site Title */}
                    <Link to="/townsville" className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
                        <span className="text-blue-600">Townsville</span> Guide
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6">
                        {navItems.map(item => (
                            <Link 
                                key={item.name} 
                                to={item.path} 
                                className={`text-sm py-1 ${getLinkClass(item.path)}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-gray-50 border-t border-gray-200">
                    <nav className="flex flex-col p-4 space-y-2">
                        {navItems.map(item => (
                            <Link 
                                key={item.name} 
                                to={item.path} 
                                className={`block px-3 py-2 text-base rounded-md ${getLinkClass(item.path)}`}
                                onClick={() => setIsOpen(false)} // Close menu on click
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

// --- Footer Component (Self-contained) ---
const CustomFooter = () => {
    const footerLinks = [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Use", path: "/terms-of-use" },
        { name: "Affiliate Disclosure", path: "/affiliate-disclosure" },
        { name: "Cookie Policy", path: "/cookie-policy" },
    ];
    
    return (
        <footer className="bg-gray-800 text-white mt-auto py-6">
            <div className="container mx-auto px-4 max-w-7xl text-center">
                <div className="flex flex-wrap justify-center space-x-4 mb-3 text-sm">
                    {footerLinks.map(link => (
                        <Link 
                            key={link.name} 
                            to={link.path} 
                            className="hover:text-blue-400 transition duration-150"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Townsville Guide. All rights reserved.
                </p>
            </div>
        </footer>
    );
};


// --- TownsvilleLayout Component (Main Export) ---
const TownsvilleLayout = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Render the consistent Header */}
        <CustomHeader />
        
        {/* The Outlet renders the content of the matching child route. */}
        <main className="flex-grow pt-20"> 
          <Outlet />
        </main>
        
        {/* Render the consistent Footer */}
        <CustomFooter />
      </div>
    </>
  );
};

export default TownsvilleLayout;
