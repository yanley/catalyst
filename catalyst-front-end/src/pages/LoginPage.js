import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Logo from '../images/Catalyst-Logo-White.png';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

// function LoginPage() {

const LoginPage = (props) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ user, setUser ] = useState({});
    const [ resultMessage, setResultMessage ] = useState('');
    const navigate = useNavigate();

    //check if there's a user logged in each time the app loads
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        const user = { emailId: email, password};
        try {
        //send the email and password to the server
        const response = await axios.post(
            'http://localhost:8081/api/users/login',
            user
        );
        console.log(response);
        //set the state of the user
        setUser(response.data)
        //store the user in localStorage
        localStorage.setItem('user', JSON.stringify(response.data));
        console.log(response.data)
        //redirect the user to the homepage
        navigate("/")  

        } catch (error) {
            setResultMessage(error.message)
        }

    };

    const handleLogout = () => {
        setUser({});
        localStorage.clear();
    };

//if there's a user, show this message:
    if (user.firstName) {
        return (
            <div>
                Welcome back, Dr {user.lastName+" "}
                <Button onClick={handleLogout}>Log Out</Button>
            </div>
        );
    }

//if there's no user, show the login form

  return (
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <span className="h1 fw-bold mb-0">
            <MDBIcon fas icon="sign-in-alt" />
            </span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>
            <form className="login-form" onSubmit={handleSubmit}>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="youremail@gmail.com" label='Email address' id='formControlLg' type='email' size="lg"/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*******" label='Password' id='formControlLg' type='password' size="lg"/>

            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Login</MDBBtn>
            </form>
            {/* <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p> */}
            <p className='ms-5'>Don't have an account? <a href="/register">Register here</a></p>
            <div className='resultMessage'>{resultMessage}</div>

          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img2.webp"
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default LoginPage