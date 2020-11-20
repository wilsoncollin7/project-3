import React, { Component } from 'react';
// components
import Container from "../Container/Container";
// import SearchPage from "../Search/SearchPage";
import Description from "../Description/Description";
import Map from "../Map/Map";
import StateDropdown from "./StateDropdown"
import "../PageInfo/PageInfo.css";

class PageInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {PageInfo: [{
      search: ""
    }]}

    this.searchChange = this.searchChange.bind(this);
    this.SearchButton = this.SearchButton.bind(this);
  }

  // componentDidMount() {
  //   console.log(this.props.parksDescription.images[0].url)
  // };

  searchChange(e) {
    this.setState({ search: e.target.value }, () => {
      console.log(e.target.value)
    });
  };


  // button function that when clicked renders the map and description
  SearchButton(e) {
    e.preventDefault();
    if(this.state.search) {
      const lowerCase = this.state.search.toLowerCase();
      console.log(lowerCase)
    } else {
      console.log("hey this is undefined")
    }
  }

  render () {
    return (
      <div>
        <form className="searchBar">
          <input style= {{width: "300px", background:"#F2F1F9", border:"none", padding: "1%"}} type="text" placeholder="Where we going?" onChange={this.searchChange} value={this.state.search}></input>
          <button className="btn btn-success" onClick={this.SearchButton}>Go Out Yonder!</button>
          <StateDropdown className="searchbar" />
        </form>
        <Container />
        <Description parksDescription={this.props.parksDescription.description} parksImages={this.props.parksDescription.images[0].url} />
        <Map />
      </div>
    )
  }
}


export default PageInfo;
