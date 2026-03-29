import { motion } from "framer-motion";
import { Clock, Package, Award, Wrench } from "lucide-react";

const pillars = [
  {
    icon: Clock,
    title: "L'air, une maîtrise construite sur vingt ans.",
    body: "Qualité de l'air, filtration, ventilation, confort thermique, traitement des environnements critiques — Clean Air intervient sur l'ensemble de la chaîne avec une expertise forgée sur le terrain.",
  },
  {
    icon: Package,
    title: "Tous les équipements. Un seul interlocuteur.",
    body: "Clean Air sélectionne, fournit et met en service l'ensemble des équipements nécessaires à votre projet. Vous n'avez pas à coordonner plusieurs fournisseurs.",
  },
  {
    icon: Award,
    title: "Nous choisissons les meilleurs. Pour vous offrir le meilleur.",
    body: "Chaque partenaire Clean Air est le leader dans son domaine. Ce choix engage notre réputation. Il protège votre investissement.",
  },
  {
    icon: Wrench,
    title: "Sur le terrain, avant et après.",
    body: "20 techniciens formés assurent la supervision, la mise en service et la maintenance. Chaque intervention est suivie par GMAO — aucune approximation, une traçabilité totale.",
  },
];

const WhyUsSection = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <p className="text-brand-light font-medium mb-2">Expert de l'air.</p>
        <h2 className="text-3xl md:text-5xl font-bold text-primary">
          L'air, c'est notre seul métier.<br />Depuis le premier jour.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-5 p-6"
          >
            <div className="w-14 h-14 rounded-xl bg-brand-light/10 flex items-center justify-center flex-shrink-0">
              <p.icon className="w-7 h-7 text-brand-light" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary mb-2">{p.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{p.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
