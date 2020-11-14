import React from 'react';
import "./Map.css";
import Image from "./MapImage"

//this is the map that will display a trail they search
function Map() {

  return (
    <div>
      <div className="mapDescription">
        <p><Image className="mapImage"></Image>
          Thiis will give the map location from the API
        </p>

      </div>
    </div>
  )
}

export default Map;