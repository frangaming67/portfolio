import Image from "next/image";
import Link from "next/link";
import { languages, projects, testCounts, tools } from "@/content/projects";
import { site } from "@/content/site";
import type { Lang } from "@/content/types";
import { projectHref, statusLabel, ui } from "@/content/ui";
import { ContactForm } from "./contact-form";
import { RunFrame } from "./run-frame";

const MAIN = "franco-lorenzi-web";

export function Home({ lang, altHref }: { lang: Lang; altHref: string }) {
  return (
    <>
      <Hero lang={lang} altHref={altHref} />
      <Showcase lang={lang} />
      <Work lang={lang} />
      <Tools lang={lang} />
      <Proof lang={lang} />
      <About lang={lang} />
    </>
  );
}

function Hero({ lang, altHref }: { lang: Lang; altHref: string }) {
  const t = ui(lang);
  const [first, last] = site.name.split(" ");

  return (
    <header className="hero">
      <div className="hero__top">
        <div className="fade-in" style={{ ["--i" as string]: 0 }}>
          <p className="hero__intro">{t.hero.intro}</p>
          <a href="#run" data-run className="btn hero__run" style={{ marginTop: "1.25rem" }}>
            {t.hero.run}
          </a>
        </div>
        <nav aria-label={lang === "en" ? "Main" : "Principal"} className="hero__nav fade-in" style={{ ["--i" as string]: 1 }}>
          <a className="link-plain" href="#work">{t.nav.work}</a>
          <a className="link-plain" href="#about">{t.nav.about}</a>
          <a className="link-plain" href="#contact">{t.nav.contact}</a>
          <Link
            className="link-plain"
            href={altHref}
            hrefLang={lang === "en" ? "es" : "en"}
            lang={lang === "en" ? "es" : "en"}
          >
            {lang === "en" ? "Español" : "English"}
          </Link>
        </nav>
      </div>
      <div className="hero__middle">
        <h1 className="name">
          <span className="line"><span data-line style={{ ["--i" as string]: 0 }}>{first}</span></span>{" "}
          <span className="line"><span data-line style={{ ["--i" as string]: 1 }}>{last}</span></span>
        </h1>
      </div>
      <div className="hero__bottom fade-in" style={{ ["--i" as string]: 2 }}>
        <p style={{ margin: 0 }}>{t.hero.place}</p>
        <p className="hero__links" style={{ margin: 0 }}>
          <a className="link" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="link" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="link" href={site.resume[lang]} target="_blank" rel="noopener noreferrer">{t.contact.resume}</a>
        </p>
      </div>
      <a className="hero__phone" href="#run" data-run aria-label={t.hero.run}>
        <Image src="/projects/franco-lorenzi-web/aerial.webp" alt="" width={780} height={600} sizes="100vw" priority />
      </a>
    </header>
  );
}

