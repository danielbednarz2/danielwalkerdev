import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Main = styled.main`
    height: 100vh;
    width: 90vw;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 1fr;
    gap: 1.5em;
    justify-content: center;
    align-items: center;
`

const Intro = styled.h1`
    font-size: 2.75em;
`

const Button = styled(Link)`
  border-radius: 5px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 7.5rem;
  grid-area: 2 /1 / 2 / 1;
  align-self: flex-start;
  background: transparent;
  color: #083140;
  border: 2px solid #083140;
  text-decoration:none;
  text-align: center;
  transition: 300ms;

  :hover {
    background: #F79F79;
    color: white;
  }

  @media (min-width: 768px) {
      margin-top: -4em;
  }
`

const Blurb = styled.p`
    font-size: 1.25rem;
`

const Hero = () => (
    <Main>
        <Intro>Hi, my name's Daniel.</Intro>
        <Button to="/projects">My Work</Button>
        <Blurb>
            I am a full stack web developer with a background in technical and customer-focused support. Looking for an opportunity to apply creative, analytical and communicative skills on a development team.
        </Blurb>
      </Main>
)

export default Hero;