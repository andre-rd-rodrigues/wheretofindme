import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { HamburgerSqueeze } from "react-animated-burgers";

class NavBar extends Component {
  state = {
    isActive: false,
  };
  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };
  render() {
    return (
      <Navbar collapseOnSelect sticky="top" bg="light" expand="md">
        <Link to="/" className="navbar-brand handwrite">
          Where to Find Me
        </Link>

        <HamburgerSqueeze
          as={Navbar.Toggle}
          buttonWidth={30}
          aria-controls="basic-navbar-nav"
          aria-expanded={this.state.isActive}
          isActive={this.state.isActive}
          toggleButton={this.toggleButton}
          barColor="black"
        />

        <Navbar.Collapse className=" text-center" id="basic-navbar-nav">
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
              href="/services"
              className="nav-item nav-link"
            >
              SERVICES
            </Nav.Link>
            <Nav.Link
              to="/reviews"
              as={Link}
              href="/reviews"
              className="nav-item nav-link"
            >
              REVIEWS
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              href="/contact"
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
