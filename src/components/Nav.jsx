import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mort from "../assets/morty-icon.svg";
import ricky from "../assets/rick-icon.svg";
import homie from "../assets/portal.svg";
import {Link} from "react-router-dom"
import butter from "../assets/Butter_Robot.svg";

const NavBar =({favorites}) => {
  return (
    <Navbar id="NavBar" expand="lg" className="bg-body-tertiary NavBar">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="pl-4 pr-4">
            <div className="boxitup">
            <Link to="/">
            <img
                src={homie}
                alt="home"
                className='icons'
              />Home</Link>
              </div>
            <div className="boxitup">
            <Link to="/about">
            <img
                src={mort}
                alt="about"
                className="icons"
              />
              About</Link>

              </div>
              <div className="boxitup">
            <Link to="/characters">
            <img
                src={ricky}
                alt="about"
                className="icons"
              />Characters</Link>
              </div>
            <div className="boxitup">
            <Link to="favorites/">
            <img
              src={butter}
              alt="about"
              className="icons"
            />Fav {favorites.length}</Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar
