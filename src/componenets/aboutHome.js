import React from "react"
import styled from "styled-components"
import aboutphoto from "../images/AboutPhoto.png"

const About = styled.main`
    height:60vh;
    width: 100vw;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    background-color: #274a57;
`

const Photo = styled.img`
    width: 50%;
    height: auto;
    color: #d5e1e6;
    justify-self: center;
`

const Blurb = styled.p`
    font-size: 1.25rem;
    color: #d5e1e6;
    margin-right: 1em;
`

const AboutHome = () => (
      <About>
        <Photo src={aboutphoto} alt="Daniel Walker"/>
        <Blurb>
            I am a full stack web developer with a background in technical and customer-focused support. 
            <br />
            <br />
            Looking for an opportunity to apply creative, analytical and communicative skills on a development team.
        </Blurb>
      </About>
  )

export default AboutHome