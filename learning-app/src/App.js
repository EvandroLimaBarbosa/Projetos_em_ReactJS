import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {
  return (
    <div className="App">
      <Pessoa nome="Evandro" idade="22" profissao="Programador" foto="https://avatars.githubusercontent.com/u/96010876?s=400&u=1dff6ade3e9ddc2696e711a15c20a9ef784c4838&v=4"/>
      <Pessoa/>
    </div>

  );
}

export default App;
