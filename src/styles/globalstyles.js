import { createGlobalStyle } from "styled-components"
import { theme } from "./theme"

const GlobalStyle = createGlobalStyle`


html {
  scroll-behavior: smooth;
  box-sizing: border-box;
}

*, *:before, *:after {
box-sizing:inherit;
}


h1,
h2, h3 {
  font-family: "Questrial", sans-serif;
}
p, a {
  font-family: "Montserrat", sans-serif;
}

body {
    position:absolute;
    margin:0;
    padding:0;
    min-width: 100%;
    min-height: 100%;
    color: black;
    background: ${theme.primaryLight};
}

`

export default GlobalStyle
