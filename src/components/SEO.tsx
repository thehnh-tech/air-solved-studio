import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  DEFAULT_IMAGE,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  buildBreadcrumb,
  getSeoForPath,
} from "@/lib/seo";

const setMeta = (selector: string, attribute: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const setLink = (rel: string, href: string, hreflang?: string) => {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    if (hreflang) element.setAttribute("hreflang", hreflang);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "HVACBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "Clean Air Technology",
  alternateName: "Clean Air",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  slogan: "Consider it solved.",
  foundingDate: "2003",
  description:
    "Clean Air Technology est spécialisée dans le traitement de l'air, la climatisation de précision, la climatisation haut de gamme et la maintenance d'installations critiques en Tunisie.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Immeuble Le Boulevard, Les Berges du Lac",
    addressLocality: "Tunis",
    postalCode: "1053",
    addressCountry: "TN",
  },
  areaServed: {
    "@type": "Country",
    name: "Tunisie",
  },
  email: "commercial@cleanair.com.tn",
  telephone: "+21629472875",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "commercial",
      email: "commercial@cleanair.com.tn",
      telephone: "+21629472875",
      areaServed: "TN",
      availableLanguage: ["fr", "ar", "en"],
    },
    {
      "@type": "ContactPoint",
      contactType: "service client",
      email: "sav@cleanair.com.tn",
      telephone: "+21627426700",
      areaServed: "TN",
      availableLanguage: ["fr", "ar", "en"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/cleanairtechnology",
    "https://www.tunisiahealthalliance.com/pf/clean-air-2/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "fr-TN",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
};

const SEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeoForPath(pathname);
    const canonicalUrl = absoluteUrl(seo.path || pathname);
    const imageUrl = seo.image || DEFAULT_IMAGE;
    const robots = seo.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large";

    document.documentElement.lang = "fr-TN";
    document.title = seo.title;

    setMeta('meta[name="description"]', "name", "description", seo.description);
    setMeta('meta[name="robots"]', "name", "robots", robots);
    setMeta('meta[name="theme-color"]', "name", "theme-color", "#0B3558");
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[property="og:locale"]', "property", "og:locale", "fr_TN");
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", SITE_NAME);
    setMeta('meta[property="og:title"]', "property", "og:title", seo.title);
    setMeta('meta[property="og:description"]', "property", "og:description", seo.description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[property="og:image"]', "property", "og:image", imageUrl);
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", seo.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", seo.description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", imageUrl);

    setLink("canonical", canonicalUrl);
    setLink("alternate", canonicalUrl, "fr-TN");
    setLink("alternate", canonicalUrl, "x-default");

    const breadcrumbs = buildBreadcrumb(seo);
    const breadcrumbSchema =
      breadcrumbs.length > 0
        ? {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbs.map((crumb, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: crumb.name,
              item: crumb.item,
            })),
          }
        : null;

    const serviceSchema = seo.serviceName
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: seo.serviceName,
          serviceType: seo.serviceType || seo.serviceName,
          description: seo.description,
          url: canonicalUrl,
          provider: {
            "@id": `${SITE_URL}/#organization`,
          },
          areaServed: {
            "@type": "Country",
            name: "Tunisie",
          },
        }
      : null;

    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": seo.path === "/contact" ? "ContactPage" : "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: seo.title,
      description: seo.description,
      inLanguage: "fr-TN",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}/#organization`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: imageUrl,
      },
    };

    const jsonLd = [organizationSchema, websiteSchema, webPageSchema, breadcrumbSchema, serviceSchema].filter(Boolean);
    let script = document.head.querySelector<HTMLScriptElement>('script[data-seo-jsonld="true"]');

    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-jsonld", "true");
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(jsonLd);
  }, [pathname]);

  return null;
};

export default SEO;
