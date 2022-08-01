import React from "react";
import "./App.scss";
import { BrowserRouter as Router} from "react-router-dom";
import Routes from "./routes";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <div className="ContainerList">
          <Routes />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
