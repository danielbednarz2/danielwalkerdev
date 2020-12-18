import React from "react"
import styled from "styled-components"
import aboutphoto from "../images/AboutPhoto.png"
import { Html5, Css3, Javascript, NodeDotJs, Gatsby, NextDotJs, Graphql, ReactJs, Mongodb, MaterialUi, Mysql, Typescript} from "@icons-pack/react-simple-icons";


const About = styled.main`
    height:60vh;
    width: 100vw;
    margin: auto;
    padding: 3em 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    align-items: center;
    background-color: #274a57;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 3em 0;
        height: 100vh;
    }
`

const PhotoDiv = styled.div`
    width: 100%;
    height: 100%;
    justify-items: center;
    align-items: center;
    margin: auto;
    grid-area: 1 / 1 / 2 / 2;

    @media (max-width: 768px) {
            grid-area: 1 / 1 / 2 / 2;
        }
`

const Photo = styled.img`
    display: block;
    color: #d5e1e6;
    width: auto;
    height: 90%;
    margin: auto;
    justify-self: center;

    @media (max-width: 768px) {
        height: 100%;
    }

`

const Info = styled.p`
    font-size: 1rem;
    color: #d5e1e6;
    grid-area: 2 / 1 / 3 / 2;
    width: 75%;
    margin: auto;

    @media (min-width: 1440px) {
        width: 60%;
    }
`

const Tech = styled.div`
    width: 75%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    line-height: 3rem;
    grid-area: 1 / 2 / 3 / 3;

    li {
        font-size: 1rem;
        color: #d5e1e6;
        margin-bottom: 1.2em;

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

    @media (max-width: 768px) {
        grid-area: 3 / 1 / 4 / 2;
    }
`

const AboutHome = () => (
    <>
      <About>
        <PhotoDiv>
            <Photo src={aboutphoto} alt="Daniel Walker"/>
         </PhotoDiv>
        <Info>
            I am a self-taught developer and have spent the last few years learning the technologies listed here. Feel free to follow the links from the icon to see some projects/articles I've produced in each area of knowledge.
        </Info>
        <Tech>
            <ul>
                <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="blank" rel="noreferrer">
                    <li><Html5 className="myHtml"/></li>
                </a>
                <a href="https://www.javascript.com/" target="blank" rel="noreferrer">
                    <li><Javascript className="myJS"/></li>
                </a>
                <a href="https://nodejs.org/en/" target="blank" rel="noreferrer">
                    <li><NodeDotJs className="myNode"/></li>
                </a>
                <a href="https://www.mongodb.com/" target="blank" rel="noreferrer">
                    <li><Mongodb className="myMongo" /></li>
                </a>
            </ul>
            <ul>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="blank" rel="noreferrer">
                    <li><Css3 className="myCss"/></li>
                </a>
                <a href="https://reactjs.org/" target="blank" rel="noreferrer">
                    <li><ReactJs className="myReact" /></li>
                </a>
                <a href="https://www.gatsbyjs.com/" target="blank" rel="noreferrer">
                    <li><Gatsby className="myGatsby" /></li>
                </a>
                <a href="https://www.mysql.com/" target="blank" rel="noreferrer">
                    <li><Mysql className="mySql"/> </li>
                </a>
            </ul>
            <ul>
                <a href="https://material-ui.com/" target="blank" rel="noreferrer">
                    <li><MaterialUi className="myMaterial" /></li>
                </a>
                <a href="https://www.typescriptlang.org/" target="blank" rel="noreferrer">
                    <li><Typescript className="myTypescript" /></li>
                </a>
                <a href="https://nextjs.org/" target="blank" rel="noreferrer">
                    <li><NextDotJs className="myNext" /></li>
                </a>
                <a href="https://graphql.org/" target="blank" rel="noreferrer">
                    <li><Graphql className="myGraph"/> </li>
                </a>
            </ul>
        </Tech>
      </About>
    </>
  )

export default AboutHome;