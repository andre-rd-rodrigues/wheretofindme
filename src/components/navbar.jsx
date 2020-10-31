import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect sticky="top" bg="light" expand="md">
        <Link to="/" className="navbar-brand handwrite">
          Where to Find Me
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className="ml-auto ">
            <Nav.Link
              as={Link}
              to="/about"
              href="/about"
              className="nav-item nav-link"
            >
              ABOUT
            </Nav.Link>

            <Nav.Link
              to="/services"
              as={Link}
              to="/services"
              href="/services"
              className="nav-item nav-link"
            >
              SERVICES
            </Nav.Link>
            <Nav.Link
              to="/reviews"
              as={Link}
              to="/reviews"
              href="/reviews"
              className="nav-item nav-link"
            >
              REVIEWS
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              href="/contact"
              to="/contact"
              className="nav-item nav-link"
            >
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
