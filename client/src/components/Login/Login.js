import React from 'react';
// styling
import "./Login.css"
// import components
import { Button } from "react-bootstrap";

function Login() {
  return (
    <>
    <h3>enter stuff</h3>
    <input 
      className="loginInput"
      key="random1"
      type="email"
      value=""
      placeholder={"Email"}
    />
    <input 
      className="loginInput"
      key="random1"
      type="password"
      value=""
      placeholder={"Password"}
    />
    <Button variant="secondary" id="loginBtn" size="lg" block>
      Login
    </Button>
    </>
  )
}

export default Login;
