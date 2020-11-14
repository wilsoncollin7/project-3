import React from 'react';
// styling
import "./Login.css"
import { BrowserRouter as Router } from "react-router-dom";
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <>
    <h1 className="loginTitle">Login</h1>
   
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
