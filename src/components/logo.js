import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import pageLogo from "../images/logo_tantely.svg"

const LogoContainer = styled.div`
  img {
    padding-left: 0.75rem;
    width: 4rem;
    height: 4rem;
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
