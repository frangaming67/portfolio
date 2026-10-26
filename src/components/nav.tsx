import Link from "next/link";
import { site } from "@/content/site";
import type { Lang } from "@/content/types";
import { homeHref, ui } from "@/content/ui";

/** A plain bar for the case-study pages: the name, three links and the other language. */
export function Nav({ lang, altHref }: { lang: Lang; altHref: string }) {
  const t = ui(lang);
  const home = homeHref(lang);
  return (
    <header className="bar no-print">
      <Link href={home} className="bar__name">
        {site.name}
      </Link>
      <nav aria-label={lang === "en" ? "Main" : "Principal"} className="bar__links">
        <a className="link-plain bar__hide" href={`${home}#work`}>{t.nav.work}</a>
        <a className="link-plain bar__hide" href={`${home}#about`}>{t.nav.about}</a>
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
    </header>
  );
}
