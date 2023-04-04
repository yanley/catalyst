  import React, { useState, useEffect } from 'react';
  import Card from 'react-bootstrap/Card';
  import axios from 'axios';
  import {
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import CardGroup from 'react-bootstrap/CardGroup';
  import Col from 'react-bootstrap/Col';
  import Row from 'react-bootstrap/Row';
  import { mockData } from './mockData';


  function MockJobCards() {
    const [selectedSeniority, setSelectedSeniority] = useState('');
    const [selectedSpecialty, setSelectedSpecialty] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');

    ///// code below added 1pm Tuesday

    const [savedJobs, setSavedJobs] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user.id;
    
    const Job = ({ job, userId, updateSavedJobs }) => {
      const [savedJobs, setSavedJobs] = useState([]);
    
      useEffect(() => {
        updateSavedJobs(userId, job.id);
      }, [savedJobs]);
    
      return (
        <div>
          <MDBIcon
            far
            icon="heart"
            onClick={() => setSavedJobs((prevSavedJobs) => [...prevSavedJobs, job])}
          />
          <h3>{job.title}</h3>
          <p>{job.bulletpoints}</p>
        </div>
      );
    };
    
    const updateSavedJobs = async (userId, jobId, job) => {
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      try {
        const response = await axios.post('http://localhost:8081/api/favourites/addfavourite', { user_id: userId, job_id: job.adId }, config);
        console.log(response.data); 
      } catch (error) {
        console.error(error);
      }
    };
    
    const handleJobClick = (jobId, job) => {
      const userId = localStorage.getItem('user_id');
      updateSavedJobs(userId, jobId, job);
    }
    
    
    
    /// code above added 1pm Tuesday
   
  
    const handleSeniorityFilter = (seniority) => {
      setSelectedSeniority(seniority);
    };
  
    const handleSpecialtyFilter = (specialty) => {
      setSelectedSpecialty(specialty);
    };

    const handleLocationFilter = (location) => {
      setSelectedLocation(location);
    };
  
    const filteredJobs = mockData.items.filter((job) => {
      if (selectedSeniority && job.seniority !== selectedSeniority) {
        return false;
      }
      if (selectedSpecialty && job.specialty !== selectedSpecialty) {
        return false;
      }
      if (selectedLocation && job.state !== selectedLocation) {
        return false;
      }
      return true;
    });
  
    return (
      <>
        <div className="filters">
          <label htmlFor="seniorityFilter">Filter by seniority:</label>
          <select
            id="seniorityFilter"
            onChange={(event) => handleSeniorityFilter(event.target.value)}
            value={selectedSeniority || ''}
          >
            <option value="">All</option>
            <option value="Resident Medical Officer">Resident Medical Officer</option>
            <option value="Registrar">Registrar</option>
            <option value="Consultant">Consultant</option>
          </select>
  
          <label htmlFor="specialtyFilter">Filter by specialty:</label>
          <select
            id="specialtyFilter"
            onChange={(event) => handleSpecialtyFilter(event.target.value)}
            value={selectedSpecialty || ''}
          >
            <option value="">All</option>
            <option value="Emergency Medicine">Emergency Medicine</option>
            <option value="Medicine">Medicine</option>
            <option value="Obstetrics & Gynaecology">Obstetrics & Gynaecology</option>
            <option value="Psychiatry">Psychiatry</option>
            <option value="Radiology">Radiology</option>
            <option value="Surgery">Surgery</option>
          </select>

          <label htmlFor="locationFilter">Filter by location:</label>
          <select
            id="locationFilter"
            onChange={(event) => handleLocationFilter(event.target.value)}
            value={selectedLocation || ''}
          >
            <option value="">All</option>
            <option value="ACT">ACT</option>
            <option value="NSW">NSW</option>
            <option value="NT">NT</option>
            <option value="QLD">QLD</option>
            <option value="SA">SA</option>
            <option value="TAS">TAS</option>
            <option value="VIC">VIC</option>
            <option value="WA">WA</option>
          </select>
        </div>
  
        {filteredJobs.length ? (
          <Row xs={1} md={2} lg={3} className="g-4">
            {filteredJobs.map((job) => (
              <Col key={job.adId}>
                <MDBCard className="my-card">
                  <MDBCardBody>
                    <MDBCardTitle>{job.title}</MDBCardTitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      {job.summary}
                    </Card.Subtitle>
                    <MDBCardText>
                      <ul>
                        {job.bulletPoints.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </MDBCardText>
                  </MDBCardBody>
                  {/* <MDBCardFooter>
                    {job.specialty} {job.seniority}
                  </MDBCardFooter> */}
                  <MDBCardFooter>
                    {job.city} {job.state}
                  </MDBCardFooter>
                  <MDBCardFooter>
                  <Card.Link href={job.links.ui.self} target="_blank">
                      More details
                    </Card.Link><br></br>
                    <MDBBtn size="sm" href={job.links.ui.applications} target="_blank">Apply</MDBBtn>
                  </MDBCardFooter>
                  <MDBCardFooter>
                    <MDBIcon 
                      far 
                      icon="heart"
                      // onClick={() => setSavedJobs((prevSavedJobs) => [...prevSavedJobs, job])}
                      />
                  </MDBCardFooter>
                </MDBCard>
              </Col>
            ))}
          </Row>
        ) : (
          <MDBCard>
            <MDBCardText>
            Sorry, there are currently no jobs that match your search criteria. Get in touch and we'll be happy to do a tailored search on your behalf.
            </MDBCardText>
          </MDBCard>
        )}
      </>
    );
  }
  
  export default MockJobCards;
