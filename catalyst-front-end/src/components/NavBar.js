import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/Catalyst-Logo-White.png';
import { Link } from 'react-router-dom';
import Login from './Login';

function NavBar() {

  return (
    <>
    <Navbar className="NavBar my-navbar" variant="light">
        <Container>
          <Navbar.Brand href="/">Catalyst Medical Recruitment</Navbar.Brand>
          <Nav className="login-link">
            <Nav.Link href="/login">Log In / Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

