import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// context API
import UserContext from "./utils/UserContext";
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
  // setting user state to be passed as context 
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  return (
    <Router>
      <div className="app">
<<<<<<< HEAD
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
=======
        <UserContext.Provider value={{ user, setUser }}>
          <BootstrapNavbar />
          <Background />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </UserContext.Provider>
>>>>>>> e273d800fd2f6ccdf1ddd85ebbc100fdc0985306
      </div>
    </Router>
  );
}

export default App;
