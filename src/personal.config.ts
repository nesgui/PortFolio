export type SocialLink = {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'x' | 'website' | 'email';
};

export type SkillSection = {
  title: string;
  description: string;
  techStack: string[];
  icon: 'react' | 'docker' | 'python' | 'database';
};

export type Experience = {
  title: string;
  location?: string;
  date: string;
  bullets: string[];
};

export type Project = {
  title: string;
  href: string;
  image: string;
  description: string;
};

export type Certification = {
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
};

export type ContactCopy = {
  heading: string;
  subtext: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
};

export type PersonalConfig = {
  siteTitle: string;
  profile: {
    name: string;
    title: string;
    avatarUrl: string;
    socials: SocialLink[];
  };
  skills: SkillSection[];
  experiences: Experience[];
  projects: Project[];
  contactCopy: ContactCopy;
  footerText?: string;
  certifications?: Certification[];
};

// Valeurs par défaut (issues du template actuel) — à remplacer par vos infos
export const personalConfig: PersonalConfig = {
  siteTitle: 'Aoutacksa Wasguine Dieudonné — Portfolio',
  profile: {
    name: 'Aoutacksa Wasguine Dieudonné',
    title: 'Développeur Full Stack & Informaticien Systèmes',
    avatarUrl: 'profil.jpg',
    socials: [
      { label: 'GitHub', url: 'https://github.com/nesgui', icon: 'github' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/dieudonn%C3%A9-aoutacksa-wasguine', icon: 'linkedin' },
    ],
  },
  skills: [
    {
      title: 'Développement Web Full Stack',
      description:
        "Conception d’applications avec C#, Java, JavaScript (ASP.NET Core, Spring Boot, React.js, Bootstrap).",
      techStack: [
        'C#', 'Java', 'JavaScript', 'HTML5', 'CSS3', 'ASP.NET Core', 'Spring Boot', 'React.js', 'Bootstrap', 'Tailwind CSS','Razor pages'
      ],
      icon: 'react',
    },
    {
      title: 'Bases de données & Méthodes',
      description:
        "Modélisation et persistance; pratiques Agile/Scrum pour une livraison incrémentale et fiable.",
      techStack: ['SQL Server', 'PostgreSQL', 'SQLite', 'UML', 'Merise', 'Agile', 'Scrum'],
      icon: 'database',
    },
    {
      title: 'Systèmes, Réseaux & DevOps',
      description:
        "Administration Windows/Linux, supervision réseau, sauvegarde/sécurité, CI/CD et conteneurisation.",
      techStack: ['Docker', 'Git', 'GitHub','GitHub Actions', 'Postman', 'Windows Server', 'Linux (Ubuntu)', 'Visual Studio', 'intelliJ IDEA'],
      icon: 'docker',
    },
  ],
  experiences: [
    {
      title: 'Stagiaire IT / Développeur Full Stack — Ministère des Finances',
      location: 'N’Djamena, Tchad',
      date: 'Août 2025 – Octobre 2025',
      bullets: [
        'Application web de gestion de courriers (Java/Spring Boot + React.js + PostgreSQL)',
        'Pratiques Agile (Scrum), gestion de versions Git/GitHub',
        'Support technique et digitalisation des processus internes',
      ],
    },
    {
      title: 'Stagiaire Développeur Full Stack — Ecobank Tchad (IT)',
      location: 'N’Djamena, Tchad',
      date: 'Novembre 2024 – Juillet 2025',
      bullets: [
        'Supervision réseau et support technique',
        "Développement d’EcoJuris (ASP.NET Core / C# / SQL Server)",
        'Tests unitaires, débogage, déploiement, formation utilisateurs',
        "Application interne d’envoi d’emails d’anniversaire",
      ],
    },
  ],
  projects: [
    {
      title: 'Gestion de courriers administratifs',
      href: '#',
      image: '/log.png',
      description:
        'Application web de gestion des courriers (Java / Spring Boot, React.js, Docker, PostgreSQL).',
    },
    {
      title: 'EcoJuris — Plateforme de gestion juridique',
      href: '#',
      image: '/Eco_Login.png',
      description:
        'ASP.NET Core / C# / SQL Server — développement, tests, déploiement et formation.',
    },
    {
      title: "RH-Birthday-Manager (interne)",
      href: '#',
      image: '/dashbord.png',
      description:
        "Automatisation des envois d’emails d’anniversaire pour le personnel (interne). ASP.NET Core / C# / SQL Server — développement, tests, déploiement et formation.",
    },
  ],
  contactCopy: {
    heading: 'Me contacter',
    subtext: "Basé à N’Djamena, Tchad — dieudonnemoise6@gmail.com — +235 635 19 678",
    nameLabel: 'Votre nom',
    namePlaceholder: 'Comment vous appelez-vous ?',
    emailLabel: 'Email / Téléphone',
    emailPlaceholder: 'Comment puis-je vous joindre ?',
    messageLabel: 'Message',
    messagePlaceholder: 'Décrivez votre besoin ou votre projet',
    submitLabel: 'Envoyer',
  },
  footerText: '© 2025 Aoutacksa Wasguine Dieudonné — Tous droits réservés.',
  certifications: [
    {
      title: 'Oracle Cloud Infrastructure Associate',
      issuer: 'Oracle University',
    },
    {
      title: 'Oracle Cloud Database Services Professional',
      issuer: 'Oracle University',
    },
    {
        title: ' Oracle Cloud Infrastructure Certified AI Foundations Associate',
        issuer: 'Oracle University',
      },
    {
      title: 'Scrum Fundamentals Certified (SFC)',
      issuer: 'SCRUMstudy',
    },
    {
      title: 'Système d’Information Géographique (SIG)',
      issuer: 'CEFOD',
    },
  ],
};

export default personalConfig;

