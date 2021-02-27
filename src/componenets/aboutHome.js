import React from "react"
import styled from "styled-components"
import aboutphoto from "../images/AboutPhoto.png"
import { Html5, Css3, Javascript, NodeDotJs, Gatsby, NextDotJs, Graphql, ReactJs, MaterialUi, Postgresql, Typescript } from "@icons-pack/react-simple-icons";


const About = styled.main`
    height:auto;
    padding: 3em 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #274a57;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: space-between;
    }
`

const PhotoDiv = styled.div`
    width: 33%;
    display: flex;
    justify-content: center;
`

const Photo = styled.img`
    color: #d5e1e6;
    width: 70%;
    height: auto;
`

const Info = styled.p`
    font-size: 1rem;
    color: #d5e1e6;
    width: 20%;

    @media (max-width: 768px) {
        width: 60%;
        margin: 2rem 0;
        font-size: .75rem;
    }

    @media (min-width: 1200px) {
        width: 33%;
    }
`

const Tech = styled.div`
    width: 33%;
    display: flex;
    justify-content: space-evenly;
    line-height: 3rem;

    li {
        font-size: 1rem;
        color: #d5e1e6;
        margin-bottom: 1.1em;

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
            fill: #000;
        }
        .myExpress {
            fill: #000;
        }
        .myPostgres {
            fill: #ffffff;
        }
        .myMaterial {
            fill: #03A9F4;
        }

        .myTypeScript {
            fill: #3178c6;
        }
    }

    @media (max-width: 768px) {
        width: 50%;
        line-height: 1rem;
        justify-content: space-between;
        
        li {
            font-size: .75rem;
        }
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
                    <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64"><path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" class="myExpress"/></svg></li>
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
                <a href="https://www.postgresql.org/" target="blank" rel="noreferrer">
                    <li><Postgresql className="myPostgres"/> </li>
                </a>
            </ul>
            <ul>
                <a href="https://material-ui.com/" target="blank" rel="noreferrer">
                    <li><MaterialUi className="myMaterial" /></li>
                </a>
                <a href="https://www.typescriptlang.org/" target="blank" rel="noreferrer">
                    <li><Typescript className="myTypeScript" /></li>
                </a>
                <a href="https://nextjs.org/" target="blank" rel="noreferrer">
                    <li><NextDotJs className="myNext" /></li>
                </a>
                <a href="https://graphql.org/" target="blank" rel="noreferrer">
                    <li><Graphql className="myGraph"/> </li>
                </a>
            </ul>
        </Tech>
        <div>
        </div>
      </About>
    </>
  )

export default AboutHome;