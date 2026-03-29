import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface SectorPartnerHighlightProps {
  name: string;
  tagline: string;
  body: string;
}

const SectorPartnerHighlight = ({ name, tagline, body }: SectorPartnerHighlightProps) => (
  <section className="py-20 bg-muted">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-card rounded-2xl p-10 md:p-14 border border-border shadow-sm"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Award className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary">{name}</h3>
            <p className="text-secondary font-medium">{tagline}</p>
          </div>
        </div>
        <p className="text-foreground/70 leading-relaxed text-lg font-light">{body}</p>
      </motion.div>
    </div>
  </section>
);

export default SectorPartnerHighlight;
