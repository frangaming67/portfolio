import type { ReactNode } from "react";
import { site } from "@/content/site";
import type { Lang } from "@/content/types";
import { ui } from "@/content/ui";
import { Contact } from "./home";
import { Nav } from "./nav";

/**
 * Page chrome shared by every route. `altHref` is this page in the other
 * language. The home page draws its own navigation in the hero (`home`).
 * Every page closes on warm grey: the contact field, then the name again.
 */
export function Shell({
  lang,
  altHref,
  home = false,
  children,
}: {
  lang: Lang;
  altHref: string;
  home?: boolean;
  children: ReactNode;
}) {
  const t = ui(lang);
  const [first, last] = site.name.split(" ");
  return (
    <div id="top" lang={lang}>
      <a href="#main" className="skip">{t.nav.skip}</a>
      {!home && <Nav lang={lang} altHref={altHref} />}
      <main id="main">{children}</main>
      <div className="close">
        <Contact lang={lang} />
        <footer className="foot">
          <p className="foot__motto" lang="en" data-reveal>
            <span>{t.footer.motto1}</span>
            <span>{t.footer.motto2}</span>
          </p>
          <p className="name foot__name" aria-label={site.name}>
            <span className="line"><span>{first}</span></span>{" "}
            <span className="line"><span>{last}</span></span>
          </p>
          <div className="foot__line">
            <p style={{ margin: 0 }}>
              © {new Date().getFullYear()} {site.name}. {t.footer.built}
            </p>
            <a href="#top" className="link no-print">{t.footer.top}</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
