import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

if (typeof window !== "undefined") {
  i18n.use(LanguageDetector).use(HttpApi);
}

i18n.use(initReactI18next).init({
  supportedLngs: ["en", "fr"],
  fallbackLng: "fr",
  debug: false,
  interpolation: { escapeValue: false },
  backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" },
  detection: {
    order: ["cookie", "localStorage", "navigator"],
    caches: ["cookie", "localStorage"],
  },
});

export default i18n;
