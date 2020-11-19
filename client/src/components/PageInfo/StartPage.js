import React, { Component } from 'react';
// components
import PageInfo from "./PageInfo"
import "../PageInfo/PageInfo.css";


class StartPage extends Component {
  constructor(props) {
    super(props)
    this.state = [{
      showStart: false
    }]
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
      </form>
    </div>
    )

  }
//   startPage(props) {
//     const submitSearch = PageInfo.props.SearchButton();
//     console.log("this is from Display")
//     if (submitSearch === true) {
//       this.render(
//         <PageInfo />
//       )
//     }
//     this.render (
//       <div>
//         <form className="searchBar">
//           <input style= {{width: "300px", background:"#F2F1F9", border:"none", padding: "1%"}} type="text" placeholder="Where we going?" onChange={this.searchChange} value={this.state.seacrh}></input>
//           <button className="btn btn-success" onClick={this.SearchButton}>Go Out Yonder!</button>
//         </form>
//       </div>
//     )
//   }
  
// }

}

export default StartPage;