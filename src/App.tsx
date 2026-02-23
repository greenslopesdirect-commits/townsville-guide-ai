import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import DogFriendly from "@/pages/DogFriendly";
import Shopping from "@/pages/Shopping";
import Nature from "@/pages/Nature";

// Component to redirect legacy /townsville/* paths to new root-based paths
const TownsvilleRedirect = () => {
  const { path, "*": rest } = useParams();
  const newPath = rest ? `/${path}/${rest}` : `/${path}`;
  return <Navigate to={newPath} replace />;
};

// Townsville Layout (Handles Header and Footer for all Townsville routes)
import TownsvilleLayout from "@/components/TownsvilleLayout";

// Page Components
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
import PallarendaBeach from "@/pages/PallarendaBeach";
import RowesBay from "@/pages/RowesBay";
import TheStrand from "./pages/TheStrand";
import TownsvilleWithKids from "@/pages/TownsvilleWithKids";
import BillabongSanctuary from "@/pages/BillabongSanctuary";
import CastleHill from "@/pages/CastleHill";
import JezzineBarracks from "@/pages/JezzineBarracks";
import LittleCrystalCreek from "@/pages/LittleCrystalCreek";
import GreatBarrierReef from "@/pages/GreatBarrierReef";
import CowboysStadiumGuide from "@/pages/CowboysStadiumGuide";
import NorthShoreTownsville from "@/pages/NorthShoreTownsville";
import TownsvilleAirport from "@/pages/TownsvilleAirport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Redirect legacy /townsville paths to new root-based equivalents */}
          <Route path="/townsville" element={<Navigate to="/" replace />} />
          <Route path="/townsville/:path/*" element={<TownsvilleRedirect />} />

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
            
            {/* GUIDES */}
            <Route path="guides/beat-the-heat" element={<BeatTheHeat />} />
            <Route path="guides/magnetic-island-day-trip" element={<MagneticIslandDayTrip />} />
            <Route path="guides/free-things" element={<FreeThings />} />
            <Route path="guides/stinger-safety" element={<StingerSafety />} />
            <Route path="guides/sunset-walks" element={<SunsetWalks />} />
            <Route path="guides/jezzine-barracks" element={<JezzineBarracks />} />
            <Route path="cowboys-stadium-guide" element={<CowboysStadiumGuide />} />
            <Route path="north-shore-townsville" element={<NorthShoreTownsville />} />
            
            {/* DEEP DIVE BEACH PAGES */}
            <Route path="pallarenda-beach" element={<PallarendaBeach />} />
            <Route path="rowes-bay" element={<RowesBay />} />
            <Route path="townsville-with-kids" element={<TownsvilleWithKids />} />
            <Route path="the-strand" element={<TheStrand />} />
            <Route path="billabong-sanctuary" element={<BillabongSanctuary />} />
            <Route path="castle-hill" element={<CastleHill />} />
            <Route path="little-crystal-creek-townsville" element={<LittleCrystalCreek />} />
            <Route path="great-barrier-reef-townsville" element={<GreatBarrierReef />} />
            <Route path="townsville-airport" element={<TownsvilleAirport />} />

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
