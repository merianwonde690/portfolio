// ProjectCard: displays one project (title, description, tech tags, GitHub link)
// Receives the project details as props from Projects.jsx
function ProjectCard({ title, description, technologies, link }) {
  return (
    <article className="project-card">
      <div className="project-content">
        <p className="project-label">Project</p>
        <h3>{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-technologies">
          {/* Loops through the technologies list and shows each one as a tag */}
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
{/* Only shows the GitHub button if the project has a link */}
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