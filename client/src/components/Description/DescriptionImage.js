import React, { Component } from 'react';
import "./Description.css"



class Image extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    console.log(this.props)
  }

  render () {
    return <img src={this.props.image} className="descriptionImage" alt="ParkPic" />;
  }
}

export default Image;
