import React from 'react';
// components
import SearchPage from "../components/Search/SearchPage";
import Container from "../components/Container/Container";


function Home() {
  return (
    <Container className="homeContainer">
      <h1>Where do you want to go?</h1>
      <SearchPage />
    </Container>
  )
}

export default Home;
