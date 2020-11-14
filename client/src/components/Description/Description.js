import React from 'react';
import "./Description.css"
import Image from "./DescriptionImage"

//this is the description of the trail/park
function Description() {

  return (
    <div>
      <body className="descriptionContainer">
        <p><Image className="descriptionImage"></Image>
          This is where the trail info will go
        </p>
      </body>
    </div>
  )
}

export default Description;