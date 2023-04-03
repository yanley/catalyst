import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://twitter.com/catalyst_medrec' target="_blank" className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='https://www.instagram.com/catalystmedicalrecruitment/' target="_blank" className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://www.linkedin.com/company/catalyst-medical-recruitment/' target="_blank" className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                Catalyst Medical Recruitment
              </h6>
              <p>
              <MDBIcon fas icon="quote-left" />Connecting doctors to their next great career move.<MDBIcon fas icon="quote-right" />
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <br></br><MDBIcon fas icon="building" /> 20-40 Meagher St, 
                <br></br>Chippendale 
                <br></br>NSW 2008
              </p>
              <p><MDBIcon fas icon="at" /> hello@catalystmedical.com.au</p>
              <p><MDBIcon fas icon="phone" /> 1300 294 086</p>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright&nbsp; 
        <a className='text-reset fw-bold' href='/'>
          Catalyst Medical Recruitment Pty Ltd
        </a>
      </div>
    </MDBFooter>
  );
}

// function Footer() {
//   return (
//     <>
//       <Navbar className="NavBar my-navbar" variant="light">
//         <Container>
//           <Navbar.Brand href="#jobs">Jobs</Navbar.Brand>
//           <Nav className="me-auto">
//           </Nav>
//         </Container>
//       </Navbar>
      
//     </>
//   );
// }

// export default Footer;