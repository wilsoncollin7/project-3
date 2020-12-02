import React, { useState, useEffect, useCallback } from 'react';
import API from "../../utils/API";
// styling
import "./DashboardDetails.css";
import { Card, Table } from 'react-bootstrap';

function Saved() {
  const [savedTrails, setSavedTrails] = useState([])
  const user = JSON.parse(localStorage.getItem("user"));
  
  // filters whether trail is saved or visited
  const filterTrails = useCallback(
    (data) => {
      let filertedTrails = []
      data.map(item => {
        if (!item.isVisited) {
          filertedTrails.push(item)
        }
        return true;
      })
      setSavedTrails(filertedTrails);
    },
    []
  );

  // loads all the saved trails and passes them to filter function
  const loadSavedTrails = useCallback(
    () => {
      API.getSavedTrails(user.id)
      .then(res => 
        filterTrails(res.data)
        )
      .catch(err => console.log(err));
    },
    [filterTrails]
  );

  // load all saved trails
  useEffect(() => {
    loadSavedTrails()
  }, [loadSavedTrails])

  // deletes a saved trail based off an id and reloads the saved trails
  function deleteSavedTrail(id) {
    console.log(id)
    API.deleteSavedTrails(id)
      .then(res => loadSavedTrails())
      .catch(err => console.log(err));
  };

  return (
    <Card.Body className="savedCard">
      <Table striped bordered hover>
        <tbody>
          {savedTrails.map(item => (
            <tr key={item._id}>
              <td className="imageTd">
                <img 
                  className="dashboardImage" 
                  src={item.image} 
                  alt={item.name}>
                </img>
              </td>
              <td>{item.name}</td>
              <td>{item.location}</td>
              <td>
                <button className="btn btn-secondary removeBtn" onClick={() => deleteSavedTrail(item._id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card.Body>
  )
}

export default Saved;
