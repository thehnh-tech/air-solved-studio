import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Server, Factory, Building2 } from "lucide-react";

const sectors = [
  {
    icon: Heart,
    title: "Santé",
    body: "Nulle part le traitement de l'air n'est aussi critique. Le contrôle de la contamination nosocomiale, la conformité des blocs opératoires, la filtration des salles de réanimation — chaque espace de santé a ses propres exigences réglementaires. Clean Air les connaît et les applique, de la salle d'opération à tous les locaux annexes.",
    partners: "Camfil · Wolf · TROX · Tecnair LV",
    link: "/traitement-de-lair/sante",
    linkLabel: "Voir nos solutions Santé",
  },
  {
    icon: Server,
    title: "Data Centers & Infrastructures Critiques",
    body: "La disponibilité à 100 % commence par la maîtrise thermique. Un data center génère une chaleur continue et intense. Sans climatisation de précision adaptée, c'est la surchauffe, la panne, l'arrêt de service. Avec son partenaire historique Vertiv — leader mondial des infrastructures critiques — Clean Air déploie des solutions de refroidissement de précision.",
    partners: "Vertiv",
    link: "/traitement-de-lair/data-centers-telecom",
    linkLabel: "Voir nos solutions Data Centers",
  },
  {
    icon: Factory,
    title: "Industrie",
    body: "Quand l'air fait partie du process de fabrication. En industrie pharmaceutique, les exigences BPF imposent des salles blanches équipées de systèmes de filtration de très haute efficacité. Chez les équipementiers — automobile, micro-électronique — la protection des composants contre la contamination particulaire est une nécessité de production.",
    partners: "Camfil · Wolf · Munters · TROX",
    link: "/traitement-de-lair/industrie",
    linkLabel: "Voir nos solutions Industrie",
  },
  {
    icon: Building2,
    title: "Tertiaire & Collectivités",
    body: "La qualité de l'air intérieur, un enjeu de confort et de conformité. Renouvellement d'air, filtration, efficacité énergétique — les bâtiments tertiaires et les établissements publics sont soumis à des exigences croissantes. Clean Air propose des solutions de centrales de traitement d'air et de diffusion adaptées à chaque configuration.",
    partners: "Wolf · TROX · Camfil",
    link: "/traitement-de-lair/tertiaire",
    linkLabel: "Voir nos solutions Tertiaire",
  },
];

const SectorsSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Une expertise sectorielle. Pas une réponse générique.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {sectors.map((sector, i) => (
          <motion.div
            key={sector.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 rounded-xl bg-brand-dark/10 flex items-center justify-center mb-6">
              <sector.icon className="w-7 h-7 text-brand-dark" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-4">{sector.title}</h3>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              {sector.body}
            </p>
            <p className="text-sm text-brand-light font-medium mb-6">
              Partenaires : {sector.partners}
            </p>
            <Link
              to={sector.link}
              className="inline-flex items-center gap-2 text-brand-dark font-semibold hover:text-brand-light transition-colors"
            >
              {sector.linkLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SectorsSection;
