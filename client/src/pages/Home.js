import React from 'react';
// components
import SearchPage from "../components/Search/SearchPage";
import Container from "../components/Container/Container";
import Description from "../components/Description/Description"


function Home() {
  return (
    <Container className="homeContainer">
      <h1>Where do you want to go?</h1>
      <SearchPage />
      <br></br> 
      <Description />
    </Container>
  )
}

export default Home;
