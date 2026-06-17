import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildContactEmailHtml,
  buildContactEmailText,
  getSubjectLabel,
} from "@/lib/contact-email";

type ContactPayload = {
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  consent?: string | boolean;
};

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

export async function POST(req: Request) {
  let data: ContactPayload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Format JSON invalide." },
      { status: 400 },
    );
  }

  const firstname = data.firstname?.trim();
  const lastname = data.lastname?.trim();
  const email = data.email?.trim();
  const message = data.message?.trim();
  const phone = data.phone?.trim();
  const subject = data.subject?.trim();
  const consent = data.consent;

  if (!firstname || !lastname || !email || !message) {
    return NextResponse.json(
      { error: "Tous les champs requis doivent être remplis." },
      { status: 400 },
    );
  }

  if (!consent) {
    return NextResponse.json(
      { error: "Le consentement est obligatoire." },
      { status: 400 },
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Adresse email invalide." },
      { status: 400 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "lazzarotto.coaching@gmail.com";
  const from =
    process.env.RESEND_FROM_EMAIL ?? "Bo Coaching <onboarding@resend.dev>";
  const subjectLabel = getSubjectLabel(subject);
  const fullName = `${firstname} ${lastname}`;

  try {
    const resend = getResendClient();
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `[Bo Coaching] ${subjectLabel} — ${fullName}`,
      html: buildContactEmailHtml({
        firstname,
        lastname,
        email,
        phone,
        subject,
        message,
      }),
      text: buildContactEmailText({
        firstname,
        lastname,
        email,
        phone,
        subject,
        message,
      }),
    });

    if (error) {
      console.error("[CONTACT] Resend error:", error);
      return NextResponse.json(
        {
          error:
            "Impossible d'envoyer le message pour le moment. Merci de réessayer ou de nous contacter par email.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[CONTACT] Unexpected error:", err);
    return NextResponse.json(
      {
        error:
          "Impossible d'envoyer le message pour le moment. Merci de réessayer ou de nous contacter par email.",
      },
      { status: 500 },
    );
  }
}
