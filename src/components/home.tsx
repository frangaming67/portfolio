import Image from "next/image";
import Link from "next/link";
import { projects, skills, stats } from "@/content/projects";
import { site } from "@/content/site";
import type { Lang, Project } from "@/content/types";
import { categoryLabel, projectHref, ui } from "@/content/ui";
import { Frame } from "./frame";
import { ArrowRight, GitHub, LinkedIn, Lock, Mail, Users } from "./icons";
import { ProjectGrid, type ProjectCard } from "./project-grid";
import { ButtonLink, Chip, Container, SectionHeading, StatusBadge } from "./ui";

export function Home({ lang }: { lang: Lang }) {
  const featured = projects.filter((p) => p.featured);
  return (
    <>
      <Hero lang={lang} />
      <Proof lang={lang} />
      <section id="work" aria-labelledby="work-title" className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            id="work-title"
            kicker={ui(lang).featured.kicker}
            title={ui(lang).featured.title}
          />
          <div className="space-y-6 sm:space-y-8">
            {featured.map((p, i) => (
              <FeaturedCard key={p.slug} project={p} lang={lang} flip={i % 2 === 1} priority={i === 0} />
            ))}
          </div>
        </Container>
      </section>
      <section
        id="projects"
        aria-labelledby="projects-title"
        className="border-t border-line bg-bg-subtle py-24 sm:py-32"
      >
        <Container>
          <SectionHeading
            id="projects-title"
            kicker={ui(lang).all.kicker}
            title={ui(lang).all.title}
            subtitle={ui(lang).all.subtitle}
          />
          <ProjectGrid projects={projects.map(toCard)} lang={lang} />
        </Container>
      </section>
      <Build lang={lang} />
      <Skills lang={lang} />
      <About lang={lang} />
      <Motto lang={lang} />
      <Contact lang={lang} />
    </>
  );
}

/** The grid is a client component: send it only what a card shows. */
function toCard({ slug, name, year, status, categories, collaboration, repo, stack, accent, tagline }: Project): ProjectCard {
  return { slug, name, year, status, categories, collaboration, repo, stack: stack.slice(0, 4), accent, tagline };
}

function Hero({ lang }: { lang: Lang }) {
  const t = ui(lang);
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 mx-auto h-[620px] max-w-5xl opacity-60 blur-3xl dark:opacity-40"
        style={{
          background:
            "radial-gradient(40% 50% at 25% 40%, var(--grad-from), transparent 70%), radial-gradient(35% 45% at 70% 35%, var(--grad-via), transparent 70%), radial-gradient(30% 40% at 55% 75%, var(--grad-to), transparent 70%)",
          maskImage: "linear-gradient(to bottom, black 30%, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent 85%)",
        }}
      />
      <Container className="pb-20 pt-20 sm:pb-28 sm:pt-32">
        <p className="rise mb-6 text-[13px] font-medium text-fg-muted sm:text-sm">{t.hero.eyebrow}</p>
        <h1 lang="en" className="text-[clamp(3.1rem,10vw,8rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
          <span className="rise block text-balance">{t.hero.line1}</span>
          <span className="rise block pb-[0.08em] [animation-delay:180ms]">
            <span className="text-gradient">{t.hero.line2}</span>
          </span>
        </h1>
        <p className="rise mt-8 max-w-2xl text-lg leading-relaxed text-fg-muted [animation-delay:320ms] sm:text-xl">
          {t.hero.intro}
        </p>
        <div className="rise mt-10 flex flex-wrap items-center gap-3 [animation-delay:440ms]">
          <ButtonLink href="#work">
            {t.hero.ctaWork}
            <ArrowRight width={16} height={16} />
          </ButtonLink>
          <ButtonLink href={site.github} variant="secondary" external>
            <GitHub width={16} height={16} />
            GitHub
          </ButtonLink>
          {site.linkedin && (
            <ButtonLink href={site.linkedin} variant="secondary" external>
              <LinkedIn width={16} height={16} />
              LinkedIn
            </ButtonLink>
          )}
          {site.resume[lang] && (
            <ButtonLink href={site.resume[lang]} variant="secondary" external>
              {t.contact.resume}
            </ButtonLink>
          )}
          {site.email && (
            <ButtonLink href={`mailto:${site.email}`} variant="secondary">
              <Mail width={16} height={16} />
              {t.contact.email}
            </ButtonLink>
          )}
        </div>
      </Container>
    </section>
  );
}

