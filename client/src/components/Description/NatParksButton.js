import React from 'react';
import "./Description.css";

function NatParksButton () {

  function natParksLookup(e) {
    console.log("this will make an api call to the national parks")
  };

  return (
    <div className="natParksButtonDiv">
    <button onClick={natParksLookup} className="natParksButton" variant="secondary"size="lg" style={{ marginLeft: "auto", justifyContent: 'right'}}>Learn more</button>
    </div>
  );
  

};

export default NatParksButton