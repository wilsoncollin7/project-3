import React from 'react';
//styling
import './Login.css';
import { Button, Card } from "react-bootstrap";

function LoginInput() {
  return (
    <Card>
    <Card.Body className="loginCard">
    <label for="loginEmail">Email Address</label>
    <input
      className="loginInput"
      id="loginEmail"
      key="random1"
      type="email"
      value=""
      placeholder={"Email"}
    />
    <label for="loginPassword">Password</label>
    <input
      className="loginInput"
      id="loginPassword"
      key="random1"
      type="password"
      value=""
      placeholder={"Password"}
    />
    <br></br>
    <Button variant="secondary" id="loginBtn" size="lg" block>
      Login
    </Button>
    </Card.Body>
    </Card>
  )
}

export default LoginInput;

