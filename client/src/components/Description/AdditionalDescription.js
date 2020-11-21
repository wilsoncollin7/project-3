import React, { Component } from 'react';
import "./Description.css"

class AdditionalDescription extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parkAddress: "",
      emailAddress: "",
      phoneNumber: "",
      activities: []

    };
  };

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div>

      </div>
    )
  }

};

export default AdditionalDescription;