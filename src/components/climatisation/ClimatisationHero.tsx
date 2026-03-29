import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/climatisation-hero.jpg";

const ClimatisationHero = () => (
  <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Climatisation haut de gamme" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-brand-dark/80" />
    </div>
    <div className="container relative z-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Le confort thermique.{" "}
          <span className="text-brand-light">Sans compromis.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 font-light mb-4">
          Confort · Silence · Performance énergétique · Durabilité
        </p>
        <p className="text-base md:text-lg text-white/70 font-light mb-8 max-w-2xl">
          Bureaux, hôtels, immeubles résidentiels premium, centres commerciaux, établissements d'enseignement — Clean Air sélectionne et met en service les meilleures solutions de climatisation du marché. Uniquement des équipements premium, choisis pour leurs performances, leur silence et leur durabilité.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-[7px] hover:bg-primary/90 transition-colors"
        >
          Parlons de votre projet
          <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ClimatisationHero;
