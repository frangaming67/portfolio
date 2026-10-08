import type { L } from "./types";

/**
 * Personal details shown across the site. Leave a field empty ("") to hide
 * it — the contact links and buttons only render the ones that are set.
 */
export const site = {
  name: "Francisco Basigalup",
  shortName: "Francisco",
  initials: "FB",
  motto: "Don't take my word for it. Run it.",
  location: { en: "Argentina", es: "Argentina" } satisfies L,
  // Set NEXT_PUBLIC_SITE_URL once you have a custom domain. On Vercel the
  // production URL is picked up automatically.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  github: "https://github.com/frangaming67",
  linkedin: "https://www.linkedin.com/in/francisco-basigalup-a57021307/",
  email: "panchobasigalupdominguez@gmail.com",
  resume: {
    en: "/resume-francisco-basigalup-en.pdf",
    es: "/cv-francisco-basigalup-es.pdf",
  } satisfies L,
};
