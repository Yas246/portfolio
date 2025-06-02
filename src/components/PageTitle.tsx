"use client";

import { useLayoutEffect } from "react";

interface PageTitleProps {
  title?: string;
}

export default function PageTitle({ title }: PageTitleProps) {
  useLayoutEffect(() => {
    document.title = title ? `Portfolio | ${title}` : "Portfolio";
  }, [title]);

  return null;
}
