import { motion } from "framer-motion";
import heroImg from "@/assets/partners-hero.jpg";

const PartnersHero = () => (
  <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
    <img src={heroImg} alt="Partenaires Clean Air Technology" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
    <div className="absolute inset-0 bg-primary/80" />
    <div className="container relative z-10 text-center py-24">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 font-heading"
      >
        Nous sélectionnons uniquement les leaders.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-xl md:text-2xl text-secondary font-medium"
      >
        Le meilleur dans son domaine d'activité.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-primary-foreground/80 mt-6 max-w-3xl mx-auto text-lg"
      >
        Clean Air ne référence pas des gammes. Clean Air choisit des leaders. En traitement de l'air, climatisation de précision, filtration, diffusion et déshumidification — nous avons sélectionné le partenaire qui détient la maîtrise technique la plus aboutie.
      </motion.p>
    </div>
  </section>
);

export default PartnersHero;
