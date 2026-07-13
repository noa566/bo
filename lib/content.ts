import { doc, getDoc, setDoc } from "firebase/firestore";
import { getDb, isFirebaseConfigured } from "./firebase";

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export type PageHeaderContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type CtaButton = {
  label: string;
  href?: string;
};

export type HomeContent = {
  hero: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    titleEnd: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  philosophy: { eyebrow: string; quote: string; author: string };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; description: string; cta: string }[];
  };
  approach: {
    eyebrow: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    cta: string;
  };
  citation: { quote: string; author: string };
  finalCta: { title: string; description: string; button: string };
};

export type CoachContent = {
  header: PageHeaderContent;
  intro: { paragraphs: string[] };
  conviction: { eyebrow: string; text: string };
  engagement: { eyebrow: string; text: string };
  inspiration: { eyebrow: string; quote: string; author: string };
  formations: { eyebrow: string; title: string; items: string[] };
  cta: { title: string; lead: string; button: string };
};

export type CoachingOrientation = {
  number: string;
  title: string;
  subtitle: string;
  quote: { text: string; author: string };
  items: { strong: string; text: string }[];
};

export type CoachingContent = {
  header: PageHeaderContent;
  intro: string;
  orientations: CoachingOrientation[];
  cta: {
    title: string;
    lead: string;
    primaryButton: string;
    secondaryButton: string;
  };
};

export type LeCoachingContent = {
  header: PageHeaderContent;
  whatIs: { eyebrow: string; text: string };
  domains: {
    eyebrow: string;
    title: string;
    items: { title: string; text: string }[];
  };
  deontology: { eyebrow: string; headline: string; paragraph: string };
  process: {
    eyebrow: string;
    title: string;
    steps: { title: string; text: string }[];
  };
  quote: { text: string; author: string };
  cta: {
    title: string;
    lead: string;
    primaryButton: string;
    secondaryButton: string;
  };
};

export type FormationContent = {
  header: PageHeaderContent;
  whatIs: { eyebrow: string; text: string };
  expertises: {
    eyebrow: string;
    title: string;
    items: { title: string; text: string }[];
  };
  applications: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; text: string }[];
  };
  quote: { text: string; author: string };
  cta: {
    title: string;
    lead: string;
    primaryButton: string;
    secondaryButton: string;
  };
};

export type TarifsPlan = {
  title: string;
  duration: string;
  highlight: boolean;
  highlightLabel: string;
  options: { label: string; price: string }[];
  cta: string;
};

export type TarifsContent = {
  header: PageHeaderContent;
  plans: TarifsPlan[];
  founding: { title: string; text: string };
};

export type Testimonial = {
  text: string;
  author: string;
  long: boolean;
};

export type TemoignagesContent = {
  header: PageHeaderContent;
  testimonials: Testimonial[];
  cta: { title: string; lead: string; button: string };
};

export type ContactContent = {
  header: PageHeaderContent;
  form: { eyebrow: string; title: string };
  details: {
    title: string;
    email: string;
    phone: string;
    phoneHref: string;
    locationTitle: string;
    locationDetail: string;
  };
  workInfo: { title: string; items: string[] };
};

