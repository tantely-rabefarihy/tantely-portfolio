import React from "react"
import styled from "styled-components"
import Github from "../images/github_logo.svg"
import Letter from "../images/letter_logo.svg"

import { EmojiMoving, SlideIn } from "../styles/Animations"

const Main = () => {
  return (
    <>
      <MainContainer>
        <Welcome>
          <Titles>
            <h1>
              Hey there{" "}
              <Hand role="img" aria-label="hand emoji">
                👋🏼
              </Hand>{" "}
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
          <h2>Connect with me and let's collaborate!</h2>
          <SocialLinks>
            <a
              id="profile-link"
              href="https://github.com/tantely-rabefarihy"
              target="_blank"
              rel="noreferrer"
            >
              <Git src={Github} alt="github-logo" />
            </a>
            <a
              id="email-link"
              href="mailto:tantelyrab@gmail.com"
              rel="noreferrer"
            >
              <Letr src={Letter} alt="letter-logo" />
            </a>
          </SocialLinks>
        </Collaboration>
      </MainContainer>
    </>
  )
}

export default Main

const Hand = styled.span`
  animation: ${EmojiMoving} 2.5s 1;
  animation-delay: 2s;
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;
  will-change: transform;
`

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  @media only screen and (max-width: 568px) {
  }
`
const Welcome = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 1rem;
  height: 100vh;

  @media only screen and (max-width: 568px) {
    height: 80vh;
  }
`

const Titles = styled.div`
  margin: 0 auto;
  flex-direction: column;
  /* transform: translateY(0px); */
  opacity: 0;
  animation: ${SlideIn} 1s 0.5s forwards;

  h1 {
    font-size: 4rem;
    font-weight: bolder;
    margin: 0;
    width: 100%;
  }

  @media only screen and (max-width: 568px) {
    h1 {
      font-size: 2rem;
    }

    align-items: center;
    text-align: center;
  }
`

const Subtitle = styled.p`
  text-align: end;
  color: black;
  font-size: 1.5rem;
  font-weight: light;

  @media only screen and (max-width: 568px) {
    text-align: center;
    font-size: 1.2rem;
  }
`

const About = styled.div`
  width: 50%;
  align-self: flex-end;
  /* transform: translateY(0px); */
  opacity: 0;
  animation: ${SlideIn} 1s 0.5s forwards;
  animation-delay: 3s;

  p {
    font-size: 1rem;
  }

  @media only screen and (max-width: 568px) {
    width: 100%;
    p {
      font-size: 0.75rem;
    }
  }
`

const ProjectsContainer = styled.section`
  padding-top: 2rem;
  h2 {
    color: rgb(0, 0, 0);
    text-align: center;
    padding-bottom: 1rem;
  }
`
const Projects = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media only screen and (max-width: 568px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`

const Card = styled.div`
  align-self: center;

  img {
    /* width: 100%; */
    height: 10rem;
    border-radius: 5px;
  }
`
const Description = styled.p``

const Collaboration = styled.section`
  h2 {
    text-align: center;
  }
`

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  a {
    padding: 0 0.5rem;
  }
`
const Git = styled.img`
  width: 2rem;
  height: 2rem;
`

const Letr = styled(Git)``
