import React from 'react';
import "./Description.css"
import NatParksButton from "./NatParksButton"
import Image from "./DescriptionImage"

//this is the description of the trail/park
function Description() {

  return (
    <div className="descriptionContainer">
      <p><Image className="descriptionImage"></Image>
        This is where the trail info will go
      </p>
      <NatParksButton />
    </div>
  )
}

export default Description;
