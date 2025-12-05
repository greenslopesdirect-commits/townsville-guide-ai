import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Camera, Sunrise, Palmtree, Building2, Dog, Compass, Bot, ExternalLink } from "lucide-react";

const ThingsToDo = () => {
  const navigate = useNavigate();

  const askAI = (question: string) => {
    navigate("/townsville", {
      state: { aiQuestion: question },
    });
  };

  return (

    <>
      <SEOHead
        title="Things to Do in Townsville – Local Highlights & Must-See Spots"
        description="Discover the best things to do in Townsville — Castle Hill, Magnetic Island, The Strand, wildlife, walks, beaches and more. Your complete local guide."
        canonical="https://duncansguide.com/townsville/things-to-do"
      />
      <Helmet>

  {/* WebPage Schema */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Things to Do in Townsville",
      "url": "https://duncansguide.com/things-to-do",
      "description": "Local guide to the best things to do in Townsville — Castle Hill, Magnetic Island, The Strand, wildlife, beaches and more.",
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
            "name": "Things to Do",
            "item": "https://duncansguide.com/things-to-do"
          }
        ]
      }
    }
    `}
  </script>

  {/* ItemList Schema for all attractions */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Things to Do in Townsville",
      "itemListOrder": "Ascending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "url": "https://duncansguide.com/things-to-do#castle-hill",
          "name": "Castle Hill Lookout"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "url": "https://duncansguide.com/things-to-do#the-strand",
          "name": "The Strand"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "url": "https://duncansguide.com/things-to-do#magnetic-island",
          "name": "Magnetic Island"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "url": "https://duncansguide.com/things-to-do#billabong-sanctuary",
          "name": "Billabong Sanctuary"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "url": "https://duncansguide.com/things-to-do#jezzine-barracks",
          "name": "Jezzine Barracks"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "url": "https://duncansguide.com/things-to-do#riverway",
          "name": "Riverway & Ross River"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "url": "https://duncansguide.com/things-to-do#beyond-strand-beaches",
          "name": "Townsville Beaches (Pallarenda, Rowes Bay, Bushland Beach)"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "url": "https://duncansguide.com/things-to-do#arts-culture",
          "name": "Art, Culture & Events"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "url": "https://duncansguide.com/things-to-do#dog-friendly",
          "name": "Dog-Friendly Activities"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "url": "https://duncansguide.com/things-to-do#day-trips",
          "name": "Day Trips From Townsville"
        }
      ]
    }
    `}
  </script>

  {/* TouristAttraction Schema */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "TouristDestination",
      "name": "Things to Do in Townsville",
      "description": "Top attractions and activities in Townsville including Castle Hill, Magnetic Island, The Strand, wildlife, beaches and more.",
      "touristType": "Visitors to Townsville, Families, Couples, Adventure Travellers",
      "includesAttraction": [
        {
          "@type": "TouristAttraction",
          "name": "Castle Hill Lookout",
          "url": "https://duncansguide.com/things-to-do#castle-hill",
          "address": "Castle Hill, Townsville City QLD 4810"
        },
        {
          "@type": "TouristAttraction",
          "name": "The Strand",
          "url": "https://duncansguide.com/things-to-do#the-strand",
          "address": "The Strand, Townsville QLD 4810"
        },
        {
          "@type": "TouristAttraction",
          "name": "Magnetic Island",
          "url": "https://duncansguide.com/things-to-do#magnetic-island",
          "address": "Magnetic Island QLD 4819"
        },
        {
          "@type": "TouristAttraction",
          "name": "Billabong Sanctuary",
          "url": "https://duncansguide.com/things-to-do#billabong-sanctuary",
          "address": "11 Country Road, Nome QLD 4816"
        },
        {
          "@type": "TouristAttraction",
          "name": "Jezzine Barracks",
          "url": "https://duncansguide.com/things-to-do#jezzine-barracks",
          "address": "Jezzine Barracks, North Ward QLD 4810"
        },
        {
          "@type": "TouristAttraction",
          "name": "Riverway & Ross River",
          "url": "https://duncansguide.com/things-to-do#riverway",
          "address": "Riverway Drive, Townsville QLD 4814"
        }
      ]
    }
    `}
  </script>

</Helmet>

      
      <div className="min-h-screen bg-background">
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Back Button */}
            <Link to="/">
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
                Things to Do in Townsville – Local Highlights & Must-See Spots
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Townsville is more than just a stop on the way to somewhere else. It's a real working tropical city with beaches, walks, wildlife, history and easy access to Magnetic Island. This page gives you a simple local overview of the best things to do in and around Townsville, whether you're here for a day, a weekend or longer.
              </p>
            </header>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Castle Hill Lookout */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Castle Hill Lookout
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Castle Hill is Townsville's most iconic landmark — a massive pink granite monolith rising 286 metres above the city. You can walk or drive to the summit for 360-degree views over the city, harbour, and Magnetic Island.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Multiple walking tracks ranging from 30 minutes to 2 hours</li>
                  <li>Sealed road to the summit for drivers</li>
                  <li>Best at sunrise or sunset for stunning light</li>
                  <li>Free entry and parking</li>
                  <li>Bring water — it gets hot!</li>
                </ul>
                <div className="mt-4 flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="gap-2"
                  >
                    <a 
                      href="https://www.google.com/maps/place/Castle+Hill,+Townsville+City+QLD+4810" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="View Castle Hill on Google Maps"
                    >
                      <MapPin className="w-4 h-4" />
                      View on Map
                    </a>
                  </Button>
                  <Link to="/history">
                    <Button variant="link" size="sm" className="text-primary hover:underline p-0">
                      Read more about Townsville's history →
                    </Button>
                  </Link>
                </div>
              </section>

              {/* The Strand */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Sunrise className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Stroll (or Swim) Along The Strand
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The Strand is Townsville's 2.2km beachfront promenade — perfect for walking, jogging, swimming, or just relaxing with an ice cream. It's the heart of the city's outdoor lifestyle.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Free saltwater rock pool for safe swimming</li>
                  <li>Shaded picnic areas and BBQ facilities</li>
                  <li>Cafés, bars, and restaurants along the foreshore</li>
                  <li>Water park for kids</li>
                  <li>Dog-friendly zones at certain times</li>
                </ul>
                <div className="mt-4 flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="gap-2"
                  >
                    <a 
                      href="https://www.google.com/maps/place/The+Strand,+Townsville+QLD+4810" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="View The Strand on Google Maps"
                    >
                      <MapPin className="w-4 h-4" />
                      View on Map
                    </a>
                  </Button>
                  <Link to="/#beaches">
                    <Button variant="link" size="sm" className="text-primary hover:underline p-0">
                      Learn more about Townsville's beaches →
                    </Button>
                  </Link>
                </div>
              </section>

              {/* Magnetic Island */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Palmtree className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Take a Day Trip to Magnetic Island
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Just 20 minutes by ferry from Townsville, Magnetic Island is a tropical paradise with 23 beaches, walking trails, wildlife, and a relaxed island vibe. It's one of the best day trips in North Queensland.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>23 beaches and bays to explore</li>
                  <li>Forts Walk for history and koala spotting</li>
                  <li>Horseshoe Bay for swimming and watersports</li>
                  <li>Alma Bay and Rocky Bay for snorkelling</li>
                  <li>Hire a Jeep or scooter to get around</li>
                </ul>
                <div className="mt-4 flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="gap-2"
                  >
                    <a 
                      href="https://www.google.com/maps/place/Magnetic+Island+QLD+4819" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="View Magnetic Island on Google Maps"
                    >
                      <MapPin className="w-4 h-4" />
                      View on Map
                    </a>
                  </Button>
                  <Button
  variant="link"
  size="sm"
  className="text-primary hover:underline p-0 gap-1"
  onClick={() => askAI("Create a 1 day itinerary for Magnetic Island from Townsville")}
>
  <Bot className="w-4 h-4" />
  Ask the AI for a Magnetic Island itinerary
</Button>

                  </Link>
                </div>
              </section>

              {/* Billabong Sanctuary */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Meet Wildlife at Billabong Sanctuary
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Billabong Sanctuary is a family-owned wildlife park where you can get up close with koalas, kangaroos, crocodiles, wombats, and native birds in a natural bush setting.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Hold a koala and feed kangaroos</li>
                  <li>Watch crocodile feeding shows</li>
                  <li>See wombats, dingoes, and cassowaries</li>
                  <li>Educational talks throughout the day</li>
                  <li>BBQ and picnic areas available</li>
                </ul>
                <div className="mt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="gap-2"
                  >
                    <a 
                      href="https://www.google.com/maps/place/Billabong+Sanctuary" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="View Billabong Sanctuary on Google Maps"
                    >
                      <MapPin className="w-4 h-4" />
                      View on Map
                    </a>
                  </Button>
                </div>
              </section>

              {/* Jezzine Barracks */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Jezzine Barracks & Coastal Boardwalk
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Jezzine Barracks is a beautifully restored heritage site with a scenic coastal boardwalk, military history, and stunning ocean views. It's a peaceful spot for a walk or picnic.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>1.4km elevated boardwalk with ocean views</li>
                  <li>Interpretive displays about military history</li>
                  <li>Playgrounds and BBQ areas</li>
                  <li>Kissing Point Fort ruins</li>
                  <li>Free entry and parking</li>
                </ul>
                <div className="mt-4 flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="gap-2"
                  >
                    <a 
                      href="https://www.google.com/maps/place/Jezzine+Barracks" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="View Jezzine Barracks on Google Maps"
                    >
                      <MapPin className="w-4 h-4" />
                      View on Map
                    </a>
                  </Button>
                  <Link to="/history">
                    <Button variant="link" size="sm" className="text-primary hover:underline p-0">
                      See Townsville's WW2 story →
                    </Button>
                  </Link>
                </div>
              </section>

              {/* Riverway */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Sunrise className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Cool Off at Riverway & Ross River
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Riverway is Townsville's premier outdoor recreation area featuring free lagoons, walking trails, picnic spots, and playgrounds along the Ross River.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Free tropical swimming lagoons</li>
                  <li>Shaded BBQ and picnic areas</li>
                  <li>Walking and cycling trails along the river</li>
                  <li>Water play areas for kids</li>
                  <li>Tony Ireland Stadium nearby for events</li>
                </ul>
                <div className="mt-4 flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="gap-2"
                  >
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Riverway+Townsville" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="View Riverway on Google Maps"
                    >
                      <MapPin className="w-4 h-4" />
                      View on Map
                    </a>
                  </Button>
                  <Link to="/">
                    <Button variant="link" size="sm" className="text-primary hover:underline p-0 gap-1">
                      <Bot className="w-4 h-4" />
                      Ask the AI for things to do near Riverway
                    </Button>
                  </Link>
                </div>
              </section>

              {/* Beaches Beyond The Strand */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Palmtree className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Explore Beaches Beyond The Strand
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  While The Strand is great, Townsville has several other beautiful beaches worth exploring, each with its own character and charm.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                  <li>Pallarenda Beach — rock pools, fishing, and quiet picnic spots</li>
                  <li>Rowes Bay — calm waters and a dog-friendly park</li>
                  <li>Bushland Beach — long sandy stretches and a relaxed vibe</li>
                  <li>Saunders Beach — great for fishing and kite surfing</li>
                  <li>Toolakea Beach — peaceful and uncrowded</li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="gap-2"
                  >
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Pallarenda+Beach+Townsville" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="View Pallarenda Beach on Google Maps"
                    >
                      <MapPin className="w-4 h-4" />
                      Pallarenda
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="gap-2"
                  >
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Rowes+Bay+Beach+Townsville" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="View Rowes Bay on Google Maps"
                    >
                      <MapPin className="w-4 h-4" />
                      Rowes Bay
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="gap-2"
                  >
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Bushland+Beach+Townsville" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="View Bushland Beach on Google Maps"
                    >
                      <MapPin className="w-4 h-4" />
                      Bushland Beach
                    </a>
                  </Button>
                </div>
                <div className="mt-4">
                  <Link to="/#beaches">
                    <Button variant="link" size="sm" className="text-primary hover:underline p-0">
                      See the full list of Townsville beaches →
                    </Button>
                  </Link>
                </div>
              </section>

              {/* Art, Culture & Events */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Art, Culture & Events
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Townsville has a growing arts and culture scene with galleries, museums, markets, and events throughout the year.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Museum of Tropical Queensland — natural history and maritime heritage</li>
                  <li>Perc Tucker Regional Gallery — contemporary art exhibitions</li>
                  <li>Cotters Market — Sunday morning market at Flinders Street</li>
                  <li>Festival of Chamber Music — annual classical music event</li>
                  <li>Cultural Centre and theatre shows at Civic Theatre</li>
                </ul>
                <div className="mt-4">
                  <Link to="/">
                    <Button variant="link" size="sm" className="text-primary hover:underline p-0 gap-1">
                      <Bot className="w-4 h-4" />
                      Ask the AI what's on this week in Townsville
                    </Button>
                  </Link>
                </div>
              </section>

              {/* Dog-Friendly Fun */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Dog className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Dog-Friendly Fun
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Townsville is one of Queensland's most dog-friendly cities, with dedicated off-leash parks, beach zones, and pet-friendly cafés.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Rowes Bay Dog Park — large fenced off-leash area</li>
                  <li>The Strand — dog-friendly zones at certain times</li>
                  <li>Juliette's Gelateria — outdoor seating with water bowls</li>
                  <li>The Courtyard — trendy café welcoming dogs</li>
                  <li>Several local beaches allow dogs off-leash</li>
                </ul>
                <div className="mt-4">
                  <Link to="/#beaches">
                    <Button variant="link" size="sm" className="text-primary hover:underline p-0">
                      See dog-friendly coastal walks on The Strand →
                    </Button>
                  </Link>
                </div>
              </section>

              {/* Day Trips from Townsville */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Compass className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Day Trips from Townsville
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Townsville is perfectly positioned for exploring North Queensland's natural attractions and unique destinations.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Paluma Range National Park — rainforest walks and waterfalls</li>
                  <li>Charters Towers — historic gold rush town (90 minutes inland)</li>
                  <li>Jourama Falls — swimming holes and picnic areas</li>
                  <li>Bowling Green Bay National Park — coastal landscapes</li>
                  <li>Hinchinbrook Island — wilderness camping and hiking</li>
                </ul>
                <div className="mt-4">
                  <Link to="/">
                    <Button variant="link" size="sm" className="text-primary hover:underline p-0 gap-1">
                      <Bot className="w-4 h-4" />
                      Ask the AI to plan a Townsville day trip
                    </Button>
                  </Link>
                </div>
              </section>

              {/* Use the AI Guide */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Bot className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Use the AI Guide to Plan Your Day
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Duncan's Guide includes an AI-powered chat assistant trained on local Townsville knowledge. Ask it anything about beaches, restaurants, walks, dog-friendly spots, weather, or how to spend your time in the city.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Get personalised itinerary suggestions</li>
                  <li>Find dog-friendly cafés and parks</li>
                  <li>Check current weather and tide times</li>
                  <li>Discover hidden gems and local favourites</li>
                  <li>Get directions and practical tips</li>
                </ul>
              </section>
            </div>

            {/* AI Guide CTA */}
            <div className="mt-16 pt-8 border-t border-border text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Need Help Planning Your Visit?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get personalised recommendations, itineraries, and local tips from our AI-powered guide trained on Townsville knowledge.
              </p>
              <Link to="/">
                <Button size="lg" className="gap-2" aria-label="Open AI chat assistant">
                  <Bot className="w-5 h-5" />
                  Ask the AI Guide
                </Button>
              </Link>
            </div>

            {/* Back to Home CTA */}
            <div className="mt-12 text-center">
              <Link to="/">
                <Button variant="outline" size="lg" className="group" aria-label="Return to Duncan's Guide home page">
                  Return to Home
                  <ArrowLeft className="ml-2 w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                              </Button>
            </Link>
          </div>
        </main>
      </>
    );
};

export default ThingsToDo;
