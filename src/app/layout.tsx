"use client";

import { Inter } from "next/font/google";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import ThemeProvider from "../components/ThemeProvider";
import "../i18n";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLang);
    document.documentElement.lang = savedLang;
  }, [i18n]);

  return (
    <html lang={i18n.language} suppressHydrationWarning>
      <body className={`${inter.className} relative min-h-screen`}>
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
