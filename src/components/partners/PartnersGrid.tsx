import { motion } from "framer-motion";
import camfilLogo from "@/assets/partners/camfil.png";
import vertivLogo from "@/assets/partners/vertiv.png";
import wolfLogo from "@/assets/partners/wolf.png";
import troxLogo from "@/assets/partners/trox.png";
import muntersLogo from "@/assets/partners/munters.png";
import mitsubishiLogo from "@/assets/partners/mitsubishi.png";
import danthermLogo from "@/assets/partners/dantherm.png";
import tecnairLogo from "@/assets/partners/tecnair.png";
import lennoxLogo from "@/assets/partners/lennox.png";

const partners = [
  {
    name: "Camfil",
    tagline: "Leader mondial de la filtration de l'air",
    logo: camfilLogo,
    desc: "Camfil est la référence mondiale en solutions de filtration de l'air premium. De la filtration standard aux filtres HEPA et ULPA pour environnements critiques, Camfil couvre l'ensemble du spectre. Vingt ans de partenariat avec Clean Air.",
    sectors: "Santé · Industrie pharmaceutique · Tertiaire · Agroalimentaire",
    years: "+20 ans",
  },
  {
    name: "Vertiv",
    tagline: "Leader mondial des infrastructures critiques",
    logo: vertivLogo,
    desc: "Vertiv est le numéro un mondial des solutions d'infrastructure critique. Présent dans les plus grands data centers de la planète, Vertiv conçoit et déploie les solutions de climatisation de précision et d'alimentation sans interruption.",
    sectors: "Data Centers · Telecom · Infrastructures critiques",
    years: "+20 ans",
  },
  {
    name: "Wolf",
    tagline: "Premier constructeur européen de CTA",
    logo: wolfLogo,
    desc: "Wolf est le premier constructeur européen de centrales de traitement d'air. Des unités standard aux CTA hygiéniques sur mesure pour blocs opératoires et salles blanches.",
    sectors: "Santé · Industrie · Tertiaire · Gros volumes",
    years: "Partenaire historique",
  },
  {
    name: "TROX",
    tagline: "Référence mondiale en diffusion d'air",
    logo: troxLogo,
    desc: "TROX est la référence mondiale en matière de diffusion et régulation de l'air. Grilles, diffuseurs, clapets coupe-feu, boîtes de mélange — chaque composant contribue à la performance globale du système.",
    sectors: "Tous secteurs",
    years: "Partenaire historique",
  },
  {
    name: "Munters",
    tagline: "Leader mondial de la déshumidification",
    logo: muntersLogo,
    desc: "Munters est le leader mondial des solutions de déshumidification. Quand l'humidité est l'ennemi du process — pharmaceutique, agroalimentaire, stockage — Munters apporte la réponse la plus précise.",
    sectors: "Industrie pharmaceutique · Agroalimentaire · Stockage",
    years: "Partenaire stratégique",
  },
  {
    name: "Mitsubishi Electric",
    tagline: "Excellence en climatisation de confort",
    logo: mitsubishiLogo,
    desc: "Mitsubishi Electric est synonyme de fiabilité, d'efficacité énergétique et de silence en climatisation de confort. Systèmes DRV, cassettes, gainables — la gamme la plus complète du marché.",
    sectors: "Tertiaire · Hôtellerie · Résidentiel premium",
    years: "Partenaire premium",
  },
  {
    name: "Dantherm",
    tagline: "Spécialiste de la déshumidification piscines",
    logo: danthermLogo,
    desc: "Dantherm est le spécialiste européen de la déshumidification des piscines couvertes et espaces aquatiques. Maîtrise de l'humidité, confort des baigneurs, protection du bâtiment.",
    sectors: "Piscines couvertes · Espaces aquatiques · Hôtellerie",
    years: "Partenaire spécialisé",
  },
  {
    name: "Tecnair LV",
    tagline: "Solutions pour environnements critiques",
    logo: tecnairLogo,
    desc: "Tecnair LV conçoit des solutions de traitement d'air pour les environnements les plus exigeants : blocs opératoires, salles blanches, laboratoires — là où le compromis n'existe pas.",
    sectors: "Santé · Salles blanches · Laboratoires",
    years: "Partenaire spécialisé",
  },
  {
    name: "Lennox",
    tagline: "Solutions de climatisation et chauffage",
    logo: lennoxLogo,
    desc: "Lennox est un acteur mondial reconnu pour ses solutions de climatisation, chauffage et traitement d'air destinées aux applications tertiaires et industrielles, alliant performance énergétique et fiabilité.",
    sectors: "Tertiaire · Industrie · Commerce",
    years: "Partenaire premium",
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
            <div className="flex items-center gap-4 mb-4">
              <div
                style={{ width: 180, height: 90, padding: 15, backgroundColor: "#FFFFFF" }}
                className="rounded-lg flex items-center justify-center shrink-0 border border-border"
              >
                <img src={p.logo} alt={`${p.name} logo`} className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary font-heading">{p.name}</h3>
                <p className="text-secondary font-medium text-sm">{p.tagline}</p>
              </div>
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
