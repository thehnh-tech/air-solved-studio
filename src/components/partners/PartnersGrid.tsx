import { motion } from "framer-motion";
import { Wind, Server, Thermometer, Fan, Droplets, Snowflake, Waves, Building2 } from "lucide-react";

const partners = [
  {
    name: "Camfil",
    tagline: "Leader mondial de la filtration de l'air",
    icon: Wind,
    desc: "Camfil est la référence mondiale en solutions de filtration de l'air premium. De la filtration standard aux filtres HEPA et ULPA pour environnements critiques, Camfil couvre l'ensemble du spectre. Vingt ans de partenariat avec Clean Air.",
    sectors: "Santé · Industrie pharmaceutique · Tertiaire · Agroalimentaire",
    years: "+20 ans",
  },
  {
    name: "Vertiv",
    tagline: "Leader mondial des infrastructures critiques",
    icon: Server,
    desc: "Vertiv est le numéro un mondial des solutions d'infrastructure critique. Présent dans les plus grands data centers de la planète, Vertiv conçoit et déploie les solutions de climatisation de précision et d'alimentation sans interruption.",
    sectors: "Data Centers · Telecom · Infrastructures critiques",
    years: "+20 ans",
  },
  {
    name: "Wolf",
    tagline: "Premier constructeur européen de CTA",
    icon: Thermometer,
    desc: "Wolf est le premier constructeur européen de centrales de traitement d'air. Des unités standard aux CTA hygiéniques sur mesure pour blocs opératoires et salles blanches.",
    sectors: "Santé · Industrie · Tertiaire · Gros volumes",
    years: "Partenaire historique",
  },
  {
    name: "TROX",
    tagline: "Référence mondiale en diffusion d'air",
    icon: Fan,
    desc: "TROX est la référence mondiale en matière de diffusion et régulation de l'air. Grilles, diffuseurs, clapets coupe-feu, boîtes de mélange — chaque composant contribue à la performance globale du système.",
    sectors: "Tous secteurs",
    years: "Partenaire historique",
  },
  {
    name: "Munters",
    tagline: "Leader mondial de la déshumidification",
    icon: Droplets,
    desc: "Munters est le leader mondial des solutions de déshumidification. Quand l'humidité est l'ennemi du process — pharmaceutique, agroalimentaire, stockage — Munters apporte la réponse la plus précise.",
    sectors: "Industrie pharmaceutique · Agroalimentaire · Stockage",
    years: "Partenaire stratégique",
  },
  {
    name: "Mitsubishi Electric",
    tagline: "Excellence en climatisation de confort",
    icon: Snowflake,
    desc: "Mitsubishi Electric est synonyme de fiabilité, d'efficacité énergétique et de silence en climatisation de confort. Systèmes DRV, cassettes, gainables — la gamme la plus complète du marché.",
    sectors: "Tertiaire · Hôtellerie · Résidentiel premium",
    years: "Partenaire premium",
  },
  {
    name: "Dantherm",
    tagline: "Spécialiste de la déshumidification piscines",
    icon: Waves,
    desc: "Dantherm est le spécialiste européen de la déshumidification des piscines couvertes et espaces aquatiques. Maîtrise de l'humidité, confort des baigneurs, protection du bâtiment.",
    sectors: "Piscines couvertes · Espaces aquatiques · Hôtellerie",
    years: "Partenaire spécialisé",
  },
  {
    name: "Tecnair LV",
    tagline: "Solutions pour environnements critiques",
    icon: Building2,
    desc: "Tecnair LV conçoit des solutions de traitement d'air pour les environnements les plus exigeants : blocs opératoires, salles blanches, laboratoires — là où le compromis n'existe pas.",
    sectors: "Santé · Salles blanches · Laboratoires",
    years: "Partenaire spécialisé",
  },
];

const PartnersGrid = () => (
  <section className="py-20 bg-muted">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-8">
        {partners.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.15 }}
            className="bg-background rounded-xl p-8 border border-border"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary font-heading">{p.name}</h3>
                <p className="text-secondary font-medium text-sm">{p.tagline}</p>
              </div>
              <span className="ml-auto text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full font-medium whitespace-nowrap">
                {p.years}
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Secteurs :</span> {p.sectors}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersGrid;
