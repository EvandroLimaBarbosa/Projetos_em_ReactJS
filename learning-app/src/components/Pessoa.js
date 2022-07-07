import React from "react";
import styles from "./Pessoa.module.css";

export default function Pessoa({ foto, nome, profissao, idade }) {
  return (
    <div className={styles.Pessoa}>
      <div className={styles.pessoaContainer}>
        <img src={foto} alt={nome} />
        <h2>Nome: {nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
      </div>
    </div>
  );
}
