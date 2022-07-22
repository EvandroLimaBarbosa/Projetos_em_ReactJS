import React, { useState } from "react";

export default function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail() {
        setUserEmail()
    }

  return (
    <div className="ContainerList">
      <h1>Renderização Condicional</h1>
      <h2>Cadastre o seu E-mail:</h2>
      <form>
        <input type="email" placeholder="Digite o seu E-mail..." onChange={(e) => setEmail(e.target.value)}></input>
        <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>
      </form>
      {userEmail && (
        <div>
            <p>O e-mail do usuario é: {userEmail}</p>
            <button onClick={limparEmail}>Limpar e-mail</button>
        </div>
      )}
    </div>
  );
}
