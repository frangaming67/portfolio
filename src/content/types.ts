export type Lang = "en" | "es";

/** A string written in both languages. */
export type L = { en: string; es: string };
/** A list written in both languages. */
export type LList = { en: string[]; es: string[] };

export type ProjectStatus =
  | "live-demo"
  | "working-prototype"
  | "in-progress"
  | "early-stage";

export type Category = "mobile" | "web" | "hardware" | "accessibility" | "game";

export type Media = {
  src: string;
  alt: L;
  width: number;
  height: number;
  /** How to present the image: inside a phone, a browser window, or bare. */
  frame: "phone" | "browser" | "none";
};

export type Project = {
  slug: string;
  name: string;
  year: string;
  status: ProjectStatus;
  categories: Category[];
  /** Featured projects get a full case-study card on the home page. */
  featured: boolean;
  /** Collaborations credit the owner and state Francisco's exact share. */
  collaboration?: { owner: string; ownerUrl: string; share: L };
  repo: { url: string; private: boolean };
  demo?: string;
  stack: string[];
  /** Accent used for the project's glow and highlights. */
  accent: string;
  tagline: L;
  problem: L;
  solution: L;
  role: L;
  highlights: LList;
  decisions: LList;
  facts: LList;
  next?: L;
  cover?: Media;
  gallery: Media[];
};
