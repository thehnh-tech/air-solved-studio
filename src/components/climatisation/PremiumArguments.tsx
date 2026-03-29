import { motion } from "framer-motion";
import { Volume2, Zap, ShieldCheck } from "lucide-react";

const args = [
  {
    icon: Volume2,
    title: "Silence",
    subtitle: "Le silence, premier critère de confort.",
    body: "Un système bien sélectionné et bien diffusé, c'est un système qu'on n'entend pas. Les gammes que nous proposons intègrent les technologies les plus avancées en matière d'insonorisation.",
  },
  {
    icon: Zap,
    title: "Performance énergétique",
    subtitle: "Moins consommer sans moins performer.",
    body: "Les systèmes DRV et les roof top que nous mettons en service intègrent les technologies les plus efficientes du marché : All Inverter, free-cooling, pompe à chaleur, gestion zonale. Un investissement rentabilisé sur la durée.",
  },
  {
    icon: ShieldCheck,
    title: "Durabilité & SAV",
    subtitle: "Un équipement qui dure. Une équipe qui reste.",
    body: "Les équipements haut de gamme sont conçus pour durer. Nos techniciens — formés par nos partenaires — assurent la mise en service et le suivi SAV : maintenance préventive, curative, traçabilité GMAO.",
  },
];

const PremiumArguments = () => (
  <section className="py-20 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
          Pourquoi choisir une solution premium ?
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {args.map((arg, i) => (
          <motion.div
            key={arg.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-brand-dark flex items-center justify-center mx-auto mb-6">
              <arg.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">{arg.title}</h3>
            <p className="text-brand-light font-medium text-sm mb-4">{arg.subtitle}</p>
            <p className="text-muted-foreground font-light leading-relaxed">{arg.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PremiumArguments;
