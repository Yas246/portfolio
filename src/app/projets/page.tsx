"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import ImageSlider from "../../components/ImageSlider";
import PageTitle from "../../components/PageTitle";
import { projects } from "../../data/projects";

export default function Projects() {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const projectsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animation plus fluide avec stagger
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".project-card",
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: "power2.out",
        stagger: {
          amount: 0.6,
          from: "start",
          grid: [3, 5],
        },
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
            {t("projects.title")}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col p-6 project-card glass-panel"
              >
                {project.images && project.images.length > 0 && (
                  <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                    <ImageSlider
                      images={project.images}
                      projectName={project.name}
                    />
                  </div>
                )}
                <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
                  {project.name}
                </h3>
                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                  {project.language}
                  {project.stars > 0 && ` ⭐ ${project.stars}`}
                </p>
                <p className="mb-4 flex-grow text-gray-600 dark:text-gray-300">
                  {project.description[i18n.language as "fr" | "en"]}
                </p>
                <button
                  onClick={() => router.push(`/projets/${project.id}`)}
                  className="w-full px-4 py-2 text-blue-600 border-2 border-blue-600 rounded-lg transition-colors dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:text-white"
                >
                  {t("projects.seeDetails")}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
