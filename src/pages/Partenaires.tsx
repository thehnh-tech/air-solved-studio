import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnersHero from "@/components/partners/PartnersHero";
import PartnersMessage from "@/components/partners/PartnersMessage";
import PartnersGrid from "@/components/partners/PartnersGrid";
import PartnersCTA from "@/components/partners/PartnersCTA";

const Partenaires = () => (
  <div className="min-h-screen">
    <Header />
    <PartnersHero />
    <PartnersMessage />
    <PartnersGrid />
    <PartnersCTA />
    <Footer />
  </div>
);

export default Partenaires;
