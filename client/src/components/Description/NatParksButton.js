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
    this.natParksLookupClose = this.natParksLookupClose.bind(this)

  };

  natParksLookup(e) {
    e.preventDefault();
    this.setState({ viewAdditional: true });
    
  };

  natParksLookupClose(e) {
    e.preventDefault();
    this.setState({ viewAdditional: false });

  }
  

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
        <div className="natParksButtonDiv">
          <button onClick={this.natParksLookupClose} className="natParksButton" variant="secondary"size="lg" style={{ marginLeft: "auto", justifyContent: 'right'}}>Collapse</button>
        </div>
        <AdditionalDescription parksDescription={this.props.parksDescription} />
      </div>
    )
  }
};
  


export default NatParksButton;