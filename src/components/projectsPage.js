import styled from "styled-components";
import { FadeIn } from "../styles/Animations";
import { theme } from "../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0;
  animation: ${FadeIn} 0.8s forwards;
  -webkit-animation: ${FadeIn} 0.8s forwards;

  h3 {
    border-bottom: 1px solid ${theme.secondaryDark};
  }

  .project-section {
    margin: 3rem 0;
  }

  @media only screen and (max-width: 568px) {
    width: 100%;
  }
`

export const Title = styled.h1`
  width: 100%;
`
export const LinkSection = styled.div``
export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`

export const ProjectLink = styled.p`
  text-align: center;
  margin: 2rem auto;
  .arrow {
    font-weight: bold;
    color: ${theme.primaryLight};
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
  gap: 3rem 3rem;
  padding: 1rem 0;
  margin: 0 auto;

  @media only screen and (max-width: 568px) {
    height: 100%;
  }
`

export const Image = styled.div`

  .projectImg {
    width: 100%;
    max-width: 510px;
    border-radius: 8px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    height: 100%;
    max-height: auto;

    @media only screen and (max-width: 568px) {
      height: 20rem;
      max-width: 380px;
    }
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
