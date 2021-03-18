import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`


html {
  scroll-behavior: smooth;
}

h1,
h2 {
  font-family: "Questrial", sans-serif;
}
p {
  font-family: "Montserrat", sans-serif;
}

body {
    margin:0;
    padding:0;
    min-width: 100%;
    min-height: 100%;
    color: black;
    /* background: rgb(228,228,228);
background: linear-gradient(180deg, rgba(228,228,228,1) 0%, rgba(154,154,154,1) 80%); */
background: linear-gradient(45deg, #ffffff, #b9bcc0);
}

`

export default GlobalStyle
