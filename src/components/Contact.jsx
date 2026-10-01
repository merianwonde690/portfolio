// Contact section: GitHub/LinkedIn links and a message form
function Contact() {
  // Opens the visitor's email app with their message ready to send
  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    const subject = encodeURIComponent("Portfolio message from " + data.get("email"))
    const body = encodeURIComponent(
      data.get("message") + "\n\nFrom: " + data.get("email")
    )
    window.location.href =
      "mailto:merianwonde690@gmail.com?subject=" + subject + "&body=" + body
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <p className="section-label">Get In Touch</p>
        <h2>Let's Connect</h2>

        <p className="contact-intro">
          Have a question, project idea, or opportunity? I'd love to hear from
          you.
        </p>

        <div className="contact-links">
          <a
            href="https://github.com/merianwonde690"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/merian-wonde-61b98a338"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Your email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact