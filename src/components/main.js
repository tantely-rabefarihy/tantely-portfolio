import React from "react"
import "../styles/styles.css"

const Main = () => {
  return (
    <>
      <main>
        <section id="welcome-section">
          <div className="titles">
            <h1>Hey there 👋🏼 I'm Tantely.</h1>
            <p className="subtitle">Web Developer</p>
          </div>

          <p className="about-me">
            I'm baby adaptogen fingerstache drinking vinegar organic direct
            trade skateboard butcher cronut chillwave, offal live-edge roof
            party kombucha iceland woke. 8-bit copper mug mixtape, biodiesel
            poutine pitchfork paleo. Hoodie fashion axe chia, blog kitsch tote
            bag everyday carry. Disrupt asymmetrical tbh, unicorn before they
            sold out distillery activated charcoal artisan twee occupy
            microdosing YOLO celiac waistcoat.
          </p>
        </section>
        <section id="projects">
          <h2>These are some of my projects</h2>
          <div className="projects-container">
            <div className="project-tile">
              <a
                href="https://github.com/tantely-rabefarihy/covid19-app-tracker"
                target="_blank"
              >
                <img
                  src="https://github.com/tantely-rabefarihy/covid19-app-tracker/raw/main/client/screenshots/Covid-app.png"
                  alt="project"
                />
              </a>
              <p className="description">Covid tracker app</p>
            </div>
            <div className="project-tile">
              <a
                href="https://github.com/tantely-rabefarihy/cocktailDB"
                target="_blank"
              >
                <img
                  src="https://github.com/tantely-rabefarihy/cocktailDB/raw/main/src/assets/cocktailDB.png"
                  alt="project"
                />
              </a>
              <p className="description">Cocktail corner</p>
            </div>
          </div>
        </section>
        <section id="collaboration">
          <h2>Let's collaborate!</h2>

          <a
            id="profile-link"
            href="https://github.com/tantely-rabefarihy"
            target="_blank"
          >
            <p>You can take a look at my Github profile.</p>
          </a>
        </section>
      </main>
    </>
  )
}

export default Main
