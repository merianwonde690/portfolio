import ProjectCard from "./ProjectCard"

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "An earlier portfolio project created while developing my foundational web development skills.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/merianwonde690/my-portfolio"
  },
  {
    title: "Information Retrieval Project",
    description:
      "A university project exploring information retrieval and text processing techniques for organizing and analyzing documents.",
    technologies: ["Python", "TF-IDF", "BM25", "LDA"],
    link: "https://github.com/merianwonde690/ISR-Cranfield-Project"
  },
  {
    title: "Java Banking System",
    description:
      "A desktop banking application developed to practice object oriented programming and database integration.",
    technologies: ["Java", "Swing", "SQLite"]
  },
  {
    title: "Farmer Marketplace Platform",
    description:
      "A digital platform designed to connect rural producers with urban buyers and make local products easier to access.",
    technologies: ["HTML", "CSS", "JavaScript"]
  }
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <p className="section-label">My Projects</p>
        <h2>Things I've Built</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects