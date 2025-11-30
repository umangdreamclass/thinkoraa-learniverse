import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MBA from "./pages/MBA";
import MCA from "./pages/MCA";
import BBA from "./pages/BBA";
import Law from "./pages/Law";
import CAT from "./pages/CAT";
import CMAT from "./pages/CMAT";
import EnrollNow from "./pages/EnrollNow";
import AboutUs from "./pages/AboutUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mba" element={<MBA />} />
          <Route path="/mca" element={<MCA />} />
          <Route path="/bba" element={<BBA />} />
          <Route path="/law" element={<Law />} />
          <Route path="/cat" element={<CAT />} />
          <Route path="/cmat" element={<CMAT />} />
          <Route path="/enroll" element={<EnrollNow />} />
          <Route path="/about" element={<AboutUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
