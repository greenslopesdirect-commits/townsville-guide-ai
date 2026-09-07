import { lazy, Suspense } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
const DogFriendly = lazy(() => import("@/pages/DogFriendly"));
const Shopping = lazy(() => import("@/pages/Shopping"));
const Nature = lazy(() => import("@/pages/Nature"));

// Component to redirect legacy /townsville/* paths to new root-based paths
const TownsvilleRedirect = () => {
  const { path, "*": rest } = useParams();
  const newPath = rest ? `/${path}/${rest}` : `/${path}`;
  return <Navigate to={newPath} replace />;
};

// Townsville Layout (Handles Header and Footer for all Townsville routes)
import TownsvilleLayout from "@/components/TownsvilleLayout";

// Page Components (route-level code splitting: each page is its own chunk,
// fetched on demand instead of being bundled into the initial JS payload)
const Index = lazy(() => import("@/pages/Index"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("@/pages/TermsOfUse"));
const AffiliateDisclosure = lazy(() => import("@/pages/AffiliateDisclosure"));
const CookiePolicy = lazy(() => import("@/pages/CookiePolicy"));
const HistoryOfTownsville = lazy(() => import("@/pages/HistoryOfTownsville"));
const ThingsToDo = lazy(() => import("@/pages/ThingsToDo"));
const Beaches = lazy(() => import("@/pages/Beaches"));
const FoodDrink = lazy(() => import("@/pages/FoodDrink"));
const LocalTips = lazy(() => import("@/pages/LocalTips"));
const Accommodation = lazy(() => import("@/pages/Accommodation"));
const Events = lazy(() => import("@/pages/Events"));
const Advertise = lazy(() => import("@/pages/Advertise"));
const Contact = lazy(() => import("@/pages/Contact"));
const BeatTheHeat = lazy(() => import("@/pages/BeatTheHeat"));
const MagneticIslandDayTrip = lazy(() => import("@/pages/MagneticIslandDayTrip"));
const MagneticIslandFerry = lazy(() => import("./pages/MagneticIslandFerry"));
const FortsWalkMagneticIsland = lazy(() => import("@/pages/FortsWalkMagneticIsland"));
const FreeThings = lazy(() => import("@/pages/FreeThings"));
const RainyDayActivities = lazy(() => import("@/pages/RainyDayActivities"));
const StingerSafety = lazy(() => import("@/pages/StingerSafety"));
const SunsetWalks = lazy(() => import("@/pages/SunsetWalks"));
const PallarendaBeach = lazy(() => import("@/pages/PallarendaBeach"));
const RowesBay = lazy(() => import("@/pages/RowesBay"));
const BushlandBeach = lazy(() => import("@/pages/BushlandBeach"));
const TheStrand = lazy(() => import("./pages/TheStrand"));
const Riverway = lazy(() => import("./pages/Riverway"));
const TownsvilleWithKids = lazy(() => import("@/pages/TownsvilleWithKids"));
const BillabongSanctuary = lazy(() => import("@/pages/BillabongSanctuary"));
const CastleHill = lazy(() => import("@/pages/CastleHill"));
const JezzineBarracks = lazy(() => import("@/pages/JezzineBarracks"));
const LittleCrystalCreek = lazy(() => import("@/pages/LittleCrystalCreek"));
const GreatBarrierReef = lazy(() => import("@/pages/GreatBarrierReef"));
const ReefHQ = lazy(() => import("@/pages/ReefHQ"));
const CowboysStadiumGuide = lazy(() => import("@/pages/CowboysStadiumGuide"));
const NorthShoreTownsville = lazy(() => import("@/pages/NorthShoreTownsville"));
const TownsvilleAirport = lazy(() => import("@/pages/TownsvilleAirport"));
const MovingToTownsville = lazy(() => import("@/pages/MovingToTownsville"));
const SaundersBeach = lazy(() => import("@/pages/beaches/SaundersBeach"));
const AccessibleTownsville = lazy(() => import("@/pages/AccessibleTownsville"));
const UsefulContacts = lazy(() => import("@/pages/UsefulContacts"));
const Suburbs = lazy(() => import("@/pages/Suburbs"));
const Directory = lazy(() => import("@/pages/Directory"));
const FirstTimeInTownsville = lazy(() => import("@/pages/FirstTimeInTownsville"));
const TownsvilleInOneDay = lazy(() => import("@/pages/TownsvilleInOneDay"));
const WalkingCastleHill = lazy(() => import("./pages/WalkingCastleHill"));
const TownsvilleWithoutACar = lazy(() => import("@/pages/TownsvilleWithoutACar"));
const PalumaDayTrip = lazy(() => import("@/pages/PalumaDayTrip"));

/**
 * The app's full route table, shared between the client entry (App.tsx,
 * wrapped in BrowserRouter) and the SSR entry (entry-server.tsx, wrapped in
 * StaticRouter) so the two never drift apart.
 */
const AppRoutes = () => (
  <Suspense fallback={null}>
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
        <Route path="guides/magnetic-island-ferry" element={<MagneticIslandFerry />} />
        <Route path="guides/forts-walk-magnetic-island" element={<FortsWalkMagneticIsland />} />
        <Route path="guides/free-things" element={<FreeThings />} />
        <Route path="guides/rainy-day-activities" element={<RainyDayActivities />} />
        <Route path="guides/stinger-safety" element={<StingerSafety />} />
        <Route path="guides/sunset-walks" element={<SunsetWalks />} />
        <Route path="jezzine-barracks" element={<JezzineBarracks />} />
        <Route path="guides/jezzine-barracks" element={<Navigate to="/jezzine-barracks" replace />} />
        <Route path="guides/walking-castle-hill" element={<WalkingCastleHill />} />
        <Route path="guides/paluma-day-trip" element={<PalumaDayTrip />} />
        <Route path="cowboys-stadium-guide" element={<CowboysStadiumGuide />} />
        <Route path="north-shore-townsville" element={<NorthShoreTownsville />} />

        {/* DEEP DIVE BEACH PAGES */}
        <Route path="beaches/saunders-beach" element={<SaundersBeach />} />
        <Route path="pallarenda-beach" element={<PallarendaBeach />} />
        <Route path="rowes-bay" element={<RowesBay />} />
        <Route path="bushland-beach" element={<BushlandBeach />} />
        <Route path="townsville-with-kids" element={<TownsvilleWithKids />} />
        <Route path="the-strand" element={<TheStrand />} />
        <Route path="riverway" element={<Riverway />} />
        <Route path="billabong-sanctuary" element={<BillabongSanctuary />} />
        <Route path="castle-hill" element={<CastleHill />} />
        <Route path="little-crystal-creek-townsville" element={<LittleCrystalCreek />} />
        <Route path="great-barrier-reef-townsville" element={<GreatBarrierReef />} />
        <Route path="reef-hq-townsville" element={<ReefHQ />} />
        <Route path="townsville-airport" element={<TownsvilleAirport />} />

        {/* QUICK ACCESS ROUTES */}
        <Route path="dog-friendly" element={<DogFriendly />} />
        <Route path="shopping" element={<Shopping />} />
        <Route path="nature" element={<Nature />} />
        <Route path="moving-to-townsville" element={<MovingToTownsville />} />
        <Route path="suburbs" element={<Suburbs />} />
        <Route path="directory" element={<Directory />} />
        <Route path="accessible-townsville" element={<AccessibleTownsville />} />
        <Route path="useful-contacts" element={<UsefulContacts />} />
        <Route path="first-time-in-townsville" element={<FirstTimeInTownsville />} />
        <Route path="townsville-in-one-day" element={<TownsvilleInOneDay />} />
        <Route path="townsville-without-a-car" element={<TownsvilleWithoutACar />} />

        {/* MONETISATION PAGES */}
        <Route path="flights" element={<Navigate to="/townsville-airport" replace />} />
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
  </Suspense>
);

export default AppRoutes;
