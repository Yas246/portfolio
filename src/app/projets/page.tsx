"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next"; // Importation de useTranslation
import ImageSlider from "../../components/ImageSlider";
import PageTitle from "../../components/PageTitle";

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
    name: "Vix",
    description: "vix.description", // Clé de traduction
    link: "https://github.com/Yas246/vix",
    images: ["/images/vix.png", "/images/vix2.png", "/images/vix3.png"],
  },
  {
    name: "Pneumo",
    description: "pneumo.description", // Clé de traduction
    link: "https://pneumo.vercel.app/",
    images: [
      "/images/pneumo.png",
      "/images/pneumo2.png",
      "/images/pneumo3.png",
    ],
  },
  {
    name: "OMSHINA International Recruitment",
    description: "omshina.description", // Clé de traduction
    link: "https://recruitement.vercel.app/",
    images: [
      "/images/omshina.png",
      "/images/omshina2.png",
      "/images/omshina3.png",
    ],
  },
  {
    name: "Kimizone",
    description: "kimizone.description",
    link: "https://kimizone.vercel.app/",
    images: [
      "/images/kimizone.png",
      "/images/kimizone2.png",
      "/images/kimizone3.png",
    ],
  },
  {
    name: "ExploreBénin",
    description: "explorebenin.description", // Clé de traduction
    link: "https://explorebenin.vercel.app/",
    images: [
      "/images/explorebenin.png",
      "/images/explorebenin2.png",
      "/images/explorebenin1.png",
    ],
  },
  {
    name: "Permix",
    description: "permix.description",
    link: "https://permix-rho.vercel.app/",
    images: [
      "/images/permix.png",
      "/images/permix2.png",
      "/images/permix3.png",
    ],
  },
  {
    name: "Yatouze",
    description: "yatouze.description", // Clé de traduction
    link: "https://yatouze.com/",
    images: ["/images/Yatouze.png", "/images/Yatouze2.png"],
  },
  {
    name: "Cinematch",
    description: "cinematch.description", // Clé de traduction
    link: "https://cinematch-hdra.vercel.app/",
    images: [
      "/images/cinematch.png",
      "/images/cinematch2.png",
      "/images/cinematch3.png",
    ],
  },
  {
    name: "Akronim",
    description: "akronim.description", // Clé de traduction
    link: "https://akronim.vercel.app/",
    images: ["/images/akronim.png", "/images/akronim2.png"],
  },
  {
    name: "Replica",
    description: "replica.description", // Clé de traduction
    link: "https://replica-tau.vercel.app/",
    images: ["/images/replica.png", "/images/replica2.png"],
  },
  {
    name: "RpManager",
    description: "rpmanager.description", // Clé de traduction
    link: "https://rpmanager.vercel.app/",
    images: ["/images/rpmanager.png"],
  },
  {
    name: "FicheInfo",
    description: "ficheinfo.description", // Clé de traduction
    link: "",
    images: [
      "/images/ficheInfo.png",
      "/images/ficheInfo2.png",
      "/images/ficheInfo3.png",
    ],
  },
];

export default function Projects() {
  const { t } = useTranslation("common"); // Utilisation du namespace "common"
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
    <>
      <PageTitle title="Projets" />
      <div
        ref={projectsRef}
        className="min-h-screen px-4 pt-24 pb-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-800 dark:text-white">
            {t("projects.title")} {/* Traduction du titre */}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col p-6 project-card glass-panel"
              >
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <ImageSlider
                    images={project.images}
                    projectName={project.name}
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
                  {project.name}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {t(project.description)} {/* Traduction de la description */}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {t("projects.link")} {/* Traduction du lien */}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
