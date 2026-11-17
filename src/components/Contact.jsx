import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { socials } from '../data/socials.js'

const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

export default function Contact() {
  const hasEmail = Boolean(socials.email.trim())
  const hasGithub = Boolean(socials.githubUrl.trim())
  const hasLinkedin = Boolean(socials.linkedinUrl.trim())

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <p className="section-eyebrow">04 / CONTACT</p>
        <div className="contact-layout">
          <div className="contact-copy">
            <h2 id="contact-title">Let's work together.</h2>
            <p>Have a project in mind, an opportunity to discuss, or just want to connect? Feel free to reach out.</p>
          </div>
          <div className="contact-actions">
            {hasEmail && (
              <a className="contact-cta" href={`mailto:${socials.email}`}>
                Get in touch <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            )}
            <ul className="social-links" aria-label="Contact links">
              {hasGithub && <li><a href={socials.githubUrl} {...externalLinkProps}><Github size={16} aria-hidden="true" />GitHub</a></li>}
              {hasLinkedin && <li><a href={socials.linkedinUrl} {...externalLinkProps}><Linkedin size={16} aria-hidden="true" />LinkedIn</a></li>}
              {hasEmail && <li><a href={`mailto:${socials.email}`}><Mail size={16} aria-hidden="true" />Email</a></li>}
              {socials.resumePath && <li><a href={socials.resumePath} download>Resume <ArrowUpRight size={15} aria-hidden="true" /></a></li>}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
