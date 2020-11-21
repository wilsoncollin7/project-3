import React from 'react';
//styling
import './Login.css';
import { Button, Card, InputGroup, FormControl } from "react-bootstrap";

function RegisterInput() {
  return (
    <Card>
      <Card.Body className="registerCard">
        <InputGroup size="sm" className="mb-3" id="registerFirstName">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm inputText">First Name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <InputGroup size="sm" className="mb-3" id="registerLastName">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">Last Name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <InputGroup size="sm" className="mb-3" id="registerEmail">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <InputGroup size="sm" className="mb-3" id="registerPassword">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">Password</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <Button variant="secondary" id="registerBtn" size="lg" block>
          Register
    </Button>
      </Card.Body>
    </Card>
  )
}

export default RegisterInput;

