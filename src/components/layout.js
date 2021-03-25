import React from "react"
import styled from "styled-components"

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <main>{children}</main>
    </StyledLayout>
  )
}

export default Layout
