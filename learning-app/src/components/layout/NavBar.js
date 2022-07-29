import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "right",
        margin: "0",
        padding: "1em",
        backgroundColor: "white",
        minHeight: "1em",
      }}
    >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Condicional">Condicional</Link>
        </li>
        <li>
          <Link to="/Form">Form</Link>
        </li>
        <li>
          <Link to="/Evento">Evento</Link>
        </li>
        <li>
          <Link to="/ListadePessoas">Lista de Pessoas</Link>
        </li>
        <li>
          <Link to="/List">List</Link>
        </li>
      </ul>
    </div>
  );
}
