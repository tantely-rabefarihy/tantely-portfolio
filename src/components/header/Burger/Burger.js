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
          <a href="#about" onClick={() => handleClose()}>
            About me
          </a>
          <a href="#projects" onClick={() => handleClose()}>
            Work
          </a>
          <a href="#collaboration" onClick={() => handleClose()}>
            Contact
          </a>
        </LinksContainer>
      </Menu>
    </>
  )
}

export default Burger

const BurgerContainer = styled.div`
  /* display: none; */
  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: relative;
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
  height: 100vh;
  top: 0;
  right: 0;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;

  a {
    font-size: 4rem;
    width: fit-content;
    margin: 0 auto;
    padding: 2rem 0;
    color: black;
    text-decoration: none;
    /* transition: color 0.3s linear; */
    font-weight: bolder;
    transition: transform 0.5s;
    will-change: transform;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`
