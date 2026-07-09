"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Erreur lors de l'envoi");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Erreur inconnue");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl bg-accent-100 border border-accent-200 p-10 text-center">
        <div className="mx-auto w-14 h-14 rounded-full bg-accent-500 flex items-center justify-center mb-5">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-sans text-xl md:text-2xl font-semibold tracking-tight mb-3">
          Merci pour votre message !
        </h3>
        <p className="body-text max-w-md mx-auto">
          Je vous réponds dans les plus brefs délais. À très vite !
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="btn-ghost mt-6"
        >
          Envoyer un nouveau message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstname" className="block text-sm font-medium mb-2">
            Prénom <span className="text-accent-500">*</span>
          </label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            required
            className="w-full rounded-xl border border-sand-300 bg-white px-4 py-3 text-base focus:border-bo focus:outline-none focus:ring-2 focus:ring-bo/20 transition-all"
            placeholder="Votre prénom"
          />
        </div>
        <div>
          <label htmlFor="lastname" className="block text-sm font-medium mb-2">
            Nom <span className="text-accent-500">*</span>
          </label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            required
            className="w-full rounded-xl border border-sand-300 bg-white px-4 py-3 text-base focus:border-bo focus:outline-none focus:ring-2 focus:ring-bo/20 transition-all"
            placeholder="Votre nom"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email <span className="text-accent-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-sand-300 bg-white px-4 py-3 text-base focus:border-bo focus:outline-none focus:ring-2 focus:ring-bo/20 transition-all"
            placeholder="vous@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-xl border border-sand-300 bg-white px-4 py-3 text-base focus:border-bo focus:outline-none focus:ring-2 focus:ring-bo/20 transition-all"
            placeholder="+ ...."
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Sujet
        </label>
        <select
          id="subject"
          name="subject"
          defaultValue="coaching-personnel"
          className="w-full rounded-xl border border-sand-300 bg-white px-4 py-3 text-base focus:border-bo focus:outline-none focus:ring-2 focus:ring-bo/20 transition-all"
        >
          <option value="coaching-personnel">Coaching personnel</option>
          <option value="coaching-equipe">Coaching d'équipe</option>
          <option value="formation">Formation</option>
          <option value="autre">Autre demande</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Votre message <span className="text-accent-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full rounded-xl border border-sand-300 bg-white px-4 py-3 text-base focus:border-bo focus:outline-none focus:ring-2 focus:ring-bo/20 transition-all resize-y"
          placeholder="Présentez brièvement votre situation, vos attentes ou vos questions…"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-soft cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 w-4 h-4 rounded border-sand-300 text-bo focus:ring-bo/30"
        />
        <span>
          J'accepte que mes données soient utilisées uniquement pour répondre à
          ma demande. <span className="text-accent-500">*</span>
        </span>
      </label>

      {state === "error" && (
        <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">
          {errorMsg ||
            "Une erreur est survenue. Merci de réessayer ou de me contacter directement par email."}
        </div>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="btn-primary w-full md:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "submitting" ? (
          <>
            <svg
              className="animate-spin"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                opacity="0.25"
              />
              <path
                d="M22 12a10 10 0 0 1-10 10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            Envoi en cours…
          </>
        ) : (
          <>
            Envoyer mon message
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10m-4-4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
