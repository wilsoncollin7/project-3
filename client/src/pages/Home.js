import React from 'react';
// components
import Container from "../components/Container/Container"
import SearchPage from "../components/Search/SearchPage";
import Description from "../components/Description/Description"
import Map from "../components/Map/Map"
import "../components/Search/Search.css"

function Home() {
  return (
    <div>
      <Container className="searchContainer">
        <h1>Where do you want to go?</h1>
        <SearchPage />
      </Container>
      <Description />
      <Map />
    </div>
  )
}

export default Home;
