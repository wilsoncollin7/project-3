import React, { Component } from 'react';
import axios from "axios";
// components
import "./PageInfo.css";

class StateDropdown extends Component {
  constructor(props) {
    super(props);

    const stateSearch = [];

    this.state = {
      stateParksSearch: { stateSearch },
      usStates: [
        "AL",
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
        "NC",
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
    console.log(e.target.value)
    const stateCode = (e.target.value);

    const queryUrl = `https://developer.nps.gov/api/v1/parks?q=${stateCode}&api_key=4Kq5GQcxsnsiytDTgwKcaSBg4c6p3g35ACpCfOeF`;

    
    axios.get(queryUrl).then((res) => {

      console.log(res.data.data)

      // this.setState({stateParksSearch:res.data.data[i]})
    })
  }

  render() {
    const {usStates} = this.state;
    return (
      
      <select style={{borderRadius:"5px"}} onChange={this.handleChange}>
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