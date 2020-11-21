import React, { useState, useEffect, useCallback } from 'react';
import API from "../../utils/API";
// styling
import "./DashboardDetails.css";
import { Card, Table } from 'react-bootstrap';

function Visited() {
  const [visitedTrails, setVisitedTrails] = useState([])

  // filters whether trail is saved or visited
  const filterTrails = useCallback(
    (data) => {
      let filertedTrails = []
      data.map(item => {
        if (item.isVisited) {
          filertedTrails.push(item)
        }
        return true;
      })
      setVisitedTrails(filertedTrails);
    },
    []
  );

  // loads all the visited trails and passes them to filter function
  const loadVisitedTrails = useCallback(
    () => {
      API.getVisitedTrails()
      .then(res => 
        filterTrails(res.data)
        )
      .catch(err => console.log(err));
    },
    [filterTrails]
  );

  // load all visited trails
  useEffect(() => {
    loadVisitedTrails()
  }, [loadVisitedTrails])

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
              <td>
                <button className="btn btn-secondary removeBtn" onClick={() => deleteVisitedTrail(item._id)}>remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card.Body>
  )
}

export default Visited;
