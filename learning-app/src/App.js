import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./routes";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <div className="ContainerList">

    <Router>
      <NavBar/>
        <Routes/>
    </Router>
    </div>
  );
}

export default App;
