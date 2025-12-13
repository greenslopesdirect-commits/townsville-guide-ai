import { Button } from "@/components/ui/button";
import { BookOpen, Package } from "lucide-react";
const LocalShopSection = () => {
  return <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sunset/20 text-[hsl(var(--sunset))] text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Local Shop
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Unplug with the Offline Companion - Coming Soon</h2>
        </div>

        {/* Split Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Townsville Activity Book
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Heading to Magnetic Island or relaxing by the Strand? Give your eyes a break from screens. 
              Features Word Searches of local suburbs, Trivia, and Sudoku — perfect for ferry rides, beach days, or lazy Sunday arvos.
            </p>
            
            <ul className="space-y-2 mb-6 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                30+ pages of puzzles & games
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Local Townsville trivia
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Perfect for all ages
              </li>
            </ul>

            <Button size="lg" className="group">
              <Package className="mr-2 w-4 h-4" />
              Order Copy – $14.95
              <span className="ml-2 text-xs opacity-80">(Free Local Delivery)</span>
            </Button>
          </div>

          {/* Image Placeholder */}
          <div className="order-1 md:order-2">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[hsl(var(--sand))] to-[hsl(var(--ocean-light))] flex items-center justify-center border-2 border-border/40 overflow-hidden">
              <div className="text-center p-8">
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-primary/60" />
                <p className="text-muted-foreground font-medium">Activity Book Preview</p>
                <p className="text-sm text-muted-foreground/70 mt-1">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default LocalShopSection;