import type { L, Project } from "./types";

/**
 * Every project on the site. Order here is the order on the page.
 * All numbers come from the repositories themselves (commit history,
 * file counts, CI runs); keep them that way when editing.
 */
export const projects: Project[] = [
  {
    slug: "franco-lorenzi-web",
    name: "Fran Lorenzi Films",
    kind: { en: "Website for a filmmaker", es: "Sitio para un realizador" },
    year: "2026",
    status: "live-demo",
    categories: ["web"],
    featured: true,
    repo: { url: "https://github.com/frangaming67/franco-lorenzi-web", private: true },
    demo: "https://franco-lorenzi-web.pages.dev",
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "ffmpeg + VMAF", "Cloudflare Pages + R2"],
    accent: "#2456e0",
    tagline: {
      en: "A portfolio site for a filmmaker from Mendoza: 33 films that play the moment you point at them.",
      es: "El sitio de un realizador audiovisual de Mendoza: 33 trabajos que se reproducen apenas los señalás.",
    },
    problem: {
      en: "Franco Lorenzi films music videos, events, brand reels and DJ sets, and his work lived scattered across Instagram and YouTube. A filmmaker's site has to show moving pictures without making visitors wait, and video is the heaviest thing on the web: dozens of 4K files, some over 100 MB, which neither GitHub nor a static host will even accept.",
      es: "Franco Lorenzi filma videoclips, eventos, reels para marcas y sets de DJ, y su trabajo estaba repartido entre Instagram y YouTube. El sitio de un realizador tiene que mostrar imágenes en movimiento sin hacer esperar a nadie, y el video es lo más pesado de la web: decenas de archivos en 4K, algunos de más de 100 MB, que ni GitHub ni un hosting estático aceptan.",
    },
    solution: {
      en: "A single page in plain HTML, CSS and JavaScript, with nothing to install. It opens on his own aerial footage of Mendoza; the grid of 33 works stays in black and white until you point at one, then it takes colour and plays a silent five-second preview. Works are also grouped into five kinds (corporate, events, music videos, social, DJ sets), a photo section uses stills pulled from the films, and a small tool lets a client type their project's name and see it as an opening title card. Pages and previews are served by Cloudflare Pages; the full films stream from Cloudflare R2.",
      es: "Una sola página en HTML, CSS y JavaScript, sin nada que instalar. Abre con un plano aéreo de Mendoza filmado por él; la grilla de 33 trabajos queda en blanco y negro hasta que señalás uno, que toma color y muestra un adelanto mudo de cinco segundos. Los trabajos también se agrupan en cinco tipos (corporativos, eventos, videoclips, redes y sets de DJ), una sección de fotos usa cuadros sacados de los videos y una herramienta deja que un cliente escriba el nombre de su proyecto y lo vea como placa de apertura. La página y los adelantos se sirven desde Cloudflare Pages; los videos completos, desde Cloudflare R2.",
    },
    role: {
      en: "Sole author, for a real client: design, front end, the video pipeline and deployment, from the first commit to a live site in one day (20 commits). I chose the structure, selected the footage with Franco and checked every page on desktop and on a phone.",
      es: "Autor único, para un cliente real: diseño, front end, el pipeline de video y la publicación, del primer commit al sitio online en un día (20 commits). Definí la estructura, elegí el material con Franco y revisé cada página en computadora y en celular.",
    },
    highlights: {
      en: [
        "A compression pipeline that measures quality instead of guessing: each film is encoded at a ladder of x264 quality levels (CRF 28 down to 18), scored against the original with Netflix's VMAF metric, and the lightest encode scoring 95 or more is kept.",
        "Previews cost nothing until they're wanted: the five-second clip downloads the first time you point at a work, never on page load. On a phone, the work in the middle of the screen takes colour and plays its preview as you scroll.",
        "Stills are chosen by sharpness: a Node script pulls the key frames of every film, measures how sharp each one is and builds contact sheets to pick from.",
        "Large files live where they fit: the full films stream from Cloudflare R2 because GitHub rejects files over 100 MB and Pages over 25 MB; one constant switches between R2 online and the local folder.",
      ],
      es: [
        "Un pipeline de compresión que mide la calidad en vez de adivinarla: cada video se codifica con una escala de calidades x264 (CRF 28 a 18), se compara con el original con VMAF, la métrica de Netflix, y queda la versión más liviana que saca 95 o más.",
        "Los adelantos no cuestan nada hasta que alguien los quiere: el clip de cinco segundos se descarga la primera vez que señalás un trabajo, nunca al cargar la página. En el celular, el trabajo del centro de la pantalla toma color y muestra su adelanto mientras scrolleás.",
        "Las fotos se eligen por nitidez: un script en Node saca los cuadros clave de cada video, mide qué tan nítido es cada uno y arma hojas de contacto para elegir.",
        "Los archivos grandes viven donde entran: los videos completos salen de Cloudflare R2 porque GitHub rechaza archivos de más de 100 MB y Pages de más de 25 MB; una sola constante cambia entre R2 online y la carpeta local.",
      ],
    },
    decisions: {
      en: [
        "No framework and no build step: one HTML file, one stylesheet and one script, so Franco's site can be edited and published from any computer with Node and nothing else.",
        "Black and white until chosen: the grid stays calm with 33 thumbnails on screen, and colour becomes the feedback for what you're about to open.",
        "Hover previews only on devices with a precise pointer, and nothing autoplays with sound: the full film opens in a dialog, with sound, only when you ask for it.",
      ],
      es: [
        "Sin framework y sin build: un HTML, una hoja de estilos y un script, así el sitio de Franco se puede editar y publicar desde cualquier computadora que tenga Node y nada más.",
        "Blanco y negro hasta elegir: la grilla queda tranquila con 33 miniaturas en pantalla, y el color pasa a ser la señal de lo que estás por abrir.",
        "Adelantos al pasar el mouse sólo en dispositivos con puntero preciso, y nada arranca con sonido: el video completo se abre en una ventana, con sonido, sólo cuando lo pedís.",
      ],
    },
    facts: {
      en: [
        "33 films in 5 categories, each with a cover and a 5-second preview",
        "Built and published in one day, October 2026 (20 commits)",
        "No dependencies on the page: HTML, CSS and JavaScript only",
        "Live on Cloudflare Pages, full films on Cloudflare R2",
      ],
      es: [
        "33 trabajos en 5 categorías, cada uno con portada y adelanto de 5 segundos",
        "Construido y publicado en un día, octubre de 2026 (20 commits)",
        "Sin dependencias en la página: sólo HTML, CSS y JavaScript",
        "Online en Cloudflare Pages, videos completos en Cloudflare R2",
      ],
    },
    next: {
      en: "Connect Franco's own domain and serve the films from it, and add the work he films next.",
      es: "Conectar el dominio propio de Franco, servir los videos desde ahí y sumar los trabajos que vaya filmando.",
    },
    cover: {
      src: "/projects/franco-lorenzi-web/hero.webp",
      width: 2000,
      height: 1250,
      frame: "browser",
      alt: {
        en: "Fran Lorenzi Films first screen: an aerial shot of a Mendoza interchange above the name in tall condensed capitals.",
        es: "Primera pantalla de Fran Lorenzi Films: un plano aéreo de un nudo vial de Mendoza sobre el nombre en mayúsculas altas y angostas.",
      },
    },
    gallery: [
      {
        src: "/projects/franco-lorenzi-web/trabajos.webp",
        width: 2000,
        height: 1250,
        frame: "browser",
        alt: { en: "The works grid in black and white, each tile with its title, format and length.", es: "La grilla de trabajos en blanco y negro, cada uno con título, formato y duración." },
      },
      {
        src: "/projects/franco-lorenzi-web/tipos.webp",
        width: 2000,
        height: 1250,
        frame: "browser",
        alt: { en: "Works by kind: corporate, with a preview playing beside the list.", es: "Trabajos por tipo: corporativos, con un adelanto al lado de la lista." },
      },
      {
        src: "/projects/franco-lorenzi-web/placa.webp",
        width: 2000,
        height: 1250,
        frame: "browser",
        alt: { en: "The title card tool: type a project name, pick a format and see the opening card.", es: "La herramienta de placa: escribís el nombre del proyecto, elegís el formato y ves la placa de apertura." },
      },
      {
        src: "/projects/franco-lorenzi-web/fotos.webp",
        width: 2000,
        height: 1250,
        frame: "browser",
        alt: { en: "Photos section: stills pulled from the films, in a masonry layout.", es: "Sección de fotos: cuadros sacados de los videos, en mosaico." },
      },
      {
        src: "/projects/franco-lorenzi-web/phone.webp",
        width: 780,
        height: 1688,
        frame: "phone",
        alt: { en: "The site on a phone: aerial footage above the name.", es: "El sitio en un celular: el plano aéreo sobre el nombre." },
      },
    ],
  },
  {
    slug: "frontdesk-ai",
    name: "FrontDesk AI",
    kind: { en: "Virtual receptionist", es: "Recepcionista virtual" },
    year: "2026",
    status: "live-demo",
    categories: ["web"],
    featured: true,
    repo: { url: "https://github.com/frangaming67/frontdesk-ai", private: false },
    demo: "https://frontdesk-ai-flame.vercel.app",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Upstash Redis", "Vercel"],
    accent: "#1f8a64",
    tagline: {
      en: "A 24/7 virtual receptionist that turns every patient question into a lead.",
      es: "Un recepcionista virtual 24/7 que convierte cada consulta en un posible paciente.",
    },
    problem: {
      en: "Small clinics lose patients every time a message arrives after hours or while the front desk is busy. And in healthcare, a careless chatbot is worse than none: it can invent prices, give medical advice or confirm appointments that don't exist.",
      es: "Los consultorios pierden pacientes cada vez que llega un mensaje fuera de horario o con la recepción ocupada. Y en salud, un chatbot descuidado es peor que nada: puede inventar precios, dar consejos médicos o confirmar turnos que no existen.",
    },
    solution: {
      en: "A bilingual web receptionist for dental practices, driven by a scripted state machine (no LLM yet, by design). It answers questions about treatments, hours and insurance from one curated knowledge base, guides the visitor through a consultation request, scores purchase intent, and saves the lead with the full transcript to a staff dashboard.",
      es: "Un recepcionista web bilingüe para clínicas dentales, guiado por una máquina de estados programada (todavía sin LLM, a propósito). Responde sobre tratamientos, horarios y obras sociales desde una única base de conocimiento, guía al visitante hasta pedir una consulta, mide su intención de compra y guarda el contacto con la conversación completa en un panel para el equipo.",
    },
    role: {
      en: "Sole author: product, design, conversation engine, dashboard, tests and deployment, shipped in four days. Every design decision in the code is mine.",
      es: "Autor único: producto, diseño, motor de conversación, panel, tests y deploy, en cuatro días. Cada decisión de diseño del código es mía.",
    },
    highlights: {
      en: [
        "Live on Vercel in English and Spanish: landing page, guided chat, lead dashboard and per-lead transcripts.",
        "Explainable conversation engine: a 7-stage state machine with bilingual intent detection that answers side questions without losing the field it is collecting.",
        "Guardrails by design: the knowledge base stores no prices, medical questions always go to staff, and the flow ends in a request, never a fake confirmed appointment.",
        "Hardened contact-verification API, unit-tested with mocked providers and switched off in the live demo: HMAC-SHA256 hashing, constant-time code checks, and 5 layered rate limits made atomic with Redis Lua scripts. It fails closed.",
      ],
      es: [
        "Online en Vercel en inglés y español: landing, chat guiado, panel de contactos y transcripción de cada conversación.",
        "Motor de conversación explicable: una máquina de 7 estados con detección de intención bilingüe que responde preguntas al pasar sin perder el dato que estaba pidiendo.",
        "Límites desde el diseño: la base de conocimiento no guarda precios, las consultas médicas siempre pasan al equipo y el flujo termina en un pedido, nunca en un turno confirmado falso.",
        "API de verificación de contacto blindada, probada con proveedores simulados y apagada en la demo: hashes HMAC-SHA256, comparación en tiempo constante y 5 límites de uso atómicos con scripts Lua en Redis. Si algo falla, rechaza la solicitud.",
      ],
    },
    decisions: {
      en: [
        "Ports and adapters: the UI only knows an AIService and a LeadRepository interface, so an LLM backend or a real database can drop in without touching a component.",
        "A deterministic state machine instead of an LLM for the demo: zero API keys, predictable in front of clients, and fully regression-tested, including edge cases like \"No problem\" (agreement) versus \"No, please\" (decline).",
        "Quoting a price is impossible at the type level: every treatment carries priceKnown: false.",
        "The language lives in a cookie read by a server component, so the first paint is already in the right language, with no flash and no i18n library.",
      ],
      es: [
        "Puertos y adaptadores: la interfaz sólo conoce las interfaces AIService y LeadRepository, así que se puede enchufar un LLM o una base de datos real sin tocar ningún componente.",
        "Una máquina de estados determinística en vez de un LLM para la demo: cero claves de API, comportamiento predecible frente a clientes y tests de regresión completos, incluso para casos como \"No hay problema\" (acepta) contra \"No, gracias\" (rechaza).",
        "Cotizar un precio es imposible desde los tipos: cada tratamiento tiene priceKnown: false.",
        "El idioma vive en una cookie que lee un componente de servidor, así que la página llega ya en el idioma correcto, sin parpadeo y sin librería de i18n.",
      ],
    },
    facts: {
      en: [
        "32 automated tests, all passing; clean typecheck and lint",
        "27 React components across 7 pages and 1 API route",
        "Built in 4 days, September 2026",
        "Demo leads are stored in the visitor's browser; no backend database or staff login yet",
      ],
      es: [
        "32 tests automatizados, todos en verde; typecheck y lint limpios",
        "27 componentes React en 7 páginas y 1 ruta de API",
        "Construido en 4 días, septiembre de 2026",
        "Los contactos de la demo se guardan en el navegador del visitante; todavía no hay base de datos ni login para el equipo",
      ],
    },
    next: {
      en: "Plug a real LLM into the existing AIService interface and reuse the 18 conversation-flow tests as its evaluation suite. Then add a database-backed lead store with staff login.",
      es: "Conectar un LLM real a la interfaz AIService que ya existe y usar los 18 tests del flujo de conversación como su suite de evaluación. Después, guardar los contactos en una base de datos con login para el equipo.",
    },
    cover: {
      src: "/projects/frontdesk-ai/landing.webp",
      width: 2000,
      height: 1250,
      frame: "browser",
      alt: {
        en: "FrontDesk AI landing page: \"A warm welcome. At any hour.\" next to a chat preview and a high-intent lead card.",
        es: "Landing de FrontDesk AI: \"Una cálida bienvenida. A cualquier hora.\" junto a una vista del chat y un contacto de alto interés.",
      },
    },
    gallery: [
      {
        src: "/projects/frontdesk-ai/chat.webp",
        width: 2000,
        height: 1250,
        frame: "browser",
        alt: {
          en: "Guided chat with a three-step progress bar and suggested questions.",
          es: "Chat guiado con barra de progreso en tres pasos y preguntas sugeridas.",
        },
      },
      {
        src: "/projects/frontdesk-ai/dashboard.webp",
        width: 2000,
        height: 1250,
        frame: "browser",
        alt: {
          en: "Lead dashboard with metrics, the latest lead and search filters.",
          es: "Panel de contactos con métricas, el último contacto y filtros de búsqueda.",
        },
      },
    ],
  },
  {
    slug: "otc",
    name: "OTC",
    kind: { en: "Blockchain marketplace", es: "Marketplace en blockchain" },
    year: "2026",
    status: "working-prototype",
    categories: ["web"],
    featured: true,
    collaboration: {
      owner: "Federico Scuri",
      ownerUrl: "https://github.com/FedericoScuri",
      share: {
        en: "Team of four. I'm the top contributor by commits (21 of 43) and wrote most of the web app and the API; the smart contracts and their tests are Federico's.",
        es: "Equipo de cuatro. Soy el que más commits hizo (21 de 43) y escribí la mayor parte de la app web y la API; los smart contracts y sus tests son de Federico.",
      },
    },
    repo: { url: "https://github.com/FedericoScuri/OTC", private: false },
    stack: ["Next.js", "TypeScript", "wagmi + viem", "Express", "ethers v6", "Solidity (team)"],
    accent: "#2f6f8f",
    tagline: {
      en: "A blockchain tourism marketplace where escrow pays the hotel, the agent and the platform the moment a trip is confirmed.",
      es: "Un marketplace turístico en blockchain donde el escrow le paga al hotel, al agente y a la plataforma apenas se confirma el viaje.",
    },
    problem: {
      en: "Local tourism providers in Mendoza (hotels, wineries, adventure operators) sell through big booking platforms that keep a large commission and pay out weeks later. Independent agents who bring in customers have no transparent, immediate way to get paid.",
      es: "Los prestadores turísticos de Mendoza (hoteles, bodegas, turismo aventura) venden a través de grandes plataformas que se quedan con una comisión alta y liquidan semanas después. Los agentes independientes que traen clientes no tienen una forma transparente e inmediata de cobrar.",
    },
    solution: {
      en: "Each tour package is a token, and payment waits in a USDC escrow contract (the contracts are Federico's). When the provider confirms the service, the escrow splits it automatically: 85% to the provider, 12% to the agent, 3% to the platform. I built most of the layer on top: a web app with views for travelers, providers and agents, and a backend that bridges the traditional side with a mock hotel-system sync, a card-to-USDC sandbox and agent pay links.",
      es: "Cada paquete turístico es un token y el pago espera en un contrato de escrow en USDC (los contratos son de Federico). Cuando el prestador confirma el servicio, el escrow lo reparte solo: 85% al prestador, 12% al agente, 3% a la plataforma. Yo construí la mayor parte de la capa de arriba: una app web con vistas para viajeros, prestadores y agentes, y un backend que conecta el mundo tradicional con un sistema hotelero simulado, un sandbox de tarjeta a USDC y links de pago para agentes.",
    },
    role: {
      en: "I built most of the application layer on top of my teammate's smart contracts: the Next.js web app (18 of 26 components), the Express backend (12 of 22 endpoints), the provider and agent dashboards, the visual design, and the agent pay-link feature end to end.",
      es: "Construí la mayor parte de la capa de aplicación sobre los smart contracts de mi compañero: la app web en Next.js (18 de 26 componentes), el backend en Express (12 de 22 endpoints), los paneles de prestador y agente, el diseño visual y los links de pago para agentes de punta a punta.",
    },
    highlights: {
      en: [
        "Agent pay links, end to end (about 1,300 lines): 5 API endpoints compute base price, markup and the 85/12/3 split from the on-chain price, and a public checkout with a QR code runs the whole payment.",
        "Web app built from scratch with wallet connection, a catalog read straight from the token contract, an approve-then-purchase escrow checkout and affiliate attribution.",
        "Backend bridge to the traditional world: an idempotent sync from a mock hotel system that publishes missing packages on-chain, and a card-to-USDC sandbox with fee and limit validation.",
        "Wallet-free pay links: I added a pay-by-email path to the agent pay links, reusing Federico's account-abstraction module, so a traveler without a wallet still gets an on-chain booking.",
      ],
      es: [
        "Links de pago para agentes, de punta a punta (unas 1.300 líneas): 5 endpoints calculan precio base, sobreprecio y el reparto 85/12/3 a partir del precio on-chain, y un checkout público con QR ejecuta todo el pago.",
        "App web construida desde cero con conexión de wallet, catálogo leído directamente del contrato, checkout con aprobación y compra sobre el escrow, y atribución de afiliados.",
        "Puente con el mundo tradicional: una sincronización idempotente desde un sistema hotelero simulado que publica on-chain los paquetes faltantes, y un sandbox de tarjeta a USDC con validación de comisiones y límites.",
        "Links de pago sin wallet: sumé a los links de pago un camino de pago con email, reutilizando el módulo de account abstraction de Federico, así un viajero sin wallet obtiene igual su reserva on-chain.",
      ],
    },
    decisions: {
      en: [
        "The server never trusts amounts from the client: it re-reads the package price on-chain and recalculates every split before recording a sale.",
        "The agent markup was added without touching the contracts: the base price still flows through the escrow, and the markup is a separate transfer. A new business model with no redeploy.",
        "Money math uses integers only, with basis points on 6-decimal USDC units, so there's no floating-point rounding.",
        "Typed contract ABIs are generated from the build, so the web app gets end-to-end type checking on every contract call.",
      ],
      es: [
        "El servidor nunca confía en los montos del cliente: vuelve a leer el precio on-chain y recalcula cada reparto antes de registrar una venta.",
        "El sobreprecio del agente se agregó sin tocar los contratos: el precio base sigue pasando por el escrow y el sobreprecio es una transferencia aparte. Un modelo de negocio nuevo sin redesplegar.",
        "Las cuentas de dinero usan sólo enteros, con basis points sobre unidades USDC de 6 decimales, así no hay redondeos de punto flotante.",
        "Los ABIs de los contratos se generan tipados desde el build, así la app web chequea tipos de punta a punta en cada llamada al contrato.",
      ],
    },
    facts: {
      en: [
        "Top contributor: 21 of 43 commits",
        "About 62% of the frontend and 53% of the backend",
        "Built in two weeks, June 2026",
        "Runs on a local chain; testnet deploy pending",
      ],
      es: [
        "Mayor contribuidor: 21 de 43 commits",
        "Cerca del 62% del frontend y el 53% del backend",
        "Construido en dos semanas, junio de 2026",
        "Corre en una red local; falta el deploy en testnet",
      ],
    },
    next: {
      en: "Deploy the contracts to the Base Sepolia testnet and host a public demo of the full flow.",
      es: "Desplegar los contratos en la testnet Base Sepolia y publicar una demo del flujo completo.",
    },
    cover: {
      src: "/projects/otc/catalog-still.webp",
      width: 1180,
      height: 470,
      frame: "browser",
      alt: {
        en: "OTC catalog: booking-style cards for a winery, a hotel and rafting, priced in USDC, with a wallet-free card payment (demo data).",
        es: "Catálogo de OTC: tarjetas estilo sitio de reservas para una bodega, un hotel y rafting, con precio en USDC y pago con tarjeta sin wallet (datos de demo).",
      },
    },
    gallery: [],
  },
  {
    slug: "mathvoice",
    name: "MathVoice",
    kind: { en: "Accessible math", es: "Matemática accesible" },
    year: "2026",
    status: "working-prototype",
    categories: ["accessibility", "web"],
    featured: false,
    repo: { url: "https://github.com/frangaming67/mathvoice", private: true },
    stack: ["TypeScript", "React 19", "Web Workers", "Web Speech API", "Web Audio API", "Vitest", "Playwright"],
    accent: "#d4a600",
    tagline: {
      en: "A talking math workspace for blind students: algebra, graphs and voice, fully offline.",
      es: "Matemática que habla, pensada para estudiantes ciegos: álgebra, gráficos y voz, todo sin conexión.",
    },
    problem: {
      en: "Scientific calculators, algebra systems and graphing apps are built to be looked at. Screen-reader support gets bolted on later, step-by-step solutions are visual-only, and graphs are effectively closed to blind users. A Spanish-speaking blind student has no single tool to dictate, hear, solve and explore math without a screen.",
      es: "Las calculadoras científicas, los sistemas de álgebra y los graficadores están hechos para mirarse. El soporte para lectores de pantalla se agrega al final, los pasos de resolución son sólo visuales y los gráficos quedan cerrados para personas ciegas. Un estudiante ciego que habla español no tiene una sola herramienta para dictar, escuchar, resolver y explorar matemática sin pantalla.",
    },
    solution: {
      en: "A client-only React and TypeScript web app that treats accessibility as architecture. Thirteen tools (algebra and calculus, matrices, statistics, probability, graphs, converters and more) around a talking scientific calculator, all usable from the keyboard. Results and step-by-step procedures are read aloud, graphs can be explored with arrow keys and sound, and everything runs locally in Web Workers, offline.",
      es: "Una app web en React y TypeScript, sin servidor, que trata la accesibilidad como arquitectura. Trece herramientas (álgebra y cálculo, matrices, estadística, probabilidad, gráficos, conversores y más) alrededor de una calculadora científica que habla, todas usables con el teclado. Los resultados y los pasos se leen en voz alta, los gráficos se exploran con flechas y sonido, y todo corre localmente en Web Workers, sin conexión.",
    },
    role: {
      en: "Product owner and spec author. I wrote the requirements (usable without looking at the screen), the 5-phase roadmap and a strict inspect, fix, test, close protocol, and accepted each phase against tests and dated audits.",
      es: "Product owner y autor de la especificación. Escribí los requisitos (usable sin mirar la pantalla), la hoja de ruta en 5 fases y un protocolo estricto de inspeccionar, corregir, testear y cerrar, y aprobé cada fase contra tests y auditorías fechadas.",
    },
    highlights: {
      en: [
        "Sandboxed math: input is checked against an allowlist of syntax-tree nodes and functions (no eval), and each calculation runs in a fresh Web Worker that is killed after 6 seconds.",
        "Graphs you can hear: arrow keys walk the curve while coordinates are spoken, and Web Audio plays height as pitch. Zeros, extrema and intersections are found numerically.",
        "Step-by-step solutions (quadratics, derivatives, integrals, inequalities) that can be heard one step at a time and exported.",
        "CI runs lint, 167 unit tests, 17 browser tests with axe-core accessibility checks, offline tests and a bundle-size budget.",
      ],
      es: [
        "Matemática aislada: la entrada se valida contra una lista de nodos y funciones permitidas (sin eval), y cada cálculo corre en un Web Worker nuevo que se corta a los 6 segundos.",
        "Gráficos que se escuchan: con las flechas se recorre la curva mientras se dicen las coordenadas, y Web Audio convierte la altura en tono. Ceros, extremos e intersecciones se calculan numéricamente.",
        "Resolución paso a paso (cuadráticas, derivadas, integrales, inecuaciones) que se puede escuchar paso por paso y exportar.",
        "CI con lint, 167 tests unitarios, 17 tests de navegador con chequeos de accesibilidad axe-core, tests sin conexión y un límite de tamaño del bundle.",
      ],
    },
    decisions: {
      en: [
        "One SpeechService owns speech output, so two voices never overlap, and a screen-reader mode turns the built-in voice off to avoid hearing everything twice.",
        "A wrong answer is worse than a refusal: domain checks are deliberately conservative, and the app never claims there are no roots when it simply found none.",
        "Dictation never computes on its own: a transcript opens an editable confirmation, so recognition mistakes can't become silent wrong results.",
      ],
      es: [
        "Un único SpeechService controla la voz, así que nunca se pisan dos voces, y un modo para lectores de pantalla apaga la voz propia para no escuchar todo dos veces.",
        "Una respuesta incorrecta es peor que una negativa: los chequeos de dominio son conservadores a propósito y la app nunca afirma que no hay raíces cuando simplemente no las encontró.",
        "El dictado nunca calcula solo: lo transcripto abre una confirmación editable, así los errores de reconocimiento no se convierten en resultados incorrectos silenciosos.",
      ],
    },
    facts: {
      en: [
        "186 automated tests in CI (unit, browser and offline)",
        "13 tools around a talking scientific calculator",
        "No backend, no account: runs entirely in the browser",
      ],
      es: [
        "186 tests automatizados en CI (unitarios, de navegador y sin conexión)",
        "13 herramientas alrededor de una calculadora científica que habla",
        "Sin servidor ni cuenta: corre entero en el navegador",
      ],
    },
    next: {
      en: "Validate it with real screen-reader users (NVDA, JAWS, VoiceOver) and publish a live demo.",
      es: "Validarlo con personas que usan lectores de pantalla (NVDA, JAWS, VoiceOver) y publicar una demo en vivo.",
    },
    cover: {
      src: "/projects/mathvoice/calc.webp",
      width: 2000,
      height: 1250,
      frame: "browser",
      alt: {
        en: "The MathVoice calculator: 2·sin(π/6) + √16 typed in the display and its result, 5, beside a scientific keypad.",
        es: "La calculadora de MathVoice: 2·sen(π/6) + √16 escrito en la pantalla y su resultado, 5, al lado de un teclado científico.",
      },
    },
    gallery: [
      {
        src: "/projects/mathvoice/algebra.webp",
        width: 2000,
        height: 1250,
        frame: "browser",
        alt: { en: "Solving x² − 5x + 6 = 0: x = 2 and x = 3, with a 6-step procedure that can be heard step by step.", es: "Resolviendo x² − 5x + 6 = 0: x = 2 y x = 3, con un procedimiento de 6 pasos que se puede escuchar paso por paso." },
      },
      {
        src: "/projects/mathvoice/graph.webp",
        width: 2000,
        height: 1250,
        frame: "browser",
        alt: { en: "Two functions plotted as solid and dashed lines, each described in words: zeros, growth and intersections.", es: "Dos funciones graficadas con línea continua y punteada, cada una descrita en palabras: ceros, crecimiento e intersecciones." },
      },
      {
        src: "/projects/mathvoice/tools.webp",
        width: 2000,
        height: 1250,
        frame: "browser",
        alt: { en: "The tools menu: calculator, algebra and calculus, matrices, statistics, probability, graphs and more.", es: "El menú de herramientas: calculadora, álgebra y cálculo, matrices, estadística, probabilidad, gráficos y más." },
      },
    ],
  },
  {
    slug: "mza-beats",
    name: "MzaBeats",
    kind: { en: "Band directory", es: "Directorio de bandas" },
    year: "2025–2026",
    status: "working-prototype",
    categories: ["web"],
    featured: false,
    collaboration: {
      owner: "Gonzalo Velasco",
      ownerUrl: "https://github.com/gmvelasco6",
      share: {
        en: "I authored 19 of the 78 commits.",
        es: "Escribí 19 de los 78 commits.",
      },
    },
    repo: { url: "https://github.com/gmvelasco6/mza-beats", private: false },
    demo: "https://mza-beats.onrender.com/index.php",
    stack: ["PHP 8.2", "MySQL", "JavaScript", "CSS", "Docker"],
    accent: "#f57c00",
    tagline: {
      en: "A web app that helps people discover Mendoza's local bands by genre.",
      es: "Una app web para descubrir las bandas locales de Mendoza por género.",
    },
    problem: {
      en: "Independent bands from Mendoza, Argentina have no central place to be discovered. Their information is scattered across social media, and new artists have no simple way to ask to be listed.",
      es: "Las bandas independientes de Mendoza no tienen un lugar central donde ser descubiertas. Su información está dispersa en redes y los artistas nuevos no tienen una forma simple de pedir aparecer.",
    },
    solution: {
      en: "A PHP and MySQL web app with Indie, Pop and Rock pages, per-genre search, accounts with roles, an add-a-band flow, artist requests and an admin panel, containerized with Docker for deployment.",
      es: "Una app web en PHP y MySQL con páginas de Indie, Pop y Rock, búsqueda por género, cuentas con roles, alta de bandas, pedidos de artistas y un panel de administración, en un contenedor Docker para el deploy.",
    },
    role: {
      en: "Second contributor in a two-person team. I built the first version of the add-a-band feature (upload validation, prepared statements, a duplicate-submission guard), the Rock and Pop pages, a CSS-only mobile menu and the README. My teammate built auth, the admin panel and the schema.",
      es: "Segundo contribuidor en un equipo de dos. Construí la primera versión del alta de bandas (validación de archivos, sentencias preparadas, protección contra envíos duplicados), las páginas de Rock y Pop, un menú móvil sólo con CSS y el README. Mi compañero hizo el login, el panel de administración y el esquema.",
    },
    highlights: {
      en: [
        "First version of the add-a-band flow (later simplified by my teammate): client-side image preview, async submit and server-side upload validation by extension whitelist.",
        "My insert controller used parameterized queries with dynamically built bindings instead of concatenating user input.",
        "Teamwork through feature branches and pull requests (4 PRs, 3 merged).",
      ],
      es: [
        "Primera versión del alta de bandas (después simplificada por mi compañero): vista previa de la imagen, envío asíncrono y validación de archivos en el servidor por lista de extensiones permitidas.",
        "Mi controlador de inserción usó consultas parametrizadas construidas dinámicamente, en vez de concatenar lo que escribe el usuario.",
        "Trabajo en equipo con ramas y pull requests (4 PRs, 3 integrados).",
      ],
    },
    decisions: { en: [], es: [] },
    facts: {
      en: ["Online on Render, deployed with Docker", "78 commits · 4 pull requests", "My share: 19 commits, +1,476 lines"],
      es: ["Online en Render, publicado con Docker", "78 commits · 4 pull requests", "Mi parte: 19 commits, +1.476 líneas"],
    },
    cover: {
      src: "/projects/mza-beats/home.webp",
      width: 2000,
      height: 1250,
      frame: "browser",
      alt: {
        en: "MzaBeats home: \"Welcome to MzaBeats\" above the Indie section, with a photo of a Mendoza band.",
        es: "Inicio de MzaBeats: \"Bienvenido a MzaBeats\" sobre la sección Indie, con la foto de una banda de Mendoza.",
      },
    },
    gallery: [
      {
        src: "/projects/mza-beats/rock.webp",
        width: 2000,
        height: 1250,
        frame: "browser",
        alt: { en: "The Rock page: band search and the story of Mendoza rock.", es: "La página de Rock: buscador de bandas y la historia del rock mendocino." },
      },
      {
        src: "/projects/mza-beats/pop.webp",
        width: 2000,
        height: 1250,
        frame: "browser",
        alt: { en: "The Pop page, with its own search.", es: "La página de Pop, con su propio buscador." },
      },
      {
        src: "/projects/mza-beats/phone.webp",
        width: 780,
        height: 1688,
        frame: "phone",
        alt: { en: "MzaBeats on a phone, with the CSS-only menu.", es: "MzaBeats en el celular, con el menú hecho sólo con CSS." },
      },
    ],
  },
  {
    slug: "blackjack-java",
    name: "Blackjack Java",
    kind: { en: "Card game in Java", es: "Juego de cartas en Java" },
    year: "2026",
    status: "early-stage",
    categories: ["game"],
    featured: false,
    repo: { url: "https://github.com/frangaming67/BlackjackJava", private: false },
    stack: ["Java", "Swing", "SQLite", "JDBC"],
    accent: "#d32f2f",
    tagline: {
      en: "A Java learning project: modeling a card game, then growing it into a desktop app.",
      es: "Un proyecto de aprendizaje en Java: modelar un juego de cartas y convertirlo en una app de escritorio.",
    },
    problem: {
      en: "A learning project for object-oriented fundamentals: model a card game cleanly (cards, ranks, suits, deck, scoring), then grow it into a desktop app with accounts and saved results.",
      es: "Un proyecto para aprender los fundamentos de objetos: modelar bien un juego de cartas (cartas, valores, palos, mazo, puntaje) y convertirlo en una app de escritorio con cuentas y resultados guardados.",
    },
    solution: {
      en: "The public repo holds a type-safe domain model: ranks and suits are enums that carry their own names and values. A second version in progress moves to a Swing interface split into model, view, controller and data-access layers, with a SQLite database.",
      es: "El repositorio público tiene un modelo de dominio con tipos seguros: valores y palos son enums con su propio nombre y puntaje. Una segunda versión, en progreso, pasa a una interfaz Swing separada en modelo, vista, controlador y acceso a datos, con base SQLite.",
    },
    role: {
      en: "Solo author. The first version follows a published tutorial, credited in the README. The Swing and SQLite version is my own and still in progress.",
      es: "Autor único. La primera versión sigue un tutorial publicado, citado en el README. La versión con Swing y SQLite es propia y sigue en progreso.",
    },
    highlights: {
      en: [
        "Card values live inside the Rank enum, so scoring can't drift from the card definitions.",
        "Version 2 (local, not on GitHub yet): 4 Swing screens (login, register, menu, table) and a DAO that keeps all SQL out of the interface, using parameterized queries.",
      ],
      es: [
        "El valor de cada carta vive dentro del enum Rank, así el puntaje no puede desalinearse de la definición de las cartas.",
        "Versión 2 (local, todavía no está en GitHub): 4 pantallas en Swing (login, registro, menú, mesa) y un DAO que deja todo el SQL fuera de la interfaz, con consultas parametrizadas.",
      ],
    },
    decisions: { en: [], es: [] },
    facts: {
      en: ["9 commits", "Version 2 (local, unpublished): 4 screens, 3 SQLite tables, MVC + DAO"],
      es: ["9 commits", "Versión 2 (local, sin publicar): 4 pantallas, 3 tablas SQLite, MVC + DAO"],
    },
    next: {
      en: "Finish the gameplay (shuffled deck, hands, dealer rules), add JUnit tests and publish version 2.",
      es: "Terminar la jugabilidad (mazo mezclado, manos, reglas del crupier), sumar tests con JUnit y publicar la versión 2.",
    },
    gallery: [],
  },
];

