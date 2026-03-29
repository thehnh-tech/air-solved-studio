import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Warehouse, Hotel } from "lucide-react";

const applications = [
  {
    icon: Building2,
    title: "Immeubles de bureaux & Espaces tertiaires",
    subtitle: "Le confort thermique, facteur de productivité.",
    body: "Un espace de travail mal climatisé affecte directement le confort et la concentration des occupants. Clean Air sélectionne des systèmes DRV silencieux, précis et économes en énergie — capables de gérer des zones multiples avec des besoins différents, dans un même bâtiment.",
    partners: "Mitsubishi · TROX · Wolf",
    link: "/climatisation/tertiaire-bureaux",
    linkLabel: "Voir nos références tertiaire",
  },
  {
    icon: Warehouse,
    title: "Gros volumes & Centres commerciaux",
    subtitle: "Climatiser un grand volume sans encombrer l'espace.",
    body: "Les gros volumes exigent une puissance importante — sans pour autant empiéter sur la surface exploitable. Clean Air propose des solutions roof top compactes intégrant chauffage, climatisation et ventilation en air neuf. Efficacité énergétique maximale : compresseur scroll, free-cooling, pompe à chaleur.",
    partners: "Wolf",
    link: "/climatisation/gros-volumes",
    linkLabel: "Voir nos références grande distribution",
  },
  {
    icon: Hotel,
    title: "Hôtels, Résidences & Piscines couvertes",
    subtitle: "Le confort, le silence, et la maîtrise de l'humidité.",
    body: "Dans un hôtel ou une résidence premium, la climatisation doit être performante et totalement transparente pour l'occupant. Clean Air associe les systèmes DRV Mitsubishi — bas niveau sonore, design moderne, technologie All Inverter — à la diffusion TROX pour un confort acoustique et thermique optimal. Pour les piscines couvertes et espaces humides, Dantherm assure la déshumidification avec précision.",
    partners: "Mitsubishi · TROX · Dantherm",
    link: "/climatisation/hotellerie-residentiel",
    linkLabel: "Voir nos références hôtellerie & résidentiel",
  },
];

const ApplicationsSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
          Des solutions adaptées à chaque espace.
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {applications.map((app, i) => (
          <motion.div
            key={app.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-lg transition-shadow flex flex-col"
          >
            <div className="w-14 h-14 rounded-xl bg-brand-dark/10 flex items-center justify-center mb-6">
              <app.icon className="w-7 h-7 text-brand-dark" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">{app.title}</h3>
            <p className="text-brand-light font-medium text-sm mb-4">{app.subtitle}</p>
            <p className="text-muted-foreground font-light leading-relaxed mb-4 flex-1">
              {app.body}
            </p>
            <p className="text-sm text-brand-light font-medium mb-6">
              Partenaires : {app.partners}
            </p>
            <Link
              to={app.link}
              className="inline-flex items-center gap-2 text-brand-dark font-semibold hover:text-brand-light transition-colors"
            >
              {app.linkLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ApplicationsSection;
