import { motion } from "framer-motion";

const PositioningSection = () => (
  <section className="py-20 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-8">
          Là où la qualité de l'air n'est pas une option.
        </h2>
        <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
          <p>
            Bloc opératoire, data center, salle pharmaceutique, équipementiers et industrie automobile — chaque environnement critique impose ses propres exigences de traitement de l'air. Température, filtration, humidité, renouvellement d'air : autant de paramètres à maîtriser simultanément, avec précision et conformité réglementaire.
          </p>
          <p>
            Clean Air intervient sur l'ensemble de ces contextes depuis plus de vingt ans. Des partenaires leaders dans chaque discipline, une expertise terrain accumulée projet après projet, et une capacité à traiter l'air sous toutes ses dimensions : filtration, ventilation, diffusion, contrôle de l'humidité, performance énergétique.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default PositioningSection;
