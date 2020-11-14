import React from 'react';
// style
import "./CardComp.css";
// import compoents
import { Card, Nav } from 'react-bootstrap'

function CardComp() {
  return (
    <Card>
      <Card.Body>
        <Nav justify variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link>Saved Attractions</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Visited Attractions</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>User Account</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Logout</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Body>
    </Card>
  )
}

export default CardComp;