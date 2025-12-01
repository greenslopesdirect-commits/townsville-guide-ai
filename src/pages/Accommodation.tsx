import React, { useEffect } from 'react';
import { MapPin, Home } from "lucide-react";

// --- Custom Head Component to replace react-helmet ---
// This component manually injects the title, meta, and JSON-LD scripts into the document head.
const CustomHead = ({ title, description, schema }) => {
    useEffect(() => {
        // 1. Update Title
        document.title = title;

        // 2. Update Description Meta Tag
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = description;

        // 3. Inject Schema Scripts
        const scriptElements = [];
        schema.forEach((s, index) => {
            let script = document.createElement('script');
            script.setAttribute('type', 'application/ld+json');
            script.textContent = s;
            script.id = `schema-script-${index}`;
            document.head.appendChild(script);
            scriptElements.push(script);
        });

        // Cleanup function
        return () => {
            scriptElements.forEach(script => script.remove());
        };
    }, [title, description, schema]);

    return null; // This component renders nothing itself
};


// --- Placeholder Components (Required for compilation) ---
const Button = ({ children, variant, size, onClick, asChild, className, to, href, target, rel }) => {
    const defaultClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variantClasses = variant === 'outline' ? "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 shadow-sm" : "bg-blue-600 text-white hover:bg-blue-700 shadow-md";
    const sizeClasses = size === 'lg' ? "px-6 py-3 text-lg" : "px-4 py-2 text-sm";
    
    const Component = asChild ? 'a' : 'button';
    const props = asChild ? { href, to, target, rel } : { onClick };

    // Simple Link mock for the environment
    const Link = ({ to, children }) => <a href="#" onClick={(e) => { e.preventDefault(); console.log(`Navigating to ${to}`); }}>{children}</a>;

    if (to) {
        return <Link to={to} className={`${defaultClasses} ${variantClasses} ${sizeClasses} ${className}`}>{children}</Link>;
    }
    
    return (
        <Component 
            className={`${defaultClasses} ${variantClasses} ${sizeClasses} ${className}`} 
            {...props}
        >
            {children}
        </Component>
    );
};

// Simple Mock Header
const Header = () => (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow-md z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center max-w-4xl">
            <a href="#" className="text-xl font-bold text-blue-600 flex items-center gap-2">
                <Home className="w-5 h-5" /> Duncan's Guide
            </a>
            <nav>
                <a href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600">Home</a>
            </nav>
        </div>
    </header>
);

// Simple Mock Footer
const Footer = () => (
    <footer className="bg-gray-100 py-6 border-t">
        <div className="container mx-auto px-4 max-w-4xl text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Townsville Guide. All rights reserved.
        </div>
    </footer>
);

// --- Schema Definitions ---

const webPageSchema = `
{
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Townsville Accommodation Guide",
    "url": "https://duncansguide.com/accommodation",
    "description": "Guide to Townsville's best accommodation including hotels, resorts, holiday parks, apartments and budget-friendly stays.",
    "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://duncansguide.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Accommodation",
                "item": "https://duncansguide.com/accommodation"
            }
        ]
    }
}
`;

const faqSchema = `
{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Where should I stay in Townsville?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Townsville offers a range of accommodation options including beachfront hotels on The Strand, luxury resorts, family-friendly holiday parks, and serviced apartments close to the CBD."
            }
        },
        {
            "@type": "Question",
            "name": "What is the best area to stay in Townsville for families?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Families often stay near The Strand or in family-friendly holiday parks with pools, playgrounds and cabins offering more space."
            }
        },
        {
            "@type": "Question",
            "name": "Are there dog-friendly accommodation options in Townsville?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, several holiday parks, Airbnb properties and some boutique hotels in Townsville offer pet-friendly accommodation. Always check individual pet policies."
            }
        },
        {
            "@type": "Question",
            "name": "What is the best luxury accommodation in Townsville?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Luxury travellers often choose resorts and premium hotels along The Strand or riverfront apartment hotels near the CBD, offering ocean views and modern facilities."
            }
        },
        {
            "@type": "Question",
            "name": "Are there budget-friendly places to stay in Townsville?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Townsville has many affordable motels, backpacker hostels and budget hotels located close to the city centre and transport options."
            }
        }
    ]
}
`;


