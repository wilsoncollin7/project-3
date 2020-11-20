import React from 'react';
import "./Description.css";

function NatParksButton () {

  function natParksLookup(e) {
    console.log("this will make an api call to the national parks")
  };

  return (
    <button onClick={natParksLookup} className="natParksButton">Learn more</button>
  );

};

export default NatParksButton