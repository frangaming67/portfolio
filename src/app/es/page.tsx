import type { Metadata } from "next";
import { Home } from "@/components/home";
import { Shell } from "@/components/shell";
import { pageMetadata } from "@/content/seo";
import { site } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  lang: "es",
  title: `${site.name} — I can make it happen and I will.`,
  description:
    "Francisco Basigalup, estudiante de Sistemas en Argentina, busca pasantías en ingeniería de software. Proyectos web, móviles y embebidos con código, tests y estado real. I can make it happen and I will.",
  en: "/",
  es: "/es/",
});

export default function Page() {
  return (
    <Shell lang="es" altHref="/">
      <Home lang="es" />
    </Shell>
  );
}
