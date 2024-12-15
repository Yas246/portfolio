"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useLayoutEffect, useRef } from "react";
import ImageSlider from "../../components/ImageSlider";

// Type pour un projet
type Project = {
  name: string;
  description: string;
  link?: string;
  images: string[];
};

// Liste des projets
const projects: Project[] = [
  {
    name: "Akronim",
    description:
      "Le site web d'AKRONIM est une vitrine institutionnelle moderne développée avec Next.js, TypeScript et Tailwind CSS, mettant en avant l'excellence académique de l'université dans les domaines de l'informatique et de la gestion. L'interface utilise un design glassmorphism élégant avec des animations GSAP et des transitions Framer Motion pour une expérience utilisateur fluide. L'ensemble est enrichi d'images professionnelles et d'éléments interactifs qui guident les visiteurs vers les différentes formations proposées. Notez que AKRONIM reste factice",
    link: "https://akronim.vercel.app/",
    images: ["/images/akronim.png", "/images/akronim2.png"],
  },
  {
    name: "Replica",
    description:
      "L'application REPLICA est un outil web qui permet de convertir et dupliquer les numéros de téléphone dans un fichier de contacts VCF. Les utilisateurs peuvent télécharger leur fichier VCF, et l'application crée automatiquement une copie secondaire de chaque numéro de téléphone avec un format modifié. L'utilisateur a ensuite deux options de téléchargement : soit un fichier contenant à la fois les numéros originaux et modifiés, soit uniquement les numéros modifiés. L'interface est simple, avec un design moderne en dégradé sombre et des animations de carrousel pour guider l'utilisateur.",
    link: "https://replica-tau.vercel.app/",
    images: ["/images/replica.png", "/images/replica2.png"],
  },
  {
    name: "RpManager",
    description:
      "L'application est un outil de gestion de rapports de travail journaliers sous forme de Progressive Web App (PWA). Elle permet aux utilisateurs de créer des rapports détaillés incluant leurs horaires de travail (arrivée/départ), leurs tâches effectuées avec les heures correspondantes, et les travaux prévus pour le jour suivant. L'application offre une interface moderne avec des animations GSAP, un stockage local via IndexedDB pour fonctionner hors ligne, et la possibilité de générer des PDF des rapports. Elle inclut également des fonctionnalités comme la recherche de rapports passés par date, la possibilité d'installation sur l'appareil (PWA), et une mise en page responsive avec un design élégant utilisant des effets de glassmorphism et un thème sombre.",
    link: "https://rpmanager.vercel.app/",
    images: ["/images/rpmanager.png"],
  },
  {
    name: "FicheInfo",
    description:
      "FicheInfo est une application web développée avec Next.js, qui permet aux employés de gérer efficacement leurs missions et de suivre leur progression. Elle offre également la possibilité de créer des rapports journaliers détaillés incluant la date, les heures d'arrivée et de départ, les tâches effectuées dans un ordre chronologique, ainsi que les problèmes rencontrés par tâche. Les rapports peuvent être exportés au format PDF, facilitant ainsi leur partage et leur archivage.",
    link: "",
    images: [
      "/images/ficheInfo.png",
      "/images/ficheInfo2.png",
      "/images/ficheInfo3.png",
    ],
  },
  // Ajoutez vos autres projets ici
];

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.2,
        });
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={projectsRef}
      className="px-4 pt-24 pb-6 min-h-screen sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-800 dark:text-white">
          Mes Projets
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col p-6 project-card glass-panel"
            >
              <div className="overflow-hidden relative mb-4 h-64 rounded-lg">
                <ImageSlider
                  images={project.images}
                  projectName={project.name}
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
                {project.name}
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Voir le projet →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
