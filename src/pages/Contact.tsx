import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ReassuranceSection from "@/components/contact/ReassuranceSection";

const Contact = () => (
  <div className="min-h-screen">
    <Header />
    <ContactHero />
    <ContactFormSection />
    <ReassuranceSection />
    <Footer />
  </div>
);

export default Contact;
