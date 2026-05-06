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
        title: "Hôpitaux & Instituts",
        clients: ["Institut Pasteur"],
      },
      {
        title: "Cliniques & Polycliniques",
        clients: ["Polyclinique Les Jasmins", "Clinique Ennasr", "Polyclinique Les Berges du Lac", "Clinique Taoufik", "Clinique Pasteur", "Clinique Echifa", "Clinique Al Farabi", "Polyclinique Essalama", "Cliniques El Manar", "Clinique El Amen", "Clinique Soukra", "Clinique El Amen Mutuelleville", "Clinique Montplaisir", "Clinique Alyssa", "Polyclinique Les Narcisses", "Clinique Le Bardo", "Clinique Saint Augustin", "Clinique Zaghouan", "Clinique El Yosr", "Polyclinique Elalya", "Clinique Ezzahra", "Clinique Amen Bizerte", "Clinique Amen Béja", "Polyclinique du Capbon", "Clinique Megrine", "Polyclinique Dar Essalem", "Clinique Ennoura", "Clinique El-Arij", "Clinique les Oliviers", "Clinique El Walid Ezzahra", "Clinic La Douce Jerba", "Clinique Hamda Laouani"],
      },
    ],
  },
  {
    id: "datacenters",
    label: "Data Centers & Telecom",
    icon: Server,
    intro: "La continuité de service est une exigence absolue. Clean Air déploie des solutions de climatisation de précision et de continuité d'alimentation avec Vertiv.",
    groups: [
      {
        title: "Telecom & Broadcasting",
        clients: ["Ooredoo", "Orange Tunisie", "Tunisie Telecom", "ERTT", "Parc Telecom", "Planet", "3S - Globalnet", "Telnet", "ASBU", "LTC - Quinta Communication", "Radio Régionale de Tataouine"],
      },
      {
        title: "Banques, Conservation & Assurances",
        clients: ["Banque Africaine de Développement", "Arab Tunisian Bank ATB", "Banque de Tunisie", "Attijari Bank", "Banque Maghrebine", "BIAT", "Banque Centrale de Tunisie", "Banque Zitouna", "BNA", "UBCI", "BTE", "QNB", "Tunisie Valeur", "Conservation Foncière de Béja", "Conservation Foncière de Bizerte", "Conservation Foncière de Sfax", "CNSS", "COMAR", "Assurance Selim", "AMI Assurances", "GAT Assurance"],
      },
      {
        title: "Data Centers & Infrastructures critiques",
        clients: ["Bibliothèque Nationale", "Centre de Tri Postale", "Cité de la Culture", "Centre National de l'Informatique CNI", "Teleperformance", "Bosch LAAT", "Régie Nationale des Tabacs", "ST Microelectronic", "Monetique", "Tunisie Leasing", "Faurecia", "Areva Sud", "Areva Nord", "Centre d'Appel Stream", "Centre Informatique Ministère des Finances", "Centre Informatique Ministère de la Santé", "STEG", "Ministère de l'Intérieur", "Chambres des Députés", "Musée du Bardo", "Musée de Djerba", "La Cinémathèque", "CERT", "Aviation Training Center of Tunisia", "Usine Valeo", "Usine Lilas", "SFBT", "CIPI Actia", "Delice", "Focus", "Colas Rail", "Laboratoire Pharmaghreb", "Laboratoire Lavoisier", "Laboratoire de Métrologie", "HR Access", "NIDA", "TTN", "Clinique El Amen"],
      },
    ],
  },
  {
    id: "industrie",
    label: "Industrie",
    icon: Factory,
    intro: "Quand l'air fait partie du process de fabrication, aucune approximation n'est acceptable.",
    groups: [
      {
        title: "Pharmaceutique & Biomedical",
        clients: ["Sartorius Stedim", "Sanofi Opella", "Fresenius Kabi", "Helioflex", "Laboratoire Newix Pharma", "Adhe-Els", "Laboratoire Unimed", "Laboratoire MVI", "CLS", "Laboratoire Pharmin", "Laboratoire Galpharma", "Philadelphia Pharma", "Sened Pharma", "Labo Pierre Fabre", "Medipharm", "Laboratoire Pharmaghreb", "Institut Pasteur", "Laboratoire Ceva", "Labo Adwya", "Laboratoire d'Hygiène", "Laboratoire Teriak", "Laboratoire Xen", "Laboratoire Medis", "Dépôt Pharmacie Centrale", "Laboratoire Biogalenic"],
      },
      {
        title: "Équipementiers & Automobile",
        clients: ["Draexlmaier", "Faurecia", "Bosch", "Zodiac Aerospace", "CCA", "Misfat Filtration", "Valeo", "Alva Toray Group", "Continental", "Afrique Auto", "Leoni", "Marquardt Tunisia", "Draexlmaier Siliana", "Draexlmaier Jammel"],
      },
      {
        title: "Électronique",
        clients: ["ST Microelectronic", "TTEI", "Asteel Électronique", "Timelec", "Electronique El Agba"],
      },
      {
        title: "Agroalimentaire",
        clients: ["Stial Delice", "Nani", "Conditionnement Dattes Haifa", "Sotuchoc", "SFBT", "Groupe Chahia", "EPI", "Confisserie Triki"],
      },
      {
        title: "Chimie & Énergie",
        clients: ["Henkel", "Nawara Gaz", "Areva Sud", "Areva Nord", "Cimenterie de Carthage", "Cimenterie Gafsa"],
      },
      {
        title: "Textile",
        clients: ["Sartex", "Tunisia Knitting and Finishing"],
      },
      {
        title: "Autres industries",
        clients: ["SIT Controls", "Batterie Assad", "Sky Industrie", "SNC-Lavalin", "RNTA", "WIC", "FUBA", "Lilas (SAH)", "Fumoir Carrefour"],
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
        title: "Bureaux & Administrations",
        clients: ["CIPI Actia", "Focus", "CAIR Tunisie", "BTE", "Enda Tamweel", "Teleperformance", "Société Chimique Alkimia", "Poulina Group Holding", "Somocer", "Comaf Comptoir Africain", "BAD", "BH Bank", "UIB", "STB Bank", "Amen Bank", "Siege GTI", "Siege Ismail Group", "MAE", "Sogepa", "Studio Info", "Complex 4 Saisons Sfax", "Foncière Kairouan", "Zarzis Smart Center", "Poste Frontalier Melloula", "Gouvernorat Sousse", "Municipalité Sidi Bousaid"],
      },
      {
        title: "Hôtellerie & Restauration",
        clients: ["La Cigale Tabarka Hotel", "Le Golfe Restaurant", "Hotel Hilton Tunis", "Hotel Eden Seray", "Sun Senior Djerba", "SPA Hotel Golden Tulip", "Club Med Hammamet", "Club Med Djerba", "Hotel El Habib", "Hotel Occidental", "Hotel Thalassa Village", "Hotel Djerba Fiesta Beach", "Hotel Tamagza Palace", "Restaurant L'Eagle"],
      },
      {
        title: "Commerce & Distribution",
        clients: ["Darty", "Fnac", "Mall de Sousse", "Hypermarché Géant Tunis City 1 et 2", "Djerba Mall", "Cinema Agora", "Pull and Bear", "Kiabi Bardo", "Decathlon Tunis City", "Decathlon La Marsa", "Bershka", "Galeria Sousse"],
      },
      {
        title: "Enseignement & Culture",
        clients: ["Groupe Université Centrale", "Ecole de Santé Monastir", "ISET Borj Cedria", "Institut de la Mode Monastir", "Maison de Culture Médenine", "Centre Culturel Ajim", "Centre d'Art Dramatique"],
      },
      {
        title: "Immobilier & Résidentiel premium",
        clients: ["Immeuble Chaker Les Berges du Lac", "Athena Immobilière", "Horizon Immobilière", "Résidence Jinene Donia", "Blue Green Hill Residence", "Illiade Immobilière", "Promotion El Ahbeb", "Promotion El Biri", "Edifica", "Qatary Diar", "Dana Immobilière"],
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
