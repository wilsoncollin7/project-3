import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./Navabar.css";

class BootstrapNavbar extends React.Component {

  render() {
    return (
      <div>
        <div className="row navbarRow">
          <div className="col-md-12">
            <Router>
              <Navbar bg="light" variant="light" expand="lg" sticky="top">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/">Dashboard</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <br />
              
            </Router>
          </div>
        </div>
      </div>
    )
  }
}

export default BootstrapNavbar;