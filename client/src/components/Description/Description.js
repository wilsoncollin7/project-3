import React, { Component } from "react";
import "./Description.css"
import NatParksButton from "./NatParksButton"
import SaveTrailButtons from "../SaveTrailButtons/SaveTrailButtons";
import DescriptionImage from "./DescriptionImage"
import DescriptionTitle from "./DescriptionTitle";

//this is the description of the trail/park
class Description extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  componentDidMount() {
    console.log(this.props.parksName)
  }

  render () {
    return (
      <div className={`keen-slider__slide number-slide${this.props.index}`}>
        <p><DescriptionImage className="descriptionImage" image={this.props.image}></DescriptionImage>
          <div>
            <DescriptionTitle parksTitle={this.props.parksName} />  
            <p>{this.props.city},{this.props.state}</p>
            <p className="info-box">{this.props.description}</p>
            {localStorage.getItem("user") && 
              <SaveTrailButtons 
                name={this.props.parksName}
                location={this.props.city}
                image={this.props.image}
              />
            }
          </div>
        </p>
        <NatParksButton parksDescription={this.props}/>
      </div>
    )
  }
}

export default Description;
