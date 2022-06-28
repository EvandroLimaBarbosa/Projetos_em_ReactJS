import React, { useState } from "react";
import "./Calculator.css";
import { Box } from "@mui/system";
import Button from "../botoes/Button";


export default function Calculator({}) {
  const [num, setNum] = useState(0);
  const inputNum = () => {
    console.log();
    setNum(num + 1);
  };
  return (
    <div>
      <Box m={7} />
      <div className="container">
        <h1 className="container_calculo_aqui">{}</h1>
        <h1 className="container_resultado">{}</h1>

        <Button value="simbolo" carac="C" />
        <Button value="simbolo" carac="&#9003;" />
        <Button value="simbolo" carac="%" />
        <Button value="simbolo" carac="x" />
      <Button teste={()=>{console.log('COMO PUXA O CARACTERE DO BUTTON ????? CARALHOOOO')}}  value="numero" carac={7} />
        <Button value="numero" carac={8} />
        <Button value="numero" carac={9} />
        <Button value="simbolo" carac="÷" />
        <Button value="numero" carac={4} />
        <Button value="numero" carac={5} />
        <Button value="numero" carac={6} />
        <Button value="simbolo" carac="-" />
        <Button value="numero" carac={1} />
        <Button value="numero" carac={2} />
        <Button value="numero" carac={3} />
        <Button value="simbolo" carac="+" />
        <Button value="numero" estilo={{ width: "6.14em" }} carac="0" />
        <Button value="numero" carac="." />
        <Button value="simbolo" estilo={{ background: "darkblue" }} carac="=" />
      </div>
    </div>
  );
}
