import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import MyNavBar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

export default function NavBar() {
  return (
    <MyNavBar
      className="navar-bg d-flex row justify-content-between align-items-center "
      bg="light"
      expand="lg"
    >
      <Container className="nav-bg">
        <div>
          {" "}
          <MyNavBar.Brand>
            <Link to="/">
              <img src={Logo} alt="Logo de Goemz" className="LogoNav" />{" "}
            </Link>
          </MyNavBar.Brand>{" "}
        </div>

        <div>
          <MyNavBar.Toggle aria-controls="basic-navbar-nav" />
          <MyNavBar.Collapse id="basic-navbar-nav">
            <Nav>
              {/* Sillas */}
              <NavDropdown
                title="Sillas"
                className="nav-item"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link to="/sillas/jardin">Sillas Jardín</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/sillas/escritorio">Sillas de Escritorio</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/sillas/infantiles">Sillas Infantiles</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/sillas">Ver Todo</Link>
                </NavDropdown.Item>
              </NavDropdown>
              {/* Mesa  */}
              <NavDropdown title="Mesas" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/mesas/industriales">Mesas Industriales</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/mesas/redondas">Mesas Redondas</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/mesas/escritorios">Escritorios</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/mesas">Ver Todo</Link>
                </NavDropdown.Item>
              </NavDropdown>
              {/* Decoracion  */}
              <NavDropdown title="Mobiliario" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/mobiliario/sofas-sillones">Sofas y sillones</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/mobiliario/auxiliar">Muebles auxiliares</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/mobiliario">Ver Todo</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </MyNavBar.Collapse>
        </div>
        <CartWidget />
      </Container>
    </MyNavBar>
  );
}
