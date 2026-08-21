import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sun,
  Sunrise,
  Sunset,
  Droplets,
  Waves,
  Building2,
  TreePine,
  Thermometer,
  AlertTriangle,
  PhoneCall,
  Baby,
  Dog,
  Backpack,
  Footprints,
  Ship,
  Car,
  ArrowRight,
  Info,
  HeartPulse,
} from "lucide-react";

const SITE = "https://www.townsvilleguide.com.au";
const PATH = "/guides/beat-the-heat";

const TITLE = "How to Beat the Heat in Townsville | Local Hot-Weather Guide";
const DESCRIPTION =
  "Plan hot days in Townsville with local advice on cooler activities, safe timing, hydration, heat exhaustion, family outings and when to change plans.";

const FEELS_LIKE = [
  {
    label: "Air temperature",
    text: "The forecast maximum is only the starting point. It is measured in the shade, not on an exposed footpath, beach or hill track.",
  },
  {
    label: "Direct sun",
    text: "Tropical sun is intense for much of the year. Standing in full sun can feel several degrees hotter than the same day in shade.",
  },
  {
    label: "Reflected heat",
    text: "Roads, car parks, rock faces and pale sand throw heat back at you. Castle Hill's tracks and open foreshore paths are the clearest examples.",
  },
  {
    label: "Humidity",
    text: "When humidity is high, sweat evaporates poorly and your body cools less efficiently. A humid 31°C day can be far harder than a dry 35°C day.",
  },
  {
    label: "Warm nights",
    text: "During the wet season the overnight low may stay high, so you start the next day without having fully cooled down or slept well.",
  },
  {
    label: "Exertion",
    text: "Walking uphill, carrying a child or a pack, or simply covering long distances raises your own heat production on top of the conditions.",
  },
];

const MORNING = [
  "Castle Hill walking tracks",
  "The Strand promenade and beaches",
  "Jezzine Barracks and Kissing Point",
  "Magnetic Island walks, including the Forts Walk",
  "Outdoor playgrounds",
  "Beaches and foreshore areas",
  "Paluma and other regional drives",
  "Markets",
  "Any longer outdoor activity",
];

const MIDDAY = [
  "Riverway Lagoons",
  "The Strand Water Park",
  "The Rockpool when open",
  "Designated, patrolled beach swimming where conditions and signage allow",
  "A long lunch",
  "A rest at your accommodation",
  "Museum of Tropical Queensland",
  "Libraries",
  "Cinema",
  "Shopping centres",
  "Short, shaded stops rather than long outdoor stretches",
];

const AFTERNOON = [
  "Castle Hill lookout by car",
  "The Strand",
  "Rowes Bay",
  "Kissing Point",
  "Gentle waterfront walks",
  "Sunset viewing",
  "Outdoor dining",
];

const FREE_COOLING = [
  "Riverway Lagoons — free public lagoons with shaded lawns beside the Ross River",
  "The Strand Water Park — free water play, best for younger children",
  "The Rockpool when open — a large free saltwater pool on the foreshore",
  "Designated beach swimming areas where conditions, signage and stinger advice allow",
  "Shaded picnic areas in the botanic gardens and riverside parks",
  "Public water-refill points where available along The Strand and in major parks",
];

const INDOOR_OPTIONS = [
  "Museum of Tropical Queensland, subject to current opening information",
  "Townsville City Council libraries",
  "Cinemas",
  "Shopping centres",
  "Cafés and restaurants",
  "A deliberate air-conditioned break at your accommodation",
];

const CHILD_SAFETY = [
  "Children can overheat more quickly than adults and may not recognise it themselves",
  "Offer drinks regularly rather than waiting for a child to ask",
  "Use hats, shade and lightweight, loose clothing",
  "Check playground equipment before use — metal and dark plastic get very hot",
  "Test sand and paving with your hand before letting children go barefoot",
  "Plan frequent rests in shade or air conditioning",
  "Watch for unusual tiredness, irritability, headache, dizziness or nausea",
  "Never leave a child in a parked vehicle, even briefly",
];

const HIGHER_RISK = [
  "Older visitors",
  "Babies and young children",
  "Pregnant visitors",
  "People with heart, kidney or respiratory conditions",
  "People taking certain medicines",
  "Visitors who are not used to tropical heat",
  "Anyone exercising or working outdoors",
];

