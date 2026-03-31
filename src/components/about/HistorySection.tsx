import { motion } from "framer-motion";
import teamHistory from "@/assets/team-history.jpg";

const HistorySection = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-brand-light font-medium mb-2">Notre histoire</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Une entreprise construite sur une conviction.
          </h2>
          <div className="space-y-4 text-foreground/70 leading-relaxed">
            <p>
              Fondée en 2003, Clean Air Technology s'est construite autour d'une seule discipline : l'air. 
              Traitement de l'air et climatisation haut de gamme — deux expertises complémentaires, développées 
              avec la même exigence, les mêmes partenaires leaders, les mêmes standards de mise en service et de suivi.
            </p>
            <p>
              Pas de diversification opportuniste. Une maîtrise approfondie, construite projet après projet, 
              secteur après secteur — des blocs opératoires aux data centers, des industries agroalimentaires 
              aux immeubles de bureaux premium.
            </p>
            <p className="font-medium text-foreground">
              Aujourd'hui : plus de 40 collaborateurs, 1 000 clients actifs, 1 500 projets réalisés. 
              Et la même conviction qu'au premier jour.
            </p>
          </div>
        </motion.div>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative w-full"
    >
      <img
        src={teamHistory}
        alt="Équipe Clean Air Technology"
        className="w-full object-cover"
        style={{ height: "560px", objectPosition: "center 25%", transform: "scale(0.92)" }}
        loading="lazy"
      />
      <div className="absolute bottom-6 left-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg">
        <p className="text-3xl font-bold">2003</p>
        <p className="text-sm text-primary-foreground/80">Année de fondation</p>
      </div>
    </motion.div>
  </section>
);

export default HistorySection;
