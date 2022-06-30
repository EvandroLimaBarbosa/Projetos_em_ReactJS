import React, { useState } from "react";
import "./Calculator.css";
import Button from "../botoes/Button";

export default function Calculator({}) {
  const [num, setNum] = useState(0);
  const [calc, setCalc] = useState(0);

  const limpar = () => {
    setNum("0");
    setCalc(" ");
  }

  var iniciou = 0;
  var trava = 0;
  var reset = 0;

  function insert(res) {
    console.log(reset);
    console.log(trava);
    if (reset == 1) {
      setNum(res);
      setCalc(" ");
      reset = 0;
    } 
    else if (calc != " ") {
      console.log(trava);
      if (trava == 0) {
        setNum(res);
        trava = 1;
      } else {
        setNum(`${num}${res}`);
      }
    } else {
      if (num == "0") {
        setNum(res);
      } else {
        setNum(`${num}${res}`);
      }
    }
  }

  function insertsimbolo(res) {
    console.log("valor do resultado:" + num);
    console.log("valor do calculo:" + calc);
    if (iniciou == 0) {
      if (reset == 1) {
        setCalc(`${num} ${res} `);
        reset = 0;
      } else {
        setCalc(`${num} ${res} `);
        trava = 0;
      }
      iniciou = 1
    } else {
      if (reset == 1) {
        setCalc(`${res} ${num} `);
        reset = 0;
      } else {
        setCalc(`${calc} ${res} ${num}`);
        trava = 0;
      }
    }
  }

  function apagar() {
    if (num.length == "1") {
      setNum(0);
    } else {
      setNum(num.substring(0, num.length - 1));
    }
  }

  function calcular() {
    setCalc(`${num} ${calc} `);
    var valorfinal = calc;
    setNum(eval(valorfinal));
    console.log(valorfinal);

    setCalc(`${calc}  =`);

    reset = 1;
  }

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
            insertsimbolo("%");
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
