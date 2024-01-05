import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Person, FileEarmarkBarGraph, Send} from 'react-bootstrap-icons';

function NavBar() {
  return (
    <Navbar 
        expand="md" 
        className="bg-body-tertiary"
        fixed="top"
        >
      <Container fluid className='mx-4'>
        <Navbar.Brand href="home"> SMCA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ms-auto gap-3">
            <Nav.Link href="about"><Person className="me-1 mb-1"/>About</Nav.Link>
            <Nav.Link href="project"><FileEarmarkBarGraph className="me-1 mb-1"/>Project</Nav.Link>
            <Nav.Link href="contact"><Send className="me-1 mb-1"/>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;