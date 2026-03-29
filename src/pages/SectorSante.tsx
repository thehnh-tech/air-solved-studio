import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectorHero from "@/components/sectors/SectorHero";
import SectorEnjeux from "@/components/sectors/SectorEnjeux";
import SectorSolutions from "@/components/sectors/SectorSolutions";
import SectorApproach from "@/components/sectors/SectorApproach";
import SectorReferences from "@/components/sectors/SectorReferences";
import SectorCTA from "@/components/sectors/SectorCTA";
import heroImg from "@/assets/sector-sante-hero.jpg";

const solutions = [
  {
    title: "Blocs opératoires",
    hook: "Zéro contamination. Zéro compromis.",
    partners: "Tecnair LV · Camfil · Wolf · TROX",
  },
  {
    title: "Salles de réanimation & Soins intensifs",
    hook: "Des patients vulnérables. Une exigence maximale.",
    partners: "Camfil · Wolf · TROX",
  },
  {
    title: "Laboratoires & Pharmacies hospitalières",
    hook: "La propreté de l'air, condition de la fiabilité des résultats.",
    partners: "Camfil · Wolf · TROX",
  },
  {
    title: "Cliniques, cabinets & centres de soins",
    hook: "La qualité de l'air, pour tous les espaces de soin.",
    partners: "Camfil · Wolf · TROX",
  },
];

const approach = [
  "Filtration haute efficacité (G4 → HEPA H14 → ULPA U15 — Camfil)",
  "Contrôle des paramètres critiques (température, humidité, pression — Wolf · TROX)",
  "Mise en service & suivi (techniciens spécialisés · GMAO)",
];

const references = [
  "Polyclinique Les Jasmins", "Centre International Carthage Medical", "Clinique Ennasr",
  "Polyclinique Les Berges du Lac", "Clinique Taoufik", "La Rose Clinique",
  "Clinique Pasteur", "Clinique Echifa", "Clinique Al Farabi",
  "Polyclinique Essalama", "Cliniques El Manar", "Clinique El Amen",
  "Clinique Soukra", "Clinique Montplaisir", "Clinique Alyssa",
  "Polyclinique Les Narcisses", "Clinique Le Bardo", "Clinique Saint Augustin",
  "Clinique Zaghouan", "Clinique El Yosr", "Polyclinique Elalya",
  "Clinique Ezzahra", "Clinique Amen Bizerte", "Clinique Amen Béja",
];

const SectorSante = () => (
  <>
    <Header />
    <main>
      <SectorHero
        image={heroImg}
        title="Nulle part le traitement de l'air n'est aussi critique."
        subtitle="Blocs opératoires · Salles de réanimation · Laboratoires · Cliniques"
        body="Dans les établissements de santé, la qualité de l'air n'est pas un confort — c'est une exigence réglementaire et une condition de sécurité pour les patients comme pour le personnel soignant. Clean Air accompagne les professionnels de santé depuis plus de vingt ans."
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Traitement de l'air", href: "/traitement-de-lair" },
          { label: "Santé" },
        ]}
      />
      <SectorEnjeux
        title="L'air, vecteur de contamination. Ou de protection."
        body="Le taux de contaminants infectieux aéroportés augmente proportionnellement à la densité des personnes présentes — et cette problématique ne se limite pas aux blocs opératoires. Salles de réanimation, unités de soins intensifs, laboratoires d'analyses, cabinets dentaires, centres de soins infirmiers — chaque espace médical a ses propres exigences de traitement de l'air. Les établissements de santé doivent mettre en œuvre un programme global de contrôle de la qualité de l'air pour réduire au maximum le risque de contamination nosocomiale — et protéger autant les patients que le personnel médical. Clean Air maîtrise ces enjeux depuis plus de vingt ans."
      />
      <SectorSolutions title="Solutions par espace" items={solutions} />
      <SectorApproach title="Approche technique" steps={approach} />
      <SectorReferences items={references} />
      <SectorCTA
        title="Votre établissement mérite une qualité d'air irréprochable."
        body="Que ce soit pour un nouveau projet, une mise aux normes ou un contrat de maintenance — Clean Air vous accompagne avec l'expertise et les partenaires qu'exige le secteur de la santé."
      />
    </main>
    <Footer />
  </>
);

export default SectorSante;
