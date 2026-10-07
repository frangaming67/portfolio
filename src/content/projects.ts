import type { L, Project } from "./types";

/**
 * Every project on the site. Order here is the order on the page.
 * All numbers come from the repositories themselves (commit history,
 * file counts, CI runs); keep them that way when editing.
 */
export const projects: Project[] = [
  {
    slug: "mediturnos",
    name: "MediTurnos",
    year: "2026",
    status: "working-prototype",
    categories: ["web"],
    featured: true,
    repo: { url: "https://github.com/frangaming67/Mediturnos", private: false },
    stack: ["PHP 8.2", "MariaDB", "SQL", "Vanilla JS", "Apache"],
    accent: "#2f6fed",
    tagline: {
      en: "A medical booking platform where the database itself makes double booking impossible.",
      es: "Una plataforma de turnos médicos donde la propia base de datos hace imposible el doble turno.",
    },
    problem: {
      en: "Clinics need patients to book against real availability while staff manage agendas, payments and insurance. The hard parts are about correctness: two patients grabbing the same slot at the same instant, unpaid bookings holding slots forever, insurance discounts being gamed, and lab results leaking through public URLs.",
      es: "Las clínicas necesitan que los pacientes reserven sobre disponibilidad real mientras el personal maneja agendas, cobros y coberturas. Lo difícil es que todo sea correcto: dos pacientes tomando el mismo horario en el mismo instante, reservas impagas bloqueando turnos para siempre, descuentos de cobertura mal usados y estudios filtrándose por URLs públicas.",
    },
    solution: {
      en: "A server-rendered system with four roles (admin, receptionist, doctor, patient) on a framework-free PHP MVC over MariaDB. Patients book through a 4-step wizard that works without JavaScript, payments use hold windows, doctors keep clinical records and prescriptions, and admins get KPIs. The critical rules live in the database engine, not in PHP.",
      es: "Un sistema renderizado en el servidor con cuatro roles (admin, recepción, médico, paciente) sobre un MVC propio en PHP y MariaDB. Los pacientes reservan con un asistente de 4 pasos que funciona sin JavaScript, los pagos tienen ventanas de reserva, los médicos llevan historia clínica y recetas, y la administración tiene indicadores. Las reglas críticas viven en el motor de base de datos, no en PHP.",
    },
    role: {
      en: "Sole author and owner (99 of 99 commits). I set the scope, designed the schema and the security model, built it feature by feature with Git Flow, and prepared it for my oral defense at university. I built it with Claude as an AI pair programmer (98 of the 99 commits carry its co-author trailer); I directed, reviewed and tested each feature.",
      es: "Autor y dueño único (99 de 99 commits). Definí el alcance, diseñé el esquema y el modelo de seguridad, lo construí funcionalidad por funcionalidad con Git Flow y lo preparé para defenderlo oralmente en la carrera. Lo construí con Claude como pair programmer de IA (98 de los 99 commits llevan su firma de coautor); dirigí, revisé y probé cada funcionalidad.",
    },
    highlights: {
      en: [
        "Race-free booking: a UNIQUE index on a generated column makes InnoDB reject the second of two simultaneous bookings, closing the check-then-insert race that application code can't.",
        "28 tables, 5 views, 2 triggers and 2 stored procedures, built through 18 ordered migrations, with role-based access across 4 roles and 22 permissions.",
        "A threat model with attacks actually run against the app (stored XSS, CSRF on 18 state-changing actions, an insurance-plan exploit that made visits free), each one fixed and documented.",
        "Defense-in-depth uploads: photos are validated and re-encoded, and lab PDFs live outside the web root, served only to the patient, a treating doctor or staff.",
        "A zero-dependency SMTP client over raw sockets (STARTTLS, AUTH LOGIN) behind a swappable Mailer interface.",
      ],
      es: [
        "Reservas sin condición de carrera: un índice UNIQUE sobre una columna generada hace que InnoDB rechace la segunda de dos reservas simultáneas, algo que la aplicación no puede garantizar chequeando antes de insertar.",
        "28 tablas, 5 vistas, 2 triggers y 2 procedimientos almacenados, construidos con 18 migraciones ordenadas, y control de acceso por roles con 4 roles y 22 permisos.",
        "Un modelo de amenazas con ataques ejecutados de verdad contra la app (XSS almacenado, CSRF en 18 acciones, un exploit de cobertura que dejaba las consultas gratis), cada uno corregido y documentado.",
        "Subidas con defensa en profundidad: las fotos se validan y se recodifican, y los PDF de estudios viven fuera de la raíz web y sólo se entregan al paciente, a su médico o al personal.",
        "Un cliente SMTP sin dependencias sobre sockets (STARTTLS, AUTH LOGIN) detrás de una interfaz Mailer intercambiable.",
      ],
    },
    decisions: {
      en: [
        "ADR-0002 · Correctness lives in the database. SELECT … FOR UPDATE, LOCK TABLES and SERIALIZABLE isolation were each considered and rejected with reasons.",
        "ADR-0001 · No framework, on purpose, so every mechanism can be explained line by line. The risk is mitigated with server-side prepared statements everywhere.",
        "Ports-and-adapters notifications: 20 typed notification kinds over in-app and email channels, so adding push needs no controller changes.",
        "Integration tests run against the real engine instead of mocks, because UNIQUE, CHECK and generated columns only exist in MariaDB.",
      ],
      es: [
        "ADR-0002 · La integridad vive en la base de datos. SELECT … FOR UPDATE, LOCK TABLES y el aislamiento SERIALIZABLE se evaluaron y se descartaron con argumentos.",
        "ADR-0001 · Sin framework, a propósito, para poder explicar cada mecanismo línea por línea. El riesgo se mitiga con sentencias preparadas del lado del servidor en todas partes.",
        "Notificaciones con puertos y adaptadores: 20 tipos de aviso sobre canales in-app y email, así que sumar push no requiere tocar controladores.",
        "Tests de integración contra el motor real en vez de mocks, porque UNIQUE, CHECK y las columnas generadas sólo existen en MariaDB.",
      ],
    },
    facts: {
      en: [
        "99 commits with Git Flow and Conventional Commits",
        "28 tables · 5 views · 2 triggers · 2 stored procedures",
        "332 integration checks across 7 test scripts",
        "4 Architecture Decision Records and 31 docs",
      ],
      es: [
        "99 commits con Git Flow y Conventional Commits",
        "28 tablas · 5 vistas · 2 triggers · 2 procedimientos",
        "332 verificaciones de integración en 7 scripts de prueba",
        "4 Architecture Decision Records y 31 documentos",
      ],
    },
    next: {
      en: "Ship a public demo with Docker (PHP 8.2 + MariaDB), add CI that runs the integration suite, and add screenshots and an English README.",
      es: "Publicar una demo con Docker (PHP 8.2 + MariaDB), sumar CI que corra la suite de integración y agregar capturas y un README en inglés.",
    },
    cover: {
      src: "/projects/mediturnos/race.svg",
      width: 1200,
      height: 760,
      frame: "none",
      alt: {
        en: "Diagram: with check-then-insert, two patients both book the same slot; with a UNIQUE index on a generated column, the database rejects the second booking with error 1062.",
        es: "Diagrama: con chequear-e-insertar, dos pacientes reservan el mismo turno; con un índice UNIQUE sobre una columna generada, la base rechaza la segunda reserva con el error 1062.",
      },
    },
    gallery: [],
  },
  {
    slug: "frontdesk-ai",
    name: "FrontDesk AI",
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
      en: "Sole author: product, design, conversation engine, dashboard, tests and deployment, shipped in four days. I worked with AI coding agents as pair programmers and own every design decision in the code.",
      es: "Autor único: producto, diseño, motor de conversación, panel, tests y deploy, en cuatro días. Trabajé con agentes de IA como pair programmers y cada decisión de diseño del código es mía.",
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
      width: 1440,
      height: 900,
      frame: "browser",
      alt: {
        en: "FrontDesk AI landing page: \"A warm welcome. At any hour.\" next to a chat preview and a high-intent lead card.",
        es: "Landing de FrontDesk AI: \"Una cálida bienvenida. A cualquier hora.\" junto a una vista del chat y un contacto de alto interés.",
      },
    },
    gallery: [
      {
        src: "/projects/frontdesk-ai/chat.webp",
        width: 1440,
        height: 900,
        frame: "browser",
        alt: {
          en: "Guided chat with a three-step progress bar and suggested questions.",
          es: "Chat guiado con barra de progreso en tres pasos y preguntas sugeridas.",
        },
      },
      {
        src: "/projects/frontdesk-ai/dashboard.webp",
        width: 1440,
        height: 900,
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
    accent: "#8b5cf6",
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
      en: "I built most of the application layer on top of my teammate's smart contracts: the Next.js web app (18 of 26 components), the Express backend (12 of 22 endpoints), the provider and agent dashboards, the visual design, and the agent pay-link feature end to end. Built with Claude as an AI pair programmer.",
      es: "Construí la mayor parte de la capa de aplicación sobre los smart contracts de mi compañero: la app web en Next.js (18 de 26 componentes), el backend en Express (12 de 22 endpoints), los paneles de prestador y agente, el diseño visual y los links de pago para agentes de punta a punta. Con Claude como pair programmer de IA.",
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
    slug: "pequenito-3d",
    name: "Pequeñito",
    year: "2026",
    status: "live-demo",
    categories: ["hardware", "web"],
    featured: true,
    repo: { url: "https://github.com/frangaming67/pequenito-3d", private: false },
    demo: "https://pequenito-3d.vercel.app",
    stack: ["Three.js", "WebGL", "Vite", "glTF", "C++ (Arduino)", "ESP32-C3", "GitHub Actions"],
    accent: "#13b5a6",
    tagline: {
      en: "A pocket OLED companion: 16 expressions in WebGL, plus the firmware to build the real thing.",
      es: "Un compañero de bolsillo con pantalla OLED: 16 expresiones en WebGL y el firmware para construirlo de verdad.",
    },
    problem: {
      en: "A short video showed a tiny keychain with an animated OLED face, with no parts list, wiring or code anywhere. The goal: turn it into an interactive 3D model anyone can explore, plus a clear path to building a real one.",
      es: "Un video corto mostraba un llavero diminuto con una cara animada en una pantalla OLED, sin lista de piezas, conexiones ni código en ningún lado. El objetivo: convertirlo en un modelo 3D interactivo y en un camino claro para construir uno real.",
    },
    solution: {
      en: "The keychain is modeled entirely in code with Three.js and animated with 16 keyframed expressions. A web viewer lets you orbit, switch expressions and lighting, and download the model. A Node pipeline exports a validated glTF, and an Arduino sketch for the Seeed XIAO ESP32-C3 is written to draw the same 16 faces on an SSD1306 OLED (not yet tested on a physical board). Every build ships a downloadable kit with firmware, wiring guide and model.",
      es: "El llavero está modelado completamente en código con Three.js y animado con 16 expresiones. Un visor web permite rotarlo, cambiar expresión e iluminación y descargar el modelo. Un pipeline en Node exporta un glTF validado, y un sketch de Arduino para la Seeed XIAO ESP32-C3 está escrito para dibujar las mismas 16 caras en una pantalla SSD1306 (todavía sin probar en una placa real). Cada build genera un kit descargable con firmware, guía de conexiones y modelo.",
    },
    role: {
      en: "Sole committer. I chose the reference, defined the scope (16 expressions plus a buildable kit), validated the output and set up the deployment. The code was generated with AI tools under my direction.",
      es: "Único autor de los commits. Elegí la referencia, definí el alcance (16 expresiones y un kit construible), validé el resultado y configuré el deploy. El código se generó con herramientas de IA bajo mi dirección.",
    },
    highlights: {
      en: [
        "The whole 3D model is code: 174 meshes and 23,456 triangles, regenerated into a GLB with one command.",
        "Asset QA as a CI gate: the Khronos glTF Validator (0 errors, 0 warnings) plus checks that all 16 clips exist and animate the same 81 tracks.",
        "Non-blocking firmware: a millis() scheduler at about 30 fps, overflow-safe timing, debounced short and long presses, and display auto-detection with retry.",
        "Accessible viewer: keyboard orbit and zoom, reduced-motion support and a WebGL fallback.",
      ],
      es: [
        "Todo el modelo 3D es código: 174 mallas y 23.456 triángulos, regenerados como GLB con un solo comando.",
        "Control de calidad del modelo en CI: el validador glTF de Khronos (0 errores, 0 advertencias) y chequeos de que los 16 clips existen y animan las mismas 81 pistas.",
        "Firmware no bloqueante: un planificador con millis() a unos 30 fps, tiempos a prueba de desbordamiento, pulsación corta y larga con antirrebote, y detección automática de la pantalla con reintentos.",
        "Visor accesible: rotación y zoom con teclado, soporte de movimiento reducido y alternativa sin WebGL.",
      ],
    },
    decisions: {
      en: [
        "Model as code instead of a Blender file: one diffable, reproducible source for both the live viewer and the exported asset.",
        "Every animation clip keys every node, so switching expressions can never leave stale state. A CI assertion enforces it.",
        "The firmware drops frames after slow I²C transfers instead of queuing stale ones, and keeps running if the display is missing.",
      ],
      es: [
        "Modelo como código en vez de un archivo de Blender: una sola fuente comparable y reproducible para el visor y para el modelo exportado.",
        "Cada clip anima todos los nodos, así que cambiar de expresión nunca deja estado viejo. Un chequeo en CI lo garantiza.",
        "El firmware descarta cuadros después de una transferencia I²C lenta en vez de acumularlos, y sigue funcionando si falta la pantalla.",
      ],
    },
    facts: {
      en: [
        "16 animations · 174 meshes · 23,456 triangles",
        "400 lines of C++ firmware for the ESP32-C3",
        "glTF Validator: 0 errors, 0 warnings",
      ],
      es: [
        "16 animaciones · 174 mallas · 23.456 triángulos",
        "400 líneas de firmware en C++ para la ESP32-C3",
        "Validador glTF: 0 errores, 0 advertencias",
      ],
    },
    next: {
      en: "The physical circuit hasn't been built yet. Next: assemble the device, film it cycling through its expressions, and add a firmware compile job to CI.",
      es: "El circuito físico todavía no está armado. Lo próximo: construir el dispositivo, filmarlo pasando por sus expresiones y sumar la compilación del firmware a CI.",
    },
    cover: {
      src: "/projects/pequenito-3d/render.webp",
      width: 982,
      height: 1060,
      frame: "none",
      alt: {
        en: "3D render of Pequeñito: a small clear keychain with a two-tone OLED face, wires and a carabiner.",
        es: "Render 3D de Pequeñito: un llavero transparente con una cara OLED de dos colores, cables y un mosquetón.",
      },
    },
    gallery: [
      {
        src: "/projects/pequenito-3d/viewer.webp",
        width: 1440,
        height: 1300,
        frame: "browser",
        alt: {
          en: "The live 3D viewer with camera presets, expression grid, timeline and lighting controls.",
          es: "El visor 3D en vivo con cámaras, grilla de expresiones, línea de tiempo y control de luces.",
        },
      },
      {
        src: "/projects/pequenito-3d/wiring.webp",
        width: 1020,
        height: 540,
        frame: "none",
        alt: {
          en: "Wiring diagram: XIAO ESP32-C3 to the SSD1306 display over I²C, plus a push button.",
          es: "Diagrama de conexiones: XIAO ESP32-C3 a la pantalla SSD1306 por I²C, más un pulsador.",
        },
      },
    ],
  },
  {
    slug: "vega",
    name: "Vega",
    year: "2026",
    status: "in-progress",
    categories: ["mobile"],
    featured: false,
    repo: { url: "https://github.com/frangaming67/vega", private: true },
    stack: ["Flutter", "Dart", "Riverpod", "Drift (SQLite)", "Supabase", "PostgreSQL + RLS"],
    accent: "#6d7cff",
    tagline: {
      en: "An offline-first training and nutrition app, built so a workout logged without signal is never lost.",
      es: "Una app de entrenamiento y nutrición que funciona sin conexión, pensada para que nunca se pierda un entrenamiento.",
    },
    problem: {
      en: "People log workouts in gyms with bad signal, and fitness tracking is scattered across apps for routines, food and body metrics. Online-first apps stall or lose data offline. Vega aims to be one calm, premium place that works 100% offline and never loses a logged set.",
      es: "La gente registra entrenamientos en gimnasios con mala señal, y el seguimiento está repartido en apps distintas para rutinas, comida y medidas. Las apps que dependen de internet se traban o pierden datos. Vega busca ser un único lugar, calmo y premium, que funcione 100% offline y nunca pierda una serie registrada.",
    },
    solution: {
      en: "A Flutter app with Clean Architecture, Riverpod and GoRouter. A local SQLite database (Drift) is the source of truth, with sync-ready IDs from day one. On top of it: a reactive home dashboard, a full offline workout logger, a food diary and a custom design system called Nocturne, plus backend groundwork on Supabase with row-level security.",
      es: "Una app en Flutter con Clean Architecture, Riverpod y GoRouter. Una base SQLite local (Drift) es la fuente de verdad, con IDs listos para sincronizar desde el primer día. Encima: un inicio reactivo, un registro de entrenamientos completo offline, un diario de comidas y un sistema de diseño propio llamado Nocturne, más la base del backend en Supabase con seguridad por fila.",
    },
    role: {
      en: "Solo project: product vision, brand, architecture and the decision process (25 ADRs, 36 merged pull requests). Implemented by pair-programming with Claude; I reviewed every sprint on an Android emulator.",
      es: "Proyecto individual: visión de producto, marca, arquitectura y proceso de decisiones (25 ADRs, 36 pull requests). Implementado haciendo pair programming con Claude; revisé cada sprint en un emulador Android.",
    },
    highlights: {
      en: [
        "Local-first data layer: 23 tables with foreign-key actions, soft delete, audit columns and client-generated UUID v7 IDs, at schema v5 with append-only migrations.",
        "The home dashboard is a read model (CQRS-lite) that recomputes SQL aggregates whenever any of 7 tables changes, with no event bus.",
        "Full offline workout loop: 45 seeded exercises, routines, live sessions pre-filled from your last set for progressive overload, a rest timer and session recovery.",
        "Nocturne design system: 17 widgets driven by color, spacing and motion tokens, with 28 golden snapshot tests in dark and light.",
        "Supabase groundwork: Postgres with deny-by-default row-level security and a script that tests cross-user isolation.",
      ],
      es: [
        "Datos local-first: 23 tablas con acciones de clave foránea, borrado lógico, columnas de auditoría e IDs UUID v7 generados en el cliente, en la versión 5 del esquema con migraciones sólo aditivas.",
        "El inicio es un modelo de lectura (CQRS-lite) que recalcula agregados SQL cada vez que cambia alguna de 7 tablas, sin bus de eventos.",
        "Entrenamiento completo offline: 45 ejercicios precargados, rutinas, sesiones en vivo que precargan tu última serie para la sobrecarga progresiva, temporizador de descanso y recuperación de sesión.",
        "Sistema de diseño Nocturne: 17 widgets basados en tokens de color, espaciado y movimiento, con 28 tests de captura en modo oscuro y claro.",
        "Base en Supabase: Postgres con seguridad por fila que niega todo por defecto y un script que prueba el aislamiento entre usuarios.",
      ],
    },
    decisions: {
      en: [
        "ADR-0007 · Offline by design: SQLite is the source of truth and sync is infrastructure. Online-first with a cache was rejected because it breaks without signal.",
        "ADR-0023 · Guest-first identity: linking an account later never re-keys local data, because client and server share the same UUID v7.",
        "ADR-0020 · Replaced the original Laravel backend plan with Supabase to cut backend work for a solo developer.",
        "ADR-0019 · Motion as physics through tokens, with blur reserved for stacked surfaces to avoid jank on mid-range phones.",
      ],
      es: [
        "ADR-0007 · Offline por diseño: SQLite es la fuente de verdad y la sincronización es infraestructura. Se descartó online con caché porque falla sin señal.",
        "ADR-0023 · Identidad de invitado primero: vincular una cuenta después nunca cambia las claves locales, porque cliente y servidor comparten el mismo UUID v7.",
        "ADR-0020 · Se reemplazó el plan original de backend en Laravel por Supabase para reducir trabajo de backend siendo una sola persona.",
        "ADR-0019 · El movimiento como física a través de tokens, y el desenfoque sólo en superficies apiladas para no trabar celulares de gama media.",
      ],
    },
    facts: {
      en: [
        "91 Dart files · 9.1k lines (excluding generated code)",
        "91 test cases, 14 of them golden tests (28 snapshots, dark and light)",
        "25 ADRs · 36 merged pull requests",
        "7 screens plus 2 picker sheets",
      ],
      es: [
        "91 archivos Dart · 9,1 mil líneas (sin código generado)",
        "91 casos de test, 14 de ellos golden (28 capturas, oscuro y claro)",
        "25 ADRs · 36 pull requests",
        "7 pantallas y 2 selectores",
      ],
    },
    next: {
      en: "Accounts, sync and onboarding are designed but not built yet. Next: get CI green, wire the Progress screen to real data and publish an Android build.",
      es: "Las cuentas, la sincronización y el onboarding están diseñados pero todavía no construidos. Lo próximo: dejar CI en verde, conectar Progreso a datos reales y publicar una versión para Android.",
    },
    cover: {
      src: "/projects/vega/home.webp",
      width: 720,
      height: 1600,
      frame: "phone",
      alt: {
        en: "Vega home screen in the Nocturne design: \"Your day\" card with three progress rings and a gradient call to action.",
        es: "Inicio de Vega con el diseño Nocturne: tarjeta \"Tu día\" con tres anillos de progreso y un botón con degradé.",
      },
    },
    gallery: [
      {
        src: "/projects/vega/home-data.webp",
        width: 720,
        height: 1600,
        frame: "phone",
        alt: { en: "Home with a logged meal: the nutrition ring at 100%.", es: "Inicio con una comida registrada: el anillo de nutrición al 100%." },
      },
      {
        src: "/projects/vega/nutrition.webp",
        width: 720,
        height: 1600,
        frame: "phone",
        alt: { en: "Food diary with per-meal sections and a calorie ring.", es: "Diario de comidas por momento del día con anillo de calorías." },
      },
      {
        src: "/projects/vega/numberpad.webp",
        width: 720,
        height: 1600,
        frame: "phone",
        alt: { en: "Custom number pad for entering grams.", es: "Teclado numérico propio para cargar gramos." },
      },
      {
        src: "/projects/vega/food-picker.webp",
        width: 720,
        height: 1600,
        frame: "phone",
        alt: { en: "Food search with macros per 100 g.", es: "Buscador de alimentos con macros cada 100 g." },
      },
      {
        src: "/projects/vega/progress.webp",
        width: 720,
        height: 1600,
        frame: "phone",
        alt: { en: "Progress screen design (sample data).", es: "Diseño de la pantalla de progreso (datos de ejemplo)." },
      },
    ],
  },
  {
    slug: "mathvoice",
    name: "MathVoice",
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
      en: "A client-only React and TypeScript web app that treats accessibility as architecture. Ten tools (calculator, algebra and calculus, matrices, statistics, graphs and more) behind one keyboard-first interface. Results and step-by-step procedures are read aloud, graphs can be explored with arrow keys and sound, and everything runs locally in Web Workers, offline.",
      es: "Una app web en React y TypeScript, sin servidor, que trata la accesibilidad como arquitectura. Diez herramientas (calculadora, álgebra y cálculo, matrices, estadística, gráficos y más) detrás de una interfaz pensada para teclado. Los resultados y los pasos se leen en voz alta, los gráficos se exploran con flechas y sonido, y todo corre localmente en Web Workers, sin conexión.",
    },
    role: {
      en: "Product owner and spec author. I wrote the requirements (usable without looking at the screen), the 5-phase roadmap and a strict inspect, fix, test, close protocol, and accepted each phase against tests and dated audits. The code was written by the OpenAI Codex agent from that spec.",
      es: "Product owner y autor de la especificación. Escribí los requisitos (usable sin mirar la pantalla), la hoja de ruta en 5 fases y un protocolo estricto de inspeccionar, corregir, testear y cerrar, y aprobé cada fase contra tests y auditorías fechadas. El código lo escribió el agente Codex de OpenAI a partir de esa especificación.",
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
        "10 tools · 5 visual themes, including high contrast",
        "No backend, no account: runs entirely in the browser",
      ],
      es: [
        "186 tests automatizados en CI (unitarios, de navegador y sin conexión)",
        "10 herramientas · 5 temas visuales, incluido alto contraste",
        "Sin servidor ni cuenta: corre entero en el navegador",
      ],
    },
    next: {
      en: "Validate it with real screen-reader users (NVDA, JAWS, VoiceOver) and publish a live demo.",
      es: "Validarlo con personas que usan lectores de pantalla (NVDA, JAWS, VoiceOver) y publicar una demo en vivo.",
    },
    cover: {
      src: "/projects/mathvoice/steps.webp",
      width: 1600,
      height: 1075,
      frame: "browser",
      alt: {
        en: "High-contrast theme: solve(x^2-5x+6=0) gives x = 2 and x = 3, with a 6-step procedure and \"listen to step\" buttons.",
        es: "Tema de alto contraste: solve(x^2-5x+6=0) da x = 2 y x = 3, con un procedimiento de 6 pasos y botones para escuchar cada paso.",
      },
    },
    gallery: [
      {
        src: "/projects/mathvoice/graph.webp",
        width: 1440,
        height: 700,
        frame: "none",
        alt: {
          en: "Two functions plotted as solid and dashed curves, distinguishable without color.",
          es: "Dos funciones graficadas con línea continua y punteada, distinguibles sin color.",
        },
      },
      {
        src: "/projects/mathvoice/events.webp",
        width: 1353,
        height: 1206,
        frame: "browser",
        alt: {
          en: "Text description of a graph: zeros, extrema and intersections, each with a \"go to this point\" button.",
          es: "Descripción en texto de un gráfico: ceros, extremos e intersecciones, cada uno con un botón para ir a ese punto.",
        },
      },
    ],
  },
  {
    slug: "cortina",
    name: "Cortina Lab",
    year: "2026",
    status: "early-stage",
    categories: ["hardware", "web"],
    featured: false,
    repo: { url: "https://github.com/frangaming67/cortina", private: false },
    stack: ["Python", "JavaScript", "Three.js", "Vite", "GitHub Actions", "ESP32 (planned)"],
    accent: "#7cb342",
    tagline: {
      en: "Safety-first roller-blind automation: tested control logic and a 3D simulator, before buying a single motor.",
      es: "Una cortina automática que prioriza la seguridad: lógica de control con tests y un simulador 3D, antes de comprar un solo motor.",
    },
    problem: {
      en: "I wanted my ball-chain roller blind to open by itself every morning at 08:00. The timer is the easy part. A motor pulling a chain must never fight a jam, never fire twice after a reboot or a clock jump, and must fail safe. Buying the wrong motor was a real risk too.",
      es: "Quería que mi cortina roller de cadena se abriera sola todas las mañanas a las 08:00. El temporizador es lo fácil. Un motor que tira de una cadena nunca debe forzar un atasco, nunca debe dispararse dos veces tras un reinicio o un salto de reloj, y debe fallar de forma segura. Comprar el motor equivocado también era un riesgo real.",
    },
    solution: {
      en: "The behavior is specified and tested in software before any hardware is bought: a 4-state controller with injected motor and storage, 14 unit tests in CI, first-principles torque sizing, and Cortina Lab, an interactive Three.js simulator to compare motors, tune the mechanism and simulate a jam.",
      es: "El comportamiento se especifica y se prueba en software antes de comprar hardware: un controlador de 4 estados con motor y almacenamiento inyectados, 14 tests unitarios en CI, el torque calculado desde principios básicos y Cortina Lab, un simulador interactivo en Three.js para comparar motores, ajustar el mecanismo y simular un atasco.",
    },
    role: {
      en: "Sole contributor. I set the real-world requirements (open at 08:00, stiff chain, outlet 3 m away) and inventoried my own hardware kit, then directed an AI-assisted build of the controller, tests, docs and simulator.",
      es: "Único contribuidor. Definí los requisitos reales (abrir a las 08:00, cadena dura, enchufe a 3 m) e inventarié mi propio kit de hardware, y después dirigí con asistencia de IA la construcción del controlador, los tests, la documentación y el simulador.",
    },
    highlights: {
      en: [
        "Write-ahead attempt log: the day's attempt is saved before the motor moves, so the blind opens at most once a day, even across reboots.",
        "Time safety: the run timeout uses a monotonic clock, a clock that jumps backwards never re-triggers, and a missed 08:00 is never \"caught up\".",
        "Torque sized from first principles: 3.0 kgf·cm required, assuming a 2 kgf chain pull (not yet measured). The simulator shows the stepper from my kit at 0.1x of what's needed, which rules it out before I buy a motor.",
      ],
      es: [
        "Registro previo del intento: el intento del día se guarda antes de mover el motor, así la cortina se abre como máximo una vez por día, incluso tras reinicios.",
        "Seguridad temporal: el límite de tiempo usa un reloj monotónico, un reloj que retrocede nunca vuelve a disparar y unas 08:00 perdidas nunca se \"recuperan\".",
        "Torque calculado desde principios básicos: hacen falta 3,0 kgf·cm, suponiendo una tracción de 2 kgf en la cadena (todavía sin medir). El simulador muestra que el motor paso a paso de mi kit llega a 0,1x de lo necesario, y lo descarta antes de comprar un motor.",
      ],
    },
    decisions: {
      en: [
        "Specification by executable model: the rules live in a hardware-agnostic controller, so the same tests can check the future ESP32 firmware.",
        "Fail closed: fault and stop states latch until reset, there are no automatic same-day retries, and an invalid clock never starts a run.",
      ],
      es: [
        "Especificación con un modelo ejecutable: las reglas viven en un controlador independiente del hardware, así los mismos tests sirven para el futuro firmware del ESP32.",
        "Fallar cerrado: los estados de falla y parada quedan trabados hasta reiniciar, no hay reintentos automáticos en el día y un reloj inválido nunca arranca el motor.",
      ],
    },
    facts: {
      en: [
        "14 Python unit tests, green in CI on every push; 3 JS tests run locally",
        "4 motors compared in the simulator",
        "Hardware not built yet: design and simulation stage",
      ],
      es: [
        "14 tests unitarios en Python, en verde en CI en cada push; 3 tests en JS que corren en local",
        "4 motores comparados en el simulador",
        "Hardware todavía sin construir: etapa de diseño y simulación",
      ],
    },
    cover: {
      src: "/projects/cortina/overview.webp",
      width: 800,
      height: 505,
      frame: "browser",
      alt: {
        en: "Cortina Lab: 3D roller blind with chain and motor, a simulated clock and motor settings.",
        es: "Cortina Lab: cortina 3D con cadena y motor, reloj simulado y ajustes del motor.",
      },
    },
    gallery: [
      {
        src: "/projects/cortina/mechanism.webp",
        width: 800,
        height: 600,
        frame: "browser",
        alt: { en: "Close-up of the gearmotor, drive wheel and bead chain.", es: "Primer plano del motorreductor, la rueda y la cadena." },
      },
      {
        src: "/projects/cortina/motors.webp",
        width: 800,
        height: 600,
        frame: "browser",
        alt: {
          en: "Motor comparison: only the geared motor has enough torque margin.",
          es: "Comparación de motores: sólo el motorreductor tiene margen de torque suficiente.",
        },
      },
    ],
  },
  {
    slug: "mza-beats",
    name: "MzaBeats",
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
      en: ["78 commits · 4 pull requests", "My share: 19 commits, +1,476 lines"],
      es: ["78 commits · 4 pull requests", "Mi parte: 19 commits, +1.476 líneas"],
    },
    gallery: [],
  },
  {
    slug: "blackjack-java",
    name: "Blackjack Java",
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
  // FrontDesk 32 + MediTurnos 332 + MathVoice 186 + Cortina 17
  tests: "560+",
  // Vega 25 + MediTurnos 4
  adrs: 29,
};

