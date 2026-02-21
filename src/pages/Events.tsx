import { Calendar, MapPin, Music, Info, ArrowRight, ExternalLink, Dog, Footprints } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";

const Events = () => {
  return (
    <>
      <SEOHead
        title="What’s On in Townsville (Feb 16 – Feb 22, 2026) | Local Events Guide"
        description="Discover what’s happening in Townsville from Feb 16 – Feb 22, 2026. Markets, live music, coastal walks and local favourites — updated weekly."
        canonical="https://www.myaussieguide.com.au/events"
      />

      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Header Section */}
        <div className="bg-white border-b sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link
              to="/"
              className="text-gray-600 hover:text-primary flex items-center gap-2 text-sm font-medium transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Home
            </Link>
            <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              Updated: February 16, 2026 (Weekly Local Update)
            </span>
          </div>
        </div>

        <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl space-y-8">
          
          {/* Hero Section */}
          <div className="space-y-4 text-center sm:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
              What’s On: Feb 16 – Feb 22
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Planning your weekend in Townsville? Here’s what locals are doing this week.
            </p>
            <p className="text-lg text-gray-600 max-w-2xl">
              February in Townsville means warm mornings, afternoon storms, and peak waterfall season. Plan outdoor activities early and enjoy the coastal breeze in the evenings.
            </p>
          </div>

          {/* AI Call to Action */}
          <Card className="bg-primary/5 border-primary/20 shadow-sm">
            <CardContent className="flex flex-col md:flex-row items-center gap-6 p-6">
              <div className="flex-grow space-y-2 text-center md:text-left">
                <h3 className="font-semibold text-lg text-primary">What's On This Week?</h3>
                <p className="text-sm text-gray-600">
                  Ask me: "What's the best sunrise walk in Townsville?" or "Is it safe to swim this weekend?"
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Button asChild className="w-full sm:w-auto">
                  <Link to="/">Ask AI Agent</Link>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto gap-2">
                  <a
                    href="https://whatson.townsville.qld.gov.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Official Event Calendar
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* This Weekend's Highlights */}
          <section className="space-y-6">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-gray-900">
                This Weekend's Highlights
              </h2>
              <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                Feb 20 - 22
              </Badge>
            </div>

            {/* KEEP ALL YOUR EXISTING CARDS BELOW UNCHANGED */}
            {/* (Sunrise at Castle Hill, Jezzine Walk, Markets etc.) */}

          </section>

          {/* Recurring Events */}
          <section className="pt-8 border-t">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Recurring Events
            </h2>
            {/* KEEP YOUR EXISTING RECURRING EVENT CARDS */}
          </section>

          {/* Major 2026 Events */}
          <section className="pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Major 2026 Events to Plan For
            </h2>
            <p className="text-gray-600 mb-6">
              Mark your calendar for these highlights.
            </p>
            {/* KEEP YOUR EXISTING CONTENT */}
          </section>

          {/* Footer CTA */}
          <section className="pt-8 pb-8 border-t">
            <div className="bg-primary/5 rounded-2xl p-8 text-center space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Have specific questions about the weekend?
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Not sure where to park or if your dog is allowed? Ask our AI agent on the homepage.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/">Ask the Local AI</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link to="/dog-friendly">
                    <Dog className="w-4 h-4" />
                    View Dog Beach Guide
                  </Link>
                </Button>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
};

export default Events;
