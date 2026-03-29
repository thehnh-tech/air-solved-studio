import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SectorApproachProps {
  title: string;
  steps: string[];
}

const SectorApproach = ({ title, steps }: SectorApproachProps) => (
  <section className="py-20 bg-background">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-primary text-center mb-14"
      >
        {title}
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex items-start gap-4 p-6 rounded-xl bg-muted border border-border"
          >
            <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
              {i + 1}
            </span>
            <p className="text-foreground/80 leading-relaxed">{step}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SectorApproach;
