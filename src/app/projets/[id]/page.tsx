"use client";

import { useRouter, useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import PageTitle from "../../../components/PageTitle";
import ImageSlider from "../../../components/ImageSlider";
import { projects } from "../../../data/projects";

export default function ProjectPage() {
  const router = useRouter();
  const { t, i18n } = useTranslation("common");
  const params = useParams();
  const projectId = params.id as string;

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <>
        <PageTitle title="Projet non trouvé" />
        <div className="min-h-screen px-4 pt-24 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <button
              onClick={() => router.push("/projets")}
              className="mb-8 text-blue-600 dark:text-blue-400 hover:underline"
            >
              {t("projects.backToProjects")}
            </button>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              Projet non trouvé
            </h1>
          </div>
        </div>
      </>
    );
  }

  const lang = i18n.language as "fr" | "en";

  return (
    <>
      <PageTitle title={project.name} />
      <div className="min-h-screen px-4 pt-24 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Bouton retour */}
          <button
            onClick={() => router.push("/projets")}
            className="mb-8 text-blue-600 dark:text-blue-400 hover:underline"
          >
            {t("projects.backToProjects")}
          </button>

          {/* En-tête du projet */}
          <div className="mb-8">
            <h1 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
              {project.name}
            </h1>

            {/* Métadonnées */}
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                {project.language}
              </span>
              {project.stars > 0 && (
                <span className="px-3 py-1 text-sm bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
                  ⭐ {project.stars} {lang === "fr" ? "étoile" : "star"}
                  {project.stars > 1 ? "s" : ""}
                </span>
              )}
              {project.topics.map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
                >
                  {topic}
                </span>
              ))}
            </div>

            {/* Images si disponibles */}
            {project.images && project.images.length > 0 && (
              <div className="relative h-96 mb-8 overflow-hidden rounded-lg">
                <ImageSlider
                  images={project.images}
                  projectName={project.name}
                />
              </div>
            )}

            {/* Description courte */}
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {project.description[lang]}
            </p>

            {/* Description longue si disponible */}
            {project.longDescription && (
              <div className="mb-8 p-6 glass-panel">
                <h2 className="mb-3 text-2xl font-bold text-gray-800 dark:text-white">
                  {t("projects.description")}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                  {project.longDescription[lang]}
                </p>
              </div>
            )}

            {/* Boutons d'action */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-white bg-gray-800 rounded-lg transition-colors hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                {t("projects.viewOnGitHub")}
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-blue-600 bg-blue-100 rounded-lg transition-colors hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800"
                >
                  {t("projects.visitDemo")}
                </a>
              )}
            </div>
          </div>

          {/* Fonctionnalités */}
          {project.features && project.features.length > 0 && (
            <div className="mb-8 p-6 glass-panel">
              <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                {t("projects.features")}
              </h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-700 dark:text-gray-300"
                  >
                    <span className="mr-2 text-blue-600 dark:text-blue-400">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Stack technique */}
          {project.techStack && project.techStack.length > 0 && (
            <div className="p-6 glass-panel">
              <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                {t("projects.technologies")}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
