"use client";

import { Electrolize } from "next/font/google";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import ThemeProvider from "../components/ThemeProvider";
import "../i18n";
import "./globals.css";

const electrolize = Electrolize({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLang);
    document.documentElement.lang = savedLang;
    setMounted(true);
  }, [i18n]);

  if (!mounted) {
    return (
      <html lang="en">
        <head>
          <title>Portfolio</title>
        </head>
        <body className={`${electrolize.className} bg-white dark:bg-gray-900`}>
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <div className="absolute inset-0 w-16 h-16 border-4 border-gray-200 rounded-full dark:border-gray-700"></div>
                <div className="absolute inset-0 w-16 h-16 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Loading...
              </p>
            </div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang={i18n.language} suppressHydrationWarning>
      <head>
        <title>Portfolio</title>
      </head>
      <body className={`${electrolize.className} relative min-h-screen`}>
        <ThemeProvider>
          <Navbar />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
