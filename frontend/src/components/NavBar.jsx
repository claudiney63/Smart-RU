import React from "react";
import { Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SmartRU from "../images/SmartRU.jpg";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="align-items-center">
        <Navbar.Brand href="/">
          <Row>
            <Col>
              <img
                src={SmartRU}
                width="70"
                height="70"
                className="d-inline-block align-top"
                alt="SmartRU logo"
                style={{ borderRadius: "50%" }}
              />
            </Col>
            <Col
              className="mt-3"
              style={{ fontWeight: "bold", fontSize: "25px" }}
            >
              SmartRU
            </Col>
          </Row>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Link style={{ color: "white" }} to="/login" className="nav-link">
              Login
            </Link>
            <Link
              style={{ color: "white" }}
              to="/register"
              className="nav-link"
            >
              Registrar-se
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
