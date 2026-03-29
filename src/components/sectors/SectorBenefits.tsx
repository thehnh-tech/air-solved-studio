import { motion } from "framer-motion";
import { Wind, Leaf, Wrench } from "lucide-react";

const benefits = [
  {
    icon: Wind,
    title: "Qualité d'air intérieur",
    body: "Renouvellement, filtration, conformité réglementaire.",
  },
  {
    icon: Leaf,
    title: "Efficacité énergétique",
    body: "Free-cooling, récupération de chaleur, gestion intelligente.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Durée de vie",
    body: "SAV, GMAO, relation long terme.",
  },
];

const SectorBenefits = () => (
  <section className="py-20 bg-background">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-primary text-center mb-14"
      >
        Bénéfices clés
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <b.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">{b.title}</h3>
            <p className="text-foreground/70 text-sm">{b.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SectorBenefits;
