"use client";

import { useLayoutEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

export default function Home() {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const router = useRouter();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  useLayoutEffect(() => {
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
  }, []);

  return (
    <div className="min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8 flex flex-col justify-center relative">
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
            Bonjour, je suis{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Yassar WABI
            </span>
            <br />
            Développeur Web
          </h1>
          <p
            ref={descRef}
            className="text-lg text-gray-600 sm:text-xl dark:text-gray-300"
          >
            Passionné par le développement web et spécialisé dans la création
            d&apos;applications modernes avec React, Next.js et TypeScript. Je
            transforme des idées en expériences numériques exceptionnelles.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => router.push("/stack")}
            className="px-6 py-3 text-blue-600 rounded-lg border-2 border-blue-600 transition-colors dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:text-white"
          >
            Ma Stack
          </button>
          <button
            onClick={() => router.push("/projets")}
            className="px-6 py-3 text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700"
          >
            Voir mes projets
          </button>
          <a
            href="/cv.pdf"
            download
            className="px-6 py-3 text-blue-600 rounded-lg border-2 border-blue-600 transition-colors dark:text-blue-400 hover:bg-blue-700 hover:text-white dark:hover:text-white"
          >
            Télécharger CV
          </a>
          <button
            onClick={() => router.push("/contact")}
            className="px-6 py-3 text-blue-600 rounded-lg border-2 border-blue-600 transition-colors dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:text-white"
          >
            Me Contacter
          </button>
        </div>
      </div>
    </div>
  );
}
