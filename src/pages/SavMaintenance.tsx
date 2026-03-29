import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SavHero from "@/components/sav/SavHero";
import SavPositioning from "@/components/sav/SavPositioning";
import SavEngagements from "@/components/sav/SavEngagements";
import SavTeam from "@/components/sav/SavTeam";
import SavContracts from "@/components/sav/SavContracts";
import SavCTA from "@/components/sav/SavCTA";

const SavMaintenance = () => (
  <div className="min-h-screen">
    <Header />
    <SavHero />
    <SavPositioning />
    <SavEngagements />
    <SavTeam />
    <SavContracts />
    <SavCTA />
    <Footer />
  </div>
);

export default SavMaintenance;
