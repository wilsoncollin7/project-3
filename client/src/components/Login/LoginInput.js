import React, { useContext, useState } from 'react';
// import { Redirect } from "react-router-dom";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";
//styling
import './Login.css';
import { Button, Card, InputGroup, FormControl } from "react-bootstrap";

function LoginInput() {
  const user = useContext(UserContext);

  const [formObject, setFormObject] = useState({});

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    if (formObject.email && formObject.password) {
      API.loginUser({
        email: formObject.email,
        password: formObject.password
      })
      .then(() => console.log("user loged in"))
      .catch(err => console.log(err));

      API.getUser({
        email: formObject.email
      })
      .then(res => {
        user.setUser({
          id: res.data[0]._id,
          firstName: res.data[0].firstName,
          lastName: res.data[0].lastName,
          email: res.data[0].email
        })
        console.log(user)
      })
      .catch(err => console.log(err));
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
          <Button onClick={handleFormSubmit} variant="secondary" id="loginBtn" size="lg" block>
            Login
          </Button>
        </form>
      </Card.Body>
    </Card>
  )
}

export default LoginInput;

