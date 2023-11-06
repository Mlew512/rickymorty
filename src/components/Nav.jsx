import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mort from "../assets/morty-icon.svg";
import ricky from "../assets/rick-icon.svg";
import homie from "../assets/portal.svg"

function NavBar() {
  return (
    <Navbar id="NavBar" expand="lg" className="bg-body-tertiary NavBar">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">
            <img
                src={homie}
                alt="home"
                width="60"
                height="50"
              />Home</Nav.Link>
            <Nav.Link href="/about">
            <img
                src={mort}
                alt="about"
                width="50"
                height="16"
              />
              About</Nav.Link>
            <Nav.Link href="/characters">
            <img
                src={ricky}
                alt="about"
                width="50"
                height="16"
              />Characters</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar
