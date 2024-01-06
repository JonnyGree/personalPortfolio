import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Person, FileEarmarkBarGraph, Send} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20 ? true : false);
    };

    window.addEventListener('scroll', handleScroll);   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <Navbar 
        expand="md" 
        className={` ${scrolled? 'py-2 nav-bar-stick' : 'py-4 nav-bar-transparent' }`}
        fixed="top"
        id="nav-bar"
        style={{}} /*clear default transition */
        >
      <Container fluid className={`mx-4 fs-5`}>
        <Navbar.Brand as={Link} to=""> SMCA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="text-center" >
          <Nav className="ms-auto gap-3" >
            <Nav.Link as={Link} to="about"><Person className="me-1 mb-1"/>About</Nav.Link>
            <Nav.Link as={Link} to="project"><FileEarmarkBarGraph className="me-1 mb-1"/>Project</Nav.Link>
            <Nav.Link as={Link} to="contact"><Send className="me-1 mb-1"/>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;