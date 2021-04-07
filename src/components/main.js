import React from "react"
import { Link } from "gatsby"
import { theme } from "../styles/theme"
import styled from "styled-components"
import Github from "../images/github_logo.svg"
import Letter from "../images/letter_logo.svg"
import LinkedIn from "../images/linkedin.svg"
import { EmojiMoving, SlideIn } from "../styles/Animations"
import profile from "../images/profile-pic.png"
import { StaticImage } from "gatsby-plugin-image"

const Main = () => {
  const imgWidth = 250
  const imgHeight = 250

  return (
    <>
      <MainContainer>
        <Welcome>
          <Titles>
            <h1>
              Hey
              <Hand role="img" aria-label="hand">
                👋🏼
              </Hand>
              there,
              <br></br>
              I'm <Name>Tantely</Name>
            </h1>
            <Subtitle>Web Developer</Subtitle>
          </Titles>
        </Welcome>
        <Divider></Divider>
        <About className="about-animation" id="about">
          <h3>About me</h3>
          <MyStory>
            <MyPicture src={profile} alt="profile_picture" />
            <p>
              My country of origin is Madagascar{" "}
              <span role="img" aria-label="flag">
                🇲🇬
              </span>
              (The real one is better than the movie!). After travelling to
              three continents, I have finally settled in Montreal (Quebec,
              Canada). Before pursuing my passion for coding, I was working in
              the hospitality / customer service industry. My experiences were
              an opportunity to improve my problem solving skills and develop a
              solution-oriented perspective. As a developer, my goal is to
              harness the power of technology in order to solve people's
              challenges.
            </p>
          </MyStory>
        </About>

        <Divider></Divider>
        <SkillsSection>
          <h3>Skills</h3>
          <SkillsContainer>
            <SkillsRows>
              <li>
                <span>&#9675;</span> Javascript ES6+
              </li>
              <li>
                <span>&#9675;</span> HTML & CSS
              </li>

              <li>
                <span>&#9675;</span> React
              </li>
              <li>
                <span>&#9675;</span> Redux
              </li>

              <li>
                <span>&#9675;</span> Node.js
              </li>
              <li>
                <span>&#9675;</span> MongoDB
              </li>

              <li>
                <span>&#9675;</span> Firebase
              </li>
              <li>
                <span>&#9675;</span> Styled-Components
              </li>
              <li>
                <span>&#9675;</span> Heroku
              </li>
              <li>
                <span>&#9675;</span> Netlify
              </li>
              <li>
                <span>&#9675;</span> Gatsby
              </li>
            </SkillsRows>
          </SkillsContainer>
        </SkillsSection>
        <Divider></Divider>
        <ProjectsSection id="projects">
          <h3>These are some of my projects</h3>
          <Projects>
            <ProjectBox>
              <Link to="/tracker/" className="projectLink">
                <Card>
                  <StaticImage
                    src="../images/homepage_covid.png"
                    alt="project"
                    imgClassName="projectImage"
                    width={imgWidth}
                    height={imgHeight}
                    loading="eager"
                  />

                  <Caption>Covid tracker app</Caption>
                </Card>

                <Description>
                  A web app to track worldwide numbers related to the COVID
                  situation.
                </Description>
              </Link>
            </ProjectBox>

            <ProjectBox>
              <Link to="/store/" className="projectLink">
                <Card>
                  <StaticImage
                    src="../images/ecom.png"
                    alt="project2"
                    width={imgWidth}
                    height={imgHeight}
                    imgClassName="projectImage"
                    loading="eager"
                  />

                  <Caption>E-commerce store</Caption>
                </Card>
                <Description>
                  E-commerce store with a cart feature using Redux.
                </Description>
              </Link>
            </ProjectBox>

            <ProjectBox>
              <Link to="/corner/" className="projectLink">
                <Card>
                  <StaticImage
                    src="../images/homepage_cocktail.png"
                    width={imgWidth}
                    height={imgHeight}
                    alt="project3"
                    imgClassName="projectImage"
                    loading="eager"
                  />

                  <Caption>Cocktail corner</Caption>
                </Card>
                <Description>
                  A cocktail library to search for a recipe.
                </Description>
              </Link>
            </ProjectBox>
          </Projects>
        </ProjectsSection>
        <Divider></Divider>
        <Collaboration id="collaboration">
          <h3>Connect with me and let's collaborate!</h3>
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
  font-size: 0.8em;
  padding: 0 0.8rem;
  animation: ${EmojiMoving} 2.5s 2s;
  -webkit-animation: ${EmojiMoving} 2.5s 2s;
  -moz-animation: ${EmojiMoving} 2.5s 2s;
  transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
  display: inline-block;
  will-change: transform;
`

const Name = styled.span`
  padding: 0 0.1rem;
  background: linear-gradient(to bottom, #f83600 0%, #f9d423 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const MainContainer = styled.main`
  z-index: -1;
  display: flex;
  flex-direction: column;
  /* padding: 0 1rem; */
`
const Welcome = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 1rem;

  @media only screen and (max-width: 568px) {
    height: fit-content;
  }
`

const Titles = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  transform: translateY(30px);
  opacity: 0;
  animation: ${SlideIn} 1s forwards;
  height: 100vh;
  justify-content: center;

  h1 {
    margin: 0;
    width: 100%;
  }
  @media only screen and (min-width: 568px) {
  }

  @media only screen and (max-width: 568px) {
    justify-content: center;

    text-align: left;
    h1 {
      text-align: left;
      line-height: 1em;
    }
  }
`

const Subtitle = styled.h2`
  text-align: end;
  color: black;
  font-weight: lighter;

  @media only screen and (max-width: 568px) {
    text-align: left;
  }
`
const MyPicture = styled.img`
  width: calc(10rem + (100 - 15) * ((100vw - 300px) / (1600 - 300)));
  height: calc(10rem + (100 - 15) * ((100vw - 300px) / (1600 - 300)));
  border-radius: 50%;
`

const About = styled.section`
  h3 {
    text-align: center;
  }
`

const MyStory = styled.div`
  align-items: center;
  text-align: justify;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap: 1rem;
  column-gap: 1rem;

  p {
    max-width: 500px;
    line-height: 2;
    width: 100%;
    line-height: 2;
  }

  @media only screen and (max-width: 568px) {
    flex-direction: column;
    p {
      width: 100%;
    }
  }
`

const SkillsSection = styled.section`
  margin-bottom: 2rem;
  h3 {
    text-align: center;
  }
`

const SkillsContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`

const SkillsRows = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));

  li {
    list-style-type: none;
    margin: 1rem;
  }

  @media only screen and (max-width: 568px) {
    justify-items: center;
  }
`

const ProjectsSection = styled.section`
  margin-bottom: 3rem;
  h3 {
    color: rgb(0, 0, 0);
    text-align: center;
    padding-bottom: 1rem;
    font-weight: bolder;
  }
`

const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap: 2rem;
  column-gap: 2rem;

  .projectLink {
    text-decoration: none;
    color: ${theme.primaryFontColor};
  }

  @media only screen and (max-width: 568px) {
  }
`

const ProjectBox = styled.div`
  background-color: white;
  border-radius: 8px;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  width: 18rem;
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
    max-width: 18rem;
    width: 100%;
    margin: 1rem auto;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;

  .projectImage {
    /* min-height: 20rem; */

    /* height: 100%;
    min-height: 12rem;
    max-height: 12rem;
    width: 100%;
    border-radius: 5px; */
  }
  @media only screen and (max-width: 568px) {
    /* .projectImage {
      height: auto;
    } */
  }
`
const Caption = styled.h4`
  font-weight: bolder;
  text-align: center;
`

const Description = styled.p`
  align-items: center;
  /* padding: 0 2rem; */
`

const Collaboration = styled.section`
  height: 50vh;
  text-align: center;
  h3 {
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

const Divider = styled.div`
  border-bottom: 1px solid ${theme.secondaryDark};
  margin: 2rem auto;
  width: 50%;
`
