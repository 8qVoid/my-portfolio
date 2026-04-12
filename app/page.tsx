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
    <main className="relative overflow-hidden bg-[var(--color-ink)] text-[var(--color-paper)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-6rem] h-96 w-96 rounded-full bg-[var(--color-accent)]/20 blur-[100px] animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute right-[-6rem] top-32 h-96 w-96 rounded-full bg-[var(--color-warm)]/20 blur-[100px] animate-[pulse-glow_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-10rem] left-1/3 h-[40rem] w-[40rem] rounded-full bg-[var(--color-accent-deep)]/20 blur-[120px] animate-[float_10s_ease-in-out_infinite_reverse]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,240,255,0.05),transparent_40%),linear-gradient(180deg,rgba(5,5,7,0.8),rgba(5,5,7,1))]" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-6 sm:px-10 lg:px-12">
        <header className="mb-14 flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--color-accent-soft)]">
              Mark Laurence Erezuela // vibe coder portfolio
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
              I build websites and apps that turn raw ideas into <span className="highlight-text">products people can actually use.</span>
            </h1>
          </div>

          <div className="max-w-sm space-y-4 text-sm leading-7 text-white/72 sm:text-base">
            <p>
              I build portfolio websites, full-stack web apps, and Android apps
              with strong product flow, clean UI, and enough logic to feel real
              instead of fake-pretty.
            </p>
            <nav className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-white/48">
              <a href="#about" className="rounded-full border border-white/10 px-3 py-1.5 hover:text-[var(--color-accent-soft)]">
                About
              </a>
              <a href="#projects" className="rounded-full border border-white/10 px-3 py-1.5 hover:text-[var(--color-accent-soft)]">
                Projects
              </a>
              <a href="#skills" className="rounded-full border border-white/10 px-3 py-1.5 hover:text-[var(--color-accent-soft)]">
                Skills
              </a>
              <a href="#vibe-coding" className="rounded-full border border-white/10 px-3 py-1.5 hover:text-[var(--color-accent-soft)]">
                Vibe coding
              </a>
              <a href="#contact" className="rounded-full border border-white/10 px-3 py-1.5 hover:text-[var(--color-accent-soft)]">
                Contact
              </a>
            </nav>
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="#projects"
                className="glow-btn rounded-full border border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 px-6 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)]"
              >
                View projects
              </a>
              <a
                href="#about"
                className="rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-6 py-3 font-medium text-white transition-all hover:-translate-y-1 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-white/10"
              >
                Why I build like this
              </a>
            </div>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.9fr]">
          <div className="glass-card rounded-[2rem] p-6 shadow-2xl shadow-black/30 md:p-8">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
              <span>Featured work</span>
              <span className="h-1 w-1 rounded-full bg-[var(--color-accent-soft)]" />
              <span>Laravel-heavy builds</span>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {featuredProjects.map((project) => (
                <article
                  key={project.title}
                  className="group glass-card rounded-[1.5rem] p-6 text-left"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/55">
                      {project.label}
                    </p>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                      {project.year}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-3xl leading-none text-white">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/74">
                    {project.summary}
                  </p>
                  <p className="mt-4 border-l border-[var(--color-accent-soft)]/50 pl-4 text-sm leading-7 text-[var(--color-paper)]">
                    {project.vibe}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="grid gap-6">
            <div className="glass-card rounded-[2rem] p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-warm)]"></div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--color-accent-soft)]">
                Quick intro
              </p>
              <p className="mt-4 text-lg leading-8 text-white/82">
                I am a builder who likes shipping ambitious websites and apps
                fast, then tightening the flow until the product feels
                believable.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="glass-card rounded-[1.75rem] p-5 text-center sm:text-left transition-all hover:border-[var(--color-accent)]/50">
                <p className="font-display text-4xl text-[var(--color-accent)]">
                  4
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/70">
                  Portfolio builds
                </p>
              </div>
              <div className="glass-card rounded-[1.75rem] p-5 text-center sm:text-left transition-all hover:border-[var(--color-accent)]/50">
                <p className="font-display text-4xl text-[var(--color-accent)]">
                  Web + mobile
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/70">
                  UI, auth, flows, dashboards
                </p>
              </div>
              <div className="glass-card rounded-[1.75rem] p-5 text-center sm:text-left transition-all hover:border-[var(--color-accent)]/50">
                <p className="font-display text-4xl text-[var(--color-accent)]">
                  Product-first
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/70">
                  Not just static landing pages
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section
        id="projects"
        className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12"
      >
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--color-accent-soft)]">
              Selected projects
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
              Projects that show how I think through <span className="highlight-text">product flow.</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            These projects go beyond CRUD screenshots. They include account
            states, user journeys, workflow logic, mobile capture flows, and
            enough UI polish to feel like real products.
          </p>
        </div>

        <div className="grid gap-8">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className="grid gap-6 glass-card rounded-[2rem] p-6 lg:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="flex flex-col justify-between gap-6 rounded-[1.5rem] bg-black/25 p-6">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--color-accent-soft)]">
                      0{index + 1} / {project.label}
                    </p>
                    <h3 className="mt-4 font-display text-3xl sm:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/74 sm:text-base">
                      {project.summary}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      Stack
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/12 bg-white/6 px-3 py-1.5 text-sm text-white/78"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex rounded-full border border-[var(--color-accent-soft)]/45 px-4 py-2 text-sm font-medium text-[var(--color-paper)] transition hover:-translate-y-0.5 hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)]"
                    >
                      View GitHub repo
                    </a>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[1.5rem] border border-dashed border-white/20 bg-[linear-gradient(135deg,rgba(255,196,141,0.18),rgba(255,255,255,0.06))] p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_35%)]" />
                  {project.screenshots ? (
                    <ProjectGallery
                      screenshots={project.screenshots}
                      priority={index === 0}
                    />
                  ) : (
                    <div className="relative flex h-full min-h-72 flex-col justify-between rounded-[1.15rem] border border-white/10 bg-black/20 p-5">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--color-accent-soft)]">
                          Screenshot placeholder
                        </p>
                        <h4 className="mt-4 font-display text-2xl text-white">
                          Replace with your real project preview
                        </h4>
                      </div>
                      <div className="space-y-4">
                        <p className="max-w-sm text-sm leading-7 text-white/72">
                          {project.screenshotLabel}
                        </p>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="h-16 rounded-2xl border border-white/10 bg-white/8" />
                          <div className="h-16 rounded-2xl border border-white/10 bg-white/8" />
                          <div className="h-16 rounded-2xl border border-white/10 bg-white/8" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
                    Core features
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-white/78">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-warm)]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
                    User journey
                  </p>
                  <ol className="mt-4 space-y-3 text-sm leading-7 text-white/78">
                    {project.flow.map((step, stepIndex) => (
                      <li key={step} className="flex gap-3">
                        <span className="font-mono text-[var(--color-warm)]">
                          0{stepIndex + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
                    Tools used
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-white/78">
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
      </section>

      <section
        id="about"
        className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-12"
      >
        <div className="glass-card rounded-[2rem] p-6 text-white sm:p-10 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[var(--color-accent)]/20 rounded-full blur-[80px]"></div>
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--color-accent)]">
            About this portfolio
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            I&apos;m a vibe coder, but the work still has <span className="highlight-text">structure.</span>
          </h2>
          <p className="mt-6 text-base leading-8 text-white/80">
            I like moving quickly from idea to interface, whether that means a
            website, a full-stack web app, or an Android app. Then I layer in
            the logic that makes the product credible. My portfolio is less
            about saying I know everything and more about proving I can build
            something useful, visual, and complete.
          </p>
          <p className="mt-4 text-base leading-8 text-white/80">
            The goal is simple: make projects that look good, behave well, and
            show clear user-centered thinking.
          </p>
        </div>

        <div className="grid gap-5">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="glass-card rounded-[1.75rem] p-6"
            >
              <h3 className="font-display text-3xl leading-none text-white">
                {principle.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="vibe-coding"
        className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12"
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--color-accent-soft)]">
            Vibe coding
          </p>
          <h2 className="mt-4 font-display text-4xl leading-none sm:text-5xl">
            I vibe code, but I still care about product quality.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/74">
            For me, vibe coding means moving fast, exploring ideas visually,
            and building momentum without overthinking every tiny decision. But
            I still care about UX, flow, structure, and whether the product
            feels believable when someone actually uses it.
          </p>
        </div>

        <div className="grid gap-5">
          <article className="rounded-[1.75rem] border border-white/10 bg-black/25 p-6">
            <h3 className="font-display text-3xl leading-none text-white">
              How I use it
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
              I use vibe coding to get from idea to interface quickly, then I
              refine the details until the build feels intentional, polished,
              and actually usable.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-white/10 bg-black/25 p-6">
            <h3 className="font-display text-3xl leading-none text-white">
              What still matters
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
              Clean product flow, readable UI, logical state changes, and a
              final result that feels like a real product instead of a random
              prototype.
            </p>
          </article>
        </div>
      </section>

      <section
        id="skills"
        className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12"
      >
        <div className="glass-card relative overflow-hidden rounded-[2rem] p-6 sm:p-10">
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-[var(--color-warm)]/10 rounded-full blur-[80px]"></div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--color-accent-soft)]">
                Toolbox
              </p>
              <h2 className="mt-3 font-display text-4xl leading-none sm:text-5xl">
                The stack I like using to ship ideas fast.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/74 sm:text-base">
              My best work usually sits at the intersection of backend logic,
              practical UI, and product thinking. These are the tools I keep
              reaching for.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {toolbox.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/12 bg-black/20 px-4 py-2 text-sm text-white/85 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-7xl px-6 pb-24 pt-8 sm:px-10 lg:px-12"
      >
        <div className="rounded-[2rem] border border-[var(--color-accent-soft)]/30 bg-[linear-gradient(135deg,rgba(255,140,66,0.16),rgba(255,255,255,0.04))] p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--color-accent-soft)]">
            Contact
          </p>
          <h2 className="mt-4 font-display text-4xl leading-none sm:text-5xl">
            Let&apos;s build something cool.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/76">
            If you want someone who can build websites and apps, move fast, and
            still care about the product feel, you can reach me here.
          </p>
          <a
            href="mailto:moosec06@gmail.com"
            className="mt-8 inline-flex glow-btn rounded-full border border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all hover:bg-[var(--color-accent)] hover:text-[var(--color-ink)]"
          >
            moosec06@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}
