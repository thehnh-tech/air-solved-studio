import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/air-treatment-hero.jpg";

const AirTreatmentHero = () => (
  <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Salle blanche traitement de l'air" className="w-full h-full object-cover" />
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
          Le traitement de l'air.{" "}
          <span className="text-brand-light">Notre ADN</span> depuis plus de vingt ans.
        </h1>
        <p className="text-lg md:text-xl text-white/80 font-light mb-4">
          Environnements critiques · Qualité d'air · Ventilation · Filtration
        </p>
        <p className="text-base md:text-lg text-white/70 font-light mb-8 max-w-2xl">
          Des salles blanches aux data centers, des blocs opératoires aux industries pharmaceutiques — Clean Air fournit et met en service des solutions de traitement de l'air conformes aux normes les plus strictes. Avec les partenaires leaders. Sans compromis.
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

export default AirTreatmentHero;
