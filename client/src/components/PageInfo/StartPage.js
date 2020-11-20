import React, { Component } from 'react';
// components
import PageInfo from "./PageInfo"
import StateDropdown from "./StateDropdown"
import "../PageInfo/PageInfo.css";
import axios from "axios";

class StartPage extends Component {
  constructor(props) {
    super(props)
    this.state = {StartPage: [{
      showStart: false,
      startSearch: "",
      parksDescription: null,
      parksImage: null
    }]}
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);

    this.handleOnChange = this.handleOnChange.bind(this);

  }

  handleSubmitSearch(e) {
    e.preventDefault();
    this.setState({showStart: true})

    const searchName = (this.state.startSearch.split(' ').join('%20'));

    const queryUrl = `https://developer.nps.gov/api/v1/parks?q=${searchName}&api_key=4Kq5GQcxsnsiytDTgwKcaSBg4c6p3g35ACpCfOeF`;

    console.log(this.state);

    axios.get(queryUrl).then((res) => {
      
      // console.log(res.data.data[0].images[0].url);

      this.setState({parksDescription: res.data.data[0]})
      this.setState({parksImage: res.data.data[0].images[0].url})

      return ;

    })
  };

  handleOnChange (e) {
    e.preventDefault();
    this.setState({ startSearch: e.target.value }, () => {
      console.log(e.target.value);
    })

  }

  render () {
    if(this.state.showStart && this.state.parksDescription && this.state.parksImage) {
      return (
        <PageInfo parksDescription={this.state.parksDescription} parksImage={this.state.parksImage} />
      
      )
    }
    return (
      <div>
      <form className="searchBar">
        <input onChange={this.handleOnChange} style= {{width: "300px", background:"#F2F1F9", border:"none", padding: "1%", marginRight:"2%"}} type="text" placeholder="Where we going?" value={this.state.search}></input>
        <StateDropdown className="searchbar" />
        <button className="btn" id="searchBtn" style= {{border:"none", width: "20%", background: "#144552ac", marginLeft:"2%"}} onClick={this.handleSubmitSearch}>Go Out Yonder!</button>
        
      </form>
    </div>
    )

  }

}

export default StartPage;