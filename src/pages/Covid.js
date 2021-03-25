import React from "react"
import styled from "styled-components"
import GlobalStyle from "../styles/globalstyles"
import Logo from "../components/logo"
import { SlideIn } from "../styles/Animations"
import homeCovid from "../images/homepage_covid.png"
import userCovid from "../images/userpage_covid.png"

const Covid = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Container>
        <Title>Covid Tracker</Title>
        <p>
          This personal project was built during my bootcamp at Concordia
          University. I wanted to create a web app to track the covid situation
          all over the world with some key numbers.
        </p>

        <h3>Purpose</h3>
        <p>
          As a final project, I had to showcase that I have a been learning all
          along the bootcamp and implement them effectively.
        </p>

        <h3>Details</h3>
        <p>
          The user arrives on the homepage where is displayed a kind of heatmap
          but with circles. When hovering on them it will display some key
          infos. These data are fetched directly from Disease.sh API,
          implemented in the back-end.
        </p>

        <p>
          On the left side, a dropdown selector will give you all the countries.
          After choosing one of them, the user will see detailed numbers
          compared to the previous day informations.
        </p>
        <p>
          The user has also the ability to create his own profile, using the
          Firebase Authentication system. Once they are authenticated, they will
          get access to a personal page where a chart can be displayed and show
          the trend to a specific country.
        </p>
        <h3>Tech</h3>
        <p>
          React Node Express Firebase / Cloud Firestore Styled Components React
          Leaflet (map) Recharts (chart)
        </p>

        <h3>Lessons</h3>

        <p>
          This project was a great opportunity to apply the skills that I
          learned, more specifically on React. One challenging part was the
          implementation of the Leaflet libray (world Map), the documentation
          was not really explicit and a lot of testing and research were
          necessary in order to set all things up. I really enjoyed implementing
          the Firebase authentication system and the chart library (Recharts).
          This was an opportunity to learn new technologies and figure out by
          myself how to make everything work. This was a really challenging
          project but also rewardful as it helped to improve my code structure
          and app design.
        </p>
        <ImageContainer>
          <Image src={homeCovid} alt="application image" />
          <Image src={userCovid} alt="application image" />
        </ImageContainer>
      </Container>
    </>
  )
}

export default Covid

const Container = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  opacity: 0;
  animation: ${SlideIn} 0.8s 0.8s forwards;
`

const Title = styled.h1``

const ImageContainer = styled.div`
  margin: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap: 2rem;
`

const Image = styled.img`
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  width: 25rem;
  height: 20rem;
`
