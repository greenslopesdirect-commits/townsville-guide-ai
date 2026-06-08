import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  AlertTriangle,
  HeartPulse,
  Building2,
  PawPrint,
  Bus,
  Download,
  Lightbulb,
} from "lucide-react";

interface ContactItem {
  label: string;
  number: string;
  note?: string;
}

const ContactRow = ({ item }: { item: ContactItem }) => (
  <li className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-3 border-b border-border last:border-0">
    <div className="flex-1">
      <p className="font-medium text-foreground">{item.label}</p>
      {item.note && (
        <p className="text-xs text-muted-foreground mt-0.5">{item.note}</p>
      )}
    </div>
    <a
      href={`tel:${item.number.replace(/[^0-9+]/g, "")}`}
      className="inline-flex items-center gap-1.5 font-mono font-semibold text-primary hover:underline shrink-0"
    >
      <Phone className="w-3.5 h-3.5" aria-hidden="true" />
      {item.number}
    </a>
  </li>
);

const ContactSection = ({
  icon,
  title,
  accent,
  items,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  accent: string;
  items?: ContactItem[];
  children?: React.ReactNode;
}) => (
  <Card className={`border-l-4 ${accent}`}>
    <CardHeader className="pb-2">
      <CardTitle className="flex items-center gap-2 text-xl">
        {icon}
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      {items && (
        <ul className="divide-y divide-border">
          {items.map((item) => (
            <ContactRow key={item.label} item={item} />
          ))}
        </ul>
      )}
      {children}
    </CardContent>
  </Card>
);

const UsefulContacts = () => {
  return (
    <>
      <SEOHead
        title="Useful Townsville Contacts | Emergency, Health & Council Numbers"
        description="A handy mobile-friendly list of essential Townsville phone numbers — emergency services, hospitals, council, utilities, vets, wildlife rescue and transport."
        canonical="https://www.myaussieguide.com.au/useful-contacts"
      />

      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-10 max-w-3xl space-y-8">
          {/* Hero */}
          <header className="space-y-4">
            <Badge variant="secondary" className="bg-red-50 text-red-700 w-fit">
              Keep Handy
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Essential Contacts &amp; Emergency Info
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The numbers you hope you don't need, but should have on hand while
              exploring Townsville. Tap any number to call directly from your phone.
            </p>
            <Button asChild variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
              <a
                href="/townsville-useful-contacts.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Download className="w-4 h-4" />
                Download PDF Guide
              </a>
            </Button>
          </header>

          {/* Pro Tip */}
          <div className="flex items-start gap-3 p-4 rounded-lg bg-amber-50 border border-amber-200 text-sm text-amber-900">
            <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p>
              <strong>Pro-Tip:</strong> Save this page to your home screen or
              download the PDF for offline access in areas with spotty signal like
              Paluma or the Northern Beaches.
            </p>
          </div>

          {/* Essential & Non-Urgent Numbers */}
          <ContactSection
            icon={<AlertTriangle className="w-5 h-5 text-red-600" />}
            title="Townsville Essential & Non-Urgent Numbers"
            accent="border-l-red-500"
            items={[
              {
                label: "Emergency (Police, Fire, Ambulance)",
                number: "000",
                note: "Life-threatening emergencies only",
              },
              {
                label: "Non-Urgent Ambulance Transport & Bookings",
                number: "13 12 33",
                note: "Queensland Ambulance Service non-emergency line",
              },
              {
                label: "Non-Urgent Medical Advice (13 HEALTH)",
                number: "13 43 25 84",
                note: "Registered nurse phone service available 24/7",
              },
              {
                label: "Townsville Hospital Switchboard",
                number: "(07) 4433 1111",
              },
              {
                label: "Townsville City Council (General Enquiries)",
                number: "1300 878 001",
              },
              {
                label: "Non-Emergency Police (PoliceLink)",
                number: "131 444",
              },
              {
                label: "SES (Flood / Storm)",
                number: "132 500",
              },
            ]}
          />

          {/* Health */}
          <ContactSection
            icon={<HeartPulse className="w-5 h-5 text-rose-600" />}
            title="Health & Medical"
            accent="border-l-rose-500"
            items={[
              {
                label: "Townsville University Hospital (Public)",
                number: "(07) 4433 1111",
                note: "100 Angus Smith Dr, Douglas",
              },
              {
                label: "Mater Private Hospital",
                number: "(07) 4727 4444",
              },
              {
                label: "HealthDirect (24/7 Nurse)",
                number: "1800 022 222",
              },
            ]}
          >
            <div className="mt-4 p-3 rounded-md bg-rose-50 border border-rose-100 text-sm text-rose-900">
              <strong>24-Hour Pharmacy:</strong> Whole Health Pharmacy &amp;
              Healthfoods (Peels St) —{" "}
              <a href="tel:0747285500" className="font-mono font-semibold underline">
                (07) 4728 5500
              </a>
              . The most reliable late-night option in the CBD.
            </div>
          </ContactSection>

          {/* Council & Utilities */}
          <ContactSection
            icon={<Building2 className="w-5 h-5 text-blue-600" />}
            title="Council & Utilities"
            accent="border-l-blue-500"
            items={[
              {
                label: "Townsville City Council",
                number: "13 48 10",
                note: "Water bursts, animal control, road issues",
              },
              {
                label: "Ergon Energy (Power Outages)",
                number: "13 22 96",
              },
            ]}
          />

          {/* Pet & Wildlife */}
          <ContactSection
            icon={<PawPrint className="w-5 h-5 text-amber-600" />}
            title="Pet & Wildlife (🐾 Max Approved)"
            accent="border-l-amber-500"
            items={[
              {
                label: "JCU Vet (Emergency)",
                number: "(07) 4781 3600",
                note: "After-hours emergency vet care",
              },
              {
                label: "Townsville Vet Clinic",
                number: "(07) 4779 0233",
              },
              {
                label: "North Queensland Wildlife Care",
                number: "(07) 4728 6197",
                note: "Injured native wildlife rescue",
              },
              {
                label: "Local Snake Catcher (24/7)",
                number: "0407 ___ ___",
                note: "Licensed catcher — placeholder, confirm before saving",
              },
            ]}
          />

          {/* Transport */}
          <ContactSection
            icon={<Bus className="w-5 h-5 text-emerald-600" />}
            title="Transport"
            accent="border-l-emerald-500"
            items={[
              {
                label: "13cabs Townsville",
                number: "13 22 27",
              },
              {
                label: "SeaLink (Magnetic Island Ferry)",
                number: "(07) 4726 0800",
              },
              {
                label: "RACQ (Roadside Assistance)",
                number: "13 11 11",
              },
            ]}
          />

          <p className="text-xs text-muted-foreground pt-4 border-t">
            Numbers verified June 2026. If you spot an out-of-date listing, please
            let us know via the Contact page.
          </p>
        </main>
      </div>
    </>
  );
};

export default UsefulContacts;
