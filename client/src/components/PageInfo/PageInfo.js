import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// components
// import Container from "../Container/Container";
// import SearchPage from "../Search/SearchPage";
// import Description from "../Description/Description";
// import Map from "../Map/Map";
// import StateDropdown from "./StateDropdown";
import "../PageInfo/PageInfo.css";
import { Button } from "react-bootstrap";
import Carousel from "../Carousel/Carousel"

class PageInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      PageInfo: [{
        search: "",
      }]
    }
    this.searchChange = this.searchChange.bind(this);
  }

  // componentDidMount() {
  //   console.log(this.props.parksDescription)
  // };

  searchChange(e) {
    this.setState({ search: e.target.value }, () => {
      // console.log(e.target.value)
    });
  };

  // componentDidMount() {
  //   console.log(this.props.parksDescription)
  // }

  render() {
    // if (this.state.search) {
    //   return (
    //     <div>
    //       <form className="searchBar">
    //         <input style={{ width: "300px", background: "#F2F1F9", border: "none", padding: "1%" }} type="text" placeholder="Where we going?" onChange={this.searchChange} value={this.state.search}></input>
    //         <button className="btn btn-success" onClick={this.SearchButton}>Go Out Yonder!</button>
    //         <StateDropdown className="searchbar" />
    //       </form>

    //     </div>
    //   )
    // }

    return (
      <div className="searchResultsContainer">

        <div className="searchResultsBtn">
          <Button href="/" variant="secondary" id="returnHomeBtn" size="lg" style={{ marginLeft: "auto", justifyContent: 'right', border: "none", width: "auto", background: "#144552ac", marginRight: "10%" }} block>
            Back to Search Page
        </Button>
        </div>
        <Carousel parksDescription={this.props.parksDescription} />

      </div>
    )
  }
}

export default PageInfo;
