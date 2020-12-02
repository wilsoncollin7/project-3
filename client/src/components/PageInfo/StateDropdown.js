import React, { Component } from 'react';
import statesTrim from "us-state-codes";
// components
import "./PageInfo.css";

class StateDropdown extends Component {
  constructor(props) {
    super(props);

    const stateSearch = [];

    this.state = {
      stateParksSearch: { stateSearch },
      usStates: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ]
    }
    this.handleChange = this.handleChange.bind(this)
  }



  handleChange(e) {
    const stateCode = (e.target.value);
    this.props.stateCodeFunction(statesTrim.getStateCodeByStateName(stateCode))
      // this.setState({stateParksSearch:res.data.data[i]})
    }


  render() {
    const {usStates} = this.state;
    return (
      
      <select style={{borderRadius:"5px"}} onChange={this.handleChange} >
         {usStates.map(usState => {
           return (
             <option key={usState} value={usState}> {usState} </option>
           )
         })}
    </select>
    )
  }
}

export default StateDropdown;