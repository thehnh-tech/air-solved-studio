import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectorHero from "@/components/sectors/SectorHero";
import SectorEnjeux from "@/components/sectors/SectorEnjeux";
import SectorSolutions from "@/components/sectors/SectorSolutions";
import SectorApproach from "@/components/sectors/SectorApproach";
import SectorReferences from "@/components/sectors/SectorReferences";
import SectorCTA from "@/components/sectors/SectorCTA";
import heroImg from "@/assets/sector-industrie-hero.jpg";

const solutions = [
  {
    title: "Industrie pharmaceutique",
    hook: "Le mot clé est la propreté.",
    partners: "Camfil · Wolf · TROX · Munters",
  },
  {
    title: "Industrie agroalimentaire",
    hook: "L'air fait partie du process de fabrication.",
    partners: "Camfil · Munters · Wolf · TROX",
  },
  {
    title: "Équipementiers & Micro-électronique",
    hook: "Protéger les composants. Maîtriser la contamination.",
    partners: "Camfil · Wolf · TROX",
  },
  {
    title: "Autres industries (Papeterie · Tabac · Textile)",
    hook: "Qualité d'air, confort des opérateurs, efficacité énergétique.",
    partners: "Camfil · Wolf · Munters · TROX",
  },
];

const approach = [
  "Filtration adaptée au risque (G4 → HEPA H14 · Camfil)",
  "Maîtrise de l'humidité (Munters — leader mondial déshumidification)",
  "Centrales de traitement d'air sur mesure (Wolf — premier constructeur européen)",
];

const references = [
  "Draexlmaier", "Bontaz", "Faurecia", "Kromberg & Schubert",
  "Bosch", "WCW Automotive Silvatrim", "Zodiac Aerospace", "CCA",
  "Misfat Filtration", "Valeo", "Alva Toray Group",
];

const SectorIndustrie = () => (
  <>
    <Header />
    <main>
      <SectorHero
        image={heroImg}
        title="L'air industriel. Une contrainte de production, pas un détail."
        subtitle="Pharmaceutique · Agroalimentaire · Automobile · Micro-électronique"
        body="Dans l'industrie, la qualité de l'air conditionne directement la qualité du produit. Contamination particulaire, humidité non maîtrisée, température instable — chaque écart se traduit par un risque réglementaire, une non-conformité ou une perte de production. Depuis plus de vingt ans, Clean Air accompagne les industriels les plus exigeants."
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Traitement de l'air", href: "/traitement-de-lair" },
          { label: "Industrie" },
        ]}
      />
      <SectorEnjeux
        title="Chaque industrie. Ses contraintes. Ses normes. Sa solution."
        body="Il n'existe pas de solution standard pour le traitement de l'air industriel. Les exigences d'une ligne pharmaceutique sont différentes de celles d'une unité agroalimentaire, qui sont elles-mêmes distinctes de celles d'un atelier de micro-électronique. Ce que Clean Air apporte, c'est la capacité à comprendre les contraintes spécifiques de chaque process — et à sélectionner les équipements adaptés."
      />
      <SectorSolutions title="Solutions par secteur" items={solutions} />
      <SectorApproach title="Approche technique" steps={approach} />
      <SectorReferences items={references} />
      <SectorCTA
        title="Votre process mérite une qualité d'air à sa mesure."
        body="Chaque environnement industriel est unique. Clean Air sélectionne et met en œuvre les équipements adaptés à vos contraintes process, réglementaires et énergétiques — avec le suivi SAV qui garantit la conformité dans la durée."
      />
    </main>
    <Footer />
  </>
);

export default SectorIndustrie;