// ─────────────────────────────────────────────────────────────────────────────
// Defaults (used as fallback when Firestore is empty or unreachable)
// ─────────────────────────────────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  hero: {
    eyebrow: "COachiNg et FORMATiON à Genève",
    titleStart: "Révéler votre",
    titleAccent: "potentiel",
    titleEnd: ", pas après pas.",
    lead: "Coaching personnel, coaching d'équipe et formation pour vous accompagner dans vos transitions, clarifier vos priorités et construire l'avenir qui vous ressemble.",
    ctaPrimary: "Séance découverte",
    ctaSecondary: "Découvrir le coaching",
    stats: [
      { value: "COACH", label: "certifié" },
      { value: "PRATICIEN", label: "PNL" },
      { value: "FORMATEUR", label: "FSEA" },
    ],
  },
  philosophy: {
    eyebrow: "Ma conviction",
    quote:
      "« Nous avons toutes et tous les capacités pour révéler notre potentiel, et vivre aligné avec nos aspirations profondes. »",
    author: "Boris Lazzarotto",
  },
  services: {
    eyebrow: "Mes accompagnements",
    title: "Trois espaces pour cheminer",
    intro:
      "Chaque proposition s'adapte à vos besoins, à votre rythme et à votre contexte.",
    items: [
      {
        title: "Coaching personnel",
        description:
          "Un espace pour clarifier vos priorités, vous (re)connecter à vos ressources et passer à l'action avec sérénité.",
        cta: "Explorer",
      },
      {
        title: "Coaching d'équipe",
        description:
          "Renforcer la dynamique collective, fluidifier la communication et accompagner les transitions de votre équipe.",
        cta: "Explorer",
      },
      {
        title: "Formation",
        description:
          "Des interventions sur mesure pour faire évoluer les pratiques, réaliser le potentiel et renforcer la dynamique.",
        cta: "Explorer",
      },
    ],
  },
  approach: {
    eyebrow: "Mon approche",
    title: "Un partenaire engagé à vos côtés",
    paragraph1:
      "Le coach questionne, écoute, relance. Je n'apporte pas les réponses, je vous accompagne pour faire émerger les vôtres. Ni thérapeute, ni conseiller, je suis un partenaire engagé à vos côtés : vous donnez la direction, et nous explorons ensemble les chemins qui mènent à vos objectifs pour passer à l'action.",
    paragraph2:
      "La déontologie est au cœur de mon accompagnement : confidentialité et respect des personnes guident chaque échange.",
    cta: "Découvrir mon parcours",
  },
  citation: {
    quote:
      "Le secret du changement est de concentrer toute votre énergie, non pas à lutter contre le passé, mais à construire l'avenir.",
    author: "Socrate",
  },
  finalCta: {
    title: "Prêt à faire le premier pas ?",
    description:
      "Parlons-en ensemble pour construire une intervention sur mesure.",
    button: "Me contacter",
  },
};

export const defaultCoachContent: CoachContent = {
  header: {
    eyebrow: "Votre coach et formateur",
    title: "Boris Lazzarotto",
    subtitle:
      "« Citoyen du monde », passionné par la rencontre, la transmission et la transformation.",
  },
  intro: {
    paragraphs: [
      "Fruit d'un papa vénitien et d'une maman de Haute-Savoie, né et vivant à Genève, je préfère me présenter comme « citoyen du monde ».",
      "Mon parcours professionnel m'a enrichi d'expériences dans la finance, le travail social, et la formation dans le domaine sportif avec un focus sur la prévention et les compétences sociales.",
      "Mon parcours de vie m'a constamment guidé à la rencontre de l'autre, source intarissable d'échanges et d'apprentissages. Fasciné par notre diversité et notre richesse, cela m'a naturellement conduit vers la formation d'adultes et le coaching professionnel.",
      "Accompagner les personnes sur le chemin de l'apprentissage et de l'autonomie me passionne. Ressentir chez chacun·e la joie d'un nouveau pas en avant vers plus d'équilibre me donne de l'énergie. Goûter à la puissance de la transformation me ressource. Moi qui adore le vélo, c'est comme une montée fluide en tandem, où chaque coup de pédale alimente notre ampoule intérieure qui éclaire la route.",
    ],
  },
  conviction: {
    eyebrow: "Ma conviction",
    text: "Nous avons toutes et tous les capacités pour révéler notre potentiel, et vivre aligné avec nos aspirations profondes.",
  },
  engagement: {
    eyebrow: "Mon engagement",
    text: "Œuvrer pour que nous puissions offrir au monde la meilleure version de nous-même… et à nous-même aussi !",
  },
  inspiration: {
    eyebrow: "Mon inspiration",
    quote:
      "La vie est un défi à relever, un bonheur à découvrir, une aventure à tenter",
    author: "Mère Teresa",
  },
  formations: {
    eyebrow: "Mes formations",
    title: "Un parcours certifié et complet",
    items: [
      "Coaching professionnel (certification 2026)",
      "Coaching d'équipe",
      "Formateur d'adultes (certificat FSEA)",
      "Praticien PNL",
      "Parcours de cadre à l'État de Genève : gestion d'équipes et de projets, conception & animation de formations, communication, gestion de conflits, motivation, priorités…",
      "Expert-coach J+S et coordinateur de sport OFSPO",
    ],
  },
  cta: {
    title: "Envie d'échanger autour d'un projet ?",
    lead: "Parlons-en ensemble pour construire une intervention sur mesure.",
    button: "Me contacter",
  },
};

