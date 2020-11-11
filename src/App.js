import './App.css';
import Background from "./components/Background"
import Description from "./components/Description"
import Display from "./components/Display"
import Navbar from "./components/Navbar"
import Map from "./components/Map"
import Search from "./components/Search"


function App() {
  return (
    <div className="App">
      <h1>project 3</h1>
      <Navbar />
      <Background />
      <Display />
        <Search />
        <Description />
        <Map />
    </div>
  );
}

export default App;
