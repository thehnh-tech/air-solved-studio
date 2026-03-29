import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ReferencesCTA = () => (
  <section className="py-20 bg-primary">
    <div className="container text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-heading"
      >
        Votre projet rejoindra bientôt cette liste.
      </motion.h2>
      <p className="text-primary-foreground/80 mb-8 text-lg">
        Plus de 1 120 clients nous font confiance.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-secondary text-secondary-foreground font-bold rounded-[7px] hover:bg-secondary/90 transition-colors"
        >
          Parlons de votre projet
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          to="/traitement-de-lair"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-primary-foreground/30 text-primary-foreground font-bold rounded-[7px] hover:bg-primary-foreground/10 transition-colors"
        >
          Découvrir nos solutions
        </Link>
      </div>
    </div>
  </section>
);

export default ReferencesCTA;
