export type SeoPage = {
  path: string;
  title: string;
  description: string;
  label: string;
  keywords: string[];
  serviceName?: string;
  serviceType?: string;
  image?: string;
  noindex?: boolean;
};

export const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ||
  "https://cleanair.com.tn";

export const SITE_NAME = "Clean Air Technology";
export const DEFAULT_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/54f4492f-f135-4eff-aa58-033be706bc72/id-preview-7ec776fe--2e8889fe-6dfb-4515-a1b6-e5ec508816cc.lovable.app-1774809193504.png";

export const seoPages: SeoPage[] = [
  {
    path: "/",
    label: "Accueil",
    title: "Clean Air Technology | Traitement de l'air et climatisation en Tunisie",
    description:
      "Clean Air Technology accompagne les projets critiques de traitement de l'air, filtration, climatisation de précision et maintenance en Tunisie depuis 2003.",
    keywords: [
      "traitement de l'air Tunisie",
      "climatisation Tunisie",
      "filtration air",
      "climatisation de precision",
    ],
  },
  {
    path: "/traitement-de-lair",
    label: "Traitement de l'air",
    title: "Traitement de l'air professionnel en Tunisie | Clean Air",
    description:
      "Solutions de traitement de l'air pour santé, data centers, industrie, tertiaire et collectivités : filtration, ventilation, diffusion et contrôle de l'humidité.",
    keywords: ["traitement air professionnel", "centrale traitement air", "filtration HEPA", "qualite air interieur"],
    serviceName: "Traitement de l'air professionnel",
    serviceType: "Air handling and filtration services",
  },
  {
    path: "/traitement-de-lair/sante",
    label: "Santé",
    title: "Traitement de l'air pour établissements de santé | Clean Air",
    description:
      "Traitement de l'air pour blocs opératoires, réanimation, laboratoires et cliniques : filtration, conformité et maîtrise du risque aéroporté.",
    keywords: ["traitement air hopital", "bloc operatoire filtration", "air medical Tunisie", "salles propres sante"],
    serviceName: "Traitement de l'air pour la santé",
    serviceType: "Healthcare air treatment",
  },
  {
    path: "/traitement-de-lair/data-centers-telecom",
    label: "Data Centers & Telecom",
    title: "Climatisation de précision Data Centers et Telecom | Clean Air",
    description:
      "Solutions Vertiv pour data centers, salles serveurs et sites telecom : climatisation de précision, gestion thermique et continuité d'alimentation.",
    keywords: ["climatisation data center", "climatisation de precision", "salle serveur Tunisie", "Vertiv Tunisie"],
    serviceName: "Climatisation de précision pour data centers",
    serviceType: "Precision cooling",
  },
  {
    path: "/traitement-de-lair/industrie",
    label: "Industrie",
    title: "Traitement de l'air industriel en Tunisie | Clean Air",
    description:
      "Solutions de traitement de l'air pour pharmaceutique, agroalimentaire, automobile et micro-électronique : qualité process et conformité.",
    keywords: ["traitement air industriel", "air pharmaceutique", "filtration industrie", "centrale traitement air industrie"],
    serviceName: "Traitement de l'air industriel",
    serviceType: "Industrial air treatment",
  },
  {
    path: "/traitement-de-lair/tertiaire",
    label: "Tertiaire & Collectivités",
    title: "Qualité de l'air pour bâtiments tertiaires | Clean Air",
    description:
      "Solutions de traitement d'air et climatisation pour bureaux, centres commerciaux, hôtels, collectivités et bâtiments publics.",
    keywords: ["qualite air interieur", "traitement air tertiaire", "climatisation bureaux", "CTA tertiaire"],
    serviceName: "Traitement de l'air tertiaire",
    serviceType: "Commercial building air treatment",
  },
  {
    path: "/climatisation",
    label: "Climatisation",
    title: "Climatisation haut de gamme en Tunisie | Clean Air",
    description:
      "Climatisation premium pour bureaux, hôtels, résidences, grands volumes et bâtiments critiques avec mise en service et SAV intégrés.",
    keywords: ["climatisation haut de gamme", "climatisation Tunisie", "DRV Mitsubishi", "maintenance climatisation"],
    serviceName: "Climatisation haut de gamme",
    serviceType: "HVAC installation and maintenance",
  },
  {
    path: "/climatisation/tertiaire-bureaux",
    label: "Tertiaire & Bureaux",
    title: "Climatisation tertiaire et bureaux | Clean Air Tunisie",
    description:
      "Systèmes DRV silencieux, précis et performants pour immeubles de bureaux, espaces tertiaires et zones de travail multi-usages.",
    keywords: ["climatisation bureaux", "DRV bureaux", "climatisation tertiaire", "confort thermique bureaux"],
    serviceName: "Climatisation tertiaire et bureaux",
    serviceType: "Commercial HVAC",
  },
  {
    path: "/climatisation/gros-volumes",
    label: "Gros volumes",
    title: "Climatisation gros volumes et centres commerciaux | Clean Air",
    description:
      "Solutions roof top compactes pour centres commerciaux, grandes surfaces et espaces d'exposition : puissance, air neuf et efficacité énergétique.",
    keywords: ["climatisation gros volumes", "roof top Tunisie", "climatisation centre commercial", "ventilation air neuf"],
    serviceName: "Climatisation gros volumes",
    serviceType: "Large volume HVAC",
  },
  {
    path: "/climatisation/hotellerie-residentiel",
    label: "Hôtellerie & Résidentiel",
    title: "Climatisation hôtellerie et résidentiel premium | Clean Air",
    description:
      "Solutions DRV, diffusion et déshumidification pour hôtels, résidences premium et piscines couvertes avec confort acoustique maîtrisé.",
    keywords: ["climatisation hotel", "climatisation residentiel premium", "dehumidification piscine", "DRV Mitsubishi hotel"],
    serviceName: "Climatisation hôtellerie et résidentiel premium",
    serviceType: "Hospitality HVAC",
  },
  {
    path: "/sav-maintenance",
    label: "SAV & Maintenance",
    title: "SAV et maintenance traitement d'air et climatisation | Clean Air",
    description:
      "Maintenance préventive et curative, mise en service, supervision GMAO et interventions SAV par une équipe interne spécialisée.",
    keywords: ["maintenance climatisation Tunisie", "SAV traitement air", "maintenance CTA", "GMAO climatisation"],
    serviceName: "SAV et maintenance HVAC",
    serviceType: "HVAC maintenance",
  },
  {
    path: "/references",
    label: "Références",
    title: "Références traitement d'air et climatisation | Clean Air",
    description:
      "Découvrez les références Clean Air en santé, data centers, telecom, industrie, tertiaire, hôtellerie et grandes surfaces en Tunisie.",
    keywords: ["references climatisation Tunisie", "references traitement air", "Clean Air clients", "projets HVAC Tunisie"],
  },
  {
    path: "/partenaires",
    label: "Partenaires",
    title: "Partenaires HVAC premium | Clean Air Technology",
    description:
      "Clean Air travaille avec des leaders mondiaux comme Vertiv, Mitsubishi, Camfil, Wolf, TROX, Dantherm, Tecnair LV, Lennox et Munters.",
    keywords: ["Vertiv Tunisie", "Mitsubishi climatisation Tunisie", "Camfil Tunisie", "partenaires HVAC"],
  },
  {
    path: "/a-propos",
    label: "À propos",
    title: "À propos de Clean Air Technology | Expert de l'air depuis 2003",
    description:
      "Fondée en 2003 à Tunis, Clean Air Technology réunit ingénieurs, chargés d'affaires et techniciens spécialisés dans l'air professionnel.",
    keywords: ["Clean Air Technology", "traitement air Tunisie depuis 2003", "HVAC Tunis", "entreprise climatisation Tunisie"],
  },
  {
    path: "/contact",
    label: "Contact",
    title: "Contacter Clean Air Technology à Tunis | Projet ou SAV",
    description:
      "Contactez Clean Air Technology aux Berges du Lac, Tunis, pour un projet de traitement d'air, climatisation haut de gamme ou demande SAV.",
    keywords: ["contact Clean Air Technology", "climatisation Tunis", "traitement air Tunis", "SAV climatisation Tunisie"],
  },
];

export const notFoundSeo: SeoPage = {
  path: "",
  label: "Page introuvable",
  title: "Page introuvable | Clean Air Technology",
  description: "Cette page n'existe pas ou a été déplacée.",
  keywords: [],
  noindex: true,
};

export const getSeoForPath = (pathname: string) =>
  seoPages.find((page) => page.path === pathname) || notFoundSeo;

export const absoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path === "/" ? "" : path}`;
};

export const buildBreadcrumb = (page: SeoPage) => {
  if (page.path === "/") return [];

  const crumbs = [{ name: "Accueil", item: absoluteUrl("/") }];
  const segments = page.path.split("/").filter(Boolean);
  let currentPath = "";

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const matchingPage = seoPages.find((candidate) => candidate.path === currentPath);
    crumbs.push({
      name: index === segments.length - 1 ? page.label : matchingPage?.label || segment,
      item: absoluteUrl(currentPath),
    });
  });

  return crumbs;
};
