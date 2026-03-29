import { motion } from "framer-motion";
import { CheckCircle, Shield, Wrench, FileSearch } from "lucide-react";

const engagements = [
  {
    icon: CheckCircle,
    title: "Mise en service",
    subtitle: "Une mise en service rigoureuse, documentée.",
    desc: "Chaque équipement fourni par Clean Air est mis en service par nos propres techniciens — formés par nos partenaires et maîtrisant les gammes qu'ils déploient. Une mise en service rigoureuse, c'est la base d'un SAV simplifié.",
  },
  {
    icon: Shield,
    title: "Maintenance préventive",
    subtitle: "Anticiper la panne avant qu'elle arrive.",
    desc: "Nous proposons des contrats de maintenance préventive adaptés à chaque type d'équipement. Visites planifiées, vérifications systématiques, contrôle des consommables — pour que vos équipements fonctionnent au niveau de performance attendu.",
  },
  {
    icon: Wrench,
    title: "Maintenance curative",
    subtitle: "Diagnostic précis. Intervention rapide.",
    desc: "En cas de défaillance, nos techniciens spécialisés diagnostiquent et interviennent avec méthode. La connaissance des équipements déployés réduit les délais d'intervention. Chaque panne est documentée et intégrée à l'historique GMAO.",
  },
  {
    icon: FileSearch,
    title: "Traçabilité GMAO",
    subtitle: "Chaque intervention, documentée et traçable.",
    desc: "Toutes les interventions et tous les équipements sont suivis par GMAO. Historique complet, alertes planifiées, visibilité totale sur l'état de vos équipements — pour vous et pour nos techniciens.",
  },
];

const SavEngagements = () => (
  <section className="py-20 bg-muted">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-primary mb-12 font-heading text-center"
      >
        4 engagements
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {engagements.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.15 }}
            className="bg-background rounded-xl p-8 border border-border"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <e.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary font-heading mb-1">{e.title}</h3>
            <p className="text-secondary font-medium text-sm mb-3">{e.subtitle}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{e.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SavEngagements;
