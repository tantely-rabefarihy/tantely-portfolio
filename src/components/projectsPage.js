import styled from "styled-components"
import { SlideIn } from "../styles/Animations"
import { theme } from "../styles/theme"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  opacity: 0;
  animation: ${SlideIn} 0.8s 0.8s forwards;

  h3 {
    border-bottom: 1px solid ${theme.secondaryDark};
  }

  .project-section {
    margin: 3rem 0;
  }

  @media only screen and (max-width: 568px) {
    width: 100vw;
  }
`
export const SubContainer = styled.main`
  margin: 0 1rem;
`
export const Title = styled.h1``

export const LinksContainer = styled.div`
  display: flex;
  max-width: 600px;
  margin: 0 auto;
`

export const ProjectLink = styled.p`
  text-align: center;
  margin: 2rem auto;
  .arrow {
    font-weight: bold;
    color: ${theme.primaryLight};
    /* background-color: inherit; */
    margin: 1rem 0;
    padding: 0.5rem;
    text-decoration: none;
    -webkit-transition: transform 0.3s ease-out;
    -moz-transition: transform 0.3s ease-out;
    -ms-transition: transform 0.3s ease-out;
    -o-transition: transform 0.3s ease-out;
    transition: transform 0.3s ease-out;
    transition: background-color 0.5s ease, color 0.5s ease;
    background-color: ${theme.secondaryDark};
    border-radius: 8px;

    &::before {
      display: inline-flexbox;
      padding-right: 10px;
      content: "➡"; // arrow right unicode
      -webkit-transition: transform 0.3s ease-out;
      -moz-transition: transform 0.3s ease-out;
      -ms-transition: transform 0.3s ease-out;
      -o-transition: transform 0.3s ease-out;
      transition: transform 0.3s ease-out;
    }

    &:hover {
      color: ${theme.primaryHover};
      background-color: ${theme.primaryDark};

      &::before {
        -webkit-transform: translateX(4px);
        -moz-transform: translateX(4px);
        -ms-transform: translateX(4px);
        -o-transform: translateX(4px);
        transform: translateX(4px);
      }
    }
  }
`

export const GithubLink = styled.p`
  text-align: center;
  margin: 2rem auto;
  .arrow {
    font-weight: bold;
    color: ${theme.primaryLight};
    /* background-color: inherit; */
    margin: 1rem 0;
    padding: 0.5rem;
    text-decoration: none;
    -webkit-transition: transform 0.3s ease-out;
    -moz-transition: transform 0.3s ease-out;
    -ms-transition: transform 0.3s ease-out;
    -o-transition: transform 0.3s ease-out;
    transition: transform 0.3s ease-out;
    transition: background-color 0.5s ease, color 0.5s ease;
    background-color: ${theme.secondaryDark};
    border-radius: 8px;

    &::before {
      display: inline-flexbox;
      padding-right: 10px;
      content: "➡"; // arrow right unicode
      -webkit-transition: transform 0.3s ease-out;
      -moz-transition: transform 0.3s ease-out;
      -ms-transition: transform 0.3s ease-out;
      -o-transition: transform 0.3s ease-out;
      transition: transform 0.3s ease-out;
    }

    &:hover {
      color: ${theme.primaryHover};
      background-color: ${theme.primaryDark};

      &::before {
        -webkit-transform: translateX(4px);
        -moz-transform: translateX(4px);
        -ms-transform: translateX(4px);
        -o-transform: translateX(4px);
        transform: translateX(4px);
      }
    }
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap: 2rem;
  padding: 2rem;
`

export const Image = styled.img`
  width: 100%;
  max-width: 510px;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  /* width: 100%; */
  height: 100%;
  max-height: auto;

  @media only screen and (max-width: 568px) {
    /* width: 18rem;
    height: 15rem; */
  }
`

export const Stack = styled.div`
  p {
    margin: 0 0 1rem 0;
  }
  /* column-count: 2;
  column-gap: 2rem; */
  -webkit-columns: 40px 2;
  /* Chrome, Safari, Opera */
  -moz-columns: 60px 2;
  /* Firefox */
  columns: 60px 2;
  margin: 0 auto;
`

export const PurposeContainer = styled.div``

export const DetailsContainer = styled.div``

export const TechContainer = styled.div``

export const LessonsContainer = styled.div``
