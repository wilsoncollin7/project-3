import React, { Component } from 'react';
// components
import Container from "../Container/Container";
// import SearchPage from "../Search/SearchPage";
import Description from "../Description/Description";
import Map from "../Map/Map";
import "../PageInfo/PageInfo.css";

class PageInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: "Search"
    }

    this.searchChange = this.searchChange.bind(this);
  }

  searchChange(e) {
    this.setState({ search: e.target.value });
    console.log(e.target.value)
  };

  updateInput = () => {
    const lowerCase = this.state.search.toLowerCase();
    this.setState({
      search: lowerCase
    });
  };

  // button function that when clicked renders the map and description
  SearchButton(e) {
    e.preventDefault();
    // below is where we will put the function that renders the information on the page
    this.props.displayPage()
    this.setState({
      search: "",
      map: "",
      description: "",
    })
    return (
      this.state.updateInput()
    )
  }

  render () {
    return (
      <div>
        <form className="searchBar">
          <input style= {{width: "300px", background:"#F2F1F9", border:"none", padding: "1%"}} type="text" placeholder="Where we going?" onChange={this.searchChange} value={this.state.seacrh}></input>
          <button className="btn btn-success" onClick={this.SearchButton}>Go Out Yonder!</button>
        </form>
        <Container />
        <Description />
        <Map />
      </div>
    )
  }
}


export default PageInfo;
