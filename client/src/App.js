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
// import Description from "./components/Description"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="app">
        <BootstrapNavbar />
        <Background />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
