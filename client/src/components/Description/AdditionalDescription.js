import React, { Component } from "react";
import "./Description.css"

class AdditionalDescription extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  };

  componentDidMount() {
    console.log(this.props.parksDescription)
  }

  render() {
    return (
      <div className="descriptionContainer">
        <div className="additionalDetailsDiv">
          <h4>Operating Hours</h4>
            <p>{this.props.parksDescription.operatingHours[0].description}</p>
          <h4>Postal Address</h4>
            <p>{this.props.parksDescription.address1} {this.props.parksDescription.address2}</p>
          <h4>Phone Number</h4>  
            <p>{this.props.parksDescription.phoneNumber}</p>
        </div>
        <div className="additionalActivitiesDiv">
          <h4>List of Available Activities</h4>
            {this.props.parksDescription.activities.map((item, index) => {
              return (
                <li key={item.id}>{item.name}</li>
              )
            })}  
        </div>
      </div>
    )
  }
};

export default AdditionalDescription;
