import Link from "next/link";
import { projects } from "@/content/projects";
import type { Lang, Project } from "@/content/types";
import { categoryLabel, homeHref, projectHref, ui } from "@/content/ui";
import { Frame } from "./frame";
import { ArrowLeft, ArrowRight, ArrowUpRight, GitHub, Lock, Users } from "./icons";
import { Container, StatusBadge } from "./ui";

export function ProjectPage({ project: p, lang }: { project: Project; lang: Lang }) {
  const t = ui(lang);
  const index = projects.findIndex((x) => x.slug === p.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  // Phone screenshots read best as a swipeable row; any other cover leads the
  // page on its own and the remaining images form a gallery at the end.
  const phoneCover = p.cover?.frame === "phone";
  const phones = [...(phoneCover && p.cover ? [p.cover] : []), ...p.gallery.filter((m) => m.frame === "phone")];
  const hero = phoneCover ? undefined : p.cover;
  const wide = p.gallery.filter((m) => m.frame !== "phone");

  return (
    <article>
      <header className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-48 left-1/2 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-25 blur-3xl dark:opacity-20"
          style={{ background: p.accent }}
        />
        <Container className="pb-16 pt-10 sm:pb-20 sm:pt-14">
          <Link
            href={`${homeHref(lang)}#projects`}
            className="mb-12 inline-flex items-center gap-1.5 text-[14px] text-fg-muted hover:text-fg"
          >
            <ArrowLeft width={15} height={15} />
            {t.project.back}
          </Link>
          <p className="rise mb-4 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-fg-muted">
            <span aria-hidden className="size-2 rounded-full" style={{ background: p.accent }} />
            {p.categories.map((c) => categoryLabel[c][lang]).join(" · ")}
          </p>
          <h1 className="rise text-[clamp(2.8rem,8vw,6rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
            {p.name}
          </h1>
          <p className="rise mt-6 max-w-3xl text-xl leading-snug text-fg-muted [animation-delay:150ms] sm:text-2xl">
            {p.tagline[lang]}
          </p>

          <dl className="rise mt-12 grid gap-6 border-t border-line pt-8 text-[14px] [animation-delay:260ms] sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="mb-1.5 text-fg-faint">{t.project.year}</dt>
              <dd className="font-medium">{p.year}</dd>
            </div>
            <div>
              <dt className="mb-1.5 text-fg-faint">{t.project.status}</dt>
              <dd>
                <StatusBadge status={p.status} lang={lang} />
              </dd>
            </div>
            <div className="lg:col-span-2">
              <dt className="mb-1.5 text-fg-faint">{t.project.stack}</dt>
              <dd className="font-medium">{p.stack.join(" · ")}</dd>
            </div>
          </dl>

          <div className="rise mt-8 flex flex-wrap items-center gap-3 [animation-delay:320ms]">
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-fg px-5 text-[15px] font-medium text-bg transition hover:opacity-85"
              >
                {t.project.demo}
                <ArrowUpRight width={16} height={16} />
              </a>
            )}
            {p.repo.private ? (
              <span className="inline-flex h-11 items-center gap-2 rounded-full border border-line px-5 text-[14px] text-fg-muted">
                <Lock width={15} height={15} />
                {t.project.privateRepo} · {t.project.privateNote}
              </span>
            ) : (
              <a
                href={p.repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex h-11 items-center gap-2 rounded-full px-5 text-[15px] font-medium transition ${
                  p.demo ? "border border-line hover:bg-bg-subtle" : "bg-fg text-bg hover:opacity-85"
                }`}
              >
                <GitHub width={16} height={16} />
                {t.project.repo}
              </a>
            )}
          </div>

          {p.collaboration && (
            <p className="mt-8 flex max-w-3xl items-start gap-2.5 rounded-2xl border border-line bg-bg-subtle p-4 text-[14px] leading-relaxed text-fg-muted">
              <Users width={17} height={17} className="mt-0.5 shrink-0 text-fg" />
              <span>
                {t.project.teamWith}{" "}
                <a href={p.collaboration.ownerUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-fg underline-offset-4 hover:underline">
                  {p.collaboration.owner}
                </a>
                . {p.collaboration.share[lang]}
              </span>
            </p>
          )}
        </Container>
      </header>

      {hero && (
        <section aria-label={t.project.gallery} className="border-b border-line bg-bg-subtle py-12 sm:py-16">
          <Container>
            <figure className="mx-auto max-w-5xl">
              <a href={hero.src} target="_blank" rel="noopener noreferrer" className="block" aria-label={`${t.project.openFull}: ${hero.alt[lang]}`}>
                <Frame media={hero} lang={lang} priority sizes="(min-width: 1024px) 1024px, 100vw" />
              </a>
              <figcaption className="mt-3 text-[13px] text-fg-muted">{hero.alt[lang]}</figcaption>
            </figure>
          </Container>
        </section>
      )}

      {phones.length > 0 && (
        <section aria-label={t.project.gallery} className="overflow-hidden border-b border-line bg-bg-subtle py-16 sm:py-20">
          <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 sm:gap-8 sm:px-8 lg:flex-wrap lg:justify-center lg:overflow-visible">
            {phones.map((m, i) => (
              <div key={m.src} className="w-[220px] shrink-0 snap-center sm:w-[250px]" data-reveal>
                <Frame media={m} lang={lang} priority={i < 3} sizes="250px" />
              </div>
            ))}
          </div>
        </section>
      )}

      <Container className="py-20 sm:py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.35fr] lg:gap-24">
          <div className="space-y-12">
            <Block title={t.project.problem}>{p.problem[lang]}</Block>
            <Block title={t.project.role}>{p.role[lang]}</Block>
            {p.facts[lang].length > 0 && (
              <section data-reveal>
                <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-fg-muted">{t.project.facts}</h2>
                <ul className="space-y-3">
                  {p.facts[lang].map((f) => (
                    <li key={f} className="border-l-2 pl-4 text-[15px] leading-relaxed" style={{ borderColor: p.accent }}>
                      {f}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
          <div className="space-y-12">
            <Block title={t.project.solution}>{p.solution[lang]}</Block>
            <List title={t.project.highlights} items={p.highlights[lang]} />
            <List title={t.project.decisions} items={p.decisions[lang]} />
            {p.next && <Block title={t.project.next}>{p.next[lang]}</Block>}
          </div>
        </div>
      </Container>

      {wide.length > 0 && (
        <section aria-label={t.project.gallery} className="border-t border-line bg-bg-subtle py-16 sm:py-24">
          <Container className="grid gap-8 md:grid-cols-2">
            {wide.map((m, i) => (
              <figure key={m.src} data-reveal className={wide.length % 2 === 1 && i === 0 ? "md:col-span-2" : ""}>
                <Frame media={m} lang={lang} sizes="(min-width: 768px) 560px, 100vw" />
                <figcaption className="mt-3 text-[13px] text-fg-muted">{m.alt[lang]}</figcaption>
              </figure>
            ))}
          </Container>
        </section>
      )}

      <nav aria-label="Projects" className="border-t border-line">
        <Container className="grid grid-cols-2 gap-4 py-10">
          <Link href={projectHref(lang, prev.slug)} className="group">
            <span className="mb-1 inline-flex items-center gap-1.5 text-[13px] text-fg-faint">
              <ArrowLeft width={14} height={14} />
              {t.project.prev}
            </span>
            <span className="block text-lg font-semibold tracking-tight group-hover:text-accent sm:text-2xl">{prev.name}</span>
          </Link>
          <Link href={projectHref(lang, next.slug)} className="group text-right">
            <span className="mb-1 inline-flex items-center gap-1.5 text-[13px] text-fg-faint">
              {t.project.nextProject}
              <ArrowRight width={14} height={14} />
            </span>
            <span className="block text-lg font-semibold tracking-tight group-hover:text-accent sm:text-2xl">{next.name}</span>
          </Link>
        </Container>
      </nav>
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section data-reveal>
      <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-fg-muted">{title}</h2>
      <p className="text-[17px] leading-relaxed">{children}</p>
    </section>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <section data-reveal>
      <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-fg-muted">{title}</h2>
      <ul className="space-y-4">
        {items.map((it) => (
          <li key={it} className="flex gap-3 text-[16px] leading-relaxed">
            <span aria-hidden className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-fg-faint" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
