import React from "react";
import { Helmet } from "react-helmet";
import Header from "./header";
import Footer from "./footer";
import styled, { createGlobalStyle } from "styled-components";

const Wrapper = createGlobalStyle`
    *, body, html {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        scrollbar-width: none;
        font-family: "Open Sans", sans-serif;
        color: #083140;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    *::-webkit-scrollbar {
        display:none;
    }
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
`

const Layout = ({ children }) => (
        <main>
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
                <title>Daniel Walker</title>
            </Helmet>
            <Wrapper />
            <Div>
            <Header />
            {children}
            <Footer />
            </Div>
        </main>
    
    
)

export default Layout;