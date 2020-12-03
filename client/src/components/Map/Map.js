import React from 'react';
import GoogleMapReact from 'google-map-react';
import "./Map.css";

  
class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      center: {
        lat: parseFloat(this.props.lat),
        lng: parseFloat(this.props.lng)
      },
      zoom: 11
    }
  }
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBejOeU-zID8TSNFT1dmaEElS94zMHILj0" }}
          defaultCenter={this.state.center}
          defaultZoom={11}
        >
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;
