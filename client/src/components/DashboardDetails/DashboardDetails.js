import React, { useState } from 'react';
// style
import "./DashboardDetails.css";
// import components
import { Card, Nav } from 'react-bootstrap'

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
          <Nav justify variant="tabs" defaultActiveKey="saved">
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
              <Nav.Link eventKey="logout">Logout</Nav.Link>
            </Nav.Item>
          </Nav>
          {dashboardState.saved && <h1>saved attrations</h1>}
          {dashboardState.visited && <h1>visited attrations</h1>}
          {dashboardState.user && <h1>user attrations</h1>}
        </Card.Body>
      </Card>
    </>
  )
}

export default DashboardDetails;
