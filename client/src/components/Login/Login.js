import React from 'react';
// styling
import "./Login.css"

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
    </>
  )
}

export default Login;
