import React, { useState } from "react";
import "./Calculator.css";
import { Box } from "@mui/system";
import Button_caracter from "../botoes/Botao_de_caracteres/Button_caracter";
import Button_number from "../Botao_de_numeros/Button_number";

export default function Calculator({}) {
  const [num, setNum] = useState(0);
  const inputNum = () => {
    console.log();
    setNum(num + 1);
  }
  return (
    <div>
      <Box m={7} />
      <div className="container">
        <h1 className="container_calculo_aqui">{num}</h1>
        <h1 className="container_resultado">{num}</h1>

        <Button_caracter  carac="C" />
        <Button_caracter carac="&#9003;" />
        <Button_caracter carac="%" />
        <Button_caracter carac="x" />
        <Button_number evento={inputNum} carac={7} />
        <Button_number carac={8} />
        <Button_number carac={9} />
        <Button_caracter carac="÷" />
        <Button_number carac={4} />
        <Button_number carac={5} />
        <Button_number carac={6} />
        <Button_caracter carac="-" />
        <Button_number carac={1} />
        <Button_number carac={2} />
        <Button_number carac={3} />
        <Button_caracter carac="+" />
        <Button_number
          estilo={{
            width: "6.14em",
          }}
          carac="0"
        />
        <Button_number carac="." />
        <Button_caracter
          estilo={{
            background: "darkblue",
          }}
          carac="="
        />
      </div>
    </div>
  );
}
