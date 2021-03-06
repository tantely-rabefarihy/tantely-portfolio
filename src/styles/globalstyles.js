import { createGlobalStyle } from "styled-components"
import { theme } from "./theme"

const GlobalStyle = createGlobalStyle`


html {
  
  box-sizing: border-box;
 
}

*, *:before, *:after {
box-sizing:inherit;
}


h1 {
  font-family: "Poppins", sans-serif;

}
h2, h3, h4 {
  font-family: "Montserrat", sans-serif;
}
p, a , li{
  font-family: "Hind Madurai", sans-serif;
  
}

h1 {
  --fluid-type-min: 4rem;
  --fluid-type-max: 8rem;
  --fluid-type-target: 6vw;
  font-weight: 600;
  /* max-width: 15ch; */
}

h2 {
  --fluid-type-min: 1.5rem;
  --fluid-type-max: 3rem;
  --fluid-type-target: 2vw;
}

h3 {
  --fluid-type-min: 1.5rem;
  --fluid-type-max: 2rem;
}


h3 {
  margin: 2rem auto;
  /* max-width: 30ch; */
}

h4 {
  font-size: 1.3rem;
}

p {font-weight: lighter}

p, a, li {
  /* max-width: 60ch; */
  --fluid-type-min: 0.6rem;
  --fluid-type-max: 1.1rem;
}

h1,
h2,
h3,
p ,
a,
li {
  font-size: clamp(
    var(--fluid-type-min, 1rem),
    calc(1rem + var(--fluid-type-target, 3vw)),
    var(--fluid-type-max, 1.3rem)
  );
}


nav {
  width:100vw;
}

body {
    position:relative;
    margin:0 auto;
    min-width: 300px;
    /* min-height: 800px; */
    color: black;
    background: ${theme.primaryLight};
}

`

export default GlobalStyle
