import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Questrial&family=Roboto:wght@100;300;700&display=swap');

body {
    margin:0;
    padding:0;
    min-width: 500px;
    min-height: 800px;
    background: rgb(222,222,222);
background: radial-gradient(circle, rgba(222,222,222,1) 75%, rgba(203,201,201,1) 100%);
    
}

`

export default GlobalStyle
