import React from "react"
import GlobalStyle from "../styles/globalstyles"
import Logo from "../components/logo"
import homeCovid from "../images/homepage_covid.png"
import userCovid from "../images/userpage_covid.png"
import Layout from "../components/layout"

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

const Covid = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Logo />
        <Container>
          <Title>Covid Tracker</Title>
          <p>
            This personal project was built during my bootcamp at Concordia
            University. I wanted to create a web app to track the covid
            situation all over the world with some key numbers.
          </p>
          <LinkSection>
            <LinksContainer>
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
            </LinksContainer>
          </LinkSection>

          <PurposeContainer className="project-section">
            <h3>Purpose</h3>
            <p>
              As a final project, I had to showcase that I have a been learning
              all along the bootcamp and implement them effectively.
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
              countries. After choosing one of them, the user will see detailed
              numbers compared to the previous day informations.
            </p>
            <p>
              The user has also the ability to create his own profile, using the
              Firebase Authentication system. Once they are authenticated, they
              will get access to a personal page where a chart can be displayed
              and show the trend to a specific country.
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
                <span>&#9675;</span> Firebase / Cloud Firestore (deployment,
                Auth and Database)
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
              <p>
                <span>&#9675;</span> Heroku (back-end deployment)
              </p>
            </Stack>
          </TechContainer>
          <LessonsContainer className="project-section">
            <h3>Lessons</h3>
            <p>
              This project was a great opportunity to apply the skills that I
              learned, more specifically on React. One challenging part was the
              implementation of the Leaflet libray (world Map), the
              documentation was not really explicit and a lot of testing and
              research were necessary in order to set all things up. I really
              enjoyed implementing the Firebase authentication system and the
              chart library (Recharts). This was an opportunity to learn new
              technologies and figure out by myself how to make everything work.
              This was a really challenging project but also rewardful as it
              helped to improve my code structure and problem-solving skills.
            </p>
          </LessonsContainer>
          <ImageContainer>
            <Image src={homeCovid} alt="application image" />
            <Image src={userCovid} alt="application image" />
          </ImageContainer>
        </Container>
      </Layout>
    </>
  )
}

export default Covid
