import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import NavBar from "./components/layout/NavBar";

import styled from "styled-components";

function App() {
  const Body = styled.div`
  /* editar a barra de rolagem */
    scroll


    text-align: left;

    margin: 1em;
    padding: 15px;
    height: 60em;
    background: white;
    border: 0.01em solid lightgray;
    box-sizing: border-box;
    border-radius: 0.3em;
  `;
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

export default App;
