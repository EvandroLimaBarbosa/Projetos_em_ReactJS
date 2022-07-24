import React, { useState } from "react";
import SeuNome from "./SeuNome";

export default function StateLift() {
  const [nome, setNome] = useState();

  return (
    <div className="ContainerList">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/>
      <ul><li>{nome}</li></ul>
    </div>
  );
}
