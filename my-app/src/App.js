import React, {useState} from "react";
import NavBar from "./components/Navbar"
import Home from "./components/Home";
import Links from "./components/Links"
import './App.css';
import SearchBar from "./components/SearchBar";
import StudentData from "./Data.json";

function App() {
  const [page, setPage] = useState("/")
    
  function getCurrentPage() {
      switch(page) {
          case "/":
              return <Home />
          case "/links":
              return <Links />
          default:
            return <Links />
            
        }
    }
  return (
    <div classname="App">
      <h1>Mad labs inc</h1>
      <SearchBar placeholder="Enter your Name" data={StudentData}/>
      <NavBar onChangePage={setPage} />
      {getCurrentPage()}
      </div>
   );
}

export default App;
