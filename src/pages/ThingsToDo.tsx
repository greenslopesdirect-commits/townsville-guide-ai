subtitle: "Tropical Gardens & River Walks"
    }
  ];

  return (
    <>
      <SEOHead
        title="Things to Do in Townsville – Local Highlights & Must-See Spots"
        description="Discover the best things to do in Townsville — Castle Hill, Magnetic Island, The Strand, wildlife, walks, beaches and more. Your complete local guide."
        canonical="https://www.myaussieguide.com.au/townsville/things-to-do"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Things to Do in Townsville",
            "description": "Top attractions and activities in Townsville",
            "itemListElement": attractions.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": item.title
            }))
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Back Button */}
            <Link to="/townsville">
              <Button variant="ghost" className="mb-6 group" aria-label="Back to home">
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>

            {/* Hero Header */}
            <header className="mb-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Compass className="w-4 h-4" />
                Activities Guide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Things to Do in Townsville
              </h1>
              
              {/* NEW HERO BANNER IMAGE */}
              <div className="mb-10 relative group">
                <img 
                  src="/lovable-uploads/the-strand-things-to-do.webp" 
                  alt="The Strand Waterfront in Townsville" 
                  className="rounded-2xl shadow-xl w-full h-[300px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs italic">
                  The Strand: Townsville's iconic 2.2km beachfront promenade.
                </div>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                From hiking Castle Hill at sunrise to exploring Magnetic Island's hidden bays, Townsville offers unforgettable experiences for every type of traveller.
              </p>
            </header>

            {/* FEATURED VISUAL GUIDES (The "Spokes") */}
            <section className="mb-16 bg-blue-50/50 dark:bg-blue-900/10 border-2 border-blue-100 dark:border-blue-900/30 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-blue-500 text-white">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Local Visual Blueprints</h2>
                  <p className="text-muted-foreground italic text-sm">Stop reading long blogs. Start seeing results.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link to="/townsville/guides/beat-the-heat" className="group p-4 bg-card rounded-xl border-2 hover:border-primary transition-all">
                  <h3 className="font-bold flex items-center gap-2">❄️ Beat the Heat Guide <ArrowLeft className="w-4 h-4 rotate-180 opacity-0 group-hover:opacity-100 transition-all" /></h3>
                  <p className="text-sm text-muted-foreground mt-1">Our best shortcuts for staying cool with kids.</p>
                </Link>
                <Link to="/townsville/guides/magnetic-island-day-trip" className="group p-4 bg-card rounded-xl border-2 hover:border-primary transition-all">
                  <h3 className="font-bold flex items-center gap-2">🏝️ Magnetic Island Itinerary <ArrowLeft className="w-4 h-4 rotate-180 opacity-0 group-hover:opacity-100 transition-all" /></h3>
                  <p className="text-sm text-muted-foreground mt-1">The perfect 8-hour family day trip plan.</p>
                </Link>
                <Link to="/townsville/guides/stinger-safety" className="group p-4 bg-card rounded-xl border-2 hover:border-red-500 transition-all">
                  <h3 className="font-bold flex items-center gap-2">⚠️ Summer Safety Guide <ArrowLeft className="w-4 h-4 rotate-180 opacity-0 group-hover:opacity-100 transition-all" /></h3>
                  <p className="text-sm text-muted-foreground mt-1">Stinger nets, vinegar, and Lycra protection tips.</p>
                </Link>
              </div>
            </section>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { icon: <Mountain className="w-5 h-5" />, label: "Castle Hill", sublabel: "Iconic landmark" },
                { icon: <Camera className="w-5 h-5" />, label: "Wildlife", sublabel: "Koalas & crocs" },
                { icon: <Building2 className="w-5 h-5" />, label: "History", sublabel: "WWII heritage" },
                { icon: <Users className="w-5 h-5" />, label: "Family Fun", sublabel: "Kid-friendly" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-2xl bg-card border-2 hover:border-primary/30 transition-colors">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-2">
                    {stat.icon}
                  </div>
                  <p className="font-semibold text-foreground">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
                </div>
              ))}
            </div>

            {/* Heat Safety Alert */}
            <div className="relative">
              <HeatSafetyAlert className="mb-8" />
              <Link to="/townsville/guides/beat-the-heat" className="absolute top-4 right-4 text-xs font-bold underline text-orange-800">
                View Full Heat Guide
              </Link>
            </div>

            {/* Go Local Suggestion */}
            <LocalInsightCard title="Go Local" variant="location" className="mb-12">
              <p>
                Done The Strand? It's time to go local. Head out to the <strong>Riverway Lagoons</strong> in Thuringowa—it's 
                our favourite freshwater alternative to the beach (and totally free!).
              </p>
              <Link to="/townsville/guides/free-things" className="inline-flex items-center gap-2 mt-4 text-primary font-bold hover:underline">
                <Compass className="w-4 h-4" /> View: 5 Completely Free Things to do in Townsville
              </Link>
            </LocalInsightCard>

            {/* Attractions Grid */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Top Attractions & Experiences
                  </h2>
                  <p className="text-muted-foreground">Must-see spots for visitors</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {attractions.map((attraction, index) => (
                  <ListingCard key={index} {...attraction} />
                ))}
              </div>
            </section>

            {/* How to Plan Your Time Section */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  How to Plan Your Time in Townsville
                </h2>
              </div>
              
              {/* Daily Rhythm */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Sun className="w-5 h-5 text-primary" />
                  A simple daily rhythm that works:
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { time: "Morning", activity: "Castle Hill, walks, outdoor exploring", icon: Sunrise },
                    { time: "Midday", activity: "Museum, lunch, Riverway lagoons, shade activities", icon: CloudSun },
                    { time: "Afternoon", activity: "Magnetic Island or The Strand", icon: Sunset },
                    { time: "Evening", activity: "Sunset at The Strand or Castle Hill", icon: Moon, link: "/townsville/guides/sunset-walks" }
                  ].map((item, index) => (
                    <div key={index} className="p-5 rounded-2xl bg-card border-2 border-border/40 hover:border-primary/30 transition-colors text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <p className="font-semibold text-foreground mb-2">{item.time}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-2">{item.activity}</p>
                      {item.link && (
                         <Link to={item.link} className="text-xs font-bold text-primary hover:underline">View Sunset Walk Guide →</Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Plan the Rest Section */}
            <section className="mb-16">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { to: "/townsville/flights", icon: Plane, title: "Flights to Townsville", desc: "Find the best flight options" },
                  { to: "/townsville/food", icon: UtensilsCrossed, title: "Townsville Food Guide", desc: "Best restaurants and cafés" },
                  { to: "/townsville/shopping", icon: ShoppingBag, title: "Townsville Shopping", desc: "Markets, malls and local stores" },
                  { to: "/townsville/history", icon: BookOpen, title: "Townsville History", desc: "Heritage and culture" }
                ].map((item, index) => (
                  <Link key={index} to={item.to} className="block group">
                    <div className="p-5 rounded-2xl border-2 border-border/40 hover:border-primary/30 transition-all duration-300 bg-card h-full text-center group-hover:shadow-md">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

          </div>
        </main>
      </div>
    </>
  );
};

export default ThingsToDo;
