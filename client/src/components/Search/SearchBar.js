import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <>
    <input 
    className="searchBar"
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Search by city or zip code"}
     onChange={(e) => setKeyword(e.target.value)}
    />
    <br></br>
    </>
  );
}

export default SearchBar