import { Helmet } from "react-helmet";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, AlertTriangle, Info, CheckCircle, Fish, Dog } from "lucide-react";
import LocalInsightCard from "@/components/LocalInsightCard";

const PallarendaBeach = () => {
  return (
    <>
      <SEOHead
        title="Pallarenda Beach & Dog Off-Leash Guide | My Aussie Guide"
        description="Local guide to Pallarenda Beach. Maps for the Gate 8-10 off-leash dog zone, fishing spots, and stinger safety tips."
        canonical="https://www.myaussieguide.com.au/pallarenda-beach"
      />
      
      <div className="min-h-screen bg-background">
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            
            {/* Back Button */}
            <div className="mb-6">
              <Link to="/beaches">
                <Button variant="ghost" className="group pl-0 hover:bg-transparent hover:text-primary">
                  <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Beaches
                </Button>
              </Link>
            </div>

            {/* Header Section */}
            <div className="mb-10">
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm mb-3">
                    <MapPin className="w-4 h-4" /> Northern Suburbs
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Pallarenda Beach
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    A quieter alternative to The Strand. Famous for its off-leash dog zones, fishing channels, and views of Magnetic Island.
                </p>
            </div>

            {/* Quick Info Grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
                <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                    <div className="flex items-center gap-2 font-bold text-blue-700 dark:text-blue-400 mb-2">
                        <Dog className="w-5 h-5" /> Dog Friendly?
                    </div>
                    <p className="text-sm text-blue-900 dark:text-blue-100">
                        Yes! <br/><strong>Gates 8–10</strong> are Off-Leash. <br/>Main beach is On-Leash.
                    </p>
                </div>

                <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800">
                    <div className="flex items-center gap-2 font-bold text-amber-700 dark:text-amber-400 mb-2">
                        <AlertTriangle className="w-5 h-5" /> Stinger Nets?
                    </div>
                    <p className="text-sm text-amber-900 dark:text-amber-100">
                        <strong>NO.</strong> The only net is at the very start (Main Beach). The dog zone is un-netted.
                    </p>
                </div>

                <div className="p-5 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
                    <div className="flex items-center gap-2 font-bold text-green-700 dark:text-green-400 mb-2">
                        <Fish className="w-5 h-5" /> Activities
                    </div>
                    <p className="text-sm text-green-900 dark:text-green-100">
                        Beach fishing, kite surfing, and historic fort walks nearby.
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="space-y-8">
                
                {/* Section 1: The Dog Zone */}
                <section>
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        🐕 The Off-Leash Rules (Gate 8-10)
                    </h2>
                    <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                        <p>
                            Many visitors get confused because Pallarenda is a long stretch of sand. You cannot just let your dog off anywhere.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mt-4">
                            <li><strong>The Main Beach (Stinger Net):</strong> This is for families and swimming. Dogs are usually allowed on-leash, but check signs.</li>
                            <li><strong>The Off-Leash Zone:</strong> You need to drive further down Cape Pallarenda Road. Look for the beach access points labeled <strong>Gate 8, 9, or 10</strong>.</li>
                            <li><strong>The Boundary:</strong> The zone ends near the Conservation Park gate. Do not take dogs past the gate into the Conservation Park (heavy fines apply).</li>
                        </ul>
                    </div>
                </section>

                {/* Local Insight */}
                <LocalInsightCard title="Local Tip: Tides Matter" variant="insight">
                    <p>
                        Pallarenda is very flat. At <strong>low tide</strong>, the water goes out hundreds of meters, creating massive sand flats perfect for chasing balls.
                    </p>
                    <p className="mt-2">
                        At <strong>high tide</strong> (especially King Tides), there might be almost no beach left near the tree line. Check the tide charts before you drive out!
                    </p>
                </LocalInsightCard>

                {/* Section 2: Stinger Safety */}
                <section className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                        ⚠️ Important Safety Warning
                    </h2>
                    <p className="text-muted-foreground mb-4">
                        Unlike The Strand, the off-leash area here has <strong>no stinger nets</strong>. During the summer months (Nov–May), dangerous Box Jellyfish and Irukandji are present in these waters.
                    </p>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>Stick to sand play only during summer.</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>Carry vinegar in your car (locals always do).</span>
                        </div>
                    </div>
                </section>

                {/* Map Button */}
                <div className="flex justify-center pt-4">
                    <Button asChild size="lg" className="w-full md:w-auto">
                        <a href="https://www.google.com/maps/search/?api=1&query=Pallarenda+Off+Leash+Dog+Beach" target="_blank" rel="noopener noreferrer">
                            <MapPin className="mr-2 w-4 h-4" /> Open in Google Maps
                        </a>
                    </Button>
                </div>

            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default PallarendaBeach;
