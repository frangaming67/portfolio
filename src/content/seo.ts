import type { Metadata } from "next";
import { site } from "./site";
import type { Lang } from "./types";

const ogImage = { url: "/opengraph-image.png", width: 1200, height: 630 };

/**
 * Canonical, hreflang and share-card metadata for a page that exists in both
 * languages. A page that sets `openGraph` must repeat the image, because the
 * root opengraph-image is only merged at the root segment.
 */
export function pageMetadata({
  lang,
  title,
  description,
  en,
  es,
}: {
  lang: Lang;
  title: string;
  description: string;
  en: string;
  es: string;
}): Metadata {
  const url = lang === "en" ? en : es;
  return {
    description,
    alternates: { canonical: url, languages: { en, es, "x-default": en } },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: lang === "en" ? "en_US" : "es_AR",
      url,
      title,
      description,
      images: [ogImage],
    },
  };
}
