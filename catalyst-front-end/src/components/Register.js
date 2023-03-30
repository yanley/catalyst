import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/create', { 
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
          })
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });        
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input value={firstName} name="firstName" onChange={(e) => setFirstName(e.target.value)} id="firstName" placeholder="First Name" />
            <label htmlFor="lastName">Last Name</label>
            <input value={lastName} name="lastName" onChange={(e) => setLastName(e.target.value)} id="lastName" placeholder="Last Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="you@mail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Register</button>
        </form>
        <Button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Sign in here.</Button>
    </div>
    )
}
