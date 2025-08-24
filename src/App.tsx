import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import InvestorPortal from "./pages/InvestorPortal";
import SkylinePortal from "./pages/SkylinePortal";
import SocialHub from "./pages/SocialHub";
import LinkedInPortal from "./pages/LinkedInPortal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/investor-portal" element={<InvestorPortal />} />
          <Route path="/skyline-portal" element={<SkylinePortal />} />
          <Route path="/social-hub" element={<SocialHub />} />
          <Route path="/linkedin-portal" element={<LinkedInPortal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
