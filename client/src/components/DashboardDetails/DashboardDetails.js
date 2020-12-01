import React, { useState } from 'react';
// style
import "./DashboardDetails.css";
// import components
import Saved from "./Saved";
import Visited from "./Visited";
import User from "./User";
import { Card, Nav } from 'react-bootstrap';

function DashboardDetails() {

  const [dashboardState, setDashboardState] = useState({
    saved: true,
    visited: false,
    user: false
  })

  return (
    <>
     <Card>
        <Card.Body>
          <Nav justify variant="tabs" defaultActiveKey="saved" className="dashNav">
            <Nav.Item>
              <Nav.Link 
              onClick={() => setDashboardState({
                saved: true,
                visited: false,
                user: false
              })} 
              eventKey="saved"
              >Saved Attractions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
              onClick={() => setDashboardState({
                saved: false,
                visited: true,
                user: false
              })} 
              eventKey="visited"
              >Visited Attractions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
              onClick={() => setDashboardState({
                saved: false,
                visited: false,
                user: true
              })} 
              eventKey="user"
              >User Account</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="login" eventKey="logout">Logout</Nav.Link>
            </Nav.Item>
          </Nav>
          <Card.Body>
            {dashboardState.saved && <Saved />}
            {dashboardState.visited && <Visited />}
            {dashboardState.user && <User />}
          </Card.Body>
        </Card.Body>
      </Card>
    </>
  )
}

export default DashboardDetails;
