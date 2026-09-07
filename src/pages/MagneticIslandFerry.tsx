import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import GuideQuickFacts from "@/components/GuideQuickFacts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Info,
  Ship,
  Car,
  ParkingCircle,
  Ticket,
  Clock,
  Bus,
  Luggage,
  Bike,
  Accessibility,
  Baby,
  Dog,
  CloudRain,
  AlertTriangle,
  HelpCircle,
  ListChecks,
  MapPin,
  ArrowRight,
} from "lucide-react";

const SITE = "https://www.townsvilleguide.com.au";
const PAGE_PATH = "/guides/magnetic-island-ferry";
const PAGE_URL = `${SITE}${PAGE_PATH}`;
const PAGE_TITLE = "Magnetic Island Ferry Guide: Passenger and Car Ferries";
const PAGE_DESCRIPTION =
  "Compare Magnetic Island passenger and vehicle ferries from Townsville, including terminals, crossing times, parking, booking, fares and return planning.";
const LAST_UPDATED = "5 August 2026";

const SEALINK = "https://www.sealinkqld.com.au/magnetic-island-ferry";
const SEALINK_TIMETABLE = "https://www.sealinkqld.com.au/magnetic-island-ferry/timetables";
const SEALINK_FARES = "https://www.sealinkqld.com.au/magnetic-island-ferry/fares";
const MI_FERRIES = "https://www.magneticislandferries.com.au/";
const MI_FERRIES_TIMETABLE = "https://www.magneticislandferries.com.au/timetable/";
const MI_FERRIES_FARES = "https://www.magneticislandferries.com.au/walk-on-passenger-pricing/";
const TRANSLINK = "https://translink.com.au/";
const BOM = "http://www.bom.gov.au/qld/";

const FAQS = [
  {
    q: "Which ferry should foot passengers use?",
    a: "Foot passengers normally use the SeaLink passenger ferry from Breakwater Terminal in Townsville. It is the faster service, with an advertised crossing of approximately 20 minutes to Nelly Bay. Walk-on passengers are also accepted on the vehicle ferry, but that crossing takes longer.",
  },
  {
    q: "Where does the passenger ferry leave from?",
    a: "The SeaLink passenger ferry departs from Breakwater Terminal in Townsville and arrives at the Nelly Bay ferry terminal on Magnetic Island.",
  },
  {
    q: "Where does the vehicle ferry leave from?",
    a: "The Magnetic Island Ferries vehicle ferry departs from Ross Street in South Townsville, which is a different terminal from Breakwater, and arrives at Nelly Bay.",
  },
  {
    q: "How long does the ferry to Magnetic Island take?",
    a: "It depends on the service. The passenger ferry is advertised at approximately 20 minutes, while the vehicle ferry is advertised at approximately 40 minutes. Conditions and operator schedules can affect actual timings.",
  },
  {
    q: "Do you need to book the vehicle ferry?",
    a: "Yes. Magnetic Island Ferries states that vehicle bookings are essential, and you should provide accurate vehicle details when booking. Follow the arrival and boarding time shown in your current booking confirmation.",
  },
  {
    q: "Can you travel to Magnetic Island without a car?",
    a: "Yes. Many visitors travel as foot passengers and use island buses, taxis, tours or walking once they arrive. A car mainly adds flexibility for visitors covering several bays, staying overnight or carrying equipment.",
  },
  {
    q: "Is parking available at Breakwater Terminal?",
    a: "Paid parking is available near Breakwater Terminal. Rates and conditions can change, so check SeaLink's current parking information before travelling, and allow time to park and walk to the terminal.",
  },
  {
    q: "Can you take a dog or bicycle on the ferry?",
    a: "Pet and bicycle arrangements vary between operators and services, and may depend on capacity, ticket conditions or advance notice. Confirm current conditions with the relevant operator before booking, and check the rules for the island destinations you plan to visit.",
  },
  {
    q: "What happens if the ferry timetable changes?",
    a: "Operators may change or cancel departures, particularly in severe weather. Check operator service notices before and during your trip, keep some flexibility in your return plan, and avoid planning around the last possible service.",
  },
];

const CHECKLIST = [
  "Confirm the correct operator for your journey",
  "Confirm the correct Townsville terminal — Breakwater or Ross Street",
  "Confirm both your outward and return services",
  "Check current fares and booking conditions",
  "Check parking arrangements at your departure terminal",
  "Check island transport from Nelly Bay to your first destination",
  "Check luggage, bicycle, pet or mobility requirements",
  "Check the weather forecast and operator service notices",
  "Keep your booking details available for boarding",
];

