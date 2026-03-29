import { motion } from "framer-motion";
import { UserCheck, Handshake, FileText } from "lucide-react";

const items = [
  {
    icon: UserCheck,
    title: "Prise en charge personnalisée",
    desc: "Un chargé d'affaires prend en charge votre demande et revient vers vous rapidement.",
  },
  {
    icon: Handshake,
    title: "Interlocuteur dédié",
    desc: "Un chargé d'affaires spécialisé prend en charge votre projet de A à Z.",
  },
  {
    icon: FileText,
    title: "Devis sur mesure",
    desc: "Pas de grille tarifaire standard — chaque projet est étudié selon ses contraintes spécifiques.",
  },
];

const ReassuranceSection = () => (
  <section className="py-20 bg-muted">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="text-center p-8"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <item.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-primary mb-3 font-heading">
              {item.title}
            </h3>
            <p className="text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReassuranceSection;
