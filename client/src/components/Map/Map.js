import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import "./Map.css";
 
function Map(props) {
  const [coord, setcoord] = useState({
    center: {
      lat: "",
      lng: ""
    }
  })

  if(isNaN(props.lat) || isNaN(props.lng)) {
    console.log("undf props")
  } else {
    console.log(props.lat + " | " + props.lng)
    setcoord(coord.center={lat: props.lat, lng: props.lng});
  }
  
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '500px', width: '500px', margin: 'auto' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDwjr75wpVbrqdqfwE_Gb41DcE3T8s04wM" }}
        defaultCenter={coord}
        defaultZoom="11"
      > 
      </GoogleMapReact>
    </div>
  );
}

export default Map;
