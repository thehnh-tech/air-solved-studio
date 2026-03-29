import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface SectorCTAProps {
  title: string;
  body: string;
  referencesFilter?: string;
}

const SectorCTA = ({ title, body, referencesFilter }: SectorCTAProps) => (
  <section className="py-20 bg-primary">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">{title}</h2>
        <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10">{body}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-secondary text-secondary-foreground font-bold rounded-[7px] hover:bg-secondary/90 transition-colors"
          >
            Parlons de votre projet <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to={referencesFilter ? `/references?secteur=${referencesFilter}` : "/references"}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-primary-foreground/30 text-primary-foreground font-bold rounded-[7px] hover:bg-primary-foreground/10 transition-colors"
          >
            Découvrir nos références
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SectorCTA;
