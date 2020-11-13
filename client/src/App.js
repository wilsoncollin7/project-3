import './App.css';
import Background from "./components/Background/Background";
import SearchPage from "./components/Search/SearchPage";
import Nav from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Nav />
      <Background />
      <SearchPage />
    </div>
  );
}

export default App;
