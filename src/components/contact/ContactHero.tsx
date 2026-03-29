import { motion } from "framer-motion";
import contactHero from "@/assets/contact-hero.jpg";

const ContactHero = () => (
  <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
    <img
      src={contactHero}
      alt="Bureau Clean Air Technology"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-primary/80" />
    <div className="container relative z-10 text-center py-24">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 font-heading"
      >
        Parlons de votre projet.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-xl md:text-2xl text-secondary font-medium"
      >
        Un interlocuteur. Une réponse concrète.
      </motion.p>
    </div>
  </section>
);

export default ContactHero;
