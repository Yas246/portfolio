"use client";

import gsap from "gsap";
import { useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function Home() {
  const { t, i18n } = useTranslation("common");
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLang);
    setMounted(true);
  }, [i18n]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  useLayoutEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }).from(
        descRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      );
    });

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="flex relative flex-col justify-center px-4 pt-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl">
          <div className="p-8 mb-8 glass-panel sm:p-12">
            <h1 className="mb-6 text-4xl font-bold text-gray-800 sm:text-5xl dark:text-white">
              Loading...
            </h1>
          </div>
        </div>
      </div>
    );
  }

  const cvPath =
    i18n.language === "fr" ? "/YassarWABI_CV_fr.pdf" : "/YassarWABI_CV_en.pdf";

  return (
    <div className="flex relative flex-col justify-center px-4 pt-20 sm:px-6 lg:px-8">
      <Particles
        className="absolute inset-0"
        init={particlesInit}
        options={{
          background: {
            opacity: 0,
          },
          particles: {
            color: {
              value: "#60a5fa",
            },
            links: {
              color: "#60a5fa",
              distance: 150,
              enable: true,
              opacity: 0.3,
            },
            move: {
              enable: true,
              speed: 2,
            },
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800,
              },
            },
            size: {
              value: { min: 1, max: 5 },
            },
            opacity: {
              value: { min: 0.3, max: 0.7 },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.5,
                },
              },
            },
          },
        }}
      />
      <div className="relative mx-auto max-w-4xl">
        <div className="p-8 mb-8 glass-panel sm:p-12">
          <h1
            ref={titleRef}
            className="mb-6 text-4xl font-bold text-gray-800 sm:text-5xl dark:text-white"
          >
            <div dangerouslySetInnerHTML={{ __html: t("home1.title") }} />
          </h1>
          <p
            ref={descRef}
            className="text-lg text-gray-600 sm:text-xl dark:text-gray-300"
          >
            {t("home1.description")}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => router.push("/stack")}
            className="px-6 py-3 text-blue-600 rounded-lg border-2 border-blue-600 transition-colors dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:text-white"
          >
            {t("home1.myStack")}
          </button>
          <button
            onClick={() => router.push("/projets")}
            className="px-6 py-3 text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700"
          >
            {t("home1.seeProjects")}
          </button>
          <a
            href={cvPath}
            download
            className="px-6 py-3 text-blue-600 rounded-lg border-2 border-blue-600 transition-colors dark:text-blue-400 hover:bg-blue-700 hover:text-white dark:hover:text-white"
          >
            {t("home1.downloadCV")}
          </a>
          <button
            onClick={() => router.push("/contact")}
            className="px-6 py-3 text-blue-600 rounded-lg border-2 border-blue-600 transition-colors dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:text-white"
          >
            {t("home1.contactMe")}
          </button>
        </div>
      </div>
    </div>
  );
}
