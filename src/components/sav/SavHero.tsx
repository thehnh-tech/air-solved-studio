import { motion } from "framer-motion";
import heroImg from "@/assets/sav-hero.jpg";

const SavHero = () => (
  <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
    <img src={heroImg} alt="SAV & Maintenance Clean Air" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
    <div className="absolute inset-0 bg-primary/80" />
    <div className="container relative z-10 text-center py-24">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 font-heading"
      >
        Un équipement sans suivi, c'est une promesse à moitié tenue.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-xl md:text-2xl text-secondary font-medium"
      >
        Mise en service · Maintenance préventive · Maintenance curative · Traçabilité GMAO
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-primary-foreground/80 mt-6 max-w-3xl mx-auto text-lg"
      >
        Un équipement haut de gamme n'a de valeur que s'il est correctement mis en service et maintenu dans la durée. Clean Air s'engage au-delà de la fourniture.
      </motion.p>
    </div>
  </section>
);

export default SavHero;
