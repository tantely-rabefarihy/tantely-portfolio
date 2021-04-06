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
      <GlobalStyle />
      <Layout>
        <NavBar />
        <Main />
      </Layout>
    </>
  </ThemeProvider>
)

export default HomePage
