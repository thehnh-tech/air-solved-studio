import { motion } from "framer-motion";

const SavPositioning = () => (
  <section className="py-20 bg-background">
    <div className="container max-w-4xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-primary mb-6 font-heading"
      >
        Le SAV n'est pas un service optionnel. C'est une promesse.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-muted-foreground text-lg leading-relaxed"
      >
        Pour les exploitants d'infrastructures critiques, les responsables techniques d'établissements de santé, ou les gestionnaires d'immeubles tertiaires — la réactivité du SAV est souvent le premier critère de choix d'un prestataire. Clean Air l'a compris depuis longtemps. Notre service après-vente n'est pas externalisé, ni délégué : c'est une équipe interne, formée sur chaque gamme, qui connaît vos installations et intervient avec la rigueur que vos équipements exigent.
      </motion.p>
    </div>
  </section>
);

export default SavPositioning;
