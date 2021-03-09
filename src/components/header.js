import React from "react"
import styled from "styled-components"
import "../styles/styles.css"
import logo from "../images/logo.png"

const Header = () => {
  return (
    <>
      <nav id="navbar">
        <div className="logo">
          <img src={logo} />
        </div>
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
      </nav>
    </>
  )
}

export default Header
