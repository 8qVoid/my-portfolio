import ContactCommand from "./components/contact-command";
import ContactCta from "./components/contact-cta";
import InteractiveHero from "./components/interactive-hero";
import ProjectGrid from "./components/project-grid";
import ScrollReveal from "./components/scroll-reveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header wrap">
        <a className="logo" href="#" aria-label="Mark home">mark</a>
        <nav aria-label="Main navigation">
          <a href="#projects">Work</a><a href="#about">About</a><a href="#skills">Toolkit</a>
        </nav>
        <ContactCommand />
      </header>
      <main id="main">
        <section className="hero wrap" data-reveal>
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> MARK LAURENCE EREZUELA</p>
            <h1>Mark Erezuela<br /><span>builds digital products</span><br />that feel alive.</h1>
            <p className="hero-description">Web apps, Android apps, and product flows shaped with clean interfaces, thoughtful logic, and the tiny interactions that make software feel finished.</p>
            <div className="hero-actions"><a className="button primary" href="#projects">Explore my work <span>↘</span></a><a className="button ghost" href="#contact">Open contact menu <span>↘</span></a></div>
            <div className="hero-note"><span>FULL-STACK DEVELOPMENT</span><i /> <span>ANDROID APPS</span></div>
          </div>
          <InteractiveHero />
        </section>
        <div className="discipline-strip"><div className="wrap"><span>GOOD IDEAS DESERVE GOOD EXECUTION</span><b aria-hidden="true" /><span>WEB DEVELOPMENT</span><b aria-hidden="true" /><span>MOBILE EXPERIENCES</span><b aria-hidden="true" /><span>PRODUCT THINKING</span></div></div>
        <section className="section wrap" id="projects" data-reveal>
          <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>A few things<br />I’ve brought to life<span>.</span></h2></div><p>Real projects. End-to-end flows.<br />A little curiosity in every build.</p></div>
          <ProjectGrid />
        </section>
        <section className="about-section" id="about" data-reveal><div className="wrap about-grid">
          <div><p className="eyebrow">02 / THE PERSON BEHIND THE PIXELS</p><h2>Curious mind.<br />Builder at heart<span>.</span></h2><div className="signature">Mark Erezuela <span>↗</span></div></div>
          <div className="about-copy"><p>I’m Mark, a developer who enjoys turning messy ideas into something useful. I work across full-stack web apps and Android, connecting thoughtful interfaces with the logic behind them.</p><p>I learn by building. I use AI-assisted development to explore quickly, then refine the flows, states, and small details that make a product feel complete.</p><div className="about-stats"><div><strong>05</strong><span>Portfolio projects</span></div><div><strong>02</strong><span>Platforms, web + mobile</span></div><div><strong>∞</strong><span>Things to explore</span></div></div></div>
        </div></section>
        <section className="section wrap" id="skills" data-reveal><div className="section-heading"><div><p className="eyebrow">03 / MY TOOLKIT</p><h2>The right tools.<br />For the right idea<span>.</span></h2></div><p>From database to interface,<br />and everything in between.</p></div>
          <div className="toolkit-grid">{[
            { icon: "⌘", name: "Frontend Systems", text: "Responsive interfaces, polished states, and product flows users can scan quickly.", tools: ["Next.js", "React", "TypeScript", "Custom CSS"] },
            { icon: "⏣", name: "Data + APIs", text: "Auth, storage, payments, and database-backed behavior behind the screens.", tools: ["Laravel", "PHP", "MySQL", "PayMongo"] },
            { icon: "▣", name: "Mobile Interfaces", text: "Android experiences with local data, camera flows, reminders, and analytics.", tools: ["Kotlin", "Compose", "Room", "CameraX"] }
          ].map(group => <article className="toolkit-card" key={group.name}><span className="tool-icon">{group.icon}</span><h3>{group.name}</h3><p>{group.text}</p><div className="tags">{group.tools.map(tool => <span key={tool}>{tool}</span>)}</div></article>)}</div>
        </section>
        <section className="contact-section wrap" id="contact" data-reveal><p className="eyebrow">HAVE SOMETHING IN MIND?</p><ContactCta /><div className="contact-bottom"><p>Great things start with a conversation.</p><a href="mailto:moosec06@gmail.com">moosec06@gmail.com ↗</a></div></section>
      </main>
      <footer className="wrap"><a className="logo" href="#">mark</a><p>© {new Date().getFullYear()} Mark Laurence Erezuela</p><a href="https://github.com/8qVoid" target="_blank" rel="noreferrer">GitHub ↗</a><a href="#main">Back to top ↑</a></footer>
    </>
  );
}
