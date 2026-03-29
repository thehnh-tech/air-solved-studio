import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AirTreatmentHero from "@/components/air-treatment/AirTreatmentHero";
import PositioningSection from "@/components/air-treatment/PositioningSection";
import SectorsSection from "@/components/air-treatment/SectorsSection";
import ApproachSection from "@/components/air-treatment/ApproachSection";
import AirTreatmentCTA from "@/components/air-treatment/AirTreatmentCTA";

const TraitementAir = () => (
  <>
    <Header />
    <main>
      <AirTreatmentHero />
      <PositioningSection />
      <SectorsSection />
      <ApproachSection />
      <AirTreatmentCTA />
    </main>
    <Footer />
  </>
);

export default TraitementAir;
