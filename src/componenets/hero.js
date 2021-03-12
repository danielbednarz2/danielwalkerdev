import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"
import { Link } from 'react-scroll';



const Wrapper = styled.main`
    height: 70vh;
    width: 80vw;
    margin: auto;
    display: flex;
    flex-direction: column;
`

const Main = styled.div`
    height: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const IntroWrapper = styled.div`
    height: 50vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

    @media (max-width: 768px) {
        width: 100%;
    }
`

const Intro = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
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

const Photo = styled(Img)`
    width: 60%;
    height: auto;
    object-fit: contain;

    @media (max-width: 768px) {
        width: auto;
    }
`

const PhotoDiv = styled.div`
    width: 50%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        height: auto;
    }
`

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 7.5rem;
  padding: 0.25rem;
  background: transparent;
  color: #083140;
  border: 2px solid #083140;
  text-decoration:none;
  text-align: center;
  transition: 300ms;
  margin-right: 1em;

  :hover {
    background: #F79F00;
    color: white;
    cursor: pointer;
  }
`

const Blurb = styled.p`
    height: auto;
    font-size: 1.2rem;
    span {
        color: #274a57;
    }
    
    @media (max-width: 1200px) {
        font-size: 1rem;
    }

    @media (max-width: 768px) {
        font-size: .75rem;
    }

`


const Hero = () => {

    const data = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: {eq: "profile.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `)

    return (
        <Wrapper id="home">
            <Main>
                <PhotoDiv>
                    <Photo fluid={data.profileImage.childImageSharp.fluid} alt="Profile Image"/>
                </PhotoDiv>
                <IntroWrapper>
                    <Intro>Hi, my name's Daniel.</Intro>
                    <Blurb>
                        I'm a full stack web developer based in <span>Seattle, WA</span> with a background in technical and customer-focused support. Looking for an opportunity to apply creative, analytical, and communicative skills on a development team.
                    </Blurb>
                    <div style={{'display': 'flex'}}>
                    <Button to="projects">My Work</Button>
                    <Button to="contact">Contact Me</Button>
                    </div>
                </IntroWrapper>
            </Main>
        </Wrapper>
    )
}

export default Hero;