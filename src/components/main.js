import React from "react"
import "../styles/styles.css"

const Main = () => {
  return (
    <>
      <main>
        <section id="welcome-section">
          <h1>Hey there 👋🏼 I'm Tantely.</h1>
          <p>Web Developer</p>
        </section>
        <section id="projects">
          <h2>These are some of my projects</h2>
          <div className="projects-container">
            <div class="project-tile">
              <a
                href="https://github.com/tantely-rabefarihy/covid19-app-tracker"
                target="_blank"
              >
                <img
                  src="https://github.com/tantely-rabefarihy/covid19-app-tracker/raw/main/client/screenshots/Covid-app.png"
                  alt="project"
                />
              </a>
              <p class="description">Covid tracker app</p>
            </div>
            <div class="project-tile">
              <a
                href="https://github.com/tantely-rabefarihy/cocktailDB"
                target="_blank"
              >
                <img
                  src="https://github.com/tantely-rabefarihy/cocktailDB/raw/main/src/assets/cocktailDB.png"
                  alt="project"
                />
              </a>
              <p class="description">Cocktail looker</p>
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
