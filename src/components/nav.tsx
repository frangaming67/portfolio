import Link from "next/link";
import { site } from "@/content/site";
import type { Lang } from "@/content/types";
import { homeHref, ui } from "@/content/ui";

export function Nav({ lang, altHref }: { lang: Lang; altHref: string }) {
  const t = ui(lang);
  const home = homeHref(lang);
  const links = [
    { href: `${home}#work`, label: t.nav.work },
    { href: `${home}#projects`, label: t.nav.all },
    { href: `${home}#about`, label: t.nav.about },
    { href: `${home}#contact`, label: t.nav.contact },
  ];

  return (
    <header className="no-print sticky top-0 z-50 border-b border-line bg-[var(--nav-bg)] backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href={home}
          className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight"
        >
          <span
            aria-hidden
            className="grid size-7 place-items-center rounded-lg bg-fg text-[11px] font-bold tracking-tight text-bg"
          >
            {site.initials}
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>

        <div className="flex items-center gap-1 text-[13px] text-fg-muted">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3 py-1.5 transition-colors hover:text-fg"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`${home}#contact`}
            className="rounded-full px-3 py-1.5 transition-colors hover:text-fg md:hidden"
          >
            {t.nav.contact}
          </a>
          <Link
            href={altHref}
            hrefLang={lang === "en" ? "es" : "en"}
            lang={lang === "en" ? "es" : "en"}
            className="ml-1 rounded-full border border-line px-3 py-1 text-[12px] font-medium text-fg transition-colors hover:bg-bg-subtle"
          >
            {lang === "en" ? "ES" : "EN"}
            <span className="sr-only">{lang === "en" ? " · Español" : " · English"}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
