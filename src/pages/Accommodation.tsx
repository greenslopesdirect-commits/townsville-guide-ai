import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

// *** HEADER AND FOOTER IMPORTS REMOVED ***

const Accommodation = () => {
  const handleAskAI = () => {
    const input = document.getElementById("townsville-ai-input");
    if (input) {
      input.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        input.classList.add("ring-2", "ring-primary");
        setTimeout(() => {
          input.classList.remove("ring-2", "ring-primary");
        }, 2000);
      }, 500);
    }
  };

  return (
    <>
      <Helmet>
        {/* WebPage Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Townsville Accommodation Guide",
            "url": "https://duncansguide.com/accommodation",
            "description": "Guide to Townsville's best accommodation including hotels, resorts, holiday parks, apartments and budget-friendly stays.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://duncansguide.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Accommodation",
                  "item": "https://duncansguide.com/accommodation"
                }
              ]
            }
          }
          `}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Where should I stay in Townsville?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Townsville offers a range of accommodation options including beachfront hotels on The Strand, luxury resorts, family-friendly holiday parks, and serviced apartments close to the CBD."
                }
              },
              {
                "@type": "Question",
                "name": "What is the best area to stay in Townsville for families?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Families often stay near The Strand or in family-friendly holiday parks with pools, playgrounds and cabins offering more space."
                }
              },
              {
                "@type": "Question",
                "name": "Are there dog-friendly accommodation options in Townsville?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, several holiday parks, Airbnb properties and some boutique hotels in Townsville offer pet-friendly accommodation. Always check individual pet policies."
                }
              },
              {
                "@type": "Question",
                "name": "What is the best luxury accommodation in Townsville?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Luxury travellers often choose resorts and premium hotels along The Strand or riverfront apartment hotels near the CBD, offering ocean views and
