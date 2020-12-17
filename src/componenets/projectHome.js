import React from "react"
import styled from "styled-components"

const Hero = styled.main`
    height: 100vh;
    width: 90vw;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 1fr;
    justify-content: center;
    align-items: center;
`

const Intro = styled.h1`
    font-size: 3em;
`

const Blurb = styled.p`
    font-size: 1.25rem;
`

const ProjectHome = () => (
      <Hero>
        <Intro>Hi, my name's Daniel.</Intro>
        <Blurb>
            I am a full stack web developer with a background in technical and customer-focused support. 
            <br />
            <br />
            Looking for an opportunity to apply creative, analytical and communicative skills on a development team.
        </Blurb>
      </Hero>
  )

export default ProjectHome