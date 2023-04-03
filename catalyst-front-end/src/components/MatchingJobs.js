import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { mockData } from './mockData';
import ProfilePhoto from '../images/Homepage-Image.jpg';

function MatchingJobs() {
  // Retrieve data from localStorage
  const storedData = JSON.parse(localStorage.getItem('user'));

  // Set state variables
  const [firstName, setFirstName] = useState(storedData.firstName);
  const [lastName, setLastName] = useState(storedData.lastName);
  const [emailId, setEmailId] = useState(storedData.emailId);
  const [seniority, setSeniority] = useState(storedData.seniority);
  const [specialty, setSpecialty] = useState(storedData.specialty);

  // Update state variables when localStorage changes
  useEffect(() => {
    const newData = JSON.parse(localStorage.getItem('user'));
    setFirstName(newData.firstName);
    setLastName(newData.lastName);
    setEmailId(newData.emailId);
    setSeniority(newData.seniority);
    setSpecialty(newData.specialty);
  }, []);

  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
      <MDBCard>
      <Card.Header>Profile Information</Card.Header>
      <MDBCardBody>
        <MDBCardTitle>Dr. {firstName} {lastName}</MDBCardTitle>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem>Seniority: {seniority}</MDBListGroupItem>
        <MDBListGroupItem>Specialty: {specialty}</MDBListGroupItem>
        <MDBListGroupItem>Email: {emailId}</MDBListGroupItem>
      </MDBListGroup>
      <MDBCardImage position='top' alt='...' src={ProfilePhoto} />
    </MDBCard>
    </div>
  );
}

export default MatchingJobs;

