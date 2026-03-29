import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SectorHeroProps {
  image: string;
  title: string;
  subtitle: string;
  body: string;
  breadcrumb: BreadcrumbItem[];
}

const SectorHero = ({ image, title, subtitle, body, breadcrumb }: SectorHeroProps) => (
  <section className="relative min-h-[70vh] flex items-center pt-20">
    <div className="absolute inset-0">
      <img src={image} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/85" />
    </div>
    <div className="container relative z-10 py-20">
      {/* Breadcrumb */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-1.5 text-sm text-primary-foreground/60 mb-8"
      >
        {breadcrumb.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="w-3.5 h-3.5" />}
            {item.href ? (
              <Link to={item.href} className="hover:text-primary-foreground transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-primary-foreground/90">{item.label}</span>
            )}
          </span>
        ))}
      </motion.nav>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
          {title}
        </h1>
        <p className="text-secondary text-lg md:text-xl font-medium mb-6">{subtitle}</p>
        <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed max-w-2xl">
          {body}
        </p>
      </motion.div>
    </div>
  </section>
);

export default SectorHero;
