import React, { Component } from 'react';
import AdditionalDescription from "./AdditionalDescription"
import "./Description.css";

class NatParksButton extends Component {
  constructor(props) {
    super(props)
    this.state = {NatParksButton: [{
      viewAdditional: false
    }]}

    this.natParksLookup = this.natParksLookup.bind(this)

  };

  natParksLookup(e) {
    e.preventDefault();
    // const searchName = (this.state.search.split(' ').join('%20'));

    // const queryUrl = `https://developer.nps.gov/api/v1/parks?q=${searchName}&api_key=4Kq5GQcxsnsiytDTgwKcaSBg4c6p3g35ACpCfOeF`;


    console.log(this.props[0].addresses[0])

    // const learnMore = this.props
    this.setState({ viewForm: true });
    
  };

  render () {
    return (
      <div>
        <button onClick={(this.natParksLookup)} className="natParksButton">Learn more</button>
      </div>
    );
  
  }
}


export default NatParksButton;