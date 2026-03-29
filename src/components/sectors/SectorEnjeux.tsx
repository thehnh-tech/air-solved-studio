import { motion } from "framer-motion";

interface SectorEnjeuxProps {
  title: string;
  body: string;
}

const SectorEnjeux = ({ title, body }: SectorEnjeuxProps) => (
  <section className="py-20 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{title}</h2>
        <p className="text-foreground/70 text-lg leading-relaxed font-light">{body}</p>
      </motion.div>
    </div>
  </section>
);

export default SectorEnjeux;