export const defaultCoachingContent: CoachingContent = {
  header: {
    eyebrow: "Coaching personnel et d'équipe",
    title: "Quel coaching ?",
    subtitle:
      "Plusieurs orientations possibles. Vous choisissez la direction, souvent combinées au fil du processus.",
  },
  intro:
    "Voici quelques exemples concrets de thèmes que nous pouvons aborder ensemble.",
  orientations: [
    {
      number: "01",
      title: "Développez vos compétences",
      subtitle: "Passer de « je voudrais pouvoir faire » à « je le fais »",
      quote: {
        text: "Tu me dis, j'oublie. Tu m'enseignes, je m'en souviens. Tu m'impliques, j'apprends.",
        author: "Benjamin Franklin",
      },
      items: [
        {
          strong: "Communiquer",
          text: "exprimer son intention, développer son écoute, renforcer la confiance mutuelle",
        },
        {
          strong: "S'affirmer",
          text: "oser dire qui on est et ce qu'on pense, prendre du recul, exprimer ses besoins",
        },
        {
          strong: "Prioriser",
          text: "organiser votre temps, faire des choix, concilier engagement et équilibre",
        },
        {
          strong: "Gérer des projets et coopérer",
          text: "donner un cap, clarifier les objectifs et les rôles, mobiliser les énergies",
        },
        {
          strong: "S'adapter au changement",
          text: "traverser les transitions avec souplesse, s'ajuster, rester agile et aligné",
        },
      ],
    },
    {
      number: "02",
      title: "Clarifiez le sens de votre vie",
      subtitle: "Abandonner le pilote automatique et reprendre le volant",
      quote: {
        text: "La question n'est pas de savoir si « la vie a un sens », mais comment pourrais-je donner un sens à ma propre vie.",
        author: "Tenzin Gyatso, XIVème Dalaï Lama",
      },
      items: [
        {
          strong: "Se comprendre",
          text: "identifier vos valeurs, clarifier vos besoins et vos ressources, aborder ses pensées limitantes",
        },
        {
          strong: "S'accepter",
          text: "reconnaître et accueillir ses émotions pour en faire des alliées",
        },
        {
          strong: "Se (re)construire",
          text: "prendre sa place, s'affranchir du regard des autres, renforcer sa confiance",
        },
        {
          strong: "Redonner du sens",
          text: "à son travail ou à ses projets, définir ses priorités, retrouver du mouvement et de l'envie",
        },
        {
          strong: "Changer de cap",
          text: "faire des choix alignés, aborder le changement avec sérénité et motivation",
        },
      ],
    },
    {
      number: "03",
      title: "Combinez performance et équilibre",
      subtitle: "Donner le meilleur de soi-même sans s'épuiser",
      quote: {
        text: "Certains veulent que ça arrive, d'autres aimeraient que ça arrive et quelques-uns font en sorte que ça arrive",
        author: "Michael Jordan",
      },
      items: [
        {
          strong: "S'organiser et gérer le temps",
          text: "poser les bonnes priorités, faire des choix et gagner en efficacité",
        },
        {
          strong: "Définir ses objectifs",
          text: "clarifier où vous allez, pourquoi vous y allez… et comment y aller !",
        },
        {
          strong: "S'engager avec motivation",
          text: "garder le cap sur la durée même quand les obstacles surviennent",
        },
        {
          strong: "Gérer le stress",
          text: "faire face à l'imprévu, apprendre à rester centré·e, se ressourcer et mobiliser son énergie",
        },
        {
          strong: "Leadership",
          text: "asseoir votre posture, affiner votre impact, co-construire, embarquer votre équipe sans vous oublier",
        },
      ],
    },
    {
      number: "04",
      title: "Accompagnez votre équipe",
      subtitle: "Renforcer la dynamique collective et la coopération",
      quote: {
        text: "Le travail d'équipe… c'est le carburant qui permet aux gens ordinaires d'atteindre des résultats hors du commun",
        author: "Andrew Carnegie",
      },
      items: [
        {
          strong: "Communication et relations internes",
          text: "mieux se comprendre, réguler les tensions, retrouver du lien",
        },
        {
          strong: "Vision et alignement",
          text: "s'accorder sur une direction, des valeurs communes, un cap motivant",
        },
        {
          strong: "Rôles et responsabilités",
          text: "clarifier les attentes, renforcer la confiance, fluidifier les délégations",
        },
        {
          strong: "Fonctionnement collectif",
          text: "ajuster les modes de décision, revisiter les réunions, gagner en agilité",
        },
        {
          strong: "Transitions et changements",
          text: "traverser une réorganisation, accueillir de nouveaux membres, construire une nouvelle dynamique",
        },
      ],
    },
  ],
  cta: {
    title: "Quelle orientation résonne avec vous ?",
    lead: "Discutons-en lors d'une séance fondation, sans engagement.",
    primaryButton: "Prendre rendez-vous",
    secondaryButton: "Voir les tarifs",
  },
};

