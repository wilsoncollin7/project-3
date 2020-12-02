import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
//styling
import './Login.css';
import { Button, Card, InputGroup, FormControl } from "react-bootstrap";

function LoginInput() {
  const [formObject, setFormObject] = useState({});
  const [noUser, setNoUser] = useState(false);
  const history = useHistory();

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
      .then(() => {
        console.log("Logging in User...");
      })
      .catch(err => console.log(err));

      API.getUser({
        email: formObject.email
      })
      .then(res => {
        if (res.data === "User Does Not Exist") {
          console.log("no user exists")
          setNoUser(true);
        } else {
          setNoUser(false);
          const user = {
            firstName: res.data[0].firstName,
            lastName: res.data[0].lastName,
            email: res.data[0].email,
            id: res.data[0]._id,
          }
          localStorage.setItem("user", JSON.stringify(user));
          history.goBack();
        }
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
            <FormControl name="password" type="password" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
          <Button onClick={handleFormSubmit} variant="secondary" id="loginBtn" size="lg" block>
            Login
          </Button>
        </form>
        {noUser && <p className="userExistsWarning">*No User Found</p>}
      </Card.Body>
    </Card>
  )
}

export default LoginInput;

