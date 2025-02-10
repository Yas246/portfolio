import { createInstance } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const i18n = createInstance();

i18n
  .use(initReactI18next)
  .use(LanguageDetector) // Détecte automatiquement la langue du navigateur
  .use(HttpApi) // Charge les fichiers JSON de `public/locales`
  .init({
    supportedLngs: ["en", "fr"],
    fallbackLng: "fr", // Langue par défaut
    debug: false, // Met à `true` pour voir les logs
    interpolation: {
      escapeValue: false, // Pas besoin d'échapper les valeurs en React
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    detection: {
      order: ["cookie", "localStorage", "navigator"],
      caches: ["cookie", "localStorage"],
    },
  });

export default i18n;
