import type { Category, Lang, ProjectStatus } from "./types";

/** Interface copy. Project content lives in `projects.ts`. */
const strings = {
  en: {
    nav: { work: "Work", all: "All projects", about: "About", contact: "Contact" },
    hero: {
      eyebrow: "Francisco Basigalup · Information Systems student, Universidad Champagnat, Argentina · Open to SWE internships",
      line1: "I can make it happen",
      line2: "and I will.",
      intro:
        "I build complete products and care about proving they work: a booking platform whose database makes double booking impossible, a bilingual virtual receptionist live on Vercel, and most of the web app for a four-person blockchain marketplace. I work with AI coding agents; the design decisions, reviews and verification are mine.",
      ctaWork: "See my work",
    },
    proof: {
      label: "At a glance",
      repos: "projects, each with its own case study",
      demos: "live demos you can try now",
      tests: "automated tests and checks",
      adrs: "architecture decisions on record",
    },
    featured: {
      kicker: "Selected work",
      title: "Things I designed and built.",
      caseStudy: "Read the case study",
    },
    all: {
      kicker: "Everything I've built",
      title: "Every project, big and small.",
      subtitle: "From my first Java game to embedded firmware. Filter by what you care about.",
      filterAll: "All",
      filterCollab: "Team projects",
      empty: "Nothing here yet.",
    },
    skills: {
      kicker: "Toolbox",
      title: "What I build with.",
    },
    build: {
      kicker: "How I build",
      title: "AI writes code with me. The decisions and the proof are mine.",
      body: "I use AI coding agents (Claude Code, Codex) as fast pair programmers, not as a substitute for understanding. I define the product, make the architecture calls, review the changes and prove they work with tests, and every case study says openly where an agent wrote the code.",
      principles: [
        { title: "Spec first", body: "My larger projects start from written requirements and constraints. MathVoice's first rule: every feature must work without looking at the screen." },
        { title: "Decisions on paper", body: "29 Architecture Decision Records across Vega and MediTurnos, each with context, alternatives and trade-offs." },
        { title: "Proof over promises", body: "560+ automated tests and integration checks across my projects. 200 of them run in CI on every push; the rest run locally." },
        { title: "Honest about limits", body: "Every case study says what's real, what's a demo and what comes next." },
      ],
    },
    about: {
      kicker: "About",
      title: "Curious by default. Relentless by choice.",
      body: [
        "I'm Francisco, an Information Systems student at Universidad Champagnat in Mendoza, Argentina. Over the past year I kept raising the bar: a medical booking platform whose database makes double booking impossible, a virtual receptionist that captures leads after hours, a blockchain marketplace built with a team of four, an offline-first mobile app, and firmware for a tiny OLED companion.",
        "I care about the whole stack, from the schema to the interface to the microcontroller, and about proving things work. When I don't know something yet, I learn it on the way.",
      ],
    },
    motto: {
      kicker: "My motto",
      sign: "Francisco Basigalup",
    },
    contact: {
      kicker: "Contact",
      title: "Let's build something that matters.",
      body: "Open to internships and engineering roles, remote or on-site, anywhere in the world.",
      email: "Email me",
      github: "GitHub",
      linkedin: "LinkedIn",
      resume: "Resume",
    },
    project: {
      back: "All projects",
      problem: "The problem",
      solution: "The solution",
      role: "My role",
      highlights: "Highlights",
      decisions: "Engineering decisions",
      facts: "By the numbers",
      next: "What's next",
      gallery: "Gallery",
      openFull: "Open full size",
      repo: "View code",
      privateRepo: "Private repository",
      privateNote: "Code available on request.",
      demo: "Live demo",
      stack: "Stack",
      year: "Year",
      status: "Status",
      teamWith: "Team project with",
      prev: "Previous",
      nextProject: "Next",
    },
    footer: {
      built: "Built with Next.js, Tailwind CSS and an AI pair programmer.",
      top: "Back to top",
    },
  },
  es: {
    nav: { work: "Destacados", all: "Todos los proyectos", about: "Sobre mí", contact: "Contacto" },
    hero: {
      eyebrow: "Francisco Basigalup · Estudiante de Sistemas, Universidad Champagnat, Argentina · Busco pasantías en ingeniería de software",
      line1: "I can make it happen",
      line2: "and I will.",
      intro:
        "Construyo productos completos y me importa demostrar que funcionan: una plataforma de turnos cuya base de datos hace imposible el doble turno, un recepcionista virtual bilingüe online en Vercel y la mayor parte de la app web de un marketplace blockchain hecho en un equipo de cuatro. Trabajo con agentes de IA; las decisiones de diseño, las revisiones y la verificación son mías.",
      ctaWork: "Ver mi trabajo",
    },
    proof: {
      label: "En números",
      repos: "proyectos, cada uno con su caso de estudio",
      demos: "demos en vivo para probar ya",
      tests: "tests y verificaciones automáticas",
      adrs: "decisiones de arquitectura documentadas",
    },
    featured: {
      kicker: "Proyectos destacados",
      title: "Cosas que diseñé y construí.",
      caseStudy: "Leer el caso de estudio",
    },
    all: {
      kicker: "Todo lo que construí",
      title: "Todos los proyectos, grandes y chicos.",
      subtitle: "Desde mi primer juego en Java hasta firmware embebido. Filtrá por lo que te interese.",
      filterAll: "Todos",
      filterCollab: "En equipo",
      empty: "Todavía no hay nada acá.",
    },
    skills: {
      kicker: "Herramientas",
      title: "Con qué construyo.",
    },
    build: {
      kicker: "Cómo construyo",
      title: "La IA escribe código conmigo. Las decisiones y las pruebas son mías.",
      body: "Uso agentes de IA (Claude Code, Codex) como pair programmers rápidos, no como reemplazo de entender lo que hago. Defino el producto, tomo las decisiones de arquitectura, reviso los cambios y demuestro con tests que funcionan, y cada caso de estudio dice abiertamente dónde escribió el código un agente.",
      principles: [
        { title: "Primero la especificación", body: "Mis proyectos más grandes arrancan con requisitos y restricciones por escrito. La primera regla de MathVoice: cada función tiene que poder usarse sin mirar la pantalla." },
        { title: "Decisiones por escrito", body: "29 Architecture Decision Records entre Vega y MediTurnos, cada uno con contexto, alternativas y costos." },
        { title: "Pruebas, no promesas", body: "Más de 560 tests automatizados y verificaciones de integración en mis proyectos. 200 corren en CI en cada push; el resto, en local." },
        { title: "Honesto con los límites", body: "Cada caso de estudio dice qué es real, qué es demo y qué viene después." },
      ],
    },
    about: {
      kicker: "Sobre mí",
      title: "Curioso por naturaleza. Imparable por decisión.",
      body: [
        "Soy Francisco, estudiante de Sistemas en la Universidad Champagnat, en Mendoza, Argentina. En el último año fui subiendo la vara: una plataforma de turnos médicos donde la base de datos hace imposible el doble turno, un recepcionista virtual que registra contactos fuera de horario, un marketplace en blockchain hecho en equipo de cuatro, una app móvil offline-first y el firmware de un pequeño compañero con pantalla OLED.",
        "Me importa todo el stack, del esquema a la interfaz y hasta el microcontrolador, y demostrar que las cosas funcionan. Si algo todavía no lo sé, lo aprendo en el camino.",
      ],
    },
    motto: {
      kicker: "Mi lema",
      sign: "Francisco Basigalup",
    },
    contact: {
      kicker: "Contacto",
      title: "Construyamos algo que importe.",
      body: "Abierto a pasantías y puestos de ingeniería, remoto o presencial, en cualquier parte del mundo.",
      email: "Escribime",
      github: "GitHub",
      linkedin: "LinkedIn",
      resume: "CV",
    },
    project: {
      back: "Todos los proyectos",
      problem: "El problema",
      solution: "La solución",
      role: "Mi rol",
      highlights: "Lo más destacado",
      decisions: "Decisiones de ingeniería",
      facts: "En números",
      next: "Próximos pasos",
      gallery: "Galería",
      openFull: "Abrir en tamaño completo",
      repo: "Ver código",
      privateRepo: "Repositorio privado",
      privateNote: "Código disponible a pedido.",
      demo: "Demo en vivo",
      stack: "Stack",
      year: "Año",
      status: "Estado",
      teamWith: "Proyecto en equipo con",
      prev: "Anterior",
      nextProject: "Siguiente",
    },
    footer: {
      built: "Hecho con Next.js, Tailwind CSS y un pair programmer de IA.",
      top: "Volver arriba",
    },
  },
} as const;

export type UI = (typeof strings)["en"];

export function ui(lang: Lang): UI {
  return strings[lang] as UI;
}

export const statusLabel: Record<ProjectStatus, { en: string; es: string }> = {
  "live-demo": { en: "Live demo", es: "Demo en vivo" },
  "working-prototype": { en: "Working prototype", es: "Prototipo funcional" },
  "in-progress": { en: "In progress", es: "En progreso" },
  "early-stage": { en: "Early stage", es: "Etapa inicial" },
};

export const categoryLabel: Record<Category, { en: string; es: string }> = {
  mobile: { en: "Mobile", es: "Móvil" },
  web: { en: "Web", es: "Web" },
  hardware: { en: "Hardware", es: "Hardware" },
  accessibility: { en: "Accessibility", es: "Accesibilidad" },
  game: { en: "Games", es: "Juegos" },
};

/** Path helpers: English lives at `/`, Spanish under `/es`. */
export function homeHref(lang: Lang) {
  return lang === "en" ? "/" : "/es/";
}

export function projectHref(lang: Lang, slug: string) {
  return lang === "en" ? `/projects/${slug}/` : `/es/projects/${slug}/`;
}
