import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface FeatureItem {
  title: string;
  body: string;
}

interface ClimFeaturesProps {
  title: string;
  items: FeatureItem[];
  partners: string;
}

const ClimFeatures = ({ title, items, partners }: ClimFeaturesProps) => (
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

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <CheckCircle className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">{item.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground text-sm mt-10"
      >
        Partenaires : {partners}
      </motion.p>
    </div>
  </section>
);

export default ClimFeatures;