/** Headline numbers, each traceable to the projects above. */
export const stats = {
  repos: projects.length,
  liveDemos: projects.filter((p) => p.demo).length,
  // FrontDesk 32 + MathVoice 186
  tests: 218,
};

/** Languages I've shipped code in, each with the projects that use it. */
export const languages: { name: string; where: string[] }[] = [
  { name: "TypeScript", where: ["FrontDesk AI", "OTC", "MathVoice"] },
  { name: "JavaScript", where: ["Fran Lorenzi Films", "MzaBeats"] },
  { name: "PHP", where: ["MzaBeats"] },
  { name: "SQL", where: ["MzaBeats"] },
  { name: "Java", where: ["Blackjack Java"] },
];

export const tools = ["React", "Next.js", "HTML & CSS", "MariaDB / MySQL", "PostgreSQL + Supabase", "Vercel", "Cloudflare Pages"];

/** Automated tests per project, for the proof bar. Counts come from each repository. */
export const testCounts = [
  { project: "MathVoice", count: 186, note: { en: "unit, browser and offline tests, run in CI", es: "unitarios, de navegador y sin conexión, en CI" } },
  { project: "FrontDesk AI", count: 32, note: { en: "conversation flow, guardrails and API", es: "flujo de conversación, límites y API" } },
] satisfies { project: string; count: number; note: L }[];
