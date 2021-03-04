import React from "react"
import styled from "styled-components"
import "../styles/styles.css"

const Header = () => {
  return (
    <>
      <nav id="navbar">
        <ul>
          <li>
            <a href="#welcome-section">About</a>
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