export const defaultLeCoachingContent: LeCoachingContent = {
  header: {
    eyebrow: "Le coaching ?",
    title: "Le coaching…",
    subtitle:
      "Un processus de changement au service de vos objectifs, personnels ou professionnels.",
  },
  whatIs: {
    eyebrow: "C'est quoi ?",
    text: "Un espace pour prendre du recul, réfléchir autrement, clarifier vos priorités, faire des choix alignés et donner vie à vos intentions.",
  },
  domains: {
    eyebrow: "Mes domaines de prédilection",
    title: "Ce que nous pouvons explorer ensemble",
    items: [
      {
        title: "Exprimer ses besoins et ses demandes",
        text: "Quand le « JE » me gêne (et que le « TU » tue).",
      },
      {
        title: "Traverser un changement",
        text: "Quand la vie nous propose ou nous impose des choix (famille, travail, retraite…).",
      },
      {
        title: "Se remettre en mouvement",
        text: "Quand le corps et l'esprit demandent un nouvel équilibre.",
      },
      {
        title: "La puissance du collectif",
        text: "Quand l'intelligence du groupe dépasse la somme des individualités.",
      },
      {
        title: "Jouer avec nos lumières et nos ombres",
        text: "Quand notre petit ange collabore avec le diablotin.",
      },
      {
        title: "Cultiver la confiance en soi",
        text: "Quand nos ressources intérieures ne demandent qu'à être révélées.",
      },
    ],
  },
  deontology: {
    eyebrow: "Déontologie",
    headline:
      "La déontologie est au cœur de l'action du coach : confidentialité et respect des personnes guident notre accompagnement.",
    paragraph:
      "Le coach questionne, écoute, relance : je n'apporte pas les réponses, je vous accompagne pour faire émerger les vôtres. Ni thérapeute, ni conseiller, je suis un partenaire engagé à vos côtés : vous donnez la direction, et nous explorons ensemble les chemins qui mènent à vos objectifs pour passer à l'action.",
  },
  process: {
    eyebrow: "Comment ça se déroule ?",
    title: "Un cheminement clair",
    steps: [
      {
        title: "Votre demande",
        text: "Merci de me laisser un message sur la page « Contact » : je vous rappelle pour faire connaissance et préciser votre demande.",
      },
      {
        title: "Séance de « fondation »",
        text: "Nous commençons par une séance sans engagement pour clarifier vos attentes, vous présenter plus en détail le processus de coaching et répondre à vos questions.",
      },
      {
        title: "Les séances",
        text: "Le processus se déroule généralement sur 6 à 10 séances d'une heure, espacées d'une à deux semaines. Les séances ont lieu en présentiel dans un lieu calme, une pièce, un parc, ou si nécessaire en visioconférence.",
      },
    ],
  },
  quote: {
    text: "Le secret du changement est de concentrer toute votre énergie, non pas à lutter contre le passé, mais à construire l'avenir",
    author: "Socrate",
  },
  cta: {
    title: "Envie d'échanger autour d'un projet ?",
    lead: "Parlons-en ensemble pour construire une intervention sur mesure.",
    primaryButton: "Réserver ma séance fondation",
    secondaryButton: "Voir les tarifs",
  },
};

