import ProjectGallery from "./components/project-gallery";

const featuredProjects = [
  {
    title: "webNexus Shop",
    label: "Marketplace build",
    year: "2025",
    summary:
      "A Laravel marketplace where buyers shop, check out with GCash or cash on delivery, and confirm delivery while sellers manage listings and fulfillment from their own dashboard.",
    vibe:
      "Built like a real product, not a class demo. The flow covers discovery, cart, checkout, seller operations, reviews, and escrow-style release tracking.",
    stack: [
      "Laravel 10",
      "PHP 8.1+",
      "MySQL",
      "Blade",
      "Vite",
      "PayMongo",
      "Guzzle HTTP client",
      "Session auth",
      "Custom CSS",
    ],
    repoUrl: "https://github.com/8qVoid/nexus-shop",
    tools: [
      "GCash payments through PayMongo Checkout Sessions",
      "Laravel session-based authentication",
      "Seller and buyer role checks",
      "Escrow-style order state handling",
    ],
    screenshots: [
      {
        src: "/projects/nexus/home.png",
        alt: "Nexus Shop marketplace landing page",
      },
      {
        src: "/projects/nexus/product.png",
        alt: "Nexus Shop product detail page",
      },
      {
        src: "/projects/nexus/signup.png",
        alt: "Nexus Shop account sign up page",
      },
      {
        src: "/projects/nexus/login.png",
        alt: "Nexus Shop login page",
      },
    ],
    screenshotLabel: "Drop Nexus Shop homepage or dashboard screenshot here",
    highlights: [
      "Role-based buyer and seller experience",
      "GCash checkout through PayMongo Checkout Sessions",
      "Order lifecycle from processing to completed",
      "Reviews, ratings, and escrow release tracking",
    ],
    flow: [
      "Browse products and shop pages",
      "Add to cart and check out",
      "Pay with GCash or choose cash on delivery",
      "Seller processes and ships the order",
      "Buyer confirms receipt and submits a review",
    ],
  },
  {
    title: "Skill Swap Platform",
    label: "Peer-to-peer learning app",
    year: "2026",
    summary:
      "A Laravel app for people who want to trade skills through 1-on-1 exchanges, from onboarding and matching to messaging, session scheduling, and reviews.",
    vibe:
      "This one leans more product-first. It is about making people feel guided through the full exchange, not just proving CRUD works.",
    stack: [
      "Laravel 13",
      "PHP 8.3",
      "MySQL",
      "Blade",
      "Vite",
      "Laravel file storage",
      "PHPUnit",
      "Custom CSS",
      "File uploads",
    ],
    repoUrl: "https://github.com/8qVoid/skill-swap-platform",
    tools: [
      "Profile photo upload with storage linking",
      "Matching filters by skill, level, timezone, and format",
      "Swap workflow with chat, shared notes, and scheduling",
      "Laravel test suite via php artisan test",
    ],
    screenshots: [
      {
        src: "/projects/skill-swap/home.png",
        alt: "Skill Swap Platform landing page",
      },
      {
        src: "/projects/skill-swap/how.png",
        alt: "Skill Swap Platform how it works section",
      },
      {
        src: "/projects/skill-swap/signup.png",
        alt: "Skill Swap Platform sign up page",
      },
      {
        src: "/projects/skill-swap/login.png",
        alt: "Skill Swap Platform login page",
      },
    ],
    screenshotLabel:
      "Drop Skill Swap onboarding, match feed, or chat screenshot here",
    highlights: [
      "Onboarding built around teach and learn goals",
      "Match discovery with filters for skill, level, timezone, and format",
      "Swap request workflow with accept and decline actions",
      "Messaging, shared notes, scheduling, and post-session reviews",
    ],
    flow: [
      "Create a profile with teach and learn skills",
      "Browse suggested matches",
      "Send or accept a swap request",
      "Chat, plan sessions, and share notes",
      "Complete the exchange and leave a review",
    ],
  },
  {
    title: "Exist",
    label: "Android memory journal app",
    year: "2026",
    summary:
      'A Kotlin Android app focused on daily memory capture with the idea: "Proof you existed today." It helps users document each day through photos, emotion tags, recaps, prompts, and analytics.',
    vibe:
      "This project pushed me into mobile product thinking. It is more personal and reflective, but still built with real structure across onboarding, local auth, camera capture, storage, and analytics.",
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Material 3",
      "MVVM",
      "Room",
      "DataStore",
      "CameraX",
      "Coil",
      "WorkManager",
      "Java 17",
    ],
    repoUrl: "https://github.com/8qVoid/Exist.git",
    tools: [
      "Local email and password auth persisted on device",
      "CameraX photo capture with optional video challenge mode",
      "Room database with reactive screen updates",
      "WorkManager random local prompt notifications",
    ],
    screenshots: [
      {
        src: "/projects/exist/Dashboard.png",
        alt: "Exist app dashboard screen",
      },
      {
        src: "/projects/exist/Highlights.png",
        alt: "Exist app highlights screen",
      },
      {
        src: "/projects/exist/Analytics.png",
        alt: "Exist app analytics screen",
      },
    ],
    screenshotLabel:
      "Drop Exist dashboard, camera flow, analytics, or recap screenshot here",
    highlights: [
      "Daily proof capture with multiple photos per day",
      "Emotion tagging, captions, temporary memory mode, and expiry filtering",
      "Dashboard, archive, recap slideshow, analytics, and profile tabs",
      "Trend charts, reminders, and local-first persistence",
    ],
    flow: [
      "Create a local account and finish onboarding",
      "Capture today's proof with photo, emotion, and caption",
      "Save multiple memories for the same day",
      "Review recap, archive, and analytics screens",
      "Manage reminders and challenge settings in profile",
    ],
  },
  {
    title: "2Way Camera",
    label: "Dual-format camera app",
    year: "2026",
    summary:
      "A Kotlin Android camera app that records one moment and exports it in vertical 9:16 and horizontal 16:9 formats for short-form and landscape video workflows.",
    vibe:
      "Built for creators who need to frame once and publish in two formats. The app focuses on practical camera controls, live composition, local saving, and privacy-friendly export behavior.",
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Material 3",
      "Camera2 API",
      "MediaRecorder",
      "AndroidX Media3",
      "Accompanist Permissions",
      "Gradle Kotlin DSL",
      "JDK 21",
    ],
    repoUrl: "https://github.com/8qVoid/2Way-Camera.git",
    tools: [
      "Dual live preview for vertical and horizontal framing",
      "Camera2 preview and recording pipeline",
      "Media3 Transformer for aspect-ratio exports",
      "Local gallery saves without an in-app upload path",
    ],
    screenshots: [
      {
        src: "/projects/2Way Camera/image.png",
        alt: "2Way Camera app preview",
      },
    ],
    screenshotLabel: "Drop 2Way Camera preview screenshots here",
    highlights: [
      "Vertical 9:16 and horizontal 16:9 export options",
      "One-tap recording with pause and resume",
      "Tap-to-focus, flash toggle, and front/back camera switch",
      "Recent video thumbnail and gallery save flow",
    ],
    flow: [
      "Open the camera preview",
      "Compose for vertical and horizontal output",
      "Record with focus, flash, and camera controls",
      "Choose whether to create a second export",
      "Save videos locally under Movies/2WayCamera",
    ],
  },
  {
    title: "SyncUp",
    label: "Accountability partner finder",
    year: "2026",
    summary:
      "A platform connecting people with accountability partners to stay consistent with their habits and goals through discovery, profiles, and secure messaging.",
    vibe:
      "Focused on secure user flows and clean discovery. Features 'Teaser Mode' which allows open browsing of partners while gating interaction behind authentication.",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "Lucide Icons",
      "Canvas Confetti",
      "Custom CSS",
    ],
    repoUrl: "https://github.com/8qVoid/accountability-partner-finder.git",
    tools: [
      "Teaser Mode discovery gating",
      "Partner matching and profile management",
      "Interactive connection requests",
      "Dynamic dashboard with partnership tracking",
    ],
    screenshots: [
      {
        src: "/projects/accountability-partner-finder/landing_page_png_1775963495913.png",
        alt: "SyncUp landing page",
      },
      {
        src: "/projects/accountability-partner-finder/discovery_page_png_1775963519968.png",
        alt: "SyncUp partner discovery feed",
      },
      {
        src: "/projects/accountability-partner-finder/partner_profile_png_1775963531275.png",
        alt: "SyncUp partner profile details",
      },
      {
        src: "/projects/accountability-partner-finder/auth_modal_png_1775963508014.png",
        alt: "SyncUp authentication modal",
      },
      {
        src: "/projects/accountability-partner-finder/partnership_dashboard_png_1775963843509.png",
        alt: "SyncUp partnership dashboard",
      },
    ],
    screenshotLabel: "Check out the discovery feed, partner profiles, and dashboard",
    highlights: [
      "Secure Teaser Mode for onboarding",
      "Real-time partner discovery and filtering",
      "Comprehensive partner profiles and reputation",
      "Partnership lifecycle management",
    ],
    flow: [
      "Explore the discovery feed",
      "Review potential partners",
      "Join or sign in to connect",
      "Manage partnerships on the dashboard",
      "Track progress and stay accountable",
    ],
  },
];

