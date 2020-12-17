import React from "react";
import styled from "styled-components";
import { Linkedin, Github, Twitter, Instagram } from "@styled-icons/boxicons-logos";
const Bottom = styled.footer`
   min-height: 10vh;
   width: 100vw;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center; 
`
const Copyright = styled.p`
    font-size: 1rem;
    margin: 1rem 0;
`

const Social = styled.section`
    display: flex;
    margin-top: 1em;
`

const LinkedInIcon = styled(Linkedin)`
    height: 2rem;
    width: auto;
    margin-right: 1em;
`
const GithubIcon = styled(Github)`
    height: 2rem;
    width: auto;
    margin-right: 1em;
`

const TwitterIcon = styled(Twitter)`
    height: 2rem;
    width: auto;
    margin-right: 1em;
`

const InstagramIcon = styled(Instagram)`
    height: 2rem;
    width: auto;
`

const Footer = () => (
    <Bottom>
        <Social>
            <a href="https://linkedin.com/in/daniel-bednarz" target="_blank" rel="noreferrer"> 
            <LinkedInIcon size="20" title="LinkedIn"/>
            </a>
            <a href="https://github.com/danielbednarz2" target="_blank" rel="noreferrer">
            <GithubIcon size="20" title="Github"/> 
            </a>
            <a href="https://twitter.com/danielwalkerdev" target="_blank" rel="noreferrer">
            <TwitterIcon size="20" title="Twitter"/>
            </a>
            <a href="https://instagram.com/danielwalkerdev" target="_blank" rel="noreferrer">
            <InstagramIcon size="20" title="Instagram"/> 
            </a>
        </Social>
        <hr />
        <Copyright> &#169; Daniel Walker {(new Date().getFullYear())}</Copyright>
    </Bottom>
)

export default Footer;