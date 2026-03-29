import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" width={1920} height={1080} />
      <div className="absolute inset-0 hero-pattern" />
    </div>

    <div className="container relative z-10 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <span className="inline-block px-4 py-1.5 bg-brand-light/15 text-brand-light text-sm font-medium rounded-full mb-6 border border-brand-light/25">
          Experts de l'air depuis plus de 20 ans
        </span>

        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.1] mb-4">
          Consider it <span className="text-brand-light">solved.</span>
        </h1>

        <p className="text-2xl md:text-3xl font-medium text-primary-foreground/90 mb-6">
          La maîtrise de l'air est notre métier.
        </p>

        <p className="text-lg text-primary-foreground/70 max-w-2xl mb-10 font-light leading-relaxed">
          Depuis plus de 20 ans, Clean Air accompagne les professionnels les plus exigeants dans leurs projets de traitement d'air et de climatisation haut de gamme. Confort, conformité, performance énergétique — nous vous accompagnons à chaque étape de votre projet.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-light text-primary font-bold rounded-[7px] hover:bg-brand-light/90 transition-colors text-base"
          >
            Parlons de votre projet
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/references"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-[7px] hover:border-primary-foreground/60 transition-colors text-base"
          >
            Nos références
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
