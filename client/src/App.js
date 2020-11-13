import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// styling
import './App.css';
// components
import Background from "./components/Background/Background";
import Nav from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Background />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
