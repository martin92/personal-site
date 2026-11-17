export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="hero-eyebrow"><span className="status-dot" aria-hidden="true" />Software Developer <span aria-hidden="true">·</span> Tijuana, Mexico</p>
        <h1 id="hero-title">Hi, I'm Martín.</h1>
        <p className="hero-subheading">I build software that solves real problems.</p>
        <p className="hero-description">I develop backend services, web applications, and system integrations that help businesses work smarter.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↗</span></a>
          <a className="button button-secondary" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="hero-footer" aria-label="Portfolio details">
        <p>Portfolio / 2026</p>
        <a href="#work">Scroll to explore <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  )
}
