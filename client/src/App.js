import './App.css';
import Background from "./components/Background/Background"
// import Description from "./components/Description"
// import Display from "./components/Display"
// import Navbar from "./components/Navbar"
// import Map from "./components/Map"
import SearchPage from "./components/Search/SearchPage"


function App() {
  return (
    <div className="App">
      
      <Background />
      {/* <Navbar />
      
      <Display />
        <Description />
        <Map /> */}
      <SearchPage />

    </div>
  );
}

export default App;
