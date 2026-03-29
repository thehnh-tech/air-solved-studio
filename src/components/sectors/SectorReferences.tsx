import { motion } from "framer-motion";

interface SectorReferencesProps {
  items: string[];
}

const SectorReferences = ({ items }: SectorReferencesProps) => (
  <section className="py-20 bg-muted">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-primary text-center mb-10"
      >
        Références clients
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
      >
        {items.map((ref) => (
          <span
            key={ref}
            className="px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground/70 font-medium"
          >
            {ref}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SectorReferences;
