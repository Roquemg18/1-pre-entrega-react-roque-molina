import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from "react-bootstrap";
import {} from "@fortawesome/free-solid-svg-icons"
import CartWidget from './../CartWidget/CartWidget'






function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{height: "80px"}}>
        <Container style={{marginLeft:"32rem"}} >
          <Navbar.Brand href="#home" >EL COTILLON DE NANCY</Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link style={{fontSize:"25px"}} href="#home">Inicio</Nav.Link>
            <Nav.Link style={{fontSize:"25px"}} href="#pricing">nosotros</Nav.Link>
            <NavDropdown style={{fontSize:"25px"}} title="Productos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Globos</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Velas
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Comestible</NavDropdown.Item>
                  <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link style={{fontSize:"25px"}} href="#pricing">login/register</Nav.Link>
            
            <CartWidget></CartWidget>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
