import React from 'react';
import API from "../../utils/API";
// style
import "./SaveTrailButtons.css";

function SaveTrailButtons (props) {
  const user = JSON.parse(localStorage.getItem("user"));

  // function that saves the trail
  function saveTrail() {
    API.saveSavedTrails({
      name: props.name,
      location: props.location,
      image: props.image,
      isVisited: false,
      user: user.id
    })
      .catch(err => console.log(err))
  };

  // function that saves the visited trail
  function visitTrail() {
    API.saveVisitedTrails({
      name: props.name,
      location: props.location,
      image: props.image,
      isVisited: true,
      user: user.id
    })
      .catch(err => console.log(err))
  };

  return (
    <div className="saveTrailButtonsDiv">
      <button onClick={saveTrail} className="saveTrailButton">Save Trail</button>
      <button onClick={visitTrail} className="saveTrailButton">I Visited This Trail</button>
    </div>
  );
};

export default SaveTrailButtons;
