import React from 'react';
// style
import "./DashboardDetails.css";
// import components
import { Card, Nav } from 'react-bootstrap'

function DashboardDetails() {
  return (
    <>
     <Card>
        <Card.Body>
          <Nav justify variant="tabs" defaultActiveKey="saved">
            <Nav.Item>
              <Nav.Link eventKey="saved">Saved Attractions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="visited">Visited Attractions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="user">User Account</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="logout">Logout</Nav.Link>
            </Nav.Item>
          </Nav>
          <h1>body contents</h1>
        </Card.Body>
      </Card>
    </>
  )
}

export default DashboardDetails;
