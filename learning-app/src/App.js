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


{/* <ListaManual/>
      <RenderList/>


        <Condicional/>
        <Form />
        <Evento numero={1} />
      <div className="ContainerApp">
        <Pessoa
          nome="Evandro"
          idade="22"
          profissao="Programador"
          foto="https://avatars.githubusercontent.com/u/96010876?s=400&u=1dff6ade3e9ddc2696e711a15c20a9ef784c4838&v=4"
        />
        <Pessoa
          nome="Leonardo"
          idade="17"
          profissao="Programador"
          foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_l-yO-axUTUnTOxJqTbbO-vJ6RZ5XC6X44A&usqp=CAU"
        />
        <Pessoa />
        <Pessoa />
        <Pessoa />
        <Pessoa />
        <Pessoa />
        <Pessoa />
      </div>
        <List />*/}




    </div>
  );
}

export default App;
