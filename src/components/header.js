import React from "react"
import styled from "styled-components"
import "../styles/styles.css"
import logo from "../images/logo.png"

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  background: transparent;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: fit-content;
  }

  li {
    list-style-type: none;
    padding: 0 1rem;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1rem;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
    /* underline effect for the links */
    text-transform: capitalize;
    display: inline-block;
    letter-spacing: 1px;
    transition: all 0.3s linear;
    position: relative;

    :after {
      background: none repeat scroll 0 0 transparent;
      bottom: -10px;
      content: "";
      display: block;
      height: 4px;
      left: 50%;
      position: absolute;
      background: rgb(34, 32, 32);
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }
    :hover:after {
      color: rgb(0, 0, 0);
      width: 100%;
      left: 0;
    }
  }
`

const Logo = styled.div`
  padding: 1rem;

  img {
    width: 60px;
    height: 40px;
  }
`

const Header = () => {
  return (
    <>
      <NavBar>
        <Logo>
          <img src={logo} />
        </Logo>
        <ul>
          <li>
            <a href="#welcome-section">About me</a>
          </li>
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#collaboration">Contact</a>
          </li>
        </ul>
      </NavBar>
    </>
  )
}

export default Header
