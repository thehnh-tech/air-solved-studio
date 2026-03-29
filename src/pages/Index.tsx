import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import AirMasterySection from "@/components/home/AirMasterySection";
import StatsSection from "@/components/home/StatsSection";
import MarketsSection from "@/components/home/MarketsSection";
import PartnersSection from "@/components/home/PartnersSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <AirMasterySection />
      <StatsSection />
      <MarketsSection />
      <PartnersSection />
      <WhyUsSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
