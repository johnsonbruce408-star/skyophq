import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedInvestorRoute } from "@/components/ProtectedInvestorRoute";
import Auth from "./pages/Auth";
import InvestorDeck from "./pages/InvestorDeck";
import UnifiedPortal from "./pages/UnifiedPortal";
import SkylinePortal from "./pages/SkylinePortal";
import SkylineAdsLanding from "./pages/SkylineAdsLanding";
import BruceJohnsonPortfolio from "./pages/BruceJohnsonPortfolio";
import NotFound from "./pages/NotFound";

const App = () => (
  <AuthProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public front door: Bruce Johnson portfolio */}
          <Route path="/" element={<BruceJohnsonPortfolio />} />

          {/* Existing SkyOPHQ / investor application routes remain available */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/unified-portal" element={<UnifiedPortal />} />
          <Route path="/skyline-portal" element={<SkylinePortal />} />
          <Route path="/skyline-ads-landing" element={<SkylineAdsLanding />} />
          <Route path="/investor-deck" element={
            <ProtectedInvestorRoute>
              <InvestorDeck />
            </ProtectedInvestorRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </AuthProvider>
);

export default App;