const MISTAKES = [
  "Going to the wrong Townsville terminal",
  "Confusing the passenger and vehicle ferry crossing times",
  "Failing to book the vehicle ferry in advance",
  "Checking the outward ferry but not the return",
  "Relying on an old timetable screenshot",
  "Arriving without allowing time for parking and boarding",
  "Assuming island buses meet every ferry",
  "Failing to check luggage, bicycle, pet or accessibility requirements",
  "Planning the final return connection too tightly",
];

const RELATED = [
  { name: "Magnetic Island Day Trip", to: "/guides/magnetic-island-day-trip" },
  { name: "Forts Walk Magnetic Island", to: "/guides/forts-walk-magnetic-island" },
  { name: "Townsville Without a Car", to: "/townsville-without-a-car" },
  { name: "First Time in Townsville", to: "/first-time-in-townsville" },
  { name: "Townsville in One Day", to: "/townsville-in-one-day" },
  { name: "Townsville Airport", to: "/townsville-airport" },
  { name: "Townsville with Kids", to: "/townsville-with-kids" },
  { name: "Accessible Townsville", to: "/accessible-townsville" },
  { name: "Dog-Friendly Townsville", to: "/dog-friendly" },
  { name: "Beat the Heat", to: "/guides/beat-the-heat" },
  { name: "Rainy Day Activities", to: "/guides/rainy-day-activities" },
];

const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
    {children}
  </a>
);

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc pl-5">
    {items.map((i) => (
      <li key={i}>{i}</li>
    ))}
  </ul>
);

