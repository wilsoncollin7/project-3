import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// styling
import './App.css';
// components
import Background from "./components/Background/Background";
import BootstrapNavbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="app">
        <BootstrapNavbar />
        <Background />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/home" >
            <Home />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
