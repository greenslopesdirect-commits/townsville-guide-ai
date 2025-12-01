import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const FoodDrink = () => {
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
  <title>Best Food & Restaurants in Townsville - Local Dining Guide</title>
  <meta 
    name="description" 
    content="Discover the best restaurants, cafés and dining spots in Townsville. From waterfront dining on The Strand to modern Australian cuisine, find where locals eat in Townsville QLD." 
  />

  {/* WebPage Schema */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Food & Drink in Townsville",
      "url": "https://duncansguide.com/food-drink",
      "description": "Local guide to the best restaurants, cafés and dining experiences in Townsville, Queensland.",
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
            "name": "Food & Drink",
            "item": "https://duncansguide.com/food-drink"
          }
        ]
      }
    }
    `}
  </script>

  {/* ItemList Schema */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Townsville Restaurants & Cafés",
      "itemListOrder": "Ascending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "JAM Restaurant",
          "url": "https://duncansguide.com/food-drink#jam"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "A Touch of Salt",
          "url": "https://duncansguide.com/food-drink#salt"
        },
        {
          "@type": "ListItem",
          "position": 3",
          "name": "The Balcony",
          "url": "https://duncansguide.com/food-drink#balcony"
        },
        {
          "@type": "ListItem",
          "position": 4",
          "name": "Longboard Bar & Grill",
          "url": "https://duncansguide.com/food-drink#longboard"
        },
        {
          "@type": "ListItem",
          "position": 5",
          "name": "Juliette's Gelateria",
          "url": "https://duncansguide.com/food-drink#juliettes"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Hogwarts Café",
          "url": "https://duncansguide.com/food-drink#hogwarts"
        }
      ]
    }
    `}
  </script>

  {/* Restaurant Schema */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Townsville Dining",
      "itemListElement": [
        {
          "@type": "Restaurant",
          "name": "JAM Restaurant",
          "address": "1 Palmer St, South Townsville QLD",
          "servesCuisine": ["Modern Australian"],
          "url": "https://duncansguide.com/food-drink#jam"
        },
        {
          "@type": "Restaurant",
          "name": "A Touch of Salt",
          "address": "86–124 Ogden St, Townsville QLD",
          "servesCuisine": ["Modern Australian"],
          "url": "https://duncansguide.com/food-drink#salt"
        },
        {
          "@type": "Restaurant",
          "name": "Longboard Bar & Grill",
          "address": "The Strand, Townsville QLD",
          "servesCuisine": ["Burgers", "Seafood"],
          "url": "https://duncansguide.com/food-drink#longboard"
        },
        {
          "@type": "Restaurant",
          "name": "The Balcony",
          "address": "287 Flinders St, Townsville QLD",
          "servesCuisine": ["Australian", "Brunch"],
          "url": "https://duncansguide.com/food-drink#balcony"
        },
        {
          "@type": "Restaurant",
          "name": "Juliette's Gelateria",
          "address": "The Strand, Townsville QLD",
          "servesCuisine": ["Dessert"],
          "url": "https://duncansguide.com/food-drink#juliettes"
        }
      ]
    }
    `}
  </script>

</Helmet>


      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-grow pt-20">
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            
            {/* Intro */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Best Food & Restaurants in Townsville – Local Dining Guide
            </h1>
            
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Townsville's food scene blends relaxed North Queensland flavours with waterfront dining, casual cafés, modern restaurants and a growing bar culture. Whether you're after a sunset drink on The Strand, a quality dinner on Palmer Street, or a quick coffee by the beach, here are the best dining spots in and around Townsville.
            </p>

            {/* Section 1: JAM Restaurant */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                JAM Restaurant (Modern Australian Dining)
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                JAM (formerly JAM Corner) is one of Townsville's most awarded restaurants, known for creative dishes, local ingredients and a relaxed yet refined atmosphere.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Highlights:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Modern Australian menu</li>
                  <li>Excellent breakfasts and dinners</li>
                  <li>Seasonal produce and signature dishes</li>
                  <li>Riverside location on Palmer Street</li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                <p className="text-muted-foreground">Book ahead on weekends — especially dinner.</p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=JAM+Restaurant+Townsville" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </Button>
            </section>

            {/* Section 2: A Touch of Salt */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                A Touch of Salt (Award-Winning Dining)
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                A Touch of Salt offers high-end modern dining on the riverfront with a focus on premium ingredients and refined flavours.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Highlights:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Multi-award-winning restaurant</li>
                  <li>River views and outdoor seating</li>
                  <li>Fine dining without being overly formal</li>
                  <li>Great steaks, seafood and desserts</li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                <p className="text-muted-foreground">Excellent for special occasions or date nights.</p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=A+Touch+of+Salt+Townsville" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </Button>
            </section>

            {/* Section 3: Longboard Bar & Grill */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Longboard Bar & Grill (Beachfront Casual Dining)
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Located right on The Strand, Longboard offers laid-back beach vibes with burgers, pizzas and cocktails served metres from the water.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Highlights:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Direct beachfront location</li>
                  <li>Burgers, pizzas and cocktail menu</li>
                  <li>Live music on some evenings</li>
                  <li>Popular with both locals and visitors</li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                <p className="text-muted-foreground">Sit outside for sunset — ideal for photos.</p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Longboard+Bar+Grill+Townsville" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </Button>
            </section>

            {/* Section 4: Cactus Jack's */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Cactus Jack's (Tex-Mex & Fun Atmosphere)
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Cactus Jack's is a Townsville staple — colourful, fun and perfect for families or groups.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Highlights:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Tex-Mex favourites</li>
                  <li>Big portions and good value</li>
                  <li>Lively, themed décor</li>
                  <li>Popular on weekends</li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                <p className="text-muted-foreground">Their enchiladas and margaritas have a huge local following.</p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Cactus+Jack's+Townsville" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </Button>
            </section>

            {/* Section 5: Juliette's Gelateria */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Juliette's Gelateria (Dessert & Coffee on The Strand)
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                An iconic Strand spot for gelato, desserts and beachfront coffee.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Highlights:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Homemade gelato</li>
                  <li>Breakfast options</li>
                  <li>Coffee with ocean views</li>
                  <li>Outdoor seating</li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                <p className="text-muted-foreground">Great for families — kids love the beach playground nearby.</p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Juliette's+The+Strand+Townsville" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </Button>
            </section>

            {/* Section 6: Watermark Restaurant */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Watermark Restaurant (Seafood & Beach Views)
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Watermark offers a mixture of seafood, steaks and modern Australian dishes with excellent Strand views.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Highlights:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Stylish Strand restaurant</li>
                  <li>Seafood platters</li>
                  <li>Indoor and outdoor seating</li>
                  <li>Popular Sunday lunch spot</li>
                </ul>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Watermark+Restaurant+Townsville" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </Button>
            </section>

            {/* Section 7: Rambutan Rooftop Bar */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Rambutan Rooftop Bar & Restaurant
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Located on a rooftop in the CBD with views of the stadium and Castle Hill, Rambutan has a modern menu and a great bar vibe.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Highlights:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Rooftop dining</li>
                  <li>Wood-fired pizza</li>
                  <li>Cocktails and relaxed atmosphere</li>
                  <li>City and Castle Hill views</li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                <p className="text-muted-foreground">Great spot before Cowboys games and concerts.</p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Rambutan+Townsville" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Map
                </a>
              </Button>
            </section>

            {/* Section 8: Best Cafés */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Best Cafés in Townsville
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Townsville has a strong café scene with excellent brunch options.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Top Picks:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Hoi Polloi – creative brunch, great coffee</li>
                  <li>The Spirited Goat – local favourite</li>
                  <li>Betty Blue & The Lemon Tart – famous breakfasts</li>
                  <li>Café Rajé – Strand-side café</li>
                </ul>
              </div>
            </section>

            {/* Section 9: Dog-Friendly Dining */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Dog-Friendly Dining
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Townsville is extremely dog-friendly, especially on The Strand.
              </p>
              <div className="mb-4">
                <p className="font-semibold text-foreground mb-2">Best Spots:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>Juliette's Gelateria</li>
                  <li>The Courtyard</li>
                  <li>Some outdoor Strand cafés</li>
                  <li>Various food trucks and markets</li>
                </ul>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <p className="font-semibold text-foreground mb-1">Local Tip:</p>
                <p className="text-muted-foreground">Many places provide free water bowls — just ask.</p>
              </div>
            </section>

            {/* Section 10: Ask the AI */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Ask the AI for Food Recommendations
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                You can use the built-in AI for personalised local suggestions:
              </p>
              <div className="mb-6">
                <p className="font-semibold text-foreground mb-2">Suggested questions:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                  <li>"Where should I eat in Townsville tonight?"</li>
                  <li>"What's the best café near The Strand?"</li>
                  <li>"Where can I get seafood in Townsville?"</li>
                  <li>"What are the best restaurants for families?"</li>
                </ul>
              </div>
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

export default FoodDrink;
