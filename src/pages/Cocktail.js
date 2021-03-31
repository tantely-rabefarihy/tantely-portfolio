import React from "react"
import styled from "styled-components"
import GlobalStyle from "../styles/globalstyles"
import Logo from "../components/logo"
import { SlideIn } from "../styles/Animations"
import homeCocktail from "../images/homepage_cocktail.png"
import detailsCocktail from "../images/details_cocktail.png"
import Layout from "../components/layout"
import { theme } from "../styles/theme"

const Cocktail = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Layout>
        <Container>
          <SubContainer>
            <Title>Cocktail library</Title>
            <p>
              This is a side project that I created. I was working as a
              bartender years ago and I wanted to create this library for
              cocktails fans.
            </p>
            <div
              style={{
                display: "flex",
                "max-width": "600px",
                margin: "0 auto",
              }}
            >
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
            </div>

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
                This side project helped me to use Bootstrap for the first time.
                It is always interesting to implement different ways to style my
                project in order to improve my set of skills. I deployed the
                project to Netlify to test it.
              </p>
            </LessonsContainer>
            <ImageContainer>
              <Image src={homeCocktail} alt="application image" />
              <Image src={detailsCocktail} alt="application image" />
            </ImageContainer>
          </SubContainer>
        </Container>
      </Layout>
    </>
  )
}

export default Cocktail

const Container = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  opacity: 0;
  animation: ${SlideIn} 0.8s 0.8s forwards;

  h3 {
    border-bottom: 1px solid ${theme.secondaryDark};
  }

  .project-section {
    margin: 3rem 0;
  }

  @media only screen and (max-width: 568px) {
    width: 100vw;
  }
`
const SubContainer = styled.main`
  margin: 0 1rem;
`
const Title = styled.h1``

const ProjectLink = styled.p`
  text-align: center;
  margin: 2rem auto;
  .arrow {
    font-weight: bold;
    color: ${theme.primaryLight};
    /* background-color: inherit; */
    margin: 1rem 0;
    padding: 0.5rem;
    text-decoration: none;
    -webkit-transition: transform 0.3s ease-out;
    -moz-transition: transform 0.3s ease-out;
    -ms-transition: transform 0.3s ease-out;
    -o-transition: transform 0.3s ease-out;
    transition: transform 0.3s ease-out;
    transition: background-color 0.5s ease, color 0.5s ease;
    background-color: ${theme.secondaryDark};
    border-radius: 8px;

    &::before {
      display: inline-flexbox;
      padding-right: 10px;
      content: "➡"; // arrow right unicode
      -webkit-transition: transform 0.3s ease-out;
      -moz-transition: transform 0.3s ease-out;
      -ms-transition: transform 0.3s ease-out;
      -o-transition: transform 0.3s ease-out;
      transition: transform 0.3s ease-out;
    }

    &:hover {
      color: ${theme.primaryHover};
      background-color: ${theme.primaryDark};

      &::before {
        -webkit-transform: translateX(4px);
        -moz-transform: translateX(4px);
        -ms-transform: translateX(4px);
        -o-transform: translateX(4px);
        transform: translateX(4px);
      }
    }
  }
`

const GithubLink = styled.p`
  text-align: center;
  margin: 2rem auto;
  .arrow {
    font-weight: bold;
    color: ${theme.primaryLight};
    /* background-color: inherit; */
    margin: 1rem 0;
    padding: 0.5rem;
    text-decoration: none;
    -webkit-transition: transform 0.3s ease-out;
    -moz-transition: transform 0.3s ease-out;
    -ms-transition: transform 0.3s ease-out;
    -o-transition: transform 0.3s ease-out;
    transition: transform 0.3s ease-out;
    transition: background-color 0.5s ease, color 0.5s ease;
    background-color: ${theme.secondaryDark};
    border-radius: 8px;

    &::before {
      display: inline-flexbox;
      padding-right: 10px;
      content: "➡"; // arrow right unicode
      -webkit-transition: transform 0.3s ease-out;
      -moz-transition: transform 0.3s ease-out;
      -ms-transition: transform 0.3s ease-out;
      -o-transition: transform 0.3s ease-out;
      transition: transform 0.3s ease-out;
    }

    &:hover {
      color: ${theme.primaryHover};
      background-color: ${theme.primaryDark};

      &::before {
        -webkit-transform: translateX(4px);
        -moz-transform: translateX(4px);
        -ms-transform: translateX(4px);
        -o-transform: translateX(4px);
        transform: translateX(4px);
      }
    }
  }
`

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap: 2rem;
  padding: 2rem;
`

const Image = styled.img`
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  width: 20rem;
  height: 15rem;

  @media only screen and (max-width: 568px) {
    width: 18rem;
    height: 15rem;
  }
`

const Stack = styled.div`
  p {
    margin: 0 0 1rem 0;
  }
  /* column-count: 2;
  column-gap: 2rem; */
  -webkit-columns: 40px 2;
  /* Chrome, Safari, Opera */
  -moz-columns: 60px 2;
  /* Firefox */
  columns: 60px 2;

  margin: 0 auto;
`

const PurposeContainer = styled.div``

const DetailsContainer = styled.div``

const TechContainer = styled.div``

const LessonsContainer = styled.div``
