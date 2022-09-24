import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation(){

return(
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">A-V-Code</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#projects">My Projects</Nav.Link>
        <Nav.Link href="#contact">Contact Me</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
)

}

export default Navigation