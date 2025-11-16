import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const HistoryOfTownsville = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            A Short, Interesting History of Townsville
          </h1>
        </div>

        {/* Section 1: Introduction */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            How Townsville became Townsville
          </h2>
          
          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-4">
            <p>
              When you walk along The Strand at sunset or see Castle Hill changing colour in the afternoon light, it's hard to imagine that Townsville began as a tiny, rough camp on a muddy creek. In less than two centuries it has grown into the largest city in Northern Australia, a working tropical port and a gateway to the Great Barrier Reef and the outback.
            </p>
            
            <p>This page tells Townsville's story in plain language – not as a dry history lesson, but as a series of moments:</p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Life on Country long before there was a "Townsville"</li>
              <li>Explorers looking for a port in the north</li>
              <li>The gold rush years and the birth of a frontier town</li>
              <li>Cyclones, floods and tough tropical living</li>
              <li>Townsville's role in World War II</li>
              <li>The growth of suburbs, universities and industry</li>
              <li>How all of that history still shows up in everyday life today</li>
            </ul>
            
            <p>
              The idea is simple: by the time someone reaches the bottom of the page, they should feel like they understand what they're walking through when they look around Townsville.
            </p>
          </div>

          <div className="mt-8 bg-card border border-border rounded-lg p-6 shadow-sm">
            <p className="text-sm italic text-muted-foreground mb-2">
              Image suggestion: "Townsville then and now – from rough bush settlement to modern tropical city."
            </p>
            <p className="text-xs text-muted-foreground/70">
              AI prompt: Split-screen image of Townsville, Queensland: left side a sepia-toned 1880s scene with a dusty main street, horse-drawn carts and timber buildings; right side a modern, bright aerial view with Castle Hill, The Strand and the marina, warm tropical light, photo-real, 16:9.
            </p>
          </div>
        </section>

        {/* Section 2: Long Before "Townsville" */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Long Before "Townsville": Life on Country
          </h2>
          <h3 className="text-xl font-semibold text-muted-foreground mb-6">
            Bindal and Wulgurukaba Country
          </h3>
          
          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-4">
            <p>
              Long before anyone drew borders or street maps, this coastline, river and bay were home to First Nations peoples.
            </p>
            
            <p>
              The Townsville region sits on the traditional Country of the Bindal and Wulgurukaba peoples. Creeks, hills and reefs were not just "landmarks" – they were part of stories, songlines and family connections.
            </p>
            
            <p>
              People moved with the seasons, fishing the creeks and reefs, collecting shellfish and managing the landscape with fire. Canoes crossed the bay to Yunbenun (Magnetic Island), which has its own stories and significance.
            </p>
            
            <p>
              When you look across Cleveland Bay, stand in the shade of an old fig tree, or watch the light on Castle Hill, you're seeing places that have been important to people for thousands of years. Townsville's story doesn't start in 1864 – it starts long before that, with Aboriginal history and culture.
            </p>
          </div>

          <div className="mt-8 bg-card border border-border rounded-lg p-6 shadow-sm">
            <p className="text-sm italic text-muted-foreground mb-2">
              Image suggestion: "Traditional life along Cleveland Bay, long before colonisation."
            </p>
            <p className="text-xs text-muted-foreground/70">
              AI prompt: Peaceful tropical coastline inspired by Cleveland Bay near Townsville before European settlement, mangroves and open water, an Aboriginal family camp respectfully depicted near a small fire and canoes, soft sunrise light, realistic, 16:9.
            </p>
          </div>
        </section>

        {/* Section 3: Looking for a Northern Port */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Looking for a Northern Port (1840s–1860s)
          </h2>
          <h3 className="text-xl font-semibold text-muted-foreground mb-6">
            Cattle, coastlines and the search for a harbour
          </h3>
          
          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-4">
            <p>
              By the mid-1800s, European settlers were pushing cattle runs further into North Queensland. Moving goods in and out of the region was difficult, and the Burdekin River's floods made earlier plans for a southern port unreliable.
            </p>
            
            <p>A few key points:</p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Sydney businessman Robert Towns was heavily involved in pastoral and maritime business in the north.</li>
              <li>His manager John Melton Black believed there had to be a better harbour somewhere along Cleveland Bay.</li>
              <li>From their base at Woodstock Station, south of modern Townsville, they sent Andrew Ball and a small party north to find a suitable port.</li>
            </ul>
            
            <p>
              These exploration journeys were rough: heat, insects, unknown creeks, and no guarantee of success. But what they found at the mouth of a small creek would change the map of North Queensland.
            </p>
          </div>

          <div className="mt-8 bg-card border border-border rounded-lg p-6 shadow-sm">
            <p className="text-sm italic text-muted-foreground mb-2">
              Image suggestion: "Explorers searching the North Queensland coastline for a safe harbour."
            </p>
            <p className="text-xs text-muted-foreground/70">
              AI prompt: 1860s exploration party in North Queensland: a few riders and packhorses on a ridge looking out over a tropical bay and distant rocky hill (like Castle Hill), dry grass and scattered trees in the foreground, historical painting style, warm light.
            </p>
          </div>
        </section>

        {/* Section 4: 1864 Camp on Ross Creek */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            1864: A Camp on Ross Creek
          </h2>
          <h3 className="text-xl font-semibold text-muted-foreground mb-6">
            The moment Townsville begins
          </h3>
          
          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-4">
            <p>
              In April 1864, Andrew Ball's party reached the mouth of a small tidal creek flowing into Cleveland Bay. They camped beneath a distinctive rocky hill that Ball named Castle Hill, because it reminded him of the stone castles of home.
            </p>
            
            <p>The early "town" was little more than:</p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>A handful of tents and rough timber huts along the banks of Ross Creek</li>
              <li>A basic landing place where small boats could unload supplies</li>
              <li>Mud, mosquitoes and a lot of hard work</li>
            </ul>
            
            <p>
              Robert Towns saw potential. He invested money in the settlement, including facilities for processing cattle products. In recognition of his backing, the growing camp was named Townsville.
            </p>
            
            <p>
              From this tiny cluster of buildings between the hill and the creek, a port city began to take shape.
            </p>
          </div>

          <div className="mt-8 bg-card border border-border rounded-lg p-6 shadow-sm">
            <p className="text-sm italic text-muted-foreground mb-2">
              Image suggestion: "The first rough settlement on Ross Creek, beneath Castle Hill, in the 1860s."
            </p>
            <p className="text-xs text-muted-foreground/70">
              AI prompt: 1860s camp on a tropical creek inspired by early Townsville: canvas tents and a few wooden huts on the bank of a muddy creek, small sailing boat tied up, Castle Hill-like rocky outcrop in the background, muted colours, lightly stylised historical illustration.
            </p>
          </div>
        </section>

        {/* Section 5: Gold, Sugar and Frontier Boom */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Gold, Sugar and a Frontier Boom
          </h2>
          <h3 className="text-xl font-semibold text-muted-foreground mb-6">
            Gateway to the goldfields
          </h3>
          
          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-4">
            <p>
              Townsville's big early growth spurt came from what was happening inland.
            </p>
            
            <p>
              Gold was discovered at Ravenswood and Charters Towers. Townsville quickly became the "Gateway to the Goldfields", the port through which miners, machinery and supplies flowed. Ships arrived crowded with hopeful prospectors and departed loaded with gold, wool and cattle.
            </p>
            
            <p>At street level, the town changed fast:</p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Pubs, boarding houses and shops lined the dirt streets near the port.</li>
              <li>Churches, schools and civic buildings slowly followed.</li>
              <li>Conditions were basic: deep mud in the Wet, dust in the Dry, and animals everywhere.</li>
            </ul>
            
            <p>
              At the same time, sugar cane was expanding in the broader region. Plantation owners demanded cheap labour, and many South Sea Islander workers were brought to Queensland under coercive "blackbirding" practices. This legacy is complex and painful, but it is part of Townsville's wider regional story and still matters to families and communities today.
            </p>
          </div>

          <div className="mt-8 bg-card border border-border rounded-lg p-6 shadow-sm">
            <p className="text-sm italic text-muted-foreground mb-2">
              Image suggestion: "Townsville as a noisy frontier port during the gold rush years."
            </p>
            <p className="text-xs text-muted-foreground/70">
              AI prompt: Late-19th-century North Queensland port town scene: busy wharf with steamship, crates and barrels, miners with packs disembarking, wide dusty street lined with timber hotels and shops, Castle Hill-like hill in background, warm afternoon light, painterly realism.
            </p>
          </div>
        </section>

        {/* Section 6: Cyclones, Floods and Tropical Toughness */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Cyclones, Floods and Tropical Toughness
          </h2>
          <h3 className="text-xl font-semibold text-muted-foreground mb-6">
            Learning to live with the weather
          </h3>
          
          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-4">
            <p>
              If there is one constant in Townsville's history, it is the weather.
            </p>
            
            <p>
              Cyclones regularly battered the young town, tearing roofs off and smashing fragile buildings. Floods turned streets into rivers, especially around the creeks that snake through the city. In the long dry months, dust and heat made daily life uncomfortable and hard.
            </p>
            
            <p>Out of all this came some very "Townsville" solutions:</p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Houses were built up on stumps, creating the classic high-set Queenslander style – breezier, cooler and safer in floods.</li>
              <li>Shading verandas, high ceilings and cross-ventilation became standard.</li>
              <li>Locals learned to keep an eye on the sky and be ready for the next big storm.</li>
            </ul>
            
            <p>
              Every time a modern cyclone season rolls around, people are repeating a pattern that goes right back to those early residents: secure the house, check on neighbours, and wait it out together.
            </p>
          </div>

          <div className="mt-8 bg-card border border-border rounded-lg p-6 shadow-sm">
            <p className="text-sm italic text-muted-foreground mb-2">
              Image suggestion: "Early Queenslander homes rebuilt to cope with floods and cyclones."
            </p>
            <p className="text-xs text-muted-foreground/70">
              AI prompt: 1900s tropical Australian street: high-set timber Queenslander houses on stumps, puddles and debris after a recent flood, families tidying up under a clearing sky, distant hills, realistic style, soft post-storm light.
            </p>
          </div>
        </section>

        {/* Section 7: World War II */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            World War II: A Front-line City
          </h2>
          <h3 className="text-xl font-semibold text-muted-foreground mb-6">
            Air raids, airfields and bunkers by the sea
          </h3>
          
          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-4">
            <p>
              During the Second World War, Townsville became one of the most important Allied bases in the Pacific theatre.
            </p>
            
            <p>
              Airfields were built or expanded around the region. The harbour and port handled military ships, fuel and equipment. Troops, nurses and support staff filled camps and barracks across the city and on Magnetic Island.
            </p>
            
            <p>
              In July 1942, Townsville experienced three small night-time air raids by Japanese flying boats. Most bombs fell harmlessly into the sea or on uninhabited areas, but it brought the war very close to home and left a strong memory in local history.
            </p>
            
            <p>Today, reminders of this wartime period are still visible:</p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Concrete gun emplacements and tunnels at Jezzine Barracks</li>
              <li>Fortifications and observation posts on Magnetic Island</li>
              <li>Old airfield sites scattered around the region</li>
            </ul>
            
            <p>
              These are quiet places now, but they were once part of a global conflict that put Townsville squarely on the front line.
            </p>
          </div>

          <div className="mt-8 bg-card border border-border rounded-lg p-6 shadow-sm">
            <p className="text-sm italic text-muted-foreground mb-2">
              Image suggestion: "Townsville harbour during World War II, with searchlights sweeping the sky."
            </p>
            <p className="text-xs text-muted-foreground/70">
              AI prompt: Night-time World War II harbour inspired by Townsville: dimly lit docks and warehouses, searchlights crossing the sky, silhouette of a flying boat high above the bay, soft reflections on water, cinematic but not graphic, 16:9.
            </p>
          </div>
        </section>

        {/* Section 8: Suburbs, Uni and "The Saint" */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Suburbs, Uni and "The Saint" (1950s–1970s)
          </h2>
          <h3 className="text-xl font-semibold text-muted-foreground mb-6">
            Growing up after the war
          </h3>
          
          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-4">
            <p>
              After 1945, Townsville moved into a new phase.
            </p>
            
            <p>
              New suburbs stretched outward from the older streets near the port. The car became central to everyday life, reshaping how the city was laid out. Public services, shops and schools followed the population into fresh estates.
            </p>
            
            <p>
              A major turning point came with the establishment and growth of James Cook University, which helped turn Townsville into a centre for tropical science, education and research.
            </p>
            
            <p>
              And then there's one of the city's most iconic little quirks: "The Saint".
            </p>
            
            <p>
              In the early 1960s, university students painted a simple stick-figure logo on the side of Castle Hill as a prank. The figure, known as "The Saint", kept returning despite attempts to remove it. Over time it became an unofficial symbol of the city, spotted and pointed out by generations of locals driving past.
            </p>
            
            <p>
              It's a small story, but it captures something about Townsville's character: informal, a bit cheeky, and very attached to Castle Hill.
            </p>
          </div>

          <div className="mt-8 bg-card border border-border rounded-lg p-6 shadow-sm">
            <p className="text-sm italic text-muted-foreground mb-2">
              Image suggestion: "Castle Hill at sunset with 'The Saint' figure visible on the rock face."
            </p>
            <p className="text-xs text-muted-foreground/70">
              AI prompt: Modern Castle Hill scene at golden hour: city and The Strand below, subtle white stick-figure "Saint" painted on the rock face, clear tropical sky, realistic style, 16:9.
            </p>
          </div>
        </section>

        {/* Section 9: Industry, Skyline and Waterfront Life */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Industry, Skyline and Waterfront Life (1970s–2000s)
          </h2>
          <h3 className="text-xl font-semibold text-muted-foreground mb-6">
            From smokestacks to The Strand
          </h3>
          
          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-4">
            <p>
              In the late 20th century, Townsville balanced being both a working industrial city and a place people wanted to call home.
            </p>
            
            <p>On the "working" side:</p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>The port handled minerals, fuel and general cargo for a huge part of North Queensland.</li>
              <li>Refineries and other industrial sites on the outskirts supported mining operations inland.</li>
              <li>Defence remained a major employer, with Army and Air Force facilities in the region.</li>
            </ul>
            
            <p>On the "living" side:</p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>The CBD gained taller buildings, including the distinctive round hotel locals call the "Sugar Shaker".</li>
              <li>The Strand and waterfront areas were upgraded into promenades, playgrounds, pools and viewing points.</li>
              <li>Sporting culture boomed with teams like the North Queensland Cowboys helping to put Townsville on the national sporting map.</li>
              <li>Festivals and arts events, including classical music and community celebrations, added depth to the city's cultural life.</li>
            </ul>
            
            <p>
              The result is the Townsville people recognise today: a city where you can watch a ship loading in the port in the morning, then walk under coconut palms along The Strand in the afternoon.
            </p>
          </div>

          <div className="mt-8 bg-card border border-border rounded-lg p-6 shadow-sm">
            <p className="text-sm italic text-muted-foreground mb-2">
              Image suggestion: "Townsville's modern skyline, with the 'Sugar Shaker' and Castle Hill watching over The Strand."
            </p>
            <p className="text-xs text-muted-foreground/70">
              AI prompt: Modern daytime view of Townsville: The Strand foreshore with people walking and kids playing, city skyline behind featuring a round "Sugar Shaker" style hotel, Castle Hill rising in the background, bright, realistic 16:9.
            </p>
          </div>
        </section>

        {/* Section 10: Townsville Today */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Townsville Today: Layers of History in Everyday Life
          </h2>
          <h3 className="text-xl font-semibold text-muted-foreground mb-6">
            Why the past still matters when you visit now
          </h3>
          
          <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-4">
            <p>
              Today, Townsville is a city of layers. You can feel those layers if you know where to look:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>On Castle Hill, you stand where explorers once surveyed the bay and where students once hung off ropes with a paintbrush.</li>
              <li>Along Jezzine and the headlands, you see both Aboriginal story and wartime concrete sitting side by side.</li>
              <li>At the port, you watch ships load minerals and goods just as they did in the gold rush years, only on a bigger, more modern scale.</li>
              <li>On The Strand, you enjoy a view that First Nations families, early settlers, soldiers and generations of Townsville kids have all known in different ways.</li>
            </ul>
            
            <p>
              Townsville isn't just a resort or a stopover. It's a working tropical city with a long memory, shaped by weather, war, industry, migration and the original custodians of this land and sea.
            </p>
            
            <p>
              For visitors, understanding this history turns simple moments – a walk, a drive, a view from a lookout – into something richer. For locals, it's a reminder that the place we live in has a deeper story than most people realise.
            </p>
          </div>

          <div className="mt-8 bg-card border border-border rounded-lg p-6 shadow-sm">
            <p className="text-sm italic text-muted-foreground mb-2">
              Image suggestion: "A modern day on The Strand – everyday life in a city with a long, layered history."
            </p>
            <p className="text-xs text-muted-foreground/70">
              AI prompt: Photo-real image of The Strand in Townsville on a sunny day: families walking, joggers, kids at the water park, Magnetic Island on the horizon, Castle Hill and city buildings behind, relaxed tropical atmosphere, 16:9.
            </p>
          </div>
        </section>

        {/* Back to top */}
        <div className="text-center pt-8 pb-16 border-t border-border">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Duncan's Guide
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HistoryOfTownsville;