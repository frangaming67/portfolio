import type { Category, Lang, ProjectStatus } from "./types";

/** Interface copy. Project content lives in `projects.ts`. */
const strings = {
  en: {
    nav: { work: "Work", about: "About", contact: "Contact", skip: "Skip to content" },
    hero: {
      intro: "Information Systems student in Mendoza, Argentina, looking for a software engineering internship. Don't take my word for it:",
      run: "Run it",
      place: "Mendoza, Argentina · Universidad Champagnat",
    },
    showcase: {
      lede: "My latest project: the website of a filmmaker from Mendoza, built and published in one day.",
      run: "Run it here",
      stop: "Back to the screenshot",
      frameTitle: "Fran Lorenzi Films, live",
      open: "Open the live site",
      caseStudy: "Read the case study",
      notes: [
        "One page, no framework: 33 films that take colour and play a five-second preview when you point at them.",
        "Every film is compressed until Netflix's VMAF metric says it still looks like the original.",
      ],
      frames: [
        { name: "First screen", fact: "Aerial footage" },
        { name: "Works", fact: "33 films" },
        { name: "By kind", fact: "5 categories" },
        { name: "Title card", fact: "Type your project" },
        { name: "Photos", fact: "Stills from the films" },
        { name: "On a phone", fact: "Preview on scroll" },
      ],
    },
    work: {
      title: "Everything I've built",
      open: "Open",
      live: "live",
      team: "team",
    },
    tools: {
      title: "What I build with",
      also: "Also",
    },
    proof: {
      title: "Proof, not promises",
      tests: "tests",
    },
    about: {
      title: "About me",
      body: "I'm Francisco, an Information Systems student at Universidad Champagnat. I build complete products and care about proving they work. I like owning the whole thing: the product, the architecture decisions, the details of the interface and the testing that shows it works.",
      facts: [
        { label: "Based in", value: "Mendoza, Argentina" },
        { label: "Studying", value: "Information Systems" },
        { label: "Languages", value: "Spanish, English (B2)" },
      ],
      certsTitle: "Certificates",
      certs: [
        { name: "English B2 (CEFR), Chacras English Institute", year: "2026" },
        { name: "Introduction to Cybersecurity, Cisco", year: "2026" },
      ],
      eduTitle: "Education",
      edu: [
        { name: "Universidad Champagnat, Information Systems", year: "2025–" },
        { name: "Junior Achievement Argentina, Organizational Leadership", year: "2024" },
      ],
    },
    contact: {
      title1: "Have an internship or a project?",
      title2: "Write to me.",
      label: "Your message",
      placeholder: "Hi Francisco, …",
      send: "Send",
      hint: "Opens your email app with the message ready to send.",
      subject: "Hello from your portfolio",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      resume: "Resume",
      resumeLink: "Download the PDF",
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
      motto1: "Don't take my word for it.",
      motto2: "Run it.",
      built: "Built with Next.js.",
      top: "Back to top",
    },
  },
  es: {
    nav: { work: "Proyectos", about: "Sobre mí", contact: "Contacto", skip: "Saltar al contenido" },
    hero: {
      intro: "Estudiante de Sistemas de Información en Mendoza, Argentina, buscando una pasantía en desarrollo de software. No me creas a mí:",
      run: "Probalo",
      place: "Mendoza, Argentina · Universidad Champagnat",
    },
    showcase: {
      lede: "Mi último proyecto: el sitio de un realizador audiovisual de Mendoza, construido y publicado en un día.",
      run: "Probalo acá",
      stop: "Volver a la captura",
      frameTitle: "Fran Lorenzi Films, en vivo",
      open: "Abrir el sitio",
      caseStudy: "Leer el caso de estudio",
      notes: [
        "Una sola página, sin framework: 33 trabajos que toman color y muestran un adelanto de cinco segundos cuando los señalás.",
        "Cada video se comprime hasta que VMAF, la métrica de Netflix, dice que sigue viéndose como el original.",
      ],
      frames: [
        { name: "Portada", fact: "Plano aéreo" },
        { name: "Trabajos", fact: "33 videos" },
        { name: "Por tipo", fact: "5 categorías" },
        { name: "Placa", fact: "Escribí tu proyecto" },
        { name: "Fotos", fact: "Cuadros de los videos" },
        { name: "En el celular", fact: "Adelanto al scrollear" },
      ],
    },
    work: {
      title: "Todo lo que construí",
      open: "Abrir",
      live: "en vivo",
      team: "en equipo",
    },
    tools: {
      title: "Con qué construyo",
      also: "También",
    },
    proof: {
      title: "Pruebas, no promesas",
      tests: "tests",
    },
    about: {
      title: "Sobre mí",
      body: "Soy Francisco, estudiante de Sistemas de Información en la Universidad Champagnat. Construyo productos completos y me importa demostrar que funcionan. Me gusta hacerme cargo de todo: el producto, las decisiones de arquitectura, los detalles de la interfaz y las pruebas que demuestran que funciona.",
      facts: [
        { label: "Vivo en", value: "Mendoza, Argentina" },
        { label: "Estudio", value: "Sistemas de Información" },
        { label: "Idiomas", value: "Español, inglés (B2)" },
      ],
      certsTitle: "Certificaciones",
      certs: [
        { name: "Inglés B2 (MCER), Chacras English Institute", year: "2026" },
        { name: "Introduction to Cybersecurity, Cisco", year: "2026" },
      ],
      eduTitle: "Formación",
      edu: [
        { name: "Universidad Champagnat, Sistemas de Información", year: "2025–" },
        { name: "Junior Achievement Argentina, Liderazgo organizacional", year: "2024" },
      ],
    },
    contact: {
      title1: "¿Tenés una pasantía o un proyecto?",
      title2: "Escribime.",
      label: "Tu mensaje",
      placeholder: "Hola Francisco, …",
      send: "Enviar",
      hint: "Abre tu app de correo con el mensaje listo para enviar.",
      subject: "Hola desde tu portfolio",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      resume: "CV",
      resumeLink: "Descargar el PDF",
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
      motto1: "Don't take my word for it.",
      motto2: "Run it.",
      built: "Hecho con Next.js.",
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
