import React, { useState } from "react";
import "./Calculator.css";
import Button from "../botoes/Button";

export default function Calculator({}) {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [simbol, setSimbol] = useState(0);
  const [calc, setCalc] = useState(0);
  const [apertouNoSimbolo, setApertouNoSimbolo] = useState(0);
  const [insertDepoisDoSimbolo, setinsertDepoisDoSimbolo] = useState(false);
  const [trava, setTrava] = useState(false);

  const limpar = () => {
    setCalc(0);
    setNum(0);
    setApertouNoSimbolo(0);
    setOldNum(0);
    setinsertDepoisDoSimbolo(false);
  };

  const insert = (res) => {
    setTrava(false)
    if (num.length >= 10) {
      console.log("não da mais");
    } else if (num === 0 && apertouNoSimbolo === 0) {
      setNum(res);
      console.log("primeira função do insert");
    } else if (apertouNoSimbolo >= 1 && !insertDepoisDoSimbolo) {
      setOldNum(num);
      setNum(res);
      setinsertDepoisDoSimbolo(true);
      console.log("segunda função do insert");
    } else if (insertDepoisDoSimbolo) {
      setNum(`${num}${res}`);
      console.log("terceira função do insert função do insert");
    } else {
      setNum(`${num}${res}`);
      console.log("quarta função do insert");
    }
  };

  function insertsimbolo(res) {
    console.log("old num: " + oldNum);
    if (apertouNoSimbolo === 0) {
      setCalc(`${num} ${res}`);
      console.log("primeiro");
    } else if (!trava){
      var calculoFinal = `${num} ${res} ${oldNum}`.replace('x','*').replace('÷','/')
      setNum(eval(calculoFinal));
      setCalc(`${eval(calculoFinal)} ${res}`);
      console.log("segundo");
      setTrava(true)
    } 
    setinsertDepoisDoSimbolo(false);
    setApertouNoSimbolo(apertouNoSimbolo + 1);
    setSimbol(res);
  }

  function apagar() {
    num.length <= 1 || num === 0
      ? setNum(0)
      : setNum(num.substring(0, num.length - 1));
  }

  const calcular = () => {
    if(trava){}
    var calculoFinal = (`${num} ${simbol} ${oldNum}`);
    var txtcalculoFinal = calculoFinal.replace('x','*').replace('÷','/')
    setCalc(`${calculoFinal} =`);
    setNum(eval(txtcalculoFinal))
    console.log(`QTD SIMBOLO ${apertouNoSimbolo}`);
    console.log(`
  resultadinho: ${calculoFinal}
  res: ${simbol}
  oldnum: ${oldNum}
  num: ${num}
  apertouSimbolo: ${apertouNoSimbolo}
  insertDepoisdoSimbolo: ${insertDepoisDoSimbolo} `);
  
  };

  const porcentagem = () => {
    setNum(num / 100);
    console.log("vrau");
  };

  return (
    <div>
      <div className="container">
        <h1 className="container_calculo_aqui">{calc}</h1>
        <h1 className="container_resultado">{num}</h1>

        <Button value="C" carac="simbolo" onClick={limpar} />
        <Button value="&#9003;" carac="simbolo" onClick={apagar} />
        <Button
          value="%"
          onClick={() => {
            porcentagem();
          }}
          carac="simbolo"
        />
        <Button
          value="x"
          onClick={() => {
            insertsimbolo("x");
          }}
          carac="simbolo"
        />
        <Button
          value={7}
          carac="numero"
          onClick={() => {
            insert(7);
          }}
        />
        <Button
          value={8}
          carac="numero"
          onClick={() => {
            insert(8);
          }}
        />
        <Button
          value={9}
          carac="numero"
          onClick={() => {
            insert(9);
          }}
        />
        <Button
          value="÷"
          onClick={() => {
            insertsimbolo("÷");
          }}
          carac="simbolo"
        />
        <Button
          value={4}
          carac="numero"
          onClick={() => {
            insert(4);
          }}
        />
        <Button
          value={5}
          carac="numero"
          onClick={() => {
            insert(5);
          }}
        />
        <Button
          value={6}
          carac="numero"
          onClick={() => {
            insert(6);
          }}
        />
        <Button
          value="-"
          onClick={() => {
            insertsimbolo("-");
          }}
          carac="simbolo"
        />
        <Button
          value={1}
          carac="numero"
          onClick={() => {
            insert(1);
          }}
        />
        <Button
          value={2}
          carac="numero"
          onClick={() => {
            insert(2);
          }}
        />
        <Button
          value={3}
          carac="numero"
          onClick={() => {
            insert(3);
          }}
        />
        <Button
          value="+"
          onClick={() => {
            insertsimbolo("+");
          }}
          carac="simbolo"
        />
        <Button
          value={0}
          carac="numero"
          onClick={() => {
            insert(0);
          }}
          estilo={{ width: "6.14em" }}
        />
        <Button
          value={"."}
          carac="numero"
          onClick={() => {
            insert(".");
          }}
        />
        <Button
          value="="
          carac="simbolo"
          onClick={calcular}
          estilo={{ background: "darkblue" }}
        />
      </div>
    </div>
  );
}