function Showcase({ lang }: { lang: Lang }) {
  const t = ui(lang);
  const p = projects.find((x) => x.slug === MAIN);
  if (!p || !p.cover || !p.demo) return null;
  const wide = [p.cover, ...p.gallery.filter((m) => m.frame !== "phone")];
  const shots = wide.map((m, i) => ({
    src: m.src,
    width: m.width,
    height: m.height,
    alt: m.alt[lang],
    name: t.showcase.frames[i]?.name ?? "",
    fact: t.showcase.frames[i]?.fact ?? "",
  }));
  const [lead, ...strip] = shots;
  return (
    <section id="run" aria-labelledby="run-title" className="feature">
      <div className="feature__top">
        <RunFrame
          shot={lead}
          demo={p.demo}
          labels={{ run: t.showcase.run, stop: t.showcase.stop, title: t.showcase.frameTitle }}
        />
        <div className="feature__text">
          <h2 id="run-title" className="feature__name" data-reveal>{p.name}</h2>
          <p className="feature__status" data-reveal style={{ ["--i" as string]: 1 }}>{t.showcase.latest}</p>
          <p className="lead feature__lede" data-reveal style={{ ["--i" as string]: 2 }}>{t.showcase.lede}</p>
          <ul className="feature__points" data-reveal style={{ ["--i" as string]: 3 }}>
            {t.showcase.points.map((x) => <li key={x}>{x}</li>)}
          </ul>
          <p className="feature__stack muted" data-reveal style={{ ["--i" as string]: 4 }}>{p.stack.join(" · ")}</p>
          <div className="feature__actions" data-reveal style={{ ["--i" as string]: 5 }}>
            <a className="btn" href={p.demo} target="_blank" rel="noopener noreferrer">{t.showcase.open} ↗</a>
            <Link className="link" href={projectHref(lang, p.slug)}>{t.showcase.caseStudy}</Link>
          </div>
        </div>
      </div>
      <ul className="feature__strip">
        {strip.map((f, i) => (
          <li key={f.src} data-reveal style={{ ["--i" as string]: i }}>
            <figure>
              <div className="plate">
                <Image src={f.src} alt={f.alt} width={f.width} height={f.height} sizes="(min-width: 1024px) 25vw, 50vw" />
              </div>
              <figcaption>
                <span className="strip__name">{f.name}</span>
                <span className="muted">{f.fact}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Work({ lang }: { lang: Lang }) {
  const t = ui(lang);
  const rest = projects.filter((p) => p.slug !== MAIN);
  const big = rest.filter((p) => p.cover);
  const small = rest.filter((p) => !p.cover);
  return (
    <section id="work" aria-labelledby="work-title" className="work">
      <div className="work__head">
        <h2 id="work-title" className="head" data-reveal>{t.work.title}</h2>
        <p className="lead work__lede" data-reveal style={{ ["--i" as string]: 1 }}>{t.work.lede}</p>
      </div>
      <div className="work__list">
        {big.map((p, i) => {
          const phones = p.cover?.frame === "phone" ? [p.cover, ...p.gallery.filter((m) => m.frame === "phone")].slice(0, 3) : [];
          return (
            <article key={p.slug} className={`proj${i % 2 ? " proj--flip" : ""}`} aria-labelledby={`p-${p.slug}`}>
              <Link href={projectHref(lang, p.slug)} className="proj__media plate" data-reveal tabIndex={-1} aria-hidden>
                {phones.length > 0 ? (
                  <span className="proj__phones">
                    {phones.map((m) => (
                      <Image key={m.src} src={m.src} alt="" width={m.width} height={m.height} sizes="15vw" />
                    ))}
                  </span>
                ) : (
                  p.cover && <Image src={p.cover.src} alt="" width={p.cover.width} height={p.cover.height} sizes="(min-width: 1024px) 55vw, 100vw" />
                )}
              </Link>
              <div className="proj__text" data-reveal style={{ ["--i" as string]: 1 }}>
                <h3 id={`p-${p.slug}`} className="proj__name">
                  <Link href={projectHref(lang, p.slug)} className="link-plain">{p.name}</Link>
                </h3>
                <p className="proj__meta">
                  {p.kind[lang]} · {statusLabel[p.status][lang]} · {p.year}
                </p>
                <p className="proj__tagline">{p.tagline[lang]}</p>
                {p.collaboration && (
                  <p className="proj__team muted">
                    {lang === "en" ? "Team project with" : "Proyecto en equipo con"} {p.collaboration.owner}. {p.collaboration.share[lang]}
                  </p>
                )}
                <ul className="proj__facts">
                  {p.facts[lang].slice(0, 3).map((f) => <li key={f}>{f}</li>)}
                </ul>
                <p className="proj__stack muted">{p.stack.join(" · ")}</p>
                <p className="proj__links">
                  <Link className="btn btn--ink" href={projectHref(lang, p.slug)}>{t.work.caseStudy}</Link>
                  {p.demo && <a className="link" href={p.demo} target="_blank" rel="noopener noreferrer">{t.work.demo} ↗</a>}
                  {p.repo.private
                    ? <span className="muted">{t.work.private}</span>
                    : <a className="link" href={p.repo.url} target="_blank" rel="noopener noreferrer">{t.work.code} ↗</a>}
                </p>
              </div>
            </article>
          );
        })}
      </div>
      {small.length > 0 && (
        <div className="work__small">
          <h3 className="work__smallTitle" data-reveal>{t.work.smaller}</h3>
          <ul>
            {small.map((p, i) => (
              <li key={p.slug} data-reveal style={{ ["--i" as string]: i }}>
                <Link href={projectHref(lang, p.slug)} className="small-proj">
                  <span className="small-proj__name">{p.name}</span>
                  <span className="small-proj__meta muted">{p.kind[lang]} · {statusLabel[p.status][lang]} · {p.year}</span>
                  <span className="small-proj__tagline">{p.tagline[lang]}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

function Tools({ lang }: { lang: Lang }) {
  const t = ui(lang);
  return (
    <section aria-labelledby="tools-title" className="poster">
      <h2 id="tools-title" className="head" data-reveal>{t.tools.title}</h2>
      <ul className="poster__list">
        {languages.map((l, i) => (
          <li key={l.name} className="poster__item" data-reveal style={{ ["--i" as string]: i % 3 }}>
            <span className="poster__word">{l.name}</span>
            <span className="poster__where">{l.where.join(", ")}</span>
          </li>
        ))}
      </ul>
      <p className="poster__also" data-reveal>
        {t.tools.also}: {tools.join(", ")}.
      </p>
    </section>
  );
}

function Proof({ lang }: { lang: Lang }) {
  const t = ui(lang);
  const total = testCounts.reduce((n, x) => n + x.count, 0);
  return (
    <section aria-labelledby="proof-title" className="section wrap proof">
      <h2 id="proof-title" className="head" data-reveal>
        {t.proof.title}
      </h2>
      <div className="proof__bar" role="list" aria-label={`${total} ${t.proof.tests}`}>
        {testCounts.map((x, i) => (
          <div
            key={x.project}
            role="listitem"
            className="proof__seg"
            style={{ flexGrow: x.count, flexBasis: 0 }}
            data-reveal
          >
            <div className="proof__block" style={{ ["--i" as string]: i }}>
              <strong className="tabular">{x.count}</strong>
              <span>{t.proof.tests}</span>
            </div>
            <p className="small">
              <span style={{ fontWeight: 600 }}>{x.project}</span>: {x.note[lang]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About({ lang }: { lang: Lang }) {
  const t = ui(lang);
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="about__row">
        <div className="about__side">
          <h2 id="about-title" data-reveal>{t.about.title}</h2>
          <dl className="about__facts">
            {t.about.facts.map((f, i) => (
              <div key={f.label} data-reveal style={{ ["--i" as string]: i }}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="about__body" data-reveal style={{ ["--i" as string]: 1 }}>{t.about.body}</p>
      </div>
      <div className="about__row">
        <div aria-hidden />
        <div className="about__records">
          <div data-reveal>
            <h3>{t.about.certsTitle}</h3>
            <ul>
              {t.about.certs.map((c) => (
                <li key={c.name}><span>{c.name}</span><span>{c.year}</span></li>
              ))}
            </ul>
          </div>
          <div data-reveal style={{ ["--i" as string]: 1 }}>
            <h3>{t.about.eduTitle}</h3>
            <ul>
              {t.about.edu.map((c) => (
                <li key={c.name}><span>{c.name}</span><span>{c.year}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact({ lang }: { lang: Lang }) {
  const t = ui(lang);
  return (
    <section id="contact" aria-labelledby="contact-title" className="contact grid12">
      <div className="contact__col">
        <h2 id="contact-title" data-reveal>
          <span>{t.contact.title1}</span>
          <span>{t.contact.title2}</span>
        </h2>
        <ContactForm
          email={site.email}
          labels={{ label: t.contact.label, placeholder: t.contact.placeholder, send: t.contact.send, subject: t.contact.subject }}
        />
        <p className="contact__hint muted">{t.contact.hint}</p>
        <dl className="contact__rows">
          <div>
            <dt>{t.contact.email}</dt>
            <dd><a className="link" href={`mailto:${site.email}`}>{site.email}</a></dd>
          </div>
          <div>
            <dt>{t.contact.github}</dt>
            <dd><a className="link" href={site.github} target="_blank" rel="noopener noreferrer">github.com/frangaming67</a></dd>
          </div>
          <div>
            <dt>{t.contact.linkedin}</dt>
            <dd><a className="link" href={site.linkedin} target="_blank" rel="noopener noreferrer">Francisco Basigalup</a></dd>
          </div>
          <div>
            <dt>{t.contact.resume}</dt>
            <dd><a className="link" href={site.resume[lang]} target="_blank" rel="noopener noreferrer">{t.contact.resumeLink}</a></dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
