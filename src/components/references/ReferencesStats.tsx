import { motion } from "framer-motion";

const stats = [
  { value: "1 500", label: "projets réussis" },
  { value: "3 300", label: "solutions fournies" },
  { value: "1 120", label: "clients qui nous font confiance" },
];

const ReferencesStats = () => (
  <section className="py-16 bg-background">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center"
          >
            <p className="text-5xl font-bold text-secondary mb-2 font-heading">{s.value}</p>
            <p className="text-muted-foreground font-medium">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReferencesStats;
