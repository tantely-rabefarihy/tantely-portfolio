import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Burger from "./Burger/Burger"
import Logo from "../logo"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { theme } from "../../styles/theme"

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: auto;
  position: fixed;
  width: 100vw;
  background-color: ${theme.primaryLight};
  z-index: 999;
  box-shadow: ${props =>
    props.isPast ? "0 2px 3px 0 rgba(0, 0, 0, 0.2)" : "none"};
  margin: 0 auto;
  transition: 0.8s all ease;
`

const LinksContainer = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  max-width: 600px;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 1rem;
  @media only screen and (max-width: ${theme.mobile}) {
    display: none;
  }

  li {
    list-style-type: none;
    display: flex;
    width: fit-content;

    @media only screen and (max-width: 568px) {
      padding-right: 1rem;
    }
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
    width: max-content;
    text-transform: capitalize;
    display: inline-block;
    letter-spacing: 1px;
    transition: all 0.3s linear;
    position: relative;

    @media only screen and (max-width: 568px) {
      font-size: 0.75em;
    }

    &:after {
      background: none repeat scroll 0 0 transparent;
      top: 2rem;
      content: "";
      display: block;
      height: 4px;
      left: 50%;
      position: absolute;
      background: black;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }

    &:hover:after {
      color: rgb(0, 0, 0);
      width: 100%;
      left: 0;
    }
  }
`

const NavBar = () => {
  const [isPast, setIsPast] = useState(false)

  const handleScroll = () => {
    if (window.scrollY >= 20) {
      setIsPast(true)
    } else {
      setIsPast(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Nav isPast={isPast}>
        <Logo />
        <Burger />
        <LinksContainer>
          <li>
            <AnchorLink to="/#about">About me</AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#projects">Work</AnchorLink>
          </li>
          <li>
            <AnchorLink to="/#collaboration">Contact</AnchorLink>
          </li>
        </LinksContainer>
      </Nav>
    </>
  )
}

export default NavBar
