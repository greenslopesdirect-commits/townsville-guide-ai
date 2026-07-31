import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";

const FoundingPartnerCTA = () => {
  return (
    <section className="container mx-auto px-4 max-w-4xl my-12">
      <div className="border border-border rounded-2xl bg-muted/30 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Handshake className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-1">
            Own a local business?
          </h3>
          <p className="text-sm text-muted-foreground">
            Join Townsville Guide as a Founding Partner. Limited complimentary listings are currently available during our mid-year 2026 growth phase.
          </p>
        </div>
        <Button asChild className="flex-shrink-0">
          <Link to="/contact">Apply Here</Link>
        </Button>
      </div>
    </section>
  );
};

export default FoundingPartnerCTA;