const DOG_SAFETY = [
  "Walk early in the morning or in the evening",
  "Test paths, sand and paving with the back of your hand before walking",
  "Carry water and a bowl for your dog as well as yourself",
  "Use shaded routes and rest often",
  "Avoid strenuous exercise, ball games and long walks in hot or humid conditions",
  "Never leave a dog in a parked vehicle",
  "Do not assume beach sand or footpaths are safe for paws",
  "Remember that a swim cools a dog briefly but does not remove the risk",
];

const HYDRATION = [
  "Carry a refillable bottle and top it up whenever you pass a refill point",
  "Drink regularly through the day rather than only when thirsty",
  "Bring extra water for walks and regional drives, not just a single small bottle",
  "Prompt children to drink at set points, such as each rest stop",
  "Limit alcohol during very hot conditions",
  "Do not rely only on soft drinks or coffee",
  "Carry more than you expect to need for Castle Hill, Pallarenda, Paluma and Magnetic Island outings",
];

const KIT = [
  "Broad-brimmed hat",
  "Lightweight, breathable clothing",
  "Sunscreen",
  "Sunglasses",
  "Refillable water bottle",
  "Swimmers and spare clothes",
  "Cooling towel, if you find one useful",
  "A compact umbrella for portable shade where practical",
  "Insect repellent",
  "Footwear suited to the surface, including closed shoes for hill tracks",
];

const CHANGE_PLANS = [
  "A severe or extreme heatwave warning is active",
  "An exposed walk would fall in the hottest part of the day",
  "Humidity is making conditions feel considerably worse than the forecast",
  "Children, older visitors or anyone in the group is already tired",
  "You do not have enough water for the activity",
  "There is little shade and no realistic point to turn back or exit",
  "Someone develops early heat-illness symptoms",
  "Park, road, weather or attraction alerts advise against travel",
  "Conditions have simply changed from what you planned for",
];

const EARLY_SYMPTOMS = [
  "Heavy sweating",
  "Thirst",
  "Headache",
  "Dizziness",
  "Nausea",
  "Muscle cramps",
  "Weakness",
  "Irritability",
];

const EXHAUSTION_SIGNS = [
  "Worsening weakness",
  "Pale or clammy skin",
  "Profuse sweating",
  "Faintness",
  "Rapid breathing",
  "Nausea or vomiting",
];

const EXHAUSTION_ACTIONS = [
  "Stop the activity",
  "Move to a cooler, shaded or air-conditioned place",
  "Remove unnecessary clothing",
  "Cool the body, for example with water on the skin and airflow",
  "Offer small sips of water if the person is conscious and able to drink",
  "Seek medical advice if symptoms do not improve or are concerning",
];

const HEATSTROKE_SIGNS = [
  "Confusion",
  "Poor coordination",
  "Slurred speech",
  "Very hot skin",
  "Fainting",
  "Vomiting",
  "Seizures",
  "Loss of consciousness",
];

type Itinerary = { title: string; steps: string[] };

const ITINERARIES: Itinerary[] = [
  {
    title: "One-day hot-weather itinerary",
    steps: [
      "Early morning: a Strand walk, the Castle Hill lookout or another short outdoor activity, then breakfast",
      "Late morning: the Strand Water Park, Riverway Lagoons, the Rockpool or a designated swimming area where suitable",
      "Midday: lunch, a rest at your accommodation, or a museum, library, cinema or shopping centre",
      "Late afternoon: Jezzine Barracks, Rowes Bay, or the Castle Hill lookout by car",
      "Evening: a waterfront dinner and a sunset walk",
    ],
  },
  {
    title: "Hot day with children",
    steps: [
      "Early playground time or the Strand Water Park",
      "A swim while it is still comfortable",
      "Lunch and a proper rest at your accommodation",
      "One short late-afternoon outing only",
      "Avoid a full day of exposed outdoor activity",
    ],
  },
  {
    title: "Hot day without a car",
    steps: [
      "Stay within The Strand, North Ward, Jezzine and CBD cluster",
      "Avoid long exposed transfers on foot",
      "Use buses, taxis or rideshare for anything further out",
      "Build in an indoor or shaded midday break rather than pushing through",
    ],
  },
  {
    title: "Active morning before the heat",
    steps: [
      "Start a Castle Hill walk or Strand exercise session early",
      "Breakfast afterwards",
      "A swim or cool-down",
      "Finish anything strenuous before the hottest part of the day",
    ],
  },
  {
    title: "Cooler regional day",
    steps: [
      "Check Paluma weather, road and park access before leaving",
      "Leave early",
      "Do not assume mountain conditions are automatically cool or safe",
      "Carry water and food, as services are limited",
      "Turn back or change plans if weather or access changes",
    ],
  },
];

