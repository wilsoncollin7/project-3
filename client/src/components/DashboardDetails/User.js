import React from 'react';
// styling
import "./DashboardDetails.css";
import { Card } from 'react-bootstrap';

function User() {
  return (
    <Card.Body className="userCard">
      <h1 className="mb-4">Hello USERNAME</h1>
      <div className="row">
        <div className="col-lg-6">
          <p>Username: USERNAME</p>
          <p>Email: email@email.com</p>
        </div>
        <div className="col-lg-6">
          <p>Numbers of trails hiked: 5</p>
          <p>Number of saved hikes: 8</p>
        </div>
      </div>
    </Card.Body>
  )
}

export default User;