export const defaultFormationContent: FormationContent = {
  header: {
    eyebrow: "Formation",
    title: "Formation",
    subtitle:
      "Faire évoluer les pratiques, réaliser le potentiel et renforcer la dynamique.",
  },
  whatIs: {
    eyebrow: "Mon approche",
    text: "Des formations participatives et ancrées dans l'expérience, conçues pour répondre à vos besoins et à vos réalités de terrain — de la demi-journée à plusieurs jours, en contexte professionnel ou associatif.",
  },
  expertises: {
    eyebrow: "Mes domaines d'expertise",
    title: "Trois piliers pour vos formations",
    items: [
      {
        title: "Coopération et intelligence collective",
        text: "Vision, valeurs et objectifs communs",
      },
      {
        title: "Communication",
        text: "Qualité d'écoute, expression des besoins et ressentis, régulation des tensions",
      },
      {
        title: "Compétences personnelles et sociales",
        text: "Gestion des émotions, pensée critique et créative, prise de décision",
      },
    ],
  },
  applications: {
    eyebrow: "Applications possibles",
    title: "Des formations adaptées à vos enjeux",
    intro:
      "Chaque intervention est conçue sur mesure, après un échange approfondi pour comprendre vos attentes, votre contexte et les résultats visés.",
    items: [
      {
        title: "Posture professionnelle et relationnelle",
        text: "Développer son assise et sa crédibilité, renforcer sa légitimité, trouver l'équilibre entre affirmation et coopération.",
      },
      {
        title: "Transmission et accompagnement",
        text: "Structurer ses messages, faciliter l'apprentissage, encourager l'autonomie et la responsabilisation.",
      },
      {
        title: "Dynamique d'équipe",
        text: "Créer un cadre clair, renforcer la confiance mutuelle, fluidifier la collaboration et soutenir l'engagement collectif.",
      },
      {
        title: "Organisation et efficacité",
        text: "Clarifier les responsabilités, prioriser efficacement, ajuster les modes de travail pour gagner en cohérence.",
      },
      {
        title: "Développement et adaptation professionnelle",
        text: "Mobiliser ses ressources, faire face aux changements, consolider sa capacité d'évolution.",
      },
    ],
  },
  quote: {
    text: "Apprendre c'est vouloir progresser, c'est être animé d'une passion, d'une soif intense de découverte",
    author: "Jiddu Krishnamurti",
  },
  cta: {
    title: "Envie d'échanger autour d'un projet ?",
    lead: "Parlons-en ensemble pour construire une intervention sur mesure.",
    primaryButton: "Demander un devis",
    secondaryButton: "Tarifs formation",
  },
};

export const defaultTarifsContent: TarifsContent = {
  header: {
    eyebrow: "Tarifs",
    title: "Tarifs de base et durée",
    subtitle: "Chaque proposition s'adapte à vos besoins.",
  },
  plans: [
    {
      title: "Coaching personnel",
      duration: "Séances 1h",
      highlight: false,
      highlightLabel: "",
      options: [
        { label: "6 séances", price: "CHF 780.–" },
        { label: "10 séances", price: "CHF 1'200.–" },
      ],
      cta: "Demander un rendez-vous",
    },
    {
      title: "Coaching d'équipe",
      duration: "Séances 3h",
      highlight: false,
      highlightLabel: "",
      options: [
        { label: "3 séances", price: "dès CHF 1'800.–" },
        { label: "6 séances", price: "dès CHF 3'240.–" },
      ],
      cta: "Demander un rendez-vous",
    },
    {
      title: "Formation",
      duration: "Min. 2 séances de 2h",
      highlight: false,
      highlightLabel: "",
      options: [
        { label: "À l'heure", price: "dès CHF 150.–" },
        { label: "À la journée", price: "dès CHF 1'200.–" },
      ],
      cta: "Demander un rendez-vous",
    },
  ],
  founding: {
    title: "Séance fondation",
    text: "Avant tout engagement, je vous propose une séance de découverte sans engagement pour faire connaissance, clarifier vos attentes et répondre à vos questions.",
  },
};

