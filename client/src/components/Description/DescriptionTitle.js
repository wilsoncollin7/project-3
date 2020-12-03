import React, { Component } from "react";
import "./Description.css"

class DescriptionTitle extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <>
        <p className="descriptionTitle">{this.props.parksTitle}</p>
      </>
    )
  }
}

export default DescriptionTitle;
