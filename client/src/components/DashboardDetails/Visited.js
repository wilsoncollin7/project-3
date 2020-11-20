import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
// styling
import "./DashboardDetails.css";
import { Card, Table } from 'react-bootstrap';

function Visited() {
  const [visitedTrails, setVisitedTrails] = useState([])

  // load all visited trails and store them with setVisitedTrails
  useEffect(() => {
    loadVisitedTrails()
  })

  // loads all the visited trails and sets them to visitedTrails
  function loadVisitedTrails() {
    API.getVisitedTrails()
      .then(res => 
        filterTrails(res.data)
        )
      .catch(err => console.log(err));
  };

  // filters whether trail is saved or visited
  function filterTrails(data) {
    let filertedTrails = []
    data.map(item => {
      if (item.isVisited) {
        filertedTrails.push(item)
      }
      return true;
    })
    setVisitedTrails(filertedTrails);
  }

  // deletes a visited trail based off an id and reloads the visited trails
  function deleteVisitedTrail(id) {
    API.deleteVisitedTrails(id)
      .then(res => loadVisitedTrails())
      .catch(err => console.log(err));
  };

  return (
    <Card.Body className="visitedCard">
      <Table striped bordered hover>
        <tbody>
          {visitedTrails.map(item => (
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
              <button className="btn btn-secondary removeBtn" onClick={() => deleteVisitedTrail(item._id)}>remove</button>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card.Body>
  )
}

export default Visited;
