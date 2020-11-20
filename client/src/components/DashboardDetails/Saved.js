import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
// styling
import "./DashboardDetails.css";
import { Card, Table } from 'react-bootstrap';

function Saved() {
  const [savedTrails, setSavedTrails] = useState([])

  // load all saved trails and store them with setSavedTrails
  useEffect(() => {
    loadSavedTrails()
  })

  // loads all the saved trails and sets them to savedTrails
  function loadSavedTrails() {
    API.getSavedTrails()
      .then(res => 
        filterTrails(res.data)
        )
      .catch(err => console.log(err));
  };

  // filters whether trail is saved or visited
  function filterTrails(data) {
    let filertedTrails = []
    data.map(item => {
      if (!item.isVisited) {
        filertedTrails.push(item)
      }
      return true;
    })
    setSavedTrails(filertedTrails);
  }

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
              <button className="btn btn-secondary removeBtn" onClick={() => deleteSavedTrail(item._id)}>Remove</button>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card.Body>
  )
}

export default Saved;
