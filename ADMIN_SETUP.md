# Panneau d'administration — Setup

Ce document explique comment activer le panneau d'admin Firebase pour ce site,
en partant de zéro. À faire UNE seule fois.

---

## 1. Firebase Console — Activer Authentication

1. Va sur [console.firebase.google.com](https://console.firebase.google.com) → projet `bothecoach`.
2. Menu de gauche → **Build** → **Authentication**.
3. Onglet **Sign-in method** → active **Email/Password** → **Save**.

## 2. Créer le compte administrateur

1. Toujours dans **Authentication** → onglet **Users**.
2. Bouton **Add user**.
3. Renseigne :
   - **Email** : ton email admin (ex. `admin@bothecoach.ch`)
   - **Password** : un mot de passe fort, **min. 12 caractères**
4. **Add user**.

> ⚠️ C'est avec ces identifiants que tu te connecteras sur `/admin/login`.
> Garde-les en lieu sûr (gestionnaire de mots de passe).

## 3. Firebase Console — Activer Firestore

1. Menu de gauche → **Build** → **Firestore Database**.
2. **Create database** → région **eur3 (europe-west)** → mode **Production**.
3. Attends la création (~30 sec).

## 4. Appliquer les règles de sécurité

1. Dans **Firestore Database** → onglet **Rules**.
2. **Remplace tout** le contenu par celui du fichier [`firestore.rules`](./firestore.rules) à la racine du projet.
3. **Publish**.

Ces règles font deux choses :
- N'importe qui peut **lire** la collection `content` (le site public en a besoin pour afficher les textes).
- Seuls les utilisateurs **connectés** (toi via `/admin`) peuvent **écrire**.

## 5. Variables d'environnement

### En local

Le fichier `.env.local` à la racine contient déjà tes clés Firebase. Il est
git-ignoré donc il ne sera pas poussé sur GitHub.

### Sur Vercel (pour la production)

1. Vercel Dashboard → ton projet → **Settings** → **Environment Variables**.
2. Ajoute **chacune** des variables présentes dans `.env.example` :
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASxE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
   - `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`
   - `REVALIDATE_SECRET` (mets une chaîne aléatoire longue)
3. Pour chaque var, coche les 3 environnements **Production**, **Preview**, **Development**.
4. **Save**.
5. Redéploie le projet (Deployments → ⋯ → Redeploy).

## 6. Autoriser ton domaine de prod dans Firebase Auth

1. Firebase Console → **Authentication** → onglet **Settings** → **Authorized domains**.
2. Vérifie que ton domaine Vercel est listé. Si tu utilises un domaine custom (ex. `bothecoach.ch`), ajoute-le ici aussi.

---

## Utilisation

### Te connecter

Va sur `https://<ton-domaine>/admin/login` → entre email + password → tu arrives sur le dashboard.

### Modifier le contenu

Sur `/admin` :
1. Modifie les champs souhaités.
2. Clique **Enregistrer** en bas de page.
3. Le site public est mis à jour immédiatement (la homepage est en mode `dynamic`, donc chaque visite refait un fetch Firestore).

### Restaurer les défauts

Bouton **Restaurer les valeurs par défaut** en haut → remplit les champs avec
le contenu d'origine du code. **N'enregistre pas tant que tu n'as pas cliqué
"Enregistrer"** — tu peux revenir en arrière en rafraîchissant la page.

---

## Formulaire de contact (Resend)

Quand un visiteur envoie le formulaire sur `/contact`, un email est envoyé à Boris via [Resend](https://resend.com).

### Variables d'environnement

Ajoute ces variables dans **`.env.local`** (local) et dans **Vercel → Settings → Environment Variables** (production) :

| Variable | Exemple | Description |
|---|---|---|
| `RESEND_API_KEY` | `re_...` | Clé API depuis [resend.com/api-keys](https://resend.com/api-keys) |
| `CONTACT_TO_EMAIL` | `lazzarotto.coaching@gmail.com` | Email qui reçoit les demandes |
| `RESEND_FROM_EMAIL` | `Bo Coaching <onboarding@resend.dev>` | Expéditeur (voir ci-dessous) |

### Mode test vs production

- **Sans domaine vérifié** : utilise `Bo Coaching <onboarding@resend.dev>` comme expéditeur. Resend n'autorise alors l'envoi **que vers l'email du compte Resend** (pour les tests).
- **En production** : vérifie ton domaine dans Resend (ex. `bothecoach.ch`), puis mets par exemple `Bo Coaching <contact@bothecoach.ch>` dans `RESEND_FROM_EMAIL`.

Le champ **Reply-To** est automatiquement l'email du client : Boris peut répondre directement depuis sa boîte mail.

### Test rapide

1. Redémarre le serveur local après avoir ajouté les variables (`npm run dev`).
2. Va sur `/contact`, remplis le formulaire et envoie.
3. Vérifie la boîte `CONTACT_TO_EMAIL` (et les spams).

---

## Sécurité — points importants

- ✅ Les clés Firebase web (`NEXT_PUBLIC_*`) sont **publiques par design** — c'est OK qu'elles soient visibles dans le bundle client. La sécurité repose sur :
  - Les **Firestore Rules** (étape 4) qui limitent les écritures aux users authentifiés.
  - Les **Authorized domains** dans Firebase Auth (étape 6).
- 🚫 **Ne crée jamais** un autre compte admin sans raison. Pour révoquer un accès : supprime le user dans Authentication → Users.
- 🔐 Active **2-factor authentication** sur ton compte Google (qui contrôle Firebase Console).

---

## Étendre aux autres pages

La Phase 1 ne couvre que la homepage. Pour rendre éditable une autre page
(`/coach`, `/coaching`, etc.) :

1. Dans `lib/content.ts`, ajoute un nouveau type (ex. `CoachContent`), des
   valeurs par défaut, et des fonctions `getCoachContent` / `saveCoachContent`.
2. Refactor la page concernée (ex. `app/(site)/coach/page.tsx`) pour appeler
   `getCoachContent()` et utiliser les valeurs comme dans `app/(site)/page.tsx`.
3. Dans `app/admin/page.tsx`, ajoute un nouvel onglet ou une nouvelle section
   pour éditer ce contenu.
