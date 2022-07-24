import React from "react";
import OutraLista from "./OutraLista";

export default function RenderList() {
  const meusItens = ["React", "Vue", "Angular"];

  return (
    <div className="ContainerList">
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
    </div>
  );
}
