import React, { Component } from 'react';
import "./Description.css"

class DescriptionTitle extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    
  }

  // componentDidMount() {
  //   console.log(this.props.parksTitle)
  // }

  render() {
    return (
      <div>
        <p className="descriptionTitle">{this.props.parksTitle}</p>
      </div>
    )
  }
}

export default DescriptionTitle;