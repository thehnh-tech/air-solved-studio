import { motion } from "framer-motion";
import { Search, Settings, Wrench } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Comprendre votre environnement avant de proposer un équipement.",
    body: "Chaque projet est différent. Nous prenons le temps de cerner vos contraintes réglementaires, votre configuration et vos objectifs de performance — pour vous proposer la solution la plus adaptée, pas la plus standard.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Sélectionner le bon équipement.",
    body: "Pas le plus vendu. Nous sélectionnons les équipements parmi les gammes de nos partenaires leaders — calibrés pour votre besoin précis, pas pour correspondre à un catalogue standard.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "De la mise en service au suivi dans la durée.",
    body: "Nos techniciens spécialisés — formés par nos partenaires et maîtrisant les gammes déployées — assurent la mise en service de chaque équipement, puis en assurent le suivi : maintenance préventive et curative, traçabilité complète par GMAO.",
  },
];

const ApproachSection = () => (
  <section className="py-20 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          De la problématique à la solution. Sans détour.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-brand-dark flex items-center justify-center mx-auto mb-6">
              <step.icon className="w-7 h-7 text-white" />
            </div>
            <span className="text-brand-light font-bold text-sm tracking-widest">
              ÉTAPE {step.number}
            </span>
            <h3 className="text-lg font-bold text-brand-dark mt-3 mb-4">{step.title}</h3>
            <p className="text-muted-foreground font-light leading-relaxed">{step.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ApproachSection;
