import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import PageTransition from "./components/PageTransition";
import CustomCursor from "./components/CustomCursor";
import TravelingCharacter from "./components/TravelingCharacter";
import EntertainmentQuotes from "./components/EntertainmentQuotes";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import TicketPage from "./pages/Ticket";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const [isTraveling, setIsTraveling] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const location = useLocation();

  useEffect(() => {
    // Get current page name
    const getPageName = (pathname: string) => {
      switch (pathname) {
        case '/': return 'home';
        case '/about': return 'about';
        case '/services': return 'services';
        case '/contact': return 'contact';
        case '/ticket': return 'ticket';
        default: return 'home';
      }
    };

    const newPage = getPageName(location.pathname);
    
    // Only trigger travel animation if page actually changed
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
      setIsTraveling(true);

      // Hide traveling animation after completion
      const timer = setTimeout(() => {
        setIsTraveling(false);
      }, 2500); // Match the travel duration

      return () => clearTimeout(timer);
    }
  }, [location.pathname, currentPage]);

  return (
    <>
      <PageTransition>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ticket" element={<TicketPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
      <TravelingCharacter 
        isTraveling={isTraveling} 
        currentPage={currentPage}
      />
      <EntertainmentQuotes />
    </>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <CustomCursor />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
