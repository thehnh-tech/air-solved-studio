import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactSchema = z.object({
  nom: z.string().trim().min(1, "Le nom est obligatoire").max(100),
  societe: z.string().trim().min(1, "La société est obligatoire").max(100),
  fonction: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Adresse email invalide").max(255),
  telephone: z.string().trim().max(20).optional(),
  sujet: z.string().min(1, "Veuillez sélectionner un sujet"),
  message: z.string().trim().min(1, "Veuillez décrire votre projet").max(2000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactFormSection = () => {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nom: "",
      societe: "",
      fonction: "",
      email: "",
      telephone: "",
      sujet: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      toast({
        title: "Demande envoyée",
        description: "Nous reviendrons vers vous dans les plus brefs délais.",
      });
      form.reset();
    } catch {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer ou nous contacter par email.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-2 font-heading">
              Décrivez-nous votre projet.
            </h2>
            <p className="text-muted-foreground mb-8">
              Que ce soit pour un premier échange, une demande de devis, ou une
              question technique — nous vous répondons avec précision.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="nom"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom et prénom *</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre nom complet" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="societe"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Société *</FormLabel>
                        <FormControl>
                          <Input placeholder="Nom de votre société" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="fonction"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fonction</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre poste" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="votre@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="telephone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Téléphone</FormLabel>
                        <FormControl>
                          <Input placeholder="+216 XX XXX XXX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="sujet"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Votre demande concerne *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="traitement-air">Traitement de l'air</SelectItem>
                            <SelectItem value="climatisation">Climatisation haut de gamme</SelectItem>
                            <SelectItem value="sav">SAV & Maintenance</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Décrivez votre projet *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Décrivez votre besoin, votre contexte, vos contraintes..."
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Envoyer ma demande →
                </Button>

                <p className="text-xs text-muted-foreground">
                  Vos données sont utilisées uniquement dans le cadre du traitement
                  de votre demande et ne sont pas transmises à des tiers.
                </p>
              </form>
            </Form>
          </motion.div>

          {/* Coordinates */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6 font-heading">
                Coordonnées
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-secondary mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Clean Air Technology</p>
                    <p className="text-muted-foreground">
                      Immeuble Le Boulevard, Le boulevard principal
                      <br />
                      Les Berges du Lac, 1053, Tunis — Tunisie
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm mb-2">Commercial</p>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-secondary shrink-0" />
                    <a href="mailto:commercial@cleanair.com.tn" className="text-foreground hover:text-primary transition-colors">
                      commercial@cleanair.com.tn
                    </a>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <Phone className="w-5 h-5 text-secondary shrink-0" />
                    <a href="tel:+21629472875" className="text-foreground hover:text-primary transition-colors">
                      (+216) 29 472 875
                    </a>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm mb-2">Service Après Vente</p>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-secondary shrink-0" />
                    <a href="mailto:sav@cleanair.com.tn" className="text-foreground hover:text-primary transition-colors">
                      sav@cleanair.com.tn
                    </a>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <Phone className="w-5 h-5 text-secondary shrink-0" />
                    <a href="tel:+21627426700" className="text-foreground hover:text-primary transition-colors">
                      (+216) 27 426 700
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-lg overflow-hidden border border-border h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.5!2d10.1833!3d36.8333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUwJzAwLjAiTiAxMMKwMTEnMDAuMCJF!5e0!3m2!1sfr!2stn!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clean Air Technology - Les Berges du Lac, Tunis"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
