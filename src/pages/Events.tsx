import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const Events = () => {
  const handleAskAI = () => {
    const input = document.getElementById("townsville-ai-input");
    if (input) {
      input.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        input.classList.add("ring-2", "ring-primary");
        setTimeout(() => {
          input.classList.remove("ring-2", "ring-primary");
        }, 2000);
      }, 500);
    }
  };

  return (
    <>
      <Helmet>
        <title>Townsville Events & What's On - Festivals, Markets & Activities</title>
        <meta 
          name="description" 
          content="Discover events, festivals and activities in Townsville. From Strand Ephemera and NAFA to weekly markets, live music and family events." 
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-grow pt-20">
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            
            {/* Intro */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Townsville Events & What's On
            </h1>
            
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Townsville hosts a wide range of events throughout the year, from outdoor art festivals and cultural celebrations to major sporting events and weekly markets. This guide highlights the most popular annual and seasonal events, plus regular weekly activities you can enjoy at any time of year.
            </p>

            {/* Section 1: Strand Ephemera */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Strand Ephemera (Biennial Outdoor Sculpture Festival)
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Strand Ephemera is one of Northern Australia's most popular outdoor art events, featuring large-scale sculptures displayed along The Strand foreshore.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Highlights:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Dozens of sculptures across the beachfront</li>
                  <li>Family-friendly walks and photo spots</li>
                  <li>Night lighting displays</li>
                  <li>Free to attend</li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                <p className="text-muted-foreground">Go at sunset — the light is perfect for photos.</p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=The+Strand+Townsville" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </Button>
            </section>

            {/* Section 2: NAFA */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                North Australian Festival of Arts (NAFA)
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                NAFA transforms Townsville into a city-wide celebration of art, music, theatre and culture.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Highlights:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Live performances</li>
                  <li>Circus, comedy and music acts</li>
                  <li>Art exhibitions and workshops</li>
                  <li>Events across multiple venues</li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                <p className="text-muted-foreground">Check the program early — popular shows sell out fast.</p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Townsville+Civic+Theatre" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </Button>
            </section>

            {/* Section 3: Cultural Festival */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Townsville Cultural Festival
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                One of Queensland's most diverse multicultural festivals, celebrating international food, music and dance.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Highlights:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Live performances</li>
                  <li>Food stalls from many cultures</li>
                  <li>Family-friendly activities</li>
                  <li>Community atmosphere</li>
                </ul>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Townsville+Cricket+Grounds" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </Button>
            </section>

            {/* Section 4: Magnetic Island Race Week */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Magnetic Island Race Week
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                A major sailing event attracting competitors from across Australia. Set in the beautiful backdrop of Magnetic Island.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Highlights:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Yacht racing</li>
                  <li>Onshore celebrations</li>
                  <li>Sunset events</li>
                  <li>Stunning ocean scenery</li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                <p className="text-muted-foreground">Best viewing from Nelly Bay and Picnic Bay.</p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Magnetic+Island" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </Button>
            </section>

            {/* Section 5: Christmas Festival */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Townsville Christmas Festival (December)
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                A festive celebration featuring lights, music, markets and family activities.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Highlights:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Christmas lights</li>
                  <li>Kids' activities</li>
                  <li>Food stalls</li>
                  <li>Community performances</li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                <p className="text-muted-foreground">Go early to find parking during peak nights.</p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Townsville+CBD+Events+Precinct" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </Button>
            </section>

            {/* Section 6: Weekly Events */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Weekly Events & Markets
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Townsville has several recurring events that run all year round.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Popular Weekly Events:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Cotters Market (Sunday – Flinders Street)</li>
                  <li>Willows Rotary Markets (Sunday – Kirwan)</li>
                  <li>Strand Night Markets (monthly)</li>
                  <li>Riverway Movie Nights (seasonal)</li>
                </ul>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Flinders+Street+Markets+Townsville" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </Button>
            </section>

            {/* Section 7: Ask the AI */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Upcoming Events – Ask the AI
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Event schedules change frequently, so the built-in AI guide is the best way to check what's happening now.
              </p>
              <div className="mb-6">
                <p className="font-semibold text-foreground mb-2">Try asking questions like:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>"What events are on in Townsville this weekend?"</li>
                  <li>"Where are the markets today?"</li>
                  <li>"Is there live music tonight in Townsville?"</li>
                  <li>"Any free events for families today?"</li>
                </ul>
              </div>
              <p className="text-muted-foreground mb-6">
                The AI will suggest the best options based on your interests.
              </p>
              <div className="text-center">
                <Button onClick={handleAskAI} size="lg" className="gap-2">
                  Ask the AI Guide
                </Button>
              </div>
            </section>

            {/* Back to Home */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link to="/">← Back to Home</Link>
              </Button>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Events;
