import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mort from "../assets/morty-icon.svg";
import ricky from "../assets/rick-icon.svg";
import homie from "../assets/portal.svg";
import {Link} from "react-router-dom"
import butter from "../assets/Butter_Robot.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const NavBar =({favorites}) => {

  const navigate = useNavigate();
  const [searchValue, setSearchValue]= useState(" ");
  
  const handleSearch= () => {
    navigate(`/search/${searchValue}`);
  }

  return (
  <>
    <Navbar id="NavBar" expand="lg" className="NavBar">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="pl-4 pr-4">
            <div className="boxitup">
            <Nav.Link as={Link} to="/">
            <img
                src={homie}
                alt="home"
                className='icons'
              />Home</Nav.Link>
              </div>
            <div className="boxitup">
            <Nav.Link as={Link} to="/about">
            <img
                src={mort}
                alt="about"
                className="icons"
              />
              About</Nav.Link>

              </div>
              <div className="boxitup">
            <Nav.Link as={Link} to="/characters">
            <img
                src={ricky}
                alt="about"
                className="icons"
              />Characters</Nav.Link>
              </div>
            <div className="boxitup">
            <Nav.Link as={Link} to="favorites/">
            <img
              src={butter}
              alt="about"
              className="icons"
            />Fav {favorites.length}</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    <InputGroup className="mb--2 w-25 p-3">
    <Form.Control
      placeholder="Search for Character"
      aria-label="Search for Character"
      aria-describedby="basic-addon2"
      value={searchValue}
      onChange={(e)=> setSearchValue(e.target.value)}
    />
    <Button variant="secondary" id="button-addon2" onClick={handleSearch}>
      Search
    </Button>
  </InputGroup>
    </Navbar>
  </>
  );
}

export default NavBar
