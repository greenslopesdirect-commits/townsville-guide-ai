import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Waves, Sunset, Dog, AlertTriangle, Bot } from "lucide-react";

const Beaches = () => {
  return (
    <>
      <Helmet>
        <title>Best Beaches in Townsville | Duncan's Guide</title>
        <meta name="description" content="Explore the beautiful beaches, from The Strand to Magnetic Island." />
        <link rel="canonical" href="https://www.myaussieguide.com.au/townsville/beaches" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Back Button */}
            <Link to="/townsville"> {/* 🔴 FIXED: Link to /townsville */}
              <Button 
                variant="ghost" 
                className="mb-6 group"
                aria-label="Back to home"
              >
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>

            {/* Page Header */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Best Beaches in Townsville – Local Coastal Guide
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Townsville has a relaxed coastal lifestyle with calm swimming spots, long foreshore walks and easy access to Magnetic Island. Whether you're looking for a family-friendly swimming area, a quiet beach for sunset, or dog-friendly coastal walks, this guide covers the best beaches in and around Townsville.
              </p>
            </header>

            {/* Content Sections (rest of the content is unchanged) */}
            <div className="space-y-12">
              {/* The Strand Beach ... */}

              {/* ... (all beach sections unchanged) ... */}

              {/* Ask the AI for Recommendations */}
              <section>
                {/* ... (AI header/content) ... */}
                <Link to="/townsville"> {/* 🔴 FIXED: Link to /townsville */}
                  <Button className="gap-2" aria-label="Open AI chat assistant">
                    <Bot className="w-5 h-5" />
                    Ask the AI Guide
                  </Button>
                </Link>
              </section>
            </div>

            {/* Back to Home CTA */}
            <div className="mt-16 pt-8 border-t border-border text-center">
              <Link to="/townsville"> {/* 🔴 FIXED: Link to /townsville */}
                <Button variant="outline" size="lg" className="group" aria-label="Return to Duncan's Guide home page">
                  Return to Home
                  <ArrowLeft className="ml-2 w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Beaches;
