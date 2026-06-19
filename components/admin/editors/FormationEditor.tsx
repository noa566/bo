"use client";

import type { FormationContent } from "@/lib/content";
import {
  ArrayField,
  Field,
  HeaderFields,
  Input,
  Section,
  Textarea,
} from "@/components/admin/ui";

export default function FormationEditor({
  value,
  onChange,
}: {
  value: FormationContent;
  onChange: (next: FormationContent) => void;
}) {
  return (
    <div className="space-y-8 pb-8">
      <Section title="En-tête de la page">
        <HeaderFields
          value={value.header}
          onChange={(header) => onChange({ ...value, header })}
        />
      </Section>

      <Section title="Introduction">
        <Field label="Pré-titre">
          <Input
            value={value.whatIs.eyebrow}
            onChange={(v) =>
              onChange({ ...value, whatIs: { ...value.whatIs, eyebrow: v } })
            }
          />
        </Field>
        <Field label="Texte">
          <Textarea
            rows={4}
            value={value.whatIs.text}
            onChange={(v) =>
              onChange({ ...value, whatIs: { ...value.whatIs, text: v } })
            }
          />
        </Field>
      </Section>

      <Section title="Domaines d'expertise (3 cartes)">
        <Field label="Pré-titre">
          <Input
            value={value.expertises.eyebrow}
            onChange={(v) =>
              onChange({
                ...value,
                expertises: { ...value.expertises, eyebrow: v },
              })
            }
          />
        </Field>
        <Field label="Titre">
          <Input
            value={value.expertises.title}
            onChange={(v) =>
              onChange({
                ...value,
                expertises: { ...value.expertises, title: v },
              })
            }
          />
        </Field>
        <Field label="Cartes">
          <ArrayField
            items={value.expertises.items}
            onChange={(items) =>
              onChange({
                ...value,
                expertises: { ...value.expertises, items },
              })
            }
            newItem={() => ({ title: "", text: "" })}
            itemLabel="Domaine"
            renderItem={(item, update) => (
              <>
                <Field label="Titre">
                  <Input
                    value={item.title}
                    onChange={(v) => update({ title: v })}
                  />
                </Field>
                <Field label="Description">
                  <Textarea
                    value={item.text}
                    onChange={(v) => update({ text: v })}
                  />
                </Field>
              </>
            )}
          />
        </Field>
      </Section>

      <Section title="Applications possibles">
        <Field label="Pré-titre">
          <Input
            value={value.applications.eyebrow}
            onChange={(v) =>
              onChange({
                ...value,
                applications: { ...value.applications, eyebrow: v },
              })
            }
          />
        </Field>
        <Field label="Titre">
          <Input
            value={value.applications.title}
            onChange={(v) =>
              onChange({
                ...value,
                applications: { ...value.applications, title: v },
              })
            }
          />
        </Field>
        <Field label="Introduction">
          <Textarea
            value={value.applications.intro}
            onChange={(v) =>
              onChange({
                ...value,
                applications: { ...value.applications, intro: v },
              })
            }
          />
        </Field>
        <Field label="Items">
          <ArrayField
            items={value.applications.items}
            onChange={(items) =>
              onChange({
                ...value,
                applications: { ...value.applications, items },
              })
            }
            newItem={() => ({ title: "", text: "" })}
            itemLabel="Application"
            renderItem={(item, update) => (
              <>
                <Field label="Titre">
                  <Input
                    value={item.title}
                    onChange={(v) => update({ title: v })}
                  />
                </Field>
                <Field label="Description">
                  <Textarea
                    value={item.text}
                    onChange={(v) => update({ text: v })}
                  />
                </Field>
              </>
            )}
          />
        </Field>
      </Section>

      <Section title="Citation">
        <Field label="Texte">
          <Textarea
            value={value.quote.text}
            onChange={(v) =>
              onChange({ ...value, quote: { ...value.quote, text: v } })
            }
          />
        </Field>
        <Field label="Auteur">
          <Input
            value={value.quote.author}
            onChange={(v) =>
              onChange({ ...value, quote: { ...value.quote, author: v } })
            }
          />
        </Field>
      </Section>

      <Section title="Bloc CTA (bas de page)">
        <Field label="Titre">
          <Input
            value={value.cta.title}
            onChange={(v) =>
              onChange({ ...value, cta: { ...value.cta, title: v } })
            }
          />
        </Field>
        <Field label="Description">
          <Textarea
            value={value.cta.lead}
            onChange={(v) =>
              onChange({ ...value, cta: { ...value.cta, lead: v } })
            }
          />
        </Field>
        <Field label="Bouton principal">
          <Input
            value={value.cta.primaryButton}
            onChange={(v) =>
              onChange({
                ...value,
                cta: { ...value.cta, primaryButton: v },
              })
            }
          />
        </Field>
        <Field label="Bouton secondaire">
          <Input
            value={value.cta.secondaryButton}
            onChange={(v) =>
              onChange({
                ...value,
                cta: { ...value.cta, secondaryButton: v },
              })
            }
          />
        </Field>
      </Section>
    </div>
  );
}
