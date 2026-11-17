import { useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="navbar-brand" href="#top" onClick={closeMenu}>martinmo.xyz</a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
        <div className={`navbar-links${isMenuOpen ? ' is-open' : ''}`} id="primary-navigation">
          {links.map(({ label, href }) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </div>
      </nav>
    </header>
  )
}
