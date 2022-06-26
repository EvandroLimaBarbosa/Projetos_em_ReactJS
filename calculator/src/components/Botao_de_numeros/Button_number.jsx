import React from "react";
import "./Button_number.css";

export default function Button_number({ carac, estilo}) {
  return (
    <div className="botao">
      <button style={estilo} className="number">{carac}</button>
    </div>
  );
}
