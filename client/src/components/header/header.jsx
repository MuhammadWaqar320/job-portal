import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import React from "react";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../../assets/images/logo1.png";
import { Link } from "react-router-dom";
import "./header.css";
import Login from "../login/login";
const Header = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Navbar expand="lg" className="nav-bar">
      <Container fluid className="nav-bar-container">
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} className="nav-bar-logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="nav-collapse-menu">
          <Nav
            className="me-auto my-2 my-lg-0 m-auto nav-menu"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="nav-bar-menu-list">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#action2" className="nav-bar-menu-list">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link href="#action4" className="nav-bar-menu-list">
              <Link to="/job" className="nav-link">
                All Jobs
              </Link>
            </Nav.Link>
          </Nav>
          <Button className="nav-login-btn" onClick={() => setModalShow(true)}>
            Login
          </Button>
          <Dropdown className="nav-bar-dropdown">
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="nav-bar-dropdown-btn"
            >
              Register As
            </Dropdown.Toggle>
            <Dropdown.Menu className="nav-bar-dropdown-menu">
              <Dropdown.Item
                href="#/action-1"
                className="nav-bar-dropdown-menu-item"
              >
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/registerUser"
                >
                  {" "}
                  A User
                </Link>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/registerCompany"
                >
                  {" "}
                  A Company
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Login show={modalShow} onHide={() => setModalShow(false)} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
