const expertiseGroups = [
  { title: 'Backend Development', technologies: ['Python', 'FastAPI', 'REST APIs', 'C#', '.NET'] },
  { title: 'Frontend Development', technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { title: 'Databases & Data', technologies: ['SQL Server', 'Data Warehousing', 'ETL', 'Power BI'] },
  { title: 'Cloud & DevOps', technologies: ['AWS', 'Docker', 'Git', 'GitHub', 'Linux'] },
]

export default function Expertise() {
  return (
    <section className="expertise-section" id="expertise" aria-labelledby="expertise-title">
      <div className="expertise-inner">
        <header className="expertise-heading">
          <p className="section-eyebrow">03 / EXPERTISE</p>
          <h2 id="expertise-title">Tools &amp; technologies.</h2>
        </header>
        <div className="expertise-list">
          {expertiseGroups.map(({ title, technologies }) => (
            <div className="expertise-row" key={title}>
              <h3>{title}</h3>
              <ul aria-label={title}>
                {technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
