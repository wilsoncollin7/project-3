import React from 'react';
import "./Description.css"
import Image from "./DescriptionImage"

//this is the description of the trail/park
function Description() {

  return (
    <div>
      <body class="descriptionContainer">
        <p><Image class="descriptionImage"></Image>
          This is where the trail info will go
          </p>
      </body>
    </div>
  )
}

export default Description;