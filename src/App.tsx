import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./components/PublicLayout";
import Index from "./pages/Index";
import Photographs from "./pages/Photographs";
import Photograph from "./pages/Photograph";
import Writing from "./pages/Writing";
import WritingPiece from "./pages/WritingPiece";
import NotFound from "./pages/NotFound";
import Analytics from "./pages/Analytics";
import AnalyticsLogin from "./pages/AnalyticsLogin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/photographs" element={<Photographs />} />
            <Route path="/photographs/:slug" element={<Photograph />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/writing/:slug" element={<WritingPiece />} />
          </Route>
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/analytics/login" element={<AnalyticsLogin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
