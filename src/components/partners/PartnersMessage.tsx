import { motion } from "framer-motion";

const PartnersMessage = () => (
  <section className="py-20 bg-background">
    <div className="container max-w-4xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-primary mb-6 font-heading"
      >
        Un partenariat, c'est plus qu'une référence catalogue.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-muted-foreground text-lg leading-relaxed"
      >
        Chacun de nos partenaires est engagé avec Clean Air sur le long terme. Cela signifie : formation continue de nos techniciens, accès aux gammes complètes, support technique de premier niveau, et disponibilité des pièces de rechange. Nos clients bénéficient directement de ces relations privilégiées — en termes de délais, de qualité d'intervention et de pérennité des installations.
      </motion.p>
    </div>
  </section>
);

export default PartnersMessage;
