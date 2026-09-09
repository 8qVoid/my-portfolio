export const featuredProjects = [
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


