import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";

const Beaches = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">

      <SEOHead
        title="Best Beaches in Townsville — Swimming, Safety & Local Tips"
        description="Local guide to the best beaches in Townsville. Find stinger net locations, safe swimming spots, quiet beaches, and dog-friendly areas across North Queensland."
        canonical="https://www.myaussieguide.com.au/beaches"
      />

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl space-y-10">

        {/* Intro */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">
            Best Beaches in Townsville — Swimming, Safety & Local Tips
          </h1>
          <p className="text-muted-foreground">
            Townsville offers a variety of beaches for swimming, walking, relaxing, and exploring.
            This guide covers the safest swimming spots, stinger-net beaches, quieter locations,
            and dedicated dog-friendly areas across North Queensland.
          </p>
        </section>

        {/* Beach Guide */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Beach Guide</h2>

          <div className="grid gap-6 md:grid-cols-2">

            {/* The Strand */}
            <Card>
              <CardHeader>
                <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                <CardTitle className="mt-2">The Strand</CardTitle>
                <p className="text-sm text-muted-foreground">Townsville's Foreshore</p>
                <p className="text-sm">On-leash only</p>
                <p className="text-sm">Stinger net available</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">Stinger Nets</Badge>
                  <Badge variant="outline">Rockpool</Badge>
                  <Badge variant="outline">Water Park</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  The city's playground. Features a swimming enclosure, the rockpool,
                  water park for kids, and endless cafes. Safe for swimming inside nets.
                </p>
                <Button asChild>
                  <Link to="/the-strand">View Strand Guide</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pallarenda */}
            <Card>
              <CardHeader>
                <Badge className="bg-emerald-100 text-emerald-800">Dog Friendly</Badge>
                <CardTitle className="mt-2">Pallarenda Beach</CardTitle>
                <p className="text-sm text-muted-foreground">North of City (10min drive)</p>
                <p className="text-sm">Off-leash area available</p>
                <p className="text-sm">Stinger net available</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">Off-Leash Area</Badge>
                  <Badge variant="outline">Stinger Net</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  A long stretch of sand perfect for dog walking.
                  One of the best off-leash beaches in Townsville.
                </p>
                <Button asChild>
                  <Link to="/dog-friendly">View Dog Beach Guide</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Rowes Bay */}
            <Card>
              <CardHeader>
                <Badge variant="outline">Sunset Spot</Badge>
                <CardTitle className="mt-2">Rowes Bay</CardTitle>
                <p className="text-sm text-muted-foreground">Between Strand & Pallarenda</p>
                <p className="text-sm">On-leash</p>
                <p className="text-sm">Stinger net available</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">Stinger Net</Badge>
                  <Badge variant="outline">Quiet</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Quieter than the Strand. Excellent for sunset walks.
                  Verify tide levels as it becomes shallow.
                </p>
                <Button asChild>
                  <Link to="/rowes-bay">View Rowes Bay Guide</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Magnetic Island */}
            <Card>
              <CardHeader>
                <Badge variant="outline">Day Trip</Badge>
                <CardTitle className="mt-2">Magnetic Island Beaches</CardTitle>
                <p className="text-sm text-muted-foreground">20min Ferry Ride</p>
                <p className="text-sm">Varies by beach</p>
                <p className="text-sm">Stinger net available</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">Alma Bay</Badge>
                  <Badge variant="outline">Horseshoe Bay</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Alma Bay is patrolled and family friendly.
                  Horseshoe Bay has water sports and stinger nets.
                </p>
                <Button asChild>
                  <Link to="/guides/magnetic-island-day-trip">
                    View Day Trip Guide
                  </Link>
                </Button>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Northern Beaches */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Northern Beaches & Hidden Gems</h2>

          <div className="grid gap-6 md:grid-cols-3">

            <Card>
              <CardHeader>
                <Badge variant="outline">Quiet</Badge>
                <CardTitle className="mt-2">Saunders Beach</CardTitle>
                <p className="text-sm text-muted-foreground">30 min North</p>
                <p className="text-sm">Dog friendly</p>
                <p className="text-sm">No stinger net</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  6km of golden sand and no crowds.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge variant="outline">Remote</Badge>
                <CardTitle className="mt-2">Toolakea Beach</CardTitle>
                <p className="text-sm text-muted-foreground">40 min North</p>
                <p className="text-sm">On-leash</p>
                <p className="text-sm">No stinger net</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Quiet residential beach. Very shallow at low tide.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge variant="outline">Day Trip</Badge>
                <CardTitle className="mt-2">Balgal Beach</CardTitle>
                <p className="text-sm text-muted-foreground">1 hour North</p>
                <p className="text-sm">Dog friendly</p>
                <p className="text-sm">Stinger net available</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Northern beach with a patrolled stinger net (Nov–May).
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Safety */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Beach Safety in Townsville</h2>

          <p className="text-sm text-muted-foreground">
            Marine stingers are present November to May.
            Always swim within stinger nets during this period.
            For full advice see our{" "}
            <Link to="/guides/stinger-safety" className="text-primary underline">
              Stinger Safety Guide
            </Link>.
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Are dogs allowed on Townsville beaches?</h3>
              <p className="text-sm text-muted-foreground">
                Yes. Pallarenda has off-leash areas.
                Most other beaches require dogs to be on-leash.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">When is stinger season?</h3>
              <p className="text-sm text-muted-foreground">
                November to May.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Best stinger-free swimming?</h3>
              <p className="text-sm text-muted-foreground">
                Little Crystal Creek in Paluma National Park.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Beaches;
