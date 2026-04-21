import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Squads from "./pages/Squads";
import About from "./pages/About";
import Faculty from "./pages/Faculty";
import Apply from "./pages/Apply";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import Alumni from "./pages/Alumni";
import Tracks from "./pages/Tracks";

import Schedule from "./pages/Schedule";
import Insights from "./pages/Insights";
import Employers from "./pages/Employers";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Help from "./pages/Help";
import AppliedSquad from "./pages/tracks/AppliedSquad";
import CareerReadiness from "./pages/tracks/CareerReadiness";
import RapidDelivery from "./pages/tracks/RapidDelivery";
import TrackComparison from "./pages/tracks/TrackComparison";
import Story from "./pages/about/Story";
import AlumniStories from "./pages/alumni/AlumniStories";
import HireAlumni from "./pages/employers/HireAlumni";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/squads" element={<Squads />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/tracks/applied-squad" element={<AppliedSquad />} />
          <Route path="/tracks/career-readiness" element={<CareerReadiness />} />
          <Route path="/tracks/rapid-delivery" element={<RapidDelivery />} />
          <Route path="/tracks/compare" element={<TrackComparison />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/alumni/stories" element={<AlumniStories />} />
          <Route path="/about/story" element={<Story />} />
          <Route path="/employers/hire-alumni" element={<HireAlumni />} />
          <Route path="/about" element={<About />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/help" element={<Help />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
