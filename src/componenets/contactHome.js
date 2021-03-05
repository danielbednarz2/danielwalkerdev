import React from "react";
import styled, { css } from "styled-components";
import TextareaAutosize from 'react-autosize-textarea';

const Contact = styled.div`
    height: auto;
    padding: 2em 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #d5e1e6;
    color: #d5e1e6;
`


const Shared = css`
    background-color: #d5e1e6;
    height: 2em;
    border-radius: 5px;
    border: 1px solid #083140;
    padding: 1em;
    box-sizing: border-box;
    outline: none;
`

const Form = styled.form`
    width: 50%;
    padding: 1em;
    background-color: #274A57;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;

    
    > * {
        font-size: .75rem;

        @media (max-width: 600px) {
            font-size: .6rem;
        }
    }

    label {
        color: #d5e1e6;
    }

    h2 {
        display: flex;
        justify-content: center;
        color: #d5e1e6;
        font-size: 1.5rem;
        margin-bottom: 1rem;

        @media (max-width: 600px) {
            font-size: 1.2rem;
        }
    }

    .firstNameLabel {
        @media (max-width: 768px) {
            width: 30%;
            align-self: center;
        }
    }
    
    .lastNameLabel {
        @media (max-width: 768px) {
            width: 30%;
            align-self: center;
        }
    }

    .firstName {
        @media (max-width: 768px) {
            width: 70%;
            height: 1.5rem;
        }
    }

    .lastName {
        @media (max-width: 768px) {
            width: 70%;
        }
    }

    .emailLabel {
        @media (max-width: 768px) {
            width: 30%;
            align-self: center;
        }
    }

    .email {
        @media (max-width: 768px) {
            width: 70%;
        }
    }

    .messageLabel {
        @media (max-width: 768px) {
            padding-bottom: .5em;
        }
    }

    .message {
        resize: none;
    }

    .errorMessage {
        display: flex;
        justify-content: center;
        margin: 2em 0;

        p {
            color: #B56917;
        }
    }

    .submit {
        padding: 0;
    }

    @media(min-width:1200px) {
        width: 33%;
    }
`

const FormFieldset = styled.fieldset`
    display: flex;
    border: none;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const NameInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media (max-width: 768px) {
        flex-direction: row;
        width: 100%;
        padding: .5em 0;
    }
`
const EmailInput = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        flex-direction: row;
        width: 100%;
        padding: .5em 0;
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
    align-self: center;
`

const FormError = styled.div`

`


const ContactHome = () => (
    <>
      <Contact id="contact">
        <Form action="https://intense-fortress-71307.herokuapp.com/submit-form" method="post" enctype="application/x-www-form-urlencoded">
            <h2>Contact Me</h2>
            <FormFieldset>
                <NameInput>
                    <label htmlFor="firstName" className="firstNameLabel">First Name:</label>
                    <FormInput type="text" name="firstName" className="firstName"/>
                </NameInput>
                <NameInput>
                    <label htmlFor="lastName" className="lastNameLabel">Last Name:</label>
                    <FormInput type="text" name="lastName" className="lastName"/>
                </NameInput>
            </FormFieldset>
            <EmailInput>
                <label htmlFor="email" className="emailLabel">Email: </label>
                <FormInput type="email" name="email" className="email"/>
            </EmailInput>
            <label htmlFor="message" className="messageLabel">Message: </label>
            <FormTextArea name="message" className="message" rows={3}/>
            <FormError className="errorMessage"><p></p></FormError>
            <FormButton type="submit" className="submit">Submit</FormButton>
        </Form>
      </Contact>
    </>
  )

export default ContactHome;