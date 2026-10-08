import type { Metadata } from "next";
import { Home } from "@/components/home";
import { Shell } from "@/components/shell";
import { pageMetadata } from "@/content/seo";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  title: `${site.name} — ${site.motto}`,
  description:
    "Francisco Basigalup, Information Systems student in Argentina, open to SWE internships. Web, mobile and embedded projects with code, tests and honest status. Don't take my word for it. Run it.",
  en: "/",
  es: "/es/",
});

export default function Page() {
  return (
    <Shell lang="en" altHref="/es/">
      <Home lang="en" />
    </Shell>
  );
}
