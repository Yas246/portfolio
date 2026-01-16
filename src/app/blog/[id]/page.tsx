"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import PageTitle from "../../../components/PageTitle";
import { blogPosts } from "../../../data/blog";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogPost() {
  const { t, i18n } = useTranslation("common");
  const params = useParams();
  const postRef = useRef<HTMLDivElement>(null);

  const post = blogPosts.find((p) => p.id === params.id);

  const formatMarkdown = (text: string) => {
    // Convert **text** to <strong>text</strong>
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".blog-content", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".blog-section", {
        scrollTrigger: {
          trigger: ".blog-section",
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, postRef);

    return () => ctx.revert();
  }, []);

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
            Article not found
          </h1>
          <Link
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            {t("blog.backToBlog")}
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const locale = i18n.language === "fr" ? "fr-FR" : "en-US";
    return date.toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const content = post.content[i18n.language as "fr" | "en"];

  return (
    <>
      <PageTitle title="Blog" />
      <div
        ref={postRef}
        className="min-h-screen px-4 pt-24 pb-20 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 mb-8 text-blue-600 transition-colors dark:text-blue-400 hover:underline"
          >
            <ArrowLeft size={20} />
            {t("blog.backToBlog")}
          </Link>

          <div className="p-8 mb-8 blog-content glass-panel">
            <h1 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
              {post.title[i18n.language as "fr" | "en"]}
            </h1>

            <p className="mb-6 text-xl font-medium text-blue-600 dark:text-blue-400">
              {post.subtitle[i18n.language as "fr" | "en"]}
            </p>

            {post.featuredImage && (
              <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg md:h-96">
                <Image
                  src={post.featuredImage}
                  alt={post.title[i18n.language as "fr" | "en"]}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 896px"
                />
              </div>
            )}

            <div className="flex flex-wrap items-center gap-4 pb-6 mb-6 text-sm text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>
                  {t("blog.publishedOn")} {formatDate(post.date)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>
                  {post.readTime} {t("blog.readTime")}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                >
                  <Tag size={14} />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 blog-content glass-panel">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="mb-8 text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                {content.introduction}
              </p>

              {content.sections.map((section, index) => (
                <div key={index} className="mb-10 blog-section">
                  <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                    {section.heading}
                  </h2>

                  {section.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="mb-4 text-base leading-relaxed text-gray-700 dark:text-gray-300"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.listItems && section.listItems.length > 0 && (
                    <ul className="my-6 space-y-3">
                      {section.listItems.map((item, liIndex) => (
                        <li
                          key={liIndex}
                          className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                        >
                          <span className="mt-1 text-blue-600 dark:text-blue-400">
                            ✓
                          </span>
                          <span
                            className="flex-1"
                            dangerouslySetInnerHTML={{
                              __html: formatMarkdown(item),
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div className="pt-8 mt-12 border-t-2 border-gray-200 blog-section dark:border-gray-700">
                <p className="text-xl leading-relaxed text-gray-700 whitespace-pre-line dark:text-gray-300">
                  {content.conclusion}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              <ArrowLeft size={20} />
              {t("blog.backToBlog")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
