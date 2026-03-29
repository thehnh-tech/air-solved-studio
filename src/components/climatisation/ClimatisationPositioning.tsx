import { motion } from "framer-motion";

const ClimatisationPositioning = () => (
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
          La climatisation haut de gamme, ce n'est pas qu'une question de température.
        </h2>
        <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg">
          <p>
            C'est le niveau sonore d'une unité intérieure dans une salle de réunion. C'est l'efficacité énergétique d'un système DRV sur un immeuble de bureaux. C'est la discrétion d'un équipement qui s'intègre à l'architecture sans la contrarier.
          </p>
          <p>
            Clean Air ne propose que des gammes premium — sélectionnées pour leurs performances techniques, leur durabilité, et leur rapport entre confort ressenti et consommation énergétique. Mise en service rigoureuse, suivi SAV intégré.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ClimatisationPositioning;
