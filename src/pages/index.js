import React from "react"
// import { Link } from "gatsby"
// import SEO from "../components/seo"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import Header from "../components/header"
import GlobalStyle from "../styles/globalstyles"
import "../styles/styles.css"

const IndexPage = () => (
  <React.Fragment>
    {/* <SEO title="Home" /> */}
    <Helmet>
      <title>Tantely Rabefarihy - Full Stack Developer</title>
      <meta name="title" content="Tantely Rabefarihy - Full Stack Developer" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;700&family=Questrial&family=Roboto:wght@100;300;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle />
    <Layout>
      <Header />
      <main>
        <section id="welcome-section">
          <h1>Hey there 👋🏼 I'm Tantely.</h1>
          <p>Web Developer</p>
        </section>
        <section id="projects">
          <h2>These are some of my projects</h2>
          <div>
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
            <div class="project-tile"></div>
          </div>
        </section>
        <section id="collaboration">
          <h2>Let's collaborate !</h2>

          <a
            id="profile-link"
            href="https://github.com/tantely-rabefarihy"
            target="_blank"
          >
            <p>You can see my Github profile</p>
          </a>
        </section>
      </main>
    </Layout>
  </React.Fragment>
)

export default IndexPage
