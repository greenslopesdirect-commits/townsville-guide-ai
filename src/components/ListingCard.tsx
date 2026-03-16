import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { triggerAiGuide } from "@/utils/aiGuide";
import { Link } from "react-router-dom";

interface ListingCardProps {
  title: string;
  description: string;
  image?: string;
  imageCaption?: string;
  features?: string[];
  tags?: string[];
  mapUrl: string;
  icon?: React.ReactNode;
  aiPrompt: string;
  subtitle?: string;
  guideLink?: string;
  guideLinkText?: string;
  badge?: string;
  badgeNote?: string;
}

const ListingCard = ({ 
  title, 
  description, 
  image,
  imageCaption,
  features, 
  tags, 
  mapUrl, 
  icon, 
  aiPrompt,
  subtitle,
  guideLink,
  guideLinkText,
  badge,
  badgeNote
}: ListingCardProps) => (
  <Card className="overflow-hidden hover:shadow-[var(--shadow-tropical)] transition-all duration-300 border-2 hover:border-primary/30 flex flex-col relative">
    {badge && (
      <div className="absolute -top-1 right-2 z-10 bg-[#00A693] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
        {badge}
      </div>
    )}
    {image && (
      <div className="aspect-[16/10] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
       />
      </div>
    )}
    {imageCaption && (
      <p className="text-xs text-muted-foreground px-4 pt-1">{imageCaption}</p>
    )}
    <CardHeader className={`${!image ? 'bg-gradient-to-br from-primary/5 to-transparent' : ''} pb-3`}>
      <div className="flex items-start gap-3">
        {icon && (
          <div className="p-2 rounded-xl bg-primary/10 text-primary flex-shrink-0">
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <CardTitle className="text-lg leading-tight">{title}</CardTitle>
          {subtitle && (
            <CardDescription className="text-sm mt-1">{subtitle}</CardDescription>
          )}
        </div>
      </div>
    </CardHeader>
    <CardContent className="pt-0 space-y-3 flex-1 flex flex-col">
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {features && features.length > 0 && (
        <ul className="space-y-1.5">
          {features.slice(0, 4).map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
              <Check className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
      
      {guideLink && (
        <Button asChild size="sm" className="gap-2 w-full bg-primary hover:bg-primary/90">
          <Link to={guideLink}>
            {guideLinkText || "View Guide"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      )}
      
      <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-2">
        <Button variant="outline" size="sm" asChild className="gap-2 flex-1">
          <a 
            href={mapUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`View ${title} on Google Maps`}
          >
            <MapPin className="w-4 h-4" />
            View on Map
          </a>
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => triggerAiGuide(aiPrompt)}
          className="gap-2 flex-1"
        >
          <span>🤖</span>
          Ask AI
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default ListingCard;
