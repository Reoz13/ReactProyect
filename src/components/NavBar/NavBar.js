import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import MyNavBar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar() {
  return (
    <div className="d-flex">
      <MyNavBar bg="light" expand="lg">
        <Container className="d-flex ">
          <div className="d-flex justify-content-between">
            <MyNavBar.Brand>Geonz</MyNavBar.Brand>

            <MyNavBar.Toggle aria-controls="basic-navbar-nav" />
            <MyNavBar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* Sillas */}
                <NavDropdown title="Sillas" id="basic-nav-dropdown">
                  <NavDropdown.Item>Sillas Jardín</NavDropdown.Item>
                  <NavDropdown.Item>Sillas de Escritorio</NavDropdown.Item>
                  <NavDropdown.Item>Sillas Infantiles</NavDropdown.Item>
                  <NavDropdown.Item>Ver Todo</NavDropdown.Item>
                </NavDropdown>
                {/* Mesa  */}
                <NavDropdown title="Mesas" id="basic-nav-dropdown">
                  <NavDropdown.Item>Mesas Industriales</NavDropdown.Item>
                  <NavDropdown.Item>Mesas Redondas</NavDropdown.Item>
                  <NavDropdown.Item>Escritorios</NavDropdown.Item>
                  <NavDropdown.Item>Ver Todo</NavDropdown.Item>
                </NavDropdown>
                {/* Decoracion  */}
                <NavDropdown title="Decoracion" id="basic-nav-dropdown">
                  <NavDropdown.Item>Lamparas</NavDropdown.Item>
                  <NavDropdown.Item>Tocadores y espejos</NavDropdown.Item>
                  <NavDropdown.Item>Plantas y maceteros</NavDropdown.Item>
                  <NavDropdown.Item>Ver Todo</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </MyNavBar.Collapse>
          </div>
          <CartWidget />
        </Container>
      </MyNavBar>
    </div>
  );
}
