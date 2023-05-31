import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
  .sentMessage{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    font-size: 2rem;

  
`;


const ContactForm = ({ onSubmit = () => {}  }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_uat3tdu', 'template_79rmc3b', form.current, 'h5kOhf70CNc9yDBq6')
      .then((result) => {
        setIsSent(true);
        setTimeout(() => {
          setIsSent(false);
        }, 3000);
       
        console.log(result.text);
        
        const fieldsToClear = ["email", "name", "message"];
        fieldsToClear.forEach(field => {
            form.current.elements[field].value = "";
            
            setName('');
            setEmail('');
            setMessage('');


        });
        

        onSubmit();
        
      }, (error) => {
        console.log(error.text);
      });
  };

  return (

    
    <FormStyle ref={form} onSubmit={sendEmail}>
     
     {isSent ? <div className='sentMessage'><p>Message sent!</p></div> : null}
      <div className="form-group">
        <label htmlFor="name">
          Your Name
          <input
            type="text"
            id="name"
            name="user_name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="email">
          Your Email
          <input
            type="email"
            id="email"
            autoComplete="off"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="message">
          Your message
          <textarea
            type="text"
            id="message"
            autoComplete="off"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>
      
      <button type="submit">Send</button>
    </FormStyle>
    
  );
};

export default ContactForm;
