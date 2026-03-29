import { motion } from "framer-motion";
import { Heart, Shield, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Satisfaction Client",
    body: "La satisfaction client n'est pas un objectif. C'est notre mesure. Chaque projet est une promesse. Nous la tenons — du premier échange à la dernière intervention de maintenance.",
  },
  {
    icon: Shield,
    title: "Professionnalisme",
    body: "Le professionnalisme, c'est ce qu'on fait quand personne ne regarde. Rigueur technique, ponctualité, traçabilité GMAO. Une méthode appliquée systématiquement — sur chaque chantier, par chaque technicien.",
  },
  {
    icon: Lightbulb,
    title: "Ingéniosité & Confiance",
    body: "Chaque problème mérite une solution sur mesure. Il n'existe pas de réponse standard pour un environnement critique. Nous mettons l'ingéniosité de nos équipes au service d'une solution précisément adaptée à chaque contexte.",
  },
  {
    icon: Users,
    title: "Respect & Solidarité",
    body: "Une entreprise se construit avec les gens, pas malgré eux. Collaborateurs, clients, partenaires — des relations fondées sur le respect mutuel. Un employé heureux fait un client satisfait. Ce n'est pas un slogan. C'est une conviction vécue au quotidien.",
  },
];

const ValuesSection = () => (
  <section className="py-24 bg-muted">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <p className="text-brand-light font-medium mb-2">Nos valeurs</p>
        <h2 className="text-3xl md:text-5xl font-bold text-primary">
          Ce qui guide chaque décision.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-background rounded-xl p-8 shadow-sm border border-border"
          >
            <div className="w-14 h-14 rounded-xl bg-brand-light/10 flex items-center justify-center mb-5">
              <v.icon className="w-7 h-7 text-brand-light" />
            </div>
            <h3 className="text-lg font-bold text-primary mb-3">{v.title}</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">{v.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ValuesSection;
