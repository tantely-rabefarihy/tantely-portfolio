import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import pageLogo from "../images/logo_tantely.svg"

const LogoContainer = styled.div`
  min-width: 4.5rem;
  width: 100%;
  max-width: calc(100% / 10);
  height: 100%;
  img {
    padding: 1rem 0 1rem 1rem;
    width: 100%;
    height: 100%;
  }
`

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <img src={pageLogo} alt="logo" />
      </Link>
    </LogoContainer>
  )
}

export default Logo
