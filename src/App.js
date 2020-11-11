import './App.css';
import bgImage from "./components/Background/backgroundImage.png"
// import Background from "./components/Background"
// import Description from "./components/Description"
// import Display from "./components/Display"
// import Navbar from "./components/Navbar"
// import Map from "./components/Map"
// import Search from "./components/Search"


function App() {
  return (
    <div className="App">
      <div
        class="bg_image"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5"
        }}>
        </div>
      {/*<Navbar />
      <Background /> 
      <Display />
        <Search />
        <Description />
        <Map /> */}
    </div>
  );
}

export default App;
