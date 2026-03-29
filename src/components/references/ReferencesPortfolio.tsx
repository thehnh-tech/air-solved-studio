import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Server, Factory, Briefcase } from "lucide-react";

const tabs = [
  {
    id: "sante",
    label: "Santé",
    icon: Building2,
    intro: "Nulle part le traitement de l'air n'est aussi critique. Clean Air accompagne les établissements de santé depuis plus de vingt ans.",
    groups: [
      {
        title: "Grand Tunis",
        clients: ["Polyclinique Les Jasmins", "Centre International Carthage Medical", "Clinique Ennasr", "Polyclinique Les Berges du Lac", "Clinique Taoufik", "La Rose Clinique", "Clinique Pasteur", "Clinique Echifa", "Clinique Al Farabi", "Polyclinique Essalama", "Cliniques El Manar", "Clinique El Amen", "Clinique Soukra", "Clinique El Amen Mutuelleville", "Clinique Montplaisir", "Clinique Alyssa", "Polyclinique Les Narcisses", "Clinique Le Bardo", "Clinique Saint Augustin"],
      },
      {
        title: "Régions",
        clients: ["Clinique Zaghouan", "Clinique El Yosr", "Polyclinique Elalya", "Clinique Ezzahra", "Clinique Amen Bizerte", "Clinique Amen Béja", "Polyclinique du Capbon", "Clinique Megrine", "Polyclinique Dar Essalem", "Clinique Ennoura", "Clinique El-Arij", "Clinique les Oliviers", "Clinique El Walid Ezzahra", "Clinic La Douce Jerba", "Clinique Hamda Laouani"],
      },
    ],
  },
  {
    id: "datacenters",
    label: "Data Centers & Telecom",
    icon: Server,
    intro: "La continuité de service est une exigence absolue. Clean Air déploie des solutions de climatisation de précision et de continuité d'alimentation avec Vertiv.",
    groups: [{ title: "Clients", clients: ["Références en cours de compilation"] }],
  },
  {
    id: "industrie",
    label: "Industrie",
    icon: Factory,
    intro: "Quand l'air fait partie du process de fabrication, aucune approximation n'est acceptable.",
    groups: [
      {
        title: "Équipementiers & Automobile",
        clients: ["Draexlmaier", "Bontaz", "Faurecia", "Kromberg & Schubert", "Bosch", "WCW Automotive", "Silvatrim", "Zodiac Aerospace", "CCA", "Misfat Filtration", "Valeo", "Alva Toray Group"],
      },
    ],
  },
  {
    id: "tertiaire",
    label: "Tertiaire",
    icon: Briefcase,
    intro: "Du confort thermique des espaces de travail à la déshumidification des piscines couvertes.",
    groups: [
      {
        title: "Clients",
        clients: ["CIPI Actia", "Focus", "CAIR Tunisie", "BTE", "Enda Tamweel", "Teleperformance", "Société Chimique Alkimia", "Groupe Université Centrale", "Poulina Group Holding", "La Cigale Tabarka Hotel", "Somocer", "Le Golfe Restaurant", "Darty", "Fnac", "Comaf Comptoir Africain"],
      },
    ],
  },
];

const ReferencesPortfolio = () => {
  const [activeTab, setActiveTab] = useState("sante");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-primary mb-10 font-heading text-center"
        >
          Nos réalisations. Par secteur.
        </motion.h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-md font-medium transition-all text-sm ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-background text-muted-foreground hover:bg-primary/10"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
              {active.intro}
            </p>
            {active.groups.map((group) => (
              <div key={group.title} className="mb-8">
                <h3 className="text-lg font-bold text-primary mb-4 font-heading">
                  {group.title}
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {group.clients.map((client) => (
                    <div
                      key={client}
                      className="bg-background rounded-lg px-4 py-3 text-sm text-foreground border border-border"
                    >
                      {client}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ReferencesPortfolio;
