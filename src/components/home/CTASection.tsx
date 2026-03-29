import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section className="py-24 bg-primary hero-pattern">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
          Votre projet mérite une réponse précise.
        </h2>
        <p className="text-brand-light text-lg font-medium mb-4">
          Pas une plaquette. Pas un devis.
        </p>
        <p className="text-primary-foreground/70 mb-10 leading-relaxed">
          Chaque environnement est différent. Chaque contrainte est spécifique. Décrivez-nous votre projet — nous vous répondons avec les bonnes questions avant les premières solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-light text-primary font-bold rounded-[7px] hover:bg-brand-light/90 transition-colors text-base"
          >
            Parlons de votre projet
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/references"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-[7px] hover:border-primary-foreground/60 transition-colors text-base"
          >
            Consulter nos références
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
