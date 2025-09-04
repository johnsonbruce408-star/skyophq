import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Auth from "./pages/Auth";
import InvestorPortal from "./pages/InvestorPortal";
import InvestorDeck from "./pages/InvestorDeck";
import SkylinePortal from "./pages/SkylinePortal";
import SkylineAdsLanding from "./pages/SkylineAdsLanding";
import NotFound from "./pages/NotFound";
import { ProtectedRoute } from "./components/ProtectedRoute";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SkylineAdsLanding />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/investor-deck" element={<InvestorDeck />} />
            <Route path="/skyline-portal" element={
              <ProtectedRoute>
                <SkylinePortal />
              </ProtectedRoute>
            } />
            <Route path="/skyline-ads-landing" element={<SkylineAdsLanding />} />
            <Route path="/investor-portal" element={
              <ProtectedRoute>
                <InvestorPortal />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
