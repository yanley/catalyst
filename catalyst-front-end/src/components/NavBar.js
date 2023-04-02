import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Link, useLocation } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import Logo from '../images/Catalyst-Logo-White.png';

const NavBar = (props) => {
  const [ user, setUser ] = useState({});
  // const navigate = useNavigate();
  const location = useLocation();

  //check if there's a user logged in each time the app loads
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, [location]);

  const handleLogout = () => {
    setUser({});
    localStorage.clear();
  };

  return (
    <Navbar className="NavBar my-navbar" variant="light">
      <Container>
        <Navbar.Brand href="/">Catalyst Medical Recruitment</Navbar.Brand>
        <img
            src={Logo}
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="Logo"
          />
        <Nav className="login-link">
          {user.firstName ?
            <Nav.Link href="/profile">
              Welcome back, Dr {user.lastName} <MDBBtn outline onClick={handleLogout} color='primary' size='sm'>Log Out</MDBBtn>
            </Nav.Link> :
            <Nav.Link href="/login">Log In / Register</Nav.Link>
          }
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;