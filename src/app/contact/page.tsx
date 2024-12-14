"use client";

import gsap from "gsap";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { useLayoutEffect, useRef } from "react";

export default function Contact() {
  const formRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center">
          Me Contacter
        </h2>

        <div ref={formRef} className="glass-panel p-8 max-w-md mx-auto">
          <div className="grid grid-cols-1 gap-8">
            <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
              <Mail className="w-6 h-6" />
              <a
                href="mailto:bigwabi01@gmail.com"
                className="hover:text-blue-500"
              >
                bigwabi01@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
              <Phone className="w-6 h-6" />
              <a href="tel:+2290142087247" className="hover:text-blue-500">
                +2290142087247
              </a>
            </div>

            <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
              <MessageSquare className="w-6 h-6" />
              <a
                href="https://wa.me/22942087247"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