export const skills: { title: L; items: string[] }[] = [
  {
    title: { en: "Languages", es: "Lenguajes" },
    items: ["TypeScript", "JavaScript", "PHP", "SQL", "Dart", "Java"],
  },
  {
    title: { en: "Web", es: "Web" },
    items: ["React", "Next.js", "Tailwind CSS", "Three.js / WebGL", "wagmi + viem"],
  },
  {
    title: { en: "Mobile", es: "Móvil" },
    items: ["Flutter", "Riverpod", "Drift (SQLite)", "Offline-first architecture"],
  },
  {
    title: { en: "Data & backend", es: "Datos y backend" },
    items: ["MariaDB / MySQL", "PostgreSQL + Supabase (RLS)", "Express", "Redis (Upstash)", "Vercel"],
  },
  {
    title: { en: "Hardware (design stage)", es: "Hardware (etapa de diseño)" },
    items: ["ESP32-C3", "Arduino", "I²C / OLED displays", "Motor sizing & control logic"],
  },
  {
    title: { en: "How I work", es: "Cómo trabajo" },
    items: [
      "AI coding agents (Claude Code, Codex)",
      "Architecture Decision Records",
      "Automated testing (Vitest, Playwright)",
      "GitHub Actions CI",
      "Git Flow & pull requests",
    ],
  },
];
