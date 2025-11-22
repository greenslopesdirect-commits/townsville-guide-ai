import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import thenAndNow from "@/assets/history-then-and-now.jpg";
import lifeOnCountry from "@/assets/history-life-on-country.jpg";
import explorers from "@/assets/history-explorers.jpg";
import firstCamp from "@/assets/history-first-camp.jpg";
import goldRush from "@/assets/history-gold-rush.jpg";
import cyclones from "@/assets/history-cyclones.jpg";
import wwii from "@/assets/history-wwii.jpg";
import theSaint from "@/assets/history-the-saint.jpg";
import modernWaterfront from "@/assets/history-modern-waterfront.jpg";
import today from "@/assets/history-today.jpg";

const HistoryOfTownsville = () => {
  return (
    <>
      <Helmet>
        <title>Townsville History – A Simple, Engaging Story of the City | Duncan's Guide</title>
        <meta 
          name="description" 
          content="Explore Townsville's history from First Nations Country to gold rush days, cyclones, WWII and modern life in this clear, easy-to-read local guide." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
        <Header />
        
        {/* Back Navigation */}
        <div className="container mx-auto px-4 sm:px-6 py-6 max-w-5xl mt-16">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-base font-medium text-muted-foreground hover:text-foreground transition-all duration-200 hover:gap-3"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Duncan's Guide
          </Link>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 py-12 max-w-5xl">
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              A Short, Interesting History of Townsville
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              How a Muddy Creek Became the Capital of North Queensland
            </p>
          </div>

          {/* Header Image */}
          <div className="mb-20 animate-fade-in">
            <img 
              src={thenAndNow} 
              alt="Historical comparison of Townsville showing past and present cityscape" 
              className="w-full h-auto rounded-xl shadow-md mb-4 transition-transform duration-300 hover:shadow-lg"
            />
            <p className="text-center text-sm text-muted-foreground/80 italic">
              Townsville: Then and Now
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-24 animate-fade-in">
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-5 text-lg leading-relaxed"
                 style={{ lineHeight: '1.8' }}>
              <p>
                When you stroll along The Strand at sunset or see Castle Hill glowing orange in the late afternoon, it's hard to imagine that Townsville began as a makeshift camp beside a muddy creek. Yet in less than 200 years, that tiny settlement grew into Northern Australia's largest city — a working tropical port, a gateway to the Great Barrier Reef, and a place where layers of history sit quietly beneath everyday life.
              </p>
              
              <p>This page tells Townsville's story in plain language, not as a history lecture, but as a series of turning points:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Life on Country long before "Townsville"</li>
                <li>Explorers searching for a northern port</li>
                <li>Gold rush fever and the birth of a frontier town</li>
                <li>Cyclones, floods, and tropical resilience</li>
                <li>Townsville's role in World War II</li>
                <li>Suburban growth, universities, and industry</li>
                <li>How all of that history still shapes the Townsville we see today</li>
              </ul>
              
              <p>
                By the bottom of this page, visitors should feel like they understand the place beneath their feet.
              </p>
            </div>
          </section>

          {/* Section 1: Long Before Townsville */}
          <section className="mb-24 animate-fade-in pt-16 border-t border-border/30">
            <img 
              src={lifeOnCountry} 
              alt="Historical illustration of Aboriginal life on Cleveland Bay before European settlement" 
              className="w-full h-auto rounded-xl shadow-md mb-4 mt-10 transition-transform duration-300 hover:shadow-lg"
            />
            <p className="text-center text-sm text-muted-foreground/80 italic mb-12">
              Cleveland Bay long before colonisation
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 mt-10">
              Long Before Townsville: Life on Country
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-8">
              Bindal and Wulgurukaba Country
            </h3>
            
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-5 text-lg leading-relaxed"
                 style={{ lineHeight: '1.8' }}>
              <p>
                Long before European arrival, the land and waters around today's Townsville belonged to the Bindal (south of Ross River) and Wulgurukaba (north of Ross River) peoples.
              </p>
              
              <p>
                This region — the creeks, wetlands, hills, reefs and river mouths — was not just geography. It was story, identity, kinship and law.
              </p>
              
              <p>People moved with the seasons:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Fishing the mangroves, beaches and reefs</li>
                <li>Gathering foods from the wetlands and woodlands</li>
                <li>Crossing to Yunbenun (Magnetic Island) by canoe</li>
                <li>Caring for Country through cultural burning</li>
              </ul>
              
              <p>
                When you look across Cleveland Bay or stand beneath the shade of an ancient fig tree, you're seeing places that have been significant for thousands of years.
              </p>
              
              <p>
                Townsville's story begins here — with a deep, enduring Aboriginal connection to Country.
              </p>
            </div>
          </section>

          {/* Section 2: Searching for a Northern Port */}
          <section className="mb-24 animate-fade-in pt-16 border-t border-border/30">
            <img 
              src={explorers} 
              alt="Historical illustration of European explorers searching the North Queensland coastline" 
              className="w-full h-auto rounded-xl shadow-md mb-4 mt-10 transition-transform duration-300 hover:shadow-lg"
            />
            <p className="text-center text-sm text-muted-foreground/80 italic mb-12">
              Explorers searching for a northern harbour
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 mt-10">
              Searching for a Northern Port (1840s–1860s)
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-8">
              Cattle, Coastlines and the Quest for a Harbour
            </h3>
            
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-5 text-lg leading-relaxed"
                 style={{ lineHeight: '1.8' }}>
              <p>
                By the mid-1800s, European pastoralists pushed cattle runs across North Queensland. But without a reliable port, the region struggled to trade.
              </p>
              
              <p>Enter three key figures:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Robert Towns</strong> – businessman, ship owner, pastoralist</li>
                <li><strong>John Melton Black</strong> – Towns' northern manager</li>
                <li><strong>Andrew Ball</strong> – explorer sent to find a workable harbour</li>
              </ul>
              
              <p>
                From their base at Woodstock Station, they searched the coastline of Cleveland Bay for a safe anchorage. These journeys were hot, rough and risky — mosquitoes, heat haze, flood-prone creeks, and no guarantee of success.
              </p>
              
              <p>
                But in April 1864, everything changed.
              </p>
            </div>
          </section>

          {/* Section 3: 1864 - A Camp Beside Ross Creek */}
          <section className="mb-24 animate-fade-in pt-16 border-t border-border/30">
            <img 
              src={firstCamp} 
              alt="Historical illustration of the first European settlement camp at Ross Creek Townsville in 1864" 
              className="w-full h-auto rounded-xl shadow-md mb-4 mt-10 transition-transform duration-300 hover:shadow-lg"
            />
            <p className="text-center text-sm text-muted-foreground/80 italic mb-12">
              The earliest Townsville camp, 1864
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 mt-10">
              1864: A Camp Beside Ross Creek
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-8">
              The Moment Townsville Began
            </h3>
            
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-5 text-lg leading-relaxed"
                 style={{ lineHeight: '1.8' }}>
              <p>
                Andrew Ball's party reached the mouth of a small tidal creek and camped beneath a striking pink-granite hill. He named it Castle Hill — a reminder of fortress-like cliffs in Britain.
              </p>
              
              <p>The first settlement was rudimentary:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Canvas tents</li>
                <li>Timber huts</li>
                <li>Muddy tracks</li>
                <li>A crude jetty</li>
                <li>Mosquitoes and hard labour</li>
              </ul>
              
              <p>
                Robert Towns backed the settlement financially. In recognition of his support, the settlement became <strong>Townsville</strong>.
              </p>
              
              <p>
                From this tiny camp squeezed between the creek and the hill, a city was born.
              </p>
            </div>
          </section>

          {/* Section 4: Gold, Sugar and a Frontier Boom */}
          <section className="mb-24 animate-fade-in pt-16 border-t border-border/30">
            <img 
              src={goldRush} 
              alt="Historical illustration of Townsville port during the 1800s gold rush boom" 
              className="w-full h-auto rounded-xl shadow-md mb-4 mt-10 transition-transform duration-300 hover:shadow-lg"
            />
            <p className="text-center text-sm text-muted-foreground/80 italic mb-12">
              Townsville during the gold rush boom
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 mt-10">
              Gold, Sugar and a Frontier Boom
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-8">
              Gateway to the Goldfields
            </h3>
            
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-5 text-lg leading-relaxed"
                 style={{ lineHeight: '1.8' }}>
              <p>
                The real boom came when gold was discovered inland at Ravenswood and Charters Towers.
              </p>
              
              <p>
                Townsville instantly became the <strong>Gateway to the Goldfields</strong>:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Ships arrived packed with hopeful miners</li>
                <li>Stores filled with supplies, tools and machinery</li>
                <li>Wealth poured through the port</li>
                <li>Streets filled with packhorses, dust, mud and noise</li>
              </ul>
              
              <p>Life was fast and raw:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Timber pubs and boarding houses sprang up</li>
                <li>Streets alternated between deep mud and powdery dust</li>
                <li>Animals roamed freely</li>
                <li>Early civic buildings gradually appeared</li>
              </ul>
              
              <p>
                At the same time, sugar cane expanded across the region. Plantation owners used coercive "blackbirding" to bring South Sea Islander labourers — a painful part of Queensland's history that still affects families today.
              </p>
              
              <p>
                Townsville became a bustling, complicated frontier town — rough-edged, diverse and full of energy.
              </p>
            </div>
          </section>

          {/* Section 5: Cyclones, Floods and Tropical Toughness */}
          <section className="mb-24 animate-fade-in pt-16 border-t border-border/30">
            <img 
              src={cyclones} 
              alt="Historical illustration of traditional Queenslander homes built on stilts in Townsville" 
              className="w-full h-auto rounded-xl shadow-md mb-4 mt-10 transition-transform duration-300 hover:shadow-lg"
            />
            <p className="text-center text-sm text-muted-foreground/80 italic mb-12">
              Early Queenslander homes built for the tropics
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 mt-10">
              Cyclones, Floods and Tropical Toughness
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-8">
              Learning to Live with the Weather
            </h3>
            
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-5 text-lg leading-relaxed"
                 style={{ lineHeight: '1.8' }}>
              <p>
                Townsville's early decades were marked by one constant enemy: the weather.
              </p>
              
              <p>
                Cyclones tore apart fragile buildings.<br />
                Floods turned streets into rivers.<br />
                Dust storms rolled across the Dry.<br />
                Humidity made daily life exhausting.
              </p>
              
              <p>Locals adapted with ingenuity:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>High-set Queenslander homes on stumps to avoid floods</li>
                <li>Wide verandas for shade</li>
                <li>High ceilings and cross-breezes to ease the heat</li>
                <li>A strong culture of checking on neighbours during storms</li>
              </ul>
              
              <p>
                Every cyclone season today echoes the resilience built over generations of tropical living.
              </p>
            </div>
          </section>

          {/* Section 6: World War II */}
          <section className="mb-24 animate-fade-in pt-16 border-t border-border/30">
            <img 
              src={wwii} 
              alt="Townsville harbour during World War II (artistic depiction)" 
              className="w-full h-auto rounded-xl shadow-md mb-4 mt-10 transition-transform duration-300 hover:shadow-lg"
            />
            <p className="text-center text-sm text-muted-foreground/80 italic mb-12">
              Townsville Harbour during WWII
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 mt-10">
              World War II: A City on the Front Line (1942–1945)
            </h2>
            
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-5 text-lg leading-relaxed"
                 style={{ lineHeight: '1.8' }}>
              <p>
                Townsville became a major Allied base during WWII — one of the most strategically important in the Pacific.
              </p>
              
              <p>The region hosted:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Airfields</li>
                <li>Barracks</li>
                <li>Hospitals</li>
                <li>Naval operations</li>
                <li>Supply depots</li>
                <li>Tens of thousands of Australian and US personnel</li>
              </ul>
              
              <p>
                In July 1942, Townsville experienced three night-time air raids by Japanese flying boats. Most bombs fell harmlessly into the sea or empty areas, but the attacks left a lasting mark on local memory.
              </p>
              
              <p>Today the wartime story can still be explored at:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Jezzine Barracks</li>
                <li>Magnetic Island fortifications</li>
                <li>Old bunkers, tunnels and gun emplacements</li>
                <li>Former airfield sites</li>
              </ul>
              
              <p>
                Quiet now — but once part of a global conflict.
              </p>
            </div>
          </section>

          {/* Section 7: 1950s–1970s */}
          <section className="mb-24 animate-fade-in pt-16 border-t border-border/30">
            <img 
              src={theSaint} 
              alt="Castle Hill with 'The Saint' stick figure painted on it in Townsville" 
              className="w-full h-auto rounded-xl shadow-md mb-4 mt-10 transition-transform duration-300 hover:shadow-lg"
            />
            <p className="text-center text-sm text-muted-foreground/80 italic mb-12">
              Castle Hill with 'The Saint'
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 mt-10">
              1950s–1970s: Suburbs, Uni and "The Saint"
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-8">
              Growing Up After the War
            </h3>
            
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-5 text-lg leading-relaxed"
                 style={{ lineHeight: '1.8' }}>
              <p>
                After WWII, Townsville moved into a new era of growth.
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Suburbs stretched outward</li>
                <li>Cars reshaped the city's layout</li>
                <li>New parks, shops and schools emerged</li>
                <li>James Cook University helped establish Townsville as a centre for tropical science</li>
                <li>Defence bases expanded</li>
              </ul>
              
              <p>
                And then there's the legendary "Saint" — a simple stick figure painted on Castle Hill by mischievous students in the 1960s. It kept reappearing despite repeated removal efforts, eventually becoming a quirky symbol of Townsville's personality.
              </p>
              
              <p>
                Cheeky, stubborn, and part of local identity.
              </p>
            </div>
          </section>

          {/* Section 8: 1970s–2000s */}
          <section className="mb-24 animate-fade-in pt-16 border-t border-border/30">
            <img 
              src={modernWaterfront} 
              alt="Modern Townsville waterfront and city skyline" 
              className="w-full h-auto rounded-xl shadow-md mb-4 mt-10 transition-transform duration-300 hover:shadow-lg"
            />
            <p className="text-center text-sm text-muted-foreground/80 italic mb-12">
              Townsville's modern skyline and The Strand
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 mt-10">
              1970s–2000s: Industry, Skyline and Waterfront Life
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-8">
              From Working Port to Tropical Lifestyle City
            </h3>
            
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-5 text-lg leading-relaxed"
                 style={{ lineHeight: '1.8' }}>
              <p>
                As Townsville grew, it became both a working industrial city and a vibrant tropical lifestyle destination.
              </p>
              
              <p><strong>Working Townsville:</strong></p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>A major deep-water port</li>
                <li>Mineral exports</li>
                <li>Fuel terminals</li>
                <li>Industrial sites supporting inland mining</li>
                <li>Defence as a major employer</li>
              </ul>
              
              <p><strong>Lifestyle Townsville:</strong></p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>The Strand transformed into a tropical foreshore</li>
                <li>The CBD gained its modern skyline, including the Sugar Shaker</li>
                <li>The Cowboys boosted local pride</li>
                <li>Arts and cultural festivals flourished</li>
              </ul>
              
              <p>
                By the 2000s, Townsville had matured into a city where industry and lifestyle sit side by side.
              </p>
            </div>
          </section>

          {/* Section 9: Townsville Today */}
          <section className="mb-24 animate-fade-in pt-16 border-t border-border/30">
            <img 
              src={today} 
              alt="Aerial view of Townsville and Castle Hill" 
              className="w-full h-auto rounded-xl shadow-md mb-4 mt-10 transition-transform duration-300 hover:shadow-lg"
            />
            <p className="text-center text-sm text-muted-foreground/80 italic mb-12">
              Everyday life on The Strand today
            </p>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 mt-10">
              Townsville Today: A City of Layers
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-8">
              Why the Past Still Matters
            </h3>
            
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-5 text-lg leading-relaxed"
                 style={{ lineHeight: '1.8' }}>
              <p>
                Modern Townsville is built on deep layers of history. You can feel them everywhere:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>On Castle Hill, where explorers camped and students painted</li>
                <li>Along Jezzine, where Aboriginal story and WWII concrete meet</li>
                <li>At the port, still pulsing with the same energy of the gold rush era</li>
                <li>On The Strand, where generations have walked, fished, swum and gathered</li>
              </ul>
              
              <p>
                Townsville isn't just a tropical holiday spot. It's a working, living, evolving city with a long memory — shaped by weather, war, industry, culture and the Traditional Owners of this land and sea.
              </p>
              
              <p>
                Understanding the history turns every lookout, every beach walk and every sunset into something richer.
              </p>
            </div>
          </section>

          {/* Explore More Section */}
          <section className="mb-16 animate-fade-in pt-16 border-t border-border/30">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
                Explore More of Townsville
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                <Link 
                  to="/#top-picks"
                  className="text-center p-6 bg-background/80 hover:bg-background rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/50"
                >
                  <div className="text-4xl mb-3">🎟</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Things to Do in Townsville</h3>
                  <p className="text-sm text-muted-foreground">Explore attractions, beaches, and activities</p>
                </Link>

                <Link 
                  to="/#food-drink"
                  className="text-center p-6 bg-background/80 hover:bg-background rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/50"
                >
                  <div className="text-4xl mb-3">🍽</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Best Beaches in Townsville</h3>
                  <p className="text-sm text-muted-foreground">Discover The Strand, Pallarenda, and more</p>
                </Link>

                <Link 
                  to="/#dog-friendly"
                  className="text-center p-6 bg-background/80 hover:bg-background rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/50"
                >
                  <div className="text-4xl mb-3">🐾</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Dog-Friendly Townsville</h3>
                  <p className="text-sm text-muted-foreground">Find dog parks and pet-friendly cafés</p>
                </Link>

                <Link 
                  to="/#food-drink"
                  className="text-center p-6 bg-background/80 hover:bg-background rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/50"
                >
                  <div className="text-4xl mb-3">☕</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Townsville Restaurants & Cafés</h3>
                  <p className="text-sm text-muted-foreground">Where to eat and drink in Townsville</p>
                </Link>
              </div>
            </div>
          </section>

          {/* Back Navigation */}
          <div className="text-center pt-16 pb-20 mt-12 border-t border-border">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-base font-medium text-muted-foreground hover:text-foreground transition-all duration-200 hover:gap-3"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Duncan's Guide
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HistoryOfTownsville;
