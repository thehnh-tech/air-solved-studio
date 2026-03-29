import { motion } from "framer-motion";
import { Wind, Snowflake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AirMasterySection = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
          L'air, maîtrisé de bout en bout.
        </h2>
        <p className="text-lg text-brand-light font-medium mb-4">
          Du bloc opératoire au bureau de direction, Clean Air intervient sur l'ensemble des environnements d'un bâtiment — avec la même exigence.
        </p>
        <p className="text-foreground/80 leading-relaxed">
          Peu d'entreprises peuvent en dire autant : Clean Air maîtrise l'intégralité de la chaîne de l'air, sur tous les types d'espaces, dans un seul et même bâtiment. Des environnements les plus contraints — salles blanches, blocs opératoires, data centers — aux espaces de vie et de travail qui exigent confort, silence et performance thermique.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Traitement de l'air */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-2xl p-10 text-primary-foreground"
        >
          <div className="w-14 h-14 rounded-xl bg-brand-light/15 flex items-center justify-center mb-6">
            <Wind className="w-7 h-7 text-brand-light" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Traitement de l'air</h3>
          <p className="text-brand-light text-sm font-medium mb-4">
            Filtration · Ventilation · Qualité d'air · Environnements critiques
          </p>
          <p className="text-primary-foreground/75 leading-relaxed mb-6 text-sm">
            Là où la qualité de l'air n'est pas une option, Clean Air est l'interlocuteur de référence. Salles propres, blocs opératoires, laboratoires pharmaceutiques, data centers : nous fournissons et mettons en service des solutions conformes aux normes les plus strictes.
          </p>
          <p className="text-xs text-primary-foreground/50 mb-6">
            Partenaires : Camfil · TROX · Wolf · Munters · Vertiv · Dantherm · Tecnair
          </p>
          <Link to="/traitement-de-lair" className="inline-flex items-center gap-2 text-brand-light font-medium text-sm hover:gap-3 transition-all">
            Découvrir nos solutions <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Climatisation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-muted rounded-2xl p-10"
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <Snowflake className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-primary mb-2">Climatisation haut de gamme</h3>
          <p className="text-brand-light text-sm font-medium mb-4">
            Confort thermique · Silence · Performance énergétique
          </p>
          <p className="text-foreground/75 leading-relaxed mb-6 text-sm">
            Immeubles de bureaux, hôtels, établissements d'enseignement, résidences premium : Clean Air sélectionne et met en œuvre les meilleures solutions de climatisation pour garantir confort, silence et efficacité.
          </p>
          <p className="text-xs text-foreground/40 mb-6">
            Partenaires : Toshiba · Lennox · Mitsubishi
          </p>
          <Link to="/climatisation" className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all">
            Découvrir nos solutions <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      <p className="text-center mt-10 text-brand-light italic text-lg font-light">
        Un seul interlocuteur pour l'air de tout votre bâtiment. Consider it solved.
      </p>
    </div>
  </section>
);

export default AirMasterySection;
