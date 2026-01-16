"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/PageTitle";
import { blogPosts } from "../../data/blog";
import { Calendar, Clock } from "lucide-react";

export default function Blog() {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const blogRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".blog-card", {
        scrollTrigger: {
          trigger: ".blog-card",
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: "power2.out",
        stagger: {
          amount: 0.6,
          from: "start",
          grid: [1, 3],
        },
      });
    }, blogRef);

    return () => ctx.revert();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const locale = i18n.language === "fr" ? "fr-FR" : "en-US";
    return date.toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <PageTitle title="Blog" />
      <div
        ref={blogRef}
        className="min-h-screen px-4 pt-24 pb-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-800 dark:text-white">
            {t("blog.title")}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col p-6 transition-shadow cursor-pointer blog-card glass-panel hover:shadow-xl"
                onClick={() => router.push(`/blog/${post.id}`)}
              >
                {post.featuredImage && (
                  <div className="relative h-48 mb-4 overflow-hidden rounded-lg bg-gradient-to-br from-blue-400 to-purple-600">
                    <Image
                      src={post.featuredImage}
                      alt={post.title[i18n.language as "fr" | "en"]}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}

                <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white line-clamp-2">
                  {post.title[i18n.language as "fr" | "en"]}
                </h3>

                <p className="mb-4 text-sm font-medium text-blue-600 dark:text-blue-400">
                  {post.subtitle[i18n.language as "fr" | "en"]}
                </p>

                <p className="flex-grow mb-4 text-gray-600 dark:text-gray-300 line-clamp-3">
                  {post.description[i18n.language as "fr" | "en"]}
                </p>

                <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>
                      {post.readTime} {t("blog.readTime")}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/blog/${post.id}`);
                  }}
                  className="w-full px-4 py-2 text-blue-600 transition-colors border-2 border-blue-600 rounded-lg dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:text-white"
                >
                  {t("blog.readMore")}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
