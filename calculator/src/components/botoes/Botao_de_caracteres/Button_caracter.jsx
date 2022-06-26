import React from "react";
import "./Button_caracter.css"

export default function Botton({ carac , estilo}) {
  return (
    <div className="botao">
      <button style={estilo} className="simbol">{carac}</button>
    </div>
  );
}
