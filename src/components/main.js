import React from "react"
import styled from "styled-components"
import "../styles/styles.css"

const Main = () => {
  return (
    <>
      <MainContainer>
        <Welcome id="welcome-section">
          <Titles className="titles">
            <h1>
              Hey there{" "}
              <span role="img" aria-label="hand emoji">
                👋🏼
              </span>{" "}
              I'm Tantely.
            </h1>
            <Subtitle className="subtitle">Web Developer</Subtitle>
          </Titles>
          <About className="about-me">
            <p>
              I'm baby adaptogen fingerstache drinking vinegar organic direct
              trade skateboard butcher cronut chillwave, offal live-edge roof
              party kombucha iceland woke. 8-bit copper mug mixtape, biodiesel
              poutine pitchfork paleo. Hoodie fashion axe chia, blog kitsch tote
              bag everyday carry. Disrupt asymmetrical tbh, unicorn before they
              sold out distillery activated charcoal artisan twee occupy
              microdosing YOLO celiac waistcoat.
            </p>
          </About>
        </Welcome>

        <ProjectsContainer id="projects">
          <h2>These are some of my projects</h2>
          <Projects className="projects-container">
            <Card className="project-tile">
              <a
                href="https://github.com/tantely-rabefarihy/covid19-app-tracker"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://github.com/tantely-rabefarihy/covid19-app-tracker/raw/main/client/screenshots/Covid-app.png"
                  alt="project"
                />
              </a>
              <Description className="description">
                Covid tracker app
              </Description>
            </Card>
            <Card className="project-tile">
              <a
                href="https://github.com/tantely-rabefarihy/cocktailDB"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://github.com/tantely-rabefarihy/cocktailDB/raw/main/src/assets/cocktailDB.png"
                  alt="project2"
                />
              </a>
              <Description className="description">Cocktail corner</Description>
            </Card>
          </Projects>
        </ProjectsContainer>
        <section id="collaboration">
          <h2>Let's collaborate!</h2>
          <a
            id="profile-link"
            href="https://github.com/tantely-rabefarihy"
            target="_blank"
            rel="noreferrer"
          >
            <p>You can take a look at my Github profile.</p>
          </a>
        </section>
      </MainContainer>
    </>
  )
}

export default Main

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 568px) {
    display: flex;
    flex-direction: column;
  }
`
const Welcome = styled.section`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  /* padding: 0 1rem; */
`

// section {
//   height: 100vh;
// }
const Titles = styled.div`
  text-align: end;
  width: fit-content;
  align-self: flex-start;
  margin-left: 8rem;

  h1 {
    color: rgb(0, 0, 0);
    font-size: 3rem;
    font-weight: bolder;
  }
`

const Subtitle = styled.p`
  color: black;
  font-size: 2rem;
  font-weight: light;
`

const About = styled.div`
  font-size: 1rem;
  width: 20rem;
  align-self: flex-end;
  margin-right: 14rem;
  margin-bottom: 10rem;

  @media only screen and (max-width: 568px) {
    font-size: 1rem;
    width: 20rem;
    align-self: flex-end;
  }
`

const ProjectsContainer = styled.section`
  h2 {
    color: rgb(0, 0, 0);
    text-align: center;
    padding-top: 20px;
  }
`
const Projects = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media only screen and (max-width: 568px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`

const Card = styled.div`
  img {
    width: 20rem;
    height: 20rem;
  }
`
const Description = styled.p`
  color: rgb(0, 0, 0);
`
