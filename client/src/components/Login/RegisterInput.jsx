import React from 'react';
//styling
import './Login.css';
import { Button, Card } from "react-bootstrap";

function RegisterInput() {
  return (
    <Card>
    <Card.Body className="registerCard">
    <label for="firstName">First Name</label>
    <input
      className="registerInput"
      id="firstName"
      key="random1"
      type="text"
      value=""
      placeholder={"First Name"}
    />
    <label for="lastName">Last Name</label>
    <input
      className="registerInput"
      id="lastName"
      key="random1"
      type="text"
      value=""
      placeholder={"Last Name"}
    />
    <label for="registerEmail">Email Address</label>
    <input
      className="registerInput"
      id="registerEmail"
      key="random1"
      type="email"
      value=""
      placeholder={"Email"}
    />
    <label for="registerPassword">Password</label>
    <input
      className="registerInput"
      id="registerPassword"
      key="random1"
      type="password"
      value=""
      placeholder={"Password"}
    />
    <br></br>
    <Button variant="secondary" id="registerBtn" size="lg" block>
      Register
    </Button>
    </Card.Body>
    </Card>
  )
}

export default RegisterInput;

