import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { nom, societe, fonction, email, telephone, sujet, message } = req.body;

  if (!nom || !societe || !email || !sujet || !message) {
    return res.status(400).json({ error: "Champs obligatoires manquants" });
  }

  const subjectLabels: Record<string, string> = {
    "traitement-air": "Traitement de l'air",
    climatisation: "Climatisation haut de gamme",
    sav: "SAV & Maintenance",
    autre: "Autre",
  };

  try {
    await resend.emails.send({
      from: "Formulaire Clean Air <onboarding@thehnh.tech>",
      to: ["commercial@cleanair.com.tn"],
      replyTo: email,
      subject: `[Contact] ${subjectLabels[sujet] ?? sujet} — ${nom}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <table cellpadding="6" style="font-family: sans-serif; font-size: 14px;">
          <tr><td><strong>Nom</strong></td><td>${nom}</td></tr>
          <tr><td><strong>Société</strong></td><td>${societe}</td></tr>
          ${fonction ? `<tr><td><strong>Fonction</strong></td><td>${fonction}</td></tr>` : ""}
          <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          ${telephone ? `<tr><td><strong>Téléphone</strong></td><td>${telephone}</td></tr>` : ""}
          <tr><td><strong>Sujet</strong></td><td>${subjectLabels[sujet] ?? sujet}</td></tr>
        </table>
        <h3>Message</h3>
        <p style="font-family: sans-serif; font-size: 14px; white-space: pre-wrap;">${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Erreur lors de l'envoi" });
  }
}
