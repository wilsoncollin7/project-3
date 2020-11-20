import React, { Component } from 'react';
// components
import PageInfo from "./PageInfo"
import StateDropdown from "./StateDropdown"
import "../PageInfo/PageInfo.css";


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
        <input style= {{width: "300px", background:"#F2F1F9", border:"none", padding: "1%"}} type="text" placeholder="Where we going?" value={this.state.search}></input>
        <button className="btn btn-success" onClick={this.handleSubmitSearch}>Go Out Yonder!</button>
        <StateDropdown className="searchbar" />
      </form>
    </div>
    )

  }

}

export default StartPage;