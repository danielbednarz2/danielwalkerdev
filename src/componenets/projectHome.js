import React from "react"
import styled from "styled-components"
import netflix from "../images/netflix.jpg"
import money from "../images/money.jpg"
import blog from "../images/blog.jpg"
import { Html5, Css3, Javascript, NodeDotJs, Gatsby, NextDotJs, Graphql, ReactJs, Mongodb, MaterialUi, Mysql, Typescript} from "@icons-pack/react-simple-icons";


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
    li {
        font-size: 1rem;
        color: #d5e1e6;
        margin-bottom: 1.2em;
        list-style: none;

        > * {
            width: 2.5em;
            height: auto;
        }

        .myHtml {
            fill: #e34c26;
        }

        .myCss {
            fill: #264de4;
        }

        .myJS {
            fill: #f0db4f;
        }

        .myReact {
            fill: #61DBFB;
        }

        .myNode {
            fill: #68A063;
        }
        .myGatsby {
            fill: #663399;
        }
        .myGraph {
            fill: #f4447c;
        }
        .myNext {
            fill: #000000;
        }
        .myMongo {
            fill: #589636;
        }
        .mySql {
            fill: #f29111;
        }
        .myMaterial {
            fill: #03A9F4;
        }

        .myTypescript {
            fill: #3178c6;
        }
    }
`

const Image = styled.img`
    width: auto;
    height: 100%;
`

const Description = styled.div`
    font-size: 1rem;
    width: 60%;
    margin: auto;

    ul {
      display: flex;
      justify-content: space-between;
      margin: 1em 0;
    }
`

const ProjectHome = () => (
    <>
      <Project>
        <Image src={netflix} style={{ gridArea: 1 / 1 / 1 / 2 }}/>
        <Description style={{ gridArea: 1 / 2 / 1 / 3 }}>
          <h3>Netflix Clone</h3>
          <p>This is my take on a dynamic content platform for watching your favorite shows and movies.</p>
          <ul><li><NextDotJs className="myNext" /></li> <li><Mongodb className="myMongo" /></li> <li><MaterialUi className="myMaterial" /></li></ul>
        </Description>
        <Description style={{ gridArea: 2 / 1 / 3 / 1 }}>
          <h3>Financial Planner</h3>
          <p>This is my take on a financial planning application.</p>
          <ul><li><NextDotJs className="myNext" /></li> <li><Mongodb className="myMongo" /></li> <li><MaterialUi className="myMaterial" /></li></ul>
        </Description>
        <Image src={money} style={{ gridArea: 2 / 2 / 3 / 3 }}/>
        <Image src ={blog} style={{ gridArea: 3 / 1 / 4 / 2 }}/>
        <Description style={{ gridArea: 3 / 2 / 4 / 3 }}>
          <h3>Blog w/ CMS</h3>
          <p>This is my take on a personal blog with a content management system attached.</p>
          <ul><li><Gatsby className="myGatsby" /></li> <li><ReactJs className="myReact" /></li> <li><Graphql className="myGraph" /></li></ul>
        </Description>
        <Description style={{ gridArea: 4 / 1 / 5 / 2 }}>
          <h3>Online Shop</h3>
          <p>This is my take on an online shopping application.</p>
          <ul><li><NextDotJs className="myNext" /></li> <li><Mongodb className="myMongo" /></li> <li><MaterialUi className="myMaterial" /></li></ul>
        </Description>
        <Image src={money} style={{ gridArea: 4 / 2 / 5 / 3 }}/>
      </Project>
    </>
  )

export default ProjectHome