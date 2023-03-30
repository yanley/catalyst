import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export const Login = (props) => {
    const { email, setEmail } = useState('');
    const { password, setPassword } = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Sign In</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
                <Button type="submit">Log In</Button>
            </form>
            <Button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't yet have an account? Register here</Button>
        </div>
    )
}
