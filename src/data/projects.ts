export interface Project {
  id: string;
  name: string;
  description: {
    fr: string;
    en: string;
  };
  longDescription?: {
    fr: string;
    en: string;
  };
  githubUrl: string;
  demoUrl?: string;
  language: string;
  topics: string[];
  stars: number;
  images: string[];
  features?: string[];
  techStack?: string[];
}

export const projects: Project[] = [
  {
    id: "expert",
    name: "Expert - RAG Code du Travail Bénin",
    description: {
      fr: "Système RAG hybride pour interroger le Code du Travail du Bénin avec IA",
      en: "Hybrid RAG system to query Benin Labor Code with AI",
    },
    longDescription: {
      fr: "Ce projet implémente un système de Retrieval-Augmented Generation (RAG) hybride combinant recherche lexicale (BM25), recherche vectorielle (FAISS), et génération de réponses via Gemini pour fournir des réponses juridiques précises.",
      en: "This project implements a hybrid Retrieval-Augmented Generation (RAG) system combining lexical search (BM25), vector search (FAISS), and answer generation via Gemini to provide accurate legal responses.",
    },
    githubUrl: "https://github.com/Yas246/expert",
    language: "Python",
    topics: ["RAG", "AI", "Legal", "FastAPI", "FAISS", "Gemini"],
    stars: 0,
    images: [],
    features: [
      "Recherche lexicale BM25",
      "Recherche vectorielle FAISS",
      "Génération Gemini",
      "Réécriture de requêtes HyDE",
      "API FastAPI",
    ],
    techStack: ["Python", "FastAPI", "FAISS", "SentenceTransformer", "Gemini", "BM25"],
  },
  {
    id: "argus",
    name: "Argus - Analyseur de Données Universel",
    description: {
      fr: "Système d'analyse de données intelligent capable d'analyser automatiquement n'importe quel dataset",
      en: "Intelligent data analysis system capable of automatically analyzing any dataset",
    },
    longDescription: {
      fr: "Un système d'analyse de données intelligent qui détecte automatiquement les types de colonnes et adapte les analyses selon le contenu des données. Supporte CSV, Excel, JSON, Parquet jusqu'à 1M+ lignes.",
      en: "An intelligent data analysis system that automatically detects column types and adapts analysis based on data content. Supports CSV, Excel, JSON, Parquet up to 1M+ rows.",
    },
    githubUrl: "https://github.com/Yas246/Argus",
    language: "Python",
    topics: ["Data Analysis", "Streamlit", "Pandas", "Visualization"],
    stars: 0,
    images: [],
    features: [
      "Détection automatique des types de colonnes",
      "Adaptation intelligente des analyses",
      "Support multi-format (CSV, Excel, JSON, Parquet)",
      "Traitement de gros datasets",
    ],
    techStack: ["Python", "Streamlit", "Pandas", "Plotly"],
  },
  {
    id: "chronosesh",
    name: "ChronoSesh",
    description: {
      fr: "Application de prise de notes automatisée pour étudiants",
      en: "Automated note-taking application for students",
    },
    longDescription: {
      fr: "Application web de prise de notes automatisée avec enregistrement audio et transcription. Frontend construit avec Next.js et TypeScript.",
      en: "Automated note-taking web application with audio recording and transcription. Frontend built with Next.js and TypeScript.",
    },
    githubUrl: "https://github.com/Yas246/ChronoSesh",
    language: "Python",
    topics: ["Notes", "Education", "Audio", "Next.js"],
    stars: 0,
    images: [],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "pneumo",
    name: "Pneumo",
    description: {
      fr: "Application web moderne pour le suivi médical des maladies respiratoires",
      en: "Modern web application for medical monitoring of respiratory diseases",
    },
    longDescription: {
      fr: "Pneumo est une application web moderne conçue pour le suivi médical des maladies respiratoires. L'application permet la gestion des données de santé, la prise de rendez-vous et le suivi des résultats d'analyses médicales. Elle offre une interface intuitive pour les patients et les professionnels de santé, avec une attention particulière à la sécurité et à la confidentialité des données médicales.",
      en: "Pneumo is a modern web application designed for medical monitoring of respiratory diseases. The application allows management of health data, appointment scheduling and tracking of medical analysis results. It offers an intuitive interface for patients and healthcare professionals, with special attention to medical data security and confidentiality.",
    },
    githubUrl: "https://github.com/Yas246/pneumo",
    demoUrl: "https://pneumo.vercel.app/",
    language: "TypeScript",
    topics: ["Medical", "Health", "Web", "Next.js"],
    stars: 0,
    images: ["/images/pneumo.png", "/images/pneumo2.png", "/images/pneumo3.png"],
    features: [
      "Suivi médical des maladies respiratoires",
      "Gestion des données de santé",
      "Prise de rendez-vous",
      "Suivi des résultats d'analyses",
      "Interface patient intuitive",
      "Conformité RGPD",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Secure Database"],
  },
  {
    id: "echopost",
    name: "EchoPost",
    description: {
      fr: "Outil de publication sociale pour Twitter/X et LinkedIn avec assistance IA",
      en: "Social publishing tool for Twitter/X and LinkedIn with AI assistance",
    },
    longDescription: {
      fr: "EchoPost est un outil de publication sociale qui permet de gérer et diffuser du contenu sur Twitter/X et LinkedIn. Mode manuel ou IA avec Gemini pour générer automatiquement les posts.",
      en: "EchoPost is a social publishing tool to manage and distribute content on Twitter/X and LinkedIn. Manual mode or AI with Gemini to automatically generate posts.",
    },
    githubUrl: "https://github.com/Yas246/EchoPost",
    language: "Python",
    topics: ["Social Media", "Twitter", "LinkedIn", "AI", "Gemini"],
    stars: 1,
    images: [],
    features: [
      "Mode manuel et IA",
      "Génération de contenu avec Gemini",
      "Publication multi-plateforme",
      "Support des médias (images, vidéos)",
      "Interface responsive",
    ],
    techStack: ["Python", "FastAPI", "Gemini", "Twitter API", "LinkedIn API"],
  },
  {
    id: "thoth",
    name: "Thoth - Assistant Vocal Intelligent",
    description: {
      fr: "Assistant vocal intelligent en français avec interaction naturelle",
      en: "Intelligent voice assistant in French with natural interaction",
    },
    longDescription: {
      fr: "Thoth est un assistant vocal intelligent qui combine reconnaissance vocale (Whisper), synthèse vocale (gTTS), et détection de mot de réveil. Système d'interruption intelligent et traitement du langage naturel.",
      en: "Thoth is an intelligent voice assistant combining speech recognition (Whisper), speech synthesis (gTTS), and wake word detection. Smart interruption system and natural language processing.",
    },
    githubUrl: "https://github.com/Yas246/Thoth",
    language: "Python",
    topics: ["Voice Assistant", "AI", "Whisper", "TTS"],
    stars: 0,
    images: [],
    features: [
      "Reconnaissance vocale Whisper",
      "Synthèse vocale gTTS",
      "Détection de mot de réveil",
      "Système d'interruption intelligent",
      "Interaction en français",
    ],
    techStack: ["Python", "Whisper", "gTTS", "NLP"],
  },
  {
    id: "rawon",
    name: "Rawon - Discord Music Bot",
    description: {
      fr: "Bot Discord musical puissant et simple à utiliser",
      en: "Powerful and easy-to-use Discord music bot",
    },
    longDescription: {
      fr: "Rawon est un bot Discord musical complet avec support des interactions, commandes de musique et modération. Facile à configurer sans codage.",
      en: "Rawon is a complete Discord music bot with interaction support, music and moderation commands. Easy to set up without coding.",
    },
    githubUrl: "https://github.com/Yas246/Rawon",
    language: "TypeScript",
    topics: ["Discord", "Bot", "Music", "TypeScript"],
    stars: 0,
    images: [],
    features: [
      "Support des interactions",
      "Commandes de musique",
      "Modération",
      "Configuration facile",
    ],
    techStack: ["TypeScript", "Discord.js"],
  },
  {
    id: "ocr-scan",
    name: "OCR Scan",
    description: {
      fr: "Application mobile de reconnaissance de texte dans les images",
      en: "Mobile application for text recognition in images",
    },
    githubUrl: "https://github.com/Yas246/ocr_scan",
    language: "Dart",
    topics: ["Flutter", "OCR", "Mobile"],
    stars: 0,
    images: [],
    techStack: ["Flutter", "Dart", "OCR"],
  },
  {
    id: "ficheo-api",
    name: "FicheInfo API",
    description: {
      fr: "API Laravel pour la gestion de fiches d'information",
      en: "Laravel API for information sheet management",
    },
    githubUrl: "https://github.com/Yas246/ficheo_api",
    language: "PHP",
    topics: ["Laravel", "API", "PHP"],
    stars: 0,
    images: [],
    techStack: ["PHP", "Laravel", "MySQL"],
  },
  {
    id: "recruitement",
    name: "OMSHINA International Recruitment",
    description: {
      fr: "Plateforme multiservice de recrutement international avec dashboard admin complet",
      en: "Multi-service international recruitment platform with complete admin dashboard",
    },
    longDescription: {
      fr: "OMSHINA International Recruitment est une plateforme multiservice de recrutement international qui accompagne étudiants, travailleurs, artistes et autres profils dans leurs démarches de mobilité et d'intégration à l'étranger. La plateforme comprend un dashboard admin complet pour gérer les candidatures, les profils et les processus de recrutement avec un système d'authentification robuste.",
      en: "OMSHINA International Recruitment is a multi-service international recruitment platform that accompanies students, workers, artists and other profiles in their mobility and integration processes abroad. The platform includes a complete admin dashboard to manage applications, profiles and recruitment processes with a robust authentication system.",
    },
    githubUrl: "https://github.com/Yas246/recruitement",
    demoUrl: "https://recruitement.vercel.app/",
    language: "TypeScript",
    topics: ["Recruitment", "Web", "Next.js", "Dashboard"],
    stars: 0,
    images: ["/images/omshina.png", "/images/omshina2.png", "/images/omshina3.png"],
    features: [
      "Plateforme de recrutement internationale",
      "Gestion des candidatures",
      "Dashboard admin complet",
      "Profils candidats détaillés",
      "Suivi des processus de recrutement",
      "Gestion multi-profils (étudiants, travailleurs, artistes)",
      "Système d'authentification robuste",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Database", "Authentication"],
  },
  {
    id: "kimizone",
    name: "Kimizone",
    description: {
      fr: "Application e-commerce streetwear au design néo-futuriste",
      en: "Streetwear e-commerce application with neo-futuristic design",
    },
    longDescription: {
      fr: "Kimizone est une application e-commerce streetwear au design néo-futuriste. La marque se concentre sur des créations urbaines originales mêlant identité locale, graphismes modernes et influences globales. Une attention particulière est portée aux designs, aux matériaux et à l'expression culturelle, créant une expérience d'achat unique et immersive.",
      en: "Kimizone is a streetwear e-commerce application with a neo-futuristic design. The brand focuses on original urban creations blending local identity, modern graphics and global influences. Special attention is paid to designs, materials and cultural expression, creating a unique and immersive shopping experience.",
    },
    githubUrl: "https://github.com/Yas246/kimizone",
    demoUrl: "https://kimizone.vercel.app/",
    language: "TypeScript",
    topics: ["E-commerce", "Streetwear", "Web", "Next.js"],
    stars: 0,
    images: ["/images/kimizone.png", "/images/kimizone2.png", "/images/kimizone3.png"],
    features: [
      "Catalogue de produits streetwear",
      "Design néo-futuriste immersif",
      "Panier et checkout",
      "Gestion des commandes",
      "Présentation des collections",
      "Interface responsive et moderne",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Payment Gateway"],
  },
  {
    id: "cinematch",
    name: "Cinematch",
    description: {
      fr: "Application de recommandation de films basée sur un modèle entraîné sur 600k+ films",
      en: "Movie recommendation application based on a model trained on 600k+ films",
    },
    longDescription: {
      fr: "Cinematch est une application de matchmaking cinématographique qui utilise un modèle entraîné sur plus de 600 000 films pour recommander des contenus personnalisés. L'application analyse les goûts, les genres favoris et les évaluations des utilisateurs pour proposer des suggestions adaptées. Simple et intuitive, Cinematch facilite la découverte de nouveaux contenus correspondant parfaitement aux préférences de l'utilisateur.",
      en: "Cinematch is a cinematic matchmaking application that uses a model trained on over 600,000 films to recommend personalized content. The application analyzes tastes, favorite genres and user ratings to provide tailored suggestions. Simple and intuitive, Cinematch makes it easy to discover new content that perfectly matches the user's preferences.",
    },
    githubUrl: "https://github.com/Yas246/cinematch",
    demoUrl: "https://cinematch-hdra.vercel.app/",
    language: "TypeScript",
    topics: ["Movies", "Recommendation", "Machine Learning", "Web"],
    stars: 0,
    images: ["/images/cinematch.png", "/images/cinematch2.png", "/images/cinematch3.png"],
    features: [
      "Système de recommandation de films",
      "Modèle ML entraîné sur 600k+ films",
      "Analyse des préférences utilisateur",
      "Classement par genres favoris",
      "Interface intuitive pour découvrir de nouveaux films",
      "Personnalisation basée sur les évaluations",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Machine Learning", "Python"],
  },
  {
    id: "akronim",
    name: "Akronim",
    description: {
      fr: "Site vitrine institutionnel moderne avec design glassmorphism et animations GSAP",
      en: "Modern institutional showcase website with glassmorphism design and GSAP animations",
    },
    longDescription: {
      fr: "Le site web AKRONIM est une vitrine institutionnelle moderne développée pour mettre en avant l'excellence académique de l'université dans les domaines de l'informatique et de la gestion. L'interface utilise un design glassmorphism élégant avec des animations GSAP et des transitions fluides. L'ensemble est enrichi d'images professionnelles et d'éléments interactifs qui guident les visiteurs vers les différentes formations proposées. Notez que AKRONIM reste un projet fictif.",
      en: "The AKRONIM website is a modern institutional showcase developed to highlight the university's academic excellence in the fields of computer science and management. The interface uses an elegant glassmorphism design with GSAP animations and smooth transitions. The whole is enriched with professional images and interactive elements that guide visitors to the various courses offered. Note that AKRONIM remains a fictional project.",
    },
    githubUrl: "https://github.com/Yas246/Akronim",
    demoUrl: "https://akronim.vercel.app/",
    language: "TypeScript",
    topics: ["Showcase", "Institutional", "Web", "Next.js"],
    stars: 0,
    images: ["/images/akronim.png", "/images/akronim2.png"],
    features: [
      "Page d'accueil immersive avec animations",
      "Présentation des formations",
      "Sections interactives avec scroll animations",
      "Design glassmorphism moderne",
      "Navigation fluide entre les sections",
      "Responsive design",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
  },
  {
    id: "replica",
    name: "Replica",
    description: {
      fr: "Outil web de conversion et duplication de numéros de téléphone dans des fichiers VCF",
      en: "Web tool for converting and duplicating phone numbers in VCF files",
    },
    longDescription: {
      fr: "Replica est un outil web qui permet de convertir et dupliquer les numéros de téléphone dans un fichier de contacts VCF. Les utilisateurs peuvent télécharger leur fichier VCF, et l'application crée automatiquement une copie secondaire de chaque numéro de téléphone avec un format modifié. L'utilisateur a ensuite deux options de téléchargement : soit un fichier contenant à la fois les numéros originaux et modifiés, soit uniquement les numéros modifiés. L'interface est simple, avec un design moderne en dégradé sombre et des animations de carrousel pour guider l'utilisateur.",
      en: "Replica is a web tool that allows you to convert and duplicate phone numbers in a VCF contact file. Users can upload their VCF file, and the application automatically creates a secondary copy of each phone number with a modified format. The user then has two download options: either a file containing both original and modified numbers, or only the modified numbers. The interface is simple, with a modern dark gradient design and carousel animations to guide the user.",
    },
    githubUrl: "https://github.com/Yas246/replica",
    demoUrl: "https://replica-tau.vercel.app/",
    language: "TypeScript",
    topics: ["Data", "Conversion", "VCF", "Web"],
    stars: 0,
    images: ["/images/replica.png", "/images/replica2.png"],
    features: [
      "Upload de fichiers VCF",
      "Parsing et analyse des contacts",
      "Duplication de numéros avec format modifié",
      "Deux options de téléchargement (originaux+modifiés ou modifiés seulement)",
      "Interface intuitive avec animations",
      "Design moderne avec dégradés sombres",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "VCF Parsing"],
  },
  {
    id: "rpmanager",
    name: "RpManager",
    description: {
      fr: "Progressive Web App de gestion de rapports de travail journaliers avec génération PDF",
      en: "Progressive Web App for daily work report management with PDF generation",
    },
    longDescription: {
      fr: "RpManager est une Progressive Web App (PWA) de gestion de rapports de travail journaliers. L'application permet aux utilisateurs de créer des rapports détaillés incluant leurs horaires de travail (arrivée/départ), les tâches effectuées avec les heures correspondantes, et les travaux prévus pour le jour suivant. Elle offre une interface moderne avec stockage local via IndexedDB pour fonctionner hors ligne, et permet de générer des PDF des rapports.",
      en: "RpManager is a Progressive Web App (PWA) for managing daily work reports. The application allows users to create detailed reports including their work schedules (arrival/departure), tasks performed with corresponding hours, and work planned for the next day. It features a modern interface with IndexedDB local storage for offline functionality and PDF generation capabilities.",
    },
    githubUrl: "https://github.com/Yas246/rpmanager",
    demoUrl: "https://rpmanager.vercel.app/",
    language: "TypeScript",
    topics: ["PWA", "Reports", "Management", "Web"],
    stars: 0,
    images: ["/images/rpmanager.png"],
    features: [
      "Création de rapports journaliers détaillés",
      "Suivi des horaires de travail (arrivée/départ)",
      "Enregistrement des tâches avec durée",
      "Planification des tâches du lendemain",
      "Stockage local IndexedDB pour fonctionnement offline",
      "Génération de PDF des rapports",
      "Recherche de rapports par date",
      "Installation en tant qu'application (PWA)",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "IndexedDB", "PWA"],
  },
];
