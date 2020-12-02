import React, { Component } from 'react';
// components
import PageInfo from "./PageInfo"
import StateDropdown from "./StateDropdown"
import "../PageInfo/PageInfo.css";
import axios from "axios";

class StartPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startSearch: "",
      stateCode: 'AL'
    }
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
    this.handleStateCode = this.handleStateCode.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleStateCode(stateCode) {
    this.setState({stateCode: stateCode}, ()=>{
      console.log(this.state.stateCode);
    });
  }

  handleSubmitSearch(e) {
    e.preventDefault();
    this.setState({showStart: true})


    const searchName = (this.state.startSearch.split(' ').join('%20'));
    
    const queryUrl = `https://developer.nps.gov/api/v1/parks?stateCode=${this.state.stateCode}&limit=5&${searchName === "" ? "" : `q=${searchName}&`}api_key=4Kq5GQcxsnsiytDTgwKcaSBg4c6p3g35ACpCfOeF`;
    console.log(queryUrl);
    console.log(this.state.stateCode);
    axios.get(queryUrl).then((res) => {
      console.log(res);

      this.setState({parksDescription: res.data.data})
      
      return ;

    })
  };

  handleOnChange (e) {
    e.preventDefault();
    this.setState({ startSearch: e.target.value }, () => {
    })

  }

  render () {
    if(this.state.parksDescription) {
      return (
        <PageInfo 
          parksDescription={this.state.parksDescription} 
          parksImage={this.state.parksImage} 
          parksTitle={this.state.parksTitle} 
          lat={this.state.lat} 
          lng={this.state.lng}
          city={this.state.city}
          state={this.state.state}
          stateCode={this.state.stateCode}

        />
      
      )
    }
    return (
      <div>
      <form className="searchBar">
        <input onChange={this.handleOnChange} style= {{width: "300px", background:"#F2F1F9", border:"none", padding: "1%", marginRight:"2%"}} type="text" placeholder="Where we going?" value={this.state.search}></input>
        <StateDropdown className="searchbar" stateCodeFunction={this.handleStateCode}/>
        <button className="btn" id="searchBtn" style= {{border:"none", width: "20%", background: "#144552ac", marginLeft:"2%"}} onClick={this.handleSubmitSearch}>Go Out Yonder!</button>
        
        {/* <Carousel 
        parksDescription={this.state.parksDescription}
        /> */}
        
      </form>
    </div>
    )

  }

}

export default StartPage;