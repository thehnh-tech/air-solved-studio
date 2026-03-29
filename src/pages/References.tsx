import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReferencesHero from "@/components/references/ReferencesHero";
import ReferencesStats from "@/components/references/ReferencesStats";
import ReferencesPortfolio from "@/components/references/ReferencesPortfolio";
import ReferencesCTA from "@/components/references/ReferencesCTA";

const References = () => (
  <div className="min-h-screen">
    <Header />
    <ReferencesHero />
    <ReferencesStats />
    <ReferencesPortfolio />
    <ReferencesCTA />
    <Footer />
  </div>
);

export default References;
