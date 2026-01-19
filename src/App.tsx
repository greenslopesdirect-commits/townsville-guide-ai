import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DogFriendly from "@/pages/DogFriendly";
import Shopping from "@/pages/Shopping";
import Nature from "@/pages/Nature";

// Townsville Layout (Handles Header and Footer for all Townsville routes)
// FIXED: Using path alias to resolve location issues
import TownsvilleLayout from "@/components/TownsvilleLayout";

// Page Components
// FIXED: Using path alias to resolve location issues
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfUse from "@/pages/TermsOfUse";
import AffiliateDisclosure from "@/pages/AffiliateDisclosure";
import CookiePolicy from "@/pages/CookiePolicy";
import HistoryOfTownsville from "@/pages/HistoryOfTownsville";
import ThingsToDo from "@/pages/ThingsToDo";
import Beaches from "@/pages/Beaches";
import FoodDrink from "@/pages/FoodDrink";
import LocalTips from "@/pages/LocalTips";
import Accommodation from "@/pages/Accommodation";
import Events from "@/pages/Events";
import FlightsToTownsville from "@/pages/FlightsToTownsville";
import Advertise from "@/pages/Advertise";
import Contact from "@/pages/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import BeatTheHeat from "@/pages/BeatTheHeat";
import MagneticIslandDayTrip from "@/pages/MagneticIslandDayTrip";
import FreeThings from "@/pages/FreeThings";
import StingerSafety from "@/pages/StingerSafety";
import SunsetWalks from "@/pages/SunsetWalks";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Redirect legacy /townsville path to root */}
          <Route path="/townsville/*" element={<Navigate to="/" replace />} />

          {/* MAIN ROUTES: All city-specific pages use TownsvilleLayout at root */}
          <Route path="/" element={<TownsvilleLayout />}>
            <Route index element={<Index />} />
            
            <Route path="history" element={<HistoryOfTownsville />} />
            <Route path="things-to-do" element={<ThingsToDo />} />
            <Route path="beaches" element={<Beaches />} />
            <Route path="food" element={<FoodDrink />} />
            <Route path="local-tips" element={<LocalTips />} />
            <Route path="accommodation" element={<Accommodation />} />
            <Route path="events" element={<Events />} />
            <Route path="guides/beat-the-heat" element={<BeatTheHeat />} />
            <Route path="guides/magnetic-island-day-trip" element={<MagneticIslandDayTrip />} />
            <Route path="guides/free-things" element={<FreeThings />} />
            <Route path="guides/stinger-safety" element={<StingerSafety />} />
            <Route path="guides/sunset-walks" element={<SunsetWalks />} />        

            {/* QUICK ACCESS ROUTES */}
            <Route path="dog-friendly" element={<DogFriendly />} />
            <Route path="shopping" element={<Shopping />} />
            <Route path="nature" element={<Nature />} />
            
            {/* MONETISATION PAGES */}
            <Route path="flights" element={<FlightsToTownsville />} />
            <Route path="advertise" element={<Advertise />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          
          {/* 2. SITE-WIDE/POLICY ROUTES: These remain at the root and are outside the Townsville layout */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          
          {/* 3. Keep the catch-all NotFound route last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
