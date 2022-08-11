import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../routes";
import NavBar from "../layout/NavBar";

import styled from "styled-components";

function TelaPrincipal() {
  const Body = styled.div`
    text-align: left;

    margin: 1em;
    padding: 15px;
    height: 60em;
    background: white;
    border: 0.01em solid lightgray;
    box-sizing: border-box;
    border-radius: 0.3em;
  `
  
  ;
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Body>
          <Routes />
        </Body>
      </Router>
    </div>
  );
}

export default TelaPrincipal;
