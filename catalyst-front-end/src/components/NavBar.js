import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
    <Navbar className="NavBar my-navbar" variant="light">
        <Container>
          <Navbar.Brand href="#jobs">Jobs</Navbar.Brand>
          {/* <Nav className="me-auto">
            <Nav.Link href="#jobs">Jobs</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;