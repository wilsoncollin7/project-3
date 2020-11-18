import React, { useState } from 'react';
// styling
import "./Login.css"
// import components
import LoginInput from "./LoginInput";
import RegisterInput from "./RegisterInput";
import { Card, Nav } from 'react-bootstrap';


function Login() {

  const [loginState, setLoginState] = useState({
    login: true,
    register: false
  })

  return (
    <>
      <Card className="loginRegisterCard">
        <Card.Body>
          <Nav justify variant="tabs" defaultActiveKey="login" className="loginNav">
            <Nav.Item>
              <Nav.Link
                onClick={() => setLoginState({
                  login: true,
                  register: false
                })}
                eventKey="login"
              >Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => setLoginState({
                  login: false,
                  register: true
                })}
                eventKey="register"
              >Register</Nav.Link>
            </Nav.Item>
          </Nav>
          <Card.Body>
            {loginState.login && <LoginInput />}
            {loginState.register && <RegisterInput />}
          </Card.Body>
        </Card.Body>
      </Card>
    </>
  )
}

export default Login;
