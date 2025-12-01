// --- In src/App.tsx ---

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// 🔴 NEW IMPORT: Get the layout component
import TownsvilleLayout from './layouts/TownsvilleLayout'; 

// All Page Component Imports
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
          {/* 1. Redirect the root / to the new home /townsville */}
          <Route path="/" element={<Navigate to="/townsville" replace />} />

          {/* 2. NESTED TOWNSVILLE ROUTES GROUPED UNDER THE LAYOUT */}
          {/* The PARENT route renders TownsvilleLayout, which provides the Header/Footer and the <Outlet /> */}
          <Route path="/townsville" element={<TownsvilleLayout />}> 
            
            {/* The Index page is the default child path for /townsville */}
            <Route index element={<Index />} />
            
            {/* Children paths are RELATIVE to /townsville (e.g., /townsville/history) */}
            <Route path="history" element={<HistoryOfTownsville />} />
            <Route path="things-to-do" element={<ThingsToDo />} />
            <Route path="beaches" element={<Beaches />} />
            <Route path="food" element={<FoodDrink />} />
            <Route path="local-tips" element={<LocalTips />} />
            <Route path="accommodation" element={<Accommodation />} />
            <Route path="events" element={<Events />} />
          </Route>

          {/* 3. SITE-WIDE/POLICY ROUTES (These do NOT use the TownsvilleLayout) */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          
          {/* 4. Keep the catch-all NotFound route last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