const MISTAKES = [
  "Starting Castle Hill too late in the morning",
  "Underestimating humidity because the temperature looks moderate",
  "Carrying only one small bottle of water",
  "Wearing heavy or unsuitable clothing",
  "Walking barefoot on hot sand or paving",
  "Assuming cloud cover removes the heat and UV risk",
  "Planning children outdoors all day with no rest",
  "Drinking heavily the night before, or during, an exposed activity",
  "Leaving drinking water in the car instead of carrying it",
  "Continuing simply because the itinerary says the activity should be finished",
  "Assuming Paluma or Magnetic Island will automatically be cooler",
  "Ignoring early symptoms because the day has already been planned",
];

const RELATED = [
  { name: "The Strand", to: "/the-strand" },
  { name: "Castle Hill", to: "/castle-hill" },
  { name: "Walking Castle Hill", to: "/guides/walking-castle-hill" },
  { name: "Townsville With Kids", to: "/townsville-with-kids" },
  { name: "Free Things to Do", to: "/guides/free-things" },
  { name: "Townsville Without a Car", to: "/townsville-without-a-car" },
  { name: "Townsville in One Day", to: "/townsville-in-one-day" },
  { name: "Magnetic Island Day Trip", to: "/guides/magnetic-island-day-trip" },
  { name: "Forts Walk, Magnetic Island", to: "/guides/forts-walk-magnetic-island" },
  { name: "Paluma Day Trip", to: "/guides/paluma-day-trip" },
  { name: "Rainy Day Activities", to: "/guides/rainy-day-activities" },
  { name: "Stinger Safety", to: "/guides/stinger-safety" },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is the best time of day to explore Townsville in hot weather?",
    a: "Early morning and late afternoon. Most locals do outdoor activity before about 9am, spend the middle of the day near water, indoors or resting, then head back outside from mid-afternoon onwards.",
  },
  {
    q: "Is Townsville too hot for sightseeing?",
    a: "No. Townsville is very manageable when the day is structured around the heat. The problem is rarely the destination itself and almost always the timing — an exposed walk at midday is hard work, while the same walk at 6.30am is pleasant.",
  },
  {
    q: "Where can you cool down for free in Townsville?",
    a: "Riverway Lagoons, the Strand Water Park and the Rockpool when open are the main free options, along with designated beach swimming where conditions and signage allow, shaded gardens and air-conditioned public libraries.",
  },
  {
    q: "Is Castle Hill safe to walk in hot weather?",
    a: "The tracks are exposed, steep and reflect heat, so they are best walked early in the morning or late in the day. Carry more water than you think you need, and turn back early if anyone in the group feels unwell — driving to the lookout is a reasonable alternative.",
  },
  {
    q: "What should families do during the hottest part of the day?",
    a: "Swim, eat and rest. Water play in the morning, lunch, then an air-conditioned break at your accommodation or a library, museum or cinema works far better than trying to keep children outdoors all day.",
  },
  {
    q: "Does humidity make Townsville feel hotter?",
    a: "Yes. High humidity slows the evaporation of sweat, so your body cools less effectively. A humid day in the high 20s or low 30s can feel harder than a hotter, drier day, especially during exercise.",
  },
  {
    q: "What are the early signs of heat exhaustion?",
    a: "Heavy sweating, thirst, headache, dizziness, nausea, muscle cramps, weakness and irritability are common early signs. Stop the activity, move somewhere cooler, cool the body and sip water, and seek medical advice if symptoms do not improve.",
  },
  {
    q: "When should you call 000 for heat illness?",
    a: "Call Triple Zero (000) immediately if you suspect heatstroke — signs may include confusion, poor coordination, slurred speech, very hot skin, fainting, vomiting, seizures or loss of consciousness. Heatstroke is a medical emergency. For non-emergency health advice in Queensland, call 13 HEALTH on 13 43 25 84.",
  },
  {
    q: "How much water should you carry on a walk?",
    a: "There is no single figure that suits everyone, but one small bottle is rarely enough for an exposed walk here. Carry noticeably more than you would at home for Castle Hill, Pallarenda, Paluma and Magnetic Island, and top up wherever refill points exist.",
  },
  {
    q: "Is Magnetic Island cooler than Townsville?",
    a: "Not reliably. Sea breezes can help along the coast, but the island's walking tracks are exposed and often feel just as hot. Take an early ferry and do exposed walks such as the Forts Walk in the morning.",
  },
  {
    q: "Is Paluma always cooler than Townsville?",
    a: "No. The Paluma Range often feels cooler than the coast, but that is not guaranteed, and it can still be hot and humid. Road, weather and park access all need checking before you drive up.",
  },
  {
    q: "Can dogs safely walk in Townsville summer heat?",
    a: "Only with care. Walk early or late, test the ground temperature with your hand, carry water, keep outings short and never leave a dog in a parked vehicle. A swim cools a dog briefly but does not remove the risk.",
  },
  {
    q: "Do attractions and shops still operate in very hot weather?",
    a: "Yes, generally — normal daily heat does not shut Townsville down. Shops, cafés, shopping centres and most attractions run as usual through summer; the practical adjustment is to your own schedule rather than to what's open. The exception is genuinely severe weather (a heatwave warning, cyclone or storm event), when specific services or events can be affected — check current warnings rather than assuming everything is unaffected on those days.",
  },
  {
    q: "What should I pack for Townsville in summer?",
    a: "A broad-brimmed hat, lightweight breathable clothing, sunscreen, sunglasses, a refillable water bottle and swimmers are the essentials. Add insect repellent and footwear suited to hill tracks if you're walking Castle Hill, and a light rain layer during the wet season. See the full kit list above for the complete version.",
  },
];

