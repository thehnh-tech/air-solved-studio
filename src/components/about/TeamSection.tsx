import { motion } from "framer-motion";
import { Briefcase, Wrench, Quote } from "lucide-react";
import team20ans from "@/assets/team-20ans.jpg";

const testimonials = [
  {
    name: "Tarek Chaari",
    role: "Directeur Technique — 10+ ans",
    quote: "Je suis toujours face à de nouvelles problématiques à résoudre et de nouveaux défis à surmonter. C'est ce qui rend ce métier passionnant.",
  },
  {
    name: "Imen Boussoffara",
    role: "8 ans chez Clean Air",
    quote: "Un employé heureux fait un client heureux. Je suis heureuse chez Clean Air.",
  },
];

const TeamSection = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <p className="text-brand-light font-medium mb-2">Notre équipe</p>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
          Les personnes derrière les projets.
        </h2>
        <p className="text-foreground/70 leading-relaxed">
          Clean Air, c'est avant tout une équipe. Des ingénieurs, des commerciaux, des techniciens terrain — 
          réunis par la même exigence et le même rapport au travail bien fait. Unis par un objectif commun : 
          proposer les meilleures solutions tout en protégeant les personnes, les procédés et l'environnement.
        </p>
      </motion.div>

      {/* Departments */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-muted rounded-xl p-8"
        >
          <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
            <Briefcase className="w-6 h-6 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-bold text-primary mb-3">Service Commercial</h3>
          <p className="text-foreground/70 text-sm leading-relaxed">
            10 chargés d'affaires spécialisés. Pas des vendeurs — des conseillers techniques capables 
            d'analyser votre besoin et de dimensionner la solution adaptée.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-muted rounded-xl p-8"
        >
          <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
            <Wrench className="w-6 h-6 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-bold text-primary mb-3">Service Technique</h3>
          <p className="text-foreground/70 text-sm leading-relaxed">
            20 techniciens formés et certifiés. Mise en service, maintenance préventive et curative, 
            suivi GMAO. La même équipe avant, pendant et après votre projet.
          </p>
        </motion.div>
      </div>

      {/* Testimonials */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-primary rounded-xl p-8 relative"
          >
            <Quote className="w-8 h-8 text-brand-light/30 mb-4" />
            <p className="text-primary-foreground/90 italic leading-relaxed mb-6">
              « {t.quote} »
            </p>
            <div>
              <p className="font-bold text-primary-foreground">{t.name}</p>
              <p className="text-sm text-primary-foreground/60">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Team photo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-xl overflow-hidden shadow-xl"
      >
        <img
          src={team20ans}
          alt="L'équipe Clean Air Technology — 20 ans"
          className="w-full object-cover object-center"
          style={{ height: "340px" }}
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[hsl(207,100%,25%)] via-[hsl(207,100%,25%/0.8)] to-transparent px-8 py-6">
          <p className="text-white font-bold text-lg">L'équipe Clean Air Technology — 20 ans d'aventure commune.</p>
          <p className="text-[#5BC4F1] italic font-medium mt-1">Consider it solved.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default TeamSection;
