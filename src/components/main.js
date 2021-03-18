import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Github from "../images/github_logo.svg"
import Letter from "../images/letter_logo.svg"
import LinkedIn from "../images/linkedin.svg"
import { EmojiMoving, SlideIn } from "../styles/Animations"
import profile from "../images/profile-pic.png"
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
              I'm <Name>Tantely</Name>.
            </h1>
            <Subtitle>Web Developer</Subtitle>
          </Titles>
          <About>
            <MyPicture src={profile} alt="profile_picture" />
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

        <section>
          <h2>My skills</h2>
          <div>
            <p></p>
          </div>
        </section>

        <ProjectsSection>
          <h2>These are some of my projects</h2>
          <Projects id="projects">
            <ProjectBox>
              <Card>
                <Link to="/covid">
                  <img
                    src="https://github.com/tantely-rabefarihy/covid19-app-tracker/raw/main/client/screenshots/Covid-app.png"
                    alt="project"
                  />
                </Link>
                <Caption>Covid tracker app</Caption>
              </Card>
              <Description>
                A web app to tracks worldwide numbers related to the COVID
                situation.
              </Description>
            </ProjectBox>
            <ProjectBox>
              <Card>
                <Link to="/cocktail">
                  <img
                    src="https://github.com/tantely-rabefarihy/cocktailDB/raw/main/src/assets/cocktailDB.png"
                    alt="project2"
                  />
                </Link>
                <Caption>Cocktail corner</Caption>
              </Card>
              <Description>
                A cocktail library to search for a recipe.
              </Description>
            </ProjectBox>
          </Projects>
        </ProjectsSection>
        <Collaboration id="collaboration">
          <h2>Connect with me and let's collaborate!</h2>
          <p>
            Reach out to me anytime if you're looking for a web developer or
            just want to connect.
          </p>
          <SocialLinks>
            <a
              id="github-link"
              href="https://github.com/tantely-rabefarihy"
              target="_blank"
              rel="noreferrer"
            >
              <SocialLogo src={Github} alt="github-logo" />
            </a>
            <a
              id="email-link"
              href="mailto:tantelyrab@gmail.com"
              rel="noreferrer"
            >
              <Letr src={Letter} alt="letter-logo" />
            </a>
            <a
              id="linkedin-link"
              href="https://www.linkedin.com/in/tantely-rabefarihy/"
              target="_blank"
              rel="noreferrer"
            >
              <SocialLogo src={LinkedIn} alt="linkedin-logo" />
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

const Name = styled.span`
  background: linear-gradient(
    274deg,
    rgba(246, 183, 0, 1) 0%,
    rgba(252, 2, 2, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
const MyPicture = styled.img`
  width: 16rem;
  height: 16rem;
  border-radius: 50%;

  @media only screen and (max-width: 568px) {
    width: 6rem;
    height: 6rem;
  }
`

const About = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  transform: translateY(0px);
  opacity: 0;
  animation: ${SlideIn} 1s 0.5s forwards;
  animation-delay: 3s;

  p {
    font-size: 1rem;
    width: 20rem;
  }

  @media only screen and (max-width: 568px) {
    flex-direction: column;
    align-items: center;

    p {
      font-size: 0.75rem;
      width: 100%;
    }
  }
`

const ProjectsSection = styled.section`
  margin: 2rem 0;
  h2 {
    color: rgb(0, 0, 0);
    text-align: center;
    padding-bottom: 1rem;
    font-weight: bolder;
    font-size: 1.5em;
  }
`

const Projects = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;

  @media only screen and (max-width: 568px) {
    flex-wrap: wrap;
  }
`

const ProjectBox = styled.div`
  background-color: white;
  border-radius: 8px;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  width: 20rem;
  position: relative; /* For positioning the pseudo-element */
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  will-change: transform;

  &::after {
    content: "";
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 8px;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    -webkit-transform: scale(1.05, 1.05);
    transform: scale(1.05, 1.05);
  }

  &:hover::after {
    opacity: 1;
  }

  @media only screen and (max-width: 568px) {
    width: 100%;
    margin: 1rem;
  }
`

const Card = styled.div`
  img {
    height: 15rem;
    width: 20rem;
    border-radius: 5px;
  }
  @media only screen and (max-width: 568px) {
    img {
      height: 10rem;
      width: 100%;
    }
  }
`
const Caption = styled.p`
  font-size: 1rem;
  font-weight: bolder;
  text-align: center;
`

const Description = styled.p`
  padding: 0 2rem;
`

const Collaboration = styled.section`
  height: 50vh;
  text-align: center;
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
const SocialLogo = styled.img`
  width: 2rem;
  height: 2rem;
`

const Letr = styled(SocialLogo)``
