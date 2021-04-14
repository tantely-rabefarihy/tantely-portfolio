import React from "react"
import GlobalStyle from "../styles/globalstyles"
import Logo from "../components/logo"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import {
  Container,
  LinkSection,
  Title,
  ProjectLink,
  GithubLink,
  ImageContainer,
  Image,
  Stack,
  PurposeContainer,
  DetailsContainer,
  TechContainer,
  LinksContainer,
  LessonsContainer,
} from "../components/projectsPage"

const Cocktail = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Logo />
        <Container>
          <Title>Cocktail Corner</Title>
          <p>
            This is a side project that I created. I was working as a bartender
            years ago and I wanted to create this library for cocktails fans.
          </p>
          <LinkSection>
            <LinksContainer>
              <ProjectLink>
                <a
                  className="arrow"
                  href="https://lemur-cocktailcorner.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live website
                </a>
              </ProjectLink>
              <GithubLink>
                <a
                  className="arrow"
                  href="https://github.com/tantely-rabefarihy/cocktailDB"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
              </GithubLink>
            </LinksContainer>
          </LinkSection>

          <PurposeContainer className="project-section">
            <h3>Purpose</h3>
            <p>
              The idea was to use a an API and retrieve the data from there. I
              wanted to train my skills in managing asynchronous data.
            </p>
          </PurposeContainer>
          <DetailsContainer className="project-section">
            <h3>Details</h3>
            <p>
              On the homepage, the user is able to search for a cocktail in a
              search bar. Once you start typing, it will automatically look for
              cocktails matching the first letters. After selecting a cocktail
              of your choice, you will be directed to its page with all the
              details.
            </p>
          </DetailsContainer>
          <TechContainer className="project-section">
            <h3>Tech</h3>
            <Stack>
              <p>
                <span>&#9675;</span> React
              </p>
              <p>
                <span>&#9675;</span> Netlify
              </p>
            </Stack>
          </TechContainer>
          <LessonsContainer className="project-section">
            <h3>Lessons</h3>
            <p>
              This side project was an opportunity to create a simple database.
              It is always interesting to implement different ways to style my
              project in order to improve my set of skills.
            </p>
          </LessonsContainer>
          <ImageContainer>
            <Image>
              <StaticImage
                src="../images/homepage_cocktail.png"
                alt="application image"
                className="projectImg"
                loading="eager"
              />
            </Image>
            <Image>
              <StaticImage
                src="../images/details_cocktail.png"
                alt="application image"
                className="projectImg"
                loading="eager"
              />
            </Image>
          </ImageContainer>
        </Container>
      </Layout>
    </>
  )
}

export default Cocktail
