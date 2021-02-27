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
    background-color: #274a57;
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
    background-color: #042835;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;

    
    > * {
        font-size: .75rem;
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
    }

    .firstNameLabel {
    }
    
    .lastNameLabel {
    }

    .firstName {
    }

    .lastName {
    }

    .emailLabel {
    }

    .email {
    }

    .messageLabel {
    }

    .message {
        resize: none;
    }

    .errorMessage {
        display: flex;
        justify-content: center;
        margin: 2em 0;

        p {
            color: #d5e1e6;
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
      <Contact>
        <Form>
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