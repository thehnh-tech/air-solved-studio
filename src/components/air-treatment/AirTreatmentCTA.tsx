import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AirTreatmentCTA = () => (
  <section className="py-20 bg-brand-dark">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          La bonne solution, les bons équipements, les bons partenaires.
        </h2>
        <p className="text-lg text-white/80 font-light mb-4">
          Depuis plus de vingt ans, Clean Air répond aux projets les plus exigeants avec la même approche : des équipements leaders, une expertise terrain, et un engagement dans la durée.
        </p>
        <p className="text-brand-light font-medium italic text-lg mb-10">
          Consider it solved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-light text-brand-dark font-bold rounded-[7px] hover:bg-brand-light/90 transition-colors"
          >
            Parlons de votre projet
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/references"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-[7px] hover:bg-white/10 transition-colors"
          >
            Consulter nos références
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AirTreatmentCTA;
