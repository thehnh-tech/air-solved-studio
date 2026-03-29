import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
        <Button asChild size="lg" variant="secondary">
          <Link to="/contact">Parlons de votre projet →</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
          <Link to="/traitement-de-lair">Découvrir nos solutions</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default ReferencesCTA;
