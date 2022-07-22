import React from "react";

export default function OutraLista({ itens}) {
  return (
    <div>
      <h3>Lista de coisas boas:</h3>
      {itens.length > 0 ? (
      itens.map((item, index) => (
        <p key={index}>{item}</p>
      )))
      :(
      <p>Não tem itens na lista</p> 
    )}
    </div>
  );
}
