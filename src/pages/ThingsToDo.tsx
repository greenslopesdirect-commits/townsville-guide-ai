import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Camera, Sunrise, Palmtree, Building2, Dog, Compass, Bot, ExternalLink } from "lucide-react";

const ThingsToDo = () => {
  return (
    <>
      <Helmet>
        <title>Things to Do in Townsville – Local Highlights & Must-See Spots | Duncan's Guide</title>
        <meta 
          name="description" 
          content="Discover the best things to do in Townsville — Castle Hill, Magnetic Island, The Strand, wildlife, walks, beaches and more. Your complete local guide." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
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
                  <Link to="/">
                    <Button variant="link" size="sm" className="text-primary hover:underline p-0 gap-1">
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
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Pallarenda Beach — rock pools, fishing, and quiet picnic spots</li>
                  <li>Rowes Bay — calm waters and a dog-friendly park</li>
                  <li>Bushland Beach — long sandy stretches and a relaxed vibe</li>
                  <li>Saunders Beach — great for fishing and kite surfing</li>
                  <li>Toolakea Beach — peaceful and uncrowded</li>
                </ul>
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

            {/* Back to Home CTA */}
            <div className="mt-16 pt-8 border-t border-border text-center">
              <Link to="/">
                <Button size="lg" className="group" aria-label="Return to Duncan's Guide home page">
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

export default ThingsToDo;
