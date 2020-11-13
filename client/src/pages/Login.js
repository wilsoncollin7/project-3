import React from 'react';
// components
import Container from "../components/Container/Container";
import Login from "../components/Login/Login";

function Home() {
  return (
    <Container className="loginContainer">
      <h1>Login</h1>
      <Login />
    </Container>
  )
}

export default Home;
