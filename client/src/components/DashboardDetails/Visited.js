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
  }, [])

  // loads all the visited trails and sets them to visitedTrails
  function loadVisitedTrails() {
    API.getVisitedTrails()
      .then(res => 
        setVisitedTrails(res.data)
        )
      .catch(err => console.log(err));
  };

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
              <button onClick={() => deleteVisitedTrail(item._id)}>remove</button>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card.Body>
  )
}

export default Visited;