function Proof({ lang }: { lang: Lang }) {
  const t = ui(lang);
  const items = [
    { value: String(stats.repos), label: t.proof.repos },
    { value: String(stats.liveDemos), label: t.proof.demos },
    { value: stats.tests, label: t.proof.tests },
    { value: String(stats.adrs), label: t.proof.adrs },
  ];
  return (
    <section aria-label={t.proof.label} className="border-y border-line">
      <Container>
        <dl className="grid grid-cols-2 divide-line md:grid-cols-4 md:divide-x">
          {items.map((it) => (
            <div key={it.label} data-reveal className="flex flex-col px-1 py-8 md:px-8 md:first:pl-0">
              <dt className="order-2 mt-1 text-[13px] text-fg-muted">{it.label}</dt>
              <dd className="order-1 text-4xl font-semibold tracking-tight sm:text-5xl">{it.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function FeaturedCard({
  project: p,
  lang,
  flip,
  priority,
}: {
  project: Project;
  lang: Lang;
  flip: boolean;
  priority: boolean;
}) {
  const t = ui(lang);
  return (
    <article
      data-reveal
      className="relative overflow-hidden rounded-[2rem] border border-line bg-bg-subtle"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-24 size-[460px] rounded-full opacity-25 blur-3xl dark:opacity-20"
        style={{ background: p.accent }}
      />
      <div className="relative grid items-center gap-10 p-7 sm:p-12 lg:grid-cols-2 lg:gap-14 lg:p-16">
        <div className={flip ? "lg:order-2" : ""}>
          <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-fg-muted">
              <span aria-hidden className="size-2 rounded-full" style={{ background: p.accent }} />
              {p.categories.map((c) => categoryLabel[c][lang]).join(" · ")}
            </span>
            <StatusBadge status={p.status} lang={lang} />
          </div>
          <h3 className="text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">{p.name}</h3>
          <p className="mt-4 text-xl leading-snug text-fg sm:text-2xl">{p.tagline[lang]}</p>
          <p className="mt-5 leading-relaxed text-fg-muted">{p.solution[lang]}</p>
          {p.collaboration && (
            <p className="mt-5 flex items-start gap-2.5 rounded-2xl border border-line bg-bg-elevated p-4 text-[14px] leading-relaxed text-fg-muted">
              <Users width={17} height={17} className="mt-0.5 shrink-0 text-fg" />
              <span>
                <span className="font-medium text-fg">
                  {t.project.teamWith} {p.collaboration.owner}.
                </span>{" "}
                {p.collaboration.share[lang]}
              </span>
            </p>
          )}
          <ul className="mt-6 flex flex-wrap gap-2" aria-label={t.project.stack}>
            {p.stack.slice(0, 6).map((s) => (
              <li key={s}>
                <Chip>{s}</Chip>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href={projectHref(lang, p.slug)}
              className="group inline-flex items-center gap-2 text-[15px] font-medium text-accent"
            >
              {t.featured.caseStudy}
              <ArrowRight width={16} height={16} className="transition group-hover:translate-x-0.5" />
            </Link>
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-fg-muted hover:text-fg">
                {t.project.demo}
              </a>
            )}
            {p.repo.private ? (
              <span className="inline-flex items-center gap-1.5 text-[13px] text-fg-faint">
                <Lock width={14} height={14} />
                {t.project.privateRepo}
              </span>
            ) : (
              <a href={p.repo.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[15px] font-medium text-fg-muted hover:text-fg">
                <GitHub width={15} height={15} />
                {t.project.repo}
              </a>
            )}
          </div>
        </div>
        {p.cover && (
          <div className={flip ? "lg:order-1" : ""}>
            <Frame media={p.cover} lang={lang} priority={priority} />
          </div>
        )}
      </div>
    </article>
  );
}

function Build({ lang }: { lang: Lang }) {
  const t = ui(lang);
  return (
    <section aria-labelledby="build-title" className="py-24 sm:py-32">
      <Container>
        <SectionHeading id="build-title" kicker={t.build.kicker} title={t.build.title} subtitle={t.build.body} />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.build.principles.map((p, i) => (
            <li key={p.title} data-reveal className="rounded-3xl border border-line bg-bg-elevated p-6">
              <span className="font-mono text-[13px] text-fg-faint">0{i + 1}</span>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">{p.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Skills({ lang }: { lang: Lang }) {
  const t = ui(lang);
  return (
    <section aria-labelledby="skills-title" className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading id="skills-title" kicker={t.skills.kicker} title={t.skills.title} />
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.title.en} data-reveal>
              <h3 className="mb-4 border-b border-line pb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-fg-muted">
                {group.title[lang]}
              </h3>
              <ul className="space-y-2 text-[17px]">
                {group.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function About({ lang }: { lang: Lang }) {
  const t = ui(lang);
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div data-reveal>
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">{t.about.kicker}</p>
          <h2 id="about-title" className="text-[clamp(2rem,4.6vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
            {t.about.title}
          </h2>
          <Image
            src="/francisco.webp"
            alt={site.name}
            width={800}
            height={800}
            sizes="(min-width: 1024px) 340px, 280px"
            className="mt-10 aspect-square w-full max-w-[280px] rounded-3xl object-cover lg:max-w-[340px]"
          />
        </div>
        <div data-reveal className="space-y-6 text-lg leading-relaxed text-fg-muted">
          {t.about.body.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Motto({ lang }: { lang: Lang }) {
  const t = ui(lang);
  return (
    <section aria-label={t.motto.kicker} className="relative overflow-hidden bg-black py-28 text-white sm:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(30% 50% at 20% 50%, #3d8bff, transparent 70%), radial-gradient(30% 50% at 80% 50%, #ff5c95, transparent 70%)",
        }}
      />
      <Container className="relative text-center">
        <p data-reveal className="mb-8 text-[13px] font-semibold uppercase tracking-[0.2em] text-white/60">
          {t.motto.kicker}
        </p>
        <blockquote data-reveal lang="en">
          <p className="mx-auto max-w-5xl text-[clamp(2.6rem,8vw,6.5rem)] font-semibold uppercase leading-[0.95] tracking-[-0.04em]">
            {t.hero.line1} <span className="text-gradient">{t.hero.line2}</span>
          </p>
          <footer className="mt-10 text-[15px] text-white/60">— {t.motto.sign}</footer>
        </blockquote>
      </Container>
    </section>
  );
}

function Contact({ lang }: { lang: Lang }) {
  const t = ui(lang);
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-24 sm:py-36">
      <Container className="text-center">
        <p data-reveal className="mb-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-accent">
          {t.contact.kicker}
        </p>
        <h2
          id="contact-title"
          data-reveal
          className="mx-auto max-w-3xl text-[clamp(2.2rem,5.5vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.04em]"
        >
          {t.contact.title}
        </h2>
        <p data-reveal className="mx-auto mt-5 max-w-xl text-lg text-fg-muted">
          {t.contact.body}
        </p>
        <div data-reveal className="mt-10 flex flex-wrap justify-center gap-3">
          {site.email && (
            <ButtonLink href={`mailto:${site.email}`}>
              <Mail width={16} height={16} />
              {t.contact.email}
            </ButtonLink>
          )}
          {site.linkedin && (
            <ButtonLink href={site.linkedin} variant={site.email ? "secondary" : "primary"} external>
              <LinkedIn width={16} height={16} />
              {t.contact.linkedin}
            </ButtonLink>
          )}
          <ButtonLink href={site.github} variant={site.email || site.linkedin ? "secondary" : "primary"} external>
            <GitHub width={16} height={16} />
            {t.contact.github}
          </ButtonLink>
          {site.resume[lang] && (
            <ButtonLink href={site.resume[lang]} variant="secondary" external>
              {t.contact.resume}
            </ButtonLink>
          )}
        </div>
      </Container>
    </section>
  );
}
