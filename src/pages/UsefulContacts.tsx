import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AlertTriangle,
  Bus,
  Building2,
  CloudSun,
  ExternalLink,
  HeartPulse,
  Languages,
  PawPrint,
  PhoneCall,
  Waves,
  Zap,
} from "lucide-react";

const SITE = "https://www.townsvilleguide.com.au";
const PATH = "/useful-contacts";

const TITLE = "Useful Townsville Contacts | Emergency, Health & Visitor Help";
const DESCRIPTION =
  "Find useful Townsville visitor contacts for emergencies, health advice, police, SES, Council, road closures, weather, transport and local assistance.";

const H1 = "Useful Contacts for Visitors to Townsville";

const LINKS = {
  council: "https://www.townsville.qld.gov.au/",
  dashboard: "https://disaster.townsville.qld.gov.au/",
  bom: "http://www.bom.gov.au/qld/forecasts/townsville.shtml",
  bomWarnings: "http://www.bom.gov.au/qld/warnings/",
  traffic: "https://qldtraffic.qld.gov.au/",
  health: "https://www.health.qld.gov.au/",
  police: "https://www.police.qld.gov.au/",
  ses: "https://www.qfes.qld.gov.au/",
  ergon: "https://www.ergon.com.au/network/outages",
  translink: "https://translink.com.au/",
  sealink: "https://www.sealinkqld.com.au/",
  ferries: "https://www.magneticislandferries.com.au/",
  airport: "https://www.townsvilleairport.com.au/",
  parks: "https://parks.desi.qld.gov.au/park-alerts",
  tis: "https://www.tisnational.gov.au/",
  beachsafe: "https://beachsafe.org.au/",
  tuh: "https://www.townsville.health.qld.gov.au/",
  jcuvet: "https://www.jcu.edu.au/vet-clinic",
};

const DECISION_TABLE: { situation: string; contact: string }[] = [
  { situation: "Immediate danger or serious injury", contact: "Triple Zero — 000" },
  { situation: "Storm damage, fallen tree, temporary roof assistance", contact: "SES — 13 25 00" },
  { situation: "Non-urgent police matter", contact: "Policelink — 13 14 44" },
  { situation: "Non-emergency health advice", contact: "13 HEALTH — 13 43 25 84" },
  { situation: "Council issue (parks, beaches, facilities, animals)", contact: "Townsville City Council — 13 48 10" },
  { situation: "Road closure or road condition", contact: "Queensland Traffic — 13 19 40" },
  { situation: "Fallen powerline or dangerous electrical hazard", contact: "Ergon Energy emergency — 13 16 70" },
  { situation: "Power outage", contact: "Ergon Energy outages — 13 22 96" },
];

const RELATED = [
  { name: "First Time in Townsville", to: "/first-time-in-townsville", text: "Orientation and trip planning for a first visit." },
  { name: "Beat the Heat", to: "/guides/beat-the-heat", text: "Planning around Townsville's heat safely." },
  { name: "Rainy Day Activities", to: "/guides/rainy-day-activities", text: "Wet-weather and indoor options." },
  { name: "Stinger Safety", to: "/guides/stinger-safety", text: "Marine stinger season, nets and first aid." },
  { name: "Townsville Beaches", to: "/beaches", text: "Beach planning, swimming and safety." },
  { name: "Dog Friendly Townsville", to: "/dog-friendly", text: "Dog beaches, off-leash areas and etiquette." },
  { name: "Townsville Without a Car", to: "/townsville-without-a-car", text: "Buses, walking and getting around." },
  { name: "Magnetic Island Ferry", to: "/guides/magnetic-island-ferry", text: "Crossing the bay and planning the trip." },
  { name: "Paluma Day Trip", to: "/guides/paluma-day-trip", text: "Mountain day trip, road and access notes." },
  { name: "Townsville Airport", to: "/townsville-airport", text: "Arrivals, transport and airport basics." },
];

