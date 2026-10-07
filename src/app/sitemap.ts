import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { projectHref } from "@/content/ui";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { en: "/", es: "/es/" },
    ...projects.map((p) => ({ en: projectHref("en", p.slug), es: projectHref("es", p.slug) })),
  ];
  return pages.flatMap(({ en, es }) => {
    const languages = { en: `${site.url}${en}`, es: `${site.url}${es}` };
    return [
      { url: `${site.url}${en}`, alternates: { languages } },
      { url: `${site.url}${es}`, alternates: { languages } },
    ];
  });
}
