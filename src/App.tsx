import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Apply from "./pages/Apply";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import LoanProduct from "./pages/LoanProduct";
import ResponsibleLending from "./pages/ResponsibleLending";
import CreditGuide from "./pages/CreditGuide";
import Complaints from "./pages/Complaints";
import DvsNotice from "./pages/DvsNotice";
import CreditReporting from "./pages/CreditReporting";
import TargetMarket from "./pages/TargetMarket";

import BankFeedTerms from "./pages/BankFeedTerms";
import FinancialHardship from "./pages/FinancialHardship";
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
          <Route path="/about" element={<About />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/loans/:slug" element={<LoanProduct />} />
          <Route path="/responsible-lending" element={<ResponsibleLending />} />
          <Route path="/credit-guide" element={<CreditGuide />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/dvs-notice" element={<DvsNotice />} />
          <Route path="/credit-reporting" element={<CreditReporting />} />
          <Route path="/target-market" element={<TargetMarket />} />
          
          <Route path="/bank-feed-terms" element={<BankFeedTerms />} />
          <Route path="/financial-hardship" element={<FinancialHardship />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
