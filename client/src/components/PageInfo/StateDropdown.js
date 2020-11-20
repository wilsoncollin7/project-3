import React, { Component } from 'react';
// components
import "../PageInfo/PageInfo.css";

class StateDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usStates: [
        "AL: Alabama",
        "AK : Alaska",
        "AZ : Arizona",
        "AR : Arkansas",
        "CA : California",
        "CO : Colorado",
        "CT : Connecticut",
        "DE : Delaware",
        "FL : Florida",
        "GA : Georgia",
        "HI : Hawaii",
        "ID : Idaho",
        "IL : Illinois",
        "IN : Indiana",
        "IA : Iowa",
        "KS : Kansas",
        "KY : Kentucky",
        "LA : Louisiana",
        "ME : Maine",
        "MD : Maryland",
        "MA : Massachusetts",
        "MI : Michigan",
        "MN : Minnesota",
        "MS : Mississippi",
        "MO : Missouri",
        "MT : Montana",
        "NE : Nebraska",
        "NV : Nevada",
        "NH : New Hampshire",
        "NJ : New Jersey",
        "NM : New Mexico",
        "NY : New York",
        "NC : North Carolina",
        "ND : North Dakota",
        "OH : Ohio",
        "OK : Oklahoma",
        "OR : Oregon",
        "PA : Pennsylvania",
        "RI : Rhode Island",
        "SC : South Carolina",
        "SD : South Dakota",
        "TN : Tennessee",
        "TX : Texas",
        "UT : Utah",
        "VT : Vermont",
        "VA : Virginia",
        "WA : Washington",
        "WV : West Virginia",
        "WI : Wisconsin",
        "WY : Wyoming",
      ]
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    console.log(e.target.value)
  }

  render() {
    const {usStates} = this.state;
    return (
      <select onChange={this.handleChange}>
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