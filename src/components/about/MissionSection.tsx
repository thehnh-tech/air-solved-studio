import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const MissionSection = () => (
  <section className="py-24 bg-primary">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-brand-light font-medium mb-2">Notre mission</p>
        <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
          Consider it <span className="text-brand-light">solved.</span>
        </h2>
        <p className="text-lg text-primary-foreground/70 leading-relaxed mb-10">
          Notre slogan est un engagement. Quelle que soit la problématique liée à l'air — qualité, 
          filtration, confort thermique, humidité, environnement critique — nous apportons une réponse 
          précise, adaptée, assumée dans la durée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-light text-primary font-bold rounded-[7px] hover:bg-brand-light/90 transition-colors"
          >
            Parlons de votre projet
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/references"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-[7px] hover:border-primary-foreground/60 transition-colors"
          >
            Découvrir nos références
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default MissionSection;
