import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="px-6 py-10 md:px-20 md:py-[60px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start gap-8 md:gap-10">
        {/* Coordonnées */}
        <div className="flex flex-col justify-start" style={{ paddingTop: 0, marginTop: 0 }}>
          <img src={logo} alt="Clean Air Technology" style={{ filter: "brightness(0) invert(1)", width: "120px", height: "auto", marginBottom: "0px", display: "block" }} />
          <div className="space-y-3 text-sm opacity-80" style={{ marginTop: 0, paddingTop: 0 }}>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              Immeuble Le Boulevard, Le boulevard principal, Les Berges du Lac, 2070 Tunis — Tunisie
            </p>
            <div>
              <p className="font-semibold text-xs uppercase tracking-wide mb-1">Commercial</p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                commercial@cleanair.com.tn
              </p>
              <p className="flex items-center gap-2 mt-1">
                <Phone className="w-4 h-4 flex-shrink-0" />
                (+216) 29 472 875
              </p>
            </div>
            <div>
              <p className="font-semibold text-xs uppercase tracking-wide mb-1">Service Après Vente</p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                sav@cleanair.com.tn
              </p>
              <p className="flex items-center gap-2 mt-1">
                <Phone className="w-4 h-4 flex-shrink-0" />
                (+216) 27 426 700
              </p>
            </div>
          </div>
        </div>

        {/* Nos solutions */}
        <div>
          <h4 className="font-bold text-lg mb-4">Nos solutions</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/traitement-de-lair" className="hover:text-secondary transition-colors">Traitement de l'air</Link></li>
            <li><Link to="/climatisation" className="hover:text-secondary transition-colors">Climatisation haut de gamme</Link></li>
            <li><Link to="/sav-maintenance" className="hover:text-secondary transition-colors">SAV & Maintenance</Link></li>
            <li><Link to="/references" className="hover:text-secondary transition-colors">Références & Réalisations</Link></li>
            <li><Link to="/partenaires" className="hover:text-secondary transition-colors">Nos Partenaires</Link></li>
          </ul>
        </div>

        {/* Secteurs */}
        <div>
          <h4 className="font-bold text-lg mb-4">Nos secteurs</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/traitement-de-lair/sante" className="hover:text-secondary transition-colors">Santé</Link></li>
            <li><Link to="/traitement-de-lair/data-centers-telecom" className="hover:text-secondary transition-colors">Data Centers & Telecom</Link></li>
            <li><Link to="/traitement-de-lair/industrie" className="hover:text-secondary transition-colors">Industrie</Link></li>
            <li><Link to="/traitement-de-lair/tertiaire" className="hover:text-secondary transition-colors">Tertiaire & Collectivités</Link></li>
          </ul>
        </div>

        {/* Climatisation + liens */}
        <div>
          <h4 className="font-bold text-lg mb-4">Climatisation</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/climatisation/tertiaire-bureaux" className="hover:text-secondary transition-colors">Tertiaire & Bureaux</Link></li>
            <li><Link to="/climatisation/gros-volumes" className="hover:text-secondary transition-colors">Gros volumes</Link></li>
            <li><Link to="/climatisation/hotellerie-residentiel" className="hover:text-secondary transition-colors">Hôtellerie & Résidentiel</Link></li>
          </ul>
          <h4 className="font-bold text-lg mt-8 mb-4">L'entreprise</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/a-propos" className="hover:text-secondary transition-colors">À Propos</Link></li>
            <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/20">
      <div className="container py-4 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
        <p>© 2026 Clean Air Technology — Tous droits réservés</p>
        <p className="italic">Consider it solved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
