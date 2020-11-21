import React, { Component } from 'react';
// components
import Container from "../Container/Container";
// import SearchPage from "../Search/SearchPage";
import Description from "../Description/Description";
import Map from "../Map/Map";
import StateDropdown from "./StateDropdown"
import "../PageInfo/PageInfo.css";
import axios from "axios";


class PageInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {PageInfo: [{
      search: "",
      newparksDescription: null,
      newparksImage: null,
      newparksTitle: null,
      allData: []
    }]}

    this.searchChange = this.searchChange.bind(this);
    this.SearchButton = this.SearchButton.bind(this);
  }

  // componentDidMount() {
  //   console.log(this.props.newparksDescription.fullName)
  // };

  searchChange(e) {
    this.setState({ search: e.target.value }, () => {
      // console.log(e.target.value)
    });
  };


  // button function that when clicked renders the map and description
  SearchButton(e) {
    e.preventDefault();
    if(this.state.search) {

    } else {
      console.log("hey this is undefined")
    }
    const searchName = (this.state.search.split(' ').join('%20'));

    const queryUrl = `https://developer.nps.gov/api/v1/parks?q=${searchName}&api_key=4Kq5GQcxsnsiytDTgwKcaSBg4c6p3g35ACpCfOeF`;

    // console.log(queryUrl);

    axios.get(queryUrl).then((res) => {
      
      // console.log(res.data.data[0].description);

      this.setState({newparksDescription: res.data.data[0].description})
      this.setState({newparksImage: res.data.data[0].images[0].url})
      this.setState({newparksTitle: res.data.data[0].fullName})
      this.setState({allData: res.data.data})

      // console.log(this.state.allData)
    })

  }

  render () {
    if(this.state.search) {
      return (
        <div>
          <form className="searchBar">
            <input style= {{width: "300px", background:"#F2F1F9", border:"none", padding: "1%"}} type="text" placeholder="Where we going?" onChange={this.searchChange} value={this.state.search}></input>
            <button className="btn btn-success" onClick={this.SearchButton}>Go Out Yonder!</button>
            <StateDropdown className="searchbar" />
          </form>
          <Container />
          <Description {...this.props} parksDescription={this.state.newparksDescription} parksImages={this.state.newparksImage} parksTitle={this.state.newparksTitle} allData={this.state.allData} />
          <Map />
        </div>
      )
    }
      return (
        <div>
          <form className="searchBar">
            <input style= {{width: "300px", background:"#F2F1F9", border:"none", padding: "1%"}} type="text" placeholder="Where we going?" onChange={this.searchChange} value={this.state.search}></input>
            <button className="btn btn-success" onClick={this.SearchButton}>Go Out Yonder!</button>
            <StateDropdown className="searchbar" />
          </form>
          <Container />
          <Description {...this.props.allData} parksDescription={this.props.parksDescription.description} parksImages={this.props.parksDescription.images[0].url} parksTitle={this.props.parksDescription.fullName} />
          <Map />
        </div>
      )
  }
}


export default PageInfo;
