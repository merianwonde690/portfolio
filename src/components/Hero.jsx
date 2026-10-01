// Hero: introduction with my name, title and call to action buttons
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1>Merian Wonde</h1>
        <h2>Information Systems Student & Frontend Developer</h2>
        <p className="hero-description">
          I enjoy building meaningful digital experiences and exploring how
          technology can solve real world problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects">View My Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero