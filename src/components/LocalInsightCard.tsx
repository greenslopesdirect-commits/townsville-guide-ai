import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, AlertTriangle, MapPin, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface LocalInsightCardProps {
  title?: string;
  children: React.ReactNode;
  variant?: "insight" | "warning" | "tip" | "location";
  className?: string;
}

const LocalInsightCard = ({ 
  title, 
  children, 
  variant = "insight",
  className 
}: LocalInsightCardProps) => {
  const variants = {
    insight: {
      bg: "bg-amber-50 dark:bg-amber-900/20",
      border: "border-amber-200 dark:border-amber-800/50",
      icon: <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      iconBg: "bg-amber-100 dark:bg-amber-900/40",
      defaultTitle: "Local Insight"
    },
    warning: {
      bg: "bg-red-50 dark:bg-red-900/20",
      border: "border-red-200 dark:border-red-800/50",
      icon: <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />,
      iconBg: "bg-red-100 dark:bg-red-900/40",
      defaultTitle: "Safety First"
    },
    tip: {
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      border: "border-emerald-200 dark:border-emerald-800/50",
      icon: <Info className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      iconBg: "bg-emerald-100 dark:bg-emerald-900/40",
      defaultTitle: "Local Tip"
    },
    location: {
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-800/50",
      icon: <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      iconBg: "bg-blue-100 dark:bg-blue-900/40",
      defaultTitle: "Go Local"
    }
  };

  const config = variants[variant];

  return (
    <Card className={cn(
      "overflow-hidden border-2",
      config.bg,
      config.border,
      className
    )}>
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className={cn("p-2 rounded-xl flex-shrink-0", config.iconBg)}>
            {config.icon}
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="font-semibold text-foreground text-base">
              {title || config.defaultTitle}
            </h3>
            <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
              {children}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocalInsightCard;
