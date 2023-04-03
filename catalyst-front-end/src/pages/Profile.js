import React, { useState, useEffect } from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import PersonalInformation from '../components/MatchingJobs';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader,
  MDBModalTitle
}
from 'mdb-react-ui-kit';

const Profile = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [seniority, setSeniority] = useState('');
    const [specialty, setSpecialty] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user.id;

    const seniorityOptions = ['Resident Medical Officer', 'Registrar', 'Consultant'];
    const specialtyOptions = ['Emergency Medicine', 'Medicine', 'Obstetrics & Gynaecology', 'Psychiatry', 'Radiology', 'Surgery'];

const UpdateRecord = (e) => {
e.preventDefault();
const data = {
    firstName: firstName || undefined,
    lastName: lastName || undefined,
    emailId: email || undefined,
    password: password || undefined,
    seniority: seniority || undefined,
    specialty: specialty || undefined
};
axios.put(`http://localhost:8081/api/users/${userId}`, data)
    .then(response => {
    console.log(response.data);
    setFirstName(response.data.firstName);
    setLastName(response.data.lastName);
    })
    .catch(error => {
    console.log(error);
    console.log(error.response.data);
    });
}

const [deleteModal, setDeleteModal] = useState(false);

function showDeleteModal() {
  setDeleteModal(true);
}

const [showDeleteWarning, setShowDeleteWarning] = useState(false);

function handleDeleteClick() {
  setShowDeleteWarning(true);
}

const onDelete = () => {
    setDeleteModal(true);
}
const handleDelete = () => {
    axios.delete(`http://localhost:8081/api/users/${userId}`)
        .then(response => {
            console.log(response.data);
            // clear local storage and redirect to login page
            localStorage.clear();
            window.location.href = '/login';
        })
        .catch(error => {
            console.log(error);
            console.log(error.response.data);
        });
    }

const handleClose = () => {
    setDeleteModal(false);
};

const confirmDelete = () => {
    handleDelete();
    setShowDeleteWarning(false);
}

  return (
          <MDBContainer fluid className='p-4'>
            <PersonalInformation />
          <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-top'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            It's all about<br />
            <span className="text-primary">you.</span>
          </h1>

          <p className='px-3' style={{ color: 'hsl(217, 10%, 40.8%)' }}>
            Want to be kept in the loop on relevant locum jobs as they become available? Update your profile here and tell us what you're looking for.
          </p>

        </MDBCol>

        <MDBCol md='6'>

        <MDBCard className='my-5'>
          <MDBCardBody className='p-5'>
            <h2>Update Your Profile</h2>
            <Form onSubmit={UpdateRecord}>
                <MDBRow>
                <MDBCol col='6'>
                <MDBInput wrapperClass='mb-3' value={firstName} name="firstName" onChange={(e) => setFirstName(e.target.value)} label='First Name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-3' value={lastName} name="lastName" onChange={(e) => setLastName(e.target.value)} label='Last Name' id='form1' type='text' />
                </MDBCol>
                </MDBRow>

                <MDBInput wrapperClass='mb-3' value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="you@mail.com" label='Email' id='form1' />
                {/* <MDBInput wrapperClass='mb-3' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" label='Password' id='form1' readonly /> */}

                <Form.Select className='form-select' value={seniority} onChange={e => setSeniority(e.target.value)}>
                  <option value=''>Select Seniority</option>
                  {seniorityOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </Form.Select>
                <br></br>
                <Form.Select className='form-select' value={specialty} onChange={e => setSpecialty(e.target.value)}>
                  <option value=''>Select Specialty</option>
                  {specialtyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </Form.Select>
                <br></br>
                <MDBBtn className='w-100 mb-2' size='md'>Save Changes</MDBBtn>
            </Form>
            <MDBBtn onClick={onDelete} className='me-1' color='danger'>Delete Your Profile</MDBBtn>
        <MDBModal show={deleteModal} onHide={handleClose} centered>
            <MDBModalHeader>
                <MDBModalTitle>Delete Account</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
                Are you sure you want to delete your account? WARNING: This action cannot be undone!
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color='secondary' onClick={handleClose}>Cancel</MDBBtn>
                <MDBBtn color='danger' onClick={handleDelete}>Delete</MDBBtn>
            </MDBModalFooter>
        </MDBModal>

          </MDBCardBody>
        </MDBCard>

      </MDBCol>

    </MDBRow>



  </MDBContainer>

);
}

export default Profile;

