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
  }, [])

  // loads all the saved trails and sets them to savedTrails
  function loadSavedTrails() {
    API.getSavedTrails()
      .then(res => 
        setSavedTrails(res.data)
        )
      .catch(err => console.log(err));
  };

  // deletes a saved trail based off an id and reloads the saved trails
  function deleteSavedTrail(id) {
    API.deleteSavedTrails(id)
      .then(res => loadSavedTrails())
      .catch(err => console.log(err));
  };

  return (
    <Card.Body className="savedCard">
      <Table striped bordered hover>
        <tbody>
          {savedTrails.map(item => (
            <tr>
              <td>
                <img 
                  className="descriptionImage" 
                  src={item.image} 
                  alt={item.name}>
                </img>
              </td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <button onClick={() => deleteSavedTrail(item._id)}>remove</button>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card.Body>
  )
}

export default Saved;
