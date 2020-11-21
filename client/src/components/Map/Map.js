import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import "./Map.css";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
function Map(props) {
  // const [coord, setcoord] = useState({
  //   center: {
  //     lat: "",
  //     lng: ""
  //   },
  //   zoom: 11
  // })

  let center = {
    lat: 39.83076929,
    lng: -75.56353942
  }

  console.log(props.lat)
  console.log(props.lng)
  
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '500px', width: '500px', margin: 'auto' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDwjr75wpVbrqdqfwE_Gb41DcE3T8s04wM" }}
        defaultCenter={center}
        defaultZoom="11"
      >
        <AnyReactComponent
          lat={center.lat}
          lng={center.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
