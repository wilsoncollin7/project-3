import React from 'react';
import "./Map.css";
import Image from "./MapImage"

//this is the map that will display a trail they search
function Map(props) {
  return (
    <div>
      <div className="mapDescription">
        <p><Image className="mapImage"></Image></p>
        <p>{props.lat}</p>
        <p>{props.lng}</p>
      </div>
    </div>
  )
}

export default Map;
