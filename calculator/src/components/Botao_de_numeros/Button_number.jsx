import React, { useState } from "react";
import "./Button_number.css";

export default function Button_number({ carac, estilo, evento}) {
    return (
    <div className="botao">
      <button onClick={evento} style={estilo} className="number">{carac}</button>
    </div>
  );
}
