import React, { Component } from 'react';
import "./Description.css"
import NatParksButton from "./NatParksButton"
import Image from "./DescriptionImage"

//this is the description of the trail/park
class Description extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    
  }

  // componentDidMount() {
  //   console.log(this.props.parksImages)
  // }

  render () {
    return (
      <div className="descriptionContainer">
        <p><Image className="descriptionImage" parksImages={this.props.parksImages}></Image>
          {this.props.parksDescription}
        </p>
        <NatParksButton />
      </div>
    )
  }
}

export default Description;
