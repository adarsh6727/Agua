import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../assets/logo.webp";
import Button from "react-bootstrap/Button";
import "./../css/Navbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useLocation } from "react-router-dom";

function NavbarComponent() {
  const location = useLocation();

  // Access current pathname, search, and hash
  const { pathname} = location;
  console.log(pathname === "/");
  return (
    <Navbar expand="md" className="bg-black" sticky="top">
      <Container fluid>
        <Navbar.Brand>
          <a href="/">
            <img
              src={Logo}
              className="img-fluid"
              style={{ width: "120px", height: "50px" }}
            />
          </a>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggle-button text-secondary bg-white"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Offcanvas.Body>
            <Nav className="navbar-custom  d-flex justify-content-end">
              <Link
                className={`  text-decoration-none me-2 pt-2 buttons ${
                  pathname === "/" ? "text-primary" : "text-white "
                }`}
                style={{ fontSize: "16px", fontWeight: "1000" }}
                to="/"
              >
                Home
              </Link>
              <Link
                className={`  text-decoration-none me-2 pt-2 buttons ${
                  pathname === "/about" ? "text-primary" : "text-white "
                }`}
                style={{ fontSize: "16px  ", fontWeight: "1000" }}
                to="/about"
              >
                About Us
              </Link>
              <Dropdown className="hover-dropdown">
                <Dropdown.Toggle
                  className="text-white  bg-black buttons"
                  style={{ fontSize: "16px", fontWeight: "1000" }}
                  variant="link"
                >
                  Features
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link
                      style={{ fontSize: "16px", fontWeight: "1000" }}
                      className="text-black buttons"
                      to="/onlineMonitoring"
                    >
                      Online Monitoring
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      style={{ fontSize: "16px", fontWeight: "1000" }}
                      className="text-black buttons"
                      to="/advancedAutomation"
                    >
                      Advanced Automation
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      style={{ fontSize: "16px", fontWeight: "1000" }}
                      className="text-black buttons"
                      to="/leakageDetection"
                    >
                      Leakage Detection
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link
                      style={{ fontSize: "16px", fontWeight: "1000" }}
                      className="text-black buttons "
                      to="/qualityManagement"
                    >
                      Quality Management
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Link
                className={`  text-decoration-none me-2 pt-2 buttons ${
                  pathname === "/faq" ? "text-primary" : "text-white "
                }`}
                style={{ fontSize: "16px", fontWeight: "1000" }}
                to="/faq"
              >
                FAQ
              </Link>

              <Link
                className={`  text-decoration-none me-2 pt-2 buttons ${
                  pathname === "/contactus" ? "text-primary" : "text-white "
                }`}
                style={{ fontSize: "16px ", fontWeight: "1000" }}
                to="/contactus"
              >
                Contact Us
              </Link>
              <Nav.Link className="pt-1" style={{ width: "150px" }} href="Book">
                <Button
                  variant="light"
                  size="sm"
                  style={{ fontSize: "16px", fontWeight: "1000" }}
                  href="https://calendly.com/partnerships-agua/30min?"
                  target='_blank'
                  className="button"
                >
                  Book a demo
                </Button>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
