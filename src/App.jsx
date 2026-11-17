import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Expertise from './components/Expertise.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
