import React, { useState } from "react";
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

const RegistrationPage = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/api/users/create', { 
            firstName: firstName,
            lastName: lastName,
            emailId: email,
            password: password
          })
          .then(response => {
            console.log(response.data);
            // Log the user in after registering
            axios.post('http://localhost:8081/api/users/login', {
              emailId: email,
              password: password
            })
            .then(response => {
              console.log(response.data);
              //Save the access token to local storage or cookie
              localStorage.setItem('accessToken', response.data.accessToken);
              //Redirect the user to the home page
              window.location.href = '/';
            })
          })
          .catch(error => {
            console.log(error);
          });        
    }

    return (
     <MDBContainer fluid className='p-4'>

    <MDBRow>

      <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

        <h1 className="my-5 display-3 fw-bold ls-tight px-3">
          Join the <br />
          <span className="text-primary">Catalyst </span>community
        </h1>

        <p className='px-3' style={{color: 'hsl(217, 10%, 40.8%)'}}>
        Whether you are looking for short term locum work or the next big step in your career, 
        Catalyst Medical Recruitment is your trusted partner. Join our community to be kept updated
        about locum jobs that interest you.
        </p>

      </MDBCol>

      <MDBCol md='6'>

        <MDBCard className='my-5'>
          <MDBCardBody className='p-5'>
            <form onSubmit={handleSubmit}>
                <MDBRow>
                <MDBCol col='6'>
                <MDBInput wrapperClass='mb-4' value={firstName} name="firstName" onChange={(e) => setFirstName(e.target.value)} label='First Name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' value={lastName} name="lastName" onChange={(e) => setLastName(e.target.value)} label='Last Name' id='form1' type='text'/>
                </MDBCol>
                </MDBRow>

                <MDBInput wrapperClass='mb-4' value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="you@mail.com" label='Email' id='form1' />
                <MDBInput wrapperClass='mb-4' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" label='Password' id='form1' />

                <MDBBtn className='w-100 mb-4' size='md'>Sign Up</MDBBtn>
            </form>
            <p className='ms-5'>Already registered? <a href="/login">Log in here</a></p>
          </MDBCardBody>
        </MDBCard>

      </MDBCol>

    </MDBRow>

  </MDBContainer>
);
}

export default RegistrationPage;