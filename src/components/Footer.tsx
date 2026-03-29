import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Column 1 */}
        <div>
          <img src={logo} alt="Clean Air Technology" className="h-12 w-auto brightness-0 invert mb-6" />
          <div className="space-y-2 text-sm opacity-80">
            <p>Zone Industrielle, Tunisie</p>
            <p>+216 XX XXX XXX</p>
            <p>contact@cleanair-technology.com</p>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-bold text-lg mb-4">Nos solutions</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/traitement-de-lair" className="hover:text-brand-light transition-colors">Traitement de l'air</Link></li>
            <li><Link to="/climatisation" className="hover:text-brand-light transition-colors">Climatisation</Link></li>
            <li><Link to="/sav-maintenance" className="hover:text-brand-light transition-colors">SAV & Maintenance</Link></li>
            <li><Link to="/partenaires" className="hover:text-brand-light transition-colors">Nos Partenaires</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-bold text-lg mb-4">Nos secteurs</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/traitement-de-lair/sante" className="hover:text-brand-light transition-colors">Santé</Link></li>
            <li><Link to="/traitement-de-lair/data-centers-telecom" className="hover:text-brand-light transition-colors">Data Centers & Telecom</Link></li>
            <li><Link to="/traitement-de-lair/industrie" className="hover:text-brand-light transition-colors">Industrie</Link></li>
            <li><Link to="/traitement-de-lair/tertiaire" className="hover:text-brand-light transition-colors">Tertiaire & Collectivités</Link></li>
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
