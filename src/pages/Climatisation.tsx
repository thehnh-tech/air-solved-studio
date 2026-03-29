import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClimatisationHero from "@/components/climatisation/ClimatisationHero";
import ClimatisationPositioning from "@/components/climatisation/ClimatisationPositioning";
import ApplicationsSection from "@/components/climatisation/ApplicationsSection";
import PremiumArguments from "@/components/climatisation/PremiumArguments";
import ClimatisationCTA from "@/components/climatisation/ClimatisationCTA";

const Climatisation = () => (
  <>
    <Header />
    <main>
      <ClimatisationHero />
      <ClimatisationPositioning />
      <ApplicationsSection />
      <PremiumArguments />
      <ClimatisationCTA />
    </main>
    <Footer />
  </>
);

export default Climatisation;
