import React, { useState, useRef } from "react"
import Hamburger from "hamburger-react"
import styled from "styled-components"
import { useOnClickOutside } from "../../../utils/hooks"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Burger = () => {
  const [isOpen, setOpen] = useState(false)
  const node = useRef()
  const handleClose = () => {
    setOpen(!isOpen)
  }

  useOnClickOutside(node, () => setOpen(false))
  // console.log(isOpen)
  return (
    <>
      <Menu
        // style={{ padding: "0.5rem" }}
        ref={node}
      >
        <BurgerContainer isOpen={isOpen}>
          <Hamburger
            rounded
            toggled={isOpen}
            toggle={setOpen}
            color="black"
            size={30}
            direction="left"
            label="Show menu"
            distance="md"
            hideOutline={true}
          />
        </BurgerContainer>

        <LinksContainer isOpen={isOpen}>
          <AnchorLink to="/#about" onClick={() => handleClose()}>
            About me
          </AnchorLink>

          <AnchorLink to="/#projects" onClick={() => handleClose()}>
            Work
          </AnchorLink>
          <AnchorLink to="/#collaboration" onClick={() => handleClose()}>
            Contact
          </AnchorLink>
        </LinksContainer>
      </Menu>
    </>
  )
}

export default Burger

const BurgerContainer = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    position: ${({ isOpen }) => (isOpen ? "fixed" : "relative")};
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "20px")};
    z-index: 20;
  }
`

const Menu = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
  }
`

const LinksContainer = styled.div`
  display: flex;
  z-index: 10;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.PrimaryFontColor};
  position: fixed;
  width: 50vw;
  height: 100%;
  top: 0;
  right: 0;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  will-change: transform;

  a {
    width: fit-content;
    margin: 0 auto;
    padding: 2rem 0;
    color: black;
    text-decoration: none;
    font-weight: bolder;
    transition: transform 0.5s;
    will-change: transform;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      transform: scale(1.1);
      will-change: transform;
    }
  }
`