const principles = [
  {
    title: "I build full flows",
    description:
      "I like projects that feel usable end to end, with dashboards, edge cases, status changes, and enough polish to feel real.",
  },
  {
    title: "I build across web and mobile",
    description:
      "I am comfortable jumping between Laravel products, frontend portfolio work, and Android app flows when the idea deserves a different format.",
  },
  {
    title: "I ship fast with taste",
    description:
      "Vibe coding is a strength when the taste level is high. I move quickly, but I still care about flow, copy, and product feel.",
  },
  {
    title: "I learn by making",
    description:
      "Most of my growth comes from shipping ambitious portfolio projects and figuring things out inside the build, not waiting until I know everything first.",
  },
];

const toolbox = [
  "Laravel",
  "PHP",
  "MySQL",
  "Next.js",
  "React",
  "Blade",
  "Android",
  "Jetpack Compose",
  "Camera2",
  "Media3",
  "Tailwind CSS",
  "Vite",
  "JavaScript",
  "TypeScript",
  "PayMongo",
  "Room",
  "CameraX",
  "Product thinking",
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[var(--background)] text-[var(--color-ink)]">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-0 right-0 top-[30rem] h-44 rotate-[-1deg] bg-[var(--color-accent)]/65" />
        <div className="absolute left-[-6rem] top-24 h-56 w-56 rounded-full border border-[var(--color-ink)]/10" />
        <div className="absolute right-[-3rem] top-[48rem] h-36 w-36 rounded-full border border-[var(--color-ink)]/10" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-10 pt-8 sm:px-8 lg:px-10">
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.16em]">
          Portfolio / Product notes
        </p>
        <div className="paper-shell border-[1.5px] border-[var(--color-ink)] px-5 py-6 sm:px-8 lg:px-10">
        <header className="mb-14 flex flex-col gap-5 border-b border-[var(--color-ink)]/25 pb-6 md:flex-row md:items-start md:justify-between">
          <div className="font-display text-3xl font-bold lowercase leading-none">
            mark.dev
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[0.68rem] uppercase tracking-[0.16em]">
              <a href="#about" className="ink-link">
                About
              </a>
              <a href="#projects" className="ink-link">
                Work
              </a>
              <a href="#skills" className="ink-link">
                Skills
              </a>
              <a href="#vibe-coding" className="ink-link">
                Process
              </a>
              <a href="#contact" className="ink-link">
                Contact
              </a>
            </nav>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em]">
              Mark Laurence Erezuela / portfolio
            </p>
            <h1 className="mt-8 max-w-2xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              Building useful web and mobile products from rough ideas.
            </h1>
            <p className="mt-7 max-w-xl font-mono text-sm uppercase leading-8 tracking-[0.18em]">
              Full-stack apps / Android flows / portfolio systems
            </p>
            <p className="mt-8 max-w-lg text-base leading-8">
              I like turning messy concepts into <span className="highlight-text">usable product flows</span> with
              real screens, clear states, and enough structure to feel shippable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="glow-btn border border-[var(--color-ink)] bg-[var(--color-accent)] px-6 py-3 font-mono text-sm uppercase tracking-[0.16em]"
              >
                Open the work -&gt;
              </a>
              <a
                href="#about"
                className="border border-[var(--color-ink)] bg-[var(--color-paper)] px-6 py-3 font-mono text-sm uppercase tracking-[0.16em] shadow-[3px_3px_0_rgba(39,35,29,0.13)] transition hover:-translate-y-0.5"
              >
                About me
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="glass-card rotate-[0.7deg] p-5">
              <div className="aspect-[4/3] border border-[var(--color-ink)] bg-[#f5ead4] p-6">
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between gap-6">
                    <p className="font-mono text-xs uppercase leading-6 tracking-[0.18em]">
                      Current focus
                    </p>
                    <span className="rounded-full border border-[var(--color-ink)] px-3 py-1 font-mono text-xs">
                      2026
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="h-3 w-3 rounded-full bg-[var(--color-warm)]" />
                    <p className="font-display text-4xl leading-none">
                      portfolio builds that behave like real products
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 font-mono text-[0.65rem] uppercase tracking-[0.12em]">
                    <span className="border-t border-[var(--color-ink)] pt-2">UI</span>
                    <span className="border-t border-[var(--color-ink)] pt-2">Logic</span>
                    <span className="border-t border-[var(--color-ink)] pt-2">Flow</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="absolute -right-4 top-24 hidden rotate-[-6deg] font-mono text-sm sm:block">
              less demo,<br />more product
            </p>
          </div>
        </div>

        <div className="soft-band -mx-5 mt-16 grid gap-5 border-y border-[var(--color-ink)]/20 px-5 py-8 sm:-mx-8 sm:grid-cols-3 sm:px-8 lg:-mx-10 lg:px-10">
              <div>
                <p className="font-display text-4xl">
                  5
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em]">
                  Portfolio builds
                </p>
              </div>
              <div>
                <p className="font-display text-4xl">
                  Web + mobile
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em]">
                  UI, auth, flows, dashboards
                </p>
              </div>
              <div>
                <p className="font-display text-4xl">
                  Product-first
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em]">
                  Not just static landing pages
                </p>
              </div>
        </div>
        </div>
      </section>

      <section
        id="projects"
        className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
      >
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.16em]">
          Selected work
        </p>
        <div className="paper-shell border-[1.5px] border-[var(--color-ink)] px-5 py-10 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 text-center lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em]">
              Selected projects
            </p>
            <h2 className="sketch-line mx-auto mt-3 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
              Projects with product flow
            </h2>
          </div>
          <p className="mx-auto max-w-2xl text-sm leading-7 sm:text-base">
            These projects go beyond CRUD screenshots. They include account
            states, user journeys, workflow logic, mobile capture flows, and
            enough UI polish to feel like real products.
          </p>
        </div>

        <div className="grid gap-8">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className="grid gap-6 glass-card p-5 lg:p-7"
            >
              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="flex flex-col justify-between gap-6 border border-[var(--color-ink)]/25 bg-[var(--color-paper)]/70 p-5">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em]">
                      0{index + 1} / {project.label}
                    </p>
                    <h3 className="mt-4 font-display text-3xl leading-none sm:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 sm:text-base">
                      {project.summary}
                    </p>
                    <p className="mt-4 border-l border-[var(--color-ink)]/35 pl-4 text-sm leading-7">
                      {project.vibe}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.18em]">
                      Stack
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="border border-[var(--color-ink)]/30 bg-[#f4ecd9] px-3 py-1.5 font-mono text-xs uppercase tracking-[0.08em]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex border border-[var(--color-ink)] bg-[var(--color-accent)] px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] shadow-[3px_3px_0_rgba(39,35,29,0.13)] transition hover:-translate-y-0.5"
                    >
                      View GitHub repo -&gt;
                    </a>
                  </div>
                </div>

                <div className="relative overflow-hidden border border-dashed border-[var(--color-ink)]/45 bg-[#f5ead4] p-5">
                  <div className="tape absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rotate-[-5deg]" />
                  {project.screenshots ? (
                    <ProjectGallery
                      screenshots={project.screenshots}
                      priority={index === 0}
                    />
                  ) : (
                    <div className="relative flex h-full min-h-72 flex-col justify-between border border-[var(--color-ink)]/25 bg-[var(--color-paper)] p-5">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.18em]">
                          Screenshot placeholder
                        </p>
                        <h4 className="mt-4 font-display text-2xl">
                          Replace with your real project preview
                        </h4>
                      </div>
                      <div className="space-y-4">
                        <p className="max-w-sm text-sm leading-7">
                          {project.screenshotLabel}
                        </p>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="h-16 border border-[var(--color-ink)]/25 bg-[#f4ecd9]" />
                          <div className="h-16 border border-[var(--color-ink)]/25 bg-[#f4ecd9]" />
                          <div className="h-16 border border-[var(--color-ink)]/25 bg-[#f4ecd9]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="border border-[var(--color-ink)]/25 bg-[#f8f1df] p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.18em]">
                    Core features
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-7">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-warm)]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-[var(--color-ink)]/25 bg-[#f8f1df] p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.18em]">
                    User journey
                  </p>
                  <ol className="mt-4 space-y-3 text-sm leading-7">
                    {project.flow.map((step, stepIndex) => (
                      <li key={step} className="flex gap-3">
                        <span className="font-mono text-[var(--color-accent-soft)]">
                          0{stepIndex + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="border border-[var(--color-ink)]/25 bg-[#f8f1df] p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.18em]">
                    Tools used
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-7">
                    {project.tools.map((tool) => (
                      <li key={tool} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                        <span>{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
      >
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.16em]">
          About
        </p>
        <div className="paper-shell grid gap-8 border-[1.5px] border-[var(--color-ink)] px-5 py-10 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-[0.2em]">
            About this portfolio
          </p>
          <h2 className="sketch-line mt-4 font-display text-4xl leading-tight sm:text-5xl">
            I&apos;m a vibe coder, but the work still has structure.
          </h2>
          <p className="mt-6 text-base leading-8">
            I like moving quickly from idea to interface, whether that means a
            website, a full-stack web app, or an Android app. Then I layer in
            the logic that makes the product credible. My portfolio is less
            about saying I know everything and more about proving I can build
            something useful, visual, and complete.
          </p>
          <p className="mt-4 text-base leading-8">
            The goal is simple: make projects that look good, behave well, and
            show clear user-centered thinking.
          </p>
        </div>

        <div className="grid gap-5">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="glass-card p-5"
            >
              <h3 className="font-display text-3xl leading-none">
                {principle.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 sm:text-base">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
        </div>
      </section>

      <section
        id="vibe-coding"
        className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
      >
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.16em]">
          Process
        </p>
        <div className="paper-shell grid gap-8 border-[1.5px] border-[var(--color-ink)] px-5 py-10 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div className="border border-[var(--color-ink)] bg-[#f5ead4] p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em]">
            Vibe coding, with care
          </p>
          <h2 className="mt-4 font-display text-4xl leading-none sm:text-5xl">
            I vibe code, but I still care about product quality.
          </h2>
          <p className="mt-6 text-base leading-8">
            For me, vibe coding means moving fast, exploring ideas visually,
            and building momentum without overthinking every tiny decision. But
            I still care about UX, flow, structure, and whether the product
            feels believable when someone actually uses it.
          </p>
        </div>

        <div className="grid gap-5">
          <article className="glass-card p-6">
            <h3 className="font-display text-3xl leading-none">
              How I use it
            </h3>
            <p className="mt-4 text-sm leading-7 sm:text-base">
              I use vibe coding to get from idea to interface quickly, then I
              refine the details until the build feels intentional, polished,
              and actually usable.
            </p>
          </article>
          <article className="glass-card p-6">
            <h3 className="font-display text-3xl leading-none">
              What still matters
            </h3>
            <p className="mt-4 text-sm leading-7 sm:text-base">
              Clean product flow, readable UI, logical state changes, and a
              final result that feels like a real product instead of a random
              prototype.
            </p>
          </article>
        </div>
        </div>
      </section>

      <section
        id="skills"
        className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10"
      >
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.16em]">
          Skills
        </p>
        <div className="paper-shell relative overflow-hidden border-[1.5px] border-[var(--color-ink)] px-5 py-10 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em]">
                Toolbox
              </p>
              <h2 className="sketch-line mt-3 font-display text-4xl leading-none sm:text-5xl">
                The stack I like using to ship ideas fast.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 sm:text-base">
              My best work usually sits at the intersection of backend logic,
              practical UI, and product thinking. These are the tools I keep
              reaching for.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {toolbox.map((item) => (
              <span
                key={item}
                className="border border-[var(--color-ink)]/35 bg-[#f4ecd9] px-4 py-2 font-mono text-xs uppercase tracking-[0.1em]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-7xl px-5 pb-24 pt-8 sm:px-8 lg:px-10"
      >
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.16em]">
          Contact
        </p>
        <div className="paper-shell relative border-[1.5px] border-[var(--color-ink)] px-5 py-10 sm:px-8 lg:px-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em]">
            Contact
          </p>
          <h2 className="mt-4 font-display text-4xl leading-none sm:text-5xl">
            Let&apos;s build something cool.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8">
            If you want someone who can build websites and apps, move fast, and
            still care about the product feel, you can reach me here.
          </p>
          <a
            href="mailto:moosec06@gmail.com"
            className="glow-btn mt-8 inline-flex border border-[var(--color-ink)] bg-[var(--color-accent)] px-8 py-4 font-mono text-sm uppercase tracking-[0.16em]"
          >
            moosec06@gmail.com -&gt;
          </a>
          <div className="tape absolute right-8 top-10 hidden h-24 w-32 rotate-[4deg] p-4 font-mono text-xs uppercase tracking-[0.12em] sm:block">
            email me
          </div>
        </div>
      </section>
    </main>
  );
}
