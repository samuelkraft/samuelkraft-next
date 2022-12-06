"use client";

import { useEffect } from "react";

// Workaroud until next.js app dir supports updating title on next/link navigation
// https://beta.nextjs.org/docs/routing/pages-and-layouts

export default function PageTitle({ title }: { title: string }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return <></>;
}
