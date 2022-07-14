import React from "react";
import styles from "./Pessoa.module.css";
import PropTypes from 'prop-types'

export default function Pessoa({ foto, nome, profissao, idade }) {
  return (
      <div className={styles.pessoaContainer}>
        <img className={styles.ImagemPessoa} src={foto} alt={nome} />
        <h2 className={styles.SegundoTituloPessoa}>Nome: {nome}</h2>
        <p className={styles.ParagrafoPessoa}>Idade: {idade}</p>
        <p className={styles.ParagrafoPessoa}>Profissão: {profissao}</p>
    </div>
  );
}


Pessoa.defaultProps = {
  nome: 'Indefinido',
  idade: 0,
  foto: 'https://www.ecp.org.br/wp-content/uploads/2017/12/default-avatar-1.png',
  profissao: 'Indefinida'
}