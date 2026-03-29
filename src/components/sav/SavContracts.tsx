import { motion } from "framer-motion";
import { Check } from "lucide-react";

const contracts = [
  {
    title: "Préventif",
    features: ["Visites planifiées", "Vérifications systématiques", "Contrôle des consommables", "Rapport d'intervention", "Alertes anticipées"],
    targets: "Établissements de santé · Data centers · Industries · Collectivités",
  },
  {
    title: "Préventif + Curatif",
    features: ["Tout le préventif inclus", "Interventions curatives incluses", "Priorité d'intervention", "Pièces de rechange", "Suivi GMAO renforcé"],
    targets: "Infrastructures critiques · Exploitants multi-sites · Gestionnaires d'immeubles",
    highlighted: true,
  },
];

const SavContracts = () => (
  <section className="py-20 bg-muted">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-primary mb-12 font-heading text-center"
      >
        Des contrats adaptés à votre exploitation.
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {contracts.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`rounded-xl p-8 border ${
              c.highlighted
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background border-border"
            }`}
          >
            <h3 className={`text-xl font-bold font-heading mb-6 ${c.highlighted ? "text-primary-foreground" : "text-primary"}`}>
              {c.title}
            </h3>
            <ul className="space-y-3 mb-6">
              {c.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <Check className={`w-4 h-4 shrink-0 ${c.highlighted ? "text-secondary" : "text-secondary"}`} />
                  <span className={c.highlighted ? "text-primary-foreground/90" : "text-foreground"}>{f}</span>
                </li>
              ))}
            </ul>
            <p className={`text-xs ${c.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
              <span className="font-semibold">Pour :</span> {c.targets}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SavContracts;
