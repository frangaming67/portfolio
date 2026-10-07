# Francisco Basigalup — Portfolio

> **I CAN MAKE IT HAPPEN AND I WILL.**

My personal site: every project I've built, told as honest case studies, in English (`/`) and Spanish (`/es/`).

Built with Next.js 16 (App Router, static export), React 19, TypeScript and Tailwind CSS 4. No backend, no database, no tracking: `npm run build` produces plain HTML, CSS and JS in `out/`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/
npm run lint
```

## Edit the content

All copy lives in three files, so updating the site never means touching components:

| File | What's in it |
|---|---|
| `src/content/site.ts` | Name, motto, GitHub, LinkedIn, email, resume link. Leave a field empty to hide it. |
| `src/content/projects.ts` | Every project, in both languages: tagline, problem, solution, role, highlights, decisions, facts, images. Order in the file is order on the page; `featured: true` gives a project a large card on the home page. |
| `src/content/ui.ts` | Interface text: hero, section titles, "How I build", about, contact. |

Project images live in `public/projects/<slug>/`. Prefer WebP around 1,440 px wide; phone screenshots use `frame: "phone"`, desktop screenshots `frame: "browser"`.

Every number on the site comes from the repositories themselves (commit history, file counts, CI runs). Keep it that way.

## Deploy

**Vercel (recommended):** import the repo at vercel.com and accept the defaults. The production URL is detected automatically for social-share cards. With a custom domain, set `NEXT_PUBLIC_SITE_URL=https://your-domain` in the project's environment variables.

**GitHub Pages or any static host:** build with your public URL, `NEXT_PUBLIC_SITE_URL=https://your-domain npm run build`, then upload `out/`. Without it, share cards, hreflang links and the sitemap point to `http://localhost:3000`. A GitHub Pages *project* site (served under `/repo-name/`) also needs `basePath: "/repo-name"` in `next.config.ts`; a user site (`username.github.io`) does not.

## Structure

```
src/
  app/                 routes: / and /projects/[slug] (English), /es and /es/projects/[slug] (Spanish)
  components/          home sections, case-study page, project grid, device frames
  content/             all site copy and data
public/projects/       screenshots and diagrams
```
