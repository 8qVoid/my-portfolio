import Image from "next/image";
import ProjectGrid from "./components/project-grid";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header wrap">
        <a className="logo" href="#" aria-label="Mark home">mark<span>✳</span></a>
        <nav aria-label="Main navigation">
          <a href="#projects">Work</a><a href="#about">About</a><a href="#skills">Toolkit</a>
        </nav>
        <a className="nav-contact" href="mailto:moosec06@gmail.com">Let’s talk <span>↗</span></a>
      </header>
      <main id="main">
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> MARK LAURENCE EREZUELA</p>
            <h1>Ideas into<br />interfaces.<br /><span>Built to work.</span></h1>
            <p className="hero-description">I build thoughtful web and mobile experiences.<br className="desktop-break" /> From the first rough idea to the details that make it feel right.</p>
            <div className="hero-actions"><a className="button primary" href="#projects">Explore my work <span>↘</span></a><a className="text-link" href="https://github.com/8qVoid" target="_blank" rel="noreferrer">GitHub ↗</a></div>
            <div className="hero-note"><span>FULL-STACK DEVELOPMENT</span><i /> <span>ANDROID APPS</span></div>
          </div>
          <div className="hero-art" aria-label="A preview of my web and mobile projects">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <span className="art-coordinate">IDEA → INTERFACE → EXPERIENCE</span>
            <div className="browser-mock"><div className="browser-bar"><span /><span /><span /><p>skill-swap / discover</p><b>↗</b></div><Image src="/projects/skill-swap/home.png" alt="Skill Swap website preview" width={900} height={600} preload /></div>
            <div className="phone-mock"><Image src="/projects/exist/Dashboard.png" alt="Exist Android journal dashboard" width={300} height={650} preload /></div>
            <div className="floating-label"><span>✳</span><div>Thoughtful by design.<br /><strong>Functional by default.</strong></div></div>
            <span className="art-bottom">WEB + MOBILE <span>01 / 05</span></span>
          </div>
        </section>
        <div className="discipline-strip"><div className="wrap"><span>GOOD IDEAS DESERVE GOOD EXECUTION</span><b>✳</b><span>WEB DEVELOPMENT</span><b>✳</b><span>MOBILE EXPERIENCES</span><b>✳</b><span>PRODUCT THINKING</span></div></div>
        <section className="section wrap" id="projects">
          <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>A few things<br />I’ve brought to life<span>.</span></h2></div><p>Real projects. End-to-end flows.<br />A little curiosity in every build.</p></div>
          <ProjectGrid />
        </section>
        <section className="about-section" id="about"><div className="wrap about-grid">
          <div><p className="eyebrow">02 / THE PERSON BEHIND THE PIXELS</p><h2>Curious mind.<br />Builder at heart<span>.</span></h2><div className="signature">Mark Erezuela <span>↗</span></div></div>
          <div className="about-copy"><p>I’m Mark, a developer who enjoys turning messy ideas into something useful. I work across full-stack web apps and Android, connecting thoughtful interfaces with the logic behind them.</p><p>I learn by building. I use AI-assisted development to explore quickly, then refine the flows, states, and small details that make a product feel complete.</p><div className="about-stats"><div><strong>05</strong><span>Portfolio projects</span></div><div><strong>02</strong><span>Platforms, web + mobile</span></div><div><strong>∞</strong><span>Things to explore</span></div></div></div>
        </div></section>
        <section className="section wrap" id="skills"><div className="section-heading"><div><p className="eyebrow">03 / MY TOOLKIT</p><h2>The right tools.<br />For the right idea<span>.</span></h2></div><p>From database to interface,<br />and everything in between.</p></div>
          <div className="toolkit-grid">{[
            { icon: "⌘", name: "Frontend", text: "Interfaces that feel intuitive.", tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
            { icon: "⏣", name: "Backend", text: "Structure behind the experience.", tools: ["Laravel", "PHP", "MySQL", "PayMongo"] },
            { icon: "▣", name: "Mobile", text: "Built for life beyond the browser.", tools: ["Kotlin", "Jetpack Compose", "Room", "CameraX"] }
          ].map(group => <article className="toolkit-card" key={group.name}><span className="tool-icon">{group.icon}</span><h3>{group.name}</h3><p>{group.text}</p><div className="tags">{group.tools.map(tool => <span key={tool}>{tool}</span>)}</div></article>)}</div>
        </section>
        <section className="contact-section wrap" id="contact"><p className="eyebrow">HAVE SOMETHING IN MIND?</p><a href="mailto:moosec06@gmail.com" className="contact-title">Let’s build<br />something good.<span>↗</span></a><div className="contact-bottom"><p>Great things start with a conversation.</p><a href="mailto:moosec06@gmail.com">moosec06@gmail.com ↗</a></div></section>
      </main>
      <footer className="wrap"><a className="logo" href="#">mark<span>✳</span></a><p>© {new Date().getFullYear()} Mark Laurence Erezuela</p><a href="https://github.com/8qVoid" target="_blank" rel="noreferrer">GitHub ↗</a><a href="#main">Back to top ↑</a></footer>
    </>
  );
}
