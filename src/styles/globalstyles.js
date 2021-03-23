import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`


html {
  scroll-behavior: smooth;
}

h1,
h2 {
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
    background: #b9bcc0;


}

`

export default GlobalStyle
