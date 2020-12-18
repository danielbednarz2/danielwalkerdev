import React from "react"
import styled from "styled-components"
import netflix from "../images/netflix.jpg"
import money from "../images/money.jpg"
import blog from "../images/blog.jpg"

const Project = styled.main`
    height: 100vh;
    width: 90vw;
    margin: 3em auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 4em 2em;
    justify-content: center;
    align-items: center;
    justify-items: center;
`

const Image = styled.img`
    width: auto;
    height: 100%;
`

const Description = styled.div`
    font-size: 1rem;
    width: 75%;
    margin: auto;
`

const ProjectHome = () => (
    <>
      <Project>
        <Image src={netflix} style={{ gridArea: 1 / 1 / 1 / 2 }}/>
        <Description style={{ gridArea: 1 / 2 / 1 / 3 }}>
          <h3>Netflix Clone</h3>
          <p>This is my take on a dynamic content platform for watching your favorite shows and movies.</p>
          <p><strong>Next.js MongoDB MaterialUI</strong></p>
        </Description>
        <Description style={{ gridArea: 2 / 1 / 3 / 1 }}>
          <h3>Financial Planner</h3>
          <p>This is my take on a financial planning application.</p>
          <p><strong>Next.js MongoDB MaterialUI</strong></p>
        </Description>
        <Image src={money} style={{ gridArea: 2 / 2 / 3 / 3 }}/>
        <Image src ={blog} style={{ gridArea: 3 / 1 / 4 / 2 }}/>
        <Description style={{ gridArea: 3 / 2 / 4 / 3 }}>
          <h3>Blog w/ CMS</h3>
          <p>This is my take on a personal blog with a content management system attached.</p>
          <p><strong>Next.js MongoDB MaterialUI</strong></p>
        </Description>
        <Description style={{ gridArea: 4 / 1 / 5 / 2 }}>
          <h3>Online Shop</h3>
          <p>This is my take on an online shopping application.</p>
          <p><strong>Next.js MongoDB MaterialUI</strong></p>
        </Description>
        <Image src={money} style={{ gridArea: 4 / 2 / 5 / 3 }}/>
      </Project>
    </>
  )

export default ProjectHome