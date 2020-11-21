import React, { useContext, useState, useEffect, useCallback } from 'react';
import API from "../../utils/API";
// context API
import UserContext from "../../utils/UserContext";
// styling
import "./DashboardDetails.css";
import { Card } from 'react-bootstrap';

function User() {
  const [savedTrails, setSavedTrails] = useState([]);
  const [visitedTrails, setVisitedTrails] = useState([]);
  // setting user to context API
  const user = useContext(UserContext);

  // filters whether trail is saved or visited
  const filterTrails = useCallback(
    (data) => {
      let savedTrails = []
      let visitedTrails = []
      data.map(item => {
        if (!item.isVisited) {
          savedTrails.push(item)
        } else {
          visitedTrails.push(item)
        }
        return true;
      })
      setSavedTrails(savedTrails);
      setVisitedTrails(visitedTrails);
    },
    []
  );

  // loads all the saved trails and passes them to filter function
  const loadSavedTrails = useCallback(
    () => {
      API.getSavedTrails()
      .then(res => 
        filterTrails(res.data)
        )
      .catch(err => console.log(err));
    },
    [filterTrails]
  );

  // loads all of the trails
  useEffect(() => {
    loadSavedTrails()
  }, [loadSavedTrails])

  return (
    <Card.Body className="userCard">
      <h1 className="mb-4">Hello {user.firstName}</h1>
      <div className="row">
        <div className="col-lg-6">
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Email: {user.email}</p>
        </div>
        <div className="col-lg-6">
          <p>Numbers of trails hiked: {savedTrails.length}</p>
          <p>Number of saved hikes: {visitedTrails.length}</p>
        </div>
      </div>
    </Card.Body>
  )
}

export default User;
