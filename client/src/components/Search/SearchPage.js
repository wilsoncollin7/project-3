import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SearchButton from "./SearchButton";
import TrailList from './SearchList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [trailListDefault, setTrailListDefault] = useState();
  const [trailList, setTrailList] = useState();

  const fetchData = async () => {
    // this is where the API call site will go
    return await fetch('')
      .then(response => response.json())
      .then(data => {
         setTrailList(data) 
         setTrailListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = trailListDefault.filter(trail => {
      return trail.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setTrailList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <SearchBar 
       value={input} 
       onChange={updateInput}
      />
      <SearchButton />
      <TrailList trailList={trailList}/>
    </>
   );
}

export default SearchPage