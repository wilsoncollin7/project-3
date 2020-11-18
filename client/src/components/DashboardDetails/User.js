import React, { useContext } from 'react';
// context API
import UserContext from "../../utils/UserContext";
// styling
import "./DashboardDetails.css";
import { Card } from 'react-bootstrap';

function User() {
  // setting user to context API
  const user = useContext(UserContext);
  
  return (
    <Card.Body className="userCard">
      <h1 className="mb-4">Hello {user.firstName}</h1>
      <div className="row">
        <div className="col-lg-6">
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Email: {user.email}</p>
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
