import React from "react"
import GlobalStyle from "../styles/globalstyles"
import Logo from "../components/logo"
import Layout from "../components/layout"
import ecomPic from "../images/ecom.png"
import cart from "../images/cart.png"
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

const Ecommerce = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Logo />
        <Container>
          <Title>E-Store</Title>
          <p>
            This group project was built during my bootcamp at Concordia
            University. We were asked to build a store.
          </p>
          <LinksContainer>
            <ProjectLink>
              <a
                className="arrow"
                href="https://wizardly-bassi-29ed3a.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Live website
              </a>
            </ProjectLink>
            <GithubLink>
              <a
                className="arrow"
                href="https://github.com/tantely-rabefarihy/project-GROUP-e-commerce-client"
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
              As a group project, we splitted the tasks evenly between the
              front-end and the back-end. I was working on front-end.
            </p>
          </PurposeContainer>
          <DetailsContainer className="project-section">
            <h3>Details</h3>
            <p>
              Each day, we had morning meetings to follow-up with the current
              tasks and discussing about any blockers that we encountered. After
              each step done, it was updated on our TRELLO in order to keep
              track of remaining requirements for the project.
            </p>
            <p>
              My part was focused on the homepage design and implementing the
              grid system while fetching the data from the API.
            </p>
          </DetailsContainer>
          <TechContainer className="project-section">
            <h3>Tech</h3>
            <Stack>
              <p>
                <span>&#9675;</span> React
              </p>
              <p>
                <span>&#9675;</span> Redux
              </p>
              <p>
                <span>&#9675;</span> Styled Components
              </p>
              <p>
                <span>&#9675;</span> Git
              </p>
              <p>
                <span>&#9675;</span> Trello
              </p>
            </Stack>
          </TechContainer>
          <LessonsContainer className="project-section">
            <h3>Lessons</h3>
            <p>
              This project was a great opportunity to collaborate as a team on a
              React project. The challenging part was the version controlling
              and managing conflicts when merging several pull requests. This
              was a benefic and challenging project because it helped us to
              improve team communication and collaborate in a short period of
              time.
            </p>
          </LessonsContainer>
          <ImageContainer>
            <Image src={ecomPic} alt="application image" />
            <Image src={cart} alt="application image" />
          </ImageContainer>
        </Container>
      </Layout>
    </>
  )
}

export default Ecommerce