const MagneticIslandFerry = () => {
  return (
    <>
      <SEOHead
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        canonical={PAGE_URL}
        ogType="article"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Magnetic Island Ferry Guide: Passenger and Vehicle Ferries",
            description: PAGE_DESCRIPTION,
            author: { "@type": "Person", name: "Duncan Ross" },
            publisher: { "@type": "Organization", name: "Townsville Guide" },
            mainEntityOfPage: PAGE_URL,
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
                name: "Magnetic Island Day Trip",
                item: `${SITE}/guides/magnetic-island-day-trip`,
              },
              { "@type": "ListItem", position: 3, name: "Magnetic Island Ferry Guide", item: PAGE_URL },
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

      <article className="container mx-auto max-w-4xl px-4 py-10 md:py-14">
        <div className="space-y-12">
          {/* 1. Hero */}
          <header className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">
              Magnetic Island Ferry Guide
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Two different ferry services connect Townsville with Magnetic Island. SeaLink
              operates the faster passenger ferry from Breakwater Terminal, while Magnetic Island
              Ferries carries vehicles from Ross Street in South Townsville. Choosing the correct
              ferry and terminal is the most important part of planning the trip.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Fares, timetables, parking charges and boarding requirements can change, so use this
              guide to understand the options and then confirm the latest details with the relevant
              operator.
            </p>
            <p className="text-sm text-muted-foreground">Updated {LAST_UPDATED}</p>
            <img
              src="/magnetic-island-guide.webp"
              alt="Magnetic Island ferry terminal building beside the water, with the vehicle marshalling area in the foreground"
              className="rounded-xl shadow-lg w-full h-[280px] md:h-[440px] object-cover"
              width={1600}
              height={900}
              loading="eager"
              decoding="async"
            />
          </header>

          {/* 2. Current-information notice */}
          <Alert>
            <Info className="h-4 w-4" aria-hidden="true" />
            <AlertTitle>Check Before You Travel</AlertTitle>
            <AlertDescription>
              <p className="mb-2">
                Ferry timetables, fares, parking arrangements, boarding requirements and service
                notices can change. Confirm your outward and return journeys directly with the
                correct ferry operator before travelling.
              </p>
              <div className="flex flex-wrap gap-3 mt-3">
                <Button asChild variant="outline" size="sm">
                  <a href={SEALINK} target="_blank" rel="noopener noreferrer">
                    SeaLink passenger ferry
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a href={MI_FERRIES} target="_blank" rel="noopener noreferrer">
                    Magnetic Island Ferries (vehicle ferry)
                  </a>
                </Button>
              </div>
            </AlertDescription>
          </Alert>

          {/* 3. Quick comparison */}
          <section className="space-y-4" aria-labelledby="comparison">
            <h2
              id="comparison"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Ship className="w-6 h-6 text-primary" aria-hidden="true" />
              Passenger Ferry or Vehicle Ferry?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">SeaLink passenger ferry</CardTitle>
                </CardHeader>
                <CardContent>
                  <Bullets
                    items={[
                      "Best for foot passengers",
                      "Departs from Breakwater Terminal, Townsville",
                      "Arrives at the Nelly Bay ferry terminal",
                      "Approximately 20-minute crossing",
                      "Useful for visitors using buses, taxis, tours or walking after arrival",
                      "Paid terminal parking is available nearby",
                      "Check the current timetable and fares before booking",
                    ]}
                  />
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">Magnetic Island vehicle ferry</CardTitle>
                </CardHeader>
                <CardContent>
                  <Bullets
                    items={[
                      "Best for visitors taking a car, motorcycle or other vehicle",
                      "Departs from Ross Street, South Townsville",
                      "Arrives at Nelly Bay",
                      "Approximately 40-minute crossing",
                      "Vehicle booking is essential",
                      "Walk-on passengers are also accepted",
                      "Check current vehicle restrictions, fares and boarding instructions",
                    ]}
                  />
                </CardContent>
              </Card>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Choose the passenger ferry when travelling without a vehicle. Choose the vehicle ferry
              when the flexibility of taking a car justifies the additional booking, cost and travel
              time.
            </p>
          </section>

          {/* 4. Quick Facts */}
          <GuideQuickFacts />

          {/* 5. Passenger ferry */}
          <section className="space-y-4" aria-labelledby="passenger-ferry">
            <h2
              id="passenger-ferry"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Ship className="w-6 h-6 text-primary" aria-hidden="true" />
              SeaLink Passenger Ferry
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The SeaLink passenger ferry is the faster option for foot passengers. It leaves from
              Breakwater Terminal in Townsville, the crossing is advertised as approximately 20
              minutes, and it arrives at the Nelly Bay ferry terminal on Magnetic Island. Services
              operate throughout the day, but schedules vary by day and season.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Booking online may save time at the terminal and helps you plan the day around a
              specific departure. Choose your return service before finalising the island itinerary
              rather than deciding once you are on the island.
            </p>
            <p className="text-muted-foreground leading-relaxed">Before travelling, check:</p>
            <Bullets
              items={[
                "The current timetable for your travel date",
                "Ticket conditions, including changes and refunds",
                "Luggage policy",
                "Bicycle policy",
                "Pet policy",
                "Accessibility arrangements",
                "Any current service notices",
              ]}
            />
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline" size="sm">
                <a href={SEALINK} target="_blank" rel="noopener noreferrer">
                  SeaLink Magnetic Island ferry
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href={SEALINK_TIMETABLE} target="_blank" rel="noopener noreferrer">
                  SeaLink timetable
                </a>
              </Button>
            </div>
          </section>

          {/* 6. Breakwater Terminal */}
          <section className="space-y-4" aria-labelledby="breakwater">
            <h2
              id="breakwater"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
              Breakwater Terminal in Townsville
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Breakwater Terminal is the SeaLink passenger-ferry terminal, and it is a separate
              location from the Ross Street vehicle-ferry terminal in South Townsville. Do not
              assume the two are interchangeable.
            </p>
            <Bullets
              items={[
                "Paid parking is available nearby",
                "Taxis and rideshare can be a practical alternative to parking",
                "Allow enough time to park, walk to the terminal and board",
                "Airport travellers should organise transport in advance",
              ]}
            />
            <p className="text-muted-foreground leading-relaxed">
              Check SeaLink's current parking information because daily rates and conditions may
              change. Parking arrangements, security and monitoring are matters for the operator, so
              treat their current information as the authority.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/townsville-airport" className="text-primary font-medium hover:underline">
                Townsville Airport guide →
              </Link>
              <Link to="/townsville-without-a-car" className="text-primary font-medium hover:underline">
                Townsville Without a Car →
              </Link>
            </div>
          </section>

          {/* 7. Vehicle ferry */}
          <section className="space-y-4" aria-labelledby="vehicle-ferry">
            <h2
              id="vehicle-ferry"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Car className="w-6 h-6 text-primary" aria-hidden="true" />
              Magnetic Island Vehicle Ferry
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Magnetic Island Ferries operates the vehicle service from Ross Street in South
              Townsville. This is the service to use when taking a car or other vehicle across, and
              the crossing is advertised as approximately 40 minutes to Nelly Bay.
            </p>
            <Bullets
              items={[
                "Vehicle bookings are essential according to the operator",
                "Walk-on passengers are also accepted",
                "Provide accurate vehicle information when booking",
                "Larger vehicles, trailers and unusual vehicle types may require additional arrangements",
                "Check the operator's current boarding instructions rather than relying on a fixed cut-off time",
              ]}
            />
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline" size="sm">
                <a href={MI_FERRIES} target="_blank" rel="noopener noreferrer">
                  Magnetic Island Ferries
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href={MI_FERRIES_TIMETABLE} target="_blank" rel="noopener noreferrer">
                  Vehicle ferry timetable
                </a>
              </Button>
            </div>
          </section>

          {/* 8. Should you take a car */}
          <section className="space-y-4" aria-labelledby="take-a-car">
            <h2
              id="take-a-car"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Car className="w-6 h-6 text-primary" aria-hidden="true" />
              Is Taking a Car Worth It?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">A car may be worthwhile when</CardTitle>
                </CardHeader>
                <CardContent>
                  <Bullets
                    items={[
                      "Travelling with young children or substantial equipment",
                      "Visiting several bays in one trip",
                      "Wanting flexibility away from bus routes",
                      "Staying overnight",
                      "Carrying mobility equipment",
                      "Visiting when waiting outdoors may be uncomfortable",
                    ]}
                  />
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">A car may not be necessary when</CardTitle>
                </CardHeader>
                <CardContent>
                  <Bullets
                    items={[
                      "Making a simple day trip",
                      "Using the island bus",
                      "Joining a tour",
                      "Focusing on two or three main locations",
                      "Staying near Nelly Bay",
                      "Avoiding the additional vehicle-ferry cost and booking process",
                    ]}
                  />
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/guides/magnetic-island-day-trip"
                className="text-primary font-medium hover:underline"
              >
                Magnetic Island Day Trip guide →
              </Link>
              <Link to="/townsville-without-a-car" className="text-primary font-medium hover:underline">
                Townsville Without a Car →
              </Link>
            </div>
          </section>

          {/* 9. Booking and boarding */}
          <section className="space-y-4" aria-labelledby="booking">
            <h2
              id="booking"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Ticket className="w-6 h-6 text-primary" aria-hidden="true" />
              Booking and Boarding
            </h2>
            <Bullets
              items={[
                "Vehicle passengers should book in advance",
                "Passenger-ferry travellers should still check availability and current booking advice",
                "Busy weekends, school holidays and events may increase demand",
                "Arrive early enough for parking, ticketing and boarding",
                "Boarding instructions differ between the two operators",
                "Check booking-reference and identification requirements before you leave",
                "A missed service can affect the entire island itinerary",
              ]}
            />
            <p className="text-muted-foreground leading-relaxed">
              Follow the arrival and boarding time shown in the current booking confirmation.
            </p>
          </section>

          {/* 10. Fares */}
          <section className="space-y-4" aria-labelledby="fares">
            <h2
              id="fares"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Ticket className="w-6 h-6 text-primary" aria-hidden="true" />
              Ferry Fares
            </h2>
            <p className="text-muted-foreground leading-relaxed">Prices depend on factors including:</p>
            <Bullets
              items={[
                "Passenger age",
                "Concession eligibility",
                "One-way or return travel",
                "Online or other booking conditions",
                "Vehicle type and size",
                "Trailer or larger-vehicle requirements",
                "Promotions or package offers",
              ]}
            />
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline" size="sm">
                <a href={SEALINK_FARES} target="_blank" rel="noopener noreferrer">
                  Check passenger-ferry fares
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href={MI_FERRIES_FARES} target="_blank" rel="noopener noreferrer">
                  Check vehicle-ferry fares
                </a>
              </Button>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Prices shown on Townsville Guide should never replace the operator's booking price.
            </p>
          </section>

          {/* 11. Return planning */}
          <section className="space-y-4" aria-labelledby="return-first">
            <h2
              id="return-first"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
              Choose the Return Ferry First
            </h2>
            <Bullets
              items={[
                "Identify a realistic return service before leaving Townsville",
                "Check how long it will take to get back to Nelly Bay from your furthest stop",
                "Include bus, taxi, parking or walking time in that estimate",
                "Allow a buffer for delays",
                "Recheck service notices during the day",
                "Avoid planning around the last possible service unless you are prepared for the consequences of missing it",
              ]}
            />
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline" size="sm">
                <a href={SEALINK_TIMETABLE} target="_blank" rel="noopener noreferrer">
                  Passenger ferry timetable
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href={MI_FERRIES_TIMETABLE} target="_blank" rel="noopener noreferrer">
                  Vehicle ferry timetable
                </a>
              </Button>
            </div>
          </section>

          {/* 12. Parking */}
          <section className="space-y-4" aria-labelledby="parking">
            <h2
              id="parking"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <ParkingCircle className="w-6 h-6 text-primary" aria-hidden="true" />
              Parking at the Townsville Ferry Terminals
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">Breakwater Terminal</CardTitle>
                </CardHeader>
                <CardContent>
                  <Bullets
                    items={[
                      "Paid passenger parking is available",
                      "Check current rates and conditions with SeaLink",
                      "Allow walking time between your vehicle and the terminal",
                      "Do not rely on alternative city parking without checking current restrictions",
                    ]}
                  />
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">Ross Street vehicle-ferry terminal</CardTitle>
                </CardHeader>
                <CardContent>
                  <Bullets
                    items={[
                      "Visitors taking a vehicle will normally board with it",
                      "Walk-on customers should check parking arrangements directly with Magnetic Island Ferries",
                      "Do not assume Breakwater Terminal parking is suitable for a Ross Street departure",
                    ]}
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 13. Arriving at Nelly Bay */}
          <section className="space-y-4" aria-labelledby="nelly-bay">
            <h2
              id="nelly-bay"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
              Arriving at Nelly Bay
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Both services arrive in the Nelly Bay area, but the passenger-ferry and vehicle-ferry
              arrival facilities are associated with different services, so check which one applies
              to your booking.
            </p>
            <Bullets
              items={[
                "Buses, taxis and other transport may be available near the terminal area",
                "Know your first destination before you arrive",
                "Plan island transport and ferry times together, not separately",
              ]}
            />
            <div className="flex flex-wrap gap-4">
              <Link
                to="/guides/magnetic-island-day-trip"
                className="text-primary font-medium hover:underline"
              >
                Magnetic Island Day Trip →
              </Link>
              <Link to="/townsville-without-a-car" className="text-primary font-medium hover:underline">
                Townsville Without a Car →
              </Link>
            </div>
          </section>

          {/* 14. Island buses */}
          <section className="space-y-4" aria-labelledby="island-bus">
            <h2
              id="island-bus"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Bus className="w-6 h-6 text-primary" aria-hidden="true" />
              Connecting With the Island Bus
            </h2>
            <Bullets
              items={[
                "Translink Route 250 serves Magnetic Island",
                "Stops include the ferry-terminal area and the main island communities",
                "Use the current Translink journey planner for live routes and times",
                "Service frequency varies through the day",
                "Include waiting time in your itinerary — not every ferry has a matching bus",
                "Check payment methods and fares before travelling",
              ]}
            />
            <p className="text-muted-foreground leading-relaxed">
              <ExternalLink href={TRANSLINK}>Translink journey planner and timetables</ExternalLink>
            </p>
          </section>

          {/* 15. Luggage */}
          <section className="space-y-4" aria-labelledby="luggage">
            <h2
              id="luggage"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Luggage className="w-6 h-6 text-primary" aria-hidden="true" />
              Luggage and Equipment
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Check the operator's current rules for:
            </p>
            <Bullets
              items={[
                "Suitcases",
                "Bulky items",
                "Prams",
                "Wheelchairs and mobility aids",
                "Bicycles",
                "Surfboards and other sporting equipment",
                "Dangerous goods",
                "Vehicle loads",
              ]}
            />
            <p className="text-muted-foreground leading-relaxed">
              Contact the operator before travelling with oversized, unusual or essential mobility
              equipment.
            </p>
          </section>

          {/* 16. Bicycles */}
          <section className="space-y-4" aria-labelledby="bicycles">
            <h2
              id="bicycles"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Bike className="w-6 h-6 text-primary" aria-hidden="true" />
              Taking a Bicycle
            </h2>
            <Bullets
              items={[
                "Bicycles and e-bikes may be accepted subject to operator rules, capacity and ticket conditions",
                "Check whether advance notice or an additional fare applies",
                "Consider the island's hills, heat, roads and distances between bays",
                "A bicycle is not automatically an easy alternative to using a car or the bus",
              ]}
            />
          </section>

          {/* 17. Accessibility */}
          <section className="space-y-4" aria-labelledby="accessibility">
            <h2
              id="accessibility"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Accessibility className="w-6 h-6 text-primary" aria-hidden="true" />
              Accessibility and Mobility Needs
            </h2>
            <Bullets
              items={[
                "Boarding arrangements differ by vessel and operator",
                "Discuss mobility-aid dimensions and assistance requirements before travelling",
                "Vehicle travel suits some visitors but is not automatically accessible for everyone",
                "Island buses, taxis, paths and beaches have separate accessibility considerations",
                "Confirm the complete journey, not only the ferry crossing",
              ]}
            />
            <Link to="/accessible-townsville" className="text-primary font-medium hover:underline">
              Accessible Townsville →
            </Link>
          </section>

          {/* 18. Children */}
          <section className="space-y-4" aria-labelledby="children">
            <h2
              id="children"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Baby className="w-6 h-6 text-primary" aria-hidden="true" />
              Travelling With Children
            </h2>
            <Bullets
              items={[
                "Allow extra time for parking and boarding",
                "Keep children supervised around terminals, ramps and vessels",
                "Bring water, snacks and sun protection",
                "Plan toilet stops before and after the crossing",
                "Avoid an overly ambitious island itinerary",
                "Check pram and luggage arrangements with the operator",
                "Choose the return ferry before the day begins",
              ]}
            />
            <Link to="/townsville-with-kids" className="text-primary font-medium hover:underline">
              Townsville with Kids →
            </Link>
          </section>

          {/* 19. Dogs */}
          <section className="space-y-4" aria-labelledby="dogs">
            <h2
              id="dogs"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <Dog className="w-6 h-6 text-primary" aria-hidden="true" />
              Taking a Dog on the Ferry
            </h2>
            <Bullets
              items={[
                "Pet rules vary between the two ferry operators",
                "Conditions may differ for foot passengers and vehicle passengers",
                "National park restrictions apply across much of Magnetic Island",
                "Beaches and public areas have separate rules",
                "Confirm both the ferry journey and every planned island destination",
              ]}
            />
            <Link to="/dog-friendly" className="text-primary font-medium hover:underline">
              Dog-Friendly Townsville →
            </Link>
          </section>

          {/* 20. Weather */}
          <section className="space-y-4" aria-labelledby="weather">
            <h2
              id="weather"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <CloudRain className="w-6 h-6 text-primary" aria-hidden="true" />
              Weather, Delays and Service Changes
            </h2>
            <Bullets
              items={[
                "Severe weather may affect ferry services",
                "Operators may change or cancel departures",
                "Check operator notices and Bureau of Meteorology warnings",
                "Build flexibility into your return plan",
                "Follow crew instructions at all times",
                "Townsville Guide cannot guarantee that any service will operate",
              ]}
            />
            <p className="text-muted-foreground leading-relaxed">
              <ExternalLink href={BOM}>Bureau of Meteorology — Queensland warnings</ExternalLink> ·{" "}
              <Link to="/guides/rainy-day-activities" className="text-primary hover:underline">
                Rainy Day Activities
              </Link>
            </p>
          </section>

          {/* 21. Common mistakes */}
          <section className="space-y-4" aria-labelledby="mistakes">
            <h2
              id="mistakes"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <AlertTriangle className="w-6 h-6 text-primary" aria-hidden="true" />
              Common Mistakes
            </h2>
            <Bullets items={MISTAKES} />
          </section>

          {/* 22. FAQ */}
          <section className="space-y-4" aria-labelledby="faq">
            <h2
              id="faq"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <HelpCircle className="w-6 h-6 text-primary" aria-hidden="true" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <Card key={f.q}>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* 23. Checklist */}
          <section className="space-y-4" aria-labelledby="checklist">
            <h2
              id="checklist"
              className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2"
            >
              <ListChecks className="w-6 h-6 text-primary" aria-hidden="true" />
              Quick Planning Checklist
            </h2>
            <Card>
              <CardContent className="p-5">
                <p className="text-muted-foreground mb-3">Before leaving for the terminal:</p>
                <Bullets items={CHECKLIST} />
              </CardContent>
            </Card>
          </section>

          {/* 24. Related guides */}
          <section className="space-y-4" aria-labelledby="related">
            <h2 id="related" className="text-2xl md:text-3xl font-bold text-foreground">
              Related Townsville Guides
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {RELATED.map((g) => (
                <Link key={g.to} to={g.to} className="group">
                  <Card className="h-full transition-shadow hover:shadow-md">
                    <CardContent className="p-4 flex items-center justify-between gap-3">
                      <span className="font-medium text-foreground group-hover:text-primary">
                        {g.name}
                      </span>
                      <ArrowRight
                        className="w-4 h-4 text-muted-foreground flex-shrink-0"
                        aria-hidden="true"
                      />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

export default MagneticIslandFerry;