export const defaultTemoignagesContent: TemoignagesContent = {
  header: {
    eyebrow: "Témoignages",
    title: "Témoignages",
    subtitle: "Ce sont eux qui en parlent le mieux.",
  },
  testimonials: [
    {
      text: "Grâce à son écoute sincère et sa présence humaine, j'ai pu me sentir en confiance dès la première séance. Il m'a aidé à prendre conscience de mes blocages intérieurs. Ses questions m'ont permis d'ouvrir une vraie réflexion sur moi-même. Aujourd'hui, je me sens mieux outillé pour avancer avec clarté.",
      author: "A.D.",
      long: false,
    },
    {
      text: "J'ai vraiment pris plaisir à suivre le processus de coaching avec Boris. Bienveillant, chaleureux et attentif, il sait écouter et comprendre les besoins du coaché, tout en proposant des outils à la fois pertinents et inspirants. Son approche crée un cadre où l'on se sent en confiance, encouragé à avancer et à clarifier ses projets.",
      author: "T.A.",
      long: false,
    },
    {
      text: "Nous avons fait appel à Boris pour une formation d'une demi-journée destinée à nos moniteurs de cours, et nous en avons été ravis. Sa pédagogie, la variété des supports et la qualité générale de la formation ont été particulièrement appréciées. La communication a également été facile : nous avons échangé en amont sur nos attentes et le thème principal, puis nous sommes restés en contact tout au long de la préparation. Toujours très disponible, Boris a montré une réelle motivation dès la présentation de notre projet. Les exercices et exemples proposés étaient variés, interactifs et adaptés, ce que les participants ont beaucoup apprécié. Grâce à la diversité des supports et à la participation active de nos moniteurs, tous sont repartis enrichis de cette expérience avec de nouvelles clés pour leurs cours. Merci pour ta motivation et ton implication.",
      author: "C.J. — Club sportif",
      long: true,
    },
    {
      text: "J'ai suivi un accompagnement de 6 séances, et cette expérience a été extrêmement bénéfique pour moi. Dès le début, Boris a su instaurer un cadre bienveillant, dans lequel je me suis senti écouté, respecté et en confiance. Son approche, à la fois professionnelle et humaine, m'a permis de prendre du recul sur ma situation, de clarifier mes priorités, et d'identifier les leviers d'action possibles. Grâce à nos échanges, j'ai notamment appris à dire non, à me détacher de ce qui ne m'appartient pas, et à pratiquer davantage le lâcher-prise — des compétences essentielles que j'applique désormais au quotidien. Boris m'a aidé à mieux comprendre certains schémas, à gagner en sérénité, et à avancer avec plus de clarté. Je recommande vivement son accompagnement à toute personne en recherche de changement, d'équilibre ou de développement personnel.",
      author: "A.Z.",
      long: true,
    },
    {
      text: "J'ai apprécié la franchise et la transparence de nos échanges. Ils m'ont fait comprendre que si le chemin paraît parfois compliqué, l'important est de rester en mouvement, même quand la pente semble raide : des petits pas, en valorisant mes réussites. Merci pour les outils que tu m'as aidé à comprendre et mettre en pratique (exprimer mon besoin clairement avec l'approche de la communication non-violente). Merci de m'avoir accompagnée et m'avoir montré que je possède des ressources parmi lesquelles je peux puiser des forces pour avancer et construire mon futur.",
      author: "D.F.",
      long: false,
    },
  ],
  cta: {
    title: "Envie de vivre votre propre cheminement ?",
    lead: "La première étape est une séance fondation, sans engagement.",
    button: "Réserver ma séance fondation",
  },
};

