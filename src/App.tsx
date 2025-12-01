import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// UPDATED: Added 'Navigate' to the imports
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import AffiliateDisclosure from "./pages/AffiliateDisclosure";
import CookiePolicy from "./pages/CookiePolicy";
import HistoryOfTownsville from "./pages/HistoryOfTownsville";
import ThingsToDo from "./pages/ThingsToDo";
import Beaches from "./pages/Beaches";
import FoodDrink from "./pages/FoodDrink";
import LocalTips from "./pages/LocalTips";
import Accommodation from "./pages/Accommodation";
import Events from "./pages/Events";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* 1. Townsville Home is now at /townsville (Index page) */}
          <Route path="/townsville" element={<Index />} />
          
          {/* 2. Redirect the old root / to the new home /townsville */}
          <Route path="/" element={<Navigate to="/townsville" replace />} />

          {/* 3. All other pages remain accessible directly. 
                 NOTE: In the next step, we may need to update these paths to /townsville/page-name if they belong to Townsville. 
                 For now, they are left as-is to ensure the redirect works. 
          */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/history" element={<HistoryOfTownsville />} />
          <Route path="/things-to-do" element={<ThingsToDo />} />
          <Route path="/beaches" element={<Beaches />} />
          <Route path="/food" element={<FoodDrink />} />
          <Route path="/local-tips" element={<LocalTips />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/events" element={<Events />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
