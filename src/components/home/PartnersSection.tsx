import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const partners = ["Camfil", "Vertiv", "TROX", "Wolf", "Munters", "Mitsubishi", "Tecnair LV", "Dantherm"];

const PartnersSection = () => (
  <section className="py-24 bg-brand-alt-bg">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
          Les leaders mondiaux. Pour vous.
        </h2>
        <p className="text-brand-light text-lg font-medium mb-4">
          Notre sélection n'est pas commerciale. Elle est technique.
        </p>
        <p className="text-foreground/70">
          Clean Air ne référence pas de gammes. Clean Air sélectionne des leaders. Dans chaque domaine, nous avons choisi le partenaire qui détient la maîtrise technique la plus aboutie.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
        {partners.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-background rounded-xl p-6 flex items-center justify-center h-24 shadow-sm border border-border hover:shadow-md hover:border-brand-light/30 transition-all"
          >
            <span className="text-primary font-bold text-lg">{name}</span>
          </motion.div>
        ))}
      </div>

      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center italic text-foreground/60 max-w-2xl mx-auto mb-8 text-lg"
      >
        « Nous sélectionnons uniquement les leaders — parce que la qualité que nous promettons commence par les équipements que nous choisissons. »
      </motion.blockquote>

      <div className="text-center">
        <Link
          to="/partenaires"
          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
        >
          Découvrir tous nos partenaires <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default PartnersSection;
