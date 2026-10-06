import ContactCommand from "./components/contact-command";
import ContactCta from "./components/contact-cta";
import InteractiveHero from "./components/interactive-hero";
import ProjectGrid from "./components/project-grid";
import ScrollReveal from "./components/scroll-reveal";
import InteractiveToolkit from "./components/interactive-toolkit";
import ProjectQuest from "./components/project-quest";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header wrap">
        <a className="logo" href="#" aria-label="Mark home">m<span className="logo-dot">.</span><span className="logo-caption">MARK / DEVELOPER</span></a>
        <nav aria-label="Main navigation">
          <a href="#projects">Work</a><a href="#about">About</a><a href="#skills">Toolkit</a>
        </nav>
        <ContactCommand />
      </header>
      <main id="main">
        <section className="hero wrap" data-reveal>
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> INDEPENDENT DEVELOPER · WEB + MOBILE</p>
            <h1>Mark Erezuela<br /><span>builds digital products</span><br />that feel alive.</h1>
            <p className="hero-description">Web apps, Android apps, and product flows shaped with clean interfaces, thoughtful logic, and the tiny interactions that make software feel finished.</p>
            <div className="hero-actions"><a className="button primary" href="#project-explorer">Choose your path <span>↘</span></a><a className="button ghost" href="#contact">Let&apos;s talk <span>↗</span></a></div>
            <div className="hero-note"><span>FIVE PROJECTS TO DISCOVER</span><i /> <span>WEB + ANDROID</span><a href="#projects" aria-label="Scroll to selected work">↓</a></div>
          </div>
          <InteractiveHero />
        </section>
        <div className="discipline-strip" aria-label="Web development, mobile experiences, product thinking"><div className="marquee-track" aria-hidden="true">{[0, 1].map(copy => <div key={copy}><span>THOUGHTFUL INTERFACES</span><b /><span>WEB DEVELOPMENT</span><b /><span>MOBILE EXPERIENCES</span><b /><span>PRODUCT THINKING</span><b /></div>)}</div></div>
        <section className="section wrap" id="projects" data-reveal>
          <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>From a spark.<br />To something <span>real.</span></h2></div><p>Five projects. Countless little decisions.<br />Explore the screens and the thinking behind them.</p></div>
          <ProjectQuest />
          <div id="case-studies"><ProjectGrid /></div>
        </section>
        <section className="about-section" id="about" data-reveal><div className="wrap about-grid">
          <div><p className="eyebrow">02 / THE PERSON BEHIND THE PIXELS</p><h2>Curious mind.<br />Builder at heart<span>.</span></h2><div className="signature">Mark Erezuela <span>↗</span></div></div>
          <div className="about-copy"><p>I’m Mark, a developer who enjoys turning messy ideas into something useful. I work across full-stack web apps and Android, connecting thoughtful interfaces with the logic behind them.</p><p>I learn by building. I use AI-assisted development to explore quickly, then refine the flows, states, and small details that make a product feel complete.</p><div className="about-stats"><div><strong>05</strong><span>Portfolio projects</span></div><div><strong>02</strong><span>Platforms, web + mobile</span></div><div><strong>∞</strong><span>Things to explore</span></div></div></div>
        </div></section>
        <section className="section wrap" id="skills" data-reveal><div className="section-heading"><div><p className="eyebrow">03 / MY TOOLKIT</p><h2>The right tools.<br />For the right idea<span>.</span></h2></div><p>From database to interface,<br />and everything in between.</p></div>
          <InteractiveToolkit />
        </section>
        <section className="contact-section wrap" id="contact" data-reveal><p className="eyebrow">HAVE SOMETHING IN MIND?</p><ContactCta /><div className="contact-bottom"><p>Great things start with a conversation.</p><a href="mailto:moosec06@gmail.com">moosec06@gmail.com ↗</a></div></section>
      </main>
      <footer className="wrap"><a className="logo" href="#">mark</a><p>© {new Date().getFullYear()} Mark Laurence Erezuela</p><a href="https://github.com/8qVoid" target="_blank" rel="noreferrer">GitHub ↗</a><a href="#main">Back to top ↑</a></footer>
    </>
  );
}
