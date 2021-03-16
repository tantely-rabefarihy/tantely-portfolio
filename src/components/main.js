import React from "react"
import styled from "styled-components"

const Main = () => {
  return (
    <>
      <MainContainer>
        <Welcome>
          <Titles>
            <h1>
              Hey there{" "}
              <span role="img" aria-label="hand emoji">
                👋🏼
              </span>{" "}
              I'm Tantely.
            </h1>
            <Subtitle>Web Developer</Subtitle>
          </Titles>
          <About>
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

        <ProjectsContainer>
          <h2>These are some of my projects</h2>
          <Projects id="projects">
            <Card>
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
              <Description>Covid tracker app</Description>
            </Card>
            <Card>
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
              <Description>Cocktail corner</Description>
            </Card>
          </Projects>
        </ProjectsContainer>
        <Collaboration id="collaboration">
          <h2>Let's collaborate!</h2>
          <a
            id="profile-link"
            href="https://github.com/tantely-rabefarihy"
            target="_blank"
            rel="noreferrer"
          >
            <p>You can take a look at my Github profile.</p>
          </a>
        </Collaboration>
      </MainContainer>
    </>
  )
}

export default Main

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media only screen and (max-width: 568px) {
    display: flex;
    flex-direction: column;
  }
`
const Welcome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 0 1rem;
  margin-top: 2rem;
`

const Titles = styled.div`
  width: fit-content;
  align-self: flex-start;

  h1 {
    color: rgb(0, 0, 0);
    font-size: 2rem;
    margin: 0;
    font-weight: bolder;
  }

  @media only screen and (min-width: 568px) {
    display: flex;
    flex-direction: column;
  }
`

const Subtitle = styled.p`
  text-align: end;
  color: black;
  font-size: 1.5rem;
  font-weight: light;
`

const About = styled.div`
  p {
    font-size: 1rem;
  }

  @media only screen and (max-width: 568px) {
    p {
      font-size: 0.75rem;
    }
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
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media only screen and (max-width: 568px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`

const Card = styled.div`
  align-self: center;
  img {
    width: 20rem;
    height: 20rem;
    border-radius: 5px;
  }
`
const Description = styled.p`
  color: rgb(0, 0, 0);
`
const Collaboration = styled.section``
