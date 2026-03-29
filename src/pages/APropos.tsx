import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import HistorySection from "@/components/about/HistorySection";
import AboutStatsSection from "@/components/about/AboutStatsSection";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import MissionSection from "@/components/about/MissionSection";

const APropos = () => (
  <>
    <Header />
    <main>
      <AboutHero />
      <HistorySection />
      <AboutStatsSection />
      <ValuesSection />
      <TeamSection />
      <MissionSection />
    </main>
    <Footer />
  </>
);

export default APropos;
