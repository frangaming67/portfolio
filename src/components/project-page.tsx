import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";
import type { Lang, Media, Project } from "@/content/types";
import { homeHref, projectHref, statusLabel, ui } from "@/content/ui";

export function ProjectPage({ project: p, lang }: { project: Project; lang: Lang }) {
  const t = ui(lang);
  const index = projects.findIndex((x) => x.slug === p.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  // Phone screenshots read best as a swipeable row; any other cover leads the
  // page on its own and the remaining wide images form a gallery at the end.
  const phoneCover = p.cover?.frame === "phone";
  const allPhones = [...(phoneCover && p.cover ? [p.cover] : []), ...p.gallery.filter((m) => m.frame === "phone")];
  // A single phone screenshot does not make a row; it joins the gallery instead.
  const phones = allPhones.length > 1 ? allPhones : [];
  const cover = phoneCover ? undefined : p.cover;
  const wide = [...p.gallery.filter((m) => m.frame !== "phone"), ...(allPhones.length === 1 && !phoneCover ? allPhones : [])];

  return (
    <article>
      <header className="case__head">
        <h1 className="case__title">{p.name}</h1>
        <p className="case__tagline lead">{p.tagline[lang]}</p>

        <dl className="case__meta">
          <div>
            <dt>{t.project.year}</dt>
            <dd>{p.year}</dd>
          </div>
          <div>
            <dt>{t.project.status}</dt>
            <dd>{statusLabel[p.status][lang]}</dd>
          </div>
          <div className="wide">
            <dt>{t.project.stack}</dt>
            <dd>{p.stack.join(", ")}</dd>
          </div>
        </dl>

        <div className="case__actions">
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn">
              {t.project.demo} ↗
            </a>
          )}
          {p.repo.private ? (
            <span className="muted">
              {t.project.privateRepo}. {t.project.privateNote}
            </span>
          ) : (
            <a href={p.repo.url} target="_blank" rel="noopener noreferrer" className={p.demo ? "link" : "btn"}>
              {t.project.repo}
            </a>
          )}
        </div>

        {p.collaboration && (
          <p className="case__team">
            {t.project.teamWith}{" "}
            <a href={p.collaboration.ownerUrl} target="_blank" rel="noopener noreferrer" className="link">
              {p.collaboration.owner}
            </a>
            . {p.collaboration.share[lang]}
          </p>
        )}
      </header>

      {cover && (
        <figure className="case__cover">
          <a href={cover.src} target="_blank" rel="noopener noreferrer" aria-label={`${t.project.openFull}: ${cover.alt[lang]}`}>
            <Picture media={cover} lang={lang} priority sizes="100vw" />
          </a>
          <figcaption>{cover.alt[lang]}</figcaption>
        </figure>
      )}

      {phones.length > 0 && (
        <div className="case__phones" aria-label={t.project.gallery}>
          {phones.map((m, i) => (
            <Picture key={m.src} media={m} lang={lang} priority={i < 2} sizes="320px" />
          ))}
        </div>
      )}

      <div className="case__body">
        <div className="case__left">
          <Block title={t.project.problem}>{p.problem[lang]}</Block>
          <Block title={t.project.role}>{p.role[lang]}</Block>
          <List title={t.project.facts} items={p.facts[lang]} />
        </div>
        <div className="case__right">
          <Block title={t.project.solution}>{p.solution[lang]}</Block>
          <List title={t.project.highlights} items={p.highlights[lang]} />
          <List title={t.project.decisions} items={p.decisions[lang]} />
          {p.next && <Block title={t.project.next}>{p.next[lang]}</Block>}
        </div>
      </div>

      {wide.length > 0 && (
        <section aria-label={t.project.gallery} className="case__gallery">
          {wide.map((m, i) => (
            <figure key={m.src} data-reveal className={wide.length % 2 === 1 && i === 0 ? "span2" : ""}>
              <Picture media={m} lang={lang} sizes="(min-width: 768px) 50vw, 100vw" />
              <figcaption>{m.alt[lang]}</figcaption>
            </figure>
          ))}
        </section>
      )}

      <nav aria-label={lang === "en" ? "More projects" : "Más proyectos"} className="case__pager">
        <Link href={`${homeHref(lang)}#work`} className="pager__all link">
          {t.project.back}
        </Link>
        <Link href={projectHref(lang, prev.slug)}>
          <span className="pager__label">← {t.project.prev}</span>
          <span className="pager__name">{prev.name}</span>
        </Link>
        <Link href={projectHref(lang, next.slug)} style={{ textAlign: "right" }}>
          <span className="pager__label">{t.project.nextProject} →</span>
          <span className="pager__name">{next.name}</span>
        </Link>
      </nav>
    </article>
  );
}

function Picture({ media, lang, priority = false, sizes }: { media: Media; lang: Lang; priority?: boolean; sizes: string }) {
  return (
    <Image
      src={media.src}
      alt={media.alt[lang]}
      width={media.width}
      height={media.height}
      priority={priority}
      sizes={sizes}
    />
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="case__block" data-reveal>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <section className="case__block" data-reveal>
      <h2>{title}</h2>
      <ul>
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </section>
  );
}
