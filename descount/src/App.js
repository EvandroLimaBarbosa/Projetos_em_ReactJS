import { BrowserRouter as Router} from "react-router-dom";
import Routes from "./routes";
import NavBar from "./components/layout/NavBar";

import styled from "styled-components";

function App() {
  const Body = styled.div`
  margin: 1em;
  padding: 15px;
  height: 60em;
  background:white;
  border: 0.01em solid lightgray;
  box-sizing: border-box;
  `
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
