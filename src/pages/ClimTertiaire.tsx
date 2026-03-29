import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectorHero from "@/components/sectors/SectorHero";
import SectorEnjeux from "@/components/sectors/SectorEnjeux";
import SectorCTA from "@/components/sectors/SectorCTA";
import ClimFeatures from "@/components/climatisation/ClimFeatures";
import heroImg from "@/assets/clim-tertiaire-hero.jpg";

const features = [
  {
    title: "Systèmes DRV silencieux et précis",
    body: "Gestion multi-zones avec des besoins différents dans un même bâtiment. Technologie All Inverter pour une efficacité maximale.",
  },
  {
    title: "Performance énergétique",
    body: "Les systèmes DRV Mitsubishi intègrent les technologies les plus efficientes du marché, pour un investissement rentabilisé sur la durée.",
  },
  {
    title: "Diffusion optimale",
    body: "Diffuseurs TROX pour un confort acoustique et thermique optimal, intégrés de façon discrète à l'architecture du bâtiment.",
  },
];

const ClimTertiaire = () => (
  <>
    <Header />
    <main>
      <SectorHero
        image={heroImg}
        title="Le confort thermique, facteur de productivité."
        subtitle="Bureaux · Immeubles tertiaires · Espaces de travail"
        body="Un espace de travail mal climatisé affecte directement le confort et la concentration des occupants. Clean Air sélectionne des systèmes DRV silencieux, précis et économes en énergie — capables de gérer des zones multiples avec des besoins différents, dans un même bâtiment."
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Climatisation", href: "/climatisation" },
          { label: "Tertiaire & Bureaux" },
        ]}
      />
      <SectorEnjeux
        title="Le bon système. Pour le bon espace. Au bon coût."
        body="La superficie, l'usage, le nombre d'occupants, les exigences acoustiques, l'orientation du bâtiment — autant de paramètres qui déterminent la solution. Clean Air met son expertise au service des maîtres d'ouvrage et des exploitants pour sélectionner et mettre en œuvre les équipements les plus adaptés à chaque configuration, en alliant performance, confort et efficacité énergétique."
      />
      <ClimFeatures
        title="Solutions pour le tertiaire"
        items={features}
        partners="Mitsubishi · TROX · Wolf"
      />
      <SectorCTA
        title="Un projet de climatisation pour vos bureaux ?"
        body="Clean Air sélectionne, fournit et met en service les meilleures solutions du marché — avec un suivi SAV intégré. Consider it solved."
      />
    </main>
    <Footer />
  </>
);

export default ClimTertiaire;
