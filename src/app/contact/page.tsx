"use client";

import gsap from "gsap";
import { Linkedin, Mail, MessageSquare, Phone } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation
import PageTitle from "../../components/PageTitle";

export default function Contact() {
  const { t } = useTranslation("common"); // Use the common namespace
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
    <>
      <PageTitle title="Contact" />
      <div className="min-h-[calc(100vh-180px)] px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-800 dark:text-white">
            {t("contact.title")} {/* Translate the title */}
          </h2>

          <div ref={formRef} className="max-w-md p-8 mx-auto glass-panel">
            <div className="grid grid-cols-1 gap-8">
              <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                <Mail className="w-6 h-6" />
                <a
                  href="mailto:bigwabi01@gmail.com"
                  className="hover:text-blue-500"
                >
                  wabiyassar@gmail.com
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
                  {t("contact.whatsapp")} {/* Translate WhatsApp text */}
                </a>
              </div>

              <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                <Linkedin className="w-6 h-6" />
                <a
                  href="https://www.linkedin.com/in/yassar-wabi-704061379"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
