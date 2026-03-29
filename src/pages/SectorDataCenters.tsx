import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectorHero from "@/components/sectors/SectorHero";
import SectorEnjeux from "@/components/sectors/SectorEnjeux";
import SectorSolutions from "@/components/sectors/SectorSolutions";
import SectorApproach from "@/components/sectors/SectorApproach";
import SectorPartnerHighlight from "@/components/sectors/SectorPartnerHighlight";
import SectorReferences from "@/components/sectors/SectorReferences";
import SectorCTA from "@/components/sectors/SectorCTA";
import heroImg from "@/assets/sector-datacenter-hero.jpg";

const solutions = [
  {
    title: "Data Centers",
    hook: "Maîtrise thermique totale. Disponibilité maximale.",
    partners: "Vertiv",
  },
  {
    title: "Salles informatiques & Salles serveurs",
    hook: "La continuité de service, de la petite salle au datacenter.",
    partners: "Vertiv",
  },
  {
    title: "Sites Telecom (MSC · Core · NOC · Shelter)",
    hook: "Continuité de service. Réduction des Capex et Opex.",
    partners: "Vertiv",
  },
  {
    title: "Alimentations sans interruption",
    hook: "L'alimentation électrique, aussi critique que le refroidissement.",
    partners: "Vertiv",
  },
];

const approach = [
  "Climatisation de précision (Vertiv — leader mondial des infrastructures critiques)",
  "Alimentations sans interruption UPS (Vertiv — continuité électrique garantie)",
  "Gestion thermique et monitoring (supervision, alertes, GMAO)",
];

const references = [
  "Tunisie Telecom", "Orange Tunisie", "Ooredoo",
  "BIAT", "Banque Centrale de Tunisie", "STB",
  "Attijari Bank", "Amen Bank", "BH Bank",
  "Tunisair", "STEG", "La Poste Tunisienne",
];

const SectorDataCenters = () => (
  <>
    <Header />
    <main>
      <SectorHero
        image={heroImg}
        title="La disponibilité à 100 %. Une exigence, pas un objectif."
        subtitle="Data Centers · Salles informatiques · Télécom · Infrastructures critiques"
        body="Un data center qui surchauffe, c'est une panne. Une salle telecom mal climatisée, c'est une interruption de service. Clean Air et son partenaire Vertiv, leader mondial des infrastructures critiques, déploient les solutions qui garantissent la disponibilité de vos équipements."
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Traitement de l'air", href: "/traitement-de-lair" },
          { label: "Data Centers & Telecom" },
        ]}
      />
      <SectorEnjeux
        title="La chaleur, ennemie des équipements critiques."
        body="Le fonctionnement des équipements informatiques et des infrastructures télécom génère une chaleur intense et continue. Sans maîtrise thermique précise, les risques sont immédiats : surchauffe des équipements, réduction de leur durée de vie, arrêts de service non planifiés, pertes de données. À cela s'ajoutent les risques liés à la qualité de l'alimentation électrique : baisses de tension, surtensions, variations de fréquence. Clean Air intervient sur les deux fronts — maîtrise thermique et continuité d'alimentation — avec Vertiv, le numéro un mondial des solutions pour infrastructures critiques."
      />
      <SectorSolutions title="Solutions par environnement" items={solutions} />
      <SectorApproach title="Approche technique" steps={approach} />
      <SectorPartnerHighlight
        name="Vertiv"
        tagline="Le numéro un mondial des infrastructures critiques."
        body="Vertiv est le leader mondial des solutions pour infrastructures critiques. Présent dans les plus grands data centers de la planète, chez les principaux opérateurs télécoms et dans les institutions les plus stratégiques au monde, Vertiv conçoit et déploie les solutions de climatisation de précision, d'alimentation sans interruption et de gestion thermique. Clean Air est partenaire Vertiv depuis plus de vingt ans."
      />
      <SectorReferences items={references} />
      <SectorCTA
        title="Votre infrastructure critique mérite le meilleur."
        body="Data center, salle serveurs, site telecom — Clean Air et Vertiv déploient la solution adaptée à votre infrastructure, avec le suivi SAV qui garantit votre disponibilité dans la durée."
      />
    </main>
    <Footer />
  </>
);

export default SectorDataCenters;
