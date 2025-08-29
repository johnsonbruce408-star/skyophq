import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import InvestorPortal from "./pages/InvestorPortal";
import InvestorDeck from "./pages/InvestorDeck";
import UnifiedPortal from "./pages/UnifiedPortal";
import SkylinePortal from "./pages/SkylinePortal";
import SocialHub from "./pages/SocialHub";
import LinkedInPortal from "./pages/LinkedInPortal";
import NotFound from "./pages/NotFound";

const App = () => (
  <AuthProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route 
            path="/investor-portal" 
            element={
              <ProtectedRoute>
                <InvestorPortal />
              </ProtectedRoute>
            } 
          />
          <Route path="/unified-portal" element={<UnifiedPortal />} />
          <Route path="/skyline-portal" element={<SkylinePortal />} />
          <Route path="/investor-deck" element={<InvestorDeck />} />
          <Route path="/social-hub" element={<SocialHub />} />
          <Route path="/linkedin-portal" element={<LinkedInPortal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </AuthProvider>
);

export default App;
