import React, { Component } from 'react';
import "./Description.css"



class Image extends Component {

  render () {
    return <img src={this.props.image} className="descriptionImage" alt="ParkPic" />;
  }
}

export default Image;