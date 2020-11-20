import React, { Component } from 'react';
// components
import PageInfo from "./PageInfo"
import StateDropdown from "./StateDropdown"
import "./PageInfo.css";


class StartPage extends Component {
  constructor(props) {
    super(props)
    this.state = {StartPage: [{
      showStart: false,
      startSearch: ""
    }]}
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
  }

  handleSubmitSearch(e) {
    e.preventDefault();
    this.setState({showStart: true})
  }

  render () {
    if(this.state.showStart) {
      return (
        <PageInfo />
      
      )
    }
    return (
      <div>
      <form className="searchBar">
        <input style=  {{borderRadius:"5px", width: "40%", background:"#F2F1F9", border:"none", padding: "8px", fontWeight:"600", marginRight:"2%"}} type="text" placeholder="Where we going?" value={this.state.search}></input>
        <StateDropdown className="searchbar" />
        <button className="btn" id="searchBtn" style= {{border:"none", width: "20%", background: "#144552ac", marginLeft:"2%"}} onClick={this.handleSubmitSearch}>Go Out Yonder!</button>
        
      </form>
    </div>
    )

  }

}

export default StartPage;