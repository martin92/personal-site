import { useState } from 'react'
import { Database, FileCode2, MonitorCog } from 'lucide-react'

const previewIcons = {
  'inventory-api-platform': Database,
  'inventory-sales-analytics-platform': Database,
  'store-monitoring-dashboard': MonitorCog,
  'invoice-document-downloader': FileCode2,
}

export default function ProjectCard({ project, featured = false }) {
  const [imageFailed, setImageFailed] = useState(false)
  const PreviewIcon = previewIcons[project.id] ?? FileCode2
  const imagePath = project.image
    ? project.image.startsWith('/') ? project.image : `/images/projects/${project.image}`
    : null
  const projectNumber = String(project.index ?? 0).padStart(2, '0')

  return (
    <article className={`project-card${featured ? ' project-card-featured' : ''}`}>
      <div className="project-preview">
        {imagePath && !imageFailed ? (
          <img className="project-image" src={imagePath} alt={`Preview of ${project.title}`} loading="lazy" decoding="async" onError={() => setImageFailed(true)} />
        ) : (
          <div className="project-placeholder" aria-hidden="true">
            <PreviewIcon size={featured ? 42 : 32} strokeWidth={1.2} />
            <span>{project.title}</span>
          </div>
        )}
        {featured && <span className="featured-label">Featured project</span>}
      </div>
      <div className="project-content">
        <div className="project-heading-row">
          <div>
            <p className="project-index">{projectNumber}</p>
            <h3>{project.title}</h3>
          </div>
          <div className="project-links">
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>GitHub <span aria-hidden="true">↗</span></a>}
            {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`}>Live demo <span aria-hidden="true">↗</span></a>}
          </div>
        </div>
        <p className="project-description">{project.description}</p>
        <ul className="project-technologies" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </div>
    </article>
  )
}
