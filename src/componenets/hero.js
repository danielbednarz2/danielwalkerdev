import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Wrapper = styled.main`
    height: 100vh;
    width: 80vw;
    margin: auto;

    @media (min-width: 1200px) {
        width: 70vw;
    }
`

const Main = styled.div`
    height: 50vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const IntroWrapper = styled.div`
    height: 25vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

    @media (max-width: 768px) {
        align-items: center;
    }

    @media (max-width: 540px) {
        width: 85%;
    }
`

const Intro = styled.h1`
    display: flex;
    font-size: 1.25rem;

    @media (min-width: 768px) {
        font-size: 1.6rem;
    }

    @media (min-width: 1024px) {
        font-size: 2rem;
    }

    @media (min-width: 1200px) {
        font-size: 2.2rem;
    }

    @media (min-width: 1600px) {
        font-size: 2.5rem;
    }
`

const Button = styled(Link)`
  border-radius: 5px;
  width: 7.5rem;
  padding: 0.25rem;
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
`

const Blurb = styled.p`
    height: auto;
    font-size: 1.2rem;
    width: 50%;
    span {
        color: #274a57;
    }

    @media (max-width: 768px) {
        width: 80%;
        font-size: .75rem;
    }
`

const Hero = () => (
    <Wrapper>
        <Main>
            <IntroWrapper>
                <Intro>Hi, my name's Daniel.</Intro>
                <Button to={"/"}>My Work</Button>
            </IntroWrapper>
            <Blurb>
                I'm a full stack web developer based in <span>Seattle, WA</span> with a background in technical and customer-focused support. Looking for an opportunity to apply creative, analytical, and communicative skills on a development team.
            </Blurb>
        </Main>
    </Wrapper>
)

export default Hero;