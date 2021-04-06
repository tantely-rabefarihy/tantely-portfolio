import React from "react"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import NavBar from "../components/header/navbar"
import GlobalStyle from "../styles/globalstyles"
import Main from "../components/main"
import { theme } from "../styles/theme"
import { ThemeProvider } from "styled-components"

const HomePage = () => (
  <ThemeProvider theme={theme}>
    <>
      {/* <Helmet>
        <title>Tantely Rabefarihy - Full Stack Developer</title>
        <meta
          name="title"
          content="Tantely Rabefarihy - Full Stack Developer"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          // href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&family=Poppins:wght@200;400;500;700&family=Questrial&display=swap"
          href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400;500;600&family=Montserrat:wght@300;500;700&family=Questrial&display=swap"
          rel="stylesheet"
        />
      </Helmet> */}
      <GlobalStyle />
      <Layout>
        <NavBar />
        <Main />
      </Layout>
    </>
  </ThemeProvider>
)

export default HomePage
