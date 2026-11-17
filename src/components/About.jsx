export default function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-inner">
        <header className="about-heading">
          <p className="section-eyebrow">02 / ABOUT ME</p>
          <h2 id="about-title">A little about me.</h2>
        </header>
        <div className="about-copy">
          <h3>From IT infrastructure to building software solutions.</h3>
          <div className="about-body">
            <p>I'm a software developer with nearly a decade of experience in IT, focusing on backend development, system integrations, and business process automation.</p>
            <p>My background in enterprise systems allows me to understand real operational challenges and build practical, reliable software solutions.</p>
            <p>I enjoy working across the development lifecycle, from designing APIs and data pipelines to deploying applications and improving existing processes.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
