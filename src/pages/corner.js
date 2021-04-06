import React from "react"
import GlobalStyle from "../styles/globalstyles"
import Logo from "../components/logo"
import homeCocktail from "../images/homepage_cocktail.png"
import detailsCocktail from "../images/details_cocktail.png"
import Layout from "../components/layout"
import {
  Container,
  SubContainer,
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
              search bar. Once you chose{" "}
            </p>
          </DetailsContainer>
          <TechContainer className="project-section">
            <h3>Tech</h3>
            <Stack>
              <p>
                <span>&#9675;</span> React
              </p>
              <p>
                <span>&#9675;</span> Bootstrap
              </p>
              <p>
                <span>&#9675;</span> Netlify
              </p>
            </Stack>
          </TechContainer>
          <LessonsContainer className="project-section">
            <h3>Lessons</h3>
            <p>
              This side project was an opportunity to use Bootstrap for the
              first time. It is always interesting to implement different ways
              to style my project in order to improve my set of skills.
            </p>
          </LessonsContainer>
          <ImageContainer>
            <picture>
              <Image src={homeCocktail} alt="application image" />
            </picture>
            <picture>
              <Image src={detailsCocktail} alt="application image" />
            </picture>
          </ImageContainer>
        </Container>
      </Layout>
    </>
  )
}

export default Cocktail
