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
      </main>
    </>
  )
}
