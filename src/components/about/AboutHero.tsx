import { motion } from "framer-motion";
import aboutHero from "@/assets/about-hero.jpg";

const AboutHero = () => (
  <section className="relative min-h-[70vh] flex items-center bg-primary overflow-hidden">
    <div className="absolute inset-0">
      <img src={aboutHero} alt="" className="w-full h-full object-cover opacity-20" width={1920} height={1080} />
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
          Qui nous sommes
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-[1.1] mb-6">
          Vingt ans de maîtrise.<br />
          <span className="text-brand-light">Une seule passion : l'air.</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/80 font-light leading-relaxed">
          Qui nous sommes, ce que nous construisons, et pourquoi ça dure.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutHero;
