import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  const [featuredProject, ...otherProjects] = projects

  return (
    <section className="projects-section" id="work" aria-labelledby="projects-title">
      <div className="projects-inner">
        <header className="projects-header">
          <p className="section-eyebrow">01 / SELECTED WORK</p>
          <h2 id="projects-title">Things I've built.</h2>
          <p className="projects-intro">A selection of software built to solve practical challenges and make everyday work run better.</p>
        </header>
        {featuredProject && <ProjectCard project={featuredProject} featured />}
        <div className="projects-list" aria-label="More selected projects">
          {otherProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  )
}
