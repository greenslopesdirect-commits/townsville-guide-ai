import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  {/* Townsville Homepage */}
  <Route path="/townsville" element={<Index />} />

  {/* Townsville Subpages */}
  <Route path="/townsville/beaches" element={<Beaches />} />
  <Route path="/townsville/food" element={<FoodDrink />} />
  <Route path="/townsville/local-tips" element={<LocalTips />} />
  <Route path="/townsville/accommodation" element={<Accommodation />} />
  <Route path="/townsville/history" element={<HistoryOfTownsville />} />
  <Route path="/townsville/events" element={<Events />} />
  <Route path="/townsville/things-to-do" element={<ThingsToDo />} />

  {/* Legal pages (global) */}
  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
  <Route path="/terms-of-use" element={<TermsOfUse />} />
  <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
  <Route path="/cookie-policy" element={<CookiePolicy />} />

  {/* Catch-all */}
  <Route path="*" element={<NotFound />} />
</Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
