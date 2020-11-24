import React, { Component } from 'react';
import "./Description.css"
import NatParksButton from "./NatParksButton"
import SaveTrailButtons from "../SaveTrailButtons/SaveTrailButtons";
import Image from "./DescriptionImage"
import DescriptionTitle from './DescriptionTitle';

//this is the description of the trail/park
class Description extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    
  }

  // componentDidMount() {
  //   console.log(this.props.allData)
  // }

  render () {
    return (
      <div className="descriptionContainer">
        <DescriptionTitle parksTitle={this.props.parksTitle} />
        <p><Image className="descriptionImage" parksImages={this.props.parksImages}></Image>
          {this.props.parksDescription}
        </p>
        <p>{this.props.city + ", " + this.props.state}</p>
        <SaveTrailButtons 
          name={this.props.parksTitle}
          location={this.props.city + ", " + this.props.state}
          image={this.props.parksImages}
        />
        <NatParksButton />

      </div>
    )
  }
}

export default Description;
