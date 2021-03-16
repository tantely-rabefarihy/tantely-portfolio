import React from "react"
import styled from "styled-components"
import logo from "../images/logo_tantely.svg"

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: transparent;

  @media only screen and (max-width: 568px) {
  }

  ul {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
    display: flex;
    padding-right: 1.5rem;
    align-self: center;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 0.8rem;
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
      top: 1.2rem;
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
  padding: 0.75rem;

  img {
    width: 3rem;
    height: 2rem;
  }
`

const Header = () => {
  return (
    <>
      <NavBar>
        <Logo>
          <img src={logo} alt="logo" />
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
