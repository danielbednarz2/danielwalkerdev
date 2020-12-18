import React from "react";
import styled, { css } from "styled-components";
import TextareaAutosize from 'react-autosize-textarea';

const Contact = styled.div`
    height: 60vh;
    width: 100vw;
    margin: auto;
    padding: 2em 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #274a57;
    color: #d5e1e6;
`


const Shared = css`
    background-color: #d5e1e6;
    height: 2em;
    border-radius: 5px;
    border: 1px solid #083140;
    margin: .5em 0 1em 0;
    padding: 1em;
    box-sizing: border-box;
    outline: none;
`

const Form = styled.form`
    width: 50%;
    margin: auto;
    padding: 1em;
    background-color: #083140;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    display: grid;
    gap: 0 1em;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr .5fr 1fr .5fr 1fr 1fr 2fr 1fr 1fr;

    
    > * {
        font-size: 1rem;
        padding: 1rem 0;
        margin: auto 0;
    }

    label {
        color: #d5e1e6;
    }

    h2 {
        grid-area: 1 / 1 / 2 / 3;
        justify-self: center;
        color: #d5e1e6;
        font-size: 1.5rem;
    }

    .firstNameLabel {
        grid-area: 2 / 1 / 3 / 2;
    }
    
    .lastNameLabel {
        grid-area: 2 / 2 / 3 / 3;
    }

    .firstName {
        grid-area: 3 / 1 / 4 / 2;
    }

    .lastName {
        grid-area: 3 / 2 / 4 / 3;
    }

    .emailLabel {
        grid-area: 4 / 1 / 5 / 2;
    }

    .email {
        grid-area: 5 / 1 / 6 / 3;
    }

    .messageLabel {
        grid-area: 6 / 1 / 7 / 3;
        justify-self: center;
    }

    .message {
        grid-area: 7 / 1 / 8 / 3;
    }

    .errorMessage {
        grid-area: 8 / 1 / 9 / 3;
        justify-self: center;

        p {
            color: #d5e1e6;
        }
    }

    .submit {
        grid-area: 9 / 1 / 10 / 3;
        justify-self: center;
        padding: 0;
    }
`

const FormInput = styled.input`
    ${Shared}
`

const FormTextArea = styled(TextareaAutosize)`
    ${Shared}
`

const FormButton = styled.button`
    width: 5em;
    height: 2.5em;
    border-radius: 16px;
    outline: none;
`

const FormError = styled.div`

`

const ContactHome = () => (
    <>
      <Contact>
        <Form>
            <h2>Contact Me</h2>
            <label htmlFor="firstName" className="firstNameLabel">First Name:</label>
            <FormInput type="text" name="firstName" className="firstName"/>
            <label htmlFor="lastName" className="lastNameLabel">Last Name:</label>
            <FormInput type="text" name="lastName" className="lastName"/>
            <label htmlFor="email" className="emailLabel">Email: </label>
            <FormInput type="email" name="email" className="email"/>
            <label htmlFor="message" className="messageLabel">Message: </label>
            <FormTextArea name="message" className="message" rows={3}/>
            <FormError className="errorMessage"><p>Error Message Here</p></FormError>
            <FormButton type="submit" className="submit">Submit</FormButton>
        </Form>
      </Contact>
    </>
  )

export default ContactHome;