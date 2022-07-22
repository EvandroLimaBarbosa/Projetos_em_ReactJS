import React, { useState } from "react";

export default function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(name)
        console.log(senha)
        console.log("Cadastrou o usuario!")
    }

    const [name, setName] = useState()
    const [senha, setSenha] = useState()

  return (
    <div className="ContainerList">
      <h1>Meu cadastro:</h1>
        <form onSubmit={cadastrarUsuario}>
          <div>
            <label htmlFor="name">Nome: </label>
            <input type="text" id="name" placeholder="Digite o seu nome" onChange={(e) => setName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="password">Senha: </label>
            <input type="password" id="password" placeholder="Digite a sua senha" onChange={(e) => setSenha(e.target.value)}/>
          </div>
          <div>
            <input type="submit" value="Cadastrar" />
          </div>
        </form>
      
    </div>
  );
}
