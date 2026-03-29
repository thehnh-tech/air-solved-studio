import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectorHero from "@/components/sectors/SectorHero";
import SectorEnjeux from "@/components/sectors/SectorEnjeux";
import SectorCTA from "@/components/sectors/SectorCTA";
import ClimFeatures from "@/components/climatisation/ClimFeatures";
import heroImg from "@/assets/clim-hotellerie-hero.jpg";

const features = [
  {
    title: "Systèmes DRV Mitsubishi",
    body: "Bas niveau sonore, design moderne, technologie All Inverter — pour un confort total sans compromis esthétique.",
  },
  {
    title: "Diffusion TROX",
    body: "Confort acoustique et thermique optimal — la climatisation s'intègre à l'espace sans se faire remarquer.",
  },
  {
    title: "Déshumidification Dantherm",
    body: "Pour les piscines couvertes et espaces humides, Dantherm assure la maîtrise de l'humidité avec précision.",
  },
];

const ClimHotellerie = () => (
  <>
    <Header />
    <main>
      <SectorHero
        image={heroImg}
        title="Le confort, le silence, et la maîtrise de l'humidité."
        subtitle="Hôtels · Résidences premium · Piscines couvertes"
        body="Dans un hôtel ou une résidence premium, la climatisation doit être performante et totalement transparente pour l'occupant. Clean Air associe les systèmes DRV Mitsubishi à la diffusion TROX et à la déshumidification Dantherm pour un confort irréprochable."
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Climatisation", href: "/climatisation" },
          { label: "Hôtellerie & Résidentiel" },
        ]}
      />
      <SectorEnjeux
        title="Invisible pour l'occupant. Irréprochable en performance."
        body="La climatisation d'un hôtel ou d'une résidence premium ne se limite pas au refroidissement. Le silence, la discrétion des équipements, la gestion de l'humidité dans les espaces aquatiques — chaque paramètre compte pour l'expérience de l'occupant. Clean Air sélectionne et met en service les équipements qui répondent à ces exigences, sans compromis."
      />
      <ClimFeatures
        title="Solutions pour l'hôtellerie & le résidentiel"
        items={features}
        partners="Mitsubishi · TROX · Dantherm"
      />
      <SectorCTA
        title="Un projet de climatisation hôtelier ou résidentiel ?"
        body="Hôtel, résidence premium, piscine couverte — Clean Air met en service les solutions adaptées à votre espace, avec le niveau de confort et de silence qu'exige votre clientèle."
      />
    </main>
    <Footer />
  </>
);

export default ClimHotellerie;
