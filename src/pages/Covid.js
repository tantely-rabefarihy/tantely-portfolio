import React from "react"
import styled from "styled-components"
import GlobalStyle from "../styles/globalstyles"
import Logo from "../components/logo"
import { SlideIn } from "../styles/Animations"
import homeCovid from "../images/homepage_covid.png"
import userCovid from "../images/userpage_covid.png"
import Layout from "../components/layout"
import { theme } from "../styles/theme"

const Covid = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Logo />
        <Container>
          <SubContainer>
            <Title>Covid Tracker</Title>
            <p>
              This personal project was built during my bootcamp at Concordia
              University. I wanted to create a web app to track the covid
              situation all over the world with some key numbers.
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
                  href="https://final-project-tantely.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live website
                </a>
              </ProjectLink>
              <GithubLink>
                <a
                  className="arrow"
                  href="https://github.com/tantely-rabefarihy/covid19-app-tracker"
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
                As a final project, I had to showcase that I have a been
                learning all along the bootcamp and implement them effectively.
              </p>
            </PurposeContainer>
            <DetailsContainer className="project-section">
              <h3>Details</h3>
              <p>
                The user arrives on the homepage where is displayed a kind of
                heatmap but with circles. When hovering on them it will display
                some key infos. These data are fetched directly from Disease.sh
                API, implemented in the back-end.
              </p>
              <p>
                On the left side, a dropdown selector will give you all the
                countries. After choosing one of them, the user will see
                detailed numbers compared to the previous day informations.
              </p>
              <p>
                The user has also the ability to create his own profile, using
                the Firebase Authentication system. Once they are authenticated,
                they will get access to a personal page where a chart can be
                displayed and show the trend to a specific country.
              </p>
            </DetailsContainer>
            <TechContainer className="project-section">
              <h3>Tech</h3>
              <Stack>
                <p>
                  <span>&#9675;</span> React
                </p>
                <p>
                  <span>&#9675;</span> Node
                </p>
                <p>
                  <span>&#9675;</span> Express
                </p>
                <p>
                  <span>&#9675;</span> Firebase / Cloud Firestore
                </p>

                <p>
                  <span>&#9675;</span> Styled Components
                </p>
                <p>
                  <span>&#9675;</span> React Leaflet (map)
                </p>
                <p>
                  <span>&#9675;</span> Recharts (chart)
                </p>
              </Stack>
            </TechContainer>
            <LessonsContainer className="project-section">
              <h3>Lessons</h3>
              <p>
                This project was a great opportunity to apply the skills that I
                learned, more specifically on React. One challenging part was
                the implementation of the Leaflet libray (world Map), the
                documentation was not really explicit and a lot of testing and
                research were necessary in order to set all things up. I really
                enjoyed implementing the Firebase authentication system and the
                chart library (Recharts). This was an opportunity to learn new
                technologies and figure out by myself how to make everything
                work. This was a really challenging project but also rewardful
                as it helped to improve my code structure and problem-solving
                skills.
              </p>
            </LessonsContainer>
            <ImageContainer>
              <Image src={homeCovid} alt="application image" />
              <Image src={userCovid} alt="application image" />
            </ImageContainer>
          </SubContainer>
        </Container>
      </Layout>
    </>
  )
}

export default Covid

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
