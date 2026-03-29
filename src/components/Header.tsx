import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Accueil", href: "/" },
  {
    label: "Traitement de l'air",
    href: "/traitement-de-lair",
    children: [
      { label: "Santé", href: "/traitement-de-lair/sante" },
      { label: "Data Centers & Telecom", href: "/traitement-de-lair/data-centers-telecom" },
      { label: "Industrie", href: "/traitement-de-lair/industrie" },
      { label: "Tertiaire & Collectivités", href: "/traitement-de-lair/tertiaire" },
    ],
  },
  {
    label: "Climatisation",
    href: "/climatisation",
    children: [
      { label: "Tertiaire & Bureaux", href: "/climatisation/tertiaire-bureaux" },
      { label: "Gros volumes", href: "/climatisation/gros-volumes" },
      { label: "Hôtellerie & Résidentiel", href: "/climatisation/hotellerie-residentiel" },
    ],
  },
  { label: "Références", href: "/references" },
  { label: "Nos Partenaires", href: "/partenaires" },
  { label: "SAV & Maintenance", href: "/sav-maintenance" },
  { label: "À Propos", href: "/a-propos" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (href: string, children?: { href: string }[]) => {
    if (href === "/") return pathname === "/";
    if (pathname === href) return true;
    if (children?.some((c) => pathname === c.href)) return true;
    return pathname.startsWith(href + "/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Clean Air Technology" className="h-14 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                to={item.href}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors",
                  isActive(item.href, item.children)
                    ? "text-secondary font-bold"
                    : "text-foreground hover:text-secondary"
                )}
              >
                {item.label}
                {item.children && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-background rounded-lg shadow-xl border border-border py-2 min-w-[220px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className={cn(
                          "block px-4 py-2.5 text-sm transition-colors",
                          pathname === child.href
                            ? "text-secondary font-bold bg-muted"
                            : "text-foreground hover:bg-muted hover:text-secondary"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="ml-4 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-bold rounded-[7px] hover:bg-primary/90 transition-colors"
          >
            Parlons de votre projet
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  className={cn(
                    "block px-3 py-2.5 text-sm font-medium",
                    isActive(item.href, item.children)
                      ? "text-secondary font-bold"
                      : "text-foreground hover:text-secondary"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.label}
                    to={child.href}
                    className={cn(
                      "block pl-8 py-2 text-sm",
                      pathname === child.href
                        ? "text-secondary font-bold"
                        : "text-muted-foreground hover:text-secondary"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              to="/contact"
              className="mt-3 mx-3 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-bold rounded-[7px] text-center"
              onClick={() => setMobileOpen(false)}
            >
              Parlons de votre projet
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
