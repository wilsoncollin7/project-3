import React from 'react';
//styling
import './Login.css';
import { Button, Card, InputGroup, FormControl } from "react-bootstrap";

function LoginInput() {
  return (
    <Card>
      <Card.Body className="loginCard">
        <InputGroup size="sm" className="mb-3" id="loginEmail">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <InputGroup size="sm" className="mb-3" id="loginPassword">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">Password</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
    
        <Button variant="secondary" id="loginBtn" size="lg" block>
          Login
    </Button>
      </Card.Body>
    </Card>
  )
}

export default LoginInput;