// --- The Main Accommodation Component (Renamed to App for Execution) ---
const App = () => {
    
    // Schema scripts array passed to the CustomHead component
    const schemaScripts = [webPageSchema, faqSchema];

    // This handler will only work if the input field is elsewhere in the main application layout,
    // as it targets an ID that is not defined within this component's JSX.
    const handleAskAI = () => {
        const input = document.getElementById("townsville-ai-input");
        if (input) {
            input.scrollIntoView({ behavior: "smooth", block: "center" });
            setTimeout(() => {
                input.classList.add("ring-2", "ring-blue-600");
                setTimeout(() => {
                    input.classList.remove("ring-2", "ring-blue-600");
                }, 2000);
            }, 500);
        } else {
            console.log("AI Input field not found (ID: townsville-ai-input)");
        }
    };

    return (
        <>
            <CustomHead 
                title="Townsville Accommodation Guide"
                description="Guide to Townsville's best accommodation including hotels, resorts, holiday parks, apartments and budget-friendly stays."
                schema={schemaScripts}
            />

            <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
                <Header />
                
                <main className="flex-grow pt-20">
                    <div className="container mx-auto px-4 py-12 max-w-4xl">
                        
                        {/* Intro */}
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
                            Townsville Accommodation Guide
                        </h1>
                        
                        <p className="text-lg text-gray-600 mb-12 leading-relaxed border-l-4 border-blue-500 pl-4 bg-white p-4 rounded-lg shadow-sm">
                            Townsville offers a wide range of accommodation, from beachfront hotels to serviced apartments, budget options and family-friendly holiday parks. This guide highlights the best places to stay depending on your budget, travel style and preferred location.
                        </p>

                        {/* Section 1: The Ville Resort-Casino */}
                        <section className="mb-12 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                            <h2 className="text-3xl font-bold mb-4 text-blue-600">
                                The Ville Resort–Casino (Luxury & Ocean Views)
                            </h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Townsville's most premium accommodation option, featuring ocean views, lagoon pool and on-site dining.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <p className="font-semibold text-gray-800 mb-2">Highlights:</p>
                                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                        <li>Oceanfront rooms</li>
                                        <li>Resort pool with swim-up bar</li>
                                        <li>On-site restaurants and casino</li>
                                        <li>Near The Strand and Breakwater</li>
                                    </ul>
                                </div>
                                <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                                    <p className="font-semibold text-blue-700 mb-1">Local Tip:</p>
                                    <p className="text-blue-600">Great for couples, special occasions and relaxation-focused stays.</p>
                                </div>
                            </div>
                            <Button variant="outline" size="sm" asChild className="mt-6">
                                <a 
                                    href="https://www.google.com/maps/search/?api=1&query=The+Ville+Resort+Casino+Townsville" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-50"
                                >
                                    <MapPin className="w-4 h-4 text-blue-500" />
                                    View on Map
                                </a>
                            </Button>
                        </section>

                        {/* Section 2: Aquarius on the Beach */}
                        <section className="mb-12 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                            <h2 className="text-3xl font-bold mb-4 text-blue-600">
                                Aquarius on the Beach (Best Value for Beachfront)
                            </h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                A popular budget-friendly beachfront hotel offering uninterrupted ocean views.
                            </p>
                            <div className="mb-4">
                                <p className="font-semibold text-gray-800 mb-2">Highlights:</p>
                                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                    <li>All rooms face the ocean</li>
                                    <li>Directly opposite The Strand</li>
                                    <li>Some rooms include kitchenettes</li>
                                    <li>Good value year-round</li>
                                </ul>
                            </div>
                            <Button variant="outline" size="sm" asChild>
                                <a 
                                    href="https://www.google.com/maps/search/?api=1&query=Aquarius+on+the+Beach+Townsville" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-50"
                                >
                                    <MapPin className="w-4 h-4 text-blue-500" />
                                    View on Map
                                </a>
                            </Button>
                        </section>

                        {/* Section 3: Hotel Grand Chancellor */}
                        <section className="mb-12 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                            <h2 className="text-3xl font-bold mb-4 text-blue-600">
                                Hotel Grand Chancellor (City Centre Convenience)
                            </h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                A modern high-rise hotel in the CBD with excellent rooftop views.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <p className="font-semibold text-gray-800 mb-2">Highlights:</p>
                                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                        <li>Rooftop pool with city views</li>
                                        <li>Close to restaurants and shops</li>
                                        <li>Modern rooms and facilities</li>
                                    </ul>
                                </div>
                                <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                                    <p className="font-semibold text-blue-700 mb-1">Local Tip:</p>
                                    <p className="text-blue-600">Ideal if you want to walk everywhere in the city.</p>
                                </div>
                            </div>
                            <Button variant="outline" size="sm" asChild className="mt-6">
                                <a 
                                    href="https://www.google.com/maps/search/?api=1&query=Hotel+Grand+Chancellor+Townsville" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-50"
                                >
                                    <MapPin className="w-4 h-4 text-blue-500" />
                                    View on Map
                                </a>
                            </Button>
                        </section>

                        {/* Section 4: Quest Townsville */}
                        <section className="mb-12 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                            <h2 className="text-3xl font-bold mb-4 text-blue-600">
                                Quest Townsville (Serviced Apartments)
                            </h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Great for families, longer stays or business travellers needing space and kitchen facilities.
                            </p>
                            <div className="mb-4">
                                <p className="font-semibold text-gray-800 mb-2">Highlights:</p>
                                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                    <li>Marina views</li>
                                    <li>Kitchenettes</li>
                                    <li>Laundry facilities</li>
                                    <li>Spacious rooms</li>
                                </ul>
                            </div>
                            <Button variant="outline" size="sm" asChild>
                                <a 
                                    href="https://www.google.com/maps/search/?api=1&query=Quest+Townsville" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-50"
                                >
                                    <MapPin className="w-4 h-4 text-blue-500" />
                                    View on Map
                                </a>
                            </Button>
                        </section>
                        
                        {/* Section 5: Oaks Townsville */}
                        <section className="mb-12 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                            <h2 className="text-3xl font-bold mb-4 text-blue-600">
                                Oaks Townsville Gateway Suites (City & River Views)
                            </h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Stylish serviced apartments located near the river and CBD.
                            </p>
                            <div className="mb-4">
                                <p className="font-semibold text-gray-800 mb-2">Highlights:</p>
                                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                    <li>Large rooms and suites</li>
                                    <li>River or city views</li>
                                    <li>Pool and modern amenities</li>
                                </ul>
                            </div>
                            <Button variant="outline" size="sm" asChild>
                                <a 
                                    href="https://www.google.com/maps/search/?api=1&query=Oaks+Townsville+Gateway+Suites" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-50"
                                >
                                    <MapPin className="w-4 h-4 text-blue-500" />
                                    View on Map
                                </a>
                            </Button>
                        </section>

                        {/* Section 6: BIG4 Rowes Bay */}
                        <section className="mb-12 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                            <h2 className="text-3xl font-bold mb-4 text-blue-600">
                                BIG4 Rowes Bay Holiday Park (Family-Friendly & Budget)
                            </h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                A great option for families, campers and those wanting a relaxed beachfront location.
                            </p>
                            <div className="mb-4">
                                <p className="font-semibold text-gray-800 mb-2">Highlights:</p>
                                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                                    <li>Cabins and caravan sites</li>
                                    <li>Swimming pool</li>
                                    <li>Opposite the beach</li>
                                    <li>Playground and family facilities</li>
                                </ul>
                            </div>
                            <Button variant="outline" size="sm" asChild>
                                <a 
                                    href="https://www.google.com/maps/search/?api=1&query=BIG4+Rowes+Bay+Holiday+Park+Townsville" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-50"
                                >
                                    <MapPin className="w-4 h-4 text-blue-500" />
                                    View on Map
                                </a>
                            </Button>
                        </section>

                        {/* Section 7: Best Areas to Stay */}
                        <section className="mb-12 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                Best Areas to Stay in Townsville
                            </h2>
                            
                            <div className="space-y-6">
                                <div className="p-3 border-b">
                                    <h3 className="text-xl font-bold text-blue-600 mb-1">The Strand</h3>
                                    <p className="text-gray-600">Best for ocean views, walking, beaches, cafés.</p>
                                </div>
                                
                                <div className="p-3 border-b">
                                    <h3 className="text-xl font-bold text-blue-600 mb-1">CBD / Palmer Street</h3>
                                    <p className="text-gray-600">Best for restaurants, events and convenience.</p>
                                </div>
                                
                                <div className="p-3 border-b">
                                    <h3 className="text-xl font-bold text-blue-600 mb-1">Magnetic Island</h3>
                                    <p className="text-gray-600">Best for nature, beaches and relaxation.</p>
                                </div>
                                
                                <div className="p-3">
                                    <h3 className="text-xl font-bold text-blue-600 mb-1">Suburbs (Riverside, Douglas, Annandale)</h3>
                                    <p className="text-gray-600">Best for longer stays and families.</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 8: Ask the AI */}
                        <section className="mb-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
                            <h2 className="text-3xl font-bold mb-4 text-blue-700">
                                Need personalized help? Ask the AI
                            </h2>
                            <p className="text-blue-600 mb-4 leading-relaxed">
                                Your AI guide can recommend the best places to stay based on your specific needs:
                            </p>
                            <div className="mb-6">
                                <ul className="list-disc list-inside text-blue-600 space-y-1 ml-4 mb-4">
                                    <li>Budget</li>
                                    <li>Family size</li>
                                    <li>Preferred location</li>
                                    <li>Transport needs</li>
                                    <li>Accessibility</li>
                                </ul>
                                <p className="font-semibold text-blue-700 mb-2">Try asking in the chat:</p>
                                <ul className="list-disc list-inside text-blue-600 space-y-1 ml-4">
                                    <li>"Where should I stay in Townsville with kids?"</li>
                                    <li>"What's the best hotel near The Strand?"</li>
                                    <li>"Which hotels have the best ocean views?"</li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <Button 
                                    onClick={handleAskAI} 
                                    size="lg" 
                                    className="gap-2 bg-blue-600 hover:bg-blue-700 shadow-xl"
                                >
                                    Ask the AI Guide
                                </Button>
                            </div>
                        </section>

                        {/* Back to Home */}
                        <div className="text-center mt-12">
                            <Button variant="outline" size="lg" to="/">
                                <Home className="w-5 h-5 mr-2" /> Back to Home
                            </Button>
                        </div>

                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default App;
