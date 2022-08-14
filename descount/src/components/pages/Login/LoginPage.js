import React, { useState } from "react";

import "./style.css";

const LoginPage = () => {
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verSenha, setVerSenha] = useState("password");

  const funVerSenha = (e) => {
    e.preventDefault();
    verSenha === "password" ? setVerSenha("text") : setVerSenha("password");
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit", { email, password } );
  }
  return (
    <div id="login">
      <h1 className="title">Fazer Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input 
          type="email" 
          name="email" 
          id="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="field">
          <label htmlFor="email">Senha</label>
          <input 
          type={verSenha}
          name="password" 
          id="password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={(e) => funVerSenha(e)} type="submit">Ver Senha</button>
        </div>
        <div className="actions">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
