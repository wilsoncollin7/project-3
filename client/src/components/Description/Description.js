import React, { Component } from 'react';
import "./Description.css"
import NatParksButton from "./NatParksButton"
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
        <NatParksButton {...this.props.allData}/>
      </div>
    )
  }
}

export default Description;
