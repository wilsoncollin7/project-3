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


    this.setState({ viewAdditional: true });
    
  };
  

  render () {
    if (!this.state.viewAdditional) {
      return (
        <div className="natParksButtonDiv">
          <button onClick={this.natParksLookup} className="natParksButton" variant="secondary"size="lg" style={{ marginLeft: "auto", justifyContent: 'right'}}>Learn more</button>
        </div>
      )
    }
    else return (
      <div>
        <AdditionalDescription parksDescription={this.props.parksDescription} />
      </div>
    )
  }
};
  


export default NatParksButton;