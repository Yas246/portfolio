"use client";

import {
  mdiAnimation,
  mdiDocker,
  mdiGit,
  mdiGithub,
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiLanguageJavascript,
  mdiLanguageTypescript,
  mdiNodejs,
  mdiReact,
  mdiTailwind,
} from "@mdi/js";
import Icon from "@mdi/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect } from "react";
import { useTheme } from "../../components/ThemeProvider";
import { useTranslation } from "react-i18next"; // Import useTranslation

export default function Stack() {
  const { theme } = useTheme();
  const { t } = useTranslation("common"); // Use the common namespace

  const technologies = [
    {
      name: "Next.js",
      icon: theme === "light" ? "/next.svg" : "/nextw.svg",
      isNextIcon: true,
    },
    { name: "HTML", icon: mdiLanguageHtml5 },
    { name: "CSS", icon: mdiLanguageCss3 },
    { name: "TypeScript", icon: mdiLanguageTypescript },
    { name: "React", icon: mdiReact },
    { name: "Tailwind CSS", icon: mdiTailwind },
    { name: "JavaScript", icon: mdiLanguageJavascript },
    { name: "Node.js", icon: mdiNodejs },
    { name: "Git", icon: mdiGit },
    { name: "GitHub", icon: mdiGithub },
    { name: "Docker", icon: mdiDocker },
    { name: "GSAP", icon: mdiAnimation },
  ];

  useLayoutEffect(() => {
    // Enregistrer ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Nettoyer les anciens ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".tech-card").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.1, // Ajoute un délai progressif pour chaque carte
        });
      });
    });

    // Nettoyage
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="px-4 pt-24 pb-6 min-h-screen sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-800 dark:text-white">
          {t("stack.title")} {/* Translate the title */}
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col justify-center items-center p-6 transition-transform tech-card glass-panel hover:scale-105 group"
            >
              <div className="relative mb-4 w-16 h-16 text-gray-700 transition-colors dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {tech.isNextIcon ? (
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="w-full h-full transition-all group-hover:brightness-0 group-hover:invert-[.35] group-hover:blue-50 group-hover:saturate-[5000%] group-hover:hue-rotate-[190deg]"
                  />
                ) : (
                  <Icon path={tech.icon} size={2.5} className="w-full h-full" />
                )}
              </div>
              <p className="font-medium text-center text-gray-800 dark:text-white">
                {t(`stack.technologies.${tech.name}`)}{" "}
                {/* Translate technology names */}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
