import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectorHero from "@/components/sectors/SectorHero";
import SectorEnjeux from "@/components/sectors/SectorEnjeux";
import SectorCTA from "@/components/sectors/SectorCTA";
import ClimFeatures from "@/components/climatisation/ClimFeatures";
import heroImg from "@/assets/clim-gros-volumes-hero.jpg";

const features = [
  {
    title: "Solutions Roof Top compactes",
    body: "Intégrant chauffage, climatisation et ventilation en air neuf — sans empiéter sur la surface exploitable.",
  },
  {
    title: "Efficacité énergétique maximale",
    body: "Compresseur scroll, free-cooling, pompe à chaleur — pour une consommation optimisée sur les grands espaces.",
  },
  {
    title: "Puissance adaptée aux grands espaces",
    body: "Centres commerciaux, grandes surfaces, espaces d'exposition — des solutions dimensionnées pour chaque configuration.",
  },
];

const ClimGrosVolumes = () => (
  <>
    <Header />
    <main>
      <SectorHero
        image={heroImg}
        title="Climatiser un grand volume sans encombrer l'espace."
        subtitle="Centres commerciaux · Grandes surfaces · Espaces d'exposition"
        body="Les gros volumes exigent une puissance importante — sans pour autant empiéter sur la surface exploitable. Clean Air propose des solutions roof top compactes intégrant chauffage, climatisation et ventilation en air neuf."
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Climatisation", href: "/climatisation" },
          { label: "Gros volumes" },
        ]}
      />
      <SectorEnjeux
        title="Une puissance importante. Un encombrement minimal."
        body="Les espaces commerciaux et les gros volumes nécessitent des solutions capables de traiter de grands débits d'air tout en maintenant un confort homogène. Les solutions roof top Wolf permettent de centraliser le traitement d'air en toiture, libérant l'espace intérieur — tout en intégrant les dernières technologies d'efficacité énergétique."
      />
      <ClimFeatures
        title="Solutions pour les gros volumes"
        items={features}
        partners="Wolf"
      />
      <SectorCTA
        title="Un projet de climatisation pour un grand espace ?"
        body="Centre commercial, grande surface, espace d'exposition — Clean Air dimensionne et met en service la solution adaptée à votre volume, avec le suivi SAV qui garantit la performance dans la durée."
      />
    </main>
    <Footer />
  </>
);

export default ClimGrosVolumes;
