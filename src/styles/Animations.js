import { keyframes, styled } from "styled-components"

export const EmojiMoving = keyframes`
  /* @keyframes {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @-moz-keyframes {
    0% {
      -moz-transform: rotate(0deg);
    }
    10% {
      -moz-transform: rotate(14deg);
    }
    20% {
      -moz-transform: rotate(-8deg);
    }
    30% {
      -moz-transform: rotate(14deg);
    }
    40% {
      -moz-transform: rotate(-4deg);
    }
    50% {
      -moz-transform: rotate(10deg);
    }
    60% {
      -moz-transform: rotate(0deg);
    }
    100% {
      -moz-transform: rotate(0deg);
    }
  }

  @-webkit-keyframes {
    0% {
      -webkit-transform: rotate(0deg);
    }
    10% {
      -webkit-transform: rotate(14deg);
    }
    20% {
      -webkit-transform: rotate(-8deg);
    }
    30% {
      -webkit-transform: rotate(14deg);
    }
    40% {
      -webkit-transform: rotate(-4deg);
    }
    50% {
      -webkit-transform: rotate(10deg);
    }
    60% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
    }
  }

  @-o-keyframes {
    0% {
      -o-transform: rotate(0deg);
    }
    10% {
      -o-transform: rotate(14deg);
    }
    20% {
      -o-transform: rotate(-8deg);
    }
    30% {
      -o-transform: rotate(14deg);
    }
    40% {
      -o-transform: rotate(-4deg);
    }
    50% {
      -o-transform: rotate(10deg);
    }
    60% {
      -o-transform: rotate(0deg);
    }
    100% {
      -o-transform: rotate(0deg);
    }
  }

  @-ms-keyframes {
    0% {
      -ms-transform: rotate(0deg);
    }
    10% {
      -ms-transform: rotate(14deg);
    }
    20% {
      -ms-transform: rotate(-8deg);
    }
    30% {
      -ms-transform: rotate(14deg);
    }
    40% {
      -ms-transform: rotate(-4deg);
    }
    50% {
      -ms-transform: rotate(10deg);
    }
    60% {
      -ms-transform: rotate(0deg);
    }
    100% {
      -ms-transform: rotate(0deg);
    }
  } */

  0% {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
    -webkit-transform: rotate(14deg);
    -moz-transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
    -webkit-transform: rotate(-8deg);
    -moz-transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
    -webkit-transform: rotate(14deg);
    -moz-transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
    -webkit-transform: rotate(-4deg);
    -moz-transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
    -webkit-transform: rotate(10deg);
    -moz-transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
  }
`

export const SlideIn = keyframes`
  from {
    transform: translateY(30px);
    -webkit-transform: translateY(30px);
      -moz-transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
    opacity: 1;
  }
`

export const FadeIn = keyframes` from {
  
  opacity: 0;
}
to {
  
  opacity: 1;
}

/* @keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-moz-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-o-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}

@-ms-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
} */


`
