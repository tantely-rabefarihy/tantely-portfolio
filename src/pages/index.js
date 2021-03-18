import React from "react"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import NavBar from "../components/header/navbar"
import GlobalStyle from "../styles/globalstyles"
import Main from "../components/main"
// import { ParticleContainer } from "../styles/particle"

const HomePage = () => (
  <>
    <Helmet>
      <title>Tantely Rabefarihy - Full Stack Developer</title>
      <meta name="title" content="Tantely Rabefarihy - Full Stack Developer" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;700&family=Questrial&family=Roboto:wght@100;300;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle />
    <Layout>
      <NavBar />
      <Main />
    </Layout>
  </>
)

export default HomePage
