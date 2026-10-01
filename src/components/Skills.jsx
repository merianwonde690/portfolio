const skills = [
  {
    name: "HTML",
    description: "Building structured and semantic web pages"
  },
  {
    name: "CSS",
    description: "Creating responsive and visually polished interfaces"
  },
  {
    name: "JavaScript",
    description: "Adding logic, interaction, and dynamic behavior"
  },
  {
    name: "React",
    description: "Building reusable and interactive user interfaces"
  },
  {
    name: "Git & GitHub",
    description: "Managing and sharing development projects"
  }
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <p className="section-label">My Skills</p>
        <h2>Technologies I Work With</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills