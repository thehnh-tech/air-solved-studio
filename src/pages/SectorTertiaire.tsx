import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectorHero from "@/components/sectors/SectorHero";
import SectorEnjeux from "@/components/sectors/SectorEnjeux";
import SectorSolutions from "@/components/sectors/SectorSolutions";
import SectorBenefits from "@/components/sectors/SectorBenefits";
import SectorReferences from "@/components/sectors/SectorReferences";
import SectorCTA from "@/components/sectors/SectorCTA";
import heroImg from "@/assets/sector-tertiaire-hero.jpg";

const solutions = [
  {
    title: "Immeubles de bureaux & Espaces tertiaires",
    hook: "Le confort thermique, facteur de productivité et d'attractivité.",
    partners: "Wolf · TROX · Mitsubishi",
  },
  {
    title: "Gros volumes & Centres commerciaux",
    hook: "Une puissance importante. Sans empiéter sur l'espace exploitable.",
    partners: "Wolf · TROX",
  },
  {
    title: "Hôtels & Résidences premium",
    hook: "Invisible pour l'occupant. Irréprochable en performance.",
    partners: "Mitsubishi · TROX · Dantherm",
  },
  {
    title: "Collectivités & Établissements publics",
    hook: "Des environnements sains. Pour tous. Dans la durée.",
    partners: "Wolf · TROX · Camfil",
  },
];

const references = [
  "CIPI Actia", "Focus", "CAIR Tunisie", "BTE", "Enda Tamweel",
  "Teleperformance", "Société Chimique Alkimia", "Groupe Université Centrale",
  "Poulina Group Holding", "La Cigale Tabarka Hotel", "Somocer",
  "Le Golfe Restaurant", "Darty", "Fnac", "Comaf Comptoir Africain",
];

const SectorTertiaire = () => (
  <>
    <Header />
    <main>
      <SectorHero
        image={heroImg}
        title="L'air des espaces de vie et de travail. Aussi exigeant que vous."
        subtitle="Bureaux · Immeubles · Centres commerciaux · Hôtels · Collectivités"
        body="Confort thermique, qualité de l'air intérieur, silence, efficacité énergétique, conformité réglementaire — les bâtiments tertiaires et les établissements publics sont soumis à des exigences croissantes. Clean Air accompagne les maîtres d'ouvrage, les promoteurs et les exploitants avec des solutions adaptées."
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Traitement de l'air", href: "/traitement-de-lair" },
          { label: "Tertiaire & Collectivités" },
        ]}
      />
      <SectorEnjeux
        title="Le bon système. Pour le bon espace. Au bon coût."
        body="Le système de traitement d'air le plus efficient n'est pas le même pour un centre commercial, un immeuble de bureaux, un établissement scolaire ou une clinique. La superficie, l'usage, le nombre d'occupants, les exigences acoustiques, l'orientation du bâtiment — autant de paramètres qui déterminent la solution. Clean Air met son expertise au service des maîtres d'ouvrage, des promoteurs immobiliers et des exploitants de bâtiments — pour sélectionner et mettre en œuvre les équipements les plus adaptés à chaque configuration."
      />
      <SectorSolutions title="Solutions par espace" items={solutions} />
      <SectorBenefits />
      <SectorReferences items={references} />
      <SectorCTA
        title="Votre bâtiment mérite des équipements à la hauteur de vos ambitions."
        body="Maître d'ouvrage, promoteur, exploitant ou gestionnaire de patrimoine — Clean Air vous accompagne dans la sélection et la mise en œuvre des solutions de traitement d'air et de climatisation adaptées à chaque espace de votre bâtiment."
      />
    </main>
    <Footer />
  </>
);

export default SectorTertiaire;
