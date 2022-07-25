import React, { useState } from "react";
import Saudacao from "./Saudacao";
import SeuNome from "./SeuNome";

export default function StateLift() {
  const [nome, setNome] = useState();

  return (
    <div className="ContainerList">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>
    </div>
  );
}
