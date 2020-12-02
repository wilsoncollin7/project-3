import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// context API
import UserContext from "./utils/UserContext";
import SearchContext from "./utils/SearchContext";
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
  const [search, setSerch] = useState({
    search: ""
  });

  return (
    <Router>
      <div className="app">
        <SearchContext.Provider value={{ search, setSerch }}>
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
        </SearchContext.Provider>
      </div>
    </Router>
  );
}

export default App;
