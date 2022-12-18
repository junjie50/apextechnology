import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';


export const Apexnavbar = () => {
  const navbarStyle={
    fontFamily: "Source Sans Pro",
    fontSize: "15px",
    fontWeight: "400",
    backgroundColor: "#ffffff"
  }
  const logoStyle={
    fontFamily: "Source Sans Pro",
    fontSize: "50px",
    fontWeight: "400",
  }
  return (
    <Navbar style={navbarStyle}>
      <Container>
        <Navbar.Brand href="#home" style={logoStyle}>Apex</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="nav-bar-button" href="/">Home</Nav.Link>
          <Nav.Link  className="nav-bar-button" href="/aboutus">About Us</Nav.Link>
          <Nav.Link  className="nav-bar-button" href="/theteam">The Team</Nav.Link>
          <Nav.Link  className="nav-bar-button" href="/contactus">Contact Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}