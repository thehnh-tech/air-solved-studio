import { motion } from "framer-motion";
import { Server, HeartPulse, Factory, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const markets = [
  {
    icon: Server,
    title: "Data Centers & Infrastructures Critiques",
    hook: "La disponibilité à 100 % n'est pas une option.",
    body: "Climatisation de précision, continuité d'alimentation, maîtrise thermique des salles critiques. Partenaire Vertiv depuis plus de 20 ans.",
    link: "/traitement-de-lair/data-centers-telecom",
  },
  {
    icon: HeartPulse,
    title: "Santé",
    hook: "Là où la qualité de l'air conditionne la qualité des soins.",
    body: "Blocs opératoires, salles de réanimation, laboratoires pharmaceutiques. Filtration HEPA, contrôle de la contamination, conformité aux normes les plus strictes.",
    link: "/traitement-de-lair/sante",
  },
  {
    icon: Factory,
    title: "Industrie",
    hook: "Quand l'air fait partie du process de fabrication.",
    body: "Contrôle de la contamination, maîtrise de l'humidité, traitement de l'air sur l'ensemble de la chaîne de production. Solutions sur mesure.",
    link: "/traitement-de-lair/industrie",
  },
  {
    icon: Building2,
    title: "Tertiaire",
    hook: "Le confort de l'air, invisible mais décisif.",
    body: "Centrales de traitement d'air, ventilation double-flux, climatisation haut de gamme, efficacité énergétique. Confort, silence et qualité d'ambiance.",
    link: "/traitement-de-lair/tertiaire",
  },
];

const MarketsSection = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
          Votre secteur. Nos solutions.
        </h2>
        <p className="text-brand-light text-lg font-medium mb-4">
          Chaque environnement a ses exigences. Nous les connaissons toutes.
        </p>
        <p className="text-foreground/70">
          Depuis plus de vingt ans, Clean Air a développé une expertise sectorielle précise — pas une offre générique, mais une réponse calibrée pour chacun.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {markets.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-muted rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-brand-light/20"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <m.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">{m.title}</h3>
            <p className="text-brand-light font-medium text-sm mb-3">{m.hook}</p>
            <p className="text-foreground/70 text-sm leading-relaxed mb-5">{m.body}</p>
            <Link
              to={m.link}
              className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
            >
              Découvrir <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MarketsSection;
