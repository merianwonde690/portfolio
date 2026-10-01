function ProjectCard({ title, description, technologies, link }) {
  return (
    <article className="project-card">
      <div className="project-content">
        <p className="project-label">Project</p>
        <h3>{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-technologies">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        {link && (
          <a
            className="project-link"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard