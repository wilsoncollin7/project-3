import React, { useState } from 'react';
import API from "../../utils/API";
// style
import "./SaveTrailButtons.css";

function SaveTrailButtons (props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [saveBtn, setSaveBtn] = useState(false);
  const [visitBtn, setVisitBtn] = useState(false);

  // function that saves the trail
  function saveTrail() {
    API.saveSavedTrails({
      name: props.name,
      location: props.location,
      image: props.image,
      isVisited: false,
      user: user.id
    })
    .then(() => setSaveBtn(true))
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
    .then(() => setVisitBtn(true))
    .catch(err => console.log(err))
  };

  return (
    <div className="saveTrailButtonsDiv">
      {!saveBtn ? <button onClick={saveTrail} className="saveTrailButton">Save Park</button> : <button className="saveTrailButton">SAVED</button>}
      {!visitBtn ? <button onClick={visitTrail} className="saveTrailButton">I Visited This Park</button> : <button className="saveTrailButton">VISITED</button>}
    </div>
  );
};

export default SaveTrailButtons;
