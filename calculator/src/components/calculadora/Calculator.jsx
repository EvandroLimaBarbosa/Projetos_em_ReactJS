import React, { useState } from "react";
import "./Calculator.css";
import Button from "../botoes/Button";


export default function Calculator({}) {
  const [num, setNum] = useState(0);
  
  const clearResult = () => {
    setNum('')
  }
  return (
    <div>
      <div className="container">
        <h1 className="container_calculo_aqui">{}</h1>
        <h1 className="container_resultado">{num}</h1>

        <Button value="C" carac="simbolo" onClick={clearResult}/>
        <Button value="&#9003;" carac="simbolo"/>
        <Button value="%" carac="simbolo"/>
        <Button value="x" carac="simbolo"/>
        <Button value={7} carac="numero" onClick={()=>{setNum(7)}}/>
        <Button value={8} carac="numero" onClick={()=>{setNum(8)}}/>
        <Button value={9} carac="numero" onClick={()=>{setNum(9)}}/>
        <Button value="÷" carac="simbolo"/>
        <Button value={4} carac="numero" onClick={()=>{setNum(4)}}/>
        <Button value={5} carac="numero" onClick={()=>{setNum(5)}}/>
        <Button value={6} carac="numero" onClick={()=>{setNum(6)}}/>
        <Button value="-" carac="simbolo"/>
        <Button value={1} carac="numero" onClick={()=>{setNum(1)}}/>
        <Button value={2} carac="numero" onClick={()=>{setNum(2)}}/>
        <Button value={3} carac="numero" onClick={()=>{setNum(3)}}/>
        <Button value="+" carac="simbolo"/>
        <Button value={0} carac="numero" onClick={()=>{setNum(0)}} estilo={{ width: "6.14em" }}/>
        <Button value={8} carac="."/>
        <Button value="=" carac="simbolo" estilo={{ background: "darkblue" }}/>
      </div>
    </div>
  );
}
