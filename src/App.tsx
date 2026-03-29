import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import APropos from "./pages/APropos.tsx";
import TraitementAir from "./pages/TraitementAir.tsx";
import Climatisation from "./pages/Climatisation.tsx";
import Contact from "./pages/Contact.tsx";
import References from "./pages/References.tsx";
import Partenaires from "./pages/Partenaires.tsx";
import SavMaintenance from "./pages/SavMaintenance.tsx";
import NotFound from "./pages/NotFound.tsx";
import SectorSante from "./pages/SectorSante.tsx";
import SectorDataCenters from "./pages/SectorDataCenters.tsx";
import SectorIndustrie from "./pages/SectorIndustrie.tsx";
import SectorTertiaire from "./pages/SectorTertiaire.tsx";
import ClimTertiaire from "./pages/ClimTertiaire.tsx";
import ClimGrosVolumes from "./pages/ClimGrosVolumes.tsx";
import ClimHotellerie from "./pages/ClimHotellerie.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/traitement-de-lair" element={<TraitementAir />} />
          <Route path="/traitement-de-lair/sante" element={<SectorSante />} />
          <Route path="/traitement-de-lair/data-centers-telecom" element={<SectorDataCenters />} />
          <Route path="/traitement-de-lair/industrie" element={<SectorIndustrie />} />
          <Route path="/traitement-de-lair/tertiaire" element={<SectorTertiaire />} />
          <Route path="/climatisation" element={<Climatisation />} />
          <Route path="/climatisation/tertiaire-bureaux" element={<ClimTertiaire />} />
          <Route path="/climatisation/gros-volumes" element={<ClimGrosVolumes />} />
          <Route path="/climatisation/hotellerie-residentiel" element={<ClimHotellerie />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/references" element={<References />} />
          <Route path="/partenaires" element={<Partenaires />} />
          <Route path="/sav-maintenance" element={<SavMaintenance />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
