"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const pageOrder = ["/", "/stack", "/projets", "/contact"];

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const transitionRef = useRef(null);
  const previousPathRef = useRef(pathname);

  useLayoutEffect(() => {
    const currentIndex = pageOrder.indexOf(pathname);
    const previousIndex = pageOrder.indexOf(previousPathRef.current);
    const direction = currentIndex > previousIndex ? 100 : -100;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        transitionRef.current,
        {
          xPercent: direction,
          opacity: 0,
        },
        {
          xPercent: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          onComplete: () => {
            previousPathRef.current = pathname;
          },
        }
      );
    });

    return () => ctx.revert();
  }, [pathname]);

  return (
    <div ref={transitionRef} className="min-h-screen">
      {children}
    </div>
  );
}