const BeatTheHeat = () => {
  return (
    <>
      <SEOHead title={TITLE} description={DESCRIPTION} canonical={`${SITE}${PATH}`} ogType="article" />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Beat the Heat in Townsville",
            description: DESCRIPTION,
            author: { "@type": "Person", name: "Duncan Ross" },
            publisher: { "@type": "Organization", name: "Townsville Guide" },
            mainEntityOfPage: `${SITE}${PATH}`,
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
              {
                "@type": "ListItem",
                position: 2,
                name: "How to Beat the Heat in Townsville",
                item: `${SITE}${PATH}`,
              },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="bg-muted/30 border-b border-border">
        <div className="container mx-auto max-w-4xl px-4 py-12 md:py-16 text-center">
          <div className="inline-block rounded-full border border-border bg-background px-3 py-1 text-xs md:text-sm text-muted-foreground mb-4">
            Hot-weather planning and safety guide
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
            How to Beat the Heat in Townsville
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Townsville's heat does not mean spending your holiday indoors. Almost everything worth
            doing here is still enjoyable — the difference is when you do it. The approach that
            works for locals is simple: start outdoor activities early, plan swimming, shade, lunch
            or indoor time around the middle of the day, then head back outside in the late
            afternoon and evening.
          </p>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
            The one thing worth staying flexible about is the plan itself. Change it when humidity,
            heatwave warnings or personal health factors raise the risk. There is no single
            temperature that makes every activity unsafe: risk depends on humidity, direct sun,
            shade, wind, how hard you are working, and the age, health and heat tolerance of
            everyone in your group.
          </p>
        </div>
      </section>

      <img
        src="/beat-the-heat-guide.webp"
        alt="A dog drinking from a chilled public water station in a Townsville park on a hot tropical day"
        className="w-full h-[280px] md:h-[420px] object-cover"
        width={1600}
        height={900}
        loading="eager"
        decoding="async"
      />

      <div className="container mx-auto max-w-4xl px-4 py-12 space-y-14">
        {/* Quick facts */}
        <GuideQuickFacts />

        {/* What the heat feels like */}
        <section aria-labelledby="feels-like">
          <div className="flex items-center gap-3 mb-4">
            <Thermometer className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="feels-like" className="text-2xl md:text-3xl font-bold">
              What Townsville Heat Actually Feels Like
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A Townsville day can feel much harder than the forecast maximum suggests, particularly
            when humidity is high, shade is limited or there is little breeze. Several things stack
            on top of each other.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {FEELS_LIKE.map((f) => (
              <Card key={f.label} className="h-full bg-muted/40">
                <CardContent className="p-5">
                  <h3 className="font-semibold mb-1.5">{f.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Three-stage plan */}
        <section aria-labelledby="plan-the-day">
          <div className="flex items-center gap-3 mb-4">
            <Sun className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="plan-the-day" className="text-2xl md:text-3xl font-bold">
              The Best Way to Plan a Hot Day
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This three-stage shape is the single most useful thing on this page. Build every hot
            day around it and most of the other decisions look after themselves.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="h-full bg-muted/40">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Sunrise className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <h3 className="font-semibold">Early morning</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                  {MORNING.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full bg-muted/40">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Waves className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <h3 className="font-semibold">Middle of the day</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                  {MIDDAY.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full bg-muted/40">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Sunset className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <h3 className="font-semibold">Late afternoon and evening</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                  {AFTERNOON.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            For a full worked example, see{" "}
            <Link to="/townsville-in-one-day" className="text-primary underline underline-offset-2">
              Townsville in one day
            </Link>{" "}
            and the{" "}
            <Link to="/first-time-in-townsville" className="text-primary underline underline-offset-2">
              first-time visitor guide
            </Link>
            .
          </p>
        </section>

        {/* Cool down */}
        <section aria-labelledby="cool-down">
          <div className="flex items-center gap-3 mb-4">
            <Droplets className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="cool-down" className="text-2xl md:text-3xl font-bold">
              Best Places to Cool Down
            </h2>
          </div>

          <h3 className="text-xl font-semibold mb-2">Free outdoor cooling</h3>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5 mb-4">
            {FREE_COOLING.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground mb-8">
            Operating times, lifeguard supervision and maintenance closures change, so check current
            signage or council information. Before swimming at any beach, read the{" "}
            <Link to="/guides/stinger-safety" className="text-primary underline underline-offset-2">
              marine stinger safety guide
            </Link>{" "}
            and the{" "}
            <Link to="/beaches" className="text-primary underline underline-offset-2">
              Townsville beaches guide
            </Link>
            . More free options are listed in the{" "}
            <Link to="/guides/free-things" className="text-primary underline underline-offset-2">
              free things to do guide
            </Link>
            .
          </p>

          <h3 className="text-xl font-semibold mb-2">Indoor or air-conditioned options</h3>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            {INDOOR_OPTIONS.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <Card className="mt-4 bg-muted/40">
            <CardContent className="p-5 flex items-start gap-3">
              <Building2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Great Barrier Reef Aquarium, formerly known as Reef HQ, is closed for
                redevelopment and is not currently available as an indoor hot-weather attraction.
                See our{" "}
                <Link
                  to="/reef-hq-townsville"
                  className="text-primary underline underline-offset-2"
                >
                  Reef HQ status page
                </Link>{" "}
                for current context, and the{" "}
                <Link
                  to="/guides/rainy-day-activities"
                  className="text-primary underline underline-offset-2"
                >
                  rainy-day guide
                </Link>{" "}
                for more indoor ideas.
              </p>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            In Duncan's experience, everyday life in Townsville carries on even in very hot
            weather — the city feels built around coping with the heat rather than simply
            stopping because of it, and there's usually somewhere practical to cool off for a few
            hours, shopping centres included. He genuinely loves the climate despite knowing how
            hot it gets, which is easier to believe once you've seen how normally the city keeps
            functioning through a heatwave. That said, extreme conditions can still affect specific
            services and events on the day — check current warnings rather than assuming nothing
            ever closes.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-2">Cooler regional alternatives</h3>
          <div className="flex items-start gap-3">
            <TreePine className="w-5 h-5 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
            <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
              <li>The Paluma Range often feels cooler than the coast, thanks to altitude and rainforest shade</li>
              <li>Paluma is not guaranteed to be cool — it can still be hot, and it is frequently humid</li>
              <li>Road, weather and national park access must be checked before you leave</li>
              <li>Freshwater swimming sites need caution, especially after rain</li>
              <li>Little Crystal Creek access remains subject to closure — check before planning around it</li>
              <li>Slippery rocks, strong flows and rapidly changing conditions are real risks in creeks</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link to="/guides/paluma-day-trip" className="text-primary underline underline-offset-2">
              Paluma day trip guide
            </Link>
            <Link
              to="/little-crystal-creek-townsville"
              className="text-primary underline underline-offset-2"
            >
              Little Crystal Creek closure information
            </Link>
          </div>
        </section>

        {/* Heat-smart versions */}
        <section aria-labelledby="heat-smart">
          <div className="flex items-center gap-3 mb-4">
            <Footprints className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="heat-smart" className="text-2xl md:text-3xl font-bold">
              Heat-Smart Versions of Major Townsville Activities
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            You rarely need to cancel a Townsville highlight because of heat. You usually just need
            a different version of it. The detailed guides remain the place for parking, access,
            facilities and full itineraries.
          </p>

          <div className="space-y-5">
            <Card className="bg-muted/40">
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold mb-2">The Strand</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                  <li>Visit early or late — the promenade is long and much of it is exposed</li>
                  <li>Use the swimming and water-play options rather than only walking</li>
                  <li>Bring hats, sunscreen and water even for a short visit</li>
                  <li>Use the shaded sections, cafés and food stops as deliberate rest points</li>
                </ul>
                <Link
                  to="/the-strand"
                  className="inline-flex items-center gap-1.5 mt-3 text-sm text-primary underline underline-offset-2"
                >
                  Read the full Strand guide <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
                <Link
                  to="/riverway"
                  className="inline-flex items-center gap-1.5 mt-3 ml-4 text-sm text-primary underline underline-offset-2"
                >
                  Riverway lagoons and shade <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-muted/40">
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold mb-2">Castle Hill</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  Driving and walking are two completely different activities in hot weather.
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                  <li>Driving to the lookout is manageable later in the day, including for sunset</li>
                  <li>The walking tracks are steep, exposed and strenuous</li>
                  <li>Avoid walking during the hottest part of the day</li>
                  <li>Carry more water than you think you need</li>
                  <li>Turn back early if conditions or anyone in the group feels wrong</li>
                  <li>Do not push on simply to complete the route</li>
                </ul>
                <div className="flex flex-wrap gap-4 mt-3 text-sm">
                  <Link to="/castle-hill" className="text-primary underline underline-offset-2">
                    Castle Hill guide
                  </Link>
                  <Link
                    to="/guides/walking-castle-hill"
                    className="text-primary underline underline-offset-2"
                  >
                    Walking Castle Hill tracks
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/40">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Ship className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">Magnetic Island</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                  <li>Take an early ferry so the cool part of the day is not spent travelling</li>
                  <li>Do exposed walks first, while it is still comfortable</li>
                  <li>Avoid overpacking the day with too many bays and stops</li>
                  <li>Use beaches, lunch or shade during the hottest period</li>
                  <li>Carry water — do not assume every stop has easy refill access</li>
                  <li>Adjust, shorten or cancel the Forts Walk when heat conditions are poor</li>
                </ul>
                <div className="flex flex-wrap gap-4 mt-3 text-sm">
                  <Link
                    to="/guides/magnetic-island-day-trip"
                    className="text-primary underline underline-offset-2"
                  >
                    Magnetic Island day trip
                  </Link>
                  <Link
                    to="/guides/magnetic-island-ferry"
                    className="text-primary underline underline-offset-2"
                  >
                    Ferry guide
                  </Link>
                  <Link
                    to="/guides/forts-walk-magnetic-island"
                    className="text-primary underline underline-offset-2"
                  >
                    Forts Walk guide
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/40">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Baby className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">Townsville with kids</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                  <li>Do water play early rather than in the middle of the day</li>
                  <li>Offer drinks frequently and at set points</li>
                  <li>Pack spare clothes and towels</li>
                  <li>Build in a midday lunch and rest</li>
                  <li>Keep late-afternoon outings shorter than you would at home</li>
                  <li>Do not push children to finish an itinerary when they are tired or overheated</li>
                </ul>
                <Link
                  to="/townsville-with-kids"
                  className="inline-flex items-center gap-1.5 mt-3 text-sm text-primary underline underline-offset-2"
                >
                  Townsville with kids guide <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-muted/40">
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold mb-2">Free things to do</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  Most of Townsville's free activities are outdoors, so heat planning matters more
                  here than budget planning.
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                  <li>Group activities by location instead of criss-crossing the city</li>
                  <li>Avoid repeated travel between distant areas in the heat of the day</li>
                  <li>Use the free guide's hot-weather suggestions</li>
                  <li>Prioritise shade, swimming and shorter outings</li>
                </ul>
                <Link
                  to="/guides/free-things"
                  className="inline-flex items-center gap-1.5 mt-3 text-sm text-primary underline underline-offset-2"
                >
                  Free things to do guide <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Children */}
        <section aria-labelledby="children">
          <div className="flex items-center gap-3 mb-4">
            <Baby className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="children" className="text-2xl md:text-3xl font-bold">
              Heat Safety for Children
            </h2>
          </div>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            {CHILD_SAFETY.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>

        {/* Higher risk */}
        <section aria-labelledby="higher-risk">
          <div className="flex items-center gap-3 mb-4">
            <HeartPulse className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="higher-risk" className="text-2xl md:text-3xl font-bold">
              Heat Safety for Older Visitors and People With Health Conditions
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Heat affects everyone differently, and the risk may be higher for:
          </p>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5 mb-4">
            {HIGHER_RISK.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Continue prescribed medication and ask a doctor or pharmacist for advice if you are
            concerned about how heat may affect you. Planning shorter outings, more shade and more
            rest is usually enough to make a hot day comfortable.
          </p>
        </section>

        {/* Dogs */}
        <section aria-labelledby="dogs">
          <div className="flex items-center gap-3 mb-4">
            <Dog className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="dogs" className="text-2xl md:text-3xl font-bold">
              Heat Safety for Dogs
            </h2>
          </div>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            {DOG_SAFETY.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <Link
            to="/dog-friendly"
            className="inline-flex items-center gap-1.5 mt-4 text-primary underline underline-offset-2"
          >
            Dog-friendly Townsville guide <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </section>

        {/* Hydration */}
        <section aria-labelledby="hydration">
          <div className="flex items-center gap-3 mb-4">
            <Droplets className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="hydration" className="text-2xl md:text-3xl font-bold">
              Hydration Without Overcomplicating It
            </h2>
          </div>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            {HYDRATION.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            There is no single daily amount that suits every visitor — needs vary with activity,
            conditions and health.
          </p>
        </section>

        {/* Kit */}
        <section aria-labelledby="kit">
          <div className="flex items-center gap-3 mb-4">
            <Backpack className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="kit" className="text-2xl md:text-3xl font-bold">
              Sunscreen, Clothing and Equipment
            </h2>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2 text-muted-foreground leading-relaxed list-disc pl-5">
            {KIT.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            Electrolyte drinks are an optional consideration during prolonged activity or heavy
            sweating. They are not a medical treatment and do not replace water or medical advice.
          </p>
        </section>

        {/* Change plans */}
        <section aria-labelledby="change-plans">
          <div className="rounded-xl border-2 border-border bg-muted/40 p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
              <h2 id="change-plans" className="text-2xl md:text-3xl font-bold">
                When to Change or Cancel Plans
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Changing the plan is a normal part of travelling in the tropics, not a failure.
              Reconsider when:
            </p>
            <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
              {CHANGE_PLANS.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <p className="text-sm font-medium text-foreground mt-5 mb-2">
              Check current official sources before heading out:
            </p>
            <ul className="space-y-1.5 text-sm list-disc pl-5">
              <li>
                <a
                  href="http://www.bom.gov.au/qld/forecasts/townsville.shtml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2"
                >
                  Bureau of Meteorology — Townsville forecast and warnings
                </a>
              </li>
              <li>
                <a
                  href="http://www.bom.gov.au/australia/heatwave/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2"
                >
                  Bureau of Meteorology — heatwave service
                </a>
              </li>
              <li>
                <a
                  href="https://www.qld.gov.au/emergency/dealing-disasters/heatwave"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2"
                >
                  Queensland Government — heatwave health guidance
                </a>
              </li>
              <li>
                <a
                  href="https://disaster.townsville.qld.gov.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2"
                >
                  Townsville Disaster Dashboard
                </a>
              </li>
              <li>
                <a
                  href="https://parks.desi.qld.gov.au/park-alerts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2"
                >
                  Queensland Parks and Wildlife Service — park alerts
                </a>
              </li>
              <li>
                <a
                  href="https://qldtraffic.qld.gov.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2"
                >
                  QLDTraffic — road conditions
                </a>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              Local phone numbers and services are listed on our{" "}
              <Link to="/useful-contacts" className="text-primary underline underline-offset-2">
                useful contacts page
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Heat illness */}
        <section aria-labelledby="heat-illness">
          <div className="flex items-center gap-3 mb-4">
            <PhoneCall className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="heat-illness" className="text-2xl md:text-3xl font-bold">
              Heat Exhaustion and Heatstroke
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This is general information only, based on Queensland Health guidance. It does not
            replace medical advice.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="h-full bg-muted/40">
              <CardContent className="p-5">
                <h3 className="font-semibold mb-2">Early heat-related symptoms</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                  {EARLY_SYMPTOMS.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="h-full bg-muted/40">
              <CardContent className="p-5">
                <h3 className="font-semibold mb-2">Possible heat exhaustion</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                  {EXHAUSTION_SIGNS.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <p className="text-sm font-medium text-foreground mt-3 mb-1">What to do</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                  {EXHAUSTION_ACTIONS.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-4 rounded-xl border-2 border-destructive/40 bg-destructive/5 p-5">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Possible heatstroke — a medical emergency
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Warning signs may include:
            </p>
            <ul className="space-y-1.5 text-muted-foreground leading-relaxed list-disc pl-5 mb-4">
              {HEATSTROKE_SIGNS.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <p className="font-semibold text-foreground">
              Call Triple Zero (000) immediately for suspected heatstroke.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              For non-emergency health advice in Queensland, call 13 HEALTH on 13 43 25 84. Do not
              delay emergency help while waiting to see if someone improves.
            </p>
          </div>
        </section>

        {/* Itineraries */}
        <section aria-labelledby="itineraries">
          <div className="flex items-center gap-3 mb-4">
            <Car className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="itineraries" className="text-2xl md:text-3xl font-bold">
              Hot-Weather Itineraries
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {ITINERARIES.map((i) => (
              <Card key={i.title} className="h-full bg-muted/40">
                <CardContent className="p-5">
                  <h3 className="font-semibold mb-2">{i.title}</h3>
                  <ol className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-decimal pl-5">
                    {i.steps.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Without a car? See{" "}
            <Link to="/townsville-without-a-car" className="text-primary underline underline-offset-2">
              Townsville without a car
            </Link>
            . Heading up the range? Check the{" "}
            <Link to="/guides/paluma-day-trip" className="text-primary underline underline-offset-2">
              Paluma day trip guide
            </Link>{" "}
            and{" "}
            <Link
              to="/little-crystal-creek-townsville"
              className="text-primary underline underline-offset-2"
            >
              Little Crystal Creek closure information
            </Link>{" "}
            first. More everyday shortcuts are in our{" "}
            <Link to="/local-tips" className="text-primary underline underline-offset-2">
              local tips
            </Link>
            .
          </p>
        </section>

        {/* Mistakes */}
        <section aria-labelledby="mistakes">
          <div className="flex items-center gap-3 mb-3">
            <Info className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
            <h2 id="mistakes" className="text-2xl md:text-3xl font-bold">
              Common Heat Mistakes
            </h2>
          </div>
          <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
            {MISTAKES.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </section>

        {/* Local tip */}
        <section aria-labelledby="local-tip" className="space-y-4">
          <Card className="bg-muted/40">
            <CardContent className="p-6 flex flex-col md:flex-row gap-5 items-start">
              <Thermometer className="w-10 h-10 text-primary flex-shrink-0" aria-hidden="true" />
              <div>
                <h2 id="local-tip" className="text-xl md:text-2xl font-bold mb-2">
                  Duncan's Local Pro-Tip
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  "Don't forget the hot-car rule. On a 35-degree day the inside of a parked car
                  becomes dangerously hot within minutes. Plan around the afternoon heat soak, and
                  if you do have to go out, start the car and air conditioning a few minutes before
                  the kids or the dog get in — and never leave anyone in the vehicle."
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-muted/40">
            <CardContent className="p-6 flex flex-col md:flex-row gap-5 items-start">
              <Sunrise className="w-10 h-10 text-primary flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  Duncan's Own Hot-Weather Routine
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  "Early in the day I'm more likely to go for a jog while it's cooler, and later in
                  the afternoon — especially around sunset when the UV is lower — I usually walk
                  the dog instead. In January it can get extremely hot, so I wouldn't plan to be
                  outdoors sightseeing all day. I'd use the hottest part of the day for somewhere
                  indoors like a museum, and save outdoor things for earlier or later. That's just
                  how I personally structure a hot day, not a rule everyone needs to follow."
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq">
          <h2 id="faq" className="text-2xl md:text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <Card key={f.q} className="bg-muted/40">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Related */}
        <section aria-labelledby="related">
          <h2 id="related" className="text-2xl md:text-3xl font-bold mb-6">
            Keep Planning Your Townsville Trip
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RELATED.map((g) => (
              <Link key={g.to} to={g.to} className="group">
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardContent className="p-4 flex items-center justify-between gap-3">
                    <span className="font-medium text-foreground">{g.name}</span>
                    <ArrowRight
                      className="w-4 h-4 text-primary flex-shrink-0 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BeatTheHeat;