export const defaultContactContent: ContactContent = {
  header: {
    eyebrow: "Contact",
    title: "Faisons connaissance",
    subtitle:
      "La séance fondation est sans engagement. C'est l'occasion idéale pour faire le premier pas.",
  },
  form: {
    eyebrow: "Formulaire",
    title: "Écrivez-moi quelques mots",
  },
  details: {
    title: "Mes coordonnées",
    email: "lazzarotto.coaching@gmail.com",
    phone: "+41 (0)79 292 78 54",
    phoneHref: "+41792927854",
    locationTitle: "Genève, Suisse",
    locationDetail: "Présentiel ou visioconférence",
  },
  workInfo: {
    title: "Comment je travaille",
    items: [
      "Réponse sous 24 à 48h ouvrées",
      "Première séance fondation sans engagement",
      "Confidentialité garantie",
      "En présentiel ou en visio",
      "Contact téléphonique",
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Page registry — single source of truth for keys, defaults and Firestore docs
// ─────────────────────────────────────────────────────────────────────────────

export type ContentMap = {
  home: HomeContent;
  coach: CoachContent;
  coaching: CoachingContent;
  leCoaching: LeCoachingContent;
  formation: FormationContent;
  tarifs: TarifsContent;
  temoignages: TemoignagesContent;
  contact: ContactContent;
};

export type PageKey = keyof ContentMap;

export const PAGE_DEFAULTS: ContentMap = {
  home: defaultHomeContent,
  coach: defaultCoachContent,
  coaching: defaultCoachingContent,
  leCoaching: defaultLeCoachingContent,
  formation: defaultFormationContent,
  tarifs: defaultTarifsContent,
  temoignages: defaultTemoignagesContent,
  contact: defaultContactContent,
};

const CONTENT_COLLECTION = "content";

const DOC_IDS: Record<PageKey, string> = {
  home: "home",
  coach: "coach",
  coaching: "coaching",
  leCoaching: "le-coaching",
  formation: "formation",
  tarifs: "tarifs",
  temoignages: "temoignages",
  contact: "contact",
};

// ─────────────────────────────────────────────────────────────────────────────
// Read / write API
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Reads a page's content from Firestore with a defensive deep-merge against
 * defaults, so partial documents (missing fields) don't break the page.
 */
export async function getPageContent<K extends PageKey>(
  key: K,
): Promise<ContentMap[K]> {
  const fallback = PAGE_DEFAULTS[key];
  if (!isFirebaseConfigured()) return fallback;
  try {
    const ref = doc(getDb(), CONTENT_COLLECTION, DOC_IDS[key]);
    const snap = await getDoc(ref);
    if (!snap.exists()) return fallback;
    const data = snap.data() as Partial<ContentMap[K]>;
    return deepMerge(fallback, data) as ContentMap[K];
  } catch (err) {
    console.error(`[content] Firestore read failed for "${key}":`, err);
    return fallback;
  }
}

export async function savePageContent<K extends PageKey>(
  key: K,
  value: ContentMap[K],
): Promise<void> {
  const ref = doc(getDb(), CONTENT_COLLECTION, DOC_IDS[key]);
  await setDoc(ref, value, { merge: false });
}

// Back-compat shortcuts (still used by some imports).
export async function getHomeContent(): Promise<HomeContent> {
  return getPageContent("home");
}
export async function saveHomeContent(c: HomeContent): Promise<void> {
  return savePageContent("home", c);
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Conservative deep-merge: for arrays we trust the override entirely (so the
 * admin can shorten lists). For plain objects we recursively merge so missing
 * keys fall back to defaults.
 */
function deepMerge<T>(base: T, override: unknown): T {
  if (override === null || override === undefined) return base;
  if (Array.isArray(base) || Array.isArray(override)) {
    return (Array.isArray(override) ? override : base) as T;
  }
  if (typeof base !== "object" || typeof override !== "object") {
    return (override as T) ?? base;
  }
  const result: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const k of Object.keys(override as Record<string, unknown>)) {
    const baseVal = (base as Record<string, unknown>)[k];
    const overrideVal = (override as Record<string, unknown>)[k];
    result[k] = deepMerge(baseVal, overrideVal);
  }
  return result as T;
}
