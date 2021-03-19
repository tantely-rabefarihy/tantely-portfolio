import React, { useState, useRef } from "react"
import Hamburger from "hamburger-react"
import styled from "styled-components"
import { useOnClickOutside } from "../../../utils/hooks"

const Burger = () => {
  const [isOpen, setOpen] = useState(false)
  const node = useRef()
  const handleClose = () => {
    setOpen(!isOpen)
  }

  useOnClickOutside(node, () => setOpen(false))
  console.log(isOpen)
  return (
    <>
      <Menu style={{ padding: "0.5rem" }} ref={node}>
        <BurgerContainer>
          <Hamburger
            rounded
            toggled={isOpen}
            toggle={setOpen}
            color="black"
            size={50}
            direction="left"
            label="Show menu"
            distance="md"
            hideOutline={true}
          />
        </BurgerContainer>

        <LinksContainer isOpen={isOpen}>
          <a id="about" href="#welcome-section" onClick={() => handleClose()}>
            About me
          </a>
          <a id="workout" href="#projects" onClick={() => handleClose()}>
            Work
          </a>
          <a id="contact" href="#collaboration" onClick={() => handleClose()}>
            Contact
          </a>
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
    position: relative;
    z-index: 1;
  }
`

const Menu = styled.div`
  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`

const LinksContainer = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  color: black;
  position: absolute;
  width: 50vw;
  height: 100vh;
  top: 0;
  right: 0;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(200%)")};
  transition: transform 0.3s ease-in-out;

  a {
    font-size: 4rem;
    padding: 2rem 0;
    color: ${({ theme }) => theme.PrimaryFontColor};
    text-decoration: none;
    transition: color 0.3s linear;
    font-weight: bolder;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: ${({ theme }) => theme.PrimaryFontColor};
    }
  }
`
