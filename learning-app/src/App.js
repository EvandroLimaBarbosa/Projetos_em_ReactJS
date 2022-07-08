import "./App.css";
import Pessoa from "./components/Pessoa";
import List from "./components/list";

function App() {
  return (
    <div className="ContainerGeral">
      <div className="ContainerApp">
        <Pessoa
          nome="Evandro"
          idade="22"
          profissao="Programador"
          foto="https://avatars.githubusercontent.com/u/96010876?s=400&u=1dff6ade3e9ddc2696e711a15c20a9ef784c4838&v=4"
        />
        <Pessoa />
        <Pessoa />
        <Pessoa />
        <Pessoa />
        <Pessoa />
        <Pessoa />
        <Pessoa />
      </div>
      <div className="ContainerList">
        <List />
      </div>
    </div>
  );
}

export default App;