const faqs = [
  {
    q: "What is the emergency number in Townsville?",
    a: "Call 000 for urgent police, fire or ambulance help. From a mobile phone you can also dial 112, and text-based emergency relay users can contact 106.",
  },
  {
    q: "What number should I call for non-emergency police?",
    a: "Call Policelink on 13 14 44 for non-urgent police matters. Use 000 if there is immediate danger or a crime in progress.",
  },
  {
    q: "What is the SES number in Townsville?",
    a: "Call the SES on 13 25 00 for storm or flood assistance that is urgent but not life-threatening, such as storm damage, a fallen tree or temporary roof help. Call 000 if life or property is in immediate danger.",
  },
  {
    q: "Where can I get non-emergency health advice?",
    a: "Call 13 HEALTH on 13 43 25 84 for non-emergency health advice from a registered nurse, available 24 hours a day. It is not a substitute for 000 in a serious emergency.",
  },
  {
    q: "Where should I check Townsville flood and cyclone warnings?",
    a: "Use the Townsville Disaster Dashboard for current local emergency updates, road impacts, closures, outages and warnings, and the Bureau of Meteorology for forecasts and official warnings.",
  },
  {
    q: "What number do I call for Townsville City Council?",
    a: "Call Townsville City Council on 13 48 10 for issues such as parks, beaches, public facilities, local closures, animals, infrastructure and Council services.",
  },
  {
    q: "Where can I check road closures?",
    a: "Check Queensland Traffic on 13 19 40 or the QLDTraffic website for road closures, flooding, road conditions and travel disruptions before longer drives.",
  },
  {
    q: "What should I do about a fallen powerline?",
    a: "Stay well clear and call Ergon Energy's emergency line on 13 16 70 for fallen or damaged powerlines and other dangerous electrical hazards. Call 000 if anyone is injured or there is a fire. For a power outage only, call 13 22 96.",
  },
  {
    q: "Is interpreting help available?",
    a: "Yes. Visitors who need language assistance can use TIS National, the Translating and Interpreting Service, on 13 14 50.",
  },
  {
    q: "Where can I find emergency veterinary care?",
    a: "The JCU Vet emergency and critical care service can be contacted on 1300 528 838. Check current official veterinary information before travelling there, as services and hours can change.",
  },
];

const Ext = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary hover:underline inline-flex items-center gap-1"
  >
    {children}
    <ExternalLink className="w-3 h-3" aria-hidden="true" />
  </a>
);

const Tel = ({ number }: { number: string }) => (
  <a
    href={`tel:${number.replace(/[^0-9+]/g, "")}`}
    className="font-semibold text-primary hover:underline whitespace-nowrap"
  >
    {number}
  </a>
);

