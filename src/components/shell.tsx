import type { ReactNode } from "react";
import { site } from "@/content/site";
import type { Lang } from "@/content/types";
import { ui } from "@/content/ui";
import { Nav } from "./nav";
import { Container } from "./ui";

/** Page chrome shared by every route. `altHref` is this page in the other language. */
export function Shell({
  lang,
  altHref,
  children,
}: {
  lang: Lang;
  altHref: string;
  children: ReactNode;
}) {
  const t = ui(lang);
  return (
    <div id="top" lang={lang} className="flex min-h-full flex-col">
      <Nav lang={lang} altHref={altHref} />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-line">
        <Container className="flex flex-col gap-3 py-8 text-[13px] text-fg-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {t.footer.built}
          </p>
          <a href="#top" className="no-print hover:text-fg">
            {t.footer.top} ↑
          </a>
        </Container>
      </footer>
    </div>
  );
}
