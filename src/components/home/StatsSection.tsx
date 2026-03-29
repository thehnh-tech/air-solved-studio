import { motion } from "framer-motion";

const stats = [
  { value: "+20", label: "ans", desc: "D'expertise reconnue dans le traitement de l'air et la climatisation" },
  { value: "+1 000", label: "clients", desc: "Qui nous font confiance, dans tous les secteurs" },
  { value: "+1 500", label: "projets", desc: "Réussis, des plus simples aux plus critiques" },
  { value: "+3 300", label: "solutions", desc: "Déployées sur le terrain" },
];

const StatsSection = () => (
  <section className="py-24 bg-primary hero-pattern">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
          Ce que vingt ans de terrain ont construit.
        </h2>
        <p className="text-brand-light text-lg">
          Des chiffres qui ne s'inventent pas. Des références qui parlent pour nous.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.value}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="text-4xl md:text-6xl font-bold text-brand-light mb-1">{stat.value}</div>
            <div className="text-primary-foreground font-medium text-lg mb-2">{stat.label}</div>
            <p className="text-primary-foreground/60 text-sm">{stat.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-14 text-primary-foreground/60 max-w-2xl mx-auto"
      >
        Derrière ces chiffres, une réalité simple : des équipes formées, des partenaires leaders, et un engagement dans la durée qui ne souffre aucun compromis.
      </motion.p>
    </div>
  </section>
);

export default StatsSection;
