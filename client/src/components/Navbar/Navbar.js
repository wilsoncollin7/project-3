import React from 'react'
// import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";

class BootstrapNavbar extends React.Component {
  render() {
    return (
      <div className="navbarDiv">
        <div className="row" >
          <div className="col col-md-12">
              <Navbar id="navbarRow" bg="light" variant="light" expand="lg" sticky="top">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href={localStorage.getItem("user") ? "/dashboard" : "/login"}>Dashboard</Nav.Link>
                    {!localStorage.getItem("user") && <Nav.Link href="/login">Login</Nav.Link>}
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
           
          </div>
        </div>
      </div>
    )
  }
}

export default BootstrapNavbar;
