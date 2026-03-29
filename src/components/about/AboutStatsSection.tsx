import { motion } from "framer-motion";

const stats = [
  { value: "+20", label: "ans d'expertise" },
  { value: "+40", label: "collaborateurs" },
  { value: "+1 000", label: "clients actifs" },
  { value: "+1 500", label: "projets réalisés" },
];

const AboutStatsSection = () => (
  <section className="py-16 bg-primary">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <p className="text-4xl md:text-5xl font-bold text-brand-light mb-2">{s.value}</p>
            <p className="text-primary-foreground/80 text-sm font-medium">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutStatsSection;
