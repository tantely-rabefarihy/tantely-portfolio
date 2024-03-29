import React from "react"
import styled from "styled-components"
import Helmet from "react-helmet"

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1600px;
`

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Helmet>
        <html lang="en" />
        <title>Tantely Rabefarihy - Front-End Web Developer</title>
        <meta
          name="title"
          content="Tantely Rabefarihy - Front-End Web Developer"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400;500;600&family=Montserrat:wght@300;500;700&family=Poppins:wght@100;300;400;500;600;700;800&family=Questrial&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <main>{children}</main>
    </StyledLayout>
  )
}

export default Layout
