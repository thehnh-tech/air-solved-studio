import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface SolutionItem {
  title: string;
  hook: string;
  partners: string;
}

interface SectorSolutionsProps {
  title: string;
  items: SolutionItem[];
}

const SectorSolutions = ({ title, items }: SectorSolutionsProps) => (
  <section className="py-20 bg-muted">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-primary text-center mb-14"
      >
        {title}
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-1">{item.title}</h3>
                <p className="text-secondary font-medium text-sm italic">{item.hook}</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Partenaires : {item.partners}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SectorSolutions;
