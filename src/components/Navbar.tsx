"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import Drawer from "./Drawer";
import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Stack", path: "/stack" },
    { name: "Projets", path: "/projets" },
    { name: "Contacts", path: "/contact" },
  ];

  return (
    <nav className="fixed z-50 w-full backdrop-blur-md bg-white/30 dark:bg-gray-900/30">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Drawer items={navItems} />
          <div className="hidden items-center space-x-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`${
                  pathname === item.path
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300"
                } hover:text-blue-500 dark:hover:text-blue-300 transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Yas246"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 transition-colors dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300"
            >
              <Icon path={mdiGithub} size={1} />
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {theme === "light" ? (
                <Moon className="text-gray-700" />
              ) : (
                <Sun className="text-gray-200" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
