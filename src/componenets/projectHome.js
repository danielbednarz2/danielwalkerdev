import React from "react"
import styled from "styled-components"
import netflix from "../images/netflix.jpg"
import money from "../images/money.jpg"
import blog from "../images/blog.jpg"
import { NodeDotJs, Javascript, Strapi, ReactJs, MaterialUi, Postgresql} from "@icons-pack/react-simple-icons";


const Wrapper = styled.main`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {
        font-size: .9rem;
        color: #d5e1e6;
        margin: 1.2em 0;
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
        .myStrapi {
            fill: #1c1b7e;
        }
        .myNext {
            fill: #000;
        }
        .myExpress {
            fill: #000;
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

    .column-reverse {
        @media (max-width: 1024px){
            flex-direction: column-reverse;
        }
    }
`

const Project = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 2em 0;

    @media (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const Image = styled.img`
    width: 30%;
    height: auto;
    object-fit: cover;

    @media (max-width: 1024px) {
        height: 30%;
        width: 60%;
    }
`

const Description = styled.div`
    font-size: 1.1rem;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media (max-width: 1024px) {
        width: 60%;
        margin-top: 1.5em;
    }

    h3 {
        @media (max-width: 768px) {
            font-size: 1rem;
        }
    }

    p {
        padding: .5rem 0;

        @media (max-width: 768px) {
            font-size: .75rem;
        }
    } 

    span {
        font-size: .75rem;
        font-weight: bold;
        color: #DD7F1D;

        
    }

    ul {
      display: flex;
      justify-content: flex-start;
      margin-top: -.4rem;

      li {
        margin-right: 2rem;

        @media (max-width: 768px) {
              font-size: .6rem;
            }
        
        @media (max-width: 420px) {
            font-size: .4rem;
        }
      }
    }
`

const Links = styled.div`
    display: flex;
    justify-content: flex-start;
    font-size: .75rem;

    a {
        text-decoration: none;
        color: #DD7F1D;
        font-weight: bold;

        &:hover {
            color: #F79F00;
        }
    }

    span {
        margin-right: .5em;
    }

    @media (max-width: 420px) {
        font-size: .5rem;
    }
`

const TechnologiesIncludes = styled.span`
    margin-top: .5rem;
`

const ProjectHome = () => (
    <>
      <Wrapper id="projects">
        <Project>
            <Image src={netflix} />
            <Description>
                <h3>Movie App</h3>
                <Links>
                <span><a href="https://www.movieapp.dev" target="_blank" rel="noreferrer">Website</a></span>
                <span >|</span>
                <span><a href="https://github.com/danielbednarz2/movieapp" target="_blank" rel="noreferrer">Source Code</a></span>
                </Links>
                <p>This is my take on a dynamic video platform. I've used custom API's to connect to movie databases to show the most up-to-date movies, ratings, release data and movie posters.</p>
                <TechnologiesIncludes>Technologies included:</TechnologiesIncludes>
                <ul>
                <li><ReactJs className="myReact" /></li> 
                    <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64"><path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" className="myExpress"/></svg></li> 
                    <li><NodeDotJs className="myNode" /></li>
                </ul>
            </Description>
        </Project>
        <Project className="column-reverse">
            <Description >
            <h3>Financial Planner</h3>
            <Links>
                <span><a href="https://www.financialplanner.dev" target="_blank" rel="noreferrer">Website</a></span>
                <span>|</span>
                <span><a href="https://github.com/danielbednarz2/financial-planner" target="_blank" rel="noreferrer">Source Code</a></span>
            </Links>
            <p>This is my take on a budgeting tool. I've used MaterialUI for the design along with React to create the best UX for updating your finances.</p>
            <TechnologiesIncludes>Technologies included:</TechnologiesIncludes>
            <ul>
                <li><ReactJs className="myReact" /></li> 
                <li><Postgresql className="myPostgresql" /></li> 
                <li><MaterialUi className="myMaterial" /></li>
            </ul>
            </Description>
            <Image src={money} />
        </Project>
        <Project>
            <Image src ={blog} />
            <Description >
            <h3>Discover Boldly</h3>
            <Links>
                <span><a href="https://www.discoverboldly.com" target="_blank" rel="noreferrer">Website</a></span>
                <span>|</span>
                <span><a href="https://github.com/danielbednarz2/Discover-Boldly" target="_blank" rel="noreferrer">Source Code</a></span>
            </Links>
            <p>This is my personal blog, I've used React for component-based structure and Strapi as a headless CMS to post content.</p>
            <TechnologiesIncludes>Technologies included:</TechnologiesIncludes>
            <ul>
                <li><Javascript className="myJS" /></li> 
                <li><ReactJs className="myReact" /></li> 
                <li><Strapi className="myStrapi" /></li>
            </ul>
            </Description>
        </Project>
        <Project className="column-reverse">
            <Description>
            <h3>Givens</h3>
            <Links>
                <span><a href="https://www.givens.com" target="_blank" rel="noreferrer">Website</a></span>
                <span>|</span>
                <span><a href="https://github.com/danielbednarz2/givens" target="_blank" rel="noreferrer">Source Code</a></span>
            </Links>
            <p>This is my take on an online shopping application.</p>
            <TechnologiesIncludes>Technologies included:</TechnologiesIncludes>
            <ul>
                <li><ReactJs className="myReact" /></li> 
                <li><NodeDotJs className="myNode" /></li> 
                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64"><path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" className="myExpress"/></svg></li> 
            </ul>
            </Description>
            <Image src={money} />
        </Project>
      </Wrapper>
    </>
  )
  
export default ProjectHome