"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type DrawerProps = {
  items: Array<{ name: string; path: string }>;
};

export default function Drawer({ items }: DrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-700 dark:text-gray-300"
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64
            bg-white dark:bg-gray-900 transform transition-all duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-[-100%]"
            }`}
      >
        <div className="flex justify-end mt-5">
          <button onClick={() => setIsOpen(false)}>
            <X className="text-gray-700 dark:text-gray-300" size={24} />
          </button>
        </div>

        <div className="flex flex-col p-10 space-y-8 h-[calc(100vh-80px)] bg-white dark:bg-gray-900">
          {items.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={`${
                pathname === item.path
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-900 dark:text-gray-100"
              } hover:text-blue-500 dark:hover:text-blue-300 transition-colors text-4xl font-medium`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
