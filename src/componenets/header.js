import React, { useState } from "react";
import styled from "styled-components";
import logoImage from "../images/logo_transparent.png";


const Top = styled.header`
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1em 1.2em;
`

const Logo = styled.img`
    height: 4rem;
    width: auto;
    filter: ${({nav}) => nav ? "invert(0)" : "invert(100)"};
    z-index: 5;

    @media(max-width: 768px) {
    }
`

const Ham = styled.button`
    @media (min-width: 768px) {
        display: none;
    }

    @media (max-width: 768px) {
        top: 2rem;
        right: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 1.5rem;
        height: 1.5rem;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        z-index: 5;

        div {
            width: 1.5rem;
            height: .2rem;
            margin-top: .1em;
            background: #274A57;
            border-radius: 5px;
            transform-origin: 1px;
            position: relative;
            transition: opacity 300ms, transform 300ms;

        :first-child {
            transform: ${({nav}) => nav ? "rotate(45deg)" : "rotate(0)"};
            background: ${({nav}) => nav ? "white" : "#274A57"};
        }

        :nth-child(2) {
            opacity: ${({nav}) => nav ? "0" : "1"}
        }

        :nth-child(3) {
            transform: ${({nav}) => nav ? "rotate(-45deg)" : "rotate(0)"};
            background: ${({nav}) => nav ? "white" : "#274A57"};
        }
    }
    }
`

const Menu = styled.nav`
    display: flex;
    align-items: center;
    text-align: center;
    
    @media (min-width: 768px) {
        justify-content: space-between;
        flex-wrap: nowrap;
        font-size: 1.25em;

        ul {
            display: flex;
        }

        li {
            margin-right: 2em;

            > * {
                :hover {
                color: #F79F79;
                }
            }

            a {
                margin-right: 1.25rem;
                text-decoration: none;
                color: #274A57;
                margin: auto;
            }
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        font-size: 1rem;
        padding-bottom: 1rem;
        height: 33vh;
        width: 100%;
        top: 0;
        right: 0;
        left: 0;
        background: #274A57;
        position: absolute;
        transition: transform 300ms;
        transform: ${({nav}) => (nav ? "translatey(0)" : "translatey(-100%)")};

        ul {
            list-style-type: none;
            margin-top: 1rem;
        }

        li {
            margin-top: 1rem;

            > * {
                :hover {
                color: #9ec9db;
                }
            }
        }

        a {
            text-decoration: none;
            font-size: 1.25rem;
            transition: color 300ms;
            color: #fff;        
        }
    }
`


const Header = () => {

    const [nav, showNav] = useState(false)
    
    return (
    <Top>
        <Logo nav={nav} src={logoImage} alt="logo"></Logo>
        <Ham nav={nav} onClick={() => showNav(!nav)}>
            <div />
            <div />
            <div />
        </Ham>
        <Menu nav={nav}>
            <ul>
                <li>
                    <a href="#home" onClick={() => showNav(!nav)}>Home</a>
                </li>
                <li>
                    <a href="#about" onClick={() => showNav(!nav)}>About</a>
                </li>
                <li>
                    <a href="#projects" onClick={() => showNav(!nav)}>Projects</a>
                </li>
                <li>
                    <a href="#contact" onClick={() => showNav(!nav)}>Contact</a>
                </li>
            </ul>
        </Menu>
    </Top>
)
}

export default Header;