import React, { Component } from 'react';
import "./Description.css"



class Image extends Component {
  constructor(props) {
    super(props)
    this.state = {ParksImage: [{
      parksImage: null
    }]}
  }

  // componentDidMount() {
  //   console.log(this.props.parksImages); 
  // }

  // Import result is the URL of your image
  render () {
    return <img src={this.props.parksImages} className="descriptionImage" alt="ParkPic" />;
  }
}

export default Image;