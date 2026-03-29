import { motion } from "framer-motion";

const stats = [
  { value: "~20", label: "techniciens spécialisés" },
  { value: "100%", label: "des interventions tracées GMAO" },
  { value: "1", label: "centre de formation" },
  { value: "1", label: "showroom dédié" },
];

const SavTeam = () => (
  <section className="py-20 bg-background">
    <div className="container max-w-4xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-primary mb-6 font-heading"
      >
        Une équipe dédiée. Formée. Terrain.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-muted-foreground text-lg leading-relaxed mb-12"
      >
        Le SAV de Clean Air, c'est près de 20 techniciens spécialisés — formés en continu par nos partenaires et maîtrisant les gammes qu'ils déploient sur le terrain. Clean Air dispose également d'un centre de formation et d'un showroom dédiés.
      </motion.p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="text-3xl md:text-4xl font-bold text-secondary mb-2 font-heading">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SavTeam;
