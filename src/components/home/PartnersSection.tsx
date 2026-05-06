import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import camfilLogo from "@/assets/partners/camfil.png";
import vertivLogo from "@/assets/partners/vertiv.png";
import troxLogo from "@/assets/partners/trox.png";
import wolfLogo from "@/assets/partners/wolf.png";
import muntersLogo from "@/assets/partners/munters.png";
import mitsubishiLogo from "@/assets/partners/mitsubishi.png";
import tecnairLogo from "@/assets/partners/tecnair.png";
import danthermLogo from "@/assets/partners/dantherm.png";
import lennoxLogo from "@/assets/partners/lennox.png";

const partners = [
  { name: "Camfil", logo: camfilLogo },
  { name: "Vertiv", logo: vertivLogo },
  { name: "TROX", logo: troxLogo },
  { name: "Wolf", logo: wolfLogo },
  { name: "Munters", logo: muntersLogo },
  { name: "Mitsubishi Electric", logo: mitsubishiLogo },
  { name: "Tecnair LV", logo: tecnairLogo },
  { name: "Dantherm", logo: danthermLogo },
  { name: "Lennox", logo: lennoxLogo },
];

const PartnersSection = () => (
  <section className="py-24 bg-brand-alt-bg">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
          Les leaders mondiaux. Pour vous.
        </h2>
        <p className="text-brand-light text-lg font-medium mb-4">
          Notre sélection n'est pas commerciale. Elle est technique.
        </p>
        <p className="text-foreground/70">
          Clean Air ne référence pas de gammes. Clean Air sélectionne des leaders. Dans chaque domaine, nous avons choisi le partenaire qui détient la maîtrise technique la plus aboutie.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {partners.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            style={{ width: 180, height: 90, padding: 15, backgroundColor: "#FFFFFF" }}
            className="rounded-xl flex items-center justify-center shadow-sm border border-border hover:shadow-md hover:border-brand-light/30 transition-all"
          >
            <img src={p.logo} alt={`${p.name} logo`} className="max-w-full max-h-full object-contain" />
          </motion.div>
        ))}
      </div>

      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center italic text-foreground/60 max-w-2xl mx-auto mb-8 text-lg"
      >
        « Nous sélectionnons uniquement les leaders — parce que la qualité que nous promettons commence par les équipements que nous choisissons. »
      </motion.blockquote>

      <div className="text-center">
        <Link
          to="/partenaires"
          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
        >
          Découvrir tous nos partenaires <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default PartnersSection;
