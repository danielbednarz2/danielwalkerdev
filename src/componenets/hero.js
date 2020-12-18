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
    font-size: 1.75em;
    grid-area: 1 / 1 / 2 / 1;

    @media (min-width: 900px) {
        font-size: 2.2em;
    }
    @media (min-width: 1200px) {
        font-size: 3em;
    }
    @media (min-width: 1500px) {
        font-size: 3.5em;
    }
    @media (min-width: 1800px) {
        font-size: 4em;
    }
`

const Button = styled(Link)`
  border-radius: 5px;
  padding: 0.5rem 0;
  width: 7.5rem;
  grid-area: 1 / 1 / 2 / 1;
  align-self: flex-end;
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
      margin-bottom: 5rem;
  }
  @media (min-width: 900px) {
      margin-bottom: 8rem;
  }
  @media (min-width: 1080px) {
      margin-bottom: 10rem;
  }

  @media (min-width: 1500px) {
      margin-bottom: 12rem;
  }

  @media (min-width: 1920px) {
      margin-bottom: 16rem;
  }
  @media (min-width: 2560px) {
      margin-bottom: 20rem;
  }
`

const Blurb = styled.p`
    font-size: 1.2rem;
    grid-area: 1 / 2 / 2 / 3;
    width: 90%;
    margin: auto;

    span {
        color: #274a57;
    }
`

const Hero = () => (
    <Main>
        <Intro>Hi, my name's Daniel.</Intro>
        <Button to={"/"}>My Work</Button>
        <Blurb>
            I'm a full stack web developer based in <span>Seattle, WA</span> with a background in technical and customer-focused support. Looking for an opportunity to apply creative, analytical, and communicative skills on a development team.
        </Blurb>
      </Main>
)

export default Hero;