import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectPage } from "@/components/project-page";
import { Shell } from "@/components/shell";
import { projects } from "@/content/projects";
import { pageMetadata } from "@/content/seo";
import { site } from "@/content/site";
import { projectHref } from "@/content/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/es/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.name,
    ...pageMetadata({
      lang: "es",
      title: `${p.name} · ${site.name}`,
      description: p.tagline.es,
      en: projectHref("en", p.slug),
      es: projectHref("es", p.slug),
    }),
  };
}

export default async function Page({ params }: PageProps<"/es/projects/[slug]">) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return (
    <Shell lang="es" altHref={projectHref("en", project.slug)}>
      <ProjectPage project={project} lang="es" />
    </Shell>
  );
}
