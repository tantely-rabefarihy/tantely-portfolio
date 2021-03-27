import React from "react"
import styled from "styled-components"
import Burger from "./Burger/Burger"
import Logo from "../logo"

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: transparent;
`

const LinksContainer = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 568px) {
    display: none;
  }

  li {
    list-style-type: none;
    display: flex;
    padding-right: 4rem;
    align-self: center;

    @media only screen and (max-width: 568px) {
      padding-right: 1rem;
    }
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1.2em;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;

    /* underline effect for the links */
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
  return (
    <>
      <Nav>
        <Logo />
        <Burger />
        <LinksContainer>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#collaboration">Contact</a>
          </li>
        </LinksContainer>
      </Nav>
    </>
  )
}

export default NavBar
