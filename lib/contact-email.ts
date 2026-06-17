const SUBJECT_LABELS: Record<string, string> = {
  "seance-fondation": "Séance fondation",
  "coaching-personnel": "Coaching personnel",
  "coaching-equipe": "Coaching d'équipe",
  formation: "Formation",
  autre: "Autre demande",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function getSubjectLabel(subject?: string): string {
  if (!subject) return "Non précisé";
  return SUBJECT_LABELS[subject] ?? subject;
}

export function buildContactEmailHtml(data: {
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}): string {
  const fullName = `${data.firstname} ${data.lastname}`.trim();
  const subjectLabel = getSubjectLabel(data.subject);
  const phone = data.phone?.trim() || "Non renseigné";
  const message = escapeHtml(data.message).replace(/\n/g, "<br />");

  return `
    <div style="font-family: Inter, Arial, sans-serif; color: #2C2C2C; line-height: 1.6; max-width: 640px;">
      <h2 style="margin: 0 0 16px; color: #B85220;">Nouvelle demande de contact</h2>
      <p style="margin: 0 0 24px;">Un visiteur vient d'envoyer le formulaire du site Bo Coaching.</p>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; font-weight: 600; width: 140px;">Nom</td>
          <td style="padding: 8px 0;">${escapeHtml(fullName)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 600;">Email</td>
          <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 600;">Téléphone</td>
          <td style="padding: 8px 0;">${escapeHtml(phone)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 600;">Sujet</td>
          <td style="padding: 8px 0;">${escapeHtml(subjectLabel)}</td>
        </tr>
      </table>
      <div style="margin-top: 24px; padding: 16px; background: #FBF7F1; border-radius: 12px;">
        <p style="margin: 0 0 8px; font-weight: 600;">Message</p>
        <p style="margin: 0;">${message}</p>
      </div>
    </div>
  `.trim();
}

export function buildContactEmailText(data: {
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}): string {
  const fullName = `${data.firstname} ${data.lastname}`.trim();
  const subjectLabel = getSubjectLabel(data.subject);
  const phone = data.phone?.trim() || "Non renseigné";

  return [
    "Nouvelle demande de contact — Bo Coaching",
    "",
    `Nom : ${fullName}`,
    `Email : ${data.email}`,
    `Téléphone : ${phone}`,
    `Sujet : ${subjectLabel}`,
    "",
    "Message :",
    data.message,
  ].join("\n");
}
