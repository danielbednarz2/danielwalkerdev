import React from "react"
import styled from "styled-components"

const Contact = styled.main`
    height: 50vh;
    width: 100vw;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #274a57;
`

const Form = styled.h1`
    font-size: 3em;
`

const ContactHome = () => (
      <Contact>
        <Form>
            <h2>Contact Me</h2>
        </Form>
      </Contact>
  )

export default ContactHome