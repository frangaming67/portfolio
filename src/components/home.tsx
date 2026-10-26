import Image from "next/image";
import Link from "next/link";
import { languages, projects, testCounts, tools } from "@/content/projects";
import { site } from "@/content/site";
import type { Lang } from "@/content/types";
import { projectHref, ui } from "@/content/ui";
import { ContactForm } from "./contact-form";
import { Ledger, type LedgerRow } from "./ledger";
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
  const shots = [p.cover, ...p.gallery];
  const frames = shots.map((m, i) => ({
    src: m.src,
    width: m.width,
    height: m.height,
    alt: m.alt[lang],
    name: t.showcase.frames[i]?.name ?? "",
    fact: t.showcase.frames[i]?.fact ?? "",
  }));
  return (
    <section id="run" aria-labelledby="run-title" className="show">
      <div className="show__grid">
        <div className="show__side">
          <h2 id="run-title" data-reveal>{p.name}</h2>
          <p className="show__lede" data-reveal style={{ ["--i" as string]: 1 }}>{t.showcase.lede}</p>
          <div className="show__actions" data-reveal style={{ ["--i" as string]: 2 }}>
            <a className="link" href={p.demo} target="_blank" rel="noopener noreferrer">{t.showcase.open}</a>
            <Link className="link" href={projectHref(lang, p.slug)}>{t.showcase.caseStudy}</Link>
          </div>
          <div className="show__notes">
            {t.showcase.notes.map((n, i) => (
              <p key={n} data-reveal style={{ ["--i" as string]: i }}>{n}</p>
            ))}
          </div>
        </div>
        <RunFrame
          frames={frames}
          demo={p.demo}
          labels={{ run: t.showcase.run, stop: t.showcase.stop, title: t.showcase.frameTitle }}
        />
      </div>
    </section>
  );
}

function Work({ lang }: { lang: Lang }) {
  const t = ui(lang);
  const rows: LedgerRow[] = projects.map((p) => ({
    slug: p.slug,
    href: projectHref(lang, p.slug),
    name: p.name,
    kind: [p.kind[lang], p.demo ? t.work.live : null, p.collaboration ? t.work.team : null].filter(Boolean).join(" · "),
    year: p.year,
    image: p.cover ? { src: p.cover.src, width: p.cover.width, height: p.cover.height } : undefined,
  }));
  return (
    <section id="work" aria-labelledby="work-title" className="section">
      <Ledger rows={rows} title={t.work.title} />
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