const UsefulContacts = () => (
  <>
    <SEOHead title={TITLE} description={DESCRIPTION} canonical={`${SITE}${PATH}`} ogType="article" />
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: H1,
              description: DESCRIPTION,
              mainEntityOfPage: `${SITE}${PATH}`,
              author: { "@type": "Person", name: "Duncan Ross" },
              publisher: { "@type": "Organization", name: "Townsville Guide" },
              dateModified: "2026-08-07",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
                { "@type": "ListItem", position: 2, name: "Useful Contacts", item: `${SITE}${PATH}` },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        })}
      </script>
    </Helmet>

    <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{H1}</h1>

      {/* Emergency block */}
      <div className="rounded-xl border-2 border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/30 p-6 mb-8">
        <p className="text-xl font-bold text-red-900 dark:text-red-200 flex items-center gap-3">
          <PhoneCall className="w-6 h-6 shrink-0" aria-hidden="true" />
          Emergency — Triple Zero (<a href="tel:000" className="underline">000</a>)
        </p>
        <p className="mt-2 text-red-900 dark:text-red-200 font-medium">
          Call 000 for urgent police, fire or ambulance help.
        </p>
        <ul className="mt-3 space-y-1 text-sm text-red-900/85 dark:text-red-200/85">
          <li>112 can be used from mobile phones for emergency calls.</li>
          <li>106 is available for text-based emergency relay users.</li>
        </ul>
      </div>

      <GuideQuickFacts className="mb-10" />

      {/* Decision table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Which number do I need?</h2>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-sm">
            <thead className="bg-muted/60">
              <tr>
                <th scope="col" className="text-left font-semibold p-3">Situation</th>
                <th scope="col" className="text-left font-semibold p-3">Contact</th>
              </tr>
            </thead>
            <tbody>
              {DECISION_TABLE.map((row) => (
                <tr key={row.situation} className="border-t align-top">
                  <td className="p-3 text-muted-foreground">{row.situation}</td>
                  <td className="p-3 font-medium text-foreground">{row.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm font-medium text-foreground">
          For life-threatening emergencies, always call 000 rather than another service.
        </p>
      </section>

      {/* Emergency numbers */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-primary" aria-hidden="true" />
          Emergency numbers
        </h2>
        <ul className="space-y-2 text-muted-foreground">
          <li>Triple Zero — <Tel number="000" /></li>
          <li>Emergency mobile number — <Tel number="112" /></li>
          <li>Text-based emergency relay — <Tel number="106" /></li>
          <li>SES — <Tel number="13 25 00" /></li>
          <li>Policelink — <Tel number="13 14 44" /></li>
        </ul>
        <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
          <li><strong className="text-foreground">000</strong> — immediate police, fire or ambulance emergency.</li>
          <li><strong className="text-foreground">SES</strong> — storm or flood assistance that is urgent but not life-threatening.</li>
          <li><strong className="text-foreground">Policelink</strong> — non-urgent police matters.</li>
        </ul>
      </section>

      {/* Health */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <HeartPulse className="w-5 h-5 text-primary" aria-hidden="true" />
          Health and medical help
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-5">
              <h3 className="font-semibold mb-2">Townsville University Hospital</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>The Emergency Department operates 24/7.</li>
                <li>Serious emergencies should still use 000.</li>
                <li>Visitors can attend the Emergency Department when urgent medical care is needed.</li>
              </ul>
              <p className="mt-3 text-sm">
                <Ext href={LINKS.tuh}>Townsville Hospital and Health Service</Ext>
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <h3 className="font-semibold mb-2">13 HEALTH — <Tel number="13 43 25 84" /></h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>Non-emergency health advice.</li>
                <li>Registered nurse advice.</li>
                <li>Available 24/7.</li>
                <li>Not a substitute for 000 in a serious emergency.</li>
              </ul>
              <p className="mt-3 text-sm">
                <Ext href={LINKS.health}>Queensland Health</Ext>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Weather and disaster */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <CloudSun className="w-5 h-5 text-primary" aria-hidden="true" />
          Severe weather and disaster information
        </h2>
        <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-5 mb-4">
          <h3 className="font-semibold mb-2">Townsville Disaster Dashboard</h3>
          <p className="text-sm text-muted-foreground">
            Use the <Ext href={LINKS.dashboard}>Townsville Disaster Dashboard</Ext> for current local
            information: emergency updates, severe-weather information, road impacts, local closures,
            power outages and current warnings.
          </p>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Ext href={LINKS.bom}>Bureau of Meteorology — Townsville forecast</Ext></li>
          <li><Ext href={LINKS.bomWarnings}>Bureau of Meteorology — Queensland warnings</Ext></li>
          <li><Ext href={LINKS.traffic}>Queensland Traffic</Ext></li>
          <li><Ext href={LINKS.parks}>Queensland Parks alerts</Ext></li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          During unsettled weather, see{" "}
          <Link to="/guides/rainy-day-activities" className="text-primary hover:underline">rainy day activities</Link>,{" "}
          <Link to="/guides/beat-the-heat" className="text-primary hover:underline">beat the heat</Link> for hot
          conditions, and check access notes on the{" "}
          <Link to="/guides/paluma-day-trip" className="text-primary hover:underline">Paluma day trip</Link> guide
          before heading into the range.
        </p>
      </section>

      {/* Road and transport */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Bus className="w-5 h-5 text-primary" aria-hidden="true" />
          Road and transport information
        </h2>
        <p className="text-muted-foreground mb-3">
          <strong className="text-foreground">Queensland Traffic / TMR — <Tel number="13 19 40" /></strong> for road
          closures, flooding, road conditions and travel disruptions.
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Ext href={LINKS.translink}>Translink</Ext> — bus services and current timetables</li>
          <li><Ext href={LINKS.airport}>Townsville Airport</Ext> — flights and airport information</li>
          <li><Ext href={LINKS.sealink}>SeaLink</Ext> — Magnetic Island passenger ferry</li>
          <li><Ext href={LINKS.ferries}>Magnetic Island Ferries</Ext> — vehicle and passenger services</li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          Always use current operator information for timetables. See{" "}
          <Link to="/townsville-without-a-car" className="text-primary hover:underline">Townsville without a car</Link>,{" "}
          the <Link to="/townsville-airport" className="text-primary hover:underline">Townsville Airport guide</Link> and{" "}
          the <Link to="/guides/magnetic-island-ferry" className="text-primary hover:underline">Magnetic Island ferry guide</Link>.
        </p>
      </section>

      {/* Council */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-primary" aria-hidden="true" />
          Townsville City Council
        </h2>
        <p className="text-muted-foreground mb-3">
          <strong className="text-foreground">Townsville City Council — <Tel number="13 48 10" /></strong>
        </p>
        <p className="text-sm text-muted-foreground">
          Council is the right contact for parks, beaches, public facilities, local closures, animals,
          infrastructure and Council services. Check current{" "}
          <Ext href={LINKS.council}>Townsville City Council information</Ext> for service-specific details.
        </p>
      </section>

      {/* Power */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-primary" aria-hidden="true" />
          Power outages and electrical hazards
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Card className="border-amber-300 dark:border-amber-800">
            <CardContent className="p-5">
              <h3 className="font-semibold mb-2">Fallen powerline or dangerous electrical hazard</h3>
              <p className="text-sm text-muted-foreground">
                Ergon Energy emergency — <Tel number="13 16 70" />. Use this for dangerous electrical
                situations such as fallen or damaged powerlines. Call 000 if anyone is injured or there
                is a fire.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
              <h3 className="font-semibold mb-2">Power outage</h3>
              <p className="text-sm text-muted-foreground">
                Ergon Energy outages — <Tel number="13 22 96" />. Use this for electricity supply and
                outage information. See <Ext href={LINKS.ergon}>Ergon Energy outage information</Ext>.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interpreter */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Languages className="w-5 h-5 text-primary" aria-hidden="true" />
          Interpreter help
        </h2>
        <p className="text-muted-foreground">
          <strong className="text-foreground">TIS National — <Tel number="13 14 50" /></strong>. Visitors who
          need language assistance may use the{" "}
          <Ext href={LINKS.tis}>Translating and Interpreting Service</Ext>.
        </p>
      </section>

      {/* Pets */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <PawPrint className="w-5 h-5 text-primary" aria-hidden="true" />
          Pet emergencies
        </h2>
        <p className="text-muted-foreground">
          <strong className="text-foreground">JCU Vet emergency and critical care — <Tel number="1300 528 838" /></strong>{" "}
          for veterinary emergency and critical-care assistance. Check{" "}
          <Ext href={LINKS.jcuvet}>current official veterinary information</Ext> before travelling there.
          Travelling with a dog? See our{" "}
          <Link to="/dog-friendly" className="text-primary hover:underline">dog friendly guide</Link>.
        </p>
      </section>

      {/* Marine */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Waves className="w-5 h-5 text-primary" aria-hidden="true" />
          Swimming and marine safety
        </h2>
        <p className="text-muted-foreground">
          Call 000 for a serious marine or drowning emergency. For planning, see our{" "}
          <Link to="/guides/stinger-safety" className="text-primary hover:underline">stinger safety guide</Link> and{" "}
          <Link to="/beaches" className="text-primary hover:underline">Townsville beaches guide</Link>, plus{" "}
          <Ext href={LINKS.beachsafe}>Beachsafe from Surf Life Saving</Ext> for patrolled beach information.
        </p>
      </section>

      {/* Weather-related travel checks */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Weather-related travel checks</h2>
        <p className="text-muted-foreground mb-3">
          Before travelling to Paluma,{" "}
          <Link to="/little-crystal-creek-townsville" className="text-primary hover:underline">Little Crystal Creek</Link>,{" "}
          <Link to="/guides/magnetic-island-day-trip" className="text-primary hover:underline">Magnetic Island</Link> or
          the northern beaches, check:
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Ext href={LINKS.bom}>Bureau of Meteorology</Ext> for forecasts and warnings</li>
          <li><Ext href={LINKS.traffic}>Queensland Traffic</Ext> for road conditions and closures</li>
          <li><Ext href={LINKS.parks}>Queensland Parks alerts</Ext> for park and walking track access</li>
          <li>Ferry operator notices where relevant</li>
          <li><Ext href={LINKS.dashboard}>Townsville Disaster Dashboard</Ext> during severe conditions</li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          See the <Link to="/guides/paluma-day-trip" className="text-primary hover:underline">Paluma day trip</Link>{" "}
          and <Link to="/guides/magnetic-island-ferry" className="text-primary hover:underline">Magnetic Island ferry</Link>{" "}
          guides for practical planning.
        </p>
      </section>

      {/* What not to use this page for */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What not to use this page for</h2>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>Do not call Council instead of 000 for a life-threatening emergency.</li>
          <li>Do not rely on old screenshots for road or weather conditions.</li>
          <li>Do not rely solely on social-media rumours during severe weather.</li>
          <li>Do not use cached ferry or bus times instead of current operator information.</li>
          <li>Do not treat this page as a replacement for current official alerts.</li>
        </ul>
      </section>

      {/* Current-status links */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Current-status links</h2>
        <div className="grid sm:grid-cols-2 gap-2 text-sm">
          <Ext href={LINKS.council}>Townsville City Council</Ext>
          <Ext href={LINKS.dashboard}>Townsville Disaster Dashboard</Ext>
          <Ext href={LINKS.bom}>Bureau of Meteorology</Ext>
          <Ext href={LINKS.traffic}>Queensland Traffic</Ext>
          <Ext href={LINKS.health}>Queensland Health</Ext>
          <Ext href={LINKS.police}>Queensland Police</Ext>
          <Ext href={LINKS.ses}>SES (Queensland Fire and Emergency Services)</Ext>
          <Ext href={LINKS.ergon}>Ergon Energy</Ext>
          <Ext href={LINKS.translink}>Translink</Ext>
          <Ext href={LINKS.sealink}>SeaLink Magnetic Island</Ext>
          <Ext href={LINKS.ferries}>Magnetic Island Ferries</Ext>
          <Ext href={LINKS.parks}>Queensland Parks alerts</Ext>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Related guides */}
      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-4">Related guides</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {RELATED.map((r) => (
            <Link key={r.to} to={r.to} className="group block">
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-foreground group-hover:text-primary">{r.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{r.text}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  </>
);

export default UsefulContacts;
