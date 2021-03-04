import React from "react"
// import SEO from "../components/seo"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import Header from "../components/header"
import GlobalStyle from "../styles/globalstyles"
import Main from "../components/main"

const IndexPage = () => (
  <React.Fragment>
    {/* <SEO title="Home" /> */}
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
      <Header />
      <Main />
    </Layout>
  </React.Fragment>
)

export default IndexPage
