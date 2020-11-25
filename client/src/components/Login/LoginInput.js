import React, { useState } from 'react';
import API from "../../utils/API";
//styling
import './Login.css';
import { Button, Card, InputGroup, FormControl } from "react-bootstrap";

function LoginInput() {
  const [formObject, setFormObject] = useState({});

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormObject({...formObject, [name]: value})
    console.log(e.target.name)
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    if (formObject.email && formObject.password) {
      API.loginUser({
        user: {
          email: formObject.email,
          password: formObject.password
        }
      })
      .then(() => console.log("user saved"))
      .catch(err => console.log(err))
    }
  }

  return (
    <Card>
      <Card.Body className="loginCard">
        <form className="form-control">
          <InputGroup onChange={handleInputChange} size="sm" className="mb-3" id="loginEmail">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl name="email" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
          <InputGroup onChange={handleInputChange} size="sm" className="mb-3" id="loginPassword">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm">Password</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl name="password" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
          <Button onClick={handleFormSubmit}  variant="secondary" id="loginBtn" size="lg" block>
            Login
          </Button>
        </form>
      </Card.Body>
    </Card>
  )
}

export default LoginInput;

