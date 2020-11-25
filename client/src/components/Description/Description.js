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

  componentDidMount() {
    console.log(this.props.parksDescription.fullName)
  }

  render () {
    return (
      <div  className={`keen-slider__slide number-slide${this.props.index}`}>
        <DescriptionTitle parksTitle={this.props.parksDescription} />
        <p><Image className="descriptionImage" image={this.props.image}></Image>
          {this.props.parksDescription}
        </p>

        <SaveTrailButtons 
          name={this.props.parksTitle}
          location={this.props.state}
          image={this.props.image}
        />
        {/* <NatParksButton parksDescription={this.props.parksDescription}/> */}

      </div>
    )
  }
}

export default Description;
