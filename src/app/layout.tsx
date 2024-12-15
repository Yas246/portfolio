import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import ThemeProvider from "../components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mon Portfolio",
  description: "Portfolio professionnel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">
            <PageTransition>{children}</PageTransition>
            <footer className="pb-6 text-sm text-center text-gray-600 dark:text-gray-400">
              <p>
                © {new Date().getFullYear()} Yassar WABI. Tous droits réservés.
              </p>
            </footer>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
