"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n"; // Import the i18n configuration

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Initialisation de la langue
    const initLanguage = () => {
      const savedLang = localStorage.getItem("language") || "en";
      i18n.changeLanguage(savedLang);
      document.documentElement.setAttribute("lang", savedLang);
      setMounted(true);
    };

    // Attendre que le DOM soit complètement chargé
    if (document.readyState === "complete") {
      initLanguage();
    } else {
      window.addEventListener("load", initLanguage);
      return () => window.removeEventListener("load", initLanguage);
    }
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = i18n.language === "fr" ? "en" : "fr";
    localStorage.setItem("language", newLang);
    i18n.changeLanguage(newLang);
    document.documentElement.setAttribute("lang", newLang);
    router.refresh();
  };

  // Pendant le chargement initial, retourner un bouton statique
  if (!mounted) {
    return (
      <button
        className="px-4 py-2 bg-gray-200 rounded-md shadow-md transition hover:bg-gray-300"
        aria-label="Language switcher"
      >
        EN
      </button>
    );
  }

  return (
    <button
      className="px-4 py-2 bg-gray-200 rounded-md shadow-md transition hover:bg-gray-300"
      onClick={toggleLanguage}
      aria-label={`Switch to ${i18n.language === "fr" ? "English" : "French"}`}
    >
      {i18n.language === "fr" ? "FR" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
