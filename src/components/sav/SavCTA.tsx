import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SavCTA = () => (
  <section className="py-20 bg-primary">
    <div className="container text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 font-heading"
      >
        Vos équipements méritent un suivi à la hauteur de leur qualité.
      </motion.h2>
      <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-lg">
        Contactez-nous pour définir le contrat de maintenance adapté à vos équipements et à votre contexte d'exploitation.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" variant="secondary">
          <Link to="/contact">Parlons de votre projet →</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
          <Link to="/references">Découvrir nos références</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default SavCTA;
